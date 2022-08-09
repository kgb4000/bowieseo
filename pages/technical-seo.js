/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import { Card, Container, Wrapper, Contact } from '../components/CardSection'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const TechnicalSEOServices = () => {
  const SEO = {
    title: 'Technical SEO for Increase SEO Performance | Bowie SEO',
    description:
      "We're an SEO company in Mayland dedicated to helping small businesses get more leads and customers on Google with SEO. Call for a free consultation!",
    type: 'website',
    canonical: 'https://bowieseo.com/technical-seo-services',
    openGraph: {
      title: 'Technical SEO for Increase SEO Performance | Bowie SEO',
      description:
        "We're an SEO company in Mayland dedicated to helping small businesses get more leads and customers on Google with SEO. Call for a free consultation!",
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <PageHero
          heading="Technical SEO"
          subText="Increase website traffic and revenue by improving crawlability and indexation with expert technical search engine optimization."
          heroBtnLink="tel:+2402660588"
          buttonText="Call (240) 266-0588"
          heroBtnLink1="/free-mini-seo-audit"
          buttonText1="Free Mini SEO Audit"
        />
        <section>
          <h2 className="title">Technical SEO</h2>
          <div className="container grid">
            <img
              src="images/seo-guys.jpg"
              alt="Maryland SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info short"
            />
            <img
              src="images/maryland-seo-company.jpg"
              alt="Maryland SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info long"
            />
            <div className="text-info">
              <p>
                Technical SEO is a process that involves optimizing a website so
                that search engines can crawl, index, and render the website.
              </p>
              <h3>How Search Engines Work</h3>
              <p>
                Search engines crawling the internet looking at the code and
                content for each URL they find. They then organize and store the
                information they found in an index, which is a huge database of
                all the content they found. When someone uses a search engine to
                look for information, the search engine will look through it’s
                index to find the best relevant information, and then orders
                this information in the search engine results pages.
              </p>
            </div>
          </div>
          <div className="btn">
            <Link href="/contact" passHref>
              <Button>Get in touch with us!</Button>
            </Link>
          </div>
        </section>
        {/* <Suspense fallback={`loading`}>
          <AuditSection />
        </Suspense> */}
        <section className="why-choose">
          <h2 className="title">
            Why Businesses Should Invest in Technical SEO Services?
          </h2>
          <div className="container grid">
            <img
              src="images/maryland.jpg"
              alt="Downtown Baltimore Maryland"
              width="1000"
              height="450"
              className="img-info-1"
            />
            <img
              src="images/downtown-maryland-tall-image.jpg"
              alt="Maryland SEO Company - Bowie SEO"
              width="1000"
              height="450"
              className="img-info-1 long"
            />
            <div className="text-info-1">
              <p>
                <b>
                  Most websites are unaware that they have technical SEO issues.
                </b>
              </p>
              <p>
                When you get a website from a web design agency or developer,
                your site is most likely not optimized for search engines and
                can come with many technical issues.
              </p>
              <p>
                These issues can stop your site from getting crawled, indexed,
                and ranked by major search engines, and will stop leads and
                potential customers from finding your website.
              </p>
              <p>
                A technical SEO audit will find the problems affecting your
                website’s performance, ranking, and conversions. Hiring a
                technical SEO expert with experience in technical search engine
                optimization is something you cannot afford not to do.
              </p>
            </div>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>
        <section>
          <div className="services-container">
            <h2>Technical SEO Services</h2>
            <p className="sub-text">
              Our services are designed to help search engines crawl, index, and
              render your website and increase SEO performance.
            </p>
            <div className="services">
              <Container>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/local.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Site Audit</h3>
                    <p>
                      Identify and find technical issues affecting your website
                      and stopping it from performing well in the search
                      engines.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/audit.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Website Structure</h3>
                    <p>
                      Build a site structure that is easy for search engines to
                      crawl and for users to navigate.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info one">
                    <img
                      src="/images/keyword-research.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Internal Linking</h3>
                    <p>
                      Spread link juice and ranking power around your site with
                      internal linking and help boost your site authority.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info one">
                    <img
                      src="/images/keyword-research.svg"
                      alt="Keyword ranking image"
                      loading="lazy"
                    />
                    <h3>Website Migrations</h3>
                    <p>
                      Spread link juice and ranking power around your site with
                      internal linking and help boost your site authority.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Structured Data</h3>
                    <p>
                      Win SERP features by adding structured data to your site.
                      Structured data helps search engines understand what your
                      content is about.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Website Speed</h3>
                    <p>
                      Slow websites affect your website’s SEO performance. Fix
                      slow websites and improve your user experience,
                      conversions, and rankings.
                    </p>
                  </div>
                </Card>
                <Card>
                  <div className="card-info">
                    <img
                      src="/images/competitive-analysis.svg"
                      alt="Man analyzing data"
                      loading="lazy"
                    />
                    <h3>Penalty Removal</h3>
                    <p>
                      Identify and remove any manual penalties affecting your
                      rankings and conversions.
                    </p>
                  </div>
                </Card>
                <Link href="/free-website-audit">
                  <Card>
                    <div className="card-info">
                      <img
                        src="/images/thinking.svg"
                        alt="Woman thiniking about getting a free mini SEO audit."
                        loading="lazy"
                      />
                      <h3>Technical SEO Consulting</h3>
                      <p>
                        Get actionable advice and recommendations from technical
                        SEO consultants with SEO knowledge and experience.
                      </p>
                    </div>
                  </Card>
                </Link>
              </Container>
            </div>
          </div>
        </section>
        <div className="btn">
          <Link href="/contact" passHref>
            <Button>Get in touch with us!</Button>
          </Link>
        </div>
        <section className="pain-section">
          <div className="services-container">
            <h2 className="title">Work With Our Technical SEO Consultants</h2>
            <p className="sub-text">
              It's easy to work with us.{' '}
              <Link href="/contact">
                <a>Contact us</a>
              </Link>{' '}
              if you need to increase your web presence or improve your web
              traffic and leads.
            </p>
            <Wrapper>
              <Contact>
                <h3>Contact us</h3>
                <img
                  src="/images/phone-call.svg"
                  className="icons"
                  loading="lazy"
                  alt="Call our Maryland SEO company today!"
                />
                <p>
                  Call us and let us know what you need and how we can help.
                </p>
              </Contact>
              <Contact>
                <h3>We Gather</h3>
                <img
                  src="/images/plan.svg"
                  className="icons"
                  loading="lazy"
                  alt="We create a plan first."
                />
                <p>
                  We gather all the information we can and come up with a plan
                  to fix the issues.
                </p>
              </Contact>
              <Contact>
                <h3>Execute</h3>
                <img
                  src="/images/work-together.svg"
                  className="icons"
                  loading="lazy"
                  alt="Work together with our Maryland SEO company to make your SEO campaign successful."
                />
                <p>
                  We execute and track changes made to improve your website to
                  achieve the results you want.
                </p>
              </Contact>
            </Wrapper>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Book a call today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section className="why-choose">
          <div className="medium-container">
            <h2>Why Hire Bowie SEO for Your Technical SEO Analysis?</h2>
            <div className="white">
              <p>
                Looking for a comprehensive and accurate technical SEO analysis,
                look no further than Bowie SEO. Our team of experienced
                professionals will closely examine every aspect of your website
                and provide you with a detailed report outlining potential
                issues and solutions to help you improve your search engine
                ranking. Contact us today to learn more!
              </p>
            </div>
          </div>
          <div className="btn">
            <a href="tel:+2402660588">
              <Button>Call (240) 266-0588</Button>
            </a>
          </div>
        </section>
        <section>
          <FAQPageJsonLd
            mainEntity={[
              {
                questionName: 'Why is Technical SEO important?',
                acceptedAnswerText:
                  "Technical SEO is important because it helps ensure that your website is accessible to search engines and that your web pages can be indexed and ranked properly. Additionally, technical SEO can help improve the user experience on your website, making it easier for visitors to find the information they need. You can help improve your website's overall visibility and traffic by improving your website's technical SEO.",
              },
              {
                questionName: 'How Do I Get my website indexed by Google?',
                acceptedAnswerText:
                  'You can submit a detailed sitemap to Google at Google Search Console to get your site indexed. A second way to get your site indexed is to create a sitemap and add pages you want indexed to your sitemap. Third way is to add internal links.',
              },
              {
                questionName:
                  'How Long Does it Take to Get My Site indexed on Google?',
                acceptedAnswerText:
                  'How long it will take Google to index your site can vary. It can take a couple of days, or it can take a couple of months. It also depends on if Google thinks your site is worthy of indexing.',
              },
              {
                questionName:
                  'What Technical issues can stop my website from performing in the search engines?',
                acceptedAnswerText:
                  "Several technical issues can stop your website from performing well in search engines. Some of the most common technical SEO issues include duplicate content, broken links, and incorrect redirects. You can also have problems with your website's sitemap or robots.txt file. These technical issues can prevent your website from indexing and ranking properly by search engines.",
              },
              {
                questionName:
                  'What is the Difference Between Technical SEO and On-Page SEO?',
                acceptedAnswerText:
                  'Technical SEO ensures that your website is accessible to search engines and that your web pages can be indexed and ranked properly. On-page SEO focuses on making your web pages more user-friendly and relevant to your target audience.',
              },
            ]}
          />
          <div className="medium-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-question-1">
              <div className="large-number">#1.</div>
              <div className="question">
                <h3>Why is Technical SEO important?</h3>
                <p>
                  Technical SEO is important because it helps ensure that your
                  website is accessible to search engines and that your web
                  pages can be indexed and ranked properly. Additionally,
                  technical SEO can help improve the user experience on your
                  website, making it easier for visitors to find the information
                  they need. You can help improve your website's overall
                  visibility and traffic by improving your website's technical
                  SEO.
                </p>
              </div>
            </div>
            <div className="btn faq">
              <Link href="/contact" passHref>
                <Button>Get in touch with us!</Button>
              </Link>
            </div>
            <div className="faq-question-2">
              <div className="question">
                <h3>How Much Does Maryland SEO Cost?</h3>
                <p>
                  For small businesses in Maryland and the rest of the DMV,
                  local SEO services can cost anywhere from{' '}
                  <b>$1000 to $5,000 per month</b>. For medium-sized businesses,
                  the cost can range from <b>$1,500 to $15,000 per month</b>.
                </p>
                <p>Of course, these are just rough estimates.</p>
                <p>
                  The actual cost of SEO will depend on a number of factors,
                  including the size of your business, your geographical
                  location, the competition in your industry, and your SEO
                  goals.
                </p>
                <p>
                  If you're not sure how much you should be paying for local SEO
                  services, it's best to consult with an experienced SEO
                  consultant like Bowie SEO. We'll be able to give you a more
                  accurate estimate based on your specific needs and goals.
                </p>
              </div>
              <div className="large-number">#2.</div>
            </div>
            <div className="btn faq">
              <a href={calendly} target="_blank">
                <Button>Book a Call Today!</Button>
              </a>
            </div>
            <div className="faq-question-3">
              <div className="large-number">#3.</div>
              <div className="question">
                <h3>What is the Difference between SEO and Local SEO</h3>
                <p>
                  In short, SEO (search engine optimization) is the process of
                  improving the visibility and ranking of your website in search
                  engine results pages (SERPs). Local SEO, on the other hand, is
                  focused on optimizing your website for local search results.{' '}
                </p>
                <p>
                  While both SEO and local SEO are important for driving traffic
                  to your website, there are some key differences between the
                  two.
                </p>
                <p>
                  For starters, local SEO is much more targeted than regular
                  SEO. When someone does a local search (for example,
                  "restaurants in Annapolis"), they are looking for businesses
                  that are located near them. On the other hand, when someone
                  does a general search (for example, "best restaurants"), they
                  are not necessarily looking for businesses near them.{' '}
                </p>
                <p>
                  Another key difference between SEO and local SEO is that local
                  SEO is more focused on generating leads and conversions, while
                  regular SEO is more focused on generating traffic. This is
                  because when someone searches for a business locally, they are
                  usually closer to making a purchase than someone who is just
                  searching for information.
                </p>
              </div>
            </div>
            <div className="btn faq">
              <Link href="/contact" passHref>
                <Button>Get in touch with us!</Button>
              </Link>
            </div>
            <div className="faq-question-4">
              <div className="question">
                <h3>
                  What Technical issues can stop my website from performing in
                  the search engines?
                </h3>
                <p>
                  Several technical issues can stop your website from performing
                  well in search engines. Some of the most common technical SEO
                  issues include duplicate content, broken links, and incorrect
                  redirects. You can also have problems with your website's
                  sitemap or robots.txt file. These technical issues can prevent
                  your website from indexing and ranking properly by search
                  engines.
                </p>
              </div>
              <div className="large-number">#4.</div>
            </div>
            <div className="btn faq">
              <a href={calendly} target="_blank">
                <Button>Book a Call Today!</Button>
              </a>
            </div>
            <div className="faq-question-5">
              <div className="large-number">#5.</div>
              <div className="question">
                <h3>
                  What is the Difference Between Technical SEO and On-Page SEO?
                </h3>
                <p>
                  Technical SEO ensures that your website is accessible to
                  search engines and that your web pages can be indexed and
                  ranked properly. On-page SEO focuses on making your web pages
                  more user-friendly and relevant to your target audience.
                </p>
              </div>
            </div>
          </div>
          <div className="btn faq">
            <Link href="/contact" passHref>
              <Button>Get in touch with us!</Button>
            </Link>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default TechnicalSEOServices
