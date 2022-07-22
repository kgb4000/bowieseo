/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import OfferForm from '../components/OfferFormSection'
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
          <div className="hours-container">
            <h3>Bowie SEO</h3>
            <p>
              <span className="day">Monday - Saturday: </span>
              <span className="time">9:00am - 6:00pm ET</span>
            </p>
            <p>
              Phone: <a href="tel:12402660588">(240) 266-0588</a>
            </p>
            <p>
              Email: <a href="mailto:info@bowieseo.com">info@bowieseo.com</a>
            </p>
          </div>
          <div className="menu-container">
            <h3>Services</h3>
            <nav>
              <ul>
                <li>
                  <Link href="/maryland-seo-company">
                    <a>Maryland SEO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/baltimore-seo">
                    <a>Baltimore SEO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dc-seo">
                    <a>DC SEO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dc-seo">
                    <a>Fairfax SEO</a>
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
            <h3>Resources</h3>
            <ul>
              <li>
                <Link href="/seo-for-landscapers">
                  <a>SEO for Landscapers</a>
                </Link>
              </li>
              <li>
                <Link href="/seo-for-contractors">
                  <a>SEO for Contractors</a>
                </Link>
              </li>

              <li>
                <Link href="/seo-for-pest-control-companies">
                  <a>SEO for Pest Control</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-container">
            <h3>Free Mini SEO Audit</h3>
            <p>Rank higher than your competition</p>
            <OfferForm />
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
  background: #ecf0f1;
  color: #2c3e50;

  @media screen and (min-width: 768px) {
    max-width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1224px) {
    max-width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
    color: #2c3e50;

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
  color: #2c3e50;
  ]

`
export default FooterSection
