import React, { Component } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import './../utils/grid.css'
import dummy1 from './../img/prod1.jpg'
import dummy2 from './../img/prod2.jpg'

import PostRow from "../components/PostRow"

import { rhythm } from "../utils/typography"

class ProductsPage extends Component {
  render() {
    const data = this.props.data
    const meta = data.site.siteMetadata
    const products = data.allWordpressWpProducts.edges

    return (
      <div>
        <Helmet>
          <title>Products / {meta.title}</title>
          <meta name="description" content={meta.description} />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>


        <h1 style={{color: `#fff`}}>Products</h1>
        <div className="grid">
          {products.map(({ node }, i) => {
            // console.log('------------------------------------');
            // console.log(i);
            let img
            if (node.better_featured_image) {
              img = <img src={node.better_featured_image.source_url} style={{
                maxHeight: `30vmin`,
                margin: `auto`,
                marginBottom: `.5rem`,
                display: `block`
              }} />
            }

            return (
              <div key={i} className="grid-cell">
               <img src={i % 2 == 0 ? dummy1 : dummy2} style={{
                maxHeight: `30vmin`,
                margin: `auto`,
                marginBottom: `.5rem`,
                display: `block`
              }} />
                <Link to={`/${node.slug}`}>
                  <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProductsPage

// Set here the ID of the home page.
export const pageQuery = graphql`
  query ProductsPageQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
    
    allWordpressWpProducts(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          type
          better_featured_image{
            source_url
          }
          categories
        }
      }
    }
  }
`
