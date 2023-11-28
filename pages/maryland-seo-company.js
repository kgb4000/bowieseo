/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
import {
  Businesses,
  Business,
  City,
  Cities,
} from '../components/BusinessesWeWorkWith'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const SEOAgency = 'our Maryland SEO company'

const MarylandSEOCompany = () => {
  const SEO = {
    title: `Maryland SEO Company For the Best MD Local SEO Strategy!`,
    description:
      'Work with a top Maryland SEO company helping businesses increase leads, sales and revenue with local SEO strategies. Contact us for a free consultation.',
    type: 'website',
    canonical: 'https://bowieseo.com/maryland-seo-company',
    openGraph: {
      title: `Maryland SEO Company For the Best MD Local SEO Strategy!`,
      description:
        'Work with a top Maryland SEO company helping businesses increase leads, sales and revenue with local SEO strategies. Contact us for a free consultation.',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="We're The Right Maryland SEO Company For Your Local SEO Strategy"
          subText="Boost online visibility, leads, and sales with Maryland local SEO"
          // backgroundImage="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186700/maryland-seo-company_n3uwni.webp"
          backgroundHeight="80vh"
          backgroundPosition="center"
          buttonText="Get Your Free SEO Audit →"
          buttonLink="free-seo-audit"
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <img
                // src="https://res.cloudinary.com/dfx3xhveo/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1696186547/maryland-seo-company-client_s6mfjk.webp"
                src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186547/maryland-seo-company-client_s6mfjk.webp"
                className="page-img"
                width="500"
                height="300"
                alt="A business owner considering working with our Maryland SEO company."
                title="A business owner considering working with our Maryland SEO company."
              />
              <div>
                <h2>
                  Discover the Magic of Local SEO & Leap Ahead of the
                  Competition or Get Left in the Dust!
                </h2>
                <p>
                  Is your business being overshadowed by competitors in Google
                  search results?
                </p>
                <p>
                  Are potential customers struggling to find your services
                  online?
                </p>
                <p>Enough is enough!</p>
                <p>
                  Partner with our Maryland SEO company and take back your
                  rightful customers by boosting your online visibility!
                </p>
                <p>
                  <strong>🛑 Wasting Money on Ineffective Ads Ends Now!</strong>
                </p>
                <p>
                  Have inconsistent leads from unreliable Facebook and Google
                  ads created holes in your budget? We offer a more dependable
                  solution—secure consistent, high-quality leads without the
                  unpredictable costs with SEO services for your business!
                </p>
                <p>We’re Maryland SEO experts, and we can help:</p>
                <p>
                  <strong>🔍 Boost Organic Traffic</strong> - No more cash for
                  clicks! Enjoy genuine visitors pouring into your website.
                </p>
                <p>
                  <strong>🥊 Outrank Competitors</strong> - While they're still
                  figuring things out, you're the local favorite that everyone
                  trusts.
                </p>
                <p>
                  <strong>📈 Skyrocket Your Leads & Sales</strong> - With more
                  eyes on your site, watch your conversions go through the roof.
                </p>
                <p>
                  <strong>🥇 Get Top Google Rankings</strong> - Dream of that
                  coveted #1 spot on Google for local searches? Consider it
                  done!
                </p>
                <p>
                  <strong>📞 Ring, Ring! </strong> - Your phone won't stop
                  buzzing with inquiries and orders.
                </p>
                <p>
                  Every moment you wait, your competitors are capturing your
                  potential customers and your revenue.
                </p>
                <p>Seize Your FREE Consultation Now!</p>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-color">
          <div className="medium-container">
            <div className="grid">
              <div className="first-section">
                <h2>
                  Discover How Our SEO Company Can Help Your Business Explode
                </h2>
                <p>Imagine coming in to work on Monday.</p>
                <p>Your phones are ringing off the hook.</p>
                <p>
                  Your secretary checks the email and your inbox is full of
                  people requesting quotes for your services.
                </p>
                <p>You easily get about five quote requests a day.</p>
                <p>
                  You close on 50% of your proposals and have jobs booked out
                  for months.
                </p>
                <p>
                  While other small businesses are complaining about the
                  economy, you need to buy more trucks and equipment and even
                  hire more staff and technicians because your business is
                  growing.
                </p>
                <p>
                  In two weeks, you're going on a two-week vacation with the
                  wife and kids to Disney World in Orlando.
                </p>
                <p>
                  Two weeks after that, a one-week vacation with your wife in
                  Tulum, Mexico.
                </p>
                <p>Business is good. </p>
                <p>
                  You’re happy, your family is happy, your employees are happy.
                </p>
                <p>
                  The right <b>(Maryland) search engine optimization</b>{' '}
                  strategy from the right SEO company can make this possible.
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186611/smiling-businessman_nman5o.webp"
                className="page-img-left second-section"
                width="500"
                height="300"
                alt="Businessman happy he started using our Maryland SEO company for his SEO."
                title="Businessman happy he started using our Maryland SEO company for his SEO."
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
        <section className="reasons-section">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center">
              What is Maryland SEO Anyway?
            </h2>
            <img
              src="/images/google-search-console-stats.png"
              className="page-img-left inline"
              alt="Results from one SEO campaign - More website visitors, more searchers seeing your website."
              title="Results from one SEO campaign - More website visitors, more searchers seeing your website."
              width="583"
              height="248"
              loading="lazy"
            />
            <p>
              Maryland search engine optimization is a digital marketing
              strategy that helps Maryland businesses increase their website's
              visibility in search engines.
            </p>
            <p>
              When more people see your website listed in the search results,
              you increase your chances of transforming website visitors and
              traffic to your site.
            </p>
            <p>
              The more traffic your website gets, the more chances of you
              getting more leads and sales.
            </p>
            <p>
              Maryland SEO consists of many moving parts, and when done within
              the rules, it can result in exponential growth for your business.
            </p>
            <p>
              From keyword research, competitor analysis, on-page SEO, and
              off-page SEO, search engine optimization can take your business to
              the next level.
            </p>
            <p>
              <a href={calendly} target="_blank">
                Schedule a free call with us
              </a>
              , tell us about your business, and learn how (Maryland) SEO can
              help your business take off.
            </p>
          </div>
        </section>
        {/* <section>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl text-center">
              What Happens When You Don't Invest in (Maryland) Search Engine
              Optimization?
            </h2>
            <p className="subtext">
              Here are the downsides of not investing in local SEO.
            </p>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>You Become Invisible in Local Searches</h3>
                  <p>
                    You know the old saying, "Out of sight, out of mind." Well,
                    this also holds true in digital marketing.
                  </p>
                  <p>
                    If your business doesn't appear in the local searches, you
                    become invisible to customers searching for your services.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Reduced Foot Traffic</h3>
                  <p>
                    If people don't know your store exists, they cannot visit
                    your store.
                  </p>
                  <p>
                    Even if you're on a busy street, you miss out on all the
                    customers searching online before they decide where to go.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Lost Leads, Sales, and Revenue</h3>
                  <p>
                    Less visibility and fewer customers lead to reduced revenue.
                  </p>
                  <p>
                    Meanwhile, competitors who invest in local SEO get more of
                    the local business.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>No Trust and Credibility</h3>
                  <p>
                    When people search for services and find verified, ranked
                    websites, they will likely trust those businesses.
                  </p>
                  <p>
                    If you're not one of them, your trust factor takes a hit.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Competitive Disadvantage</h3>
                  <p>
                    Think about it. If your competitors are ramping up their
                    local SEO game and you're not, they'll easily outrank you in
                    the search results.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X mark."
                />
                <div>
                  <h3>Costly to Catch-up</h3>
                  <p>
                    The longer you ignore local SEO, the more time-consuming and
                    expensive it will be to establish a strong online presence
                    later on.
                  </p>
                  <p>
                    You'll be starting from scratch while your competition is
                    miles ahead.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section> */}
        <section>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl text-center">
              Why Maryland SEO Is So Important?
            </h2>
            <p className="subtext">
              Get results that matter for your business:
            </p>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Boost in Local Visibility</h3>
                  <p>
                    With a solid Local SEO strategy, your business can be the
                    first in the local listings and in the Map Pack.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Increased Foot Traffic</h3>
                  <p>
                    Ranking higher means more online visibility and more
                    visibility translates to more foot traffic.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Higher Conversions</h3>
                  <p>
                    Local searches are often more intentional and ready to
                    convert.
                  </p>
                  <p>
                    A person looking for "pool maintenance," is more likely
                    looking for a company to perform the service than someone
                    looking for "how to do pool maintenance,"
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Out Rank Your Local Competitors</h3>
                  <p>
                    This is your chance to get ahead of your competitors because
                    you are doing local SEO, and your competitors aren't.
                  </p>
                  <p>
                    If they're doing local SEO, then you also need to do it to
                    remain competitive.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Builds Credibility and Trust</h3>
                  <p>
                    When you always appear in the local searches, and your
                    Google My Business profile is filled with positive reviews,
                    you build trust and credibility with your local community.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Cost Effective Marketing</h3>
                  <p>
                    Unlike paid ads, organic traffic generated through local SEO
                    comes at no cost per click.
                  </p>
                  <p>
                    It's an upfront investment but pays off in substantial,
                    long-term results.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Enhanced Customer Engagement:</h3>
                  <p>
                    With features like{' '}
                    <a href="https://businessmessages.google/" target="_blank">
                      Google My Business Messaging
                    </a>
                    , customers can interact with you directly from the search
                    results.
                  </p>
                  <p>
                    You can answer questions, resolve issues, and build
                    relationships even before they walk through your door.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                />
                <div>
                  <h3>Transparent ROI</h3>
                  <p>
                    One of the best parts of local SEO is the ability to track
                    your return on investment through analytics.
                  </p>
                  <p>
                    You can measure key metrics like search rankings, web
                    traffic, and conversion rates to understand how effective
                    your local SEO strategies are.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <section className="reasons-section">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center">
              How Does Maryland Local SEO Work?
            </h2>
            <p>
              Ever wondered how some Maryland businesses just pop up on the
              first page of Google when you're searching?
            </p>
            <p>That's the magic of (Maryland) local SEO in action!</p>
            <p>
              Think of MD local SEO like your digital megaphone. It fine-tunes
              your online voice so people find you easily when they're looking
              for what you offer.
            </p>
            <p>
              And believe this: when your website shows up on that first page,
              it's like throwing a welcome party for all the clicks and
              visitors..
            </p>
            <p>The cool part?</p>
            <p>
              These people aren't just casually browsing – they're on the hunt
              for what you have. They're ready to dive in!
            </p>
            <p>
              And just so you know, Maryland local SEO isn't a
              one-size-fits-all. There are a bunch of pieces to the puzzle.
            </p>
            <p> Here's a sneak peek:</p>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl text-center">
                Our Maryland SEO Services
              </h2>
              <HowSEOWorks>
                <SEOElement>
                  <img
                    src="/images/icons/local-seo.png"
                    className="seo-icon"
                    alt="SEO Audit."
                    title="SEO Audit."
                    loading="lazy"
                    width={54}
                    height={54}
                  />
                  <div>
                    <h3>SEO Audit</h3>
                    <p>
                      This process evaluates your site to identify areas that
                      need improvement and then makes changes to improve the
                      site's SEO.
                    </p>
                    <p>
                      When conducting an{' '}
                      <Link href="/free-seo-audit">SEO audit</Link>, it is
                      important to look at various factors, including the
                      website's content, backlinks, keywords, and overall
                      visibility.
                    </p>
                  </div>
                </SEOElement>
                <SEOElement>
                  <img
                    src="/images/icons/technical-search-engine-optimization.png"
                    className="seo-icon"
                    alt="Technical SEO."
                    title="Technical SEO."
                    loading="lazy"
                    width={54}
                    height={54}
                  />
                  <div>
                    <h3>Technical SEO</h3>
                    <p>
                      <Link href="/technical-seo">Technical SEO</Link> involves
                      enhancing the technical facets of a website to boost its
                      visibility and rankings in search engines.
                    </p>
                    <p>
                      This process focuses on making sure that your website is
                      easy for search engines to crawl and index, and makes it
                      mobile-friendly and loading quickly.
                    </p>
                  </div>
                </SEOElement>
                <SEOElement>
                  <img
                    src="/images/icons/keyword-research.png"
                    className="seo-icon"
                    alt="Do keyword research."
                    title="Do keyword research."
                    loading="lazy"
                  />
                  <div>
                    <h3>Keyword Research</h3>
                    <p>
                      <Link href="/keyword-research">Keyword research</Link> is
                      finding and targeting keywords that potential customers
                      are searching for.
                    </p>
                    <p>
                      This research helps businesses better understand how
                      people search for their products or services and allows
                      them to create content that is more likely to rank in
                      SERPs.
                    </p>
                  </div>
                </SEOElement>
                <SEOElement>
                  <img
                    src="/images/icons/local-seo.png"
                    className="seo-icon"
                    alt="Local SEO"
                    title="Local SEO"
                    loading="lazy"
                    width={54}
                    height={54}
                  />
                  <div>
                    <h3>MD Local SEO</h3>
                    <p>
                      Local SEO for Maryland businesses is about optimizing your
                      website for your business location for all the search
                      engines.
                    </p>
                    <p>
                      Whether your business is located in{' '}
                      <Link href="/baltimore-seo">Baltimore</Link>,{' '}
                      <Link href="/rockville-seo-company">Rockville</Link>,{' '}
                      <Link href="/seo-company-bethesda-md">Bethesda</Link>,{' '}
                      <Link href="/seo-company-gaithersburg-md">
                        Gaithersburg
                      </Link>{' '}
                      or <Link href="/seo-company-frederick-md">Frederick</Link>
                      , you can optimize your website so that people searching
                      for your services in your location, will see your website
                      on the first page.
                    </p>
                  </div>
                </SEOElement>
                <SEOElement>
                  <img
                    src="/images/icons/content-writing.png"
                    className="seo-icon"
                    alt="Content writing and optimization."
                    title="Content writing and optimization."
                    loading="lazy"
                    width={54}
                    height={54}
                  />
                  <div>
                    <h3>SEO Content Creation and Optimization</h3>
                    <p>
                      Creating{' '}
                      <Link href="/content-for-seo">content for SEO</Link> is
                      creating and optimizing existing content for search
                      engines and for people. It includes creating high-quality,
                      keyword-rich content that will help improve the site's
                      ranking in SERPs.
                    </p>
                    <p>
                      It is important to note that not all types of content are
                      created equal. Google favors certain types of content,
                      such as articles and blog posts, over others.
                    </p>
                  </div>
                </SEOElement>
                <SEOElement>
                  <img
                    src="/images/icons/improve-seo-rankings.png"
                    className="seo-icon"
                    alt="Track and monitor SEO performance."
                    title="Track and monitor SEO performance."
                    loading="lazy"
                    width={54}
                    height={54}
                  />
                  <div>
                    <h3>Local Link Building</h3>
                    <p>
                      To know if your SEO performance is improving, you'll need
                      to track and monitor your progress over time. Otherwise,
                      it'll be difficult to tell whether your efforts are paying
                      off.
                    </p>
                    <p>
                      We use tools like Google Analytics, Google Search Console,
                      Ahrefs, and SEMrush.
                    </p>
                  </div>
                </SEOElement>
              </HowSEOWorks>
              <div className="btn">
                <Link href="/case-studies">
                  <Button>Read Our Case Studies!</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-color">
          <div className="container">
            <h2 className="title">
              Our Maryland SEO Company Gets You Ranked for Your Most Important
              Keywords
            </h2>
            <p className="subtext">
              We study the search engines, and we know Maryland businesses. Our
              company offers local SEO services that put your website in the top
              5 so you can get more phone calls, leads, and sales.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186058/maryland-seo-company_npvqed.webp"
                  // src="/images/maryland-seo-company.webp"
                  alt="Search engine optimization"
                  width="1000"
                  height="665"
                />
                <div className="service">
                  <h3>Search Engine Optimization</h3>
                  <p>
                    Use search engine optimization to stand out from your
                    competition and get found when it counts. Let your customers
                    find your business, not your competitors.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186393/google-my-business_yjqcpr.webp"
                  alt="Google My Business Management"
                  width="1000"
                  height="665"
                  loading="lazy"
                />
                <div className="service">
                  <h3>GMB Management</h3>
                  <p>
                    An optimized Google My Business page is crucial for you to
                    rank locally. Let us manage your GMB profile and use our
                    experience to boost your SEO performance.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186472/seo-audit_xasmpd.webp"
                  alt="Free Mini SEO Audit"
                  width="1000"
                  height="665"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Free Mini SEO Audit</h3>
                  <p>
                    Get a free mini SEO audit on us and see how you can improve
                    your SEO rankings and performance to increase your sales and
                    revenue.
                  </p>
                </div>
              </div>
            </Service>
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
                src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186789/home-service-business_s9j8j6.webp"
                className="page-img"
                alt="Maryland SEO company"
                title="Home service businesses we work with."
                loading="lazy"
                width="500"
                height="300"
              />
              <div>
                <h2>Some of the local businesses we work with in Maryland</h2>
                <p>
                  We work with businesses all over Maryland. Our goal is to help
                  local businesses like yours increase your online presence and
                  profitability.
                </p>
                <p>We work with:</p>
                <Businesses>
                  <Business>
                    <img
                      src="/images/icons/cleaning-companies.png"
                      className="business-icon"
                      alt="Cleaning Companies."
                      title="Cleaning Companies."
                      loading="lazy"
                    />
                    <p>Cleaning Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/plumbing-contractors.png"
                      className="business-icon"
                      alt="Plumbing Contractors."
                      title="Plumbing Contractors."
                      loading="lazy"
                    />
                    <p>Plumbing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/hvac-contractors.png"
                      className="business-icon"
                      alt="HVAC Contractors."
                      title="HVAC Contractors."
                      loading="lazy"
                    />
                    <p>HVAC Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/roofing-contractors.png"
                      className="business-icon"
                      alt="Roofing Contractors."
                      title="Roofing Contractors."
                      loading="lazy"
                    />
                    <p>Roofing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/landscaping-companies.png"
                      className="business-icon"
                      alt="Landscaping Companies."
                      title="Landscaping Companies."
                      loading="lazy"
                    />
                    <p>Landscaping Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/pest-control-companies.png"
                      className="business-icon"
                      alt="Pest Control Companies."
                      title="Pest Control Companies."
                      loading="lazy"
                    />
                    <p>Pest Control Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/electrical-contractors.png"
                      className="business-icon"
                      alt="Electrical Contractors."
                      title="Electrical Contractors."
                      loading="lazy"
                    />
                    <p>Electrical Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/swimming-pool-builders.png"
                      className="business-icon"
                      alt="Swimming Pool Builders."
                      title="Swimming Pool Builders."
                      loading="lazy"
                    />
                    <p>Swimming Pool Builders</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/junk-removal-companies.png"
                      className="business-icon"
                      alt="Junk Removal Companies."
                      title="Junk Removal Companies."
                      loading="lazy"
                    />
                    <p>Junk Removal Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/general-contractors.png"
                      className="business-icon"
                      alt="General Contractors."
                      title="General Contractors."
                      loading="lazy"
                    />
                    <p>General Contractors</p>
                  </Business>
                </Businesses>
                <p>
                  Call us today and let’s see how we can help find opportunities
                  to help boost your website traffic, sales and revenue.
                </p>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">Why Work With Maryland SEO Experts?</h2>
            <p className="subtext">
              There are many companies you can work with, but here are 4 reasons
              you should work with us
            </p>
            <div className="grid">
              <img
                src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186856/maryland-seo-firm_l0pyer.webp"
                className="page-img"
                alt="Our Maryland SEO firm is ready to help grow your business."
                title="Our Maryland SEO firm is ready to help grow your business"
                loading="lazy"
                width="500"
                height="300"
              />
              <div>
                <div className="reasons">
                  <h3>#1. We're a Small SEO Agency</h3>
                  <p>
                    We’re not a large SEO company. We’re small. But we’re
                    Maryland SEO experts that can get you results. We get your
                    company the results that matter - more phone calls, sales,
                    and money coming in.
                  </p>
                </div>
                <div className="reasons">
                  <h3>#2. We Never Ever Work With Your Competitors</h3>
                  <p>
                    As your SEO agency, we don't work with your competitors.
                    Some SEO firms don't care who they work with. They'll work
                    in the same city as you and your competitors. That's just
                    not right.
                  </p>
                </div>
                <div className="reasons">
                  <h3>#3. We’re Partners in This</h3>
                  <p>
                    We want the same things you want. For you to make more
                    money, grow your business, and have a happy life. If we can
                    help you in any other way, just ask, and we’ll see what we
                    can do.
                  </p>
                </div>
                <div className="reasons">
                  <div>
                    <h3>#4. We’re an All-in-one SEO Solution</h3>
                    <p>
                      We offer everything you need to rank your website in
                      search engines, from keyword research and strategy
                      development to on-page optimization and link building.
                      Plus, we have a team of experienced SEO copywriters who
                      can create quality copy for your website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text">
              <p className="subtext">
                We’re not driven by superficial metrics like the amount of
                website traffic you get or the number of keywords you rank for.
                As a professional Maryland SEO company, we’re only driven by how
                many phone calls you get, how much money you made, and if it was
                more than the last quarter.
              </p>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">Cities We Do Business In</h2>
            <p className="center">We work with businesses in:</p>
            <Cities>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Chevy Chase, MD."
                  title="Chevy Chase, MD."
                  loading="lazy"
                />
                <p>Chevy Chase, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Travilah, MD."
                  title="Travilah, MD."
                  loading="lazy"
                />
                <p>Travilah, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Clarksville, MD."
                  title="Clarksville, MD."
                  loading="lazy"
                />
                <p>Clarksville, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Danrestown, MD."
                  title="Danrestown, MD."
                  loading="lazy"
                />
                <p>Danrestown, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="South Kensington, MD."
                  title="South Kensington, MD."
                  loading="lazy"
                />
                <p>South Kensington, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Davidsonville."
                  title="Davidsonville."
                  loading="lazy"
                />
                <p>Davidsonville, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt=" Olney, MD."
                  title=" Olney, MD."
                  loading="lazy"
                />
                <p> Olney, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Poolesville, MD."
                  title="Poolesville, MD."
                  loading="lazy"
                />
                <p>Poolesville, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Severna Park, MD."
                  title="Severna Park, MD."
                  loading="lazy"
                />
                <p>Severna Park, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Glen Echo, MD."
                  title="Glen Echo, MD."
                  loading="lazy"
                />
                <p>Glen Echo, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Chesapeake Beach, MD."
                  title="Chesapeake Beach, MD."
                  loading="lazy"
                />
                <p>Chesapeake Beach, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Walkersville, MD."
                  title="Walkersville, MD."
                  loading="lazy"
                />
                <Link href="/potomac-md-seo-company" passHref>
                  <p>Walkersville, MD</p>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="Cheverly, MD."
                  alt="Cheverly, MD."
                  loading="lazy"
                />
                <p>Cheverly, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="La Plata, MD."
                  alt="La Plata, MD."
                  loading="lazy"
                />
                <p>La Plata, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="Glenarden, MD."
                  alt="Glenarden, MD."
                  loading="lazy"
                />
                <p>Glenarden, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  title="Lanham, MD."
                  alt="Lanham, MD."
                  loading="lazy"
                />
                <p>Lanham, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Ocean Pines, MD."
                  title="Ocean Pines, MD."
                  loading="lazy"
                />
                <p>Ocean Pines, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Towson, MD."
                  title="Towson, MD."
                  loading="lazy"
                />
                <p>Towson, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Greenbelt, MD."
                  title="Greenbelt, MD."
                  loading="lazy"
                />
                <p>Greenbelt, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Dickerson, MD."
                  title="Dickerson, MD."
                  loading="lazy"
                />
                <p>Dickerson, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Clarksville, MD."
                  title="Clarksville, MD."
                  loading="lazy"
                />
                <p>Clarksville, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Arnold MD."
                  title="Arnold MD."
                  loading="lazy"
                />
                <p>Arnold, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Broomont MD."
                  title="Broomont MD."
                  loading="lazy"
                />
                <p>Broomont, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="Somerset MD."
                  title="Somerset MD."
                  loading="lazy"
                />
                <p>Somerset, MD</p>
              </City>
            </Cities>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call Now!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <section>
          <FAQPageJsonLd
            mainEntity={[
              {
                questionName: 'Wy Do I Need Maryland Local SEO?',
                acceptedAnswerText: `If you want to reach more potential customers and want them to see your business when they search for your services, you’ll need a MD Local SEO strategy.`,
              },
              {
                questionName: 'How Do You Know If You Need Local SEO?',
                acceptedAnswerText: `If your website does not appear on the first page of Google for relevant keywords, then you need local SEO. Local SEO is how businesses can optimize their web presence to be found by people searching for products and services in their area.`,
              },
              {
                questionName:
                  'How is Maryland Local SEO different from general SEO?',
                acceptedAnswerText:
                  'While general SEO focuses on ranking globally or nationally, Maryland Local SEO emphasizes ranking in local search results, catering specifically to Maryland-based searches and audiences.',
              },
              {
                questionName: 'What is the Cost For Local SEO in Maryland?',
                acceptedAnswerText:
                  'SEO services in Maryland start at $1000 - $5000 plus for local businesses. This depends on the type of business, the competition, the location, and the marketing budget.',
              },
              {
                questionName:
                  'Is Local SEO only for businesses with physical locations?',
                acceptedAnswerText:
                  'While brick-and-mortar businesses stand to gain immensely, service-based businesses without a physical storefront can also benefit by targeting local searches and serving the Maryland community.',
              },
              {
                questionName:
                  'Do I need Maryland-specific content on my website for Local SEO?',
                acceptedAnswerText:
                  'Yes, creating content that resonates with Maryland residents and addresses local issues or interests can enhance relevance and improve local search rankings.',
              },
              {
                questionName:
                  'What is a local citation, and why does it matter?',
                acceptedAnswerText: `A local citation is any online mention of a business's name, address, and phone number. Consistent and accurate citations across various platforms can enhance local search rankings in Maryland.`,
              },
              {
                questionName: 'How Long is Your Contract for Doing SEO?',
                acceptedAnswerText:
                  'Our contracts are month-to-month. You can cancel at any time with 30 days written notice. We require a 3-month minimum to start to properly establish your baseline and see results. After the first 3 months, you are free to cancel at any time. There are no long-term contracts or commitments.',
              },
              {
                questionName: 'Can You Guarantee Me #1 Rankings?',
                acceptedAnswerText:
                  'No one can guarantee you first-page rankings on Google. Not even the best and most experienced SEO professionals can do that. However, we can promise that we will put in the hard work to get your website ranking as high as possible in search engine results pages (SERPs). We’ll use all the latest and most effective SEO techniques to try and get your site to the top.',
              },
              {
                questionName: 'Do You Have to Change Anything on My Website?',
                acceptedAnswerText:
                  'Sometimes we will have to make changes to your website. If your website is not user-friendly, or we have to improve user experience to help improve your SEO, we will advise that you make changes. Examples of changes would be adding clickable phone numbers, adding more pages, and improving the design of the web page.',
              },
              {
                questionName: 'Do You Offer Any Guarantees?',
                acceptedAnswerText:
                  'No, we do not offer any guarantees. SEO is an ever-changing and complex field. As such, there are no guarantees in SEO. However, we can guarantee that we will work diligently and ethically to improve your rankings and visibility in search engines.',
              },
            ]}
          />
          <div className="medium-container">
            <h2 className="title">
              FAQs People Ask About Our SEO Company and SEO Services
            </h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>Wy Do I Need Maryland Local SEO?</h3>
                  <p>
                    If you want to reach more potential customers and want them
                    to see your business when they search for your services,
                    you’ll need a MD Local SEO strategy.
                  </p>
                  <h3>How Do You Know If You Need Local SEO?</h3>
                  <p>
                    If your website does not appear on the first page of Google
                    for relevant keywords, then you need local SEO. Local SEO is
                    how businesses can optimize their web presence to be found
                    by people searching for products and services in their area.
                  </p>
                </div>
                <div className="question">
                  <h3>How is Maryland Local SEO different from general SEO?</h3>
                  <p>
                    While general SEO focuses on ranking globally or nationally,
                    Maryland Local SEO emphasizes ranking in local search
                    results, catering specifically to Maryland-based searches
                    and audiences.
                  </p>
                </div>
                <div className="question">
                  <h3>What is the Cost of SEO?</h3>
                  <p>
                    SEO services start at $1000 - $5000 plus for local
                    businesses. This depends on the type of business, the
                    competition, the location, and the marketing budget.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    Is Local SEO only for businesses with physical locations?
                  </h3>
                  <p>
                    While brick-and-mortar businesses stand to gain immensely,
                    service-based businesses without a physical storefront can
                    also benefit by targeting local searches and serving the
                    Maryland community.
                  </p>
                </div>
                {/* <div className="question">
                  <h3>Why Does SEO Cost So Much?</h3>
                  <p>
                    SEO is so expensive for three reasons: 1. It takes time to
                    show results. 2. It requires a lot of resources to build and
                    maintain a campaign. 3. It often relies on the expertise of
                    an SEO specialist to develop and grow your strategy.
                  </p>
                </div> */}
                <div className="question">
                  <h3>
                    Do I need Maryland-specific content on my website for Local
                    SEO?
                  </h3>
                  <p>
                    Yes, creating content that resonates with Maryland residents
                    and addresses local issues or interests can enhance
                    relevance and improve local search rankings.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>What is a local citation, and why does it matter?</h3>
                  <p>
                    A local citation is any online mention of a business's name,
                    address, and phone number. Consistent and accurate citations
                    across various platforms can enhance local search rankings
                    in Maryland.
                  </p>
                </div>
                <div className="question">
                  <h3>How Long is Your Contract for Doing SEO?</h3>
                  <p>
                    Our contracts are month-to-month. You can cancel at any time
                    with 30 days written notice. We require a 3-month minimum to
                    start to properly establish your baseline and see results.
                    After the first 3 months, you are free to cancel at any
                    time. There are no long-term contracts or commitments.
                  </p>
                </div>
                <div className="question">
                  <h3>Can You Guarantee Me #1 Rankings?</h3>
                  <p>No one can guarantee you first-page rankings on Google.</p>
                  <p>
                    Not even the best and most experienced SEO professionals can
                    do that. However, we can promise that we will put in the
                    hard work to get your website ranking as high as possible in
                    search engine results pages (SERPs). We’ll use all the
                    latest and most effective SEO techniques to try and get your
                    site to the top.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Have to Change Anything on My Website?</h3>
                  <p>Sometimes we will have to make changes to your website.</p>
                  <p>
                    If your website is not user-friendly, or we have to improve
                    user experience to help improve your SEO, we will advise
                    that you make changes. Examples of changes would be adding
                    clickable phone numbers, adding more pages, and improving
                    the design of the web page.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Offer Any Guarantees?</h3>
                  <p>
                    No, we do not offer any guarantees. SEO is an ever-changing
                    and complex field. As such, there are no guarantees in SEO.
                    However, we can guarantee that we will work diligently and
                    ethically to improve your rankings and visibility in search
                    engines.
                  </p>
                </div>
                {/* <div className="question">
                  <h3>Do You Provide Monthly Reporting?</h3>
                  <p>
                    Yes, we provide monthly reporting to our clients. This
                    report includes progress reports, keyword rankings, traffic
                    reports, backlink wins, and more.
                  </p>
                </div> */}
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186951/smiling-businessman-calling-maryland-seo-company_n76rnz.webp"
            className="call-to-action-grid-img"
            alt="Man calling our Maryland SEO company."
            width="1000"
            height="667"
            loading="lazy"
          />
          <div className="container">
            <h2>
              Ready to Work With a Top Maryland SEO Company and Boost Your Sales
              and Revenue?
            </h2>
            <p>
              Call us today and we'll show you how Maryland local SEO can help
              grow your business without paying for ads.
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation today!</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default MarylandSEOCompany

const ReasonSec = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

const Service = styled.div`
  .service-card {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    margin-bottom: 2rem;
    @media screen and (min-width: 1024px) {
      box-shadow: 13px 20px 0;
    }

    img {
      margin: 0;
      border-radius: 20px 20px 0 0;
    }

    .service {
      padding: 2rem 2rem;

      h3 {
        margin-top: 0;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  }
`

const Deliverables = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

const Deliverable = styled.div`
  margin: 1rem 0;
  display: flex;

  img.check {
    margin: 0;
    margin-right: 1.5rem;
    width: 54px;
    height: 54px;
    }

    h3 {
      margin: 0 0 1rem 0;
    }

  }
`

const HowSEOWorks = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

const SEOElement = styled.div`
  margin: 1rem 0;
  display: flex;

  img {
    margin: 0;
    margin-right: 1.5rem;
    width: 54px;
    height: 54px;
    position: relative;
    }

    h3 {
      margin: 1rem 0;
    }

  }
`
