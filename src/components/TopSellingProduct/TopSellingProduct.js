import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import TopBlog from '../TopBlog/TopBlog';

const TopSellingProduct = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./topProduct.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div>
            <div className="container">
                <h2 className="tittle">Top Selling Product</h2>
                <div className="row gy-5 mb-3">
                    {
                        blogs.map(blog => <TopBlog
                            key={blog.id}
                            blog={blog}
                        ></TopBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopSellingProduct;