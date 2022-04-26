/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { getPosts } from '../lib/data'
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

// import AuditSection from '../components/AuditSection'
const AuditSection = dynamic(() => import('../components/AuditSection'))
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false })

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

const calendly = 'https://calendly.com/bowieseo/30min'

export default function Home({ data }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <HeroSection
        heroBtnLink1={calendly}
        heroBtnLink2="/free-mini-seo-audit"
      />
      <main>
        <section className="pain-section">
          <div className="container">
            <h2>
              We Get it... Digital Marketing is Tough For Small Business Owners!
            </h2>
            <div className="side-by-side">
              <ul className="count">
                <li>
                  <img
                    src="/images/paying-for-seo.svg"
                    alt="Customers paying."
                    className="icons filter-green"
                    loading="lazy"
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
                  />
                  <p>
                    Following so called expert advice and not getting any real
                    results.
                  </p>
                </li>
              </ul>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </section>
        <InfoSection {...homeObj} />
        <AuditSection />
        <section className="not-struggling-section">
          <div className="container">
            <h2>You Don't Have to Struggle Anymore... Bowie SEO Can Help</h2>
            <div>
              <ul className="count">
                <li>
                  <img
                    src="/images/searching.svg"
                    alt="Location icon"
                    className="icons"
                    loading="lazy"
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
          <div className="container">
            <div>
              <h2>5 Reasons Why You Need Search Engine Optimization in 2022</h2>
              <h3>#1. Google Works 24/7 365</h3>
              <p>Google never sleeps.</p>
              <p>
                Google never stops working. It is constantly indexing new
                content, scanning the internet for changes, and updating its
                algorithms. This means that your website needs to be optimized
                for search engines in order to rank higher in search results.
              </p>
              <p>
                The algorithm that governs how sites are ranked is always
                changing. In fact, there have been over 3,200 updates to the
                Google algorithm since it was first created! This means that SEO
                is an ongoing process, and you can’t afford to let your site
                fall behind.
              </p>
              <p>
                SEO is important because it can help your website rank higher in
                search engine results pages (SERPs). Higher rankings can lead to
                increased traffic and higher brand awareness.
              </p>
            </div>
            <div>
              <h3>#2. You Need to be Found</h3>
              <p>
                If you want people to find your website, you need to be visible
                in search engine results pages. SEO can help you achieve this by
                improving your website’s ranking for relevant keywords.
              </p>
              <p>
                When potential customers search for products or services like
                yours, they are more likely to find your website if it is ranked
                highly in search results. This can lead to increased traffic and
                higher brand awareness.
              </p>
              <p>
                SEO is a long-term strategy that should be incorporated into
                your overall marketing plan. It is not a quick fix, but it can
                have a significant impact on your website’s visibility and
                traffic over time.{' '}
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
            </div>
            <div>
              <h3>#3. SEO Can Help You Get More Web Traffic</h3>
              <p>
                One of the main benefits of SEO is that it can help you increase
                traffic to your website. This is because higher rankings in
                search engine results pages can lead to more clicks and higher
                web traffic.
              </p>
              <p>
                More web traffic can lead to increased sales or leads, and
                higher brand awareness. SEO is a long-term strategy that should
                be incorporated into your overall marketing plan. It is not a
                quick fix, but it can have a significant impact on your
                website’s visibility and traffic over time.{' '}
              </p>
            </div>
            <div>
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
            </div>
            <div>
              <h3>#5. SEO Can Help You Save Tons of Money</h3>
              <p>
                SEO can also help you save money. This is because it is a
                cost-effective marketing strategy. SEO can help you increase
                traffic and improve your brand awareness without the need for
                paid advertising.
              </p>
              <p>
                This means that you can save money on paid advertising
                campaigns, and instead focus on other marketing strategies. SEO
                is a long-term strategy that should be incorporated into your
                overall marketing plan. It is not a quick fix, but it can have a
                significant impact on your website’s visibility and traffic over
                time.{' '}
              </p>
            </div>
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
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>let's talk today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="our-services-section">
          <div className="services-container">
            <h2>Our Most Popular Services</h2>
            <p className="sub-text">
              Our services will help your business get more website traffic and
              attract potential customers. We not a full service agency, we're
              an SEO company that specialize in search engine optimization for
              businesses in DC,{' '}
              <Link href="/maryland-seo-company">
                <a>Maryland</a>
              </Link>
              , and Virginia.
            </p>
            <div className="services">
              <Container>
                <Link href="/seo-services">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/search-engines.svg"
                        alt="Keyword ranking image"
                        loading="lazy"
                      />
                      <h3>SEO</h3>
                      <p>
                        Get more website traffic and more leads with our
                        powerful search engine optimization services. Let Bowie
                        SEO put your business on the path to SEO success.
                      </p>
                    </div>
                    <p>Learn more</p>
                  </Card>
                </Link>
                <Link href="/local-seo-maryland">
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
                </Link>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/audit.svg"
                      alt="SEO audit image."
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

                <Card>
                  <div className="card-info">
                    <img
                      src="/images/analysis.svg"
                      alt="Man analyzing data."
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
                      alt="Man doing competitive analysis."
                      loading="lazy"
                    />
                    <h3>GMB Optimization</h3>
                    <p>
                      Optimize your Goolge My Business page and let your
                      customers find you directly in the Google Map Pack.
                    </p>
                  </div>
                  <p>Learn more</p>
                </Card>
                <Link href="/free-mini-seo-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thiniking and in thought about why her website is not ranking."
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
            <div className="btn">
              <Link href="/seo-services" passHref>
                <Button>More Services</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="results-driven-process-section">
          <div className="container">
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
        <section>
          <div className="container">
            <h2>
              Why Work With Bowie SEO Instead of Other Digital Marketing
              Companies?
            </h2>
            <p>
              With other companies offering so many digital marketing solutions,
              it's hard to choose the right company to do your SEO.
            </p>
            <h3>#1. We Only Specialize in SEO</h3>
            <p>
              We only specialize in SEO services. We don't do web development,
              search marketing, social media management, or any other types of
              digital marketing.
            </p>
            <p>
              We don't do web designing, Google ads, or social media marketing.
            </p>
            <p>
              Our focus is to help your business get more traffic leads and make
              more money with search engine optimization.
            </p>
            <p>
              If we didn't focus on SEO alone, we wouldn't consider ourselves to
              be experts.
            </p>
            <h3>#2. We Become Partners, Not Just a Contractor</h3>
            <img
              src="images/partner.svg"
              className="why-us-img"
              alt="Grow with SEO"
              loading="lazy"
            />
            <p>When you hire us, we work together.</p>
            <p>
              We become part of your company and our focus is to generate
              growth.
            </p>
            <p>
              We work together to make sure your business attracts more
              customers, generates more leads, ranks higher in the search
              engines, and makes more money.
            </p>
            <p>When you succeed, we succeed.</p>
            <h3>#3. Full Transparency</h3>
            <img
              src="images/transparency.svg"
              className="why-us-img"
              alt="Grow with SEO"
              loading="lazy"
            />
            <p>You don't have to ask us what we're doing.</p>
            <p>
              You don't have to ask us what we're doing. We're happy to show you
              and tell you everything.
            </p>
            <p>
              We'll never keep you in the dark and you'll never have wait a
              month to wonder what we're doing or what's going on with your
              campaign.
            </p>
            <h3>#4. You Can Grow Without Us</h3>
            <img
              src="images/grow.svg"
              className="why-us-img"
              alt="Grow with SEO"
              loading="lazy"
            />
            <p>Yes, it is true.</p>
            <p>You can continue to grow your business without us.</p>
            <p>
              Our goal is to build a foundation for your website that will
              continue to thrive without us.
            </p>
            <p>You will still have success if you decide to leave us.</p>
            <h3>#5 . We Focus on Your Company's Growth, Not Our's</h3>
            <img
              src="images/results.svg"
              className="why-us-img"
              alt="Grow with SEO"
              loading="lazy"
            />
            <p>Let us be clear.</p>
            <p>
              When we work together, our company focus is to get you the best
              return on your investment.
            </p>
            <p>
              That means that you must experience an increase in leads,
              customers, and an increase in revenue.
            </p>
            <p>
              Once you experience positive growth in your business, it means we
              are doing what you hired us to do.
            </p>
            <p>And that comes first.</p>
          </div>
          <div className="btn">
            <Link href={calendly} passHref>
              <Button>Book a call today</Button>
            </Link>
          </div>
        </section>
        <section className="pain-section">
          <div className="services-container">
            <h2>Work With Us, It's Really Easy</h2>
            <p className="sub-text">
              It's easy to work with us. If you need more traffic, online
              visibility, or you want to make more money with digital marketing,
              contact us.
            </p>
            <Wrapper>
              <Contact>
                <h3>Call us to Start or Ask Any Questions</h3>
                <img
                  src="/images/phone-call.svg"
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
                <img src="/images/plan.svg" className="icons" loading="lazy" />
                <p>
                  We analyze and do research on your industry, your business and
                  your competitors' data.
                </p>
              </Contact>
              <Contact>
                <h3>We Execute and Do the Work</h3>
                <img
                  src="/images/work-together.svg"
                  className="icons"
                  loading="lazy"
                />
                <p>
                  We build a strategy that will lead to positive results and
                  bring new opportunities to light.
                </p>
              </Contact>
            </Wrapper>
            <div className="btn">
              <Link href={calendly} passHref>
                <Button>Book a Call Today!</Button>
              </Link>
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
                    src="/images/analyze.svg"
                    className="avatar"
                    alt="Monica Browne"
                    loading="lazy"
                  />
                  <div>
                    <p className="author-name">Monica Browne</p>
                    <p>Wedding Planner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn">
              <Link href="/contact" passHref>
                <Button>Read more reviews on Google!</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="pain-section">
          <div className="container">
            <h2>Tips From Our Blog</h2>
          </div>
          <div className="front-page-blog-container">
            {data.posts.map((post) => (
              <div key={post.slug}>
                <div className="blog-posts">
                  <img src={post.coverImage.url} alt={post.title} />
                  <div className="blog-info">
                    <Link href={`/${post.slug}`}>
                      <a>
                        <h2>{post.postTitle}</h2>
                      </a>
                    </Link>
                    <Link href={`/${post.slug}`}>
                      <a>Read more</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn">
            <Link href="/blog" passHref>
              <Button>Read more!</Button>
            </Link>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-questions">
              <section>
                <h3>#1. What is SEO?</h3>
                <p>
                  Search Engine Optimization (SEO) is the practice of improving
                  the ranking of a website on search engines. The higher the
                  ranking, the more likely people are to find the site.
                </p>
                <p>
                  There are a number of factors that contribute to a website's
                  ranking, including the quality and quantity of the content,
                  the structure of the site, and the popularity of the site. SEO
                  is about making sure that a website is designed in a way that
                  makes it easy for search engines to find and index the site's
                  content.
                </p>
                <p>
                  SEO is a complex and ever-changing field, and there are no
                  easy shortcuts to achieving high rankings. However, there are
                  a number of things that can be done to improve a website's
                  SEO, and by extension, its ranking.
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
                  other websites to a website help to improve its ranking, as
                  they show that the site is popular and relevant. In order to
                  get high-quality links, it is important to create quality
                  content that other people will want to link to.
                </p>
              </section>
              <div className="btn">
                <Link href={calendly} passHref>
                  <Button>Book a call today</Button>
                </Link>
              </div>
              <section>
                <h3>#2. How Can SEO Help My Business?</h3>
                <p>
                  Seo can help your business in a number of ways, including:
                </p>
                <ul>
                  <li>Increasing visibility in search engines</li>
                  <li>Driving traffic to the website</li>
                  <li>Generating leads and sales</li>
                  <li>Improving brand awareness and reputation</li>
                  <li>Enhancing customer satisfaction</li>
                </ul>
                <p>
                  In short, SEO can be a powerful tool to help businesses grow
                  and succeed online. If you're not using SEO, you're missing
                  out on an opportunity to reach more customers and grow your
                  business.
                </p>
              </section>
              <div className="btn">
                <Link href="/free-mini-seo-audit" passHref>
                  <Button>Free Mini SEO Audit!</Button>
                </Link>
              </div>
              <section>
                <h3>#3. What is The Cost Of SEO?</h3>
                <p>
                  There is no one-size-fits-all answer to this question, as the
                  cost of SEO can vary greatly depending on the size and scope
                  of your project.
                </p>
                <p>
                  However, as a general guide, you can expect to pay anywhere
                  from <b>$1000 to $5,000 per month</b> for professional SEO
                  services. Of course, if you're just starting out, you may be
                  able to get by with a lower budget.
                </p>
                <p>
                  And if your project is particularly large or complex, you may
                  need to invest more money to get the results you're looking
                  for. But in general, this is a good range to expect for most
                  SEO projects.
                </p>
                <p>
                  The cost of SEO can also vary depending on the keywords you
                  want to target and the competition for those keywords. The
                  more competitive the keywords, the more expensive it will be
                  to rank for them. However, if you choose less competitive
                  keywords, you may be able to get by with a smaller budget.
                  Contact us today to learn more about our SEO services and
                  pricing.
                </p>
              </section>
              <div className="btn">
                <Link href="/contact" passHref>
                  <Button>Contact us today!</Button>
                </Link>
              </div>
              <section>
                <h3>#4. How Long Does SEO Take to Work?</h3>
                <p>
                  It's tough to give a definitive answer to this question
                  because there are so many variables at play, including the
                  specific industry, the competition level, the age of the
                  website, and the quality of the content.
                </p>
                <p>
                  Generally speaking, though, it can take anywhere from 3-6
                  months or 6-12 months for SEO to start having an impact on
                  search engine rankings.
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
              </section>
              <div className="btn">
                <Link href={calendly} passHref>
                  <Button>Book a Call Today!</Button>
                </Link>
              </div>
              <section>
                <h3>#5. How Do I Calculate My SEO ROI?</h3>
                <p>
                  It's important to be able to measure your SEO ROI (return on
                  investment) in order to determine whether or not your SEO
                  efforts are paying off. There are a number of different ways
                  to calculate your SEO ROI, but the most important thing is to
                  make sure you're tracking the right metrics.
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
                  so don't expect to see results overnight. It can take months
                  or even years to see a significant return on your investment.
                  However, if you stick with it and continue to track your
                  progress, you should eventually start to see a positive ROI
                  from your SEO efforts.
                </p>
                <p>
                  SEO can be a great way to generate leads and sales for your
                  business, but it's important to make sure you're tracking the
                  right metrics so that you can accurately calculate your ROI.
                  By doing so, you'll be able to tell whether or not your SEO
                  efforts are paying off and make necessary changes to ensure a
                  positive return on your investment.
                </p>
              </section>
            </div>
          </div>
          <div className="btn">
            <Link href={calendly} passHref>
              <Button>Book a Call Today!</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
