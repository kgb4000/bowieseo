/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styled from 'styled-components'
import PageHero from '../components/PageHeroSection'
import Button from '../components/Button'
import { Card, Container } from '../components/CardSection'
import OfferForm from '../components/OfferFormSection'
import { getPosts } from '../lib/data'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const Blog = dynamic(() => import('../components/BlogSection'), {
  suspense: true,
})

const calendly = 'https://calendly.com/bowieseo/30min'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function LocalSEO({ data }) {
  const SEO = {
    title:
      'SEO Services for Ocean City MD | OC Local Search Engine Optimization',
    description:
      'We provide SEO services in Ocean City, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
    canonical: 'https://bowieseo.com/seo-services-ocean-city',
    openGraph: {
      title:
        'SEO Services for Ocean City MD | OC Local Search Engine Optimization',
      description:
        'We provide SEO services in Ocean City, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <PageHero
        heading="SEO Services Ocean City, Maryland"
        subText="We provide powerful SEO solutions to all our customers and will provide those same solutions to you to grow your business."
        heroBtnLink="/contact"
        buttonText="Book a call"
      />
      <section className="article-section">
        <div className="container">
          <h2>SEO Services Ocean City</h2>
          <p>
            Digital marketing can be challenging for businesses in Ocean City,
            but you don't have to struggle anymore.
          </p>
          <img
            src="images/ocean-city-seo-company.jpg"
            alt="Maryland SEO Expert"
            width="1000"
            height="450"
          />
          <p>
            Bowie SEO is an{' '}
            <Link href="/maryland-seo-company" passHref>
              <a>SEO company</a>
            </Link>
             in Maryland helping small businesses in Ocean City grow by
            increasing website traffic, attracting more leads and customers, and
            allowing business owners to make more money.
          </p>
          <p>
            We are Maryland SEO experts who can help your businesses rank higher
            in the search engines, increase your online visibility, and beat
            your competition in the search engines.
          </p>
          <p>
            Call us today to start your SEO campaign to rank higher in the local
            search results.
          </p>
        </div>
      </section>
      <div className="btn">
        <Link href={calendly}>
          <a>
            <Button>Book a Call Today!</Button>
          </a>
        </Link>
      </div>
      <section className="dots-background">
        <div className="container">
          <div className="offer-section">
            <h2>
              Are Other Companies in Ocean City Ranking Higher Than You in
              Google?
            </h2>
            <p className="big-p">
              Find Out Why and Start Ranking Higher Than Your Competitors Today!
            </p>
            <img
              src="/images/seo-guys.jpg"
              alt="Baltimore SEO experts - Bowie SEO"
              width="1000"
              height="700"
            />
            <ul>
              <li>
                Discover why you're not appearing in Google Map Pack or the
                organic search results
              </li>
              <li>
                Get a personalized video audit for your company's website
                delivered to your email
              </li>
              <li>
                Get actionable advice and recommendations to improve your SEO
                rankings and performance
              </li>
            </ul>
            <OfferForm />
          </div>
        </div>
      </section>
      <section className="reasons-section">
        <div className="container">
          <h2>
            7 Reasons Why You Need SEO for Your Business in Ocean City, MD
          </h2>
          <p className="sub-text">
            Ocean City businesses need SEO to compete online. Partner with an
            SEO company that can build your online business presence, bring more
            leads and customers.
          </p>
          <h3>#1. SEO Can Get Leads and Sales 24 Hours a Day</h3>
          <p>
            Search engine optimization sends you qualified traffic and leads
            interested in your services and more likely to buy something from
            you than people who happen to stumble across your site.
          </p>
          <h3>#2. SEO Can Help You Save Money on Online Advertising</h3>
          <p>
            Another great thing about SEO is that it can help you save money
            online advertising. If you're spending money on Google AdWords or
            other forms of online advertising, you can use SEO to improve your
            website so that you get more traffic from organic search results.
            This can help you save money on your advertising budget and get more
            leads and sales from your website.
          </p>
          <h3>
            #3. SEO Can Help You Get More Leads and Sales from Your Website
          </h3>
          <p>
            SEO can help you get more leads and sales from your website. By
            appearing on the first page of search results, you can get more
            traffic to your website and generate more leads and sales for your
            business. Also, when more people see your website on the first page,
            you build trust and credibility with potential customers.
          </p>
          <h3>#4. An SEO Consultant Can Help You Save Money on Advertising</h3>
          <p>
            If you’re like most businesses, you’re always looking for ways to
            save money. And one of the best ways to do that is by reducing your
            dependence on paid advertising. An experienced SEO expert can help
            you organically grow your traffic so that you don’t have to rely as
            much (or at all) on paid ads. This not only saves you money, but it
            also gives you a more sustainable long-term growth strategy.
          </p>
          <h3>#5. SEO Can Help You Build Better Websites</h3>
          <p>
            SEO can also help you build better websites. Using the correct
            keyword phrases and ensuring your website is well-optimized, you can
            make your website more user-friendly and easier to navigate. This
            can help improve your website's conversion rate and increase your
            leads and sales.
          </p>
          <h3>#6. SEO Can Help You Stay Ahead of Your Competition</h3>
          <p>
            You'll always be behind your competition if you're not using search
            engine optimization. By ranking higher in search, you can get more
            traffic to your website and attract leads. Also, by using SEO, you
            can stay ahead of your competition by appearing in the search
            results before they do.
          </p>
          <h3>#7. Search Engines are Not Going Away</h3>
          <p>
            Search engines are not going away. They are becoming more critical
            as more people use them to find information online. SEO will be
            necessary for businesses as long as people use search engines. If
            you're not using SEO, you're missing out on a lot of traffic and
            potential customers.
          </p>
        </div>
        <div className="btn">
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a call today!</Button>
          </a>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>
            What is Search Engine Optimization, and How Can it Help Businesses
            in Ocean City?
          </h2>
          <p>
            Search engine optimization (SEO) is the process of optimizing a
            website for search engines. SEO aims to improve your website's
            visibility in the search engine results pages (SERPs).
          </p>
          <p>
            Local SEO is search engine optimization businesses in a specific
            location.
          </p>
          <p>
            For businesses in Ocean City, local SEO can optimize your website to
            be found by customers in and around Ocean City, MD.
          </p>
          <p>These cities include:</p>
          <ul>
            <li>Ocean Pines</li>
            <li>Berlin</li>
            <li>Pocomoke</li>
            <li>Snow Hill</li>
            <li>Salisbury</li>
            <li>Easton</li>
          </ul>
          <p>
            Local SEO is the process of optimizing your website so that
            customers looking for your business will be able to find you on
            Google. The goal is to make the website more visible on search
            engine results pages (SERPs) when people enter keywords related to
            businesses and services in their area.
          </p>
          <p>
            For example, if someone living in Ocean City or Ocean Pines is
            searching for a pest control company, Google will return a list of
            pest control companies that it feels serves the searcher's intent.
          </p>
          <p>
            These results will appear in the local pack and the organic listing.
          </p>
          <img
            src="/images/pest-control-services-ocean-city-md-local-pack.jpg"
            alt="Baltimore SEO experts - Bowie SEO"
            width="1000"
            height="700"
          />
          <p>
            Several factors go into local SEO, including keywords, backlinks,
            and on-page optimization.
          </p>
          <p>
            Businesses can also create a Google My Business profile, which can
            help to improve their website visibility.
          </p>
          <p>
            Local SEO is essential to any business's online marketing strategy,
            especially for companies that rely on customers in a specific
            geographic area. Optimizing for local search can help to attract new
            customers and grow a business.
          </p>
        </div>
        <div className="btn">
          <a href={calendly} target="_blank" rel="noreferrer">
            <Button>Book a Free Consultation!</Button>
          </a>
        </div>
      </section>
      <section className="pain-section">
        <div className="container">
          <h2>Checkout These Resources</h2>
        </div>
        <div>
          <Suspense fallback={`loading`}>
            <Blog data={data} />
          </Suspense>
        </div>
      </section>
      <section>
        <div className="services-container">
          <h2>Our Ocean City SEO Services</h2>
          <p className="sub-text">
            Our Ocean City SEO services help small businesses in Ocean City
            increase search traffic, online visibility, and SEO performance.
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
                  <h3>Local SEO</h3>
                  <p>
                    We can help you optimize your website for local search in
                    Ocean City customers to find you.
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
                    Research and choose the right keywords to target in your
                    website and marketing materials.
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
                  <h3>Backlink Building</h3>
                  <p>
                    Build high-quality backlinks to your website to improve your
                    visibility in search results.
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
                  <h3>Competitive Analysis</h3>
                  <p>
                    Understand what other Ocean City businesses are doing and
                    find ways to beat them in local search.
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
                    Optimize your Google My Business page to improve your online
                    visibility so Ocean City customers can find you.
                  </p>
                </div>
                <p>Learn more</p>
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
                      Get a free mini SEO audit to improve your website's SEO
                      performance.
                    </p>
                  </div>
                  <p>Learn more</p>
                </Card>
              </Link>
            </Container>
          </div>
        </div>
      </section>
      <div className="btn">
        <Link href="/seo-services" passHref>
          <Button>See more services</Button>
        </Link>
      </div>
      <section>
        <div className="container">
          <h2>
            In a Sea of Ocean City SEO Companies, Why Work With Our SEO Company?
          </h2>
          <p className="sub-text">
            Work with Bowie SEO and experience the difference between our
            company and other SEO companies.
          </p>
          <h3>#1. We Create Customized SEO Solutions</h3>
          <p>
            As SEO consultants, we know every business and website will need
            different services. That's why we offer custom SEO services to help
            your business succeed. We create a custom SEO strategy for each
            company we work with.
          </p>
          <h3>#2. No Long-Term Contracts</h3>
          <p>We don't have any long-term contracts for our SEO services.</p>
          <p>Just pay monthly.</p>
          <h3>#3. We Don't Work With Your Competitors in Ocean City</h3>
          <p>
            As your SEO company, we won't work with your competitors. Some SEO
            companies don't care who they work with. They'll work with you and
            your competition in the same city. That's crazy.
          </p>
          <h3>
            #4. We Become Your Partners, Not an SEO Company You Just Hired!
          </h3>
          <p>
            When you work with us, we look at your business as if it was our
            business. We want to see your business succeed! We don't just want
            to get you to rank higher for a few keywords and then disappear. We
            want to help you grow your business, for years to come.
          </p>
          <h3>#5. All We Do is SEO</h3>
          <p>
            We are{' '}
            <Link href="/maryland-seo-expert" passHref>
              <a>SEO experts</a>
            </Link>
            .
          </p>
          <p>
            We are a professional SEO agency; all we do is search engine
            optimization. We don't do web design, website development, web
            hosting, or social media marketing.
          </p>
        </div>
      </section>
      <div className="btn">
        <a href={calendly} target="_blank" rel="noreferrer">
          <Button>Book a call today!</Button>
        </a>
      </div>
      <section>
        <FAQPageJsonLd
          mainEntity={[
            {
              questionName: 'Can I Do Local SEO Myself?',
              acceptedAnswerText:
                'The short answer is yes, you can definitely do local SEO yourself. However, it will take some time and effort on your part. The most important thing is to make sure that you are consistent with your efforts.',
            },
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
              questionName: 'How Long Does it Take for Local SEO to Work?',
              acceptedAnswerText:
                'Local SEO can take a few weeks to a few months to see results. However, it is essential to note that SEO is an ongoing process, and you must continuously work on it to maintain and improve your rankings.',
            },
            {
              questionName: 'Which is Better for My Business, SEO or PPC?',
              acceptedAnswerText: `The answer to this question depends on your business goals and your budget. If you have a limited budget, then SEO is the better option as it is a long-term strategy that will continue to provide results over time. PPC is a good option if you have a larger budget and need immediate results.
                
              SEO is a long-term strategy that improves the visibility of your website in search engine results pages (SERPs). PPC is a short-term strategy where you pay for ads that appear in SERPs.PPC can complement SEO well as it can help you achieve your business goals faster. However, it is essential to note that you must continuously pay for the ads to maintain your results.`,
            },
            {
              questionName: 'SEO Services Ocean City - What Next?',
              acceptedAnswerText:
                'Call and talk to an SEO consultant at Bowie SEO to discuss your strategy. Start getting more website traffic and potential customers today.',
            },
          ]}
        />
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-questions">
            <h3>#1. How Much Does Local SEO Services Cost?</h3>
            <p>
              The cost of local SEO services varies depending on the size of
              your business and its location. SEO services can start as low as
              $1000 per month for a small business. For a larger company, the
              cost can be upwards of $5,000 per month. Please get in touch with
              us to learn more.
            </p>
            <h3>#2. Can I do SEO Myself?</h3>
            <p>
              Yes, you can do SEO yourself. However, it takes a lot of time and
              effort to learn all the different SEO aspects and keep up with the
              ever-changing landscape of search engine algorithms. You should
              hire an experienced SEO company in Ocean City to handle your SEO
              needs.
            </p>
            <h3>#3. How Long Does it Take for Local SEO to Work?</h3>
            <p>
              Local SEO can take a few weeks to a few months to see results.
              However, it is essential to note that SEO is an ongoing process,
              and you must continuously work on it to maintain and improve your
              rankings.
            </p>
            <h3>#4. Which is Better for My Business, SEO or PPC?</h3>
            <p>
              The answer to this question depends on your business goals and
              your budget. If you have a limited budget, then SEO is the better
              option as it is a long-term strategy that will continue to provide
              results over time. PPC is a good option if you have a larger
              budget and need immediate results.
            </p>
            <p>
              SEO is a long-term strategy that improves the visibility of your
              website in search engine results pages (SERPs). PPC is a
              short-term strategy where you pay for ads that appear in SERPs.
              PPC can complement SEO well as it can help you achieve your
              business goals faster. However, it is essential to note that you
              must continuously pay for the ads to maintain your results.
            </p>
            <h3>#5. SEO Services Ocean City - What Next?</h3>
            <p>
              Call and talk to an SEO consultant at Bowie SEO to discuss your
              strategy. Start getting more website traffic and potential
              customers today.
            </p>
          </div>
        </div>
        <div className="btn faq">
          <a href={calendly} target="_blank">
            <Button>Book a Call Today!</Button>
          </a>
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
