/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import PageHero from '../components/PageHeroSection'
import ContactForm from '../components/Contact-Form'

import { NextSeo } from 'next-seo'

const Services = () => {
  const SEO = {
    title: "Get an SEO Audit and See Why You're Not On the First Page",
    description:
      "Get an SEO Audit and see what's stopping you from ranking on the first page of Google for your keywords. Contact us today!",
    type: 'website',
    canonical: 'https://bowieseo.com/seo-audit',
    openGraph: {
      title: "Get an SEO Audit and See Why You're Not On the First Page",
      description:
        "Get an SEO Audit and see what's stopping you from ranking on the first page of Google for your keywords. Contact us today!",
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <PageHero
        heading="SEO Audit"
        subText="We perform SEO Audits. Discover What's Stopping Your Website From Getting Traffic and Fix it!."
        heroBtnLink="/contact"
        buttonText="Book a call"
      />
      {/* <section>
        <div className="container">
          <h2>SEO Audit</h2>
          <p className="sub-text">
            Our services will help your business get more website traffic and
            attract potential customers. We not a full service agency, we're an
            SEO company that specialize in search engine optimization for
            businesses in the DMV.
          </p>
        </div>
      </section> */}
      <section>
        <div className="container">
          <h2>What is an SEO Audit?</h2>
          <p>
            An SEO audit evaluates your entire website to see if it can appear
            in the search engines results pages.
          </p>
          <p>Example.</p>
          <p>
            If Google and Bing think your website is good enough to appear in
            their search results for a particular keyword, then they will show
            it in their search results.
          </p>
          <p>
            What position they show your webpage depends on if they feel that it
            satisfies the searcher's intent.
          </p>
        </div>
        <div className="btn">
          <Link href="/free-website-audit" passHref>
            <Button>Free Mini SEO Audit</Button>
          </Link>
        </div>
      </section>
      <section className="why-use-seo-section">
        <div className="container">
          <h2>7 Benefits of Doing an SEO Audit on Your Website?</h2>
          <p>
            An SEO Audit is essential because you can find issues that are
            affecting your website's ability to rank higher in the search
            engines.
          </p>
          <p>It grades your website on the best practices for SEO.</p>
          <p>
            Using best practices is key to Google's algorithm, which means that
            the more sites that do things incorrectly (or don't do anything at
            all), the better your chances of ranking higher.
          </p>
          <h3>#1. It Helps You See What Keywords You're Ranking For</h3>
          <p>
            If you're going to expand into new markets, focusing on ranking for
            specific keywords is essential and will produce better results.
            Choosing random keywords without knowing what people are using or if
            the keywords are related to your goals is a recipe for wasting
            money.
          </p>
          <h3>
            #2. It Helps You See What Keywords People are Using To Find Your
            Website and Help You Find New Keywords
          </h3>
          <p>
            As mentioned before, it's essential to know how well you're doing
            compared to others and whether or not there is any room for
            improvement on certain aspects of your website that will help move
            things along in the right direction, so why not look at how they
            rank on Google? By having this information available, you can more
            easily assess where they're earning their profits from and use that
            as a way of figuring out how much potential traffic is general on
            your end.
          </p>
          <h3>#3. An SEO Audit Can help You Create Better Content</h3>
          <p>
            If you intend on having a blog on your website, reviews, forums, or
            any other kind of public content that people can find themselves
            reading, SEO audits are going to provide relevant information
            regarding how well optimized they are for a particular keyword.
          </p>
          <h3>#4. It Helps You See What Your Competitors are Doing</h3>
          <p>
            As mentioned before, it's essential to know how well you're doing
            compared to others and whether or not there is any room for
            improvement on certain aspects of your website that will help move
            things along in the right direction, so why not look at how they
            rank on Google? By having this information available, you can more
            easily assess where they're earning their profits from and use that
            as a way of figuring out how much potential traffic is general on
            your end.
          </p>
          <h3>#6. It Helps Ensure That All Your Web Pages Get Indexed</h3>
          <p>
            As mentioned before, it's essential to know how well you're doing
            compared to others and whether or not there is any room for
            improvement on certain aspects of your website that will help move
            things along in the right direction, so why not look at how they
            rank on Google? By having this information available, you can more
            easily assess where they're earning their profits from and use that
            as a way of figuring out how much potential traffic is general on
            your end.
          </p>
          <h3>
            #7. It Helps Find Elements That Are Negatively Affecting Your
            Website
          </h3>
          <p>
            As mentioned before, it's essential to know how well you're doing
            compared to others and whether or not there is any room for
            improvement on certain aspects of your website that will help move
            things along in the right direction, so why not look at how they
            rank on Google? By having this information available, you can more
            easily assess where they're earning their profits from and use that
            as a way of figuring out how much potential traffic is general on
            your end.
          </p>
        </div>
        <div className="btn">
          <Link href="/free-website-audit" passHref>
            <Button>Free Mini SEO Audit</Button>
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Our Complete SEO Audit Process</h2>
          <p>Performing a complete SEO Audit includes many different steps.</p>
          <p>These steps include:</p>
          <h3>#1. Establishing SEO Benchmarks</h3>
          <p>
            In order to know whether your SEO efforts are bearing fruit, you
            first need to set some baseline measures, or benchmarks. These will
            be different for every website, depending on its age, size, history,
            and industry.
          </p>
          <p>Some key metrics you may want to track include:</p>
          <ol>
            <li>Ranking for specific keywords</li>
            <li>Traffic from organic search</li>
            <li>Competitor's traffic from organic search</li>
            <li>Number of Backlinks</li>
            <li>Number of reviews</li>
          </ol>
          <h3>#2. Ensuring All Your Web Pages are Indexed</h3>
          <p>
            One of the most important steps in any SEO audit is to check whether
            your website is being indexed by Google. If it isn't, then all your
            other efforts are for naught, because Google will never show your
            site in the search results.
          </p>
          <h3>#3. Checking for duplicate versions of your website</h3>
          <p>
            If you have multiple versions of your website (e.g.
            http://example.com and http://www.example.com), search engines may
            see this as duplicate content and penalize your site accordingly. To
            avoid this, you'll want to set up a 301 redirect from the
            non-preferred version of your website to the preferred one.
          </p>
          <p>
            Additionally, if you have pages on your website with very similar
            content (e.g. two different product pages that describe the same
            product in slightly different ways), this can also be seen as
            duplicate content and cause problems for your SEO. In this case,
            you'll want to choose one version of the page to keep and redirect
            the other one(s) to it.
          </p>
          <h3>#4. Checking for Manual Actions by Google</h3>
          <p>
            If Google has manually penalized your website, it will likely show
            up in the Manual Actions section of Search Console. This is a rare
            occurrence, but if it has happened to you, it's important to fix the
            problem as soon as possible.
          </p>
          <h3>#5. Checking Your Website Speed and Load Time</h3>
          <p>
            Google has stated that website speed is a ranking factor, so it's
            important to make sure your site loads quickly. You can check your
            website's speed with Google's PageSpeed Insights tool. Additionally,
            you'll want to make sure your website's HTML and CSS are clean and
            properly formatted, as this can also impact your load time.
          </p>
          <h3>#6. Checking Your Website is Secure</h3>
          <p>
            Google gives preference to websites that are secure, so it's
            important to make sure your site is using HTTPS. You can check
            whether your website is secure by looking for the green lock icon in
            the address bar of your browser.
          </p>
          <h3>#7. Checking Your Website is Mobile Friendly</h3>
          <p>
            In 2015, Google updated its algorithm to give preference to
            mobile-friendly websites in the search results. This means that if
            your website is not optimized for mobile devices, you could be
            losing out on a lot of traffic. To check whether your website is
            mobile-friendly, you can use Google's Mobile-Friendly Test tool.
          </p>
          <h3>#8. On-Page SEO - Checking Each Page on Your Website</h3>
          <h3>#9. Find Duplicate Content issues</h3>
          <p>www.example.com vs example.com.</p>
          <h3>#10. Find Thin Content Pages</h3>
          <p>
            Thin content is defined as pages with little or no original content.
            This could be because the page is too short, has been copied from
            another site, or is just a list of keywords with no real substance.
            Thin content can hurt your SEO in two ways: first, Google may
            penalize your site for having low-quality content, and second, users
            may be less likely to engage with your site if they find the content
            uninteresting or uninformative.
          </p>
          <h3>#11. Find Orphan Pages</h3>
          <p>
            Orphan pages are pages that are not linked to from any other pages
            on your site. This can be a problem because it means that search
            engines may not be able to find and index them.
          </p>
          <p>
            If search engines can't find these pages, they cannot index these
            pages.
          </p>
          <h3>#12. Compare Your Content To Content on the First Page</h3>
          <p>www.example.com vs example.com.</p>
          <h3>#13. Find Broken Links on Your Website</h3>
          <p>
            Broken links are not only bad for user experience, but they can also
            hurt your SEO. This is because Google uses links to crawl and index
            websites, so if there are a lot of broken links on your site, it can
            impact your website's crawling and indexing.
          </p>
          <h3>#14. Perform a Backlink Audit</h3>
          <p>
            A backlink is a link from another website to your own. Backlinks are
            one of the most important factors in SEO, as they help to improve
            your website's visibility and authority. However, not all backlinks
            are created equal. Some backlinks come from low-quality websites,
            and others come from websites that use spammy techniques, such as
            link farms.
          </p>
          <p>
            To make sure your backlinks are helping your SEO, you'll need to
            conduct a backlink audit. This involves identifying which backlinks
            are harmful to your website and disavowing them. You can use a tool
            like Moz's Link Explorer or Majestic's Site Explorer to find
            backlinks to your website.
          </p>
        </div>
      </section>
      <div className="btn">
        <Link href="/" passHref>
          <Button>Book a Call Today!</Button>
        </Link>
      </div>
      <section>
        <div className="container">
          <h2>What Happens After the Your Audit</h2>
          <p>
            After your SEO audit, you should incorporate all necessary changes
            as quickly as possible.
          </p>
          <p>
            Tracking the success of those changes over time will be a great
            indicator of whether you've gone far enough or if there are still
            opportunities for improvement.
          </p>
          <p>
            Use this information to continue developing an ongoing checklist of
            tasks that need to happen regularly, e.g., content maintenance,
            getting more backlinks, monitoring website traffic, etc.
          </p>
          <p>
            The more detail that goes into this checklist upfront, the easier
            it'll be to use effectively going forward.
          </p>
          <p>And don't hesitate to reach out for expert help if you need it.</p>
        </div>
      </section>
      <div className="btn">
        <Link href="/" passHref>
          <Button>Book a Call Today!</Button>
        </Link>
      </div>
      <section>
        <div className="container">
          <h2>
            Ready to Get More Traffic and Rank Higher in the Search Engines?
          </h2>
          <p className="sub-text">
            Fill out the form below to get your SEO Audit.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Services
