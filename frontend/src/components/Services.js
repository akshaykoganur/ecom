import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Services() {
  return (
    <>
    <Container>
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Welcome to Services section</h1>
    <p className="lead">We provide all the needed help by old people at one place</p>
  </div>
</div>
    <div className="card">
  <div className="card-header">
    Services
  </div>
  <div className="card-body">
    <h5 className="card-title">Groceries Delivery</h5>
    <p className="card-text">Fresh vegetables and groceries will be delivered at home at minimal cost.</p>
    <Link to="/gdelivery" className="btn btn-primary">Book</Link>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">House Cleaning</h5>
    <p className="card-text">Proper cleaning of house with a vaccum cleaner.</p>
    <a href="/" className="btn btn-primary">Book</a>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Health Checkup</h5>
    <p className="card-text">Health checkup will be conducted at home on demand.</p>
    <a href="/" className="btn btn-primary">Book</a>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Mixture</h5>
    <p className="card-text">Multiple services as per choice will be provided at discounted price.</p>
    <Link to="/" className="btn btn-primary">Book</Link>
  </div>
  
</div>
</Container>
</>
  )
}
