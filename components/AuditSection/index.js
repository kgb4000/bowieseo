/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import OfferVid from '../OfferVideo'
import OfferForm from '../OfferFormSection'

const AuditSection = () => {
  return (
    <section className="dots-background">
      <div className="small-container">
        <AuditElements>
          <h2>
            Stop Losing Money and Customers Because You're Not Showing up In
            Google?
          </h2>
          <OfferVid />
          <p className="big-p">
            Find Out Why You're Not Showing Up on Google, and Start Getting More
            Leads and Customers Without Paying for Ads!
          </p>
          {/* <div className="offer-section">
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
          </div> */}
        </AuditElements>
        <OfferForm />
      </div>
    </section>
  )
}

export default AuditSection

const AuditElements = styled.div`
  h2 {
    max-width: 100%;
  }
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
