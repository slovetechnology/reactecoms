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
                    <div className="d-flex pe-4">
                        <Link to="/" className='px-3 py-2 text-dark fw-semibold'>Home</Link>
                        <div className='px-3 py-2 text-dark fw-semibold cs-pointer linkproduct'>Account
                        
                        <div className="product_dropdown bg-white shadow rounded">
                                <div className="">
                                    <Link to="/dashboard"> <div className="border-bottom text-dark px-4 py-2"> <i className="fas fa-user-alt fa-sm fa-fw"></i> Dashboard</div> </Link>
                                    <Link to="/register"> <div className="border-bottom text-dark px-4 py-2"> <i className="fas fa-door-open fa-sm fa-fw"></i> Create Account</div> </Link>
                                    <Link to="/login"> <div className="border-bottom text-dark px-4 py-2"> <i className="fas fa-sign-in-alt fa-sm fa-fw"></i> Login</div> </Link>
                                    <Link to=""> <div className="text-dark px-4 py-2"> <i className="fas fa-power-off fa-sm fa-fw"></i> Logout</div> </Link>
                                </div>
                            </div>
                        </div>
                        <Link to="" className='px-3 py-2 text-dark fw-semibold'>Blog</Link>
                        <Link to="" className='px-3 py-2 text-dark fw-semibold'>Contact</Link>
                        <div className="d-flex align-items-center gap-4">
                            <div className="d-lg-none"> <i className="fas fa-search fa-lg fa-fw"></i> </div>
                            <div className="position-relative"> <i className="far fa-heart fa-lg"></i> <div className="badge position-absolute top-0 right-0 bg-danger rounded-pill">0</div> </div>
                            <div className="position-relative mx-3"> <i className="fas fa-shopping-cart fa-lg"></i><div className="badge position-absolute top-0 right-0 bg-warning rounded-pill">0</div> </div>
                            <div className="me-3 d-lg-none"> <i className="fas fa-bars fa-lg fa-fw"></i> </div>
                        </div>
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
