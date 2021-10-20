import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BlogHome from '../BlogHome/BlogHome';
import Contact from '../Contact/Contact';
import Covid from '../Covid/Covid';

import TopSellingProduct from '../TopSellingProduct/TopSellingProduct';

const Home = (props) => {
    const [blogs, setBlogs] = useState([]);



    useEffect(() => {
        fetch('./Home.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div>
            <Banner></Banner>

            <div className="container">
                <h2 className="tittle">Our Product Catagory </h2>
                <hr />
                <div className="row gy-5 mb-3">
                    {
                        blogs.map(blog => <BlogHome
                            key={blog.id}
                            blog={blog}
                        ></BlogHome>)
                    }
                </div>
                <TopSellingProduct></TopSellingProduct>
                <Covid></Covid>
                <About></About>
                <Contact></Contact>
            </div>

        </div>

    );
};

export default Home;