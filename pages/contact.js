/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import MainLayout from '../components/MainLayout'
import PageHero from '../components/PageHeroSection'
import ContactForm from '../components/Contact-Form'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const Contact = () => {
  const SEO = {
    title: 'Contact Us to Learn How SEO Can Help Grow Your Business.',
    description:
      "Contact us if you have any questions about search engine optimization for your small business, and let's see how we can help your business GROW.",
    canonical: 'https://bowieseo.com/contact',
    openGraph: {
      title: 'Contact Us to Learn How SEO Can Help Grow Your Business.',
      description:
        "Contact us if you have any questions about search engine optimization for your small business, and let's see how we can help your business GROW.",
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <PageHero
          heading="Contact"
          subText="Let us help you rank higher in the search engines, get more web traffic, reach more customers, and make more money."
          heroBtnLink={calendly}
          buttonText="Book a call"
        />
        <section>
          <div className="small-container">
            <h2>Contact Bowie SEO</h2>
            <p>
              If you would like to get in touch with us and learn how search
              engine optimization can help your business, please feel free to
              reach out.
            </p>
            <p>
              We are happy to answer any questions you have about my SEO
              services and how search engine optimization can help your business
              grow.
            </p>
            <p>You can reach us in the following ways: </p>
            <ul>
              <li>
                By phone: <a href="tel:1-240-266-0588">(240) 266-0588</a>
              </li>
              <li>
                By email:{' '}
                <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
              </li>
              <li>Or fill out the form below</li>
            </ul>
          </div>
        </section>
        <ContactForm h2="Fill out the form and we will get back to you ASAP!" />
      </MainLayout>
    </>
  )
}

export default Contact
