import React from 'react';
import { useHistory, useParams } from 'react-router';
import './BlogHome.css';

const BlogHome = (props) => {
    const { tittle, description, image, id } = props.blog;
    // const { id } = useParams();
    const history = useHistory();
    const abc = () => {
        history.push(`/ProductDetails/${id}`)
    }

    return (

        <div className="col-12 col-md-4">
            <div className="card-group  ">

                <div className="card home-blog" >
                    <img className="blog-images" src={image} alt="" />
                    <h3>{tittle}</h3>
                    <p>{description}</p>
                    <button onClick={abc} type="submit" className="btn btn-success">Details</button>
                </div>

            </div>
        </div>

    );
};

export default BlogHome;