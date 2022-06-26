import Link from 'next/link'
import Button from './Button'
const Blog = ({ data }) => {
  return (
    <>
      <div className="front-page-blog-container">
        {data.posts.slice(0, 3).map((post) => (
          <div key={post.slug}>
            <div className="blog-posts">
              <img src={post.coverImage.url} alt={post.title} loading="lazy" />
              <div className="blog-info">
                <Link href={`/${post.slug}`}>
                  <a>
                    <h2>{post.postTitle}</h2>
                  </a>
                </Link>
                <Link href={`/${post.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn">
        <Link href="/blog" passHref>
          <Button>Visit our Blog</Button>
        </Link>
      </div>
    </>
  )
}

export default Blog
