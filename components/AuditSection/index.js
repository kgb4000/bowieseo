/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import OfferVid from '../OfferVideo'
import OfferForm from '../OfferFormSection'

const AuditSection = () => {
  return (
    <section className="dots-background">
      <div className="container">
        <AuditElements>
          <h2>
            Is Your Website Ranking Higher Than Your Competitors Website on
            Google?
          </h2>
          <p className="big-p">
            If Not, Get a Free Mini Free SEO Audit and See What it Takes to Rank
            Higher than Your Competiton!
          </p>
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
                Get actionable advice and recommendations to improve your SEO
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
