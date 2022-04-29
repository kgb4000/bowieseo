/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { getPost, getPosts, getPostsSlugs } from '/lib/data'
import { ShareBtn } from './share-btn'

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

export default function Bio({ authorName, authorImg, authorBio, shareLink }) {
  return (
    <>
      <BioSection>
        <div className="solution-container">
          <img src={authorImg} alt={authorName} loading="lazy" />
          <p>{authorBio}</p>
        </div>
      </BioSection>
    </>
  )
}

const BioSection = styled.div`
  padding: 2rem;
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 5px;
  border: 2px solid #ddd;
  color: #101010;

  .solution-container {
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 500px) {
      display: flex;
    }
  }

  img {
    width: 6rem;
    border: 4px solid #ff5200;
    border-radius: 50%;
    margin-right: 2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
`
