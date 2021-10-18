import React from 'react';

const CovidBlog = (props) => {
    const { tittle, price, image } = props.blog;
    return (
        <div className="col-md-4">
            <div className="card-group  ">

                <div className="card home-blog" >
                    <img className="blog-images" src={image} alt="" />
                    <h3>{tittle}</h3>
                    <p>{price}</p>
                    <button type="submit" className="btn btn-success">Details</button>
                </div>

            </div>
        </div>
    );
};

export default CovidBlog;