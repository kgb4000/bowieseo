import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/button'

export default function ContactForm({ h2, p }) {
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
    phone: '',
    message: '',
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

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      'https://bmsqq562he.execute-api.us-east-1.amazonaws.com/prod/bowieseoemail'

    const body = JSON.stringify({
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      message: inputs.message,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })

    const text = await res.text()
    handleResponse(res.status, text)
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
        phone: '',
        message: '',
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
  return (
    <>
      <section>
        <div className="container">
          <Conversion>
            <div className="ready-text">
              <h2>{h2}</h2>
              <p className="sub-text">{p}</p>
            </div>
            <form onSubmit={handleOnSubmit}>
              <div className="form-input">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  onChange={handleOnChange}
                  required
                  value={inputs.name}
                />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
              </div>
              {/* <div className="form-input">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  type="text"
                  onChange={handleOnChange}
                  required
                  value={inputs.phone}
                />
              </div> */}
              <div className="form-input">
                <label htmlFor="message">Website *</label>
                <textarea
                  id="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                  placeholder="Please enter your website domain name and any other details you want us to know."
                ></textarea>
              </div>
              <SubmitButton
                type="submit"
                disabled={status.submitting || isEnabled}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'I want more Traffic!!!'
                    : 'Got it!'
                  : 'Submitting...'}
              </SubmitButton>
              {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <div className="success">We Got Your Message!</div>
              )}
            </form>
          </Conversion>
        </div>
      </section>
    </>
  )
}

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: #ff5200;
  text-align: center;
`

const Conversion = styled.div`
  form {
    margin-top: 3rem;
    max-width: 600px;
    margin: 0 auto;
  }
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
  }

  textarea {
    height: 200px;
  }

  label {
    margin-bottom: 1rem;
  }
`
