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
import { Businesses, Business } from '../components/BusinessesWeWorkWith'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const SEOAgency = 'our Maryland SEO company'

const MarylandSEOCompany = () => {
  const SEO = {
    title:
      'Maryland SEO Company: Boost Online Visibility Traffic, Leads and Sales',
    description:
      'Maryland SEO company helping businesses increase leads, sales and revenue without paying for expensive online ads. Contact us for a free consultation.',
    type: 'website',
    canonical: 'https://bowieseo.com/maryland-seo-company',
    openGraph: {
      title:
        'Maryland SEO Company: Boost Online Visibility Traffic, Leads and Sales',
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
          heroText="Our Maryland SEO Company Gets You More Leads, Sales and Revenue"
          subText="Let us take care of your website while you focus on what’s important - running your business"
          backgroundImage="/images/maryland-seo-company.webp"
          backgroundHeight="60vh"
          backgroundPosition="center"
          buttonText="Schedule your free consultaion today!"
          buttonLink={calendly}
        />
        <section>
          <div className="container">
            <div className="grid">
              <img
                src="/images/maryland-seo-company-client.webp"
                className="page-img"
                width="1000"
                height="600"
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
                  We're a <b>Maryland SEO company</b> that can help get you more
                  leads and customers with Maryland search engine optimization
                  (SEO).
                </p>
                <p>
                  Maryland SEO can help you increase your leads, website
                  traffic, online presence, sales, and your revenue.
                </p>
                <p>How does that sound?</p>
                <p>
                  If this sounds interesting, book a free call with us and see
                  how we can help your company grow with SEO.
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
                  Discover How (Maryland) SEO Can Help Your Business Explode
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
                  The right <b>(Maryland) search engine optimization</b>{' '}
                  strategy from the right SEO company can make this possible.
                </p>
              </div>
              <img
                src="/images/smiling-businessman.webp"
                className="page-img-left second-section"
                width="1000"
                height="600"
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
        <section>
          <div className="medium-container">
            <h2 className="title">What is (Maryland) SEO Anyway?</h2>
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
              (Maryland) search engine optimization is a digital marketing
              strategy that helps your website rank higher in Google and other
              major search engines and bring more traffic to your website.
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
              Maryland SEO works by increasing your online visibility in search
              engines so that you show up on the first page when people are
              searchiing for your services.
            </p>
            <p>
              Different processes help ensure that your website shows up in the
              organic search results (when people search for your services).
            </p>
            <p>
              When people searching for your services see your website on the
              first page of the search results, you get more clicks, visitors,
              and traffic.
            </p>
            <p>
              These searchers are ready to buy because they are actively
              searching for your services.
            </p>
            <p> (Maryland) SEO involves different parts.</p>
            <p>It involves:</p>
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
                  <h3>Local (Maryland) SEO</h3>
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
            <div className="btn">
              <Link href="/case-studies">
                <Button>Read Our Case Studies!</Button>
              </Link>
            </div>
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
                  src="/images/google-my-business.webp"
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
                  src="/images/seo-audit.webp"
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
            <h2 className="title">Work With Our Maryland SEO Company</h2>
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
                    Receive valuable guidance and assistance from our team of
                    SEO specialists, who are always ready to answer your
                    questions and offer expert advice via email or phone call.
                    Our goal is to help you expand your business, improve your
                    website's ranking, and enhance your online visibility with
                    effective SEO solutions. Let us show you how we can make a
                    difference for your business today.
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
                    Our team of SEO experts specialize in finding the most
                    effective, profitable, and relevant keywords that can help
                    you attract and convert more customers.
                  </p>
                  <p>
                    We create a comprehensive keyword database, which you can
                    utilize to develop targeted content and reach your ideal
                    audience. By leveraging our extensive keyword research, your
                    website can achieve higher visibility and gain a competitive
                    edge in your industry. Let us help you drive more sales and
                    revenue through targeted keyword optimization today.
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
                    Our team will optimize your GMB page to help you achieve top
                    rankings in the map pack and local search results. With a
                    fully optimized GMB page, your business can gain greater
                    visibility and attract more local customers. We can help you
                    stand out from the competition and achieve greater success
                    in your local market through effective GMB optimization. Let
                    us show you how our targeted approach to local SEO can take
                    your business to new heights.
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
                    Unlock your website's full potential by leveraging the power
                    of Google Analytics and Google Search Console. Our team can
                    help you set up these essential tools to monitor your
                    website's performance and activity, providing invaluable
                    insights into how users are accessing and using your site.
                    With this critical data, we can make targeted changes to
                    improve the user experience and enhance your website's
                    overall effectiveness. By utilizing the wealth of
                    information provided by Google Analytics and Search Console,
                    we can help you identify areas for improvement and take your
                    website to the next level. Let us help you maximize your
                    website's impact and achieve better results through expert
                    data analysis and optimization today.
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
                    Uncover the critical roadblocks that are hindering your
                    website's ability to rank and attract leads and customers
                    with our comprehensive SEO audit. Our expert team can
                    pinpoint the exact issues that need to be resolved for your
                    SEO campaign to succeed, providing invaluable insights and
                    solutions to help you achieve your goals. By identifying and
                    addressing these critical elements, we can help you optimize
                    your website and achieve higher search engine rankings,
                    generating greater visibility and attracting more leads and
                    customers to your business. Let us show you how our detailed
                    SEO audit can help your business unlock its full potential
                    and achieve long-term success.
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
                    With targeted local SEO strategies, we can help you get in
                    front of local customers precisely when they need your
                    services the most. Our expert team can optimize your website
                    to attract local customers, ensuring that your business
                    stands out from the competition. We can help you achieve
                    higher search rankings with optimized content, a
                    fast-loading website, and a better user experience. By
                    appearing on the first page of search results above your
                    competitors, you can gain a significant advantage in the
                    local market and attract more customers to your business.
                    Let us show you how our comprehensive local SEO solutions
                    can help your business reach its full potential and achieve
                    long-term success.
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
                    Our commitment to transparency means that you'll never be
                    left wondering about the progress of your SEO campaign. We
                    provide weekly updates to keep you informed about our
                    efforts, as well as any obstacles we may encounter. With our
                    regular updates, you'll have a clear understanding of our
                    strategy and the steps we are taking to help your business
                    succeed. You can count on us to provide 100% transparency
                    throughout the SEO process, and we are always available to
                    answer any questions you may have. Let us show you how our
                    open communication and collaborative approach can help you
                    achieve your SEO goals and drive greater success for your
                    business.
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
                    Our team of skilled content writers can craft high-quality
                    service pages and website content tailored to your business
                    needs, saving you valuable time and effort. We utilize data
                    from our comprehensive SEO audit, competitor analysis, and
                    keyword research to create effective content that can
                    generate maximum sales and revenue. By focusing on the most
                    relevant and effective messaging for your target audience,
                    we can help you attract and convert more leads through
                    compelling, customized content. Let us help you elevate your
                    website's impact and achieve better results through expert
                    content creation today.
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
                  <h3>Full 1000% Transparency</h3>
                  <p>
                    You'll never be left in the dark about our SEO efforts, as
                    we are committed to keeping you informed at all times. We
                    provide 100% transparency through weekly email updates, so
                    you can track our progress and ensure that your SEO campaign
                    is producing results. With our regular updates, you'll have
                    the peace of mind that your website is receiving the
                    attention it deserves, and any concerns or questions can be
                    addressed promptly. Let us show you how we can enhance your
                    online presence and drive more traffic to your website
                    through effective SEO solutions.
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
                    We track and monitor your SEO progress, ensuring that your
                    campaign is generating positive results, including increased
                    website traffic, more customers, higher sales, and greater
                    revenue. Our team utilizes advanced tools like Google
                    Analytics, Google Search Console, Ahrefs, SEO Screaming
                    Frog, and SEMRush to gather essential insights and ensure
                    that your SEO strategy is optimized for success. With our
                    extensive tracking and monitoring system, you can be
                    confident that your SEO campaign is on track and achieving
                    the desired results. Let us help you maximize your online
                    potential and grow your business through effective SEO
                    strategies today.
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
                  Our Maryland SEO company works with home service businesses
                  all over Maryland. Our goal is to help home service businesses
                  like yours increase your online presence and profitability.
                </p>
                <p>We work with:</p>
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
        <section>
          <div className="container">
            <h2 className="title">Areas We Cover with SEO</h2>
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
                <p>Bethesda, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Crofton, MD"
                  title="SEO Company Crofton, MD"
                />
                <Link href="/seo-services-crofton-md" passHref>
                  <a>Crofton, MD</a>
                </Link>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company Chesapeake Beach, MD"
                  title="SEO Company Chesapeake Beach, MD"
                />
                <Link href="/seo-company-chesapeake-beach-md">
                  <a>Chesapeake Beach, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Glen Burnie</p>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Hyattsville, MD</p>
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
                <Link href="/seo-services-salisbury-md" passHref>
                  <a>Salisbury, MD</a>
                </Link>
              </City>
              <City>
                <img src="/images/icons/map-location.png" />
                <p>Gaithersburg, MD</p>
              </City>
              <City>
                <img
                  src="/images/icons/map-location.png"
                  alt="SEO Company South Kensington, MD"
                  title="SEO Company South Kensington, MD"
                />
                <Link href="/seo-company-south-kensington-md" passHref>
                  <a>South Kensington, MD</a>
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
                  alt="SEO Company Walkersville, MD"
                  title="SEO Company Walkersville, MD"
                />
                <p>Walkersville, MD</p>
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
              <a href="tel:+2402660588">
                <Button>Call (240) 266-0588 today!</Button>
              </a>
            </div>
          </div>
        </section>
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
                width="1000"
                height="600"
                alt="Our Maryland SEO firm is ready to help grow your business."
                title="Our Maryland SEO firm is ready to help grow your business"
                loading="lazy"
              />
              <div>
                <div className="reasons">
                  <h3>We're a Small Agency</h3>
                  <p>
                    We’re not a large Maryland SEO company, we’re small. But
                    we’re Maryland SEO experts that can get you results. We get
                    your company the results that matter - more phone calls,
                    sales, and money coming in.
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
                or the number of keywords you rank for. As a professional
                Maryland SEO company, we’re only driven by how many phone calls
                you get, how much money you made, and if it was more than the
                last quarter.
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
          <FAQPageJsonLd
            mainEntity={[
              {
                questionName: 'Why Do I Need SEO?',
                acceptedAnswerText: `If you want to reach more potential customers and want them to see your business when they search for your services, you’ll need an SEO strategy.`,
              },
              {
                questionName: 'How Do You Know If You Need Local SEO?',
                acceptedAnswerText: `You need local SEO if the customers you serve are in the same location or city as your business. If you want to target customers in surrounding cities, you’ll still need local SEO.
                  A number of factors go into ranking locally, including having your NAP (name, address, phone number) information listed correctly on your website and in directories, having good reviews, and making sure your site is mobile-friendly.`,
              },
              {
                questionName: 'What is an SEO agency?',
                acceptedAnswerText:
                  'An SEO agency is a company that specializes in helping businesses improve their visibility in search engines. They can help with keyword research, on-page optimization, link building, and content marketing.',
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
                  'Our contracts are month-to-month. You can cancel at any time with 30 days written notice. We require a 3-month minimum to start to properly establish your baseline and see results. After the first 3 months, you are free to cancel at any time. There are no long-term contracts or commitments.',
              },
              {
                questionName: 'Do You Offer Any Guarantees?',
                acceptedAnswerText:
                  'No, we do not offer any guarantees. SEO is an ever-changing and complex field. As such, there are no guarantees in SEO. However, we can guarantee that we will work diligently and ethically to improve your rankings and visibility in search engines.',
              },
              {
                questionName: 'Do You Provide Monthly Reporting?',
                acceptedAnswerText:
                  'Yes, we provide monthly reporting to our clients. This report includes progress reports, keyword rankings, traffic reports, backlink wins, and more.',
              },
            ]}
          />
          <div className="container">
            <h2 className="title">FAQs about Maryland SEO</h2>
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
            width="1000"
            height="667"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Boost Your Sales and Revenue?</h2>
            <p>
              Contact {SEOAgency} and we'll show you how search engine
              optimization can help grow your business without paying for ads.
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
const Cities = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 508px) {
    @media (min-width: 768px) {
      margin: 3rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

const City = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  img {
    width: 40px;
    height: 40px;
    margin: 0;
    margin-right: 0.5rem;
  }

  a,
  p {
    margin: 0;
    font-weight: 700;
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
      margin: 0;
    }

  }
`
