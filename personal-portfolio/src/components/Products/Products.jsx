import React from 'react';
import './Products.css';

const Products = ({ title, img, desc, link, url }) => {
  return (
    <div className='product-card'>
      <img src={img} alt={title} className='product-image' />
      <div className='product-details'>
        <h2 className='product-title'>{title}</h2>
        <p className='product-description'>{desc}</p>
        <h2 className='product-link'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {link}
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Products;
