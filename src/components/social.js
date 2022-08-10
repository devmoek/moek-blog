import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Social = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            social {
              twitter
              youtube
              medium
              instagram
            }
        }
    }
}
`)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const social = data.site.siteMetadata?.social

    return ( 
        <div className="socialLinks flex">
            <a className="text-blue-600 visited:text-purple-600" href={`https://twitter.com/${social?.twitter || ``}`} target="_blank" rel="noreferrer"> 
            Twitter
            </a> 
            <a className="text-blue-600 visited:text-purple-600 ml-1.5" href={`https://youtube.com/${social?.youtube || ``}`} target="_blank" rel="noreferrer"> 
            YouTube
           </a>
           <a className="text-blue-600 visited:text-purple-600 ml-1.5" href={`https://medium.com/${social?.medium || ``}`} target="_blank" rel="noreferrer">
            Medium
           </a>
           <a className="text-blue-600 visited:text-purple-600 ml-1.5" href={`https://instagram.com/${social?.instagram || ``}`} target="_blank" rel="noreferrer">
            Instagram
           </a>
      </div>
     );
}
 
export default Social;