import React from 'react';
import './TopBlog.css';

const TopBlog = (props) => {
    const { tittle, price, image } = props.blog;
    return (
        <div className="col-12 col-md-4">
            <div className="card-group  ">

                <div className="card top-blog" >
                    <img className="blog-images" src={image} alt="" />
                    <h3>{tittle}</h3>
                    <p>$ {price}</p>
                    <button type="submit" className="btn btn-success">Add to cart</button>
                </div>

            </div>
        </div>
    );
};

export default TopBlog;