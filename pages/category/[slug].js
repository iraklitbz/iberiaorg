import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogList from "../../components/BlogList/BlogList";
import { client } from "../../lib/wordpress/client";
import { useIntl } from 'react-intl'
import {
  gql,
  useQuery
} from "@apollo/client";


const GET_POSTS = gql`
query getPosts($first: Int, $slug: String!, $after: String) {
  posts(first: $first, after: $after, where: {categoryName: $slug}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        content
        slug
        date
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

const Category = ({params}) => {
  const intl = useIntl();
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { 
      first: 7,
      slug: params,
      after: null
    },
  });

    if (error) {
      return (
        <MainLayout>
          <div className="container max-width-adaptive-lg padding-y-xl text-center">
            <h4 className="text-center">{intl.formatMessage({ id: "error_charge_news" })}</h4>
          </div>
        </MainLayout>
      );
    }

    if (!data && loading) {
      return (
        <MainLayout pageTitle={params} >
          <div className="container max-width-adaptive-lg padding-y-xl text-center">
            <div className="circle-loader circle-loader--v2" role="alert">
              <p className="circle-loader__label">{intl.formatMessage({ id: "loading" })}</p>
              <div aria-hidden="true">
                <svg className="circle-loader__svg" width="48" height="48" viewBox="0 0 48 48"><circle className="circle-loader__base" cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="2"/><circle className="circle-loader__fill" cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
            </div>
          </div>
        </MainLayout>
      )
    }

    if (!data?.posts.edges.length) {
      return (
        <MainLayout>
          <div className="container max-width-adaptive-lg padding-y-xl text-center">
            <h3 className="text-center">{intl.formatMessage({ id: "no_more_news" })}</h3>
          </div>
        </MainLayout>
      )
    }


    return ( 
        <MainLayout>
            <BlogList 
                posts={data?.posts.edges}
                fetchMore={fetchMore}
                hasNextPage={data?.posts.pageInfo.hasNextPage}
                endCursor={data?.posts.pageInfo.endCursor}
                loading={loading}
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
  
  return {
    props: {
     params: params.slug
    },
    revalidate: 300
  }
}