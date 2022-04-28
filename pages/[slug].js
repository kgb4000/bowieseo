import { getPost, getPosts, getPostsSlugs } from '/lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Bio from '../components/author-bio'
import { ShareBtn } from '../components/share-btn'
import PageHero from '../components/PageHeroSection'
import styled from 'styled-components'

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

export default function Articles({ post, shareLink }) {
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
        datePublished={post.date}
        authorName={[post.author.name]}
        authorImg={post.author.photo.url}
        publisherName={post.author.name}
        publisherLogo="https://bowieseo.com/public/images/logo.jpg"
        description={post.excerpt}
      />

      <NextSeo {...SEO} />
      {/* <PageHero
        heading={post.postTitle}
        date={new Date(post.date).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
        authorName={post.author.name}
      /> */}
      <BlogContent>
        <div className="container author-info">
          <h1>{post.postTitle}</h1>
          <ShareBtn shareLink={`https://bowieseo.com/${post.slug}`} />
          <img src={[post.coverImage.url]} />
          <RichText content={post.content.json} />
          <ShareBtn shareLink={`https://bowieseo.com/${post.slug}`} />
          <Bio authorImg={post.author.photo.url} authorBio={post.author.bio} />
        </div>
      </BlogContent>
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
  }
`
