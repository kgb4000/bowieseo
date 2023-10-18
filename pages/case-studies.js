/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import HeroSection from '../components/HeroSection'

import MainLayout from '../components/MainLayout'

import { NextSeo, FAQPageJsonLd } from 'next-seo'

const calendly = 'https://calendly.com/bowieseo/30min'

const CaseStudy = () => {
  const SEO = {
    title: 'Case Studies of Companies We Wokred With | Bowie SEO',
    description:
      'Here a some companies that implemented SEO. Maximize your SEO rankings and outrank your competitors today!',
    type: 'website',
    canonical: 'https://bowieseo.com/case-studies',
    openGraph: {
      title: 'Case Studies of Companies We Wokred With | Bowie SEO',
      description:
        'Here a some companies that implemented SEO. Maximize your SEO rankings and outrank your competitors today!',
      type: 'website',
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Case Studies"
          subText="How we use SEO to help businesses in Maryland make money with their websites."
          backgroundImage="/images/search-engine-optimization-header.webp"
          backgroundHeight="40vh"
          backgroundPosition="top center"
          buttonText="Schedule a free call today!"
          buttonLink={calendly}
        />
        <section>
          <div className="small-container">
            <h2>SEO Case Study #1:</h2>
            <h2> Monica Browne Weddings</h2>
            <img src="/images/case-study-1.png" />
            <p>
              We're a{' '}
              <Link href="/maryland-seo-company" passHref>
                Maryland SEO company
              </Link>
              , and we pride ourselves on our ability to help businesses in
              achieve online success by using organic search engine optimization
              (SEO).
            </p>
            <p>
              We also believe that businesses in Maryland should start
              practicing{' '}
              <Link href="/search-engine-optimization" passHref>
                search engine optimization
              </Link>{' '}
              and use their websites to <strong>make money</strong>.
            </p>
            <p>
              Our latest success story involves a wedding planning company
              called Monica Browne Weddings.
            </p>
            <p>
              Monica Browne Weddings, based in Bowie, MD, saw a staggering 75%
              increase in one year without spending money any money on paid
              advertising like Facebook or Instagram ads.
            </p>
            <p>
              This case study will show the techniques used to get these
              results, including:{' '}
            </p>
            <ul>
              <li>
                An{' '}
                <Link href="/free-mini-seo-audit" passHref>
                  SEO audit
                </Link>
              </li>
              <li>
                <Link href="/keyword-research">Keyword Research</Link>
              </li>
              <li>Competitive analysis</li>
              <li>On-page-SEO</li>
              <li>
                Creating <Link href="content-for-seo">SEO content</Link>
              </li>
              <li>
                <Link href="/maryland-local-seo">Local SEO</Link>
              </li>
              <li>
                <Link href="/gmb-management-services">
                  Google My Business Management
                </Link>
              </li>
              <li>Tracking and monitoring</li>
            </ul>
            <h3>Background</h3>
            <p>
              Our client, Monica, approached us to help improve her online
              visibility and drive more traffic to her website.
            </p>
            <p>
              She was facing stiff competition from other wedding planners in
              the area and wanted to boost her rankings on search engines to
              attract more clients.
            </p>
            <p>
              Monica had a limited budget and was unwilling to invest in paid
              advertising, so we had to rely solely on organic SEO techniques.
            </p>
            <h2>Our Strategy</h2>
            <p>
              We devised a comprehensive SEO plan, focusing on seven main
              aspects:
            </p>
            <h3>#1. SEO Audit</h3>
            <p>
              Before diving into our strategy, we conducted a thorough{' '}
              <Link href="/free-mini-seo-audit" passHref>
                SEO audit
              </Link>{' '}
              to evaluate her current website performance and identify areas for
              improvement. The audit included analyzing website structure,
              content, technical SEO elements, backlink profile, and overall
              user experience. This assessment provided a baseline from which we
              could measure our progress and allowed us to prioritize our
              efforts for maximum impact.
            </p>
            <h3>#2. Competitive Analysis </h3>
            <p>
              We conducted a thorough competitive analysis to understand what
              strategies worked for her competitors. This helped us identify
              gaps and opportunities to outperform them. We analyzed
              competitors' backlink profiles, content, and on-page SEO to
              develop a data-driven strategy to outrank them.
            </p>
            <h3>#3. On-Page SEO</h3>
            <p>
              We optimized her website with the latest on-page SEO best
              practices, including optimizing meta tags, headings, and image alt
              tags. We also improved the site's content quality and ensured it
              was informative and engaging. This helped her website become more
              relevant to search engine crawlers, improving its chances of
              ranking higher in SERPs.
            </p>
            <h3>#4. Local SEO</h3>
            <p>
              Since Monica Browne Weddings is a local business, we focused on
              local SEO strategies to help her rank higher in local search
              results.
            </p>
            <p>
              We optimized her Google Business Profile by ensuring accurate and
              up-to-date information, selecting appropriate categories, adding
              high-quality images, and incorporating relevant keywords into
              their business description.
            </p>
            <p>
              We also ensured consistent NAP (Name, Address, Phone) information
              across all online directories and her website, and encouraged her
              to tell her clients to leave positive reviews.
            </p>
            <p>
              This helped her appear in the local 3-pack, exposing her website
              to more potential clients in Bowie and surrounding cities.
            </p>
            <h3>#5. Google My Business Management</h3>
            <p></p>
            <p>
              By incorporating an SEO audit, keyword research, competitive
              analysis, on-page SEO, local SEO, and Google Business Profile
              optimization into our strategy, we were able to create a
              well-rounded approach that addressed all aspects of monica Browne
              Weddings' online presence, ultimately leading to more customers
              finding her and more revenue growth.
            </p>
          </div>
        </section>
        <div className="container">
          <div className="call-to-action-grid">
            <img
              src="/images/man-calling-baltimore-seo-company.webp"
              alt="A man calling to inquire about Baltimore SEO company."
              title="A man calling to inquire about Baltimore SEO company."
              width="1000px"
              height="667px"
            />
            <div className="container">
              <h2>Want to see how SEO can help your business grow?</h2>
              <p>
                To learn how SEO can help you generate leads without spending
                money on advertising, get in touch with us today!
              </p>
              <div className="btn">
                <a href={calendly} target="_blank" rel="noreferrer">
                  <Button>Schedule a Call Today!</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default CaseStudy
