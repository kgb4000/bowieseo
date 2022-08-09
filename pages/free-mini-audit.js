/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import styled from 'styled-components'
import OfferForm from '../components/OfferFormSection'
import OfferVideo from '../components/OfferVideo'

import { NextSeo } from 'next-seo'

const FreeSEOAUDIT = () => {
  const SEO = {
    title: 'Free Mini Website Audit | Bowie SEO',
    description:
      'Find out what is stopping your website from ranking higher in the search engines, and why your competitors are beating you. Contact Bowie SEO today!',
    canonical: 'https://bowieseo.com/free-mini-audit',
    openGraph: {
      title: 'Free Mini SEO Website Audit | Bowie SEO',
      description:
        'Find out what is stopping your website from ranking higher in the search engines, and why your competitors are beating you. Contact Bowie SEO today!',
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} noindex={true} nofollow={true} />
      <Header>
        <Link href="/local-seo">
          <a>Bowie SEO</a>
        </Link>
      </Header>
      <LandingPage>
        <section className="dots-background">
          <div className="container">
            <div className="offer-section">
              <h2>
                Stop Losing Money and Customers Because You're Not Showing up In
                Google?
              </h2>
              <OfferVideo />
              <p className="big-p">
                Find Out Why You're Not Showing Up on Google, and Start Getting
                More Leads and Customers Without Paying for Ads!
              </p>
              {/* <ul>
                <li>
                  Get a personalized video audit for your company's website
                  delivered to your email
                </li>
                <li>
                  Discover why you're not appearing in Google Map Pack or the
                  organic search results and,
                </li>

                <li>
                  Get actionable advice and recommendations to improve your SEO
                  rankings and performance and start ranking higher in Google.
                </li>
              </ul> */}
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
  section {
    margin-top: 0;
  }
`

const Footer = styled.footer`
  font-weight: bold;
  padding: 2rem 0;
  text-align: center;
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
