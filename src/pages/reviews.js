import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import Seo from '../components/seo'
import { Link } from 'gatsby'

const Reviews = ({location}) => {
    return ( 
        <div className='container mx-auto'>
            <Seo title="Reviews Page" />
            <Layout title="Reviews" location={ location }>
                <StaticImage src='../images/first.png' alt='reviews' />
                <h2>These are what people said about my work</h2>
                <StaticImage src='../images/second.png' alt='reviews' />
                <StaticImage className='mt-5' src='../images/third.png' alt='reviews' />
                <StaticImage className='mt-5' src='../images/fourth.png' alt='reviews' />
                <StaticImage className='mt-5' src='../images/fifth.png' alt='reviews' />
                <StaticImage className='mt-5' src='../images/sixth.png' alt='reviews' />
                <p>So if you have an idea I can bring it to fruition. I have a full-time job as a Shopify Developer. You can see my Tech Stack on <Link to='/about'>about page</Link> or if you prefer you can <a href="mailto:info@devmoek.com"> contact me </a> directly to ask some questions.</p>
            </Layout>
        </div>
     );
}
 
export default Reviews;