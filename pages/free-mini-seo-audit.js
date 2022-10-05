/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import styled from 'styled-components'
import OfferForm from '../components/OfferFormSection'
import OfferVideo from '../components/OfferVideo'

import { NextSeo } from 'next-seo'

const FreeSEOAUDIT = () => {
  const SEO = {
    title: 'Free Mini SEO Audit | Bowie SEO',
    description:
      'Find out what is stopping your website from ranking higher in the search engines, and why your competitors are beating you. Contact Bowie SEO today!',
    canonical: 'https://bowieseo.com/free-mini-seo-audit',
    openGraph: {
      title: 'Free Mini SEO Audit | Bowie SEO',
      description:
        'Find out what is stopping your website from ranking higher in the search engines, and why your competitors are beating you. Contact Bowie SEO today!',
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Header>
        <Link href="/local-seo">
          <a>Bowie SEO</a>
        </Link>
      </Header>
      <LandingPage>
        <section className="dots-background content">
          <div className="container">
            <div className="offer-section">
              <h1>Get Your Free Mini SEO Audit</h1>
              <OfferVideo />
              <p className="big-p">
                Find Out Why You're Not Showing Up on Google, and Start Getting
                More Leads and Customers Without Paying for Ads!
              </p>
              <OfferForm />
            </div>
          </div>
        </section>
      </LandingPage>
      <Footer>Bowie SEO &copy;{new Date().getFullYear()}</Footer>
    </>
  )
}

const LandingPage = styled.div`
  .container {
    max-width: 700px;
    padding: 0 1.2rem;
  }
  h2 {
    font-size: ;
  }
  section {
    margin-top: 0;
    margin-bottom: 0;
  }
  .content {
    min-height: calc(100vh - 80px);
  }

  .big-p {
    font-size: 1.2rem;
  }
`

const Footer = styled.footer`
  font-weight: bold;
  padding: 2rem 0;
  text-align: center;
  height: 50px;
`

const Header = styled.header`
  text-align: center;
  height: 80px;
  line-height: 80px;
  font-size: 2rem;
  font-weight: 900;
  background: #000;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`

export default FreeSEOAUDIT
