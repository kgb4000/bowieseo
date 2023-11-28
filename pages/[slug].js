import Link from 'next/link'
import { getPost, getPosts, getPostsSlugs, getRecentPosts } from '/lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Bio from '../components/author-bio'
import { ShareBtn } from '../components/share-btn'
import MainLayout from '../components/MainLayout'
import styled from 'styled-components'
import { BiCalendar, BiStopwatch } from 'react-icons/bi'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
  }
}

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export default function Articles({ post }) {
  const SEO = {
    title: post.title,
    description: post.excerpt,
    url: `https://bowieseo.com/${post.slug}`,
    canonical: `https://bowieseo.com/${post.slug}`,
    type: 'article',
    openGraph: {
      type: 'article',
      description: post.excerpt,
      // article: {
      //   publishedTime: post.date,
      //   authors: [`https://www.example.com/authors/@${post.author.name}`],
      // },
      images: [
        {
          url: post.coverImage.url,
          width: post.coverImage.width,
          height: post.coverImage.height,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      url: `https://bowieseo.com/${post.slug}`,
      site_name: 'Bowie SEO',
    },
  }

  return (
    <>
      <ArticleJsonLd
        url={`https://bowieseo.com/${post.slug}`}
        title={post.title}
        images={[post.coverImage.url]}
        alt={post.title}
        datePublished={post.date}
        authorName={[post.author.name]}
        authorImg={post.author.photo.url}
        publisherName={post.author.name}
        publisherLogo="https://bowieseo.com/public/images/logo.jpg"
        description={post.excerpt}
      />

      <NextSeo {...SEO} />
      <MainLayout>
        <BlogContent>
          <div className="blog-container author-info">
            <h1>{post.postTitle}</h1>
            <img
              src={[post.coverImage.url]}
              alt={post.title}
              title={post.title}
              loading="lazy"
            />
            <div className="blog-info">
              <div className="date-time">
                <div className="date">
                  <BiCalendar />
                  <p>
                    {new Date(post.date).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                {/* <div className="date">
                  <BiStopwatch />
                  <p>{post.readTime}</p>
                </div> */}
              </div>
              <div className="author-info">
                <img
                  className="avatar"
                  src={post.author.photo.url}
                  alt={post.author.name}
                  loading="lazy"
                />
                <span>- by {post.author.name}</span>
              </div>
            </div>
            <ShareBtn shareLink={`https://bowieseo.com/${post.slug}`} />
            <RichText content={post.content.raw} />
            <ShareBtn shareLink={`https://bowieseo.com/${post.slug}`} />
            <Bio
              authorImg={post.author.photo.url}
              authorBio={post.author.bio}
            />
            <h2>Other Interesting Posts</h2>
            <div className="related-posts">
              <RichText content={post.relatedPosts.raw} />
            </div>
            <p>
              <Link href="/blog">Back to blog &rarr;</Link>
            </p>
          </div>
        </BlogContent>
      </MainLayout>
    </>
  )
}

const BlogContent = styled.main`
  .author-info {
    h1 {
      font-size: 1.8rem;
      margin: 2rem 0;

      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
    }
    h2 {
      text-align: left;
      margin-left: 0;
    }
    img {
      text-align: center;
    }
    ol,
    li {
      list-style: disc;
    }
  }

  .related-posts {
    margin: 2rem 0;
    a {
      font-weight: 400;
    }
  }
  .blog-info {
    margin-bottom: 1rem;
    h2 {
      font-size: 1.75rem;
    }

    p,
    span {
      font-size: 1rem;
      margin-bottom: 0;
    }

    .date {
      margin-right: 1.5rem;
      display: flex;
      align-items: center;

      p {
        margin-left: 0.5rem;
      }
    }

    .date-time {
      display: flex;
    }

    .author-info {
      display: flex;
      margin-top: 1rem;
      align-items: center;

      img {
        margin: 0 1rem 0 0;
      }
    }
    .avatar {
      max-width: 2.5rem;
      border: 2px solid #cf0a0a;
      border-radius: 100%;
    }
  }
`
