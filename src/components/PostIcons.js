import React from "react"
import ClockIcon from "react-icons/lib/fa/clock-o"
import TagIcon from "react-icons/lib/fa/tag"
import OpenIcon from "react-icons/lib/fa/folder-open"
import Link from "gatsby-link"
import { rhythm } from "../utils/typography"

export default ({ node, className = `` }) => (
  <div css={{ marginTop: rhythm(-1 / 2) }} className={className}>
    {/* <span style={{ marginRight: rhythm(1) }}>
      <ClockIcon size={14} style={{ position: `relative`, bottom: 1 }} />
      {` `}
      {node.date}
    </span> */}
    {node.categories &&
      node.categories.map(category => (
        <Link to={category.slug} style={{ marginRight: rhythm(1) }} key={category.name}>
          <TagIcon size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {category.name}
        </Link>
      ))}
    
  </div>
)

export const query = graphql`
  fragment PostIcons on wordpress__POST {
    date(formatString: "MMMM DD, YYYY")
    categories {
      name
      slug
    }
  }
`
