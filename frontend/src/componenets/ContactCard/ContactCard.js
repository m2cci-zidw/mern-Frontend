import React from 'react'
import{Card,Button}from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact, ToggleTrue } from '../../Js/Action/actionsContact'

const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
               
                <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Title>{contact.phone}</Card.Title>
                    <Card.Title>{contact.email}</Card.Title>
                    
                    

                    <Button variant="danger"
                        onClick={()=>dispatch(deleteContact(contact._id))}>  delete contact </Button>
                        <Link to="/eddit-contact">
                            <Button variant="primary"
                            onClick={()=>dispatch(ToggleTrue())}>  edit contact </Button>
                        </Link>

                </Card.Body>
            </Card>

            
            
        </div>
    )
}

export default ContactCard
