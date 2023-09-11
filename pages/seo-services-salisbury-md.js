/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import {
  ReasonSec,
  Deliverable,
  Deliverables,
  Service,
} from '../components/LocatioPageEssentials'
import { getPosts } from '../lib/data'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

const SEOAgency = 'our SEO company'

export default function OceanCitySEO() {
  const SEO = {
    title: 'SEO Services Salisbury MD | Increase Traffic and Leads',
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
        <HeroSection
          heroText="With Our SEO Services in Salisbury, You Can Increase Traffic and Leads"
          subText="Let us take care of optimizing your website so that you can get more leads and customers."
          backgroundImage="/images/seo-services-laurel-md-cover.webp"
          backgroundHeight="70vh"
          backgroundPosition="center"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section className="article-section">
          <div className="medium-container grid">
            <div>
              <h2>
                Atttract More Leads Using SEO in Salisbury, or Lose Leads to
                Your Competition: It's Your Decision
              </h2>
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
            </div>
            <img
              src="/images/seo-services-salisbury-md.jpg"
              className="page-img-left"
              alt="Business owner thinking about getting SEO Services in Salisbury Maryland"
              title="Business owner thinking about getting SEO Services in Salisbury Maryland"
            />
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Book Your Free Call Today!</Button>
            </a>
          </div>
        </section>
        <section className="reasons-section">
          <div className="medium-container">
            <h2 className="title">
              7 Reasons Why Salisbury Business Owners must Invest In Search
              Engine Optimization
            </h2>
            <p className="center">
              Salisbury business owners need SEO to compete online. Partner with
              an SEO company that can build your lead-gen system that will boost
              your business presence, and bring more leads and customers.
            </p>
          </div>
          <div className="medium-container">
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
                  money on online advertising. If you're spending money on
                  Google AdWords or other forms of online advertising, you can
                  use SEO to improve your website so that you get more traffic
                  from organic search results. This can help you save money on
                  your advertising budget and get more leads and sales from your
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
            <h2 className="title">
              What You Can Expect With Our Salisbury SEO Services
            </h2>
            <p className="subtext">
              When you work with us, you get the following:
            </p>
          </div>
          <div className="medium-container">
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="One-on-one expert support."
                  loading="lazy"
                />
                <div>
                  <h3>Expert one-on-one support</h3>
                  <p>
                    We giv e you free, knowledgeable advice and support from our
                    SEO specialists. Contact us by phone or email if you have
                    any questions. We're here to support your expanding business
                    in any way we can.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get keyword research."
                  loading="lazy"
                />
                <div>
                  <h3>Keyword Research</h3>
                  <p>
                    Extensive{' '}
                    <Link href="/keyword-research">keyword analysis</Link>. We
                    find the most advantageous and pertinent terms that
                    customers use to find your business. We provide a keyword
                    database as well so you can keep creating SEO content.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get Google My Business Management."
                  loading="lazy"
                />
                <div>
                  <h3>Google My Business Management</h3>
                  <p>
                    We offer{' '}
                    <Link href="/gmb-management-services">
                      Google My Business management
                    </Link>{' '}
                    to help improve your local SEO rankings. Get a GMB page that
                    is completely optimized and rank in the map pack and local
                    search results.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get Google Analytics and Google Search Console set up."
                  loading="lazy"
                />
                <div>
                  <h3>Google Analytics and Google Console Configuration</h3>
                  <p>
                    We set up your Google Analytics and Search Console. We
                    monitor the effectiveness of your website using these
                    technologies. They also enable us to monitor how well your
                    website is doing on Google. They also assist us in
                    determining the improvements that can be made to enhance
                    user experience and rankings.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get a website audit."
                  loading="lazy"
                />
                <div>
                  <h3>SEO Audit</h3>
                  <p>
                    Find out what is keeping your website from ranking higher on
                    Google. With an SEO audit, we find out exactly what we need
                    to fix for your SEO campaign to get off the ground and be
                    successful.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get local SEO."
                  loading="lazy"
                />
                <div>
                  <h3>Local SEO</h3>
                  <p>
                    Show up when it counts. Local{' '}
                    <Link href="/search-engine-optimization">
                      search engine optimization
                    </Link>{' '}
                    in Salisbury puts your website in front local customers
                    looking for your services. With local SEO, local customers
                    will be able find your company instead of one of your
                    competitors. Get optimized content, a faster website, and
                    give your customers a better user experience.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get weekly updates."
                  loading="lazy"
                />
                <div>
                  <h3>We Give You Weekly Updates</h3>
                  <p>
                    Given your hectic schedule, we understand that you might not
                    have time to check in with us every day. To keep you
                    informed, we send out a weekly email update or call you to
                    let you know what's going on.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get content / service page creation and optimization."
                  loading="lazy"
                />
                <div>
                  <h3>Content / Service Page Creation / Optimization</h3>
                  <p>
                    We'll take care of writing your{' '}
                    <Link href="/content-for-seo">SEO content</Link> and service
                    pages for your website so that you won't have to. We write
                    content that bring in the most sales and money. We use the
                    data gathered from our SEO audit, keyword research, and
                    competitor analysis.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get to know everything we're doing- 100% transparency."
                  loading="lazy"
                />
                <div>
                  <h3>You'll Know Everything We're Doing</h3>
                  <p>
                    We're 100% transparent. Never worry about trying to figure
                    out what we're up to or if we're still working on your
                    campaign. Our staff will walk you through every stage of
                    what we're doing and how it's working in detail. We want you
                    to join in whatever capacity you wish. To give you peace of
                    mind that your campaign is in capable hands, we aim to keep
                    you up-to-date at all times.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="One-on-one expert support."
                  loading="lazy"
                />
                <div>
                  <h3>Tracking and Monitoring</h3>
                  <p>
                    We track and check your SEO campaign to make sure we're on
                    the right track to get you the results you want. We use
                    tools like Google Analytics, Google's Search Console,
                    Ahrefs, and SEMRush.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free Call Today!</Button>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="small-container">
            <p>
              <h2 className="title">
                How Does Search Engine Optimization Work, and How Can it Help
                Salisbury Business Owners?
              </h2>
              Search engine optimization (SEO) is the process of increaseing
              your website visibility when people search for your services.
            </p>
            <p>
              Local SEO is search engine optimization for your business in your
              area, which will be Salisbury.
            </p>
            <p>
              Local SEO makes easy for someone in Salisbury or in nearby cities
              to find your website.
            </p>
            <p>This includes places like:</p>
            <ul>
              <li>
                {' '}
                <Link href="/seo-services-ocean-city-md" passHref>
                  <a>Ocean City</a>
                </Link>
              </li>
              <li>Berlin, MD</li>
              <li>Whitehaven, MD</li>
              <li>Pokomoke, MD</li>
              <li>Easton, MD</li>
              <li>Ocean Pines, MD</li>
            </ul>
            <p>
              When they search for services like yours, your website will show
              up and people will see and click on your business listing.
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
            <h2 className="title">
              With Other SEO Companies in Salisbury, Why Work With Us?
            </h2>
            <p className="sub-text">
              Work with Bowie SEO and experience the difference between our
              company and other SEO companies.
            </p>
          </div>
          <div className="medium-container">
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
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and how does it work?</h3>
                  <p>
                    SEO is short form for “Search engine optimization”. It is a
                    long-term marketing strategy employed in order to improve a
                    websites visibility and organic search results in google and
                    other global search engines.
                  </p>
                  <p>
                    SEO works by optimizing a website for Google’s algorithm.
                    The goal is to make your site rank higher in the search
                    engine results pages (SERPs). In order to do this, SEO
                    attempts to improve a websites relevancy and authority. A
                    website’s relevancy is determined by how well it covers the
                    topic that the user is searching for. Authority is
                    determined by things like inbound links, social signals, and
                    brand mentions.{' '}
                  </p>
                </div>
                <div className="question">
                  <h3>Is SEO worth it for small business?</h3>
                  <p>
                    Yes, SEO is worth it for small business. SEO can be a very
                    effective way to grow your small business. It’s a long-term
                    strategy that can help you build your brand and get more
                    traffic and leads from Google for free.
                  </p>
                  <h3>How much does SEO cost in Salisbury?</h3>
                  <p>
                    The monthly cost for SEO ranges from $1000 to $5,000+. The
                    cost can vary depending on the competitiveness of your
                    industry and the keywords you are targeting. Generally, SEO
                    is more affordable than PPC advertising and other forms of
                    paid marketing.
                  </p>
                </div>
                <div className="question">
                  <h3>How long does it take for SEO to work?</h3>
                  <p>
                    The time it takes for SEO to work depends on a number of
                    factors, including the age of your website, the
                    competitiveness of your industry, and the quality of your
                    SEO efforts. In general, it takes 3-6 months for SEO to
                    start working. However, it is important to note that SEO is
                    a long-term marketing strategy, and the results you see
                    after 3-6 months are just the beginning.
                  </p>
                </div>
                <div className="question">
                  <h3>What is better PPC or SEO?</h3>
                  <p>
                    The answer to this question depends on your goals. If you
                    are looking for immediate results, then Google Ads is the
                    better option. However, if you are looking for a long-term
                    marketing strategy that will help you build your brand and
                    get more traffic and leads from Google over time, then SEO
                    is the better option.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>What is the Difference between SEO and Local SEO</h3>
                  <p>
                    In short, SEO (search engine optimization) is the process of
                    improving the visibility and ranking of your website in
                    search engine results pages (SERPs). Local SEO, on the other
                    hand, is focused on optimizing your website for local search
                    results.
                  </p>
                </div>
                <div className="question">
                  <h3>How long would it take to rank my website??</h3>
                  <p>
                    The time it takes to rank a website depends on many factors,
                    including the age of the site, the competition for keywords,
                    and the quality of the site’s content. In general, it takes
                    longer to rank a new website than an established one. It
                    also takes more effort to rank for competitive keywords than
                    for less popular ones.
                  </p>
                </div>
                <div className="question">
                  <h3>How Long is Your Contract for Doing SEO?</h3>
                  <p>Our contracts are month-to-month.</p>
                  <p>
                    You can cancel your contract 30 day prior to the end of the
                    month.
                  </p>
                  <p>
                    But would you cancel if you’re getting leads and making more
                    money?
                  </p>
                </div>
                <div className="question">
                  <h3>Can You Guarantee Me #1 Rankings on Google?</h3>
                  <p>No.</p>
                  <p>
                    SEO is an ever-changing field, and what works today may not
                    work tomorrow. Because of this, no one can guarantee you
                    first page rankings. However, an experienced SEO consultant
                    can help improve your website’s ranking in the search engine
                    results pages (SERPs).
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Have to Change My site for SEO to work?</h3>
                  <p>We might have to.</p>
                  <p>
                    We will update your website's title, meta tags, and content
                    to reflect keywords that we believe will be most valuable to
                    you. Additionally, we'll create or update your website's
                    sitemap so that search engines can more easily find and
                    index your site. Finally, we'll set up Google Analytics so
                    that you can track your SEO progress over time. And we may
                    have to alter the design if it is not user friendly.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/seo-services-laurel-maryland.webp"
            alt="Man calling to get SEO services in Laurel."
            title="Man calling to get SEO services in Laurel."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Boost Your Sales and Revenue?</h2>
            <p>
              Contact {SEOAgency} and we'll show you how our Salisbury SEO
              services can help your company grow.
            </p>
            <p>You have nothing to lose.</p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation!</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
