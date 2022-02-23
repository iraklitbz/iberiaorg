import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogList from "../../components/BlogList/BlogList";
import { client } from "../../lib/wordpress/client";
import { useIntl } from 'react-intl'
import {
  gql,
  useQuery
} from "@apollo/client";

const GET_GEO_POSTS = gql`
    query getGeoPosts($first: Int, $after: String, $slug: String!) {
        geocategories(where: {search: $slug}) {
            edges {
              node {
                news(first: $first, after: $after, where: {orderby: {field: DATE, order: DESC}}) {
                  pageInfo {
                    hasNextPage
                    endCursor
                  }
                  edges {
                    node {
                      title
                      slug
                      content
                      date
                      excerpt
                      id
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    }
`

const Category = ({params}) => {
  const intl = useIntl();
  const { data, loading, error, fetchMore } = useQuery(GET_GEO_POSTS, {
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
      <MainLayout>
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

  if (!data?.geocategories.edges[0].node.news.edges.length) {
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
                posts={data?.geocategories.edges[0].node.news.edges}
                fetchMore={fetchMore}
                hasNextPage={ data?.geocategories.edges[0].node.news.pageInfo.hasNextPage}
                endCursor={ data?.geocategories.edges[0].node.news.pageInfo.endCursor}
                loading={loading}
            />
        </MainLayout>
     );
}
 
export default Category ;

export async function getStaticPaths() {
  const GET_ALL_CATEGORIES = gql`
    query AllPagesQuery {
        geocategories {
        nodes {
          name
        }
      }
    }
  `

  const {data} = await client.query({
    query: GET_ALL_CATEGORIES
  })


  const paths = data?.geocategories?.nodes?.map((page) => ({
    params: {slug: page.name}
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