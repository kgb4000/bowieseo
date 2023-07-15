/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'
import { City, Cities } from '../components/CitySection'
import {
  ReasonSec,
  Deliverable,
  Deliverables,
  Service,
} from '../components/LocatioPageEssentials'

import { NextSeo } from 'next-seo'

const SEOAgency = 'our SEO company'

const calendly = 'https://calendly.com/bowieseo/30min'

export default function LocalSEO() {
  const SEO = {
    title: 'SEO Company in Laurel, MD | Helping Businesses Boost Revenue',
    description: `We're an SEO company in Laurel, MD, providing SEO services. Our SEO services help get you business more website traffic, leads, and customers.`,
    canonical: 'https://bowieseo.com/seo-company-laurel-md',
    openGraph: {
      title: 'SEO Company in Laurel, MD | Helping Businesses Boost Revenue',
      description: `We're an SEO company in Laurel, MD, providing SEO services. Our SEO services help get you business more website traffic, leads, and customers.`,
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Get more Website Traffic, Leads, and Sales with the Right SEO Company in Laurel, MD"
          subText="We provide SEO services to businesses in Laurel that help increase leads, sales and revenue."
          backgroundImage="/images/seo-services-laurel-md-cover.webp"
          backgroundHeight="70vh"
          backgroundPosition="center"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <div>
                <h2>
                  Wondering How Some Businesses get Traffic and Leads on Google
                  and You Don't?
                </h2>
                <p>Let’s face it, you’re busy.</p>
                <p>
                  You’re too busy running your business to learn how digital
                  marketing works.
                </p>
                <p>But you know you need it to succeed.</p>
                <p>
                  You know you need it because without digital marketing, you’ll
                  get left in the dust.
                </p>
                <p>
                  You already tried Facebook ads, Instagram ads, and even Google
                  ads, but they didn’t really bring you any business, and
                  they’re expensive.
                </p>
                <p>
                  You also tried paying for leads on HomeAdvisor, Angie’s List,
                  and even Thumbtack, but you’re tired of discounting your
                  prices just to compete.
                </p>
                <p>
                  Other competitors in Laurel are ranking higher than you in
                  Google and their businesses are growing.
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
                  We use search engine optimization to get your website to show
                  up on Google when people search for your services.
                </p>
                <p>
                  We’re an{' '}
                  <Link href="/maryland-seo-company" passHref>
                    <a>SEO Company in Maryland</a>
                  </Link>{' '}
                  and we help businesses in Laurel build their own lead-gen
                  websites.
                </p>
                <p>
                  How would you like to have your own lead-generating website?
                </p>
              </div>
              <img
                src="/images/seo-company-laurel-md.webp"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="A business owner considering using an SEO company in Laurel."
                title="A business owner considering using an SEO company in Laurel."
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
          <div className="medium-container">
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
                  Attract Leads, Gain Customers, and Boost Sales Without Relying
                  on Facebook and Instagram Ads
                </h2>
                <p>
                  To be frank, Facebook and Instagram ads can be costly, and
                  their prices continue to rise.
                </p>
                <p>
                  If you're not cautious, your entire ad budget could be
                  consumed by click costs.
                </p>
                <p>
                  However, there's a way to drive traffic to your site without
                  relying on ads or lead-gen companies like Angie's List and
                  HomeAdvisor.
                </p>
                <p>
                  What if there was a way to get free leads and customers
                  without having to pay for ads?
                </p>
                <p>There is.</p>
                <p>
                  There is a solution:{' '}
                  <Link href="/search-engine-optimization" passHref>
                    search engine optimization
                  </Link>
                  .
                </p>
                <p>
                  Search engine optimization allows you to optimize your website
                  for search engines, attracting free organic traffic from those
                  already seeking your services.
                </p>
                <p>With search engine optimization, you'll:</p>
                <ul className="check-mark">
                  <li>Get free organic traffic without spending on ads.</li>
                  <li>Boost leads, sales, and revenue.</li>
                  <li>Get more phone inquiries.</li>
                  <li>Position your business as a leader and authority.</li>
                  <li>
                    Appear on Google's first page, attracting more local
                    customers.
                  </li>
                  <li>
                    Enhance your website's visibility, making it easier for
                    potential clients to discover your business.
                  </li>
                  <li>
                    Outrank competitors in Google search results, ensuring
                    customers find you instead of them.
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Call Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="title">
              Our Laurel SEO Services Help Businesses Get More Website Traffic,
              Leads and Sales
            </h2>
            <p className="subtext">
              We provide SEO to businesses in Laurel and the rest of Howard
              County, MD.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/laurel-search-engine-optimization.webp"
                  alt="Laurel SEO Services"
                  title="Laurel SEO Services"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Search Engine Optimization</h3>
                  <p>
                    Make sure your customers can find your business on Google
                    instead of your competition's by using search engine
                    optimization.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/laurel-gmb-management.webp"
                  alt="Laurel Google My Business Management"
                  title="Laurel Google My Business Management"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>GMB Management</h3>
                  <p>
                    Optimize your Google My Business profile to gain local
                    rankings. Let us manage your GMB account and boost your
                    local SEO performance so you can expand your business.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/seo-audit-laurel.webp"
                  alt="Free Mini SEO Audit"
                  title="Free Mini SEO Audit"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Free Mini SEO Audit</h3>
                  <p>
                    Get a free mini SEO audit from us and learn how you can
                    boost your SEO performance and rankings. Find out
                    immediately what is stopping you from getting more leads and
                    customers.
                  </p>
                </div>
              </div>
            </Service>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/home-service-business-laurel-md.webp"
                className="page-img"
                alt="Home service buisness."
                title="Home service businesses we work with in Laurel."
              />
              <div>
                <h2>Businesses We Work With in Laurel, Maryland.</h2>
                <p>
                  We work with home service businesses in Laurel that provide
                  services to customers homes. We focus on helping you increase
                  your online presence, leads, and sales for your business.
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
                      src="/images/icons/catering-companies.png"
                      className="business-icon"
                      alt="Catering companies - Businesses we work with."
                      title="Businesses we work with - Catering companies."
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
                  Call <b>Laurel SEO company</b> today and let’s see how we can
                  help find opportunities on your website to help boost your
                  sales and revenue.
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
            <h2 className="title">What You Can Expect From Us</h2>
            <p className="subtext">
              When you get Laurel SEO services from us, you get:
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
                  <h3>Personalized Expert Support</h3>
                  <p>
                    Our SEO specialists offer free expert advice and support via
                    email or phone, dedicated to helping your business grow by
                    enhancing your search engine ranking and online presence.
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
                    We conduct focused research to find profitable, relevant
                    keywords that attract potential customers and boost sales.
                    Our comprehensive approach builds a database of effective
                    search terms for creating optimized SEO content.
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
                    A well-managed GMB page establishes your brand's authority,
                    builds trust, and gives you a competitive advantage. We
                    optimize your GMB page to appear at the top of map pack and
                    local search results.
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
                    We set up Google Analytics and Google Console to track your
                    website's performance and user activity, allowing you to
                    make improvements based on data.
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
                    Our audit identifies issues hindering your website's
                    success. We analyze on-page optimization, link building, and
                    keyword research, then provide a detailed report with
                    optimization recommendations.
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
                    To reach local customers, we optimize your website for top
                    search engine results when they search for your products or
                    services. This includes optimizing content, increasing
                    loading speeds, and improving user experience.
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
                    We understand you're busy, so we send weekly update emails
                    to keep you informed without extra effort on your part.
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
                    We create high-quality, optimized content for your website
                    using data from our SEO audit, keyword research, and
                    competitor analysis, driving sales and revenue.
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
                    Our team provides full transparency on our actions and
                    progress. We want you to be as involved as you wish,
                    ensuring you're always informed and confident in your
                    campaign.
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
                    We use tools like Google Analytics, Google Search Console,
                    Ahrefs, and SEMRush to track and monitor your campaign's
                    progress, ensuring increased traffic, customers, sales, and
                    revenue.
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
            src="/images/laurel-seo-company.webp"
            className="page-img-left"
            width="1440px"
            height="600px"
            alt="Laurel SEO company."
            title="Work with our SEO company in Laurel to increase your online visibility."
          />
        </div>
        <section>
          <div className="container">
            <h2 className="title">Why Work With Our Laurel SEO Company</h2>
            <p className="subtext">
              Save time and money, and acheive your sales and revenue goals by
              working with Laurel SEO specialists. We work only for you, not
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
              Want to see how we can help you grow your business using SEO?
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
            <h2 className="title">FAQs about Our Laurel SEO Services</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and how does it work?</h3>
                  <p>
                    SEO stands for "Search Engine Optimization." It's a
                    long-term marketing strategy to improve a website's
                    visibility and organic search results on Google and other
                    search engines. SEO works by optimizing a website for search
                    engine algorithms, aiming to rank higher in search engine
                    results pages (SERPs). It improves a website's relevance and
                    authority by covering user-searched topics and incorporating
                    factors like inbound links, social signals, and brand
                    mentions.
                  </p>
                </div>
                <div className="question">
                  <h3>Is SEO worth it for small businesses?</h3>
                  <p>
                    Yes, SEO is valuable for small businesses. It's an effective
                    way to grow your business by building your brand and
                    increasing traffic and leads from Google organically.
                  </p>
                  <h3>How much does SEO cost in Laurel?</h3>
                  <p>
                    Monthly SEO costs range from $1,000 to $5,000+ and vary
                    based on your industry's competitiveness and targeted
                    keywords. Generally, SEO is more affordable than PPC
                    advertising and other paid marketing forms.
                  </p>
                </div>
                <div className="question">
                  <h3>How long does it take for SEO to work?</h3>
                  <p>
                    SEO's effectiveness depends on factors like your website's
                    age, industry competitiveness, and SEO quality. Typically,
                    it takes 3-6 months for SEO to start working. However, SEO
                    is a long-term strategy, and initial results are just the
                    beginning.
                  </p>
                </div>
                <div className="question">
                  <h3>What is better PPC or SEO?</h3>
                  <p>
                    The better option depends on your goals. If you seek
                    immediate results, Google Ads is the better choice. However,
                    for a long-term strategy that helps build your brand and
                    increases traffic and leads over time, SEO is the better
                    option.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>What is the Difference between SEO and Local SEO</h3>
                  <p>
                    SEO (Search Engine Optimization) focuses on improving your
                    website's visibility and ranking in search engine results
                    pages (SERPs). Local SEO specifically optimizes your website
                    for local search results.
                  </p>
                </div>
                <div className="question">
                  <h3>How long would it take to rank my website??</h3>
                  <p>
                    Ranking a website depends on factors like the site's age,
                    keyword competition, and content quality. New websites
                    generally take longer to rank, and competitive keywords
                    require more effort.
                  </p>
                </div>
                <div className="question">
                  <h3>How Long is Your Contract for Doing SEO?</h3>
                  <p>
                    Our contracts are month-to-month, and you can cancel with a
                    30-day notice before the month's end. However, if you're
                    getting leads and making more money, you may not want to
                    cancel.
                  </p>
                </div>
                <div className="question">
                  <h3>Can You Guarantee Me #1 Rankings on Google?</h3>
                  <p>
                    No one can guarantee #1 rankings due to the ever-changing
                    SEO landscape. However, an experienced SEO consultant can
                    help improve your website's ranking in the SERPs.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Have to Change My site for SEO to work?</h3>
                  <p>
                    We might have to. We'll update your website's title, meta
                    tags, and content with valuable keywords. We'll create or
                    update your sitemap for better search engine indexing and
                    set up Google Analytics for tracking. Additionally, we may
                    need to alter the design if it isn't user-friendly.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="title">Other Areas We Cover</h2>
            <p className="center">We provide local SEO for busniess in:</p>
            <Cities>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Annapolis SEO"
                  title="Annapolis SEO"
                />
                <p>Annapolis</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Baltimore SEO"
                  title="Baltimore SEO"
                />
                <Link href="/baltimore-seo" passHref>
                  <a>Baltimore, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Bowie SEO"
                  title="Bowie SEO"
                />
                <Link href="/" passHref>
                  <a>Bowie, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Bethesda, MD"
                  title="SEO Company Bethesda, MD"
                />
                <Link href="/seo-company-bethesda-md" passHref>
                  <a>Bethesda, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Columbia, MD"
                  title="Columbia, MD"
                />
                <Link href="/local-seo-columbia-md" passHref>
                  <a>Columbia, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Crofton, MD"
                  title="Crofton, MD"
                />
                <Link href="/seo-services-crofton-md" passHref>
                  <a>Crofton, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Clinton, MD"
                  title="Clinton, MD"
                />
                <p>Clinton, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Glen Burnie</p>
              </City>

              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/seo-company-laurel-md" passHref>
                  <a>Laurel, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/seo-services-ocean-city" passHref>
                  <a>Ocean City, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Odenton, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Potomac, MD</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/rockville-seo-company" passHref>
                  <a>Rockville, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <Link href="/seo-company-ellicott-city-md" passHref>
                  <a>Ellicott City, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Gaithersburg, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Kensington, MD"
                  title="SEO Company Kensington, MD"
                />
                <Link href="/seo-company-kensington-md" passHref>
                  <a>Kensington, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Silver Spring, MD"
                  title="SEO Company Silver Spring, MD"
                />
                <p>Silver Spring, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Greenbelt, MD"
                  title="SEO Company Greenbelt, MD"
                />
                <p>Greenbelt, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Wheaton, MD"
                  title="Wheaton, MD"
                />
                <p>Wheaton, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Waldorf MD"
                  title="SEO Company Waldorf MD"
                />
                <Link href="/seo-services-waldorf-md" passHref>
                  <a>Waldorf, MD</a>
                </Link>
              </City>
            </Cities>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Get SEO Help Today!</Button>
              </a>
            </div>
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
              Contact {SEOAgency} and we'll show you how our Laurel SEO Company
              can help your company grow without paying for leads or online ads.
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
