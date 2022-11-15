/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
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
        <HeroSection
          heroText="We Believe Your Website Should Help Your Business Make Money!"
          subText="We help you create a lead generating website that attracts leads and customers to your business"
          backgroundImage="/images/about-bowie-seo.webp"
          backgroundHeight="70vh"
          backgroundPosition="top center"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section>
          <div className="medium-container">
            <h2>About Bowie SEO</h2>
            <p>
              Bowie SEO is a search engine optimization company in Bowie,
              Maryland. We have over 5 years of experience in search engine
              optimization, and are dedicated to helping you get more website
              traffic, more leads, and ultimately make more money for your
              business.{' '}
            </p>
            <p>
              At Bowie SEO, we use our experience and knowledge of search
              engines to help you rank higher in the search results
              pages(SERPs).
            </p>

            <p>Our services include:</p>
            <ul>
              <li>
                <Link href="/search-engine-optimization" passHref>
                  <a>Search engine optimization”</a>
                </Link>
              </li>
              <li>Keyword Research</li>
              <li>Link Building</li>
              <li>Content audits and optimizations</li>
              <li>GMB Management</li>
              <li>Technical SEO</li>
              <li>On-Page SEO</li>
              <li>Local SEO</li>
              <li>Competitive Analysis</li>
              <li>
                <Link href="/free-mini-seo-audit" passHref>
                  <a>Free Mini SEO audit</a>
                </Link>
              </li>
            </ul>
            <p>
              In addition to helping you rank higher, we also provide you with
              the tools and resources you need to maintain your rankings and
              monitor your success.
            </p>
            <p>
              We are always willing to work with their clients and ensure that
              they are satisfied with their results.{' '}
            </p>
            <p>
              If you are looking for an SEO company near you, that can help you
              achieve your online marketing goals, then Bowie SEO is a great
              choice.{' '}
            </p>
            <p>
              Contact us today to learn more about our services and how we can
              help your business.
            </p>
          </div>
        </section>
        <div className="btn">
          <a href="tel:+2402660588">
            <Button>Call (240) 266-0588</Button>
          </a>
        </div>
        <section>
          <div className="medium-container">
            <h2>Our Mission</h2>
            <p>
              At Bowie SEO, our mission is to help businesses in Maryland, DC,
              and Northern Virginia, make more money with SEO.
            </p>
            <p>
              We offer a variety of services that can help businesses improve
              their ranking in search engine results pages, increase their
              traffic, and generate more leads and sales. We are always willing
              to work with our clients to ensure that they are satisfied with
              the results.
            </p>
            <p>
              Contact us today to learn more about our services and how we can
              help your business. We would be happy to answer any questions you
              have and provide you with a free consultation.
            </p>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Let's Book a Call Today!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2>Our Vision</h2>
            <p>
              To be the premier search engine optimization company in Maryland
              and to help our clients achieve the best possible online
              visibility.
            </p>
            <h3>Our Values</h3>
            <p>
              <b>Integrity</b> - We always act with integrity and honesty.
            </p>
            <p>
              <b>Excellence</b> - We strive for excellence in everything we do.
            </p>{' '}
            <p>
              <b>Teamwork</b> - We work together as a team to achieve our goals.
            </p>{' '}
            <p>
              <b>Respect</b> - We respect our clients, employees, and partners.
            </p>
            <p>
              <b>Dedication</b> - We are dedicated to our clients and their
              success.
            </p>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Let's Book a Call Today!</Button>
            </a>
          </div>
        </section>
        {/* <InfoList {...missionObj} /> */}
        <section className="pain-section">
          <div className="services-container">
            <h2>We're Easy to Work With</h2>
            <p className="sub-text">
              It's easy to work with us. If you need more online visibility, or
              you need to build your web presence, contact us.
            </p>
            <Wrapper>
              <Contact>
                <h3>1. Call us</h3>
                <img
                  src="/images/phone-call.svg"
                  className="icons"
                  loading="lazy"
                  alt="Call Bowie SEO for a free consultation."
                />
                <p>Set up a discovery call and see hwo we can help you.</p>
              </Contact>
              <Contact>
                <h3>2. We Analyze</h3>
                <img
                  src="/images/plan.svg"
                  className="icons"
                  loading="lazy"
                  alt="We analyse your business and come up with a strategy for success."
                />
                <p>We check out your business and industry.</p>
              </Contact>
              <Contact>
                <h3>3. We Get to Work</h3>
                <img
                  src="/images/work-together.svg"
                  className="icons"
                  loading="lazy"
                  alt="Work with Bowie SEO to help grow your business."
                />
                <p>
                  We build a strategy to get results and bring new
                  opportunities.
                </p>
              </Contact>
            </Wrapper>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588</Button>
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default About
