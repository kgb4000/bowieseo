/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Wrapper, Contact } from '../components/CardSection'

import { NextSEO } from 'next-seo'

const About = () => {
  return (
    <>
      <PageHero
        heading="About Bowie SEO"
        subText="We are an SEO company in Maryland that helps businesses in Washington DC, and Virginia get found in the search engines."
        heroBtnLink="/contact"
        buttonText="Book a call"
      />
      <section>
        <div className="container">
          <h2>About Us</h2>
          <p>We are Bowie SEO.</p>
          <p>
            We help businesses in Maryland, DC, and Virginia like yours improve
            their organic rankings by making website better for search engines
            and for users .
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is to help small businesses in the DMV use search engine
            optimization to make more money for their companies.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to help one hundred small businesses in Maryland use
            search engine optimization. I will do this by:
          </p>
          <ol>
            <li>Teaching small businesses about SEO.</li>
            <li>
              Showing them how to incorporate it into their digital marketing.
            </li>
            <li>
              Running successful SEO campaigns for small businesses in DC,
              Maryland, and Virginia.
            </li>
            <li>Being an asset to my community.</li>
          </ol>
        </div>
      </section>
      <div className="btn">
        <Link href="/contact" passHref>
          <Button>Book a Call Today!</Button>
        </Link>
      </div>
      <section>
        <div className="container">
          <h2>Why Choose Bowie SEO Over Other SEO Companies?</h2>
          <h3>#1. We Only Specialize in SEO</h3>
          <p>
            We only specialize in SEO services. We don't do web development,
            search marketing, social media management, or any other types of
            digital marketing.
          </p>
          <p>
            We don't do web designing, Google ads, or social media marketing.
          </p>
          <p>
            Our focus is to help your business get more traffic leads and make
            more money with search engine optimization.
          </p>
          <p>
            If we didn't focus on SEO alone, we wouldn't consider ourselves SEO
            experts.
          </p>
          <h3>#2. We Become Partners, Not Just a Contractor</h3>
          <p>When you hire us, we work together.</p>
          <p>
            We become part of your company and our focus is to generate growth.
          </p>
          <p>
            We work together to make sure your business attracts more customers,
            generates more leads, ranks higher in the search engines, and makes
            more money.
          </p>
          <p>When you succeed, we succeed.</p>
          <h3>#3. Full Transparency</h3>
          <p>You don't have to ask us what we're doing.</p>
          <p>
            We're happy to show you and tell you. We'll never keep you in the
            dark and you'll never have wait a month to wonder what we're doing
            or what's going on with your campaign.
          </p>
          <h3>#4 . You Can Grow Without Us</h3>
          <p>Yes, it is true.</p>
          <p>You can continue to grow without us.</p>
          <p>
            You will still have success if you decide to leave us. Our goal is
            to build a foundation for your website that will continue to thrive
            without us.
          </p>
          <h3>#5 . We Focus on Results</h3>
          <p>Not just any results.</p>
          <p>We focus the results</p>
        </div>
      </section>
      {/* <InfoList {...missionObj} /> */}
      <section className="pain-section">
        <div className="services-container">
          <h2>Work With Us and Get More Leads and Customers</h2>
          <p className="sub-text">
            It's easy to work with us. If you need more online visibility, or
            you need to build your web presence, contact us.
          </p>
          <Wrapper>
            <Contact>
              <h3>Call us</h3>
              <img
                src="/images/phone-call.svg"
                className="icons"
                loading="lazy"
              />
              <p>
                Book a call with us and tell us about your business and what you
                want to acheive.
              </p>
            </Contact>
            <Contact>
              <h3>We Plan</h3>
              <img src="/images/plan.svg" className="icons" loading="lazy" />
              <p>
                We research and analyze your industry, your data and your
                competitors data and create a plan.
              </p>
            </Contact>
            <Contact>
              <h3>We Work</h3>
              <img
                src="/images/work-together.svg"
                className="icons"
                loading="lazy"
              />
              <p>
                We build a strategy that will lead to positive results and bring
                new opportunities to light.
              </p>
            </Contact>
          </Wrapper>
          <div className="btn">
            <Link href="/contact" passHref>
              <Button>Book a Call Today!</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
