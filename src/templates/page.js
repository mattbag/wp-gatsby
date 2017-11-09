import React, { Component } from "react"
import PropTypes from "prop-types"
import PostIcons from "../components/PostIcons"

import { rhythm } from "../utils/typography"

import Helmet from "react-helmet"

class PageTemplate extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage
// console.log('------------------------------------');
// console.log(siteMetadata);
// console.log('------------------------------------');
    return (
      <div>
         <Helmet>
          <title>{`${currentPage.title} - ${siteMetadata.title}`}</title>
          <meta name="description" content={siteMetadata.description} />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        {/* <PostIcons node={currentPage} css={{ marginBottom: rhythm(1 / 2) }} /> */}
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
