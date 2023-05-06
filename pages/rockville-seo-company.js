/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'
import {
  ReasonSec,
  Deliverable,
  Deliverables,
  Service,
} from '../components/LocatioPageEssentials'

import { NextSeo } from 'next-seo'

const SEOAgency = 'Rockville SEO company'

const calendly = 'https://calendly.com/bowieseo/30min'

export default function RockvilleSEO() {
  const SEO = {
    title: 'Rockville SEO Company Helping Businesses Boost Revenue and Growth',
    description: `We're an SEO services company providing SEO services in Rockville, MD. Our SEO services help get you business more website traffic, leads, and customers.`,
    canonical: 'https://bowieseo.com/rockville-seo-company',
    openGraph: {
      title:
        'Rockville SEO Company Helping Businesses Boost Revenue and Growth',
      description: `We're an SEO services company providing SEO services in Rockville, MD. Our SEO services help get you business more website traffic, leads, and customers.`,
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Boost Traffic, Leads, and Sales With the Right Rockville SEO Company "
          subText="We provide powerful SEO solutions to all our customers and we will provide those same solutions to grow your business."
          backgroundImage="/images/rockville-seo-company-cover.webp"
          backgroundHeight="70vh"
          backgroundPosition="center left"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section>
          <div className="container">
            <div className="grid">
              <div>
                <h2>
                  Wondering How Some Businesses Get Traffic and Leads From
                  Google and You're Not Getting Jack?
                </h2>
                <p>You have a business in Rockville and let’s face it.</p>
                <p>You're busy.</p>
                <p>You’re too busy to learn how digital marketing works.</p>
                <p>But the thing is, you know you need it to succeed.</p>
                <p>
                  You know you need it because without digital marketing, you’ll
                  get left in the dust.
                </p>
                <p>
                  You already tried Facebook ads, Instagram ads, and even Google
                  ads, but they didn’t really bring you any business.
                </p>
                <p>Plus they're expensive.</p>
                <p>
                  You also tried paying for leads on HomeAdvisor, Angie’s List,
                  and even Thumbtack, but you’re tired of discounting your
                  prices just to compete.
                </p>
                <p>
                  Other competitors in Rockville are ranking higher than you in
                  Google and their business is booming.
                </p>
                <p>
                  They’re getting more customers and more business every month.
                </p>
                <p>
                  If you don’t start getting more business soon, you might have
                  to start laying off some of your employees.
                </p>
                <p>You may even have to shut down.</p>
                <p>Is that what you want?</p>
                <p>I don’t think so.</p>
                <p>
                  If you don’t do something about it now, it will only get
                  worse.
                </p>
                <p>This is where we can help.</p>
                <p>
                  We get you set up with{' '}
                  <Link href="/maryland-local-seo" passHref>
                    local search engine optimization
                  </Link>{' '}
                  (local SEO) to get your website to show up on Google when
                  people search for your services.
                </p>
                <p>
                  We’re a{' '}
                  <Link href="/maryland-seo-company" passHref>
                    <a>SEO company</a>
                  </Link>{' '}
                  and we help businesses in Rockville build their own lead-gen
                  websites with SEO.
                </p>
                <p>
                  How would you like to have your own lead-generating website?
                </p>
              </div>
              <img
                src="/images/rockville-seo-company.webp"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="A business owner considering our Rockville SEO company."
                title="A business owner considering our Rockville SEO company."
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
                  Get Leads and Customers and Increase Sales Without Paying For
                  Facebook and Google Ads
                </h2>
                <p>
                  Let's be honest, Facebook and Google ads are expensive, and
                  the costs keep going up.
                </p>
                <p>
                  And if you're not careful, your entire advertising budget can
                  be gobbled up by paying for clicks.
                </p>
                <p>But you don't have to pay for ads.</p>
                <p>
                  What if there was a way to get free leads and customers
                  without having to pay for ads?
                </p>
                <p>There is.</p>
                <p> It's called search engine optimization.</p>
                <p>
                  With search engine optimization, you can optimize your website
                  for the search engines and help you attract free organic
                  traffic from people who are already looking for what you have
                  to offer.
                </p>
                <p>With Search engine optimization you will:</p>
                <ul className="check-mark">
                  <li>
                    Get free organic traffic coming to your website without
                    paying for ads
                  </li>
                  <li>Increase you leads, sales and revenue</li>
                  <li>Get more phone calls</li>
                  <li>Establish your business as the leader and expert</li>
                  <li>
                    Get on the first page of Google and get more local customers
                    requesting your services
                  </li>
                  <li>
                    Grow your online visibility and let more potential customers
                    see your business
                  </li>
                  <li>
                    Rank higher than your competition in Google search results
                    and let customers find your business instead of your
                    competitors'
                  </li>
                </ul>
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
              Our Rockville SEO Services Can Help Your Businesses Grow
            </h2>
            <p className="title subtext">
              We provide search engine optimization to businesses in Rockville
              and the rest of Montgomery County.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/rockville-search-engine-optimization.webp"
                  alt="Rockville SEO Services"
                  title="Rockville SEO Services"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Local SEO for Rockville</h3>
                  <p>
                    Start doing local SEO and make sure your customers in
                    Rockville can find your business on Google when they search,
                    instead of your competition.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/rockville-gmb-management.webp"
                  alt="Rockville Google My Business Management."
                  title="Rockville Google My Business Management."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>GMB Management</h3>
                  <p>
                    Optimize you Google My Business profile an rank locally. Let
                    us help you take your business to the next level by managing
                    your GMB profile and boosting your local SEO performance.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/seo-audit-rockville.webp"
                  alt="Free Mini SEO Audit for Rockville businesses."
                  title="Free Mini SEO Auditfor Rockville businesses."
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Free Mini SEO Audit</h3>
                  <p>
                    See how you can improve your SEO rankings and performance
                    with a free mini SEO audit from us. Find out what's stopping
                    you from getting more leads and customers today!
                  </p>
                </div>
              </div>
            </Service>
          </div>
          <div className="btn">
            <a href={calendly} target="_blank" rel="noreferrer">
              <Button>Schedule Your Free Consultation Today!</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/home-service-business-rockville-md.webp"
                className="page-img"
                alt="Home service businesses we work with in Rockville."
                title="Home service businesses we work with in Rockville."
              />
              <div>
                <h2>
                  Some of the Businesses We Work With in Rockville, Maryland.
                </h2>
                <p>
                  We work with local businesses in Rockville that provide
                  products and services to their customers. We focus on helping
                  you increase your online presence, leads, and sales for your
                  business.
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
        <section>
          <div className="container">
            <h2 className="title">
              What You Get With Our Rockville SEO Services
            </h2>
            <p className="subtext">When you work with us, you get:</p>
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
                    Get free expert advice and support from our team of SEO
                    experts, available to answer all your questions via email or
                    on a call. We’re here to help you grow your business, boost
                    your ranking, and increase your online presence.
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
                    Laser-focused keyword research will uncover the most
                    profitable and relevant terms to attract customers and
                    create sales. We'll construct a database of these keywords
                    for you to create SEO content.
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
                    Improve your local SEO ranking by managing your Google My
                    Business page. Get a fully optimized GMB page to appear at
                    the top of both the map pack and local search results.
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
                  <h3>Google Analytics and Google Console Setup</h3>
                  <p>
                    Set up Google Analytics and Google Console to track your
                    website's performance and activity. These tools help you
                    understand how your site is being used and accessed, so you
                    can make changes to improve your user experience.
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
                    Find out what's holding your website back from ranking
                    higher and getting the leads and customers you need. Our SEO
                    audit will pinpoint the specific issues that must be fixed
                    for your SEO campaign to achieve success.
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
                    Local SEO gets your website in front of local customers when
                    it counts. We optimize your website, so local customers find
                    your business, not your competitors. Get optimized content,
                    a fast website, a better user experience, and more so you
                    rank on the first page above your competitors.
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
                    We know that you’re busy and you might not have time to
                    check in with us every day. That’s why we send out a weekly
                    update email. This way, you can always be in the loop
                    without having to put in any extra effort.
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
                    We write content and service pages for your website, so you
                    don’t have to. We use data from our SEO audit, keyword
                    research, and competitor analysis to write the best pages
                    that bring the most sales and revenue.
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
                    We're 100% transparent. You’ll never have to wonder what
                    we're doing or if we're working on your campaign. Our team
                    will give you a full rundown of what we're doing and how
                    it's working every step of the way. We want you to be as
                    involved as you want to be. Our goal is to make sure that
                    you're always in the loop, so you can feel confident that
                    your campaign is in good hands.
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
                    We track and monitor your progress to ensure your campaign
                    delivers positive results: more traffic to your website,
                    more customers, more sales, and more revenue. We use tools
                    like Google Analytics, Google Search Console, Ahrefs, and
                    SEMRush.
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
        <div className="container">
          <img
            src="/images/rockville-seo-agency.webp"
            className="page-img-left"
            width="1440px"
            height="600px"
            alt="Work with our Rockville SEO agency and increase your online visibility."
            title="Work with our Rockville SEO agency and increase your online visibility."
          />
        </div>
        <section>
          <div className="container">
            <h2 className="title">Why Work With Our Rockville SEO COmpany</h2>
            <p className="subtext">
              Save time and money, and acheive your sales and revenue goals by
              working with Rockville SEO specialists. We work only for you, not
              your competition.
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
                    We let you focus On Your Business, not on digital Marketing
                  </h3>
                  <p>
                    Concentrate on running your business and not on doing
                    keyword research, writing copy, and competitor analysis.
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
                    You Save Time and Money With Advanced Digital Marketing
                  </h3>
                  <p>
                    Save money with the best search marketing methods that are
                    proven to boost your website traffic and generate leads for
                    your business.
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
                  <h3>You Get Your Own SEO Team for Your Business</h3>
                  <p>
                    Have your own team of SEO specialists helping you grow your
                    business. Discover new opportunities to expose your company
                    new customers.
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
          <div className="container">
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
                  <h3>How much does SEO cost in Rockville?</h3>
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
                    is the better option.{' '}
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
                    results.{' '}
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
            src="/images/seo-services-rockville-maryland.webp"
            alt="Business man an calling to work with our Rockville SEO company."
            title="Business man an calling to work with our Rockville SEO company."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Get More Rockville Customers?</h2>
            <p>
              Contact our {SEOAgency} and we'll show you how you can get more
              customers and grow without paying for leads or ads.
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
