import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Components/Product'
import { Goods } from '../Storage/Goods'

const Products = () => {
  return (
    <div>
        <div className="">
            <div className="shadow border-bottom py-3">
                <div className="d-flex align-items-center justify-content-between container-fluid">
                    <div className="w-50 d-none d-lg-block">
                        <form className=''>
                            <div className="form-group">
                                <input type="text" name="search" className="form-control" placeholder='Search products here...' />
                            </div>
                        </form>
                    </div>
                    <div className="pe-4 d-none d-lg-flex">
                        <Link to="/" className='px-3 py-2 text-dark fw-semibold'>Home</Link>
                        <Link className='px-3 py-2 text-dark fw-semibold cs-pointer linkproduct'>Account </Link>
                        <Link to="" className='px-3 py-2 text-dark fw-semibold'>Blog</Link>
                        <Link to="" className='px-3 py-2 text-dark fw-semibold'>Contact</Link>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <div className="d-lg-none"> <i className="fas fa-search fa-lg fa-fw"></i> </div>
                        <div className="position-relative"> <i className="far fa-heart fa-lg"></i> <div className="badge position-absolute top-0 right-0 bg-danger rounded-pill">0</div> </div>
                        <div className="position-relative mx-3"> <i className="fas fa-shopping-cart fa-lg"></i><div className="badge position-absolute top-0 right-0 bg-warning rounded-pill">0</div> </div>
                        <div className="me-3 d-lg-none"> <i className="fas fa-bars fa-lg fa-fw"></i> </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid my-5">
            <div className="row">
                {Goods.map((product, index) => (
                    <Product key={index} item={product} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products
