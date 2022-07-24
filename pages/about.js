/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Wrapper, Contact } from '../components/CardSection'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const About = () => {
  const SEO = {
    title: 'About Bowie SEO',
    description:
      'Bowie SEO is an SEO company providing Search Engine Optimization services for businesses in the DC, Maryland, and Virginia. Contact Bowie SEO today!',
    canonical: 'https://bowieseo.com/about',
    openGraph: {
      title: 'About Bowie SEO',
      description:
        'Bowie SEO is an SEO company providing Search Engine Optimization services for businesses in the DC, Maryland, and Virginia. Contact Bowie SEO today!',
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
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
              Bowie SEO is an{' '}
              <Link href="/maryland-seo-company" passHref>
                <a>SEO company</a>
              </Link>{' '}
              providing search engine optimization services for businesses in
              the DC, Maryland, and Virginia.
            </p>
            <h2>Our Vision</h2>
            <p>
              Our vision is to help small businesses in the DMV use search
              engine optimization to make more money for their companies.
            </p>
            <h2>Our Mission</h2>
            <p>
              Our mission is to help one hundred small businesses in Maryland
              use search engine optimization. I will do this by:
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
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a call today!</Button>
          </a>
        </div>
        <section>
          <div className="container">
            <h2>Why Choose Bowie SEO Over Other SEO Companies?</h2>
            <h3>#1. We Only Specialize in Search Engine Optimization</h3>
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
            <img
              src="images/bowieseo-difference.jpg"
              alt="The difference between our SEO company and other digital marketing companies that also do SEO."
              loading="lazy"
              className="about-img"
              width="1100px"
              height="800px"
            />
            <p>
              We focus on SEO, that's why we're{' '}
              <Link href="/maryland-seo-expert" passHref>
                <a>SEO experts</a>
              </Link>{' '}
              and can get you the results to help grow your business.
            </p>
            <section>
              <div className="btn">
                <a href={calendly} target="_blank" rel="noreferrer">
                  <Button>Book a call today!</Button>
                </a>
              </div>
            </section>
            <h3>
              #2. We Become Partners, Not Just a Company You Hired to Do Your
              SEO
            </h3>
            <p>When you hire us, we work together.</p>
            <p>
              We become part of your company and our focus is to generate
              growth.
            </p>
            <img
              src="images/business-partners.jpg"
              alt="We are your business partners."
              loading="lazy"
              className="about-img"
              width="1100px"
              height="800px"
            />
            <p>
              We work together to make sure your business attracts more
              customers, generates more leads, ranks higher in the search
              engines, and makes more money.
            </p>
            <p>When you succeed, we succeed.</p>
            <section>
              <div className="btn">
                <a href={calendly} target="_blank" rel="noreferrer">
                  <Button>Book a call today!</Button>
                </a>
              </div>
            </section>
            <h3>#3. Full Transparency</h3>
            <p>You don't have to ask us what we're doing.</p>
            <p>
              We're happy to show you and tell you. We'll never keep you in the
              dark and you'll never have wait a month to wonder what we're doing
              or what's going on with your campaign.
            </p>
            <h3>
              #4 . You Can Grow Your Business Without Us - The Power of SEO
            </h3>
            <p>Yes, it is true.</p>
            <p>You can continue to grow without us.</p>
            <img
              src="images/grow-with-seo.jpg"
              alt="We are your business partners."
              loading="lazy"
              className="about-img"
              width="1100px"
              height="800px"
            />
            <p>
              You will still have success if you decide to leave us. Our goal is
              to build a foundation for your website that will continue to
              thrive without us.
            </p>
            <section>
              <div className="btn">
                <a href={calendly} target="_blank" rel="noreferrer">
                  <Button>Book a call today!</Button>
                </a>
              </div>
            </section>
            <h3>#5. We Focus on The Actions That get You Results</h3>
            <p>We don't focus on the results.</p>
            <p>We focus the actions that get you the results.</p>
            <p>We get better results this way.</p>
            <p>
              Also, when we focus on the actions rather than results, we're
              enjoy the process and the journey, rather than fixating on the
              destination.
            </p>
          </div>
          <section>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </section>
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
                <h3>Call us with your questions</h3>
                <img
                  src="/images/phone-call.svg"
                  className="icons"
                  loading="lazy"
                />
                <p>
                  Book a call with us and tell us about your business and what
                  you want to acheive.
                </p>
              </Contact>
              <Contact>
                <h3>We'll analyze your business and get a plan</h3>
                <img src="/images/plan.svg" className="icons" loading="lazy" />
                <p>
                  We research and analyze your industry, your data and your
                  competitors data and create a plan.
                </p>
              </Contact>
              <Contact>
                <h3>We'll work to help grow your business</h3>
                <img
                  src="/images/work-together.svg"
                  className="icons"
                  loading="lazy"
                />
                <p>
                  We build a strategy that will lead to positive results and
                  bring new opportunities to light.
                </p>
              </Contact>
            </Wrapper>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default About
