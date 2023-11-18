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

export default function AnnaopisMDSEOCompany() {
  const SEO = {
    title: 'SEO Company in Annapolis MD | Get More Eyes on Your Business',
    description:
      'Looking to dominate your market? Our SEO services in Annapolis offers customized strategies to propel your business to the next level. Call us today!',
    canonical: 'https://bowieseo.com/search-engine-optimization-annapolis-md',
    openGraph: {
      title: 'SEO Company in Annapolis MD | Get More Eyes on Your Business',
      description:
        'Looking to dominate your market? Our SEO services in Annapolis offers customized strategies to propel your business to the next level. Call us today!',
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Amplify Your Traffic and Earnings: Get Premium SEO Services in Annapolis, MD"
          subText="Start Unlocking Exceptional Growth in Website Traffic, Leads Generation, Sales and Revenue Today"
          backgroundImage="/images/annapolis-md-seo-company-cover.webp"
          backgroundHeight="70vh"
          backgroundPosition="top"
          buttonText="Get Your Free SEO Audit &#8594;"
          buttonLink="/free-seo-audit"
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <div>
                <h2>
                  Don't Let Digital Marketing Drown Your Business—Get Results
                  Today With Annapolis SEO!
                </h2>
                <p>
                  Running a profitable business in Annapolis is tough
                  enough—doing it without serach engine optimization?
                </p>
                <p>
                  <strong>Nearly impossible.</strong>
                </p>
                <p>
                  Let's face it: In today's online-centric world, neglecting
                  digital marketing is a fast track to irrelevance.
                </p>
                <p>
                  You've dabbled in Facebook ads, Instagram campaigns, and
                  Google AdWords, because you know the brutal truth—without a
                  digital presence, you're invisible.
                </p>
                <p>
                  You've even taken a swing at HomeAdvisor, Angie’s List, and
                  Thumbtack.
                </p>
                <p>And the result?</p>
                <p>Astronomical ad expenses and a relentless price war.</p>
                <p>
                  While your competitors steadily climb Google's rankings and
                  flood their businesses with fresh customers, you're left
                  pondering gut-wrenching choices like downsizing your team
                  or—even worse—shutting down.
                </p>
                <p>Don't Become a Cautionary Tale.</p>
                <p>
                  Imagine effortlessly climbing Google’s ranks, magnetically
                  drawing high-value leads, and scaling your Annapolis-based
                  business without the night sweats.
                </p>
                <p>That's not a pipe dream—that's what we deliver.</p>
                <p>
                  We're more than just an{' '}
                  <Link href="/maryland-seo-company">SEO agency</Link>; we're
                  your long-term strategic ally for digital domination.
                </p>
                <p>
                  <strong>
                    Ready to Own Your Space on Google's Coveted First Page?
                  </strong>
                </p>
              </div>
              <img
                src="/images/search-engine-optimization-annapolis-md.webp"
                className="page-img-left"
                width="1000px"
                height="600px"
                alt="A business owner considering  getting SEO services in Annapolis."
                title="A business owner considering getting SEO services in Annapolis."
                loading="lazy"
              />
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free SEO Call Today!</Button>
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
                  Unlock a Goldmine of Zero-Cost, High-Quality Leads: Bid
                  Farewell to Budget-Draining Ads
                </h2>
                <p>
                  Let’s face it—relying solely on Facebook and Google ads these
                  days is like pouring water into a sieve.
                </p>
                <p>
                  The cost-per-click is skyrocketing, and before you know it,
                  your ad budget could evaporate, leaving you with negligible
                  ROI.
                </p>
                <p>
                  What if you could unlock a reservoir of premium leads without
                  even cracking open your ad budget?
                </p>
                <p>
                  Enter the game-changer:{' '}
                  <Link href="search-engine-optimization">
                    Search Engine Optimization
                  </Link>{' '}
                  (SEO).
                </p>
                <p>
                  SEO isn't merely a cost-saving alternative to ads; it's an
                  ROI-boosting powerhouse.
                </p>
                <p>
                  It fine-tunes your website to magnetically attract organic,
                  high-intent web traffic—users who are in hot pursuit of the
                  very services you offer.
                </p>
                <p>Experience the SEO Advantage—Here's Your Winning Hand:</p>
                <ul className="check-mark">
                  <li>
                    🎯<strong>Zero-Budget, Laser-Focused Traffic:</strong> Reap
                    the rewards of a steady influx of organic visitors—no more
                    pesky ad invoices!
                  </li>
                  <li>
                    🚀<strong>Skyrocketing Leads, Sales, and Revenue:</strong>
                    Turn that organic flow into bona fide leads, closing more
                    deals than ever.
                  </li>
                  <li>
                    ☎️ <strong>Unstoppable Call Volume:</strong> Ascend the
                    search rankings and prepare for a deluge of inbound calls.
                  </li>
                  <li>
                    🌟 <strong>Become the Market Maven:</strong> Reign supreme
                    in search results and solidify your spot as the industry
                    authority.
                  </li>
                  <li>
                    🗺 <strong>Local Supremacy:</strong> Commandeer Google’s
                    first-page real estate and become the first choice for
                    Potomac and Maryland locals.
                  </li>
                  <li>
                    🥇 <strong>Outmaneuver the Competition:</strong> Leave
                    competitors in the rear-view mirror as you ascend the Google
                    rankings.
                  </li>
                  <li>
                    🔍 <strong>Unmissable Online Presence:</strong> Build a
                    digital footprint so large, it’s impossible for potential
                    clients to ignore you.
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
              Boost Your Annapolis Business: Maximize Leads and Customers with
              Expert SEO Strategies
            </h2>
            <p className="subtext">
              We specialize in Search Engine Optimization (SEO) services to
              businesses in Annapolis,{' '}
              <Link href="/baltimore-seo">Baltimore</Link>, and other cities in
              Anne Arundel County, MD.
            </p>
            <Service>
              <div className="service-card">
                <img
                  src="/images/annapolis-md-search-engine-optimization.webp"
                  alt="Annaoplis SEO Services"
                  title="Annaoplis SEO Services"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Search Engine Optimization</h3>
                  <p>
                    SEO is no longer optional; it's a must. Through our expert
                    SEO services, we guarantee that your Annapolis-based
                    business won't just surface on Google; it will outshine the
                    competition with distinction.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/annapolis-md-gmb-management.webp"
                  alt="Annaoplis Google My Business Management"
                  title="Annaoplis Google My Business Management"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>GMB Management</h3>
                  <p>
                    A finely-tuned Google My Business (GMB) profile is the
                    cornerstone of local SEO success. Go beyond mere ranking –
                    elevate your presence to the pinnacle of local searches in
                    Annapolis and Anne Arundel County. Let our expertise in
                    managing your GMB profile launch your business to new levels
                    of visibility and engagement.
                  </p>
                </div>
              </div>
              <div className="service-card">
                <img
                  src="/images/seo-audit-annapolis.webp"
                  alt="Free Mini SEO Audit"
                  title="Free Mini SEO Audit"
                  width="1000px"
                  height="665px"
                  loading="lazy"
                />
                <div className="service">
                  <h3>Annapolis SEO Audit</h3>
                  <p>
                    Curious about why your leads are dwindling or your Google
                    rankings aren't soaring? Uncover what's impeding your
                    progress with our free Mini SEO Audit. Seize this
                    opportunity to learn how to amplify your SEO effectiveness,
                    attracting more leads and customers starting now!
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
                src="/images/home-service-business-waldorf-md.webp"
                className="page-img"
                alt="Home service buisness."
                title="Home service businesses we work with in Potomac."
              />
              <div>
                <h2>SEO Services in Annapolis, Maryland</h2>
                <p>
                  We work with home service businesses in Annapolis that provide
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
              What You Get With Local SEO in Annapolis, MD
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
                  <h3>Targeted Visibility in Local Home Services Market</h3>
                  <p>
                    For businesses in Annapolis, local SEO ensures high
                    visibility in searches specific to home repair, renovation,
                    or maintenance. This is crucial in a city with a mix of
                    historic homes and modern residences, as homeowners often
                    search for local experts who understand the unique needs of
                    Annapolis properties.
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
                  <h3>Building Trust with Annapolis Residents</h3>
                  <p>
                    Local SEO strategies, such as optimizing for
                    Annapolis-specific keywords and phrases, can help home
                    service businesses establish a strong local presence. This
                    is vital in building trust with residents who prefer hiring
                    professionals with a deep understanding of local building
                    styles and regulations.
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
                  <h3>
                    Optimizing for Local Searches Leads to More Service Calls
                  </h3>
                  <p>
                    As many homeowners turn to online searches to find home
                    service providers in their area, appearing in these local
                    searches can significantly increase service calls and
                    inquiries. This is particularly effective in Annapolis,
                    where residents might be looking for services ranging from
                    historical home preservation to modern upgrades.
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
                  <h3>Leveraging Local Reviews and Ratings</h3>
                  <p>
                    Positive reviews from Annapolis residents can significantly
                    boost the reputation of home service businesses. Given the
                    close-knit nature of the community, a strong portfolio of
                    positive local reviews can lead to more referrals and repeat
                    customers.
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
                  <h3>Efficient Marketing in a Niche Market</h3>
                  <p>
                    Annapolis’s unique blend of old and new homes creates a
                    niche market for home services. Local SEO allows businesses
                    to target their marketing efforts efficiently, reaching
                    homeowners specifically looking for services that cater to
                    the architectural and historical context of their homes.
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
                  <h3>Seasonal and Event-Driven Opportunities</h3>
                  <p>
                    Annapolis experiences various seasonal shifts that impact
                    home maintenance needs. Local SEO enables home service
                    businesses to tailor their online presence for seasonal
                    services, such as preparing homes for winter or renovations
                    during the spring, aligning with the specific seasonal needs
                    of Annapolis homeowners.
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
            src="/images/annapolis-seo-company.webp"
            className="page-img-left"
            width="1440px"
            height="600px"
            alt="Work with our Annapolis SEO company to increase your online visibility."
            title="Work with our Annapolis SEO company to increase your online visibility."
          />
        </div>
        <section>
          <div className="container">
            <h2 className="title">
              Choosing Us as Your Annapolis SEO Ally: Real Results, Not Just
              Promises?
            </h2>
            <p className="subtext">
              Invest in your business's future by partnering with dedicated SEO
              specialists exclusively serving Annapolis, MD. With{' '}
              <Link href="/">Bowie SEO</Link>, you don't just save time and
              money—you accelerate toward your sales and revenue goals with the
              assurance that we're committed only to your success, never your
              competitors'.
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
                    Concentrate on Excelling in Your Business; Leave the Digital
                    Marketing to Us
                  </h3>
                  <p>
                    Trust us with the intricacies of keyword research, content
                    creation, and competitive analysis. Our adept SEO and
                    digital marketing solutions liberate you to focus
                    exclusively on expanding your Annapolis, MD enterprise.
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
                    Enhance Your ROI: Streamline Your Efforts and Budget with
                    Our Results-Driven SEO
                  </h3>
                  <p>
                    Put your money into effective search marketing methods that
                    boost your website’s traffic and turn visitors into
                    potential customers for your Annapolis, MD business.
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
                    Your Personal SEO Squad: Driving Business Expansion and
                    Capturing New Clientele
                  </h3>
                  <p>
                    Experience the advantage of an in-house team of SEO experts
                    dedicated entirely to advancing your business in Annapolis,
                    MD. Discover new possibilities and introduce your brand to
                    eager, interested audiences.
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
              Questions About SEO for Annapolis Businesses
            </h2>
            <ReasonSec>
              <div>
                <div className="question">
                  <h3>What is SEO and why is it important?</h3>
                  <p>
                    SEO is short form for “
                    <Link href="/search-engine-optimization" passHref>
                      Search engine optimization
                    </Link>
                    ”, is the practice of enhancing a website to improve its
                    visibility when people search for products or services
                    related to your business in search engines like Google. It's
                    vital because a higher ranking increases your website's
                    visibility, leading to more organic traffic - people
                    naturally finding your site. This increased visibility is
                    crucial for attracting potential customers without directly
                    paying for ads.
                  </p>
                </div>
                <div className="question">
                  <h3>How long does it take to see results from SEO?</h3>
                  <p>
                    The time frame for seeing tangible results from SEO efforts
                    varies. Typically, you might start noticing improvements in
                    3-6 months, but significant changes can take 6-12 months or
                    more. SEO is a long-term strategy. Factors influencing this
                    timeline include the website's current state, competition in
                    your niche, the quality and frequency of content updates,
                    and ongoing optimization efforts.
                  </p>
                  <h3>How much is SEO services in Annapolis per month?</h3>
                  <p>
                    The monthly cost for SEO ranges from $1000 to $5,000+. The
                    cost can vary depending on the competitiveness of your
                    industry and the keywords you are targeting. Generally, SEO
                    is more affordable than PPC advertising and other forms of
                    paid marketing.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    Can I do SEO myself or do I need to hire a professional?
                  </h3>
                  <p>
                    While basic SEO can be handled individually, especially if
                    you have a grasp of digital marketing principles, complex
                    aspects like technical SEO, link building, and content
                    strategy often benefit from a professional's expertise. SEO
                    professionals stay updated with the latest trends and
                    algorithm changes, which is crucial for maintaining and
                    improving your website's ranking.
                  </p>
                </div>
                <div className="question">
                  <h3>How often should I update my website for SEO?</h3>
                  <p>
                    Regular updates are essential. Ideally, your website should
                    be updated with new, high-quality content weekly. Frequent
                    updates signal to search engines that your site is active
                    and relevant, boosting its ranking potential. Also,
                    regularly review and update older content to keep it
                    current.
                  </p>
                </div>
              </div>
              <div>
                <div className="question">
                  <h3>Is local SEO different from regular SEO?</h3>
                  <p>
                    Local SEO is a subset of SEO focused on optimizing a
                    business for local search results. This includes ensuring
                    your business appears in local search listings, optimizing
                    for location-specific keywords, and managing local business
                    listings and citations (like Google My Business). It's
                    crucial for businesses serving specific geographic areas.
                  </p>
                </div>
                <div className="question">
                  <h3>What are backlinks and why are they important?</h3>
                  <p>
                    Backlinks are links from external websites that point to
                    your website. They are crucial for SEO because they act as a
                    vote of confidence from one site to another, indicating the
                    linked content's quality and relevance. High-quality
                    backlinks can significantly improve your site's authority
                    and rankings.
                  </p>
                </div>
                <div className="question">
                  <h3>
                    What's the difference between on-page and off-page SEO?
                  </h3>
                  <p>
                    On-page SEO involves optimizing elements within your
                    website, like content, HTML source code, and images, to
                    improve rankings. Off-page SEO refers to actions taken
                    outside of your website, like building backlinks or social
                    media marketing, to boost your site's authority and ranking.
                  </p>
                </div>
                <div className="question">
                  <h3>Can You Guarantee Me #1 Rankings on Google?</h3>
                  <p>No.</p>
                  <p>
                    Unfortunately, a guaranteed #1 ranking on Google is not
                    something that can be promised. The world of SEO is dynamic
                    and constantly evolving, with search engine algorithms
                    updating frequently. Due to these continuous changes, it's
                    impossible for anyone to guarantee top rankings. However, by
                    working us, you can significantly imcrease your website's
                    visibility and rankings in search engine results pages
                    (SERPs).
                  </p>
                </div>
                <div className="question">
                  <h3>How does mobile optimization impact SEO?</h3>
                  <p>
                    With the increasing use of smartphones for web browsing,
                    mobile optimization has become crucial for SEO. A
                    mobile-friendly website provides a good user experience,
                    which is a significant ranking factor. This includes
                    responsive design, fast loading times, and easy navigation
                    on mobile devices. Google predominantly uses mobile-first
                    indexing, meaning it primarily uses the mobile version of
                    content for indexing and ranking.
                  </p>
                </div>
              </div>
            </ReasonSec>
          </div>
        </section>
        <div className="call-to-action-grid">
          <img
            src="/images/man-calling-annapolis-seo-company.jpg"
            alt="Man calling to get SEO services in Annapolis."
            title="Man calling to get SEO services in Annapolis."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>
              Ready to Get More Annapolis Customers Calling Your Business?
            </h2>
            <p>
              Contact {SEOAgency} and we'll show you how search engine
              optimization can help your business get more leads without paying
              for leads or online ads.
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
