import React from "react";
import moment from "moment";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
const GET_POSTS = gql`
    query getPosts($first: Int!, $after: String, $slug: String!) {
      posts(first: $first, after: $after, where: {categoryName: $slug}) {
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
  `;
const BATCH_SIZE = 10;
const BlogList = ({posts, hasNextPage, endCursor}) => {
    const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
        variables: { 
            first: BATCH_SIZE, 
            after: endCursor,
            slug: posts[0].slug
        },
        notifyOnNetworkStatusChange: true,
      });
    const masNoticias = data?.posts.edges.map((edge) => edge.node);
    console.log(masNoticias)

    return ( 
        <div className="position-relative z-index-1 padding-y-xl">
            <div className="container max-width-adaptive-lg">
                <div className="grid gap-lg">
                    {posts.length > 0 
                    ? 
                    <article className="story story--featured">
                        <Link href={`/news/${posts[0].slug}`}>
                          <a className="story__img radius-md">
                            <figure className="aspect-ratio-4:3">
                                {posts[0].featuredImage
                                ? 
                                    <img src={posts[0].featuredImage.node.sourceUrl} alt={posts[0].title} />
                                : 
                                    <div className="noImagen radius-md">
                                        <img width="245px" src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_icon.svg" />
                                    </div>
                                }
                              
                            </figure>
                        </a>
                        </Link>

                        <div className="story__content">
                        <div className="margin-bottom-xs">
                            <span className="story__category">
                            <i><time>{moment(posts[0].date).subtract(10, 'days').calendar()}</time></i>
                            </span>
                        </div>
                
                        <div className="text-component">
                            <h2 className="story__title"><Link href={`/news/${posts[0].slug}`}><a> {posts[0].title} </a></Link></h2>
                            <div dangerouslySetInnerHTML={{__html: posts[0].excerpt.substring(0,130) + " ..." }}></div>
                            
                        </div>
                
                     
                        </div>
                    </article>
                    : 
                    <h3>No hay más</h3>
                    }
               
                {posts.slice(1).map((element) => (
                    <article key={element.id} className="story col-4@md">
                        <Link href={`/news/${element.slug}`}>
                          <a className="story__img radius-md">
                            <figure className="aspect-ratio-4:3">
                                {   element.featuredImage 
                                ? 
                                    <img src={element.featuredImage.node.sourceUrl} alt={element.title} />
                                : 
                                    <div className="noImagen radius-md">
                                        <img width="245px" src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_icon.svg" />
                                    </div>
                                }
                              
                            </figure>
                        </a>
                        </Link>

                        <div className="story__content">
                        <div className="margin-bottom-xs">
                            <Link href={`/news/${element.slug}`}>
                              <a className="story__category">
                                <i><time>{moment(posts[0].date).subtract(10, 'days').calendar()}</time></i>
                             </a>
                            </Link>
                        </div>
                
                        <div className="text-component">
                            <h2 className="story__title"><Link href={`/news/${element.slug}`}><a> {element.title} </a></Link></h2>
                            
                        </div>
                
                      
                        </div>
                    </article>
                 ))}

               

               
                </div>

                {hasNextPage ? (
                        <form
                        method="post"
                        onSubmit={(event) => {
                            event.preventDefault();
                            fetchMore({ variables: { 
                                after: endCursor
                            } });
                        }}
                        >
                        <button type="submit" disabled={loading}>
                            {loading ? "Loading..." : "Load more"}
                        </button>
                        </form>
                    ) : (
                        <p>✅ All posts loaded.</p>
                    )}
            </div>
            </div>

        
               
           
     );
}
 
export default BlogList;