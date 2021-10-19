import React from 'react';
import './BlogHome.css';

const BlogHome = (props) => {
    const { tittle, description, image } = props.blog;

    return (

        <div className="col-12 col-md-4">
            <div className="card-group  ">

                <div className="card home-blog" >
                    <img className="blog-images" src={image} alt="" />
                    <h3>{tittle}</h3>
                    <p>{description}</p>
                    <button type="submit" className="btn btn-success">Details</button>
                </div>

            </div>
        </div>

    );
};

export default BlogHome;