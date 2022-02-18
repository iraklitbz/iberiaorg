import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogList from "../../components/BlogList/BlogList";
import { client } from "../../lib/wordpress/client";
import {
  gql
} from "@apollo/client";

const Category = ({data}) => {
    return ( 
        <MainLayout>
          <h2>Hola</h2>
            <BlogList 
                posts={data}
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
    query PageQuery($slug: String!) {
      posts(where: {categoryName: $slug}) {
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
    variables: {slug: params.slug}
  })

  return {
    props: {
      data: data?.posts.edges.map(({node}) => node)
    },
    revalidate: 300
  }
}