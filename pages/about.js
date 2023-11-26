/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'

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
          heroText="I Believe Your Website Should Help Your Business Make Money!"
          subText="I help you create a lead generating website that attracts leads and customers"
          backgroundImage="/images/about-bowie-seo.webp"
          backgroundHeight="80vh"
          backgroundPosition="top center"
          buttonText="Get Your Free SEO Audit →"
          buttonLink="free-seo-audit"
        />
        <section>
          <div className="small-container">
            <h2>About Bowie SEO</h2>
            <p>
              Bowie SEO is a{' '}
              <Link href="/black-owned-seo-company">
                black-owned SEO company
              </Link>{' '}
              in Bowie, Maryland. We have over 5 years of experience in search
              engine optimization, and are dedicated to helping you get more
              website traffic, more leads, and ultimately make more money for
              your business.{' '}
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
                  <a>Search engine optimization</a>
                </Link>
              </li>
              <li>
                <Link href="/keyword-research">Keyword Research</Link>
              </li>
              <li>Link Building</li>
              <li>Content audits and optimization</li>
              <li>
                <Link href="/gmb-management-services" passHref>
                  <a>Google My Business Management</a>
                </Link>
              </li>
              <li>
                <Link href="/technical-seo">
                  <a>Technical SEO</a>
                </Link>
              </li>
              <li>Local SEO</li>
              <li>Competitive Analysis</li>
              <li>
                <Link href="/free-seo-audit" passHref>
                  <a>Free SEO audit</a>
                </Link>
              </li>
            </ul>
            <p>
              In addition to helping you rank higher, we also provide you with
              the tools and resources you need to maintain your rankings and
              monitor your success.
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
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="small-container">
            <h2>Our Mission</h2>
            <p>
              At Bowie SEO, our mission is to help businesses in Maryland make
              more money with SEO.
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
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="small-container">
            <h2>Our Vision</h2>
            <p>
              To be the premier{' '}
              <Link href="/maryland-seo-company">SEO company in Maryland</Link>{' '}
              and to help Maryland business owners increase their online
              visibility, sales and revenue.
            </p>
            <h3>Our Values</h3>
            <ul>
              <li>
                <h3>Integrity</h3> - We always act with integrity and honesty.
              </li>
              <li>
                <h3>Excellence</h3> - We strive for excellence in everything we
                do.
              </li>
              <li>
                <h3>Teamwork</h3> - We work together as a team to achieve our
                goals.
              </li>
              <li>
                <h3>Respect</h3> - We respect our clients, employees, and
                partners.
              </li>
              <li>
                <h3>Dedication</h3> - We are dedicated to our clients and their
                success.
              </li>
            </ul>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default About
