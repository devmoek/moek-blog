import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

export default function About({data, title, location}) {

    return (
        <div className='container mx-auto'>
            <Seo title='About Page' />
            <Layout title="moek's blog" location={location}>
                <h1>About</h1>
                <h2>Who is moek?</h2>
                <p>moek is a guy with a passion for coding and learning new technologies to improve his web dev skills.</p>
                <p>moek is a dude who wants to change the world</p>
                <p>moek is a person who loves what he do</p>
                <p>moek is a front-end developer</p>
                <p>moek is a professional</p>
                <p>moek is a freelancer</p>

                <p>Okay, with no joke, moek is me. My name is Michael Myers. I'm 21 years old. I love coding, sport, gaming, travel and a lot of things.</p>
                <p> I started my coding journey in 2020. In those times I realized what I want to do in my life - Web Development. I'm in love in front-end and every day I learn new things that are super excited for me. </p>
                
                <h2>Tech Stack</h2>
                <p>Currently, I'm working with Shopify and learning technologies in this major to be able to work with Shopify custom Storefronts. This is why my stack is: HTML, CSS, JS, Shopify, liquid, JSON, jQuery. </p>
                
            </Layout>    
        </div>
    )
}
