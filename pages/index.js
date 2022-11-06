/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'

const calendly = 'https://calendly.com/bowieseo/30min'

const SEOAgency = 'Bowie SEO'

export default function Home({ data }) {
  return (
    <>
      <MainLayout>
        <HeroSection
          heroText="Make Your Website a Lead Generating Magnet And Stop Paying for online ads"
          subText="Our team can take control of your website and bring you more leads
            and customers, so you can focus on growing your business."
          backgroundImage="/images/bowieseo-header-img.webp"
          backgroundHeight="100vh"
          backgroundPosition="center"
          buttonText="Schedule a free consultation today!"
          buttonLink={calendly}
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <div>
                <h2>Is Your Business Struggling With the Following?</h2>
                <ul>
                  <li>
                    Struggling to get leads and customers from your website?
                  </li>
                  <li>
                    Experiencing stagnant sales and revenue numbers every month
                  </li>
                  <li>
                    Competitors ranking above you in Google, and you don’t know
                    why?
                  </li>
                  <li>
                    Do you feel like you’re wasting money paying for social
                    media ads that don't work?
                  </li>
                  <li>
                    Do you struggle trying to get more people to see your
                    business online?
                  </li>
                  <li>
                    Writing your website copy, service pages, and blog posts?
                  </li>
                  <li>
                    Tracking your website visits, keyword rankings, backlinks,
                    or even phone calls?
                  </li>
                  <li>
                    Trying different digital marketing methods tactics on your
                    own but nothing's working?
                  </li>
                  <li>
                    Losing sleep because you’re not bringing in enough money to
                    stay in business?
                  </li>
                  <li>Not knowing who to trust?</li>
                </ul>
                <p>We can help.</p>
                <p>
                  We're Bowie SEO, a{' '}
                  <Link href="/maryland-seo-company" passHref>
                    <a>Maryland SEO Company</a>
                  </Link>{' '}
                  in Bowie, MD, and we can show you how to fix your website so
                  you can attract more leads and customers without paying for
                  ads.
                </p>
              </div>
              <img
                src="/images/bowie-seo.webp"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="A business owner considering working with our SEO company to get his own leads without paying for online ads."
                title="A business owner considering working with our SEO company to get his own leads without paying for online ads."
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
              />
              <div>
                <h2>
                  Build Your Own Lead-Generating Website and Stop Paying For
                  Expensive Social Media and PPC Ads
                </h2>
                <p>
                  Let's face it, online ads are getting expensive, and prices
                  keep going up.
                </p>
                <p>But you don't have to pay for ads.</p>
                <p>
                  You can build your own lead-generating website and use search
                  engine optimization to do it.
                </p>
                <p>
                  With search engine optimization, you can increase your leads,
                  sales and revenue for your business without paying for
                  expensive online ads.
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
              Our Services Boost Your SEO Rankings and Get You to The First Page
              of Google
            </h2>
            <p className="subtext">
              We provide SEO services to home service businesses in{' '}
              <Link href="/maryland-seo-company" passHref>
                <a>Maryland</a>
              </Link>
              , and{' '}
              <Link href="/dc-seo" passHref>
                <a>DC</a>
              </Link>{' '}
              .
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
              />
              <div>
                <h2>Home Service Businesses We Work With</h2>
                <p>
                  We work with home service businesses that provide services to
                  customers homes. Our goal is to help home service businesses
                  like yours increase your online presence and your
                  profitability.
                </p>
                <Businesses>
                  <Business>
                    <img
                      src="/images/icons/asphalt-paving-contractor.png"
                      className="business-icon"
                      alt="Businesses our company works with - Asphalt paving companies."
                      title="Businesses we work with - Asphalt paving companies."
                    />
                    <p>Asphalt Paving Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/plumbing-contractors.png"
                      className="business-icon"
                      alt="Businesses our company works with - Plumbing Contractors."
                      title="Businesses our company works with - Plumbing Contractors."
                    />
                    <p>Plumbing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/hvac-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - HVAC Contractors."
                      title="Businesses we work with - HVAC Contractors."
                    />
                    <p>HVAC Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/roofing-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Roofing Contractors."
                      title="Businesses we work with - Roofing Contractors."
                    />
                    <p>Roofing Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/landscaping-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Landscaping Companies."
                      title="Businesses we work with - Landscaping Companies."
                    />
                    <p>Landscaping Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/pest-control-companies.png"
                      className="business-icon"
                      alt="Businesses we work with - Pest Control Companies."
                      title="Businesses we work with - Pest Control Companies."
                    />
                    <p>Pest Control Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/electrical-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - Electrical Contractors."
                      title="Businesses we work with - Electrical Contractors."
                    />
                    <p>Electrical Contractors</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/swimming-pool-builders.png"
                      className="business-icon"
                      alt="Businesses we work with - Swimming Pool Builders."
                      title="Businesses we work with - Swimming Pool Builders."
                    />
                    <p>Swimming Pool Builders</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/junk-removal-companies.png"
                      className="business-icon"
                      alt="Asphalt paving companies - Businesses we work with."
                      title="Businesses we work with - Asphalt paving companies."
                    />
                    <p>Junk Removal Companies</p>
                  </Business>
                  <Business>
                    <img
                      src="/images/icons/general-contractors.png"
                      className="business-icon"
                      alt="Businesses we work with - General Contractors."
                      title="Businesses we work with - General Contractors."
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
            <h2 className="title">What You Get When Your Work With Us</h2>
            <p className="subtext">When you work with Bowie SEO, you get:</p>
          </div>
          <div className="medium-container">
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="One-on-one expert support."
                />
                <div>
                  <h3>Individual Support</h3>
                  <p>
                    We work with you one-on-one and help you get to the top of
                    Google.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="You get keyword research."
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
                />
                <div>
                  <h3>Google Analytics and Google Console Setup</h3>
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
                  alt="You get a website audit."
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
            src="/images/bowie-seo-firm.webp"
            className="page-img-left"
            width="1440px"
            height="300px"
            alt="Work with our SEO firm to increase your online visibility."
            title="Work with our SEO firm to increase your online visibility."
          />
        </div>
        <section>
          <div className="container">
            <h2 className="title">Why Work With Bowie SEO?</h2>
            <p className="subtext">
              Save time and money, and acheive your sales and revenue goals by
              working with Bowie SEO specialists. We work only for you, not your
              competition.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/save-time.webp"
                  alt="Search engine optimization"
                  width="1000px"
                  height="665px"
                />
                <div className="service">
                  <h3>Focus On Running Your Business, not on doing SEO</h3>
                  <p>
                    Save time and focus on running your business, not on
                    tracking keyword rankings and search engine algorithm
                    changes.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/google-my-business.webp"
                  alt="Google My Business Management"
                  width="1000px"
                  height="665px"
                />
                <div className="service">
                  <h3>Save Money With Advanced Digital Marketing</h3>
                  <p>
                    Save money with the best digital marketing methods that are
                    proven to incease your website traffic and leads, and
                    increase your sales and revenue.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/digital-marketing-team.webp"
                  alt="Free Mini SEO Audit"
                  width="1000px"
                  height="665px"
                />
                <div className="service">
                  <h3>Have Your Own Dedicated SEO Specialists</h3>
                  <p>
                    Have your own team of SEO specialist helping grow your
                    business. Find new opportunities to rank higher in the
                    search results so customers find your website.
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
        {/* <section>
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions</h2>
            <div className="faq-questions"></div>
            <ul>
              <h3>#1. What is SEO?</h3>
              <p>
                Search Engine Optimization (SEO) is the practice of improving
                the ranking of a website on search engines. The higher the
                ranking, the more likely people are to find the site.
              </p>
              <p>
                There are a number of factors that contribute to a website's
                ranking, including the quality and quantity of the content, the
                structure of the site, and the popularity of the site. SEO is
                about making sure that a website is designed in a way that makes
                it easy for search engines to find and index the site's content.
              </p>
              <p>
                SEO is a complex and ever-changing field, and there are no easy
                shortcuts to achieving high rankings. However, there are a
                number of things that can be done to improve a website's SEO,
                and by extension, its ranking.
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
                other websites to a website help to improve its ranking, as they
                show that the site is popular and relevant. In order to get
                high-quality links, it is important to create quality content
                that other people will want to link to.
              </p>

              <h3>#2. How Can SEO Help My Business?</h3>
              <p>Seo can help your business in a number of ways, including:</p>
              <ul>
                <li>Increasing your visibility in search engines</li>
                <li>Driving traffic to the website</li>
                <li>Generating free leads and customers</li>
                <li>Improving your brand awareness and online reputation</li>
                <li>Enhancing customer satisfaction</li>
              </ul>
              <p>
                In short, SEO can be a powerful tool to help businesses grow and
                succeed online. If you're not using SEO, you're missing out on
                an opportunity to reach more customers and grow your business.
              </p>

              <h3>#3. What is The Cost Of SEO?</h3>
              <p>
                There is no one-size-fits-all answer to this question, as the
                cost of SEO can vary greatly depending on the size and scope of
                your project.
              </p>
              <p>
                However, as a general guide, you can expect to pay anywhere from{' '}
                <b>$1000 to $5,000 per month</b> for professional SEO services.
              </p>
              <p>
                And if your project is particularly large or complex, you may
                need to invest more money to get the results you're looking for.
                But in general, this is a good range to expect for most SEO
                projects.
              </p>
              <p>
                The cost of SEO can also vary depending on the keywords you want
                to target and the competition for those keywords. The more
                competitive the keywords, the more expensive it will be to rank
                for them. However, if you choose less competitive keywords, you
                may be able to get by with a smaller budget. Contact us today to
                learn more about our SEO services and pricing.
              </p>
            </ul>
            <ul>
              <h3>#4. How Long Does SEO Take to Work?</h3>
              <p>
                It's tough to give a definitive answer to this question because
                there are so many variables at play, including the specific
                industry, the competition level, the age of the website, and the
                quality of the content.
              </p>
              <p>
                Generally speaking, though, it can take anywhere from 3-6 months
                or 6-12 months for SEO to start having an impact on search
                engine rankings.
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

              <h3>#5. How Do I Calculate My SEO ROI?</h3>
              <p>
                It's important to be able to measure your SEO ROI (return on
                investment) in order to determine whether or not your SEO
                efforts are paying off. There are a number of different ways to
                calculate your SEO ROI, but the most important thing is to make
                sure you're tracking the right metrics.
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
                so don't expect to see results overnight. It can take months or
                even years to see a significant return on your investment.
                However, if you stick with it and continue to track your
                progress, you should eventually start to see a positive ROI from
                your SEO efforts.
              </p>
              <p>
                SEO can be a great way to generate leads and sales for your
                business, but it's important to make sure you're tracking the
                right metrics so that you can accurately calculate your ROI. By
                doing so, you'll be able to tell whether or not your SEO efforts
                are paying off and make necessary changes to ensure a positive
                return on your investment.
              </p>
            </ul>
          </div>
        </section> */}
        <section>
          <div className="medium-container">
            <h2 className="title">Frequently Asked Questions</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>Does SEO still work?</h3>
                  <p>Yes, SEO still works.</p>
                  <p>
                    However, it is important to remember that it takes a lot of
                    work to maintain high rankings in search engines. In
                    addition, the algorithms used by search engines are
                    constantly changing, which means that what worked yesterday
                    may not work today. As a result, it is important to stay
                    up-to-date on the latest SEO news and trends.
                  </p>
                </div>
                <div className="question">
                  <h3>Why Do I Need SEO?</h3>
                  <p>
                    If you want to reach more potential customers and want them
                    to see your business when they search for your services,
                    you’ll need an SEO strategy.
                  </p>
                  <h3>How Do You Know If You Need Local SEO?</h3>
                  <p>
                    You need local SEO if your website does not rank in search
                    engines when potential customers search for services like
                    yours in their local area. If you want your website to rank
                    higher in search results to attract more local customers,
                    you need to invest in local SEO.
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
                  <h3>What is the Difference between SEO and Local SEO</h3>
                  <p>
                    In short, SEO (search engine optimization) is the process of
                    improving the visibility and ranking of your website in
                    search engine results pages (SERPs). Local SEO, on the other
                    hand, is focused on optimizing your website for local search
                    results.{' '}
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>How long does it take to rank a website?</h3>
                  <p>
                    This is a difficult question to answer, as it depends on a
                    number of factors, including the age and authority of the
                    website, the competition for the keywords being targeted,
                    and the quality of the content. Generally speaking. However,
                    it can take several weeks to several months to see results
                    from SEO efforts.
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
                    But why would you cancel if you’re making more money after
                    you hired us?
                  </p>
                </div>
                <div className="question">
                  <h3>Can You Guarantee Me #1 Rankings?</h3>
                  <p>We cannot guarantee first-place rankings.</p>
                  <p>No one can.</p>
                  <p>
                    No one can guarantee rankings because no one knows how the
                    search algorithm works and because it is always changing.
                  </p>
                </div>
                <div className="question">
                  <h3>Do You Have to Change Anything on My Website?</h3>
                  <p>Sometimes we do.</p>
                  <p>
                    If your website is not user-friendly, or we have to improve
                    user experience to help improve your SEO, we will advise
                    that you make changes. Examples of changes would be adding
                    clickable phone numbers, adding more pages, and improving
                    the design of the web page.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/smiling-businessman-calling-maryland-seo-company.webp"
            alt="Man calling our Maryland SEO company."
            width="1000px"
            height="65px"
          />
          <div className="container">
            <h2>Ready to Boost Your Sales and Revenue?</h2>
            <p>
              Contact {SEOAgency} and we'll show you how search engine
              optimization can help get leads without paying for online ads.
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
    margin-bottom: 4rem;
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
      margin: 0;
    }

  }
`
