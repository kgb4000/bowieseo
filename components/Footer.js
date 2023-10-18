/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import OfferForm from '../components/OfferFormSection'
import ContactForm from './Contact-Form'
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
              <span className="day">Mon - Sat: </span>
              <span className="time">9:00am - 6:00pm</span>
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
                  <Link href="/search-engine-optimization">
                    <a>Search Engine Optimization</a>
                  </Link>
                </li>
                <li>
                  <Link href="/maryland-local-seo">
                    <a>Local SEO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/gmb-management-services">
                    <a>GMB Management</a>
                  </Link>
                </li>
                <li>
                  <Link href="/free-seo-audit">
                    <a>Free SEO Audit</a>
                  </Link>
                </li>
                <li>
                  <Link href="/keyword-research">
                    <a>Keyword Research</a>
                  </Link>
                </li>
                <li>
                  <Link href="/content-for-seo">
                    <a>Content for SEO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/technical-seo">
                    <a>Technical SEO</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hours-container">
            <h3>Resources</h3>
            <ul>
              {/* <li>
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
              </li> */}
              <li>
                <Link href="/small-business-resources">
                  <a>Small Business Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <a>Case Studies</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-container">
            <h3>Free SEO Audit</h3>
            <p>
              Get your Free SEO audit to start ranking higher than your
              competition.
            </p>
            <OfferForm />
          </div>
        </Footer>
        <LowerFooter>
          <div className="lower-container">
            <p>Bowie SEO &copy;{new Date().getFullYear()}</p>
            <div>
              <Link href="/terms-of-service">
                <a>Terms of Service</a>
              </Link>{' '}
              |{' '}
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
        </LowerFooter>
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
    color: #fff;

    &:hover {
      color: #cf0a0a;
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
  .lower-container {
    max-width: 84%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 0 auto;

    div {
      font-weight: 400;
    }
  }

  padding: 2rem 0;
  background: #fff;
  color: #2c3e50;
  font-weight: 900;

  a {
    color: #000;
    text-decoration: none;
  }
`
export default FooterSection
