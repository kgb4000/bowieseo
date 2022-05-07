import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckwtyfy2c4z5t01yy6qfhf1nx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(orderBy: createdAt_DESC) {
        title
        slug
        postTitle
        coverImage {
          url
          width
          height
          altText
        }
        date
        excerpt
        content {
          json
        }
        author {
          name
          bio
          photo {
            url
            width
            height
            altText
          }
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckwtyfy2c4z5t01yy6qfhf1nx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        date
        slug
        excerpt
        postTitle
        coverImage {
          url
          width
          height
          altText
        }
        content {
          json
        }
        author {
          name
          bio
          photo {
            url
            height
            width
            altText
          }
        }
      }
    }
  `

  const variables = {
    slug: slug,
  }

  return await graphQLClient.request(query, variables)
}

export const getPostsSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.graphcms.com/v2/ckwtyfy2c4z5t01yy6qfhf1nx/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}
