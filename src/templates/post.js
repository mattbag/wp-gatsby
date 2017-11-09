import React, { Component } from "react"
import PropTypes from "prop-types"
import PostIcons from "../components/PostIcons"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <div>
        <h1 style={{color: `#fff`}} dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        {/* <Img resolutions={post.better_featured_image.source_url} /> */}
        <img src={post.better_featured_image.source_url}/>
      </div>
    )
  }
}
//<img src={post.image.sizes.thumbnail} />

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      better_featured_image{
        source_url
      }
      categories {
        slug
        name
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
