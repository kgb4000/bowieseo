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

const calendly = 'https://calendly.com/bowieseo/30min'

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
          subText="We provide powerful SEO solutions to all our customers and we will provide those same solutions to you to grow your business."
          heroBtnLink="/contact"
          buttonText="Book a call"
        />
        <section>
          <div className="services-container">
            <h2>We Provide SEO Services for Maryland, DC, and Virginia</h2>
            <p className="sub-text">
              If you want more traffic to your website and need more customers
              seeing your business online, then SEO is the way to go.
            </p>
          </div>
        </section>
        <div className="btn">
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a Call Today!</Button>
          </a>
        </div>
        <section>
          <div className="services-container">
            <ServicesCard>
              <div className="services-card-info">
                <div className="card-info">
                  <h3>SEO for Contractors</h3>
                  <p>
                    Contractors that want to grow their business know that
                    search engine optimization is one of the best ways to grow
                    their business. But what is the process and how do you do
                    SEO for your contracting business?
                  </p>
                  <p>Read more.</p>
                  <Link href="/seo-for-contractors" passHref>
                    <Button>Contractor SEO</Button>
                  </Link>
                </div>
              </div>
            </ServicesCard>
            <ServicesCard>
              <div className="services-card-info">
                <div className="card-info">
                  <h3>SEO for Landscapers</h3>
                  <p>
                    As a landscaper, you know that a beautiful yard is the
                    result of hard work and attention to detail. But what about
                    making sure your business is visible online? Search engine
                    optimization (SEO) is a vital part of any digital marketing
                    strategy, and it can be especially beneficial for businesses
                    in the landscaping industry.
                  </p>
                  <p>Want to see how SEO can help your landscaping business?</p>
                  <p>Read more.</p>
                  <Link href="/seo-for-landscapers" passHref>
                    <Button>Landscaper SEO</Button>
                  </Link>
                </div>
              </div>
            </ServicesCard>
            <ServicesCard>
              <div className="services-card-info">
                <div className="card-info">
                  <h3>Maryland SEO</h3>
                  <p>
                    Our team of SEO experts will work with you to develop a
                    customized SEO strategy that fits your unique business
                    needs. We'll help you choose the right keywords, optimize
                    your website for search engines, and track your results so
                    you can see the ROI of our SEO services.
                  </p>
                  <p>Ready to get started?</p>
                  <p>
                    Contact us today to learn more about our Maryland SEO
                    services!
                  </p>

                  <Link href="/maryland-seo-company" passHref>
                    <Button>Maryland SEO</Button>
                  </Link>
                </div>
              </div>
            </ServicesCard>
            <ServicesCard>
              <div className="services-card-info">
                <div>
                  <h3>DC SEO Services</h3>
                  <p>
                    As a business owner in the Washington DC area, you know that
                    competition is fierce. You need to make sure that your
                    website is ranking high in the search engines if you want to
                    attract new customers and grow your business. That???s where
                    our team of SEO experts come in. We offer comprehensive SEO
                    services that are designed to help your website rank higher
                    in the search engines and get more traffic.
                  </p>
                </div>
                {/* <img
                src="/images/audit.svg"
                alt="Keyword ranking image"
                loading="lazy"
              /> */}
              </div>
              <Link href="/dc-seo" passHref>
                <Button>DC SEO</Button>
              </Link>
            </ServicesCard>
            <ServicesCard>
              <div className="services-card-info">
                <div>
                  <h3>Baltimore SEO Services</h3>
                  <p>
                    We understand the importance of remaining visible online,
                    which is why we offer a variety of services that are
                    designed to help your website rank higher in search engine
                    results pages. We'll work closely with you to develop a
                    customized SEO plan that meets your unique needs and
                    objectives.
                  </p>
                  <p>
                    Contact us today to learn more about our Baltimore SEO
                    services and how we can help your business grow.???
                  </p>
                </div>
              </div>
              <Link href="/baltimore-seo" passHref>
                <Button>Baltimore SEO</Button>
              </Link>
            </ServicesCard>
          </div>
        </section>
        <section>
          <div className="services-container">
            <h2>Other SEO Services</h2>
            <p className="sub-text">
              Our services will help your business get more website traffic and
              attract potential customers. We not a full service agency, we're
              an SEO company that specialize in search engine optimization for
              businesses in the DMV.
            </p>
            <div className="services">
              <Container>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/local.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Local SEO</h3>
                    <p>
                      Our local customers and clients are searching for your
                      skills and services. Make sure they can find you and not
                      your competition.
                    </p>
                  </div>
                  <p>Learn more</p>
                </Card>
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
                <Card>
                  <div className="card-info one">
                    <img
                      src="/images/keyword-research.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Keyword Research</h3>
                    <p>
                      Get more website traffic and more leads with our powerful
                      SEO services. Let Bowie SEO put your business on the path
                      to SEO success.
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
                      Get more website traffic and more leads with our powerful
                      SEO services. Let Bowie SEO put your business on the path
                      to SEO success.
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
                    <h3>Competitive Ananlysis</h3>
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
                      website that can potentially drag your SEO rankings down.??
                    </p>
                  </div>
                  {/* <p>Learn more</p> */}
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/technical.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Technical SEO</h3>
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
                      Optimize your Goolge My Business page and let your
                      customers find you directly in the local search results.
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
            <p className="sub-text">
              We provide these SEO services to businesses in DC, Maryland , and
              Virginia.
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a call today!</Button>
              </a>
            </div>
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
