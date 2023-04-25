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

const SEOAgency = 'our SEO company'

const calendly = 'https://calendly.com/bowieseo/30min'

export default function LocalSEO() {
  const SEO = {
    title: 'SEO Company in Laurel, MD | Helping Businesses Boost Revenue',
    description: `We're an SEO company in Laurel, MD, providing SEO services. Our SEO services help get you business more website traffic, leads, and customers.`,
    canonical: 'https://bowieseo.com/seo-services-laurel-md',
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
          heroText="Get more Website Trafiic and Leads with the Right SEO Company in Laurel, MD"
          subText="We provide SEO services to businesses in laurel that help increase leads, sales and revenue."
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
                src="/images/seo-services-laurel-md.webp"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="A business owner considering  getting SEO services in Laurel."
                title="A business owner considering getting SEO services in Laurel."
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
                  Get Leads and Customers and Increase Sales Without Paying For
                  Facebook and Instagram Ads
                </h2>
                <p>
                  Let's be honest, Facebook and Instagram ads are expensive, and
                  the costs keep going up.
                </p>
                <p>
                  And if you're not careful, your entire advertising budget can
                  be gobbled up by paying for clicks.
                </p>
                <p>
                  But there is a way to get traffic to your website without
                  paying for ads, and paying lead-gen compnaies like Angie's
                  List, and HomeAdvisor.
                </p>
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
                    paying for ads.
                  </li>
                  <li>Increase you leads, sales and revenue.</li>
                  <li>Get more phone calls.</li>
                  <li>Establish your business as the leader and expert.</li>
                  <li>
                    Get on the first page of Google and more local customers
                    will contact you.
                  </li>
                  <li>
                    Increase your website's visibility and get more potential
                    customers to find your business.
                  </li>
                  <li>
                    Rank higher than your competitors in Google search results,
                    and customers will find your business rather than your
                    competitors'.
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
            <h2 className="title">What You Can Expect From US</h2>
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
                  <h3>Expert one-on-one support</h3>
                  <p>
                    Our team of SEO experts is here to provide you with free
                    expert advice and support, available to you via email or
                    call. We are dedicated to helping you grow your business by
                    boosting your search engine ranking and improving your
                    online presence.
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
                    We understand the importance of laser-focused research to
                    uncover the most profitable and relevant keywords that will
                    attract potential customers and drive sales. With our
                    thorough approach to keyword research, we create a database
                    of highly effective search terms that we use to create
                    optimized SEO content for your website.
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
                    With a well-managed GMB page, you can establish your brand's
                    authority, build trust with your audience, and gain a
                    competitive edge in your local market. We fully optimize
                    your GMB page so that you appear at the top of both the map
                    pack and local search results.
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
                    Our SEO audit is designed to identify the specific issues
                    that are holding your website back and preventing it from
                    achieving success. By conducting a thorough analysis of your
                    website, we can pinpoint the specific areas that require
                    improvement, such as on-page optimization, link building,
                    and keyword research. We then provide you with a detailed
                    report of the audit and give recommendations for optimizing
                    your SEO strategy to achieve success.
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
                    If you're looking to reach local customers and gain a
                    competitive edge in your market, then local SEO is
                    essential. We specialize in optimizing your website to
                    ensure that it appears at the top of search engine results
                    pages (SERPs) when local customers search for your products
                    or services. We'll perform a range of optimization
                    techniques, including optimizing content, increasing website
                    loading speeds, and improving user experience, all of which
                    help your website rank higher than your competitors.
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
                    Creating optimized content for your website can be
                    time-consuming and challenging. We know the importance of
                    high-quality content and its impact on your website's SEO
                    rankings and online visibility. By using data from our SEO
                    audit, keyword research, and competitor analysis, we can
                    craft content that is not only high-quality but also
                    optimized to drive sales and revenue.
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
                  <h3>How much does SEO cost in Laurel?</h3>
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
              Contact {SEOAgency} and we'll show you how our Laurel SEO services
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
