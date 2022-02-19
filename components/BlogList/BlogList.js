import React from "react";
import moment from "moment";
import Link from "next/link";
import { useIntl } from 'react-intl'
const BlogList = ({posts, hasNextPage, endCursor, loading, fetchMore}) => {
    const intl = useIntl();
    return ( 
        <div className="position-relative z-index-1 padding-y-xl">
            <div className="container max-width-adaptive-lg">
                <div className="grid gap-lg">     
                    <article className="story story--featured">
                        <Link href={`/news/${posts[0].slug}`}>
                          <a className="story__img radius-md">
                            <figure className="aspect-ratio-4:3">
                                {posts[0].node.featuredImage
                                ? 
                                    <img src={posts[0].node.featuredImage.node.sourceUrl} alt={posts[0].title} />
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
                            <i><time>{moment(posts[0].node.date).endOf('month').format('DD-MM-YYYY')}</time></i>
                            </span>
                        </div>
                
                        <div className="text-component">
                            <h2 className="story__title"><Link href={`/news/${posts[0].node.slug}`}><a> {posts[0].node.title} </a></Link></h2>
                            <div dangerouslySetInnerHTML={{__html: posts[0].node.excerpt.substring(0,130) + " ..." }}></div>
                            
                        </div>
                
                     
                        </div>
                    </article>
                    
                {posts?.slice(1).map((element) => (
                    <article key={element.node.id} className="story col-4@md">
                        <Link href={`/news/${element.node.slug}`}>
                          <a className="story__img radius-md">
                            <figure className="aspect-ratio-4:3">
                                {   element.node.featuredImage 
                                ? 
                                    <img src={element.node.featuredImage.node.sourceUrl} alt={element.node.title} />
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
                            <Link href={`/news/${element.node.slug}`}>
                              <a className="story__category">
                                <i><time>{moment(posts[0].date).format('DD-MM-YYYY')}</time></i>
                             </a>
                            </Link>
                        </div>
                
                        <div className="text-component">
                            <h2 className="story__title"><Link href={`/news/${element.node.slug}`}><a> {element.node.title} </a></Link></h2>
                            
                        </div>
                
                      
                        </div>
                    </article>
                 ))}

               

               
                </div>
                {hasNextPage ? (
                      <div className="text-center">
                            <button 
                            className="btn btn--primary btn--lg margin-top-lg"
                                disabled={loading}
                                onClick={(event) => {
                                    event.preventDefault();
                                    fetchMore({ 
                                        variables: { 
                                            after: endCursor,
                                            first: 6, 
                                        },
                                        updateQuery: (prevResult, {fetchMoreResult}) => {
                                            fetchMoreResult.posts.edges = [
                                                ...prevResult.posts.edges,
                                                ...fetchMoreResult.posts.edges
                                            ]
                                            return fetchMoreResult;
                                        } 
                                    });
                                }}
                            >
                                {loading ? intl.formatMessage({ id: "loading" }) : intl.formatMessage({ id: "seemore" }) }
                            </button>
                        </div>
                     
                    ) : (
                        <p></p>
                    )}
              
            </div>
            </div>

        
               
           
     );
}
 
export default BlogList;