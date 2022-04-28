/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import { getPosts } from '../../lib/data'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import PageHero from '../../components/PageHeroSection'
// import Layout from '../../components/layout'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Blog({ data }) {
  const SEO = {
    title: 'Learn how SEO can help your business | Blog | Bowie SEO',
    description:
      'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
    type: 'website',
    canonical: 'https://bowieseo.com/blog',
    openGraph: {
      title: 'Learn how SEO can help your business | Blog | Bowie SEO',
      description:
        'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
      type: 'website',
    },
  }
  return (
    <>
      <ArticleJsonLd
        url="https://bowieseo.com/blog"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization."
      />
      <NextSeo {...SEO} />
      <PageHero
        heading="SEO Blog"
        subText="Tips to help you succeed with SEO and find more opportunities to succeed."
        buttonText="Contact us"
        heroBtnLink="/contact"
      />
      <BlogMain>
        <div className="blog-container">
          {data.posts.map((post) => (
            <div key={post.slug}>
              <div className="blog-posts">
                <Link href={`/${post.slug}`} passHref>
                  <img src={post.coverImage.url} alt={post.title} />
                </Link>
                <div className="blog-info">
                  <Link href={`/${post.slug}`} passHref>
                    <a>
                      <h2>{post.postTitle}</h2>
                    </a>
                  </Link>
                  <Link href={`/${post.slug}`} passHref>
                    <a>Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlogMain>
    </>
  )
}

const BlogMain = styled.main`
  margin-top: 2rem;
  .blog-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.2rem;
    margin-bottom: 4rem;
  }
  h1 {
    text-align: center;
  }

  .blog-info {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .blog-info h2 {
    font-size: 1.2rem;
    margin: 1rem 0;
    text-align: left;
    color: #000;
  }

  a {
    text-decoration: none;
  }


  @media (min-width: 768px) {
    .blog-info h2 {
    font-size: 1.8rem;
    }
    .blog-posts {
      display: flex;
      margin-bottom: 4rem;
      align-items: center;
      img {
        max-width: 25rem;
        margin-right: 5%;
      }

      p {
        margin: 0;
      }

      img {
        max-width: 50%;
        margin: 0;
        margin-right: 5%;
      }

      
    }
    @media (min-width: 1024px) {
    .blog-posts {
      display: flex;
      margin-bottom: 4rem;
      align-items: center;
      img {
        max-width: 25rem;
        margin-right: 5%;
      }

      p {
        margin: 0;
      }

      img {
        max-width: 45%;
        margin: 0;
        margin-right: 5%;
      }

    }
  }
`
