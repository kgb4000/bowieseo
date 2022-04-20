/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PageHero from '../components/PageHeroSection'
import ContactForm from '../components/Contact-Form'

const Contact = () => {
  return (
    <>
      <PageHero
        heading="Contact Us"
        subText="Let us help you rank higher in the search engines, get more web traffic, reach more customers, and make more money."
        heroBtnLink="/contact"
        buttonText="Book a call"
      />
      <section>
        <div className="container">
          <h2>Contact Bowie SEO</h2>
          <p>
            If you would like to get in touch with us and learn how search
            engine optimization can help your business, please feel free to
            reach out.
          </p>
          <p>
            We are happy to answer any questions you have about my SEO services
            and how search engine optimization can help your business grow.
          </p>
          <p>You can reach us in the following ways: </p>
          <ul>
            <li>
              By phone: <a href="tel:1-240-266-0588">(240) 266-0588</a>
            </li>
            <li>
              By email: <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
            </li>
            <li>Or fill out the form below</li>
          </ul>
        </div>
      </section>
      <ContactForm h2="Fill out the form and we will get back to you ASAP!" />
    </>
  )
}

export default Contact
