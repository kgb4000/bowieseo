/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {
  NextSeo,
  LocalBusinessJsonLd,
  CorporateContactJsonLd,
  LogoJsonLd,
  SocialProfileJsonLd,
} from 'next-seo'

const FooterSection = () => {
  return (
    <>
      <LogoJsonLd
        logo="http://bowieseo.com/images/logo.jpg"
        url="http://bowieseo.com"
      />
      <SocialProfileJsonLd
        type="Organization"
        name="Bowie SEO"
        url="http://www.bowieseo.com"
        sameAs={[
          'https://www.facebook.com/bowieseo',
          'https://linkedin.com/in/kester-browne',
        ]}
      />
      <CorporateContactJsonLd
        url="http://bowieseo.com"
        logo="http://bowieseo.com/images/logo.jpg"
        contactPoint={[
          {
            telephone: '+1-240-266-0588',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English'],
          },
        ]}
      />
      <LocalBusinessJsonLd
        type="LocalBusiness"
        name="Bowie SEO"
        description="Bowie SEO is an SEO company in Maryland helping small businesses increase their website traffic, leads, and revenue with SEO. Contact us today!"
        url="https://bowieseo.com"
        telephone="+12402660588"
        address={{
          streetAddress: '4710 Silverbrook Way',
          addressLocality: 'Bowie',
          addressRegion: 'MD',
          postalCode: '20720',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '39.013313',
          longitude: '-76.776924',
        }}
        priceRange={{}}
        images={['https://bowieseo.com/images/bowie-seo-company.jpeg']}
        openingHours={[
          {
            opens: '09:00',
            closes: '18:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
          },
        ]}
      />
      <NextSeo />
      <footer>
        <Footer>
          <div className="menu-container">
            <h3>Menu</h3>
            <nav>
              <ul>
                <li>
                  <Link href="/seo-services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="/free-mini-seo-audit">
                    <a>Free Mini SEO Audit</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hours-container">
            <h3>Hours</h3>
            <p>
              <span className="day">Monday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Tuesday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Wednesday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Thursday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Friday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Saturday: </span>
              <span className="time">9:00am - 6:00pm</span>
            </p>
            <p>
              <span className="day">Sunday: </span>
              <span className="time">Closed</span>
            </p>
          </div>
          <div className="contact-container">
            <h3>Contact</h3>
            <p>
              Email: <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
            </p>
            <p>
              Phone: <a href="tel:12402660588">(240) 266-0588</a>
            </p>
            <p>Bowie, MD</p>
            <p>
              <Link href="/terms-of-service">
                <a>Terms of Service</a>
              </Link>
            </p>
            <p>
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </p>
          </div>
        </Footer>
        <LowerFooter>Bowie SEO &copy; {new Date().getFullYear()}</LowerFooter>
      </footer>
    </>
  )
}

const Footer = styled.div`
  padding: 4rem 1.2rem;
  margin: 0 auto;
  background: #000;
  color: #fff;

  @media screen and (min-width: 768px) {
    max-width: 95%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    max-width: 95%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }

  .menu-container,
  .contact-container,
  .hours-container,
  .logo-container {
    padding: 1rem 1.2rem;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #ff5200;
      text-decoration: underline;
    }
  }

  ul {
    margin: 0;
  }

  nav ul li {
    list-style-type: none;
  }
`

const LowerFooter = styled.div`
  text-align: center;
  padding: 1rem 0;
  background: #fff;
  color: #000;
`

export default FooterSection
