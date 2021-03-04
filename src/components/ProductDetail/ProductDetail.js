import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';


const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    
    return (
        <div>
            <h1> {productKey} Product Detail Comming Sooooooooooooon</h1>
        </div>
    );
};

export default ProductDetail;