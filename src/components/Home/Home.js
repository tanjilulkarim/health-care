import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BlogHome from '../BlogHome/BlogHome';

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
            </div>

        </div>

    );
};

export default Home;