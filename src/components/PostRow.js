import React, { Component } from "react"
import Link from "gatsby-link"
import { rhythm } from "../utils/typography"
import PostIcons from "../components/PostIcons"

import dummy0 from "./../img/dummy0.jpg";
import dummy2 from "./../img/dummy2.png";

export default class PostRow extends Component {
    render() {

        const node = this.props.node
        const index = this.props.side % 2
        let dummy = index == 1 ? dummy0 : dummy2
        return (
            <div css={{
                marginBottom: rhythm(2),
                display: 'flex',
                alignItems: 'flex-start',
                "@media (max-width: 480px)":{
                    flexWrap: `wrap`,
                    marginBottom: rhythm(1),
                }
            }} key={node.slug}>

                <div css={{
                    padding: rhythm(.5),
                    order: index,
                    boxShadow: `
                    inset 1px 1px 0 0 #fff, inset -1px -1px 0 0 #fff,
                    inset 2px 2px 0 0 #333, inset -2px -2px 0 0 #333,
                    inset 3px 3px 0 0 #fff, inset -3px -3px 0 0 #fff`,
                    "@media (max-width: 480px)":{
                        width: `100%`,
                        marginTop: rhythm(1),
                        order: 0
                    }
                }}>
                    <Link to={`/${node.slug}`}>
                        <img src={dummy} css={{ marginBottom: 0, maxHeight: `90vmin`, maxWidth: `40vw`,
                    "@media (max-width: 480px)":{
                        maxWidth: `100%`,
                        maxHeight: `none`
                    } }} />
                    </Link>
                </div>

                <div css={{
                    padding: rhythm(.5),
                    flexGrow: 1,
                    boxShadow: `inset 0 -1px 0 0 #fff, 
                    inset 0 -2px 0 0 #333, 
                    inset 0 -3px 0 0 #fff`,
                    "@media (max-width: 480px)":{
                        order: 1
                    }
                }}>

                    <Link to={`/${node.slug}`} css={{
                        textDecoration: `none`,
                        ":hover": {
                            textDecoration: `underline`,
                        }
                    }}>
                        <h2 dangerouslySetInnerHTML={{ __html: node.title }}
                        css={{
                            color: `#fff`,
                            "@media (max-width: 600px)":{
                                fontSize: `1rem`
                            }
                        }} />
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <PostIcons node={node} />
                </div>

            </div>
        )
    }
}
