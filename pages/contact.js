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
        {/* <PageHero
          heading="Contact"
          subText="Let us help you rank higher in the search engines, get more web traffic, reach more customers, and make more money."
          heroBtnLink="tel:+2402660588"
          buttonText="Call (240) 266-0588"
        /> */}
        <section>
          <div className="container">
            <h1 className="title">Contact Us</h1>
            <p className="center">We want to hear from you</p>
          </div>
        </section>
        <section>
          <div className="small-container">
            <p>
              Phone: <a href="tel:1-240-266-0588">(240) 266-0588</a>
            </p>
            <p>
              Email: <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
            </p>
            <p>Or fill out the form below</p>
          </div>
        </section>
        <ContactForm />
      </MainLayout>
    </>
  )
}

export default Contact
