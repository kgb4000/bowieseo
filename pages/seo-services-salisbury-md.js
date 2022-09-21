/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import PageHero from '../components/PageHeroSection'
import Button from '../components/Button'
import { Card, Container } from '../components/CardSection'
import OfferForm from '../components/OfferFormSection'
import { getPosts } from '../lib/data'

import { NextSeo, FAQPageJsonLd } from 'next-seo'
import styled from 'styled-components'

const calendly = 'https://calendly.com/bowieseo/30min'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function OceanCitySEO() {
  const SEO = {
    title: 'SEO Services Salisbury MD | Increase Leads, Boost Revenue',
    description:
      'We provide SEO services in Salisbury, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
    canonical: 'https://bowieseo.com/seo-services-salisbury-md',
    openGraph: {
      title: 'SEO Services Salisbury MD | Increase Leads, Boost Revenue',
      description:
        'We provide SEO services in Salisbury, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
      image: [
        {
          url: 'https://bowieseo.com/images/salisbury-seo-company.jpg',
          width: 1200,
          height: 450,
          alt: 'Salsbury SEO Company',
          type: 'image/jpg',
        },
      ],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <PageHero
          heading="SEO Services Salisbury, MD [Get More Leads and Boost Revenue]"
          subText="We provide SEO solutions to help businesses in Salisbury grow. We use our SEO knowledge to help attract more customers and increase sales for your business."
          heroBtnLink="/contact"
          buttonText="Book a free consultation"
        />
        <section className="article-section">
          <h2>SEO Services Salisbury in Maryland</h2>
          <div className="container grid">
            <div>
              <p>
                You're trying to figure out how to get more leads and customers
                to your business, but nothing seems to be working.
              </p>
              <p>
                You've tried digital marketing tactics like Facebook and
                Instagram ads, Google ads, and even paid to get leads from
                HomeAdvisor, Thumbtack, and Angie's List.
              </p>
              <p>
                But you keep getting bad leads and realize you're wasting your
                time and money.
              </p>
              <p>
                You need a system to get leads and customers into your business
                regularly, and you need to own that system.
              </p>
              <p>That’s where we come in.</p>
              <p>
                We’re a{' '}
                <Link href="/maryland-seo-company" passHref>
                  <a>Maryland SEO Company</a>
                </Link>{' '}
                helping small business owners in Salisbury get more leads and
                customers by building a lead generation system specifically for
                your business.
              </p>
              <p>We have you covered.</p>
              <p>
                You don't have to worry about digital marketing that doesn’t
                work or paying for leads from lead generation companies that
                just take your money.
              </p>
              <p>
                We’ll help you build a system to generate your leads while you
                concentrate on running your business.
              </p>
              <p>Call us to get started or to learn more.</p>
              <div>
                <a href="tel:+2402660588">
                  <Button>Call (240) 266-0588</Button>
                </a>
              </div>
            </div>
            <img
              src="/images/seo-services-salisbury-md.jpg"
              alt="Business owner thinking about getting SEO Services in Salisbury Maryland"
              title="Business owner thinking about getting SEO Services in Salisbury Maryland"
            />
          </div>
        </section>
        <section className="dots-background">
          <div className="container">
            <div className="offer-section">
              <h2>
                Is Your Business Showing up in Google When People Search for
                Your Services in Salisbury, MD?
              </h2>
              <p className="big-p">
                If not, you're losing customers to your competition. Find out
                why and start ranking on the first page today.
              </p>
              <img
                src="/images/seo-guys.jpg"
                alt="Ocean City SEO company - Bowie SEO"
                width="1000"
                height="700"
              />
              <p>
                Get a personalized video delivered to your email showing you:
              </p>
              <ul>
                <li>The reasons why you're not showing up on the first page</li>
                <li>What you have to do to get on the first page</li>
                <li>Actionable steps to start ranking higher today</li>
              </ul>
              <OfferForm />
            </div>
          </div>
        </section>
        <section>
          <div className="services-container">
            <h2>Our Salisbury MD SEO Services</h2>
            <p className="sub-text">
              Our Salisbury SEO services help small businesses in Salisbury
              increase search traffic, online visibility, and SEO performance.
            </p>
            <div className="services">
              <Container>
                <Link href="/local-seo" passHref>
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/audit.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>Local SEO</h3>
                      <p>
                        We optimize your website for local searches in Salisbury
                        so customers can find you.
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
                      We choose the right keywords to use on your website so
                      that you appear in the SERPs when people search.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/speed-test.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Link Building</h3>
                    <p>
                      We build backlinks to improve your website visibility and
                      your authority in the search engines.
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
                    <h3>Competitive Analysis</h3>
                    <p>
                      See what other businesses like yours are doing and find
                      ways to beat them in local search.
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
                      Optimize your Google My Business page to improve your
                      online visibility so Salisbury customers can find you.
                    </p>
                  </div>
                </Card>
                <Link href="/free-mini-seo-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thinking about getting a free mini SEO audit."
                        loading="lazy"
                      />
                      <h3>Free Website Audit</h3>
                      <p>
                        Get a free mini SEO audit and see how to improve your
                        website's SEO.
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
            <h2>7 Reasons Why Salisbury Business Owners must Invest In SEO</h2>
            <p className="center">
              Salisbury business owners need SEO to compete online. Partner with
              an SEO company that can build your lead-gen system that will boost
              your business presence, and bring more leads and customers.
            </p>
          </div>
          <div className="container">
            <ReasonSec>
              <div>
                <h3>#1. SEO Can Get Leads and Sales 24 Hours a Day</h3>
                <p>
                  Search engine optimization sends you qualified traffic and
                  leads interested in your services and more likely to buy
                  something from you than people who happen to stumble across
                  your site.
                </p>
                <h3>#2. SEO Can Help You Save Money on Online Advertising</h3>
                <p>
                  Another great thing about SEO is that it can help you save
                  money online advertising. If you're spending money on Google
                  AdWords or other forms of online advertising, you can use SEO
                  to improve your website so that you get more traffic from
                  organic search results. This can help you save money on your
                  advertising budget and get more leads and sales from your
                  website.
                </p>
                <h3>
                  #3. SEO Can Help You Get More Leads and Sales from Your
                  Website
                </h3>
                <p>
                  SEO can help you get more leads and sales from your website.
                  By appearing on the first page of search results, you can get
                  more traffic to your website and generate more leads and sales
                  for your business. Also, when more people see your website on
                  the first page, you build trust and credibility with potential
                  customers.
                </p>
                <h3>#4. You can Save Money on Facebook and Google Ads</h3>
                <p>
                  Like most companies, you're always searching for methods to
                  save money. Reducing your reliance on paid advertising
                  (Facebook and Google ads) is one of the finest methods. An
                  experienced{' '}
                  <Link href="/maryland-seo-company" passHref>
                    <a>SEO company</a>
                  </Link>{' '}
                  can assist you in growing your traffic organically and
                  avoiding having to rely as much (or at all) on sponsored
                  material. This saves you money and gives you a more
                  sustainable long-term growth strategy.
                </p>
              </div>
              <div>
                <h3>#5. SEO Can Help You Build Better Websites</h3>
                <p>
                  SEO can also help you build better websites. Using the correct
                  keyword phrases and ensuring your website is well-optimized,
                  you can make your website more user-friendly and easier to
                  navigate. This can help improve your website's conversion rate
                  and increase your leads and sales.
                </p>
                <h3>#6. SEO Can Help You Stay Ahead of Your Competition</h3>
                <p>
                  You'll always be behind your competition if you're not using
                  search engine optimization. By ranking higher in search, you
                  can get more traffic to your website and attract leads. Also,
                  by using SEO, you can stay ahead of your competition by
                  appearing in the search results before they do.
                </p>
                <h3>#7. Search Engines are Not Going Away</h3>
                <p>
                  Search engines are not going away. They are becoming more
                  critical as more people use them to find information online.
                  SEO will be necessary for businesses as long as people use
                  search engines. If you're not using SEO, you're missing out on
                  a lot of traffic and potential customers.
                </p>
              </div>
            </ReasonSec>
          </div>
          <div className="btn">
            <a href={calendly}>
              <Button>Schedule a call today!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2>
              How Does Search Engine Optimization Work, and How Can it Help
              Salisbury Business Owners?
            </h2>
          </div>
          <div className="medium-container">
            <p>
              Search engine optimization (SEO) is the process of increaseing
              your website visibility when people search for your services.
            </p>
            <p>
              <Link href="/local-seo" passHref>
                <a>Local SEO</a>
              </Link>{' '}
              is search engine optimization for your business in your area,
              which will be Salisbury.
            </p>
            <p>
              Local SEO makes it so that when someone in Salisbury or in nearby
              places like{' '}
              <Link href="/seo-services-ocean-city" passHref>
                <a>Ocean City</a>
              </Link>
              , Berlin, Whitehaven, or Pokomoke, MD search for services like
              yours, your website will show up and people will see your
              business.
            </p>
            <p>
              Local SEO is the process of optimizing your website so that
              customers looking for your business will be able to find you on
              Google. The goal is to make the website more visible on search
              engine results pages (SERPs) when people enter keywords related to
              businesses and services in their area.
            </p>
            <p>
              For example, if someone living in Salisbury or Pokomoke is
              searching for an asphalt paving company, Google will return a list
              of asphalt paving companies that it feels are the best results.
            </p>
            <p>
              These results will appear in the local pack and the organic
              listing.
            </p>
            <p>
              Several factors go into local SEO, including keywords, backlinks,
              and on-page optimization.
            </p>
            <p>
              Businesses can also create a Google My Business profile, which can
              help to improve their website visibility.
            </p>
            <p>
              Local SEO is essential to any business's online marketing
              strategy, especially for companies that rely on customers in a
              specific geographic area. Optimizing for local search can help to
              attract new customers and grow a business.
            </p>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Book a Free Consultation!</Button>
            </a>
          </div>
        </section>
        <section className="why-work-with-us-section">
          <div className="medium-container">
            <h2>With Other SEO Companies in Salisbury, Why Work With Us?</h2>
            <p className="sub-text">
              Work with Bowie SEO and experience the difference between our
              company and other SEO companies.
            </p>
          </div>
          <div className="container">
            <ReasonSec>
              <div>
                <h3>#1. We Create Customized SEO Solutions</h3>
                <p>
                  As SEO consultants, we know every business and website will
                  need different services. That's why we offer custom SEO
                  services to help your business succeed. We create a custom SEO
                  strategy for each company we work with.
                </p>
                <h3>#2. No Long-Term Contracts</h3>
                <p>We don't have any long-term contracts.</p>
                <p>
                  Just pay monthly for our SEO services and you are free to
                  cancel anytime.
                </p>
              </div>
              <div>
                <h3>#3. We Don't Work With Your Competitors in Salisbury</h3>
                <p>
                  As your SEO company, we won't work with your competitors. Some
                  SEO companies don't care who they work with. They'll work with
                  you and your competition in the same city. That's crazy.
                </p>
                <h3>
                  #4. We Become Your Partners, Not an SEO Company You Just
                  Hired!
                </h3>
                <p>
                  When you work with us, we look at your business as if it was
                  our business. We want to see your business succeed! We don't
                  just want to get you to rank higher for a few keywords and
                  then disappear. We want to help you grow your business, for
                  years to come.
                </p>
              </div>
            </ReasonSec>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <FAQPageJsonLd
            mainEntity={[
              {
                questionName: 'How Much Does Local SEO Services Cost?',
                acceptedAnswerText:
                  'The cost of local SEO services varies depending on the size of your business and its location. SEO services can start as low as $1000 per month for a small business. For a larger company, the cost can be upwards of $5,000 per month. Please get in touch with us to learn more.',
              },
              {
                questionName: 'Can I do SEO Myself?',
                acceptedAnswerText:
                  'Yes, you can do SEO yourself. However, it takes a lot of time and effort to learn all the different SEO aspects and keep up with the ever-changing landscape of search engine algorithms. You should hire an experienced SEO company in Ocean City to handle your SEO needs.',
              },
              {
                questionName: 'How Long Does Local SEO Take to See Returns?',
                acceptedAnswerText:
                  'Usually, it can take three to six months to see results from local SEO, but it depends on your market, the keyword difficulty, and the competition in your area.',
              },
              {
                questionName: 'Which is Better for My Business, SEO or PPC?',
                acceptedAnswerText: `The answer to this question depends on your business goals and your budget. If you have a limited budget, then SEO is the better option as it is a long-term strategy that will continue to provide results over time. PPC is a good option if you have a larger budget and need immediate results.`,
              },
              {
                questionName: 'How Long Should I Do Local SEO for My Business?',
                acceptedAnswerText: `You should do local SEO as long as you want to stay competitive online.
                Remember search engines are always changing and that your competitors are always trying to gain a competitive edge. If you stop doing SEO and they don’t, they may start ranking higher than you and steal your leads.`,
              },
            ]}
          />
          <div className="medium-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-questions">
              <section>
                <h3>#1. How Much Does Local SEO Services Cost?</h3>
                <p>
                  The cost of local SEO services varies depending on the size of
                  your business and its location. SEO services can start as low
                  as $1000 per month for a small business. For a larger company,
                  the cost can be upwards of $5,000 per month. Please get in
                  touch with us to learn more.
                </p>

                <h3>#2. Can I do SEO Myself?</h3>
                <p>
                  Yes, you can do SEO yourself. However, it takes a lot of time
                  and effort to learn all the different SEO aspects and keep up
                  with the ever-changing landscape of search engine algorithms.
                  You should hire an experienced SEO company in Ocean City to
                  handle your SEO needs.
                </p>

                <h3>#3. How Long Does Local SEO Take to See Returns?</h3>
                <p>
                  Usually, it can take three to six months to see results from
                  local SEO, but it depends on your market, the keyword
                  difficulty, and the competition in your area.
                </p>
                <h3>#4. Which is Better for My Business, SEO or PPC?</h3>
                <p>
                  The answer to this question depends on your business goals and
                  your budget. If you have a limited budget, then SEO is the
                  better option as it is a long-term strategy that will continue
                  to provide results over time. PPC is a good option if you have
                  a larger budget and need immediate results.
                </p>
                <p>
                  SEO is a long-term strategy that improves the visibility of
                  your website in search engine results pages (SERPs). PPC is a
                  short-term strategy where you pay for ads that appear in
                  SERPs. PPC can complement SEO well as it can help you achieve
                  your business goals faster. However, it is essential to note
                  that you must continuously pay for the ads to maintain your
                  results.
                </p>
                <h3>#5. How Long Should I Do Local SEO for My Business?</h3>
                <p>
                  You should do local SEO as long as you want to stay
                  competitive online.
                </p>
                <p>
                  Remember search engines are always changing and that your
                  competitors are always trying to gain a competitive edge. If
                  you stop doing SEO and they don’t, they may start ranking
                  higher than you and steal your leads.
                </p>
              </section>
            </div>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

const ReasonSec = styled.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`
