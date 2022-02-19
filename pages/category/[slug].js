import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogList from "../../components/BlogList/BlogList";
import { client } from "../../lib/wordpress/client";
import {
  gql
} from "@apollo/client";

const Category = ({data, hasNextPage, endCursor}) => {
    return ( 
        <MainLayout>
            <BlogList 
                posts={data}
                hasNextPage={hasNextPage}
                endCursor={endCursor}
            />
        </MainLayout>
     );
}
 
export default Category ;

export async function getStaticPaths() {
  const GET_ALL_CATEGORIES = gql`
    query AllPagesQuery {
      categories {
        nodes {
          slug
        }
      }
    }
  `

  const {data} = await client.query({
    query: GET_ALL_CATEGORIES
  })


  const paths = data?.categories?.nodes?.map((page) => ({
    params: {slug: page.slug}
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({params}){
  const GET_PAGE_BY_SLUG = gql`
    query GetBookTitles($first: Int!, $slug: String!) {
      posts(first: $first, where: {categoryName: $slug}) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            content
            slug
            id
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            excerpt
          }
        }
      }
    }
  `

  const {data} = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: {
      slug: params.slug,
      first: 2
    }
  })

  return {
    props: {
      data: data?.posts.edges.map(({node}) => node),
      hasNextPage: data?.posts.pageInfo.hasNextPage,
      endCursor: data?.posts.pageInfo.endCursor
    },
    revalidate: 300
  }
}