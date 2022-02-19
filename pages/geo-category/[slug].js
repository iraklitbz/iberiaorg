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
    query getGeoPosts($first: Int, $after: String) {
        geocategories(where: {slug: "activities"}) {
            edges {
              node {
                news(first: $first, after: $after) {
                  pageInfo {
                    hasNextPage
                    endCursor
                  }
                  edges {
                    node {
                      title
                      slug
                      content
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
        after: null
    },
  });



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