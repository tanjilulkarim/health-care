import React, { useEffect, useState } from 'react';
import CovidBlog from '../CovidBlog/CovidBlog';

const Covid = (props) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./Covid-19.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div>
            <div className="container">
                <h2 className="tittle">Covid-19 emergency Products</h2>
                <div className="row gy-5 mb-3">
                    {
                        blogs.map(blog => <CovidBlog
                            key={blog.id}
                            blog={blog}
                        ></CovidBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Covid;