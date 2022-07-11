import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const OfferFormSection = () => {
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
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
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
    <div className="form-section">
      <form onSubmit={handleOnSubmit}>
        <div className="form-input">
          <input
            id="firstName"
            type="text"
            onChange={handleOnChange}
            required
            value={inputs.firstName}
            placeholder="First Name*"
          />
        </div>
        <div className="form-input">
          <input
            id="email"
            type="email"
            onChange={handleOnChange}
            required
            value={inputs.email}
            placeholder="Email*"
          />
        </div>
        <div className="form-input">
          <input
            id="website"
            type="text"
            onChange={handleOnChange}
            required
            value={inputs.website}
            placeholder="Website*"
          />
        </div>
        {/* <button type="submit">Submit</button> */}
        <SubmitButton type="submit" disabled={status.submitting || isEnabled}>
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
  )
}

export default OfferFormSection

const SubmitButton = styled(Button)`
  width: 100%;
  margin: 0.2rem 0;
  color: #fff;
  background: #ff5200;
  text-align: center;
  height: 60px;
`
