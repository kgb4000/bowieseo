/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Card, Container } from '../components/CardSection'
import styled from 'styled-components'

import { NextSeo } from 'next-seo'

// const calendly = 'https://calendly.com/bowieseo/30min'

const Services = () => {
  const SEO = {
    title: 'SEO Services That Help Your Business Grow | Bowie SEO',
    description:
      'Our SEO services help your business get more website traffic, more leads and customers, and increase your revenue. Contact us today to see how we can help!',
    type: 'website',
    canonical: 'https://bowieseo.com/seo-services',
    openGraph: {
      title: 'SEO Services That Help Your Business Grow | Bowie SEO',
      description:
        'Our SEO services help your business get more website traffic, more leads and customers, and increase your revenue. Contact us today to see how we can help!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <PageHero
          heading="SEO Services [That Work]"
          subText="We provide SEO services and solutions that help your business grow. Work with us and see what we can do for you."
          heroBtnLink="tel:+2402660588"
          buttonText="Call (240) 266-0588"
        />
        <section>
          <div className="services-container">
            <h2 className="title">
              We Provide SEO Services for Small Businesses.
            </h2>
            <p className="sub-text">
              If you want to increase your leads, sales, and revenue, practice
              SEO.
            </p>
            <h2>SEO Services</h2>
            <div className="services">
              <Container>
                <Link href="/search-engine-optimization" passHref>
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/local.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>Local SEO</h3>
                      <p>
                        Local customers are searching for your skills and
                        services. Make sure they can find you and not your
                        competition.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
                <Link href="/technical-seo" passHref>
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/technical.svg"
                        alt="Man analyzing data"
                        loading="lazy"
                      />
                      <h3>Technical SEO</h3>
                      <p>
                        Make sure search engines can access and and index your
                        website so that your pages can appear in the search
                        results.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
                <Link href="/seo-audit" passHref>
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/audit.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>SEO Audit</h3>
                      <p>
                        See why your website isn't getting traffic or attracting
                        customers, and why your competition is{' '}
                        <span className="highlight ">stealing</span> your
                        customers.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
              </Container>
            </div>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="services-container">
            <h2>Other SEO Services</h2>
            <div className="services">
              <Container>
                <Card>
                  <div className="card-info one">
                    <img
                      src="/images/keyword-research.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Keyword Research</h3>
                    <p>
                      Target the right keywords and get more traffic to your
                      website. We can help you choose the right keywords for
                      your business so you can attract more customers.
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/speed-test.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>On-Page Optimization</h3>
                    <p>
                      Make your website more visible. Optimize your website to
                      rank higher and drive more search traffic.
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Competitive Analysis</h3>
                    <p>
                      Know what your competitors are doing. See why they are
                      beating you and fight back using data and info form thier
                      own websites.
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/link-building.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Link Building</h3>
                    <p>
                      We help get build quality backlinks that help boost your
                      domain authority and help increase online visibility and
                      website traffic.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/content-audit.svg"
                      alt="Man analyzing website content"
                      loading="lazy"
                    />
                    <h3>Content Audit</h3>
                    <p>
                      Find and critique all the content and information on your
                      website that can potentially drag your SEO rankings down. 
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Copywriting</h3>
                    <p>
                      Know what your competitors are doing. See why they are
                      beating you and fight back using data and info form thier
                      own websites.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>GMB Optimization</h3>
                    <p>
                      Let customers find you easily on Google My Business.
                      Optimize your Google Business Profile to stand out and
                      attract potential customers.
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Page Speed Optimization</h3>
                    <p>
                      Increase page speed, conversions, and user experience by
                      removing elements that slow down your website..
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Link href="/free-mini-seo-audit" passHref>
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thiniking and in thought about why ehr website is not ranking"
                        loading="lazy"
                      />
                      <h3>Free Mini SEO Audit</h3>
                      <p>
                        Find out what's stopping your website from performing
                        better in the search engines with a free website audit.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
              </Container>
            </div>
          </div>
        </section>
        <section className="reasons-section">
          <div className="medium-container">
            <h2 className="title">
              Need Local SEO Services in Maryland? We Got You Covered
            </h2>
            <p className="center">We provide local SEO in:</p>
            <div className="cities">
              <ul>
                <li>Annapolis, MD</li>
                <li>
                  <Link href="/baltimore-seo" passHref>
                    <a>Baltimore, MD</a>
                  </Link>
                </li>
                <li>Bethesda, MD</li>
                <li>
                  <Link href="/" passHref>
                    <a>Bowie, MD</a>
                  </Link>
                </li>
                <li>Capitol Heights</li>
              </ul>
              <ul>
                <li>Chevy Chase, MD</li>
                <li>Columbia, MD</li>
                <li>
                  <Link href="/seo-services-crofton-md" passHref>
                    <a>Crofton, MD</a>
                  </Link>
                </li>
                <li>Fort Washington, MD</li>
                <li>Glen Burnie</li>
              </ul>
              <ul>
                <li>Hyattsville, MD</li>
                <li>
                  <Link href="/laurel-maryland-local-seo-services" passHref>
                    <a>Laurel, MD</a>
                  </Link>
                </li>
                <li>
                  <Link href="/seo-services-ocean-city" passHref>
                    <a>Ocean City, MD</a>
                  </Link>
                </li>
                <li>Odenton, MD</li>
                <li>Owings Mills, MD</li>
              </ul>
              <ul>
                <li>Rockville, MD</li>
                <li>
                  <Link href="/seo-services-salisbury-md" passHref>
                    <a>Salisbury, MD</a>
                  </Link>
                </li>
                <li>Takoma Park, MD</li>
                <li>Waldorf, MD</li>
                <li>
                  <Link href="/dc-seo" passHref>
                    <a>Washington, DC</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588 today!</Button>
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default Services

const ServicesCard = styled.div`
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem 0;

  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
  .services-card-info {
    display: flex;

    img {
      max-width: 20rem;
      margin-left: 6rem;
    }
  }
`
