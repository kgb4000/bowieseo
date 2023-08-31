import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    website: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.name > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        name: '',
        email: '',
        website: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      'https://gjkpiayn2a.execute-api.us-east-1.amazonaws.com/production/freeminiseoaudit'

    const body = JSON.stringify({
      name: inputs.name,
      email: inputs.email,
      website: inputs.website,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })

    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <>
      <div>
        <Conversion>
          <form onSubmit={handleOnSubmit}>
            <div className="form-input">
              <input
                id="name"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.name}
                placeholder="Name *"
              />
            </div>
            <div className="form-input">
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
                placeholder="Email *"
              />
            </div>
            <div className="form-input">
              <input
                id="website"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.website}
                placeholder="Website *"
              />
            </div>
            <SubmitButton
              type="submit"
              disabled={status.submitting || isEnabled}
            >
              {!status.submitting
                ? !status.submitted
                  ? 'Take My Business to the Next Level!'
                  : 'Got it!'
                : 'Submitting...'}
            </SubmitButton>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">We Got Your Info!</div>
            )}
          </form>
        </Conversion>
      </div>
    </>
  )
}

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0.5rem 0;
  color: #fff;
  background: #cf0a0a;
  text-align: center;
`

const Conversion = styled.div`
  form {
    max-width: 900px;
    margin: 0 auto;
  }
`
