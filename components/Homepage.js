import React from 'react'
import { Card,Button } from 'react-bootstrap'
function homepage() {
  return (
    <div className='main'>
      <div className='title'>
        <h1>Hi Alex</h1>
        <button type="submit">LOGOUT</button>
        </div>
     <div className='content'>
      <h1>Name your Organisation</h1>
      <input type="text" placeholder='enter your organisation'></input>
     </div>
    
    <div className='card1'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      
    </Card>
  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        
        <Card.Text>
          Construction
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        
        <Card.Text>
          Education
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Consultancy
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <div className='card2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        
        <Card.Text>
          Logistics
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        
        <Card.Text>
          Logistics
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        
        <Card.Text>
          Manufacturing
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Tourism
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        
        <Card.Text>
          It
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default homepage