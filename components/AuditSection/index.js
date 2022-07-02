/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import styled from 'styled-components'
import OfferVid from '../OfferVideo'
import OfferForm from '../OfferFormSection'

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
    <section className="dots-background">
      <div className="container">
        <AuditElements>
          <h2>Is Your Website Ranking High in Google?</h2>
          <p className="big-p">If Not, Get a Free Mini Free SEO Audit!</p>
          <div className="offer-section">
            <OfferVid />
            <ul>
              <li>
                Check your website's SEO and discover why you're not appearing
                in Google Map Pack or the search results.
              </li>
              <li>
                Get a personalized video audit for your company's website,
                delivered to your email.
              </li>
              <li>
                Get actionable adviceand recommendations to improve your SEO
                rankings and performance.
              </li>
            </ul>
            <OfferForm />
          </div>
        </AuditElements>
      </div>
    </section>
  )
}

export default AuditSection

const AuditElements = styled.div`
  max-width: 700px;
  .form-section {
    form {
      margin-top: 4rem;
      margin: 0 auto;
    }
    input {
      width: 100%;
      padding: 1rem;
      margin: 0.5rem 0;
    }

    label {
      margin-bottom: 1rem;
    }
  }
`
