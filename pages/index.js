/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import InfoSection from '../components/InfoSection'
import { homeObj } from '../components/InfoSection/Data'
import {
  resultsObj,
  resultsObj1,
  resultsObj2,
  resultsObj3,
  resultsObj4,
  resultsObj5,
} from '../components/ResultsSection/Data/Data'
import { Card, Container, Wrapper, Contact } from '../components/CardSection'
import ResultsSection from '../components/ResultsSection'

const AuditSection = dynamic(() => import('../components/AuditSection'), {
  suspense: true,
})

const calendly = 'https://calendly.com/bowieseo/30min'

export default function Home({ data }) {
  return (
    <>
      <MainLayout>
        <HeroSection
          heroBtnLink1={calendly}
          heroBtnLink2="/free-mini-seo-audit"
        />
        <section className="pain-section">
          <div className="medium-container">
            <h2>Digital Marketing is Tough For Small Business Owners!</h2>
            <div className="side-by-side">
              <ul className="count">
                <li>
                  <img
                    src="/images/paying-for-seo.svg"
                    alt="Customers paying."
                    className="icons filter-green"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Paying for digital marketing that doesn't work or get you any
                  leads or customers.
                </li>
                <li>
                  <img
                    src="/images/customers.svg"
                    alt="Local customers."
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Not getting any new leads or customers from your website you
                  paid for.
                </li>
                <li>
                  <img
                    src="/images/losing-customers.svg"
                    alt="Customers leaving."
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Losing potential customers to your competition because they
                  rank higer than you.
                </li>
                <li>
                  <img
                    src="/images/search-engines.svg"
                    alt="Search engines."
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Struggling to get leads because you don't know what you're
                  doing.
                </li>
                <li>
                  <img
                    src="/images/search-engines.svg"
                    alt="Location icon"
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Not appearing in Google's organic search listings or the Map
                  Pack.
                </li>
                <li>
                  <img
                    src="/images/seo-experts.svg"
                    alt="Location icon"
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  <p>
                    Following so called expert advice and not getting any real
                    results.
                  </p>
                </li>
              </ul>
            </div>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588</Button>
              </a>
            </div>
          </div>
        </section>
        <InfoSection {...homeObj} />
        <Suspense fallback={`loading`}>
          <AuditSection />
        </Suspense>
        <section className="not-struggling-section">
          <div className="medium-container">
            <h2>You Don't Have to Struggle Anymore... Bowie SEO Can Help</h2>
            <div>
              <ul className="count">
                <li>
                  <img
                    src="/images/searching.svg"
                    alt="Location icon"
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Let customers searching for your skills and services find your
                  business first when searching.
                </li>
                <li>
                  <img
                    src="/images/web-presence.svg"
                    alt="Location icon"
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Build your web presence and take customers back from your
                  competitors.
                </li>
                <li>
                  <img
                    src="/images/leads.svg"
                    alt="Location icon"
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Start getting leads and customers from your website,{' '}
                  <span className="highlight">[What it was meant to do]</span>.
                </li>
                <li>
                  <img
                    src="/images/rank-higher.svg"
                    alt="Rank higher than your competiton."
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Beat your competition and become the go to company in your
                  local area, city or town.
                </li>
                <li>
                  <img
                    src="/images/website.svg"
                    alt="Create websites that attract customers."
                    className="icons"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Make your website a magnet and attract your ideal customers
                  and existing customers.
                </li>
                <li>
                  <img
                    src="/images/partner.svg"
                    alt="Partner with local SEO agency."
                    className="icons filter-green"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                  Partner with an SEO agency that can help your business grow,
                  get customers and more leads.
                </li>
              </ul>
            </div>
            <h2>Let's Talk</h2>
            <p className="sub-text">
              Let's talk about how Bowie SEO can help your business grow.
            </p>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Book a call today!</Button>
            </a>
          </div>
        </section>
        {/* <section>
          <div className="container">
            <h2>How We Can Help Your Business Succeed Online</h2>
            <p>
              We know how it is to have a website that gets any leads, sales or
              any traffic. We've helped may businesses increase their traffic
              and grow their online visibility. Show up in the organice search
              results and the Google Map Pack, and let your customers find your
              skills and services.
            </p>
          </div>
        </section> */}
        <section className="why-use-seo-section">
          <div className="medium-container">
            <h2 className="title">
              5 Reasons Small Businesses Need Search Engine Optimization in 2022
            </h2>
            <h3>#1. Google Works 24/7 365</h3>
            <p>Google never sleeps.</p>
            <p>
              Google never stops working. It is constantly indexing new content,
              scanning the internet for changes, and updating its algorithms.
              This means that your website needs to be optimized for search
              engines in order to rank higher in search results.
            </p>
            <p>
              The algorithm that governs how sites are ranked is always
              changing. In fact, there have been over 3,200 updates to the
              Google algorithm since it was first created! This means that SEO
              is an ongoing process, and you can’t afford to let your site fall
              behind.
            </p>
            <p>
              SEO is important because it can help your website rank higher in
              search engine results pages (SERPs). Higher rankings can lead to
              increased traffic and higher brand awareness.
            </p>
            <h3>#2. You Need to be Found</h3>
            <p>
              If you want people to find your website, you need to be visible in
              search engine results pages. SEO can help you achieve this by
              improving your website’s ranking for relevant keywords.
            </p>
            <p>
              When potential customers search for products or services like
              yours, they are more likely to find your website if it is ranked
              highly in search results. This can lead to increased traffic and
              higher brand awareness.
            </p>
            <p>
              SEO is a long-term strategy that should be incorporated into your
              overall marketing plan. It is not a quick fix, but it can have a
              significant impact on your website’s visibility and traffic over
              time.{' '}
            </p>
            <p>
              Also,{' '}
              <a
                href="https://seoexpertbrad.com/local-seo-stats/"
                target="_blank"
                rel="noreferrer"
              >
                92% of people
              </a>{' '}
              will pick businesses on the first page of local search results.
            </p>

            <h3>#3. SEO Can Help You Get More Web Traffic</h3>
            <p>
              One of the main benefits of SEO is that it can help you increase
              traffic to your website. This is because higher rankings in search
              engine results pages can lead to more clicks and higher web
              traffic.
            </p>
            <p>
              More web traffic can lead to increased sales or leads, and higher
              brand awareness. SEO is a long-term strategy that should be
              incorporated into your overall marketing plan. It is not a quick
              fix, but it can have a significant impact on your website’s
              visibility and traffic over time.{' '}
            </p>
            <h3>#4. Search Engines Are Not Going Anywhere Anytime Soon</h3>
            <p>Search engines are not going anywhere.</p>
            <p>
              As long as people use the internet, every business will need SEO
              if they want to reach customers.
            </p>
            <p>Why?</p>
            <p>
              Because 93% of online experiences begin with search engines, and{' '}
              <a
                href="https://www.seroundtable.com/google-46-of-searches-have-local-intent-26529.html"
                target="_blank"
                rel="noreferrer"
              >
                46% of Google searches
              </a>{' '}
              are looking for local information.
            </p>
            <p>
              When people search for your services, your business will not
              appear in the search results without doing search engine
              optimization.
            </p>
            <h3>#5. SEO Can Help You Save Tons of Money</h3>
            <p>
              SEO can also help you save money. This is because it is a
              cost-effective marketing strategy. SEO can help you increase
              traffic and improve your brand awareness without the need for paid
              advertising.
            </p>
            <p>
              This means that you can save money on paid advertising campaigns,
              and instead focus on other marketing strategies. SEO is a
              long-term strategy that should be incorporated into your overall
              marketing plan. It is not a quick fix, but it can have a
              significant impact on your website’s visibility and traffic over
              time.{' '}
            </p>

            <hr></hr>
            <p>
              SEO is an important part of any marketing strategy. It can help
              you improve your website’s ranking, increase traffic, and improve
              your brand awareness. SEO is a long-term strategy that should be
              incorporated into your overall marketing plan. It is not a quick
              fix, but it can have a significant impact on your website’s
              visibility and traffic over time.{' '}
            </p>
            <p>
              If you want to improve your website’s ranking, increase traffic,
              and improve your brand awareness, you need to start incorporating
              SEO into your overall marketing plan.
            </p>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>
        <section className="our-services-section">
          <div className="services-container">
            <h2 className="title">Our SEO Services</h2>
            <p className="sub-text">
              We provide SEO to businesses in{' '}
              <Link href="/maryland-seo-company" passHref>
                <a>Maryland</a>
              </Link>
              , and{' '}
              <Link href="/dc-seo" passHref>
                <a>DC</a>
              </Link>{' '}
              .
            </p>
            <div className="services">
              <Container>
                <Link href="/local-seo" passHref>
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/local.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>Local SEO</h3>
                      <p>
                        Your local customers are looking for your skills and
                        services on Google. Make sure they find your company and
                        not someone else.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
                <Link href="/technical-seo" passHref>
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thiniking about getting a free mini SEO audit."
                        loading="lazy"
                      />
                      <h3>Technical SEO</h3>
                      <p>
                        Fix the technical issues that are stopping your website
                        from ranking higher and performing in the search
                        engines.
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
                        alt="SEO audit image."
                        loading="lazy"
                      />
                      <h3>SEO Audit</h3>
                      <p>
                        Do an SEO Audit and see why you're not ranking on the
                        first page of Google and what you must fix to help you
                        get on the first page.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
              </Container>
            </div>
            <div className="btn">
              <Link href="/seo-services" passHref>
                <Button>More Services</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="results-driven-process-section">
          <div className="medium-container">
            <h2>Our Results Driven Process</h2>
            <p className="sub-text">
              How do we get you results? We use our six-step process to generate
              measurable results. Years of helping clients achieve the success
              they want have helped us hone and refine this process.
            </p>
            <hr></hr>
          </div>
          <ResultsSection {...resultsObj} />
          <ResultsSection {...resultsObj1} />
          <ResultsSection {...resultsObj2} />
          <ResultsSection {...resultsObj3} />
          <ResultsSection {...resultsObj4} />
          <ResultsSection {...resultsObj5} />
        </section>
        <section className="pain-section">
          <div className="services-container">
            <h2>Working With Us is a Breeze</h2>
            <p className="sub-text">
              It's easy to work with us. If you want to use SEO to increase your
              website traffic, online visibility, leads and customers, contact
              us.
            </p>
            <Wrapper>
              <Contact>
                <h3>Contact us to Discuss a Strategy</h3>
                <img
                  src="/images/phone-call.svg"
                  alt="Call us."
                  className="icons"
                  loading="lazy"
                />
                <p>
                  Book a call with us and tell us about your business and what
                  you want to acheive.
                </p>
              </Contact>
              <Contact>
                <h3>We Analyze and Create a Plan</h3>
                <img
                  src="/images/plan.svg"
                  alt="We create a plan."
                  className="icons"
                  loading="lazy"
                />
                <p>
                  We analyze and do research on your industry, your business and
                  your competitors' data.
                </p>
              </Contact>
              <Contact>
                <h3>We Execute and Do the Work</h3>
                <img
                  src="/images/work-together.svg"
                  alt="We execute our plan and do the work."
                  className="icons"
                  loading="lazy"
                />
                <p>
                  We build a SEO strategy that will lead to positive results and
                  bring new opportunities to light.
                </p>
              </Contact>
            </Wrapper>
            <div className="btn">
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="pain-section">
          <div className="container">
            <h2>What Our Clients Say...</h2>
            <div className="testimonial">
              <div className="content">
                <p>
                  Before, I had no idea what search engine optimization was, how
                  it worked, or if it was right for my business. Thanks to Bowie
                  SEO, I now know what SEO is and how powerful it is. I never
                  got leads from my website before. Now I get leads almost every
                  week.
                </p>
                <div className="author">
                  <img
                    src="
                    https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631816208/monica_cqphqb.jpg"
                    alt="Monica Browne"
                    loading="lazy"
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <p className="author-name">Monica Browne</p>
                    <p>Wedding Planner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="medium-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-questions"></div>
            <ul>
              <h3>#1. What is SEO?</h3>
              <p>
                Search Engine Optimization (SEO) is the practice of improving
                the ranking of a website on search engines. The higher the
                ranking, the more likely people are to find the site.
              </p>
              <p>
                There are a number of factors that contribute to a website's
                ranking, including the quality and quantity of the content, the
                structure of the site, and the popularity of the site. SEO is
                about making sure that a website is designed in a way that makes
                it easy for search engines to find and index the site's content.
              </p>
              <p>
                SEO is a complex and ever-changing field, and there are no easy
                shortcuts to achieving high rankings. However, there are a
                number of things that can be done to improve a website's SEO,
                and by extension, its ranking.
              </p>
              <p>
                One of the most important things that can be done to improve a
                website's SEO is to create high-quality, keyword-rich content.
                This content should be well-written and informative, and it
                should include the keywords that people are likely to use when
                searching for information on the topic.
              </p>
              <p>
                Another important factor in SEO is link popularity. Links from
                other websites to a website help to improve its ranking, as they
                show that the site is popular and relevant. In order to get
                high-quality links, it is important to create quality content
                that other people will want to link to.
              </p>

              <h3>#2. How Can SEO Help My Business?</h3>
              <p>Seo can help your business in a number of ways, including:</p>
              <ul>
                <li>Increasing your visibility in search engines</li>
                <li>Driving traffic to the website</li>
                <li>Generating free leads and customers</li>
                <li>Improving your brand awareness and online reputation</li>
                <li>Enhancing customer satisfaction</li>
              </ul>
              <p>
                In short, SEO can be a powerful tool to help businesses grow and
                succeed online. If you're not using SEO, you're missing out on
                an opportunity to reach more customers and grow your business.
              </p>

              <h3>#3. What is The Cost Of SEO?</h3>
              <p>
                There is no one-size-fits-all answer to this question, as the
                cost of SEO can vary greatly depending on the size and scope of
                your project.
              </p>
              <p>
                However, as a general guide, you can expect to pay anywhere from{' '}
                <b>$1000 to $5,000 per month</b> for professional SEO services.
              </p>
              <p>
                And if your project is particularly large or complex, you may
                need to invest more money to get the results you're looking for.
                But in general, this is a good range to expect for most SEO
                projects.
              </p>
              <p>
                The cost of SEO can also vary depending on the keywords you want
                to target and the competition for those keywords. The more
                competitive the keywords, the more expensive it will be to rank
                for them. However, if you choose less competitive keywords, you
                may be able to get by with a smaller budget. Contact us today to
                learn more about our SEO services and pricing.
              </p>
            </ul>
            <ul>
              <h3>#4. How Long Does SEO Take to Work?</h3>
              <p>
                It's tough to give a definitive answer to this question because
                there are so many variables at play, including the specific
                industry, the competition level, the age of the website, and the
                quality of the content.
              </p>
              <p>
                Generally speaking, though, it can take anywhere from 3-6 months
                or 6-12 months for SEO to start having an impact on search
                engine rankings.
              </p>
              <p>
                This timeframe can be even longer for newer websites. However,
                with consistent effort and a well-planned strategy, it is
                possible to see results much sooner.
              </p>
              <p>
                There's no guarantee that SEO will work for every website, but
                it is still one of the most effective ways to improve your
                visibility and attract more traffic. If you're ready to invest
                in SEO for your business, contact us to get started.
              </p>

              <h3>#5. How Do I Calculate My SEO ROI?</h3>
              <p>
                It's important to be able to measure your SEO ROI (return on
                investment) in order to determine whether or not your SEO
                efforts are paying off. There are a number of different ways to
                calculate your SEO ROI, but the most important thing is to make
                sure you're tracking the right metrics.
              </p>
              <p>Some of the things you'll want to track include:</p>
              <ul>
                <li>The number of organic visitors to your website</li>
                <li>The number of leads generated from organic traffic</li>
                <li>The number of sales generated from organic traffic</li>
                <li>The conversion rate for organic traffic</li>
              </ul>
              <p>
                To get started, you'll need to set up tracking codes on your
                website so that you can accurately measure the traffic and
                conversions coming from your SEO campaigns. Once you have that
                set up, you can start to calculate your ROI.
              </p>
              <p>
                One thing to keep in mind is that SEO is a long-term strategy,
                so don't expect to see results overnight. It can take months or
                even years to see a significant return on your investment.
                However, if you stick with it and continue to track your
                progress, you should eventually start to see a positive ROI from
                your SEO efforts.
              </p>
              <p>
                SEO can be a great way to generate leads and sales for your
                business, but it's important to make sure you're tracking the
                right metrics so that you can accurately calculate your ROI. By
                doing so, you'll be able to tell whether or not your SEO efforts
                are paying off and make necessary changes to ensure a positive
                return on your investment.
              </p>
            </ul>
          </div>
        </section>
      </MainLayout>
    </>
  )
}
