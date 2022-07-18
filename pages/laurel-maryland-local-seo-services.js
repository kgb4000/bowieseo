/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import PageHero from '../components/PageHeroSection'
import Button from '../components/Button'
import { Card, Container } from '../components/CardSection'

import { NextSeo } from 'next-seo'

const AuditSection = dynamic(() => import('../components/AuditSection'))

const calendly = 'https://calendly.com/bowieseo/30min'

export default function LocalSEO() {
  const SEO = {
    title: 'Laurel Maryland Local SEO Services | Bowie SEO',
    description:
      'We are an SEO services company providing SEO for Laurel Maryland small businesses. Our local SEO services get you more website traffic and customers.',
    canonical: 'https://bowieseo.com/laurel-maryland-local-seo-services',
    openGraph: {
      title: 'Laurel Maryland Local SEO Services | Bowie SEO',
      description:
        'We are an SEO services company providing SEO for Laurel Maryland small businesses. Our local SEO services get you more website traffic and customers.',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <PageHero
        heading="Laurel Maryland Local SEO Services"
        subText="We provide powerful SEO solutions to all our customers and we will provide those same solutions to you to grow your business."
        heroBtnLink="/contact"
        buttonText="Book a call"
      />
      <section className="article-section">
        <div className="container">
          <h2>Laurel Maryland Local SEO Services</h2>
          <p>Does you business need SEO services in Laurel, Maryland?</p>
          <p>Well, Bowie SEO has SEO services you need.</p>
          <p>
            Bowie SEO is an{' '}
            <Link href="/maryland-seo-company">
              <a>Maryland SEO company</a>
            </Link>{' '}
            in Bowie, Maryland, helping small business owners grow their
            businesses by increasing website traffic, helping businesses attract
            more leads, and increasing revenue.
          </p>
          <p>
            We are Maryland SEO experts that help businesses in Laurel rank
            higher in the search engines, increase their online visibility, and
            make more money.
          </p>
        </div>
      </section>
      <div className="btn">
        <a href={calendly} target="_blank" rel="noreferrer">
          <Button>Book a call today!</Button>
        </a>
      </div>
      <AuditSection />
      <section className="article-section">
        <div className="container">
          <h2>What is Local SEO?</h2>
          <p>
            Local SEO is the process of improving your website for search
            engines and users in your local area.
          </p>
          <p>
            If you have a business in Laurel Maryland, local SEO improve your
            website and make it better. It will help you choose better keywords
            that you will use to target customers in Laurel and nearby towns,
            and also rank higher in the search engines.
          </p>
        </div>
      </section>
      <div className="btn">
        <a href={calendly} target="_blank" rel="noreferrer">
          <Button>Book a call today!</Button>
        </a>
      </div>
      <section className="article-section">
        <div className="container">
          <h2>How Can Local SEO Help Your Business in Laurel?</h2>
          <p>Local SEO can help your business because it can:</p>
          <ul>
            <li>Get your business more leads.</li>
            <li>Increase your website traffic.</li>
            <li>Attract more customers looking for your product or service.</li>
            <li>Allow you to spend less money on social media ads.</li>
            <li>Rank your website higher than your competitors.</li>
            <li>Help build trust with new and existing customers.</li>
            <li>Let potential customers find your business online.</li>
            <li>Bring more customers for more sales and more revenue.</li>
          </ul>
          <p>
            When your website shows up in the Google 3 Pack or on the first page
            of Google, you will get more traffic to your website, and more
            people will see your business.
          </p>
          <p>
            You will get more clicks to your website, which will result in more
            sales and more revenue for your business.
          </p>
          <div className="not-happy-box">
            <h4>
              Need Help With Keyword Research and Targeting the Right Keywords?
            </h4>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="services-container">
          <h2>Popular Laurel SEO Services</h2>
          <p className="sub-text">
            Our local SEO services help business in Laurel and the DMV get more
            website traffic, attract potential customers, and make money.
          </p>
          <div className="services">
            <Container>
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
                    <span className="highlight ">stealing</span> your customers.
                  </p>
                </div>
                <p>Learn more</p>
              </Card>
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
                    SEO services. Let Bowie SEO put your business on the path to
                    SEO success.
                  </p>
                </div>
                <p>Learn more</p>
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
                    SEO services. Let Bowie SEO put your business on the path to
                    SEO success.
                  </p>
                </div>
                <p>Learn more</p>
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
                <p>Learn more</p>
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
                    Optimize your Goolge My Business page and let your customers
                    find you directly in the local search results.
                  </p>
                </div>
                <p>Learn more</p>
              </Card>
              <Link href="/free-mini-seo-audit">
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/thinking.svg"
                      alt="Woman thiniking about getting a free mini SEO audit."
                      loading="lazy"
                    />
                    <h3>Free Website Audit</h3>
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
        <div className="btn">
          <Link href="/seo-services" passHref>
            <Button>See more services</Button>
          </Link>
        </div>
      </section>
      <section className="article-section">
        <div className="container">
          <h2>15 Ways To Know If Your Business in Laurel Needs Local SEO?</h2>
          <p>
            If you have any of the following issues with your website or digital
            marketing, you may need Local SEO.
          </p>
          <Stats>
            <li>
              When people search for your product or service, your website
              doesn't appear in the search results.
            </li>
            <li>You're not ranking for any keywords.</li>
            <li>Your competitors are ranking higher than you.</li>
            <li>You don't get any leads from your website.</li>
            <li>Your website is slow.</li>
            <li>
              You're trying digital marketing but really don't know what you're
              doing.
            </li>
            <li>You don't have a Google Business Profile set up.</li>
            <li>
              You're spending money on digital marketing but not seeing results.
            </li>
            <li>
              Your website has no actual content for your potential customers.
            </li>
            <li>You don't have any backlinks.</li>
            <li>You never set up citations.</li>
            <li>Your website is not secure.</li>
            <li>
              You don't have Google Search Console or Google Analytics set up.
            </li>
            <li>You can't track anything on your site.</li>
            <li>
              You rely on Google ads and social media marketing for traffic and
              customers.
            </li>
          </Stats>
          <div className="not-happy-box">
            <h4>Want to See Why Your Website is Not Ranking Higher?</h4>
            <div className="btn">
              <Link href="/free-mini-seo-audit">
                <a>
                  <Button>Get a Free Mini SEO Audit</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="article-section">
        <div className="container">
          <h2>How Does Local SEO Work?</h2>
          <p>
            Local SEO is the process of improving your website for the search
            engines like Google and Bing and attracting your local audience to
            your website.
          </p>
          <p>
            For a Local SEO strategy to work, you need to add different elements
            and processes. These include:
          </p>
          <ol>
            <li>Get your Google Business Profile page.</li>
            <li>Getting backlinks.</li>
            <li>Setting up citations.</li>
            <li>Updating online directories.</li>
            <li>
              Doing an{' '}
              <Link href="/seo-audit">
                <a>SEO audit</a>
              </Link>
              .
            </li>
            <li>Creating local content.</li>
            <li>Participating in your local community.</li>
          </ol>
          <h2>What is the Cost Of Local SEO Services?</h2>
          <p>
            The cost of your local SEO services depends on different factors.
            These factors include:
          </p>
          <ul>
            <li>The strength of your website.</li>
            <li>The competition in your area and industry.</li>
          </ul>
          <p>Some SEO companies offer local SEO services at meager prices.</p>
          <p>
            <b>Local SEO is not cheap.</b>
          </p>
          <p>
            Don't believe companies that try to sell you SEO services for
            $500.00 and below.
          </p>
          <p>SEO is a serious investment in your website.</p>
          <p>
            Your website is a crucial digital asset that can increase your
            online presence, get you more leads, and bring more money into your
            business.
          </p>
          <p>
            Cheap SEO services mean affordable services that may or may not
            work. Your local SEO campaign may take years before you see any
            results with inferior services.
          </p>
          <p>
            Don't waste your money on cheap SEO services. You will only waste
            your time and your money.
          </p>
          <p>
            Your competition is not using cheap SEO services. That is one reason
            they rank higher in the search engines.
          </p>
          <h2>Why Choose Bowie SEO for your Local SEO?</h2>
          <p>Businesses in Laurel should work with us because:</p>
          <ul>
            <li>
              We are part of the Laurel community and a member of the{' '}
              <a
                href="https://bowiechamber.org/"
                target="_blank"
                rel="noreferrer"
              >
                Bowie Chamber of Commerce
              </a>
              .
            </li>
            <li>We can build your website presence.</li>
            <li>
              We can help you spend less on Google ads and social media
              marketing.
            </li>
            <li>
              We can help you target the right keywords to attract the right
              customers.
            </li>
            <li>We can help you make your website a real digital asset.</li>
            <li>We can help you rank higher than your competition.</li>
            <li>We love working with Maryland businesses.</li>
            <li>We are honest, and our work is transparent.</li>
            <li>
              <b>All we do is SEO.</b>
            </li>
          </ul>
          <p>
            If you have a business in Laurel and want to grow your website
            traffic and get more leads, please get in touch with us and see how
            an SEO strategy can help your business.
          </p>
          <div className="not-happy-box">
            <h4>Want to Talk about an Starting a Local SEO Strategy?</h4>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const Stats = styled.ol`
  list-style-type: none;

  margin: 0 auto;
  counter-reset: li;

  @media (min-width: 768px) {
    margin-left: 0.5rem;
    max-width: 1140px;
  }

  li {
    margin: 3rem 0;
    padding-left: 5rem;
    position: relative;
    letter-spacing: 1px;
    line-height: 1.4;

    ::before {
      counter-increment: li;
      content: counter(li) '';
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      background: #000;
      border: 2px solid #000;
      line-height: 40px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      display: inline-block;
      text-align: center;
      left: 0px;
      position: absolute;
      top: 1px;
      letter-spacing: 1px;
    }
  }
`
