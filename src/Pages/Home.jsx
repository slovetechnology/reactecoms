import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/img3.png"

const Home = () => {
  return (
    <div>
      <div className="header position-relative vh-95">
        <div className="border-bottom py-2 mb-2 position-absolute top-0 left-0 w-100">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="fs-4 fw-bold text-dark">Slove<span className="text-warning">Way</span> </div>
                    <div className="d-none d-lg-flex">
                        <div className=""><Link to="#" className="links text-dark">blog</Link></div>
                        <div className=""><Link to="#" className="links text-dark">about</Link></div>
                        <div className="linkproduct"><Link to="#" className="links text-dark text-capitalize">products <i className="fa-solid fa-chevron-down"></i></Link>
                            <div className="product_dropdown bg-white shadow rounded">
                                <div className="fs-5 text-muted border-bottom px-4 py-3">Start your day with a great choice</div>
                                <div className="row px-4">
                                    <div className="col-lg-4">
                                        <div className="px-2 py-2">furnitures</div>
                                        <div className="px-2 py-2">kitchen utensils</div>
                                        <div className="px-2 py-2">electronics</div>
                                        <div className="px-2 py-2">vehicles</div>
                                        <div className="px-2 py-2">gadgets</div>
                                        <div className="px-2 py-2">reservations</div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="px-2 py-2 text-end">gloceries</div>
                                        <div className="px-2 py-2 text-end">foams</div>
                                        <div className="px-2 py-2 text-end">laptops</div>
                                        <div className="px-2 py-2 text-end">accessories</div>
                                        <div className="px-2 py-2 text-end">fashion and textiles</div>
                                        <div className="px-2 py-2 text-end">arts and crafts</div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="px-2 py-2 text-end">industrials</div>
                                        <div className="px-2 py-2 text-end">electricals</div>
                                        <div className="px-2 py-2 text-end">books and library materials</div>
                                        <div className="px-2 py-2 text-end">plastics</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=""><Link to="#" className="links text-dark">contact</Link></div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                        <div className="position-relative"> <i className="far fa-heart fa-lg"></i> <div className="badge position-absolute top-0 right-0 bg-danger rounded-pill">0</div> </div>
                        <div className="position-relative mx-3"> <i className="fas fa-shopping-cart fa-lg"></i><div className="badge position-absolute top-0 right-0 bg-warning rounded-pill">0</div> </div>
                        <div className="me-3 d-lg-none"> <i className="fas fa-bars fa-lg fa-fw"></i> </div>
                    </div>
                </div>
            </div>
        </div>
        <br /> <br />
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="display-5 fw-semibold mt-5">Let's Make your Day</div>
                    <p className="text-secondary mt-3 pe-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odit nesciunt ipsam maiores voluptatem? Fuga</p>
                </div>
                <div className="col-lg-6">
                    <img src={img1} alt="" className="hdimg w-100" />
                </div>
            </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 left-0"> <Link to="/products" className="btn btn-success rounded-pill px-5 btn-lg ms-4 mb-5 fs-2 text-capitalize hdbtn">get started <i className="fas fa-shopping-cart fa-xs ms-4"></i> </Link> </div>
    </div>
  )
}

export default Home
