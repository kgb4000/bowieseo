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

const calendly = 'https://calendly.com/bowieseo/30min'

export default function keywordResearch() {
  const SEO = {
    title: 'Keyword Research for Small Business | Bowie SEO',
    description: `The foundation of a successful SEO campaiagn in Maryland is keyword research. Have you done keyword research for your business? Get started today!`,
    canonical: 'https://bowieseo.com/keyword-research',
    openGraph: {
      title: 'Keyword Research for Small Business | Bowie SEO',
      description: `The foundation of a successful SEO campaiagn in Maryland is keyword research. Have you done keyword research for your business? Get started today!`,
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Technical SEO is Crucial for SEO: Skip this Element ans You're Done"
          subText="Find the Search Terms and Queries Customers Use to Find Your Services and Show Up in the SERPS."
          backgroundImage="/images/keyword-research-cover.webp"
          backgroundHeight="70vh"
          backgroundPosition="center left"
          buttonText="Get Your Free SEO Audit &#8594;"
          buttonLink="/free-seo-audit"
        />
        <section>
          <div className="medium-container">
            <div className="grid">
              <img
                src="/images/local-seo-columbia-md.jpg"
                className="page-img"
                width="1000px"
                height="600px"
                alt="A business owner considering local SEO services."
                title="A business owner considering local SEO services."
                loading="lazy"
              />
              <div>
                <h2>What is Technical SEO?</h2>
                <p>
                  Technical SEO lays the groundwork to ensure that your website
                  can be crawled and indexed by search engines without any
                  hiccups.
                </p>
                <p>
                  It's the behind-the-scenes elements that makes sure Google's
                  bots can access your web pages and website, and understand
                  what your pages are about.
                </p>
                <p>Key Components Include:</p>
                <p>
                  <strong>Crawlability:</strong> Search engine must be able to
                  crawl and index your website. If they can't, you will not
                  appear in any search results.
                </p>
                <p>
                  <strong>Site Speed:</strong> Slow load times are a conversion
                  killer. The faster your site, the happier the user—and Google.
                </p>
                <p>
                  <strong>HTTPS:</strong> Secure sites rank better and give your
                  users peace of mind. That 's' in 'https' matters more than you
                  think.
                </p>
                <p>
                  <strong>Internal Linking:</strong> These are the road signs
                  that guide Google through your website, affecting how search
                  engines read, understand, and rank your content.
                </p>
                <p>
                  <strong>404 Errors and Redirects:</strong> Dead-end pages and
                  poor redirects can hurt your SEO. The goal is to keep the user
                  journey as smooth as possible.
                </p>
                <p>
                  <strong>Website Structure:</strong> Dead-end pages and poor
                  redirects can hurt your SEO. The goal is to keep the user
                  journey as smooth as possible.
                </p>
              </div>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Get Your Free SEO Consultation!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2 className="title">
              What Happens to your website you don't perform Technical SEO?
            </h2>
            <p className="subtext">
              A business not doing keyword research is like a ship sailing
              without a compass—you might move, but you're less likely to get
              where you want to go. Here are some potential setbacks that could
              hit your business if your skip this crucial step.
            </p>
            <Deliverables>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Slow Website: The Snail's Pace Nightmare</h3>
                  <p>
                    A sluggish website isn't just frustrating for your visitors;
                    it's a deal-breaker. Every extra second your site takes to
                    load, you're hemorrhaging conversions and skyrocketing your
                    bounce rate. Translation? Bye-bye, sales and hello, lost
                    revenue.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>"Page Not Found" Fiascos</h3>
                  <p>
                    Neglected 404 errors can make your site a virtual labyrinth
                    with dead-ends, leaving visitors frustrated and search
                    engines clueless about ranking your pages. Result? Lower
                    rankings and a lousy user experience.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Trust Issues</h3>
                  <p>
                    If your website isn't secure (no HTTPS), then browsers like
                    Chrome will flag it as 'Not Secure'. Imagine the red flags
                    that'll raise in your visitor's mind. Reduced trust means
                    fewer sales. Period.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Lower Rankings in Google</h3>
                  <p>
                    Neglecting mobile optimization? Well, Google's not going to
                    give you the time of day when it comes to ranking you in its
                    mobile-first index. You'll be voluntarily relinquishing an
                    enormous chunk of mobile users that could be yours.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>A Tangled Web</h3>
                  <p>
                    Poorly managed internal linking and site structure is like
                    inviting Google's crawlers into a maze without a map. The
                    harder it is for search engines to crawl your site, the
                    lower you’ll rank.
                  </p>
                </div>
              </Deliverable>
              <Deliverable>
                <img
                  src="/images/icons/x-button.png"
                  className="check"
                  alt="X-button"
                  loading="lazy"
                />
                <div>
                  <h3>Mixed Messages</h3>
                  <p>
                    Without structured data, you're missing out on the chance to
                    control how your brand appears in search results. The
                    absence of this critical info will make your listing less
                    appealing, leading to lower click-through rates and,
                    subsequently, lower rankings.
                  </p>
                </div>
              </Deliverable>
            </Deliverables>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        {/* <section>
          <div className="small-container">
            <h2 className="title">
              What are the Benefits of Doing Keyword Research for Your Business?
            </h2>
            <p className="subtext">
              Why keyword research is like the Swiss Army knife of digital
              marketing.
            </p>
            <div>
              <Deliverable>
                <img
                  src="/images/icons/check-mark.png"
                  className="check"
                  alt="One-on-one expert support."
                  loading="lazy"
                />
                <div>
                  <h3>It’s Like Reading Your Customer’s Mind</h3>
                  <p>
                    When you know the keywords your audience is using, you're
                    essentially getting a peek into their thoughts. What are
                    they curious about? What problems are they trying to solve?
                    This is invaluable stuff, and you can use it to tailor your
                    content, products, or services to exactly what they need.
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
                  <h3>Skyrocket Your Traffic</h3>
                  <p>
                    When you align your website and content with the right
                    keywords, you're essentially putting yourself in the line of
                    sight of potential customers. The result? More organic
                    traffic, which is not just high in quantity but also more
                    relevant. This isn't just any traffic; this is traffic
                    that's already interested in what you have to offer.
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
                  <h3>Higher Conversion Rates</h3>
                  <p>
                    Keyword research doesn't just help with traffic; it helps
                    with the right kind of traffic. When you optimize for
                    specific, targeted keywords, the visitors you attract are
                    far more likely to convert. That's like having a store in
                    the mall and knowing that most people walking in are already
                    interested in buying what you’re selling.
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
                  <h3>Stay Ahead of the Curve (and Your Competition)</h3>
                  <p>
                    Keyword research tools often show the competition level for
                    each keyword. If you find those hidden gems—high-traffic,
                    low-competition keywords—you're setting yourself up to edge
                    out competitors.
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
                  <h3>Optimize Your Marketing Budget</h3>
                  <p>
                    Who doesn’t love saving money, right? With keyword research,
                    you can identify which keywords are most likely to give you
                    the best bang for your buck. This is especially crucial for
                    paid advertising campaigns like Google Ads. Why waste money
                    on keywords that won’t convert when you can focus on those
                    that will?
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
                  <h3>Content That Hits the Bullseye</h3>
                  <p>
                    Ever stared at a blank screen wondering what to blog about?
                    Keyword research to the rescue! When you know what your
                    audience is searching for, creating{' '}
                    <Link href="content-for-seo">SEO content</Link> becomes a
                    whole lot easier—and more effective. You're not just
                    creating content; you're creating content that people
                    actually want to read.
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
                  <h3>Long-Term Success</h3>
                  <p>
                    SEO isn't a one-night stand; it’s a long-term relationship.
                    When you invest in keyword research, you're laying down a
                    strong foundation for ongoing SEO success. As you continue
                    to monitor how these keywords perform, you can adapt and
                    evolve, ensuring that you stay relevant and continue to
                    drive traffic.
                  </p>
                </div>
              </Deliverable>
            </div>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule Your Free Consultation Today!</Button>
              </a>
            </div>
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <div className="container"></div>
        <section>
          <div className="container">
            <h2 className="title">Why Work With Us?</h2>
            <p className="subtext">
              Partner with <Link href="/">Bowie SEO</Link> and save time and
              money, and acheive your sales and revenue goals.. We work only for
              you, never your competition in your local area.
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
                    You Save Time and Money With Advanced Keyword Research
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
            <p className="subtext">
              Or get your{' '}
              <Link href="/free-seo-audit">Free SEO Audit &#8594;</Link>
            </p>
          </div>
        </section>
        <section>
          <div className="small-container">
            <h2 className="title">
              Frequently Asked Questions about Keyword Research
            </h2>
            <div>
              <div className="question">
                <h3>How many keywords should I use for SEO?</h3>
                <p>
                  You should focus on{' '}
                  <strong>one primary keyword for each page</strong>.
                </p>
                <p>
                  The primary keyword is your star player, so it should appear
                  in your title meta description, H1 tag, and sprinkled
                  throughout your content.
                </p>
                <p>
                  Use variants of your primary keyword to help provide context.
                  Use variants naturally in your subheadings and body text.
                </p>
                <p>
                  Remember, it's not about stuffing your content with keywords
                  but seamlessly integrating them to enhance readability and
                  relevance.
                </p>
                <p>
                  Focus on quality and relevance over sheer quantity. Ready to
                  rock those rankings?
                </p>
              </div>
              <div className="question">
                <h3>How long does keyword research take?</h3>
                <p>
                  The time it takes for keyword research can vary widely based
                  on your project's scope, the tools you're using, and how deep
                  you want to dive.
                </p>
                <p>
                  If you're running a small blog or website and you're just
                  skimming the surface, you might knock it out in a few hours.
                </p>
                <p>
                  But for a business, it could take several days or even weeks,
                  especially if you're doing competitor analysis, focusing on
                  multiple sectors, or diving into consumer behavior and trends.
                </p>
                <p>
                  <strong>Keyword research isn't a one-and-done deal</strong>.
                </p>
                <p>
                  It's more like a garden; you've got to keep tending it to see
                  it flourish.
                </p>
                <p>
                  Trends change, consumer behaviors shift, and algorithms
                  update, so it's good to revisit your keyword strategy every
                  few months.
                </p>
              </div>
              <div className="question">
                <h3>
                  What are the three main factors that go into choosing a
                  keyword?
                </h3>
                <p>
                  <h4>#1. Search Volume</h4>
                </p>
                <p>
                  Think of search volume as the audience in a concert hall. The
                  more people there are, the bigger the applause (or boos, but
                  let's stay optimistic!). Search volume tells you how many
                  times a specific keyword is being searched for within a given
                  time frame, usually per month.
                </p>
                <p>
                  <strong>Why It Matters:</strong>
                </p>
                <p>
                  A keyword with a high search volume is like a crowded concert
                  hall—it means there's a lot of interest. But beware, a higher
                  audience often means more competition, so you'll need to weigh
                  that factor in as well.
                </p>
                <p>
                  <strong>How to Check:</strong>
                </p>
                <p>
                  Tools like Google Keyword Planner, SEMrush, and Ahrefs can
                  give you a ballpark figure for monthly search volume. These
                  tools often also show trends, so you can see if a keyword is
                  gaining or losing popularity over time.
                </p>
                <p>
                  <h4>#2. Keyword Difficulty or Competition</h4>
                </p>
                <p>
                  You have to size up the competition. Keyword difficulty is a
                  metric that indicates how tough it will be to rank on the
                  first page of search results for that keyword.
                </p>
                <p>
                  <strong>Why It Matters:</strong>
                </p>
                <p>
                  A keyword with high difficulty is like the VIP section at a
                  club—tough to get into without some serious clout. However,
                  low or medium-difficulty keywords can be more accessible and
                  still offer good traffic potential.
                </p>
                <p>
                  <strong>How to Check:</strong>
                </p>
                <p>
                  SEO tools like Ahrefs and SEMrush usually have a "Keyword
                  Difficulty" or "Competition" metric. The lower the score, the
                  easier it should be to rank for, although there are no
                  guarantees in the SEO world.
                </p>
                <p>
                  <h4>#3. Relevance and Intent</h4>
                </p>
                <p>
                  Is this keyword genuinely applicable to your business, and
                  does it align with what your target audience is looking for?
                </p>
                <p>
                  <strong>Why It Matters:</strong>
                </p>
                <p>
                  Imagine showing up at a costume party dressed for a business
                  meeting. Sure, you might grab attention, but not the right
                  kind. Relevance ensures you're attracting visitors genuinely
                  interested in what you have to offer.
                </p>
                <p>
                  <strong>How to Check:</strong>
                </p>
                <p>
                  This one's less about tools and more about common sense. Ask
                  yourself: Does this keyword relate to my products or services?
                  Does it align with my brand? If the keyword meets the "four
                  Ws" (who, what, when, where) of your business, then you're
                  golden.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <div className="call-to-action-grid">
          <img
            src="/images/seo-services-columbia-md.webp"
            alt="Business man an calling our local SEO company."
            title="Business man an calling our local SEO company."
            width="1000px"
            height="65px"
            loading="lazy"
          />
          <div className="container">
            <h2>Ready to Get Technical SEO to Your Website?</h2>
            <p>Call us and we'll your website is optimized for the web.</p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book Your Free SEO Call!</Button>
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}
