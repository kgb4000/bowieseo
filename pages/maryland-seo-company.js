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
    title: `Maryland SEO Company | Click Here First to Boost Your Company's Growth`,
    description:
      'Maryland SEO company helping businesses increase leads, sales and revenue without paying for expensive online ads. Contact us for a free consultation.',
    type: 'website',
    canonical: 'https://bowieseo.com/maryland-seo-company',
    openGraph: {
      title: `Maryland SEO Company | Click Here First to Boost Your Company's Growth`,
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
          heroText="Outpace the Competition With the Right Maryland SEO Company"
          subText="Boost online visibility and increase ROI with Maryland local SEO"
          backgroundImage="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186700/maryland-seo-company_n3uwni.webp"
          backgroundHeight="60vh"
          backgroundPosition="center"
          buttonText="Get Your Free SEO Audit →"
          buttonLink="free-seo-audit"
        />
        <section>
          <div className="container">
            <div className="grid">
              <img
                // src="https://res.cloudinary.com/dfx3xhveo/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1696186547/maryland-seo-company-client_s6mfjk.webp"
                src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186547/maryland-seo-company-client_s6mfjk.webp"
                className="page-img"
                width="500"
                height="300"
                alt="A business owner considering working with our Maryland SEO company to get his own leads without paying for online ads."
                title="A business owner considering working with our Maryland SEO company to get his own leads without paying for online ads."
              />
              <div>
                <h2>
                  Dominate Your Local Market with Expert Maryland SEO Services!
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
                  Reclaim your rightful customers and revenue by enhancing your
                  online visibility with our expert local SEO strategies!
                </p>
                <p>
                  <strong>🛑 Wasting Money on Ineffective Ads Ends Now!</strong>
                </p>
                <p>
                  Have inconsistent leads from unreliable Facebook and Google
                  ads created holes in your budget? We offer a more dependable
                  solution—secure consistent, high-quality leads without the
                  unpredictable costs with our tailored local SEO!
                </p>
                <p>
                  We’re a leading Maryland SEO company, and we specialize in:
                </p>
                <p>
                  <strong>🚀 Elevating Your Online Presence</strong>
                </p>
                <p>
                  <strong>📈 Generating More Leads</strong>
                </p>
                <p>
                  <strong>💰 Increasing Your Sales and Revenue</strong>
                </p>
                <p>Our approach isn’t generic.</p>
                <p>
                  We develop SEO strategies meticulously tailored to increase
                  your visibility in the major search engines.
                </p>
                <p>
                  <strong>Why Continue to Lose When You Can Dominate?</strong>
                </p>
                <p>
                  Every moment you wait, your competitors are capturing your
                  potential customers and your revenue.
                </p>
                <p>Seize Your FREE Consultation Now!</p>
                <p>
                  Schedule your non-obligatory, insightful discussion about how
                  our proven SEO strategies can catapult your business ahead of
                  the competition!
                </p>
                <p>Don’t Delay—Your Competitors Won’t!</p>
                <p>
                  Secure your spot and discover the transformative power of
                  strategic SEO before your competitors seize the opportunity!
                </p>
                <p>
                  Let’s embark on a journey to optimize your digital presence,
                  fortify your lead generation, and bolster your revenue with a
                  Maryland SEO company that delivers.
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
                  Discover How (Maryland) SEO Services Can Help Your Business
                  Explode
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
        <section>
          <div className="medium-container">
            <h2 className="title">What is (Maryland) Local SEO Anyway?</h2>
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
              <strong>(Maryland) Local search engine optimization</strong> is a
              digital marketing strategy that helps to increase your website's
              visibility in search engines.
            </p>
            <p>
              When more people see your website listed in the search results,
              you increase your chances of getting more website visitors and
              traffic to your site.
            </p>
            <p>
              The more traffic your website gets, the more chances of you
              getting more leads and sales.
            </p>
            <p>
              SEO consists of many moving parts, and when done within the rules,
              it can result in exponential growth for your business.
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
        <section>
          <div className="medium-container">
            <h2 className="title">
              How Does (Maryland) Search Engine Optimization Work and How Does
              it Help Grow Your Business?
            </h2>
            <p>
              Ever wondered how some Maryland businesses just pop up on the
              first page of Google when you're searching?
            </p>
            <p>
              That's the magic of <strong>Maryland SEO services</strong> in
              action!
            </p>
            <p>
              Think of SEO like your digital megaphone. It fine-tunes your
              online voice so folks find you easily when they're looking for
              what you offer.
            </p>
            <p>
              And trust me, when your website shows up on that first page, it's
              like throwing a welcome party for all the clicks and visitors..
            </p>
            <p>The cool part?</p>
            <p>
              These people aren't just casually browsing – they're on the hunt
              for what you have. They're ready to dive in!
            </p>
            <p>
              And just so you know, Maryland SEO isn't a one-size-fits-all.
              There are a bunch of pieces to the puzzle.
            </p>
            <p> Here's a sneak peek:</p>
          </div>
          <div className="medium-container">
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
                    This process evaluates your site to identify areas that need
                    improvement and then makes changes to improve the site's
                    SEO.
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
                    finding and targeting keywords that potential customers are
                    searching for.
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
                  width={54}
                  height={54}
                />
                <div>
                  <h3>Local SEO</h3>
                  <p>
                    (Maryland) local SEO is about optimizing your website for
                    your business location in Google search.
                  </p>
                  <p>
                    Whether your business is located in{' '}
                    <Link href="/baltimore-seo">Baltimore</Link>,{' '}
                    <Link href="/rockville-seo-company">Rockville</Link>,
                    Gaithersburg, or{' '}
                    <Link href="/seo-company-frederick-md">Frederick</Link>, you
                    can optimize your website so that people searching for your
                    services in your location, will see your website on the
                    first page.
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
                    creating and optimizing existing content for search engines
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
                  width={54}
                  height={54}
                />
                <div>
                  <h3>Tracking and Monitoring</h3>
                  <p>
                    To know if your SEO is improving, you'll need to track and
                    monitor your progress over time. Otherwise, it'll be
                    difficult to tell whether your efforts are paying off.
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
        </section>
        <section className="bg-color">
          <div className="container">
            <h2 className="title">
              Our (Maryland) Local SEO Service Gets You to the top 5 in Google
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
          <div className="medium-container">
            <h2 className="title">
              Partner With Our Maryland SEO Company And Get Results that Boost
              Sales and Revenues
            </h2>
            <p className="subtext">Our Maryland SEO services include:</p>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="Check mark."
                  loading="lazy"
                />
                <div>
                  <h3>One-on-one Expert Support</h3>
                  <p>
                    Get valuable guidance and assistance from our team of
                    Maryland SEO experts, who are always ready to answer your
                    questions via email or phone call.
                  </p>
                  <p>
                    Our goal is to help you expand your business, improve your
                    website's ranking, and increase your online visibility with
                    effective SEO solutions.
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
                  <h3>Local Keyword Research</h3>
                  <p>
                    Our SEO consultants do extensive keyword research to find
                    the most effective, profitable, and relevant local keywords.
                  </p>
                  <p>
                    We create a comprehensive keyword database, for you to use
                    and develop targeted content to reach your ideal audience.
                    With keyword research, your website can achieve higher
                    visibility and gain a competitive edge in your industry.
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
                  <h3>GMB Management</h3>
                  <p>
                    We optimize your GMB page to help you achieve top rankings
                    in the map pack and local search results.
                  </p>
                  <p>
                    With a fully optimized GMB page, your business can gain
                    greater visibility and attract more local customers. We can
                    help you stand out from the competition and achieve greater
                    success in your local market through effective GMB
                    optimization. Let us show you how our targeted approach to
                    local SEO can take your business to new heights.
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
                  <h3>Google Analytics and Google Console Setup</h3>
                  <p>
                    Unlock your website's full potential with Google Analytics
                    and Google Search Console.
                  </p>
                  <p>
                    We set up these tools to monitor your website's performance
                    and activity, providing invaluable insights into how users
                    are accessing and using your site. With this critical data,
                    we can make targeted changes to improve the user experience
                    and enhance your website's overall effectiveness.
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
                  <h3>Website Audit</h3>
                  <p>
                    Uncover the critical roadblocks that are hindering your
                    website's ability to rank and attract leads and customers
                    with our comprehensive SEO audit.
                  </p>
                  <p>
                    We pinpoint the exact issues that need to be resolved for
                    your SEO campaign to succeed, providing invaluable insights
                    and solutions to help you achieve your goals. We optimize
                    your website and achieve higher search engine rankings,
                    generating greater visibility and attracting more leads and
                    customers to your business.
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
                  <h3>(Maryland) Local SEO</h3>
                  <p>
                    With targeted local SEO strategies for Mayland businesses,
                    we can help you get in front of local customers precisely
                    when they need your services the most.
                  </p>
                  <p>
                    We optimize your website to attract local customers,
                    ensuring that your business stands out from the competition.
                    We help you achieve higher search rankings with optimized
                    content, a fast-loading website, and a better user
                    experience.
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
                  <h3>Weekly Updates</h3>
                  <p>
                    We are committed to transparency. That means that you'll
                    never be left wondering about the progress of your SEO
                    campaign.
                  </p>
                  <p>
                    We provide weekly updates to keep you informed about our
                    efforts, as well as any obstacles we may encounter. You'll
                    have a clear understanding of our strategy and the steps we
                    are taking to help your business succeed.
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
                  <h3>SEO Content Creation/Optimization</h3>
                  <p>
                    We craft high-quality service pages and website content
                    tailored to your business needs, saving you valuable time
                    and effort.
                  </p>
                  <p>
                    We utilize data from our SEO audit, competitor analysis, and
                    keyword research to create effective content that can
                    generate maximum sales and revenue. By focusing on the most
                    relevant and effective messaging for your target audience,
                    we can help you attract and convert more leads through
                    compelling, customized content.
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
                  <h3>Full 100% Transparency</h3>
                  <p>
                    You'll never be left in the dark about our SEO efforts,
                    because we are committed to keeping you informed at all
                    times.
                  </p>
                  <p>
                    We provide 100% transparency through weekly email updates
                    and calls, so you can track our progress and ensure that
                    your SEO campaign is producing results. With regular
                    updates, you'll have the peace of mind that your website is
                    receiving the attention it deserves.
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
                  <h3>Tracking and Monitoring</h3>
                  <p>We track and monitor your SEO progress. </p>
                  <p>
                    Ensuring that your campaign is generating positive results,
                    including increased website traffic, more customers, higher
                    sales, and greater revenue.
                  </p>
                  <p>
                    With our extensive tracking and monitoring, you can be
                    confident that your SEO campaign is on track and achieving
                    the desired results.
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
                src="https://res.cloudinary.com/dfx3xhveo/image/upload/v1696186789/home-service-business_s9j8j6.webp"
                className="page-img"
                alt="Maryland SEO company"
                title="Home service businesses we work with."
                loading="lazy"
                width="500"
                height="300"
              />
              <div>
                <h2>Maryland SEO Services for Maryland Local Businesses</h2>
                <p>
                  We work with businesses all over Maryland. Our goal is to help
                  local businesses like yours increase your online presence and
                  profitability.
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
          <div className="medium-container">
            <h2 className="title">Why Work With Our Maryland SEO Company?</h2>
            <p className="subtext">
              We know that there are many Maryland SEO companies you can work
              with. However, working with our SEO company has advantages.
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
                  <h3>We're a Small Agency</h3>
                  <p>
                    We’re not a large Maryland SEO company. We’re small. But
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
          <div className="medium-container">
            <h2 className="title">
              FAQs People Ask About Our Maryland SEO Company and SEO Services
            </h2>
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
                    SEO services start at $1000 - $5000 plus for local
                    businesses. This depends on the type of business, the
                    competition, the location, and the marketing budget.
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
              Call us today and we'll show you how local search engine
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
