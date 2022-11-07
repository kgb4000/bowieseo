/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'
import { Businesses, Business } from '../components/BusinessesWeWorkWith'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const SEOAgency = 'our SEO agency'

const MarylandSEOCompany = () => {
  const SEO = {
    title: 'Maryland SEO Company | Boost Traffic, Revenue and Growth',
    description:
      'Maryland SEO company helping businesses increase leads, sales and revenue without paying for expensive online ads. Contact us for a free consultation.',
    type: 'website',
    canonical: 'https://bowieseo.com/maryland-seo-company',
    openGraph: {
      title: 'Maryland SEO Company | Boost Traffic, Revenue and Growth',
      description:
        'Maryland SEO company helping businesses increase leads, sales and revenue without paying for expensive online ads. Contact us for a free consultation.',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="A Maryland SEO Company that gets you more leads to increase your sales and revenue"
          subText="Let us take care of your website while you focus on what’s important - running your business"
          backgroundImage="/images/maryland-seo-company.webp"
          backgroundHeight="60vh"
          backgroundPosition="center"
          buttonText="Schedule your free consultaion today!"
          buttonLink={calendly}
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <img
                src="/images/maryland-seo-company-client.webp"
                className="page-img"
                width="1000px"
                height="600px"
                alt="A business owner considering working with our Maryland SEO company to get his own leads without paying for online ads."
                title="A business owner considering working with our Maryland SEO company to get his own leads without paying for online ads."
              />
              <div>
                <h2>
                  Digital Marketing Can Be Tough, But Try Succeeding Without
                  it...
                </h2>
                <p>Is your phone ringing off the hook?</p>
                <p>
                  Do you have customers requesting quotes for your services?
                </p>
                <p>
                  If you're not getting phone calls or leads from your website,
                  you lose thousands of dollars every month.
                </p>
                <p>
                  You've tried other digital marketing methods like Facebook and
                  Google ads, but they're not giving you consistent leads and
                  the calls you want.
                </p>
                <p>Plus, those ads are getting expensive.</p>
                <p>
                  Customers that should be buying your services are buying
                  services from your competitors.
                </p>
                <p>Why?</p>
                <p>
                  Because your business does not come up in Google when people
                  search for your services.
                </p>
                <p>They see your competitors'.</p>
                <p>
                  They're spending their money with your competitors instead of
                  you.
                </p>
                <p>
                  And if you don't do something about it now, it will only get
                  worse.
                </p>
                <p>
                  You'll continue to lose money every month and keep paying for
                  those expensive PPC and social media ads that don't work.
                </p>
                <p>
                  How do you feel knowing that your customers are going to your
                  competitors because they can't find your business online?
                </p>
                <p>Not too good, I'm sure.</p>
                <p>But it's not your fault.</p>
                <p>
                  Like many other business owners, they just don't know how
                  digital marketing works.
                </p>
                <p>That's where we come in and we can help.</p>
                <p>
                  We're a Maryland SEO company, that can help get you more leads
                  and customers with search engine optimization (SEO).
                </p>
                <p>
                  We can help you increase your leads, your website traffic,
                  your online presence, your sales, and your revenue.
                </p>
                <p>How does that sound?</p>
                <p>
                  If this sounds interesting, book a free call with our SEO
                  experts and see how we can help your company succeed with SEO.
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
        <section className="bg-color">
          <div className="medium-container">
            <div className="grid">
              <div className="first-section">
                <h2>
                  Discover How (Maryland) Search Engine Optimization Can Help
                  Your Business Explode
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
                  And two weeks after that, a one-week vacation with the wife in
                  Tulum, Mexico.
                </p>
                <p>Business is good. </p>
                <p>
                  You’re happy, your family is happy, your employees are happy.
                </p>
                <p>
                  The right search engine optimization strategy from the right
                  SEO company can make this possible.
                </p>
              </div>
              <img
                src="/images/smiling-businessman.webp"
                className="page-img-left second-section"
                width="1000px"
                height="600px"
                alt="Businessman happy he started using our Maryland SEO company for his SEO."
                title="Businessman happy he started using our Maryland SEO company for his SEO."
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">What is (Maryland) SEO Anyway?</h2>
            <img
              src="/images/google-search-console-stats.png"
              className="page-img-left inline"
              alt="Results from one SEO campaign - More website visitors, more searchers seeing your website."
              title="Results from one SEO campaign - More website visitors, more searchers seeing your website."
              width="583px"
              height="248px"
              loading="lazy"
            />
            <p>
              Search engine optimization (SEO) is a digital marketing strategy
              that helps your website rank higher in Google and other major
              search engines and bring more traffic to your website.
            </p>
            <p>
              It's a type of inbound marketing where you create valuable content
              that your target market is searching for.
            </p>
            <p>
              The more traffic your website gets, the more chances you getting
              more leads and sales.
            </p>
            <p>
              SEO consists of many moving parts, and when done within the rules,
              can result in exponential growth for your business.
            </p>
            <p>
              From targeting the right keywords, competitor analysis, on-page
              SEO, and managing your Google My Business page, search engine
              optimization can take your business to the next level.
            </p>
            <p>
              Schedule a free call with us, tell us about your business, and
              learn how (Maryland) SEO can help your business take off.
            </p>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              How Does (Maryland) SEO Work and How Does it Help your Business
              Grow?
            </h2>
            <p>
              SEO works by increasing your online visibility in search engines.
            </p>
            <p>
              Different processes help ensure that your website shows up in the
              organic search results (when people search for your services).
            </p>
            <p>
              When people searching for your services see your website in the
              search results, you get more clicks, visitors, and traffic.
            </p>
            <p>
              These searchers are ready to buy because they are actively
              searching for your services. SEO involves different parts.
            </p>
            <p>SEO involves:</p>
            <HowSEOWorks>
              <SEOElement>
                <img
                  src="/images/icons/local-seo.png"
                  className="seo-icon"
                  alt="Perform an SEO Audit to find opprtunities to improve your website."
                  title="Perform an SEO Audit to find opprtunities to improve your website."
                  loading="lazy"
                />
                <div>
                  <h3>SEO Audit</h3>
                  <p>
                    This process evaluates your site to identify areas that need
                    improvement and then makes changes to improve the site's
                    SEO.
                  </p>
                  <p>
                    When conducting an audit, it is important to look at various
                    factors, including the website's content, backlinks,
                    keywords, and overall visibility.
                  </p>
                </div>
              </SEOElement>
              <SEOElement>
                <img
                  src="/images/icons/technical-search-engine-optimization.png"
                  className="seo-icon"
                  alt="Perform an Technical SEO to make your website perform better in the search engines."
                  title="Perform an Technical SEO to make your website perform better in the search engines."
                  loading="lazy"
                />
                <div>
                  <h3>Technical SEO</h3>
                  <p>
                    Technical SEO is optimizing a website by improving the
                    site's architecture and code.
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
                  alt="Do keyword research and find the keywords searchers use to find your services."
                  title="Do keyword research and find the keywords searchers use to find your services."
                  loading="lazy"
                />
                <div>
                  <h3>Keyword Research</h3>
                  <p>
                    Keyword research is finding and targeting keywords that
                    potential customers are searching for.
                  </p>
                  <p>
                    This research helps businesses better understand how people
                    search for their products or services and allows them to
                    create content that is more likely to rank in SERPs.
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
                />
                <div>
                  <h3>Local SEO</h3>
                  <p>
                    Local SEO is optimizing your website for Google search in
                    your specific geographic location.
                  </p>
                  <p>
                    Strategies to improve local SEO include creating content
                    about local events, building backlinks from local websites,
                    and claiming your business's listing on Google My Business.
                  </p>
                </div>
              </SEOElement>
              <SEOElement>
                <img
                  src="/images/icons/content-writing.png"
                  className="seo-icon"
                  alt="Content writing and optimization"
                  title="Content writing and optimization"
                  loading="lazy"
                />
                <div>
                  <h3>Content Creation and Optimization</h3>
                  <p>
                    Content SEO is optimizing a website's content search engines
                    and for people. It includes creating high-quality,
                    keyword-rich content that will help improve the site's
                    ranking in SERPs.
                  </p>
                  <p>
                    It is important to note that not all types of content are
                    created equal. Google favors certain types of content, such
                    as articles and blog posts, over others.
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
                />
                <div>
                  <h3>Tracking and Monitoring</h3>
                  <p>
                    To know if your SEO is improving, you'll need to track and
                    monitor your progress over time. Otherwise, it'll be
                    difficult to tell whether your efforts are paying off.
                  </p>
                  <p>
                    Tools we use include Google Analytics, Googel Search
                    Console, Ahrefs, and SEMrush.
                  </p>
                </div>
              </SEOElement>
            </HowSEOWorks>
          </div>
        </section>
        <section className="bg-color">
          <div className="container">
            <h2 className="title">
              Our (Maryland) SEO Services get You to the first page
            </h2>
            <p className="subtext">
              We study the search engines, and we know Maryland businesses. Our
              company offers (Maryland) SEO services that put your website on
              the first page so you can get more phone calls, leads, and sales
              than your competitors.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/maryland-seo-company.webp"
                  alt="Search engine optimization"
                  width="1000px"
                  height="665px"
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
                  src="/images/google-my-business.webp"
                  alt="Google My Business Management"
                  width="1000px"
                  height="665px"
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
                  src="/images/seo-audit.webp"
                  alt="Free Mini SEO Audit"
                  width="1000px"
                  height="665px"
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
            <h2 className="title">
              What You Get Working With Our Maryland SEO Company
            </h2>
            <p className="subtext">Our (Maryland) SEO Services include:</p>
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
                  <h3>One-on-one Expert Support</h3>
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
                    We find the best, most profitable, and most relevant
                    keywords that will bring you customers and sales. We build a
                    keyword database that you use to target and build content.
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
                  <h3>GMB Management</h3>
                  <p>
                    Let’s boost your local SEO game by managing your Google My
                    Business page. Get a fully optimized GMB page so that you
                    appear at the top of the map pack and the local search
                    results.
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
                    Set up Google Analytics and Google Console and improve your
                    website by letting you track its performance and activity.
                    These tools give information about how people are using and
                    accessing your site, so that changes can be made to enhance
                    the user experience.
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
                  <h3>Website Audit</h3>
                  <p>
                    Discover the elements stopping your website from ranking and
                    getting you the leads and customers you need. Our SEO audit
                    will show you the exact issues that must be fixed for your
                    SEO campaign to succeed.
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
                    it counts. Optimize your website, so local customers find
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
                  <h3>Weekly Updates</h3>
                  <p>
                    We update you weekly so you’ll always know what we’re doing.
                    You’ll always know what we’re doing, or progress, and even
                    our struggles and issues.
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
                  <h3>100% Transparency</h3>
                  <p>
                    You’ll never have to wonder, ‘What are those SEO guys
                    doing?’ We’ll keep you informed 100%. We’ll send you weekly
                    email updates, so you know we’re working and that your SEO
                    campaign is working.
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
                    Track and monitor your progress and make sure your campaign
                    delivers positive results: more traffic to your website,
                    more customers, more sales, and more revenue. We use tools
                    like Google Analytics, Google Search Console, Ahrefs, SEO
                    Screaming Frog, and SEMRush.
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
                src="/images/home-service-business.webp"
                className="page-img"
                alt="Maryland SEO company"
                title="Home service businesses we work with."
                loading="lazy"
              />
              <div>
                <h2>Home Service Businesses We Work With in Maryland</h2>
                <p>
                  Our SEO agency works with home service businesses that provide
                  services to customers homes. Our goal is to help home service
                  businesses like yours increase your online presence and
                  profitability.
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
                <Button>Schedule a Free Consultation!</Button>
              </a>
            </div>
          </div>
        </section>
        {/* <div className="container">
          <img
            src="/images/bowie-seo-firm.webp"
            className="page-img-left"
            width="1000px"
            height="600px"
            alt="Bowie SEO - A Maryland SEO Company."
            title="Bowie SEO - A Maryland SEO Company."
          />
        </div> */}
        {/* <section>
          <div className="medium-container">
            <div className="grid">
              <div>
                <h2>Why Work With Us?</h2>
                <div>
                  <div>
                    <h3>1. All We Do is SEO</h3>
                    <p>
                      All we do is SEO. We live, sleep, and breathe SEO. Whether
                      developing strategies, executing campaigns, or analyzing
                      data, our team is 100% focused on getting you results.
                    </p>
                  </div>
                  <div>
                    <h3>2. We're Partners in This</h3>
                    <p>
                      We don't succeed unless you do. We take your success
                      personally and will work tirelessly to ensure your
                      campaign is successful. We're not satisfied with "good
                      enough." We want to deliver results that blow the
                      competition out of the water and help you dominate your
                      market.
                    </p>
                  </div>
                  <div>
                    <h3>3. We’re an All-in-one SEO Solution</h3>
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
              <img
                src="/images/seo-experts.webp"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="Search engine optimization experts ready to help grow your business."
                title="Search engine optimization experts ready to help grow your business."
              />
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section> */}
        <section>
          <div className="medium-container">
            <h2 className="title">Why Work With Our Maryland SEO Company?</h2>
            <p className="subtext">
              We know that there are many Maryland SEO companies you can work
              with. However, working with our company has advantages.
            </p>
            <div className="grid">
              <img
                src="/images/maryland-seo-firm.webp"
                className="page-img"
                width="1000px"
                height="600px"
                alt="Our Maryland SEO firm is ready to help grow your business."
                title="Our Maryland SEO firm is ready to help grow your business"
                loading="lazy"
              />
              <div>
                <div className="reasons">
                  <h3>We're a Small Agency</h3>
                  <p>
                    We’re not a large SEO company, we’re small. But we’re
                    Maryland SEO experts that can get you results. We get your
                    company the results that matter - more phone calls, sales,
                    and money coming in.
                  </p>
                </div>
                <div className="reasons">
                  <h3>We’re Partners in This</h3>
                  <p>
                    We want the same things you want. For you to make more
                    money, grow your business, and have a happy life. If we can
                    help you in any other way, just ask, and we’ll see what we
                    can do.
                  </p>
                </div>
                <div className="reasons">
                  <div>
                    <h3>We’re an All-in-one SEO Solution</h3>
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
                We work with small business owners who want to increase their
                organic traffic, web presence, and revenue. We’re not driven by
                superficial metrics like the amount of website traffic you get
                or the number of keywords you rank for. As professional SEO
                consultants, we’re only driven by how many phone calls you get,
                how much money you made, and if it was more than the last
                quarter.
              </p>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-color">
          <FAQPageJsonLd
            mainEntity={[
              {
                questionName: 'Why Do I Need SEO?',
                acceptedAnswerText:
                  'If you want to reach more potential customers and want them to see your business when they search for your services,you’ll need an SEO strategy.',
              },
              {
                questionName: 'How Do You Know If You Need Local SEO?',
                acceptedAnswerText:
                  'You need local SEO if the customers you serve are in the same location or city as your business. If you want to target customers in surrounding cities, you’ll still need local SEO.',
              },
              {
                questionName: 'What is the Cost of SEO?',
                acceptedAnswerText:
                  'SEO services start at $1000 - $5000 for local businesses. This depends on the type of business, the competition, the location, and the marketing budget.',
              },
              {
                questionName: 'Why Does SEO Cost So Much?',
                acceptedAnswerText:
                  'It takes time to show results, it requires a lot of resources to build and maintain a campaign, and it often relies on the expertise of an SEO specialist to develop and grow your strategy.',
              },
              {
                questionName: 'How Long Does SEO Take to See Results?',
                acceptedAnswerText:
                  'SEO can take three to six months before you see any results from your campaign. This depends on the location, the competition, and any website authority your business has already. Remember that SEO is a long-term strategy and will pay off long after you’ve started. The main thing is to start.',
              },
              {
                questionName:
                  'What is the Difference between SEO and Local SEO?',
                acceptedAnswerText:
                  'SEO (search engine optimization) is the process of improving the visibility and ranking of your website in search engine results pages (SERPs). Local SEO, on the other hand, is focused on optimizing your website for local search results.',
              },
              {
                questionName: 'How Long is Your Contract for Doing SEO?',
                acceptedAnswerText:
                  'Our contracts are month-to-month. You can cancel your contract 30 day prior to the end of the month. But why would you cancel if you’re making more money after you hired us?',
              },
              {
                questionName: 'Can You Guarantee Me #1 Rankings?',
                acceptedAnswerText:
                  'We cannot guarantee first-place rankings. No one can. No one can guarantee rankings because search algorithms are always changing.',
              },
              {
                questionName: 'Do You Have to Change Anything on My Website?',
                acceptedAnswerText:
                  'Sometimes we will have to make changes to your website. If your website is not user-friendly, or we have to improve user experience to help improve your SEO, we will advise  that you make changes. Examples of changes would be adding clickable phone numbers, adding more pages, and improving the design of the web page.',
              },
            ]}
          />
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>Why Do I Need SEO?</h3>
                  <p>
                    If you want to reach more potential customers and want them
                    to see your business when they search for your services,
                    you’ll need an SEO strategy.
                  </p>
                  <h3>How Do You Know If You Need Local SEO?</h3>
                  <p>
                    If your website does not appear on the first page of Google
                    for relevant keywords, then you need local SEO. Local SEO is
                    how businesses can optimize their web presence to be found
                    by people searching for products and services in their area.
                  </p>
                  <p>
                    A number of factors go into ranking locally, including
                    having your NAP (name, address, phone number) information
                    listed correctly on your website and in directories, having
                    good reviews, and making sure your site is mobile-friendly.
                  </p>
                </div>
                <div className="question">
                  <h3>What is an SEO agency?</h3>
                  <p>
                    An SEO agency is a company that specializes in helping
                    businesses improve their visibility in search engines. They
                    can help with keyword research, on-page optimization, link
                    building, and content marketing.
                  </p>
                </div>
                <div className="question">
                  <h3>What is the Cost of SEO?</h3>
                  <p>
                    SEO services start at $1000 - $5000 for local businesses.
                    This depends on the type of business, the competition, the
                    location, and the marketing budget.
                  </p>
                </div>
                <div className="question">
                  <h3>What is Your Minimum Budget for SEO Services?</h3>
                  <p>
                    Our minimum budget for SEO services is $1000 per month. This
                    allows us to properly allocate the resources needed to
                    produce results for our clients.
                  </p>
                </div>

                <div className="question">
                  <h3>Why Does SEO Cost So Much?</h3>
                  SEO is so expensive for three reasons:
                  <ul>
                    <li>It takes time to show results</li>
                    <li>
                      It requires a lot of resources to build and maintain a
                      campaign
                    </li>
                    <li>
                      It often relies on the expertise of an SEO specialist to
                      develop and grow your strategy
                    </li>
                  </ul>
                </div>
                <div className="question">
                  <h3>What is the Difference between SEO and Local SEO?</h3>
                  <p>
                    The main difference is that Local SEO focuses on optimizing
                    for local search results, while traditional SEO is focused
                    on global or national search results.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>What is an SEO consultant?</h3>
                  <p>
                    An SEO consultant is an individual who specializes in
                    helping businesses improve their visibility in search
                    engines. They can help with keyword research, on-page
                    optimization, link building, and content marketing.
                  </p>
                </div>
                <div className="question">
                  <h3>How Long is Your Contract for Doing SEO?</h3>
                  <p>
                    Our contracts are month-to-month. You can cancel at any time
                    with 30 days' written notice. We require a 3-month minimum
                    to start to properly establish your baseline and see
                    results. After the first 3 months, you are free to cancel at
                    any time. There are no long-term contracts or commitments.
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
                  <h3>Do You Offer Any Guarantees? ?</h3>
                  <p>
                    No, we do not offer any guarantees. SEO is an ever-changing
                    and complex field. As such, there are no guarantees in SEO.
                    However, we can guarantee that we will work diligently and
                    ethically to improve your rankings and visibility in search
                    engines.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Provide Monthly Reporting?</h3>
                  <p>
                    Yes, we provide monthly reporting to our clients. This
                    report includes progress reports, keyword rankings, traffic
                    reports, backlink wins, and more.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/smiling-businessman-calling-maryland-seo-company.webp"
            className="call-to-action-grid-img"
            alt="Man calling our Maryland SEO company."
            width="1000px"
            height="667px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Boost Your Sales and Revenue?</h2>
            <p>
              Contact {SEOAgency} and we'll show you how (Maryland) search
              engine optimization can help grow your business without paying for
              online ads.
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

// const WorkWithUs = styled.div`
//   @media screen and (min-width: 1024px) {
//     max-width: 1000px;
//     margin: 0 auto;
//     margin-bottom: 3rem;
//   }

//   .text {
//     margin-top: 2rem;
//     padding: 0 4rem;
//   }
// `
// const Why = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;

//   .reasons {
//     margin: 1rem 0;
//     padding: 2rem;
//     border: 1px solid #eee;
//     border-radius: 40px;
//     box-shadow: 10px 10px 0px #000;
//     background-color: #ecf0f1;
//   }

//   p {
//     margin-bottom: 0;
//     }

//   img {
//     margin: 0;
//     margin-right: 1.5rem;
//     width: 54px;
//     height: 54px;
//     position: relative;
//     }

//     h3 {
//       margin: 0;
//     }
//  }
//  `

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
      margin: 0;
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
      margin: 0;
    }

  }
`
