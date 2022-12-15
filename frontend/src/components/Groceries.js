import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Groceries() {
  return (
    <>
    <Container>
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Welcome to Groceries section</h1>
    <p className="lead">We provide all the needed help by old people at one place</p>
  </div>
</div>
<div className="card">
  <div className="card-header">
    Types
  </div>
  <div className="card-body">
    <h5 className="card-title">Groceries</h5>
    <p className="card-text">Includes Pulses,Oil,Household items,etc.</p>
    <Link to="/Grocerypro" className="btn btn-primary">Book</Link>
  </div>
</div>

    </Container>
    </>
  )
}
