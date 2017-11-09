import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

import { rhythm, scale } from "../utils/typography"
import './master.css'
const containerStyle = {
  maxWidth: `90%`,
  margin: `0 auto`,
  padding: rhythm(.2 / 5),
}
const _nav = [
  { page: 'Makeup', link: '/makeup' },
  { page: 'Hair', link: '/hair' },
  { page: 'Pople', link: '/people' },
  { page: 'Beauty Talk', link: '/beauty-talk' },
  { page: 'Lifestyle', link: '/lifestyle' },
  { page: 'Top 10', link: '/top10' },
  { page: 'Products', link: '/products' },
]

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <div
          css={{
            background: `#333`,
            marginBottom: rhythm(1),
            padding: `${rhythm(1)} 0px`,
            "@media screen and (min-width: 500px)": {
              padding: `${rhythm(2)} 0px`,
            },
          }}
        >
          <div css={containerStyle}>
            <h3
              css={{
                margin: 0,
                fontSize: scale(1).fontSize,
                lineHeight: 1,
                "@media screen and (min-width: 500px)": {
                  fontSize: scale(1.2).fontSize,
                  lineHeight: 1,
                },
              }}
            >
              <Link
                css={{
                  color: `rgb(224,203,144)`,
                  textDecoration: `none`,
                  ":hover": {
                    color: `rgb(224,203,144)`,
                    textDecoration: `none`,
                  },
                }}
                to="/"
              >
                {this.props.data.site.siteMetadata.title}
              </Link>

            </h3>
            <h4>{this.props.data.site.siteMetadata.description}</h4>
          </div>
        </div>
        <ul css={{
          padding: 0,
          margin: `0 0 .5rem 0`,
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'space-around',
          "@media (max-width: 480px)":{
          display:`none`
        }
        }}>
          {_nav.map(item => {
            return (
              <li key={item.page}>
                <Link to={item.link} css={{
                  textDecoration: `none`,
                  ":hover": {
                    color: `rgb(224,203,144)`,
                    textDecoration: `underline`,
                  },
                }}>
                  {item.page}
                </Link>
              </li>
            )
          })}

        </ul>
        <hr />
        <div css={containerStyle}>{this.props.children()}</div>
        <div css={containerStyle}>
        
        <footer css={{
            marginTop: `2rem`,
            background: `#333`,
            padding: `${rhythm(1)} 0px`,
            "@media screen and (min-width: 500px)": {
              padding: `${rhythm(2)} 0px`,
            },
          }}
        >
        <Link to="/">
        <h6 style={{color: `white`, textAlign: `center`, marginBottom:0}}>{this.props.data.site.siteMetadata.title}</h6>
        </Link>
        </footer>
          </div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
}

export default DefaultLayout

export const pageQuery = graphql`
query layoutQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}`