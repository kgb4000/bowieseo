/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'
import { getPosts } from '../lib/data'
import { Business, Businesses } from '../components/BusinessesWeWorkWith'
import {
  ReasonSec,
  Deliverable,
  Deliverables,
  Service,
} from '../components/LocatioPageEssentials'

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

const SEOAgency = 'SEO company'

export default function CroftonMD() {
  const SEO = {
    title: 'SEO Services Crofton MD | Increase Leads, Boost Revenue',
    description:
      'We provide SEO services in Crofton, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
    canonical: 'https://bowieseo.com/seo-services-crofton-md',
    openGraph: {
      title: 'SEO Services Crofton MD | Increase Leads, Boost Revenue',
      description:
        'We provide SEO services in Crofton, Maryland. Our experts help businesses get found by customers searching for services like yours. Call us today!',
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
          heroText="We provide SEO Services for Crofton, MD Businesses"
          subText="We use our SEO knowledge to help attract more customers and increase sales for your business."
          backgroundImage="/images/maryland-seo-company.webp"
          backgroundHeight="60vh"
          backgroundPosition="center"
          buttonText="Schedule your free consultaion today!"
          buttonLink={calendly}
        />
        <section>
          <div className="container">
            <div className="grid">
              <div>
                <h2>
                  Keep Losing Money Every Month or Start Using SEO Services in
                  Crofton and Make Money: You Choose
                </h2>
                <p>You have a business in Crofton.</p>
                <p>
                  You're trying to figure out how to get more leads and
                  customers to your business, but nothing seems to be working.
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
                  You need a system to get leads and customers into your
                  business regularly, and you need to own that system.
                </p>
                <p>That’s where we come in.</p>
                <p>
                  We’re a{' '}
                  <Link href="/maryland-seo-company" passHref>
                    <a>Maryland SEO Company</a>
                  </Link>{' '}
                  helping small business owners in Crofton get more leads and
                  customers by building a lead generation system specifically
                  for your business.
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
                src="/images/seo-services-crofton-md.jpg"
                className="page-img-left"
                alt="Business owner thinking about getting SEO Services for his business in Crofton, MD"
                title="Business owner thinking about getting SEO Services in Crofton Maryland"
                width="600"
                height="1000"
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
            <h2 className="title">
              Why Work With Us and for Crofton SEO Services
            </h2>
            <p className="subtext">
              Boost your sales, reduce costs and reach new heights in revenue
              with the help of our expert Crofton SEO specialists. We guarantee
              to work solely for you - never against you or any contenders!
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
                    Put your attention on what matters most - running your
                    business, not wasting time and energy researching keywords,
                    creating copy or analyzing competitors. Leave that to us.
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
                    Maximize your budget and drive tremendous amounts of traffic
                    to your website with the most reliable search marketing
                    techniques that are proven to generate leads for your
                    company.
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
                    Transform your business with a specialized SEO team that can
                    bring new opportunities to increase exposure and attract
                    potential customers. Unleash your company's full potential
                    today!
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
        <section className="reasons-section">
          <div className="medium-container">
            <h2 className="title">
              7 Reasons Why Crofton Business Owners must Invest In SEO
            </h2>
            <p className="center">
              Crofton business owners need SEO to compete online. Partner with
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
          <div className="container">
            <div className="grid">
              <img
                src="/images/home-service-business-crofton-md.webp"
                className="page-img"
                alt="Home service buisness."
                title="Home service businesses we work with in Crofton."
              />
              <div>
                <h2>Home Service Businesses We Work With in Crofton, MD.</h2>
                <p>
                  We work with home service businesses in Crofton that provide
                  services to homeowners and businesses. We focus on helping you
                  increase your online presence, leads, and sales.
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
          <div className="medium-container">
            <h2 className="title">
              How Does Search Engine Optimization Work, and How Can it Help
              Crofton Business Owners?
            </h2>
          </div>
          <div className="medium-container">
            <p>
              Search engine optimization (SEO) is the process of increaseing
              your website visibility when people search for your services.
            </p>
            <p>
              Local SEO is search engine optimization for your business in your
              area, which will be Crofton.
            </p>
            <p>
              Local SEO makes it so that when someone in Crofton or in nearby
              places like Annapolis, Pasadena, Columbia, or Bowie, MD search for
              services like yours, your website will show up and people will see
              your business.
            </p>
            <p>
              Local SEO is the process of optimizing your website so that
              customers looking for your business will be able to find you on
              Google. The goal is to make the website more visible on search
              engine results pages (SERPs) when people enter keywords related to
              businesses and services in their area.
            </p>
            <p>
              For example, if someone living in Crofton or Odenton is searching
              for an asphalt paving company, Google will return a list of
              asphalt paving companies that it feels are the best results.
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
              With Other SEO Companies in Crofton, Why Work With Us?
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
                <h3>#3. We Don't Work With Your Competitors in Crofton</h3>
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
          <div className="container">
            <h2 className="title">Frequently Asked Questions</h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and how does it work?</h3>
                  <p>
                    SEO is short form for “Search engine optimization”. It is a
                    way to make a website show up higher on a search engine,
                    like Google, so more people can find it. It involves using
                    special techniques to make the website easier for the search
                    engine to understand and show it to people who are looking
                    for information on a certain topic. This can help more
                    people visit the website and learn about what it offers.
                  </p>
                </div>
                <div className="question">
                  <h3>Is SEO worth it for small business?</h3>
                  <p>Yes, SEO can be very worth it for small businesses.</p>
                  <p>
                    In fact, it can be one of the most effective marketing
                    strategies for small businesses to increase their visibility
                    and attract new customers. By optimizing their website and
                    online presence for search engines, small businesses can
                    improve their rankings in search results and attract more
                    organic traffic. This can result in increased brand
                    awareness, website traffic, and potential sales or leads.
                    While SEO can take time and effort to see results, it can
                    provide long-term benefits and can be a cost-effective way
                    for small businesses to compete with larger companies in
                    their industry.
                  </p>
                  <h3>How much does SEO cost in Crofton?</h3>
                  <p>
                    The cost for SEO ranges from $1000 to $5,000. The cost will
                    vary depending on the competitiveness of your industry and
                    the keywords you are targeting.
                  </p>
                </div>
                <div className="question">
                  <h3>How long does it take for SEO to work?</h3>
                  <p>
                    The time it takes for SEO to work can vary depending on
                    several factors, such as the competitiveness of the keywords
                    targeted, the current state of the website, the quality of
                    the content, and the amount of resources devoted to SEO.
                  </p>
                  <p>
                    Typically, it can take three to six months to start seeing
                    measurable results from SEO efforts, but it's important to
                    remember that SEO is a long-term strategy that requires
                    ongoing efforts to maintain and improve rankings. By
                    consistently implementing SEO best practices, creating
                    high-quality content, and building quality links, a website
                    can gradually improve its rankings and visibility in search
                    engines over time, resulting in increased traffic and
                    potential conversions.
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
                  <h3>What is the Difference between SEO and Local SEO?</h3>
                  <p>
                    SEO is like trying to be the best in a race, but the race is
                    all over the world. Local SEO is like trying to be the best
                    in a race, but the race is only in your town. Local SEO
                    helps people in your town find your website when they're
                    looking for things like "pizza places near me" or "hair
                    salons in my area." This is important for businesses like
                    stores, restaurants, and services that only operate in one
                    area. Local SEO helps them be more visible to people who are
                    looking for things near them, and it's a way to make sure
                    they don't get lost in the big world race.
                  </p>
                </div>
                <div className="question">
                  <h3>How long would it take to rank my website?</h3>
                  <p>
                    Ranking a website in search engines like Google is like
                    playing a game. It takes time and practice to get better and
                    win. Just like in a game, you have to work hard to make your
                    website better and easier to find by people who are looking
                    for it. This can take a few months or longer depending on
                    how well you play the game and how many other players are
                    trying to win too. The most important thing is to keep
                    trying and making your website the best it can be, so that
                    more people can find it and use it.
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
                  <p>
                    Getting to the top of Google's search rankings is like
                    trying to win a race. You have to be really good and fast to
                    beat all the other people in the race. Just like in a race,
                    there is no way to know for sure who will win, but you can
                    practice and do things that will make you faster and better.
                    That's what people who work on SEO do. They try to make your
                    website better and faster so it can be one of the best in
                    the race. But just like in a race, there is no guarantee
                    that your website will win, but if you keep practicing and
                    making it better, you will have a better chance of doing
                    well.
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
            src="/images/seo-services-crofton-maryland.webp"
            alt="Man calling to get SEO services in Crofton."
            title="Man calling to get SEO services in Crofton."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Boost Your Sales and Revenue?</h2>
            <p>
              Contact {SEOAgency} and we'll show you how our SEO services in
              Crofton can help your company grow without paying for leads or
              online ads.
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
