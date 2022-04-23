import { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import ReactPlayer from 'react-player'

const AuditSection = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    firstName: '',
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

  console.log(inputs)

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    const body = JSON.stringify({
      firstName: inputs.firstName,
      email: inputs.email,
      website: inputs.website,
    })

    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    console.log(body)

    const text = await res.text()
    handleResponse(res.status, text)
  }

  const isEnabled = inputs.email.length && inputs.firstName > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        firstName: '',
        email: '',
        website: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  return (
    <section>
      <div className="container">
        <AuditElements>
          <div className="video-player player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/YQ9VpQQWtEw"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <div className="form-section">
            <form onSubmit={handleOnSubmit}>
              <div className="form-input">
                <label htmlFor="firstName">Name *</label>
                <input
                  id="firstName"
                  type="text"
                  onChange={handleOnChange}
                  required
                  value={inputs.firstName}
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
              <div className="form-input">
                <label htmlFor="website">Website *</label>
                <input
                  id="website"
                  type="text"
                  onChange={handleOnChange}
                  required
                  value={inputs.website}
                />
              </div>
              {/* <button type="submit">Submit</button> */}
              <SubmitButton
                type="submit"
                disabled={status.submitting || isEnabled}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'I want my Free Mini SEO Audit!'
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
          </div>
        </AuditElements>
      </div>
    </section>
  )
}

export default AuditSection

const AuditElements = styled.div`
  .form-section {
    form {
      margin-top: 4rem;
      margin: 0 auto;
    }
    input {
      width: 100%;
      padding: 1rem;
      margin-top: 0.8rem;
      margin-bottom: 1rem;
    }

    label {
      margin-bottom: 1rem;
    }
  }
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  background: #ff5200;
  text-align: center;
`
