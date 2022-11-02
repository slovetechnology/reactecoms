import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Product = ({item}) => {
  return (
    <div className="col-6 col-md-4 col-lg-2 mb-3">
        <div className="card text-left border position-relative">
            <div className={`position-absolute top-0 end-0 btn ${item.status ? 'btn-primary' : 'btn-warning'} btn-sm py-0 mt-2 me-2 shadow card-stat`}>{item.status ? 'Available' : 'Not in stock'} ({item.qyt})</div>
            <LazyLoadImage
            alt="hello world"
              src={item.img}
              width="100%"
              height={200}
              class='card-img-top'
              effect="blur"
              placeholderSrc={item.img}
            />
          <div className="px-2 py-2">
            <Link className="fs-6 fw-semibold text-dark">{item.title}</Link>
            <div className="">
                <del className='text-muted fw-semibold me-2'>${item.oldp}</del>
                <span className="text-warning fs-5 fw-semibold">${item.newp}</span>
            </div>
            <div className="text-end">
                <i className="far fa-thumbs-up px-2 fa-sm cs-pointer"></i>
                <i className="far fa-heart fa-sm px-2 cs-pointer"></i> 
                <i className="fas fa-shopping-cart px-2 fa-sm cs-pointer"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product
