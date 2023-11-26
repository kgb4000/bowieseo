/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import HeroSection from '../components/HeroSection'
import Button from '../components/Button'

import { NextSeo } from 'next-seo'
import styled from 'styled-components'

const calendly = 'https://calendly.com/bowieseo/30min'

export default function Resources() {
  const SEO = {
    title: 'Small Business Resources | Helping MD Businesses',
    description: `Unlock the potential of your small business with our comprehensive resources. Expert tips, tools, and guides tailored for entrepreneurs. Start growing today!`,
    canonical: 'https://bowieseo.com/small-business-resources',
    openGraph: {
      title: 'SEO Company in Laurel, MD | Helping MD Businesses',
      description: `Unlock the potential of your small business with our comprehensive resources. Expert tips, tools, and guides tailored for entrepreneurs. Start growing today!`,
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <MainLayout>
        <HeroSection
          heroText="Maryland Small Business Resource Hub"
          subText="A list of resources for businesses in Maryland to help you getup and running, and functioning."
          backgroundImage="/images/seo-services-laurel-md-cover.webp"
          backgroundHeight="50vh"
          backgroundPosition="center"
        />
        <section>
          <div className="small-container">
            <h2>Maryland Business Resources</h2>
            <p>
              Welcome to our Maryland Small Business Resources Hub, a
              comprehensive online platform designed specifically to support the
              growth and development of small businesses in the state of
              Maryland.
            </p>
            <p>
              Our user-friendly web page offers a wealth of information, tools,
              and resources tailored to the needs of entrepreneurs, startups,
              and established small businesses.
            </p>
            <p>
              With a curated selection of business guides, financial assistance
              programs, and networking events, we strive to foster a thriving
              entrepreneurial ecosystem across the state.
            </p>
            <p>
              Delve into our extensive library of educational materials and
              workshops to help you navigate the complex world of regulations,
              taxes, and permits. Connect with experienced mentors, industry
              experts, and fellow business owners to unlock valuable insights,
              advice, and opportunities.
            </p>
            <p>
              At Bowie SEO, we are committed to empowering local businesses to
              flourish and drive economic growth in our vibrant community.
            </p>
          </div>
          <div className="small-container">
            <Section>
              <h2>Upcoming Small Business Conferences in Maryland</h2>
            </Section>
            <Section>
              <h2>Small Business Mentors</h2>
              <p>SCORE Mentors</p>
              <p>SCORE Mid-Maryland</p>
              <p>SCORE Southern Maryland</p>
            </Section>
            <Section>
              <h2>State Government Resources</h2>
              <p>Maryland Business Express</p>
              <p>Maryland Small Business Grants</p>
            </Section>

            <Section>
              <h2>Mayland Chambers of Commerce</h2>
              <p>
                The Maryland Chamber of Commerce is a statewide organization
                that represents and supports the interests of businesses and
                industries across Maryland.
              </p>
              <p></p>
              <h3>Chambers of Commerce for counties and cities in Maryland</h3>
              <p>Maryland Chamber of Commerce</p>
              <p>Aberdeen Chamber of Commerce</p>
              <p>Annapolis & Anne Arundel County Chamber of Commerce</p>
              <p> Baltimore City Chamber of Commerce</p>
              <p>Chesapeake Gateway Chamber of Commerce</p>
              <p>Harford County Chamber of Commerce</p>
              <p>Berlin Chamber of Commerce</p>
              <p>Ocean Pines Area Chamber of Commerce</p>
              <p>Greater Bethesda-Chevy Chase Chamber of Commerce</p>
              <p>Greater Bowie Chamber of Commerce</p>
              <p>St. Mary's County Chamber of Commerce</p>
              <p>Dorchester County Chamber of Commerce</p>
              <p>Greater Catonsville Chamber of Commerce</p>
              <p>Queen Anne's County Chamber of Commerce</p>
              <p>Kent County Chamber of Commerce</p>
              <p>Southern Anne Arundel Chamber of Commerce</p>
              <p> Howard County Chamber of Commerce</p>
              <p>Crisfield Area Chamber of Commerce</p>
              <p>Greater Crofton Chamber of Commerce</p>
              <p>Allegany County Chamber of Commerce</p>
              <p>Talbot County Chamber of Commerce</p>
              <p>Cecil County Chamber of Commerce</p>
              <p>Elkton Chamber & Alliance</p>
              <p>Frederick County Chamber of Commerce</p>
              <p>Gaithersburg-Germantown Chamber of Commerce</p>
              <p>Mid-Atlantic Hispanic Chamber of Commerce</p>
              <p>Northern Anne Arundel County Chamber of Commerce</p>
              <p>Hagerstown-Washington County Chamber of Commerce</p>
              <p>Hancock Chamber of Commerce</p>
              <p>Havre de Grace Chamber of Commerce</p>
              <p>Charles County Chamber of Commerce</p>
              <p>Prince George's Chamber of Commerce</p>
              <p>Baltimore Washington Corridor Chamber</p>
              <p>Garrett County Chamber of Commerce & Visitors Center</p>
              <p>Greater Mount Airy Chamber of Commerce</p>
              <p>North East Chamber of Commerce</p>
              <p>Olney Chamber of Commerce</p>
              <p>Pikesville Chamber of Commerce</p>
              <p>Pocomoke Area Chamber of Commerce</p>
              <p>Poolesville Area Chamber of Commerce</p>
              <p>Potomac Chamber of Commerce</p>
              <p>Calvert County Chamber of Commerce</p>
              <p>Princess Anne Chamber of Commerce</p>
              <p>Reisterstown-Owings Mills-Glyndon Chamber of Commerce</p>
              <p>Montgomery County Chamber of Commerce</p>
              <p>Rockville Chamber of Commerce</p>
              <p>Salisbury Area Chamber of Commerce</p>
              <p>Greater Severna Park & Arnold Chamber of Commerce</p>
              <p>Greater Silver Spring Chamber of Commerce</p>
              <p>Snow Hill Chamber of Commerce</p>
              <p>Taneytown Chamber of Commerce</p>
              <p>Baltimore County Chamber of Commerce</p>
              <p>Maryland Hispanic Chamber of Commerce</p>
              <p>Carroll County Chamber of Commerce</p>
              <p>Wheaton-Kensington Chamber of Commerce</p>
              <p>
                <a href="https://www.marylandbcc.org/" target="_blank">
                  Maryland Black Chamber of Commerce
                </a>
              </p>

              <p>
                Like other chambers of commerce, its primary goal is to create a
                favorable business environment and foster economic growth within
                the state. The Maryland Chamber of Commerce serves as an
                advocate, resource, and support system for the businesses in the
                state. It aims to create a favorable business climate and
                contribute to the overall economic growth and development of
                Maryland.
              </p>
            </Section>
          </div>

          <div className="small-container ">
            <img
              src="/images/business-man-calling-about-seo-services.webp"
              alt="A man calling to inquire about SEO and how it could help his business."
              title="A man calling to inquire about SEO and how it could help his business."
              width="1000px"
              height="667px"
            />
            <h2>Ready to Boost Your Sales and Revenue?</h2>
            <p>
              Contact Bowie SEO and we'll show you how our search engine
              optimization can help your company grow without paying for leads
              or online ads.
            </p>
            <div className="btn">
              <a href={calendly} target="_blank" rel="noreferrer">
                <Button>Schedule a Free Consultation!</Button>
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

const Section = styled.div`
  margin: 2rem 0;
`
