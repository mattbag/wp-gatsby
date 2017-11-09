import React, { Component } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import TagIcon from "react-icons/lib/fa/tag"



import PostRow from "../components/PostRow"

import { rhythm } from "../utils/typography"

class Home extends Component {
  render() {
    const data = this.props.data
    const meta = data.site.siteMetadata
    
    return (
      <div>
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1 style={{color: `#fff`}}>Latest</h1>

        {data.allWordpressPost.edges.map(({ node }, i) => {
         
          return (
            <PostRow node={node} side={i} key={i}/>
          )
        })}
      </div>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query homePageQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
    
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          type
          better_featured_image{
            source_url
          }
          categories {
            slug
            name
          }
        }
      }
    }
  }
`
