import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function Grocerypro() {
  return (
    <>
    <Container>
    <div>
      <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Sunflower Oil</Card.Title>
    
    <Card.Text>
      Rs.120/litre
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Groundnut Oil</Card.Title>
    
    <Card.Text>
      Rs.130/litre
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Moog Dal</Card.Title>
    <Card.Text>
      Rs.120/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Sugar</Card.Title>
    
    <Card.Text>
      Rs.60/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Salt</Card.Title>
    
    <Card.Text>
      Rs.80/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
    </div>
    </Container>
    </>
  )
}