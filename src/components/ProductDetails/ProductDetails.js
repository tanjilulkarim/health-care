import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const ProductDetails = () => {
    const { id } = useParams();
    const [departments, setDepartments] = useState([]);
    console.log(id);


    useEffect(() => {
        fetch('./Home.JSON')
            .then(result => result.json())
            .then(data => console.log(data))
    }, [])
    const department = departments?.find(service => service.im == id);
    console.log(department);
    return (
        <div>
            <h1>Our Product Catagory Details</h1>
            <p>Details {department?.tittle}</p>




        </div>
    );
};

export default ProductDetails;