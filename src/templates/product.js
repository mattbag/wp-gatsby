import React, { Component } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet";
import { rhythm } from "../utils/typography"

class ProductTemplate extends Component {
  
  render() {
    const product = this.props.data.wordpressWpProducts
    const meta = this.props.data.site.siteMetadata
    let src = product.better_featured_image != null ? product.better_featured_image.source_url : ''
    return (
      <div>
         <Helmet>
          <title>{product.title} / {meta.title}</title>
          <meta name="description" content={meta.description} />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <h1 style={{color: `#fff`}} dangerouslySetInnerHTML={{ __html:  product.title}} />
        <div dangerouslySetInnerHTML={{ __html: product.content }} />
        <img src={src} style={{maxHeight: `90vmin`,display:`block`,margin: `auto`}}/>
      </div>
    )
  }
}


ProductTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default ProductTemplate

export const pageQuery = graphql`
  query currentProductQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    wordpressWpProducts(id: { eq: $id }) {
      title
      content
      better_featured_image{
        source_url
      }
      categories
    }
  }
`
