import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Social from '../components/social'

export default function About({location}) {

    return (
        <div className='container mx-auto'>
            <Seo title='About Page' />
            <Layout title="moek's blog" location={location}>
                <h2>Who Am I</h2>
                <p>Name's Michael Myers, 21 y.o. A Front-end Developer & Shopify Developer with over 3 years of experience. Currently working in a small agency. My job is to customize Shopify themes like to create new sections, blocks, templates, and so on. </p>
                <p>In my free time I like to shoot videos on YouTube. I have three YouTube channels. But actively posting on one because don't have enough time. I have a blog, I love sharing information and help people. Also I love sport. BMX, skateboard, running, cycling are my passion.</p>
                
                <h2>Tech Stack</h2>
                <p>HTML, CSS, JS, Shopify, liquid, JSON, jQuery. </p>

                <h2>My Social Media</h2>
                
                <Social />
            </Layout>    
        </div>
    )
}
