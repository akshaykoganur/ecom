import React from 'react'
import { Container } from 'react-bootstrap'
import { Button,Card } from 'react-bootstrap'

export default function Milk() {
  return (
    <>
       <Container>
       <div>
      <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Milk</Card.Title>
    
    <Card.Text>
      Rs.30/litre
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Butter</Card.Title>
    
    <Card.Text>
      Rs.130/kg
    </Card.Text>
    <Button variant="primary">Book</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Cheese</Card.Title>
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
</div>
       </Container>
    </>
  )
}
