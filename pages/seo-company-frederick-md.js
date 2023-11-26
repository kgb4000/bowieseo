/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
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
import { Business, Businesses } from '../components/BusinessesWeWorkWith'

import { NextSeo } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const SEOAgency = 'Bowie SEO'

export default function SEOCompanyFrederickMD() {
  const SEO = {
    title:
      'SEO Company in Frederick MD | Build Your Own Lead-Gen Website Today',
    description:
      'Build your own lead-generating website with search engine optimization and stop paying for Facebook and Google ads. Call for your free consultation!',
    canonical: 'https://bowieseo.com/seo-company-frederick-md',
    openGraph: {
      title:
        'SEO Company in Frederick MD | Build Your Own Lead-Gen Website Today',
      description:
        'Build your own lead-generating website with search engine optimization and stop paying for Facebook and Google ads. Call for your free consultation!',
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Frederick's Premier SEO Company: Elevating Your Online Presence"
          subText="Drive More Traffic, Generate Leads, and Skyrocket Sales with Our Tailored SEO Strategies"
          backgroundImage="/images/frederick-maryland-seo-company-cover.jpg"
          backgroundHeight="80vh"
          backgroundPosition="top"
          buttonText="Get Your Free SEO Audit &#8594;"
          buttonLink="/free-seo-audit"
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <div>
                <h2>Struggling to Make Your Business Visible on Google?</h2>
                <p>We get it, you're swamped.</p>
                <p>
                  Running your business leaves little time to dive into the
                  complexities of digital marketing.
                </p>
                <p>
                  Yet, its importance is undeniable. Without it, staying ahead
                  becomes a challenge.
                </p>
                <p>
                  You've dabbled in Facebook, Instagram, and Google ads, but the
                  return was underwhelming and costly.
                </p>
                <p>
                  Even paying for leads from HomeAdvisor, Angie’s List, and
                  Thumbtack has led to a frustrating race to the bottom in
                  pricing.
                </p>
                <p>
                  Meanwhile, your Frederick competitors are climbing Google's
                  ranks, attracting more customers, and expanding their reach.
                </p>
                <p>The pressure is mounting.</p>
                <p>
                  Without a boost in business, tough decisions loom – from staff
                  cuts to potentially closing doors.
                </p>
                <p>
                  <strong>
                    That's not the outcome you're working towards, right?
                  </strong>
                </p>
                <p>Ignoring the issue won't make it any better.</p>
                <p>This is where our expertise comes in.</p>
                <p>Our strategy?</p>
                <p>
                  Leveraging search engine optimization to elevate your
                  website's presence on Google for relevant searches.
                </p>
                <p>
                  As a{' '}
                  <Link href="/maryland-seo-company">
                    Maryland-based SEO Company
                  </Link>
                  , we specialize in crafting lead-generating websites for
                  Frederick businesses.
                </p>
                <p>
                  Imagine owning a website that consistently brings in leads.
                </p>
                <p>Let's make that a reality.</p>
              </div>
              <img
                src="/images/seo-company-frederick-md.jpg"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="A business owner considering working with a frederick SEO ccompany."
                title="A business owner considering working with a frederick SEO ccompany."
                loading="lazy"
              />
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/happy-bowie-seo-client.webp"
                className="page-img"
                width="1000px"
                height="600px"
                alt="A business owner considering working Bowie SEO to get his own leads without paying for online ads."
                title="A happy business owner working with Bowie SEO to get his own leads without paying for online ads."
                loading="lazy"
              />
              <div>
                <h2>
                  Capture High-Value Leads and Skyrocket Your Sales—All Without
                  Spending a Dime on Ads!
                </h2>
                <p>
                  Tired of watching your hard-earned marketing budget vanish
                </p>
                <p>
                  You're not alone. With ad costs spiraling upwards, many
                  business owners in Frederick feel trapped in a pay-to-play
                  game they can't win.
                </p>
                <p>
                  <strong>
                    But what if I told you there's a way to break free?
                  </strong>
                </p>
                <p>
                  <Link href="/search-engine-optimization">
                    Search engine optimization
                  </Link>
                  .
                </p>
                <p>
                  With SEO, you're not just throwing darts in the dark; you're
                  magnetically attracting people who are actively seeking your
                  products or services.
                </p>
                <p>
                  No more paying for aimless clicks; just free, high-quality
                  traffic ready to convert.
                </p>
                <p>Here's how SEO will revolutionize your business:</p>
                <p>
                  🔥 <strong>Organic Traffic Galore—No Ads Needed</strong>
                </p>
                <p>
                  Enjoy a constant flow of free, organic traffic directly to
                  your website. Say goodbye to inflated ad budgets and hello to
                  a sustainable influx of genuinely interested prospects.
                </p>
                <p>
                  <strong>🔥 Turbocharge Your Lead Generation & Revenue</strong>
                </p>
                <p>
                  Translate that organic traffic into quantifiable leads, sales,
                  and revenue. Increase inquiries, phone calls, and purchase
                  orders—all without a cent spent on ads.
                </p>
                <p>
                  <strong>🔥 Position Yourself as the Go-To Expert</strong>
                </p>
                <p>
                  SEO doesn't just put you in front of more eyes; it puts you in
                  front of the right eyes. Secure top spots in search results
                  and be recognized as the industry leader you truly are.
                </p>
                <p>
                  <strong>
                    🔥 Dominate Google's First Page and Own Your Local Market
                  </strong>
                </p>
                <p>
                  Don't just get listed; get featured. Scale to the top of
                  Google's first page and make your business the first choice
                  for local customers actively looking for your services.
                </p>
                <p>
                  <strong>
                    🔥 Boost Your Online Footprint—Outshine the Competition
                  </strong>
                </p>
                <p>
                  When your business appears prominently in search results,
                  you’re not just winning customers; you're stealing them from
                  competitors who haven’t mastered SEO yet.
                </p>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="title">
              We Help Businesses Like Yours in Frederick, MD, Attract Leads and
              Customers Online
            </h2>
            <p className="subtext">
              We provide SEO to businesses in Frederick and the rest of Southern
              Maryland.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/waldorf-search-engine-optimization.webp"
                  alt="Frederick MD Services"
                  title="Frederick MD SEO Services"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Frederick SEO</h3>
                  <p>
                    Implement search engine optimization strategies to ensure
                    that your customers find your business on Google, rather
                    than stumbling upon your competitors.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/waldorf-gmb-management.webp"
                  alt="Frederick Google My Business Management"
                  title="Federick Google My Business Management"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>GMB Management</h3>
                  <p>
                    Enhance your local presence by optimizing your Google My
                    Business profile. Boost your GMB profile and improve your
                    local SEO performance and taking your business to new
                    heights.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/seo-audit-waldorf.webp"
                  alt="Free Mini SEO Audit"
                  title="Free Mini SEO Audit"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>SEO Audit</h3>
                  <p>
                    Improve your SEO rankings and overall performance with our
                    free mini SEO audit. Uncover obstacles that block your
                    ability to attract more leads and customers.
                  </p>
                </div>
              </div>
            </Service>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="title">
              Unleash the Untapped Potential of SEO: 8 Game-Changing Benefits
              for Frederick Businesses
            </h2>
            <p className="subtext">
              Wondering how to put your business on the local map—both literally
              and metaphorically? Say hello to Frederick Local SEO, your secret
              weapon to dominating the neighborhood market. Here are eight
              undeniable advantages that will revolutionize your business:
            </p>
          </div>
          <div className="medium-container">
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Skyrocket Local Presence</h3>
                  <p>
                    Don't just show up—stand out! With a laser-focused Local SEO
                    approach, your business won't just appear in local listings;
                    it'll take the coveted top spot and be the star of the
                    "Local Map Pack."
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Increase Foot Traffic</h3>
                  <p>
                    Who says digital can't drive physical traffic? Elevate your
                    search engine rankings, and watch as customers flood into
                    your storefront. A higher online profile means increased
                    foot traffic; it's as simple as that.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Transform Searchers into Customers</h3>
                  <p>
                    Let's face it: Local searches are like a goldmine of
                    high-intent customers. Someone searching "emergency plumbing
                    service" is far more likely to need your help immediately
                    than someone Googling "DIY plumbing hacks."
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>Leapfrog Local Rivals</h3>
                  <p>
                    Still sitting on the Local SEO fence? Your competitors
                    aren't. Make the move to optimize your local search and not
                    only match but surpass competitors who are already in the
                    game. This isn't just keeping up with the Joneses; it's
                    outpacing them.
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
                  <h3>Forge Credibility & Win Community Trust</h3>
                  <p>
                    Consistency is key. Consistently appearing in local searches
                    with a Google My Business profile rich in rave reviews will
                    make you a local legend. Build trust, gain credibility, and
                    become the go-to in your community.
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
                  <h3>Effortless, Wallet-Friendly Marketing</h3>
                  <p>
                    With Google My Business Messaging, you're not just a search
                    result—you're a responsive entity. Solve problems, answer
                    queries, and establish rapport with your customers directly
                    from their initial search.
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
                  <h3>Engage Customers Before They Even Step Inside</h3>
                  <p>
                    With Google My Business Messaging, you're not just a search
                    result—you're a responsive entity. Solve problems, answer
                    queries, and establish rapport with your customers directly
                    from their initial search.
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
                  <h3>Crystal-Clear ROI Tracking</h3>
                  <p>
                    What's the impact of your Local SEO investment? Don't guess;
                    know. Comprehensive analytics let you track everything from
                    search rankings and web traffic to conversion rates.
                    Measure, tweak, and triumph.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/home-service-business-waldorf-md.webp"
                className="page-img"
                alt="Home service buisness."
                title="Home service businesses we work with in Frederick."
              />
              <div>
                <h2>Businesses We Partner With in Frederick, MD</h2>
                <p>
                  We love partnering with home service businesses that cater to
                  customer needs. Our goal is to amplify your online visibility,
                  driving more leads and boosting sales for your business.
                </p>
                <Businesses>
                  <Business>
                    <img
                      src="/images/icons/asphalt-paving-contractor.png"
                      className="business-icon"
                      alt="Businesses our company works with - Asphalt paving companies."
                      title="Businesses we work with - Asphalt paving companies."
                      loading="lazy"
                    />
                    <p>Asphalt Paving Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/plumbing-contractors.png"
                      className="business-icon"
                      alt="Businesses our company works with - Plumbing Contractors."
                      title="Businesses our company works with - Plumbing Contractors."
                      loading="lazy"
                    />
                    <p>Plumbing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/hvac-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - HVAC Contractors."
                      title="Businesses we work with - HVAC Contractors."
                      loading="lazy"
                    />
                    <p>HVAC Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/roofing-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Roofing Contractors."
                      title="Businesses we work with - Roofing Contractors."
                      loading="lazy"
                    />
                    <p>Roofing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/landscaping-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Landscaping Companies."
                      title="Businesses we work with - Landscaping Companies."
                      loading="lazy"
                    />
                    <p>Landscaping Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/pest-control-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Pest Control Companies."
                      title="Businesses we work with - Pest Control Companies."
                      loading="lazy"
                    />
                    <p>Pest Control Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/electrical-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Electrical Contractors."
                      title="Businesses we work with - Electrical Contractors."
                      loading="lazy"
                    />
                    <p>Electrical Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/swimming-pool-builders.png"
                      className="business-icon"
                      alt="Businesses we work with - Swimming Pool Builders."
                      title="Businesses we work with - Swimming Pool Builders."
                      loading="lazy"
                    />
                    <p>Swimming Pool Builders</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/junk-removal-companies.png"
                      className="business-icon"
                      alt="Asphalt paving companies - Businesses we work with."
                      title="Businesses we work with - Asphalt paving companies."
                      loading="lazy"
                    />
                    <p>Junk Removal Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/general-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - General Contractors."
                      title="Businesses we work with - General Contractors."
                      loading="lazy"
                    />
                    <p>General Contractors</p>
                  </Business>
                </Businesses>
                <p>
                  Call us today and let’s see how we can help find opportunities
                  to help boost your sales and revenue.
                </p>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        {/* <div className="container">
          <img
            src="/images/frederick-md-seo-company.webp"
            className="page-img-left"
            width="1440px"
            height="600px"
            alt="Frederick SEO company."
            title="Work with our Frederick SEO company to increase your online visibility."
          />
        </div> */}
        <section>
          <div className="container">
            <h2 className="title">
              Why Choose Us for Your SEO Services in Frederick, Maryland
            </h2>
            <p className="subtext">
              Save time and money, and acheive your sales and revenue goals by
              working with{' '}
              <Link href="/maryland-seo-company">Maryland SEO specialists</Link>
              . We work only for you, not your competition.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/save-time.webp"
                  alt="Focus on your business."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>
                    Focus on Your Business, Leave the Digital Marketing to Us
                  </h3>
                  <p>
                    Run your business with ease: leave keyword research,
                    copywriting, and competitor analysis to the experts.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/google-my-business.webp"
                  alt="Save time."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>
                    Save Time and Money: Increase Web Traffic and Lead-Gen
                  </h3>
                  <p>
                    Use proven search marketing stategies to boost your
                    business's online visibility and get more eyse on your
                    business.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/digital-marketing-team.webp"
                  alt="Get your own SEO team."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>
                    Gain a Dedicated SEO Team Exclusively for Your Business's
                    Online Growth
                  </h3>
                  <p>
                    Enjoy the support of your own team of SEO specialists
                    dedicated to growing your business and uncovering new
                    opportunities to connect with potential customers.
                  </p>
                </div>
              </div>
            </Service>
            <p className="subtext">
              Want to see how we can help you grow your business with SEO?
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              Frequently Asked Questions About SEO for Frederick Businesses
            </h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and how does it work?</h3>
                  <p>
                    SEO is short form{' '}
                    <Link href="/search-engine-optimization" passHref>
                      Search engine optimization
                    </Link>
                    .
                  </p>
                  <p>
                    SEO involves tailoring a website to align with the criteria
                    and algorithms used by search engines. The primary objective
                    is to elevate the website's position on the Search Engine
                    Results Pages (SERPs). To achieve this, SEO focuses on
                    boosting both the relevancy and authority of your website.
                    Relevancy relates to how accurately a website's content
                    matches the search query of a user. Authority is gauged by
                    factors such as the number and quality of inbound links from
                    other sites, social media signals, and mentions of the brand
                    across the web. By improving these aspects, SEO aims to make
                    your website better in the eyes of search engines, which
                    increases its visibility to users.
                  </p>
                </div>
                <div className="question">
                  <h3>Is SEO worth it for small business?</h3>
                  <p>
                    No doubt, SEO is valuable for small businesses. It's an
                    effective tool for growth, offering a long-term strategy
                    that can significantly enhance your brand's visibility. By
                    optimizing your online presence, you can attract more
                    traffic and generate leads from Google without the direct
                    costs associated with traditional advertising. This makes
                    SEO a cost-effective and sustainable approach for small
                    businesses looking to expand their reach and customer base.
                  </p>
                  <h3>How much is SEO services in Frederick per month?</h3>
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
                    The timeframe for SEO to show results varies based on
                    several factors, such as the age and current standing of
                    your website, the level of competition in your industry, and
                    the effectiveness of your SEO strategies. Generally, it can
                    take about 3-6 months to start seeing the impact of SEO
                    efforts. However, it's crucial to understand that SEO is a
                    long-term investment; the outcomes observed in the initial
                    3-6 months are just the start. As you continue to refine and
                    adapt your SEO strategies, the benefits tend to grow and
                    compound over time, leading to more substantial results in
                    the long run.
                  </p>
                </div>
                <div className="question">
                  <h3>What is better PPC or SEO?</h3>
                  <p>
                    The choice between PPC and SEO depends on your objectives.
                    For quick, immediate results, PPC (like Google Ads) is
                    ideal. For a long-term strategy that builds your brand and
                    steadily increases traffic and leads, SEO is the better
                    option.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>What is the Difference between SEO and Local SEO</h3>
                  <p>
                    In short, SEO (search engine optimization) is the process of
                    improving the visibility and ranking of your website in
                    search engine results pages (SERPs). Local SEO , on the
                    other hand, is focused on optimizing your website for local
                    search results.{' '}
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
                  <p>
                    It's possible that changes to your site will be necessary
                    for SEO to be effective.
                  </p>
                  <p>
                    We plan to modify elements like your website's title, meta
                    tags, and content to align with the most beneficial keywords
                    for your business. We'll also work on creating or refining
                    your website's sitemap to enhance its discoverability and
                    indexing by search engines. Setting up Google Analytics is
                    another step we'll take, enabling you to monitor the
                    progress of your SEO efforts. Additionally, if your
                    website's design isn't user-friendly, we may recommend
                    design adjustments to improve user experience and SEO
                    performance.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/seo-services-frederick-maryland.webp"
            alt="Man calling to get SEO services in Frederick."
            title="Man calling to get SEO services in Frederick."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Boost Your Sales and Revenue?</h2>
            <p>
              Contact {SEOAgency} and we'll show you how search engine
              optimization can help your business get more leads in Frederick
              without paying for leads or online ads.
            </p>
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
