import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

export const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
        slug
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_BLOG_COMMENTS = gql`
  query getBlogComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      id
      text
    }
  }
`;
