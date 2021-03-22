import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import{Form,Button}from 'react-bootstrap'
import './ContactAddEdit.css'
import { addContact} from '../../Js/Action/actionsContact'


const ContactAddEdit = () => {
    const isEdit = useSelector(state => state.contactReducer.isEdit)
    const dispatch = useDispatch()
    return (
        // <div >
            <div className="formulaire" >
                <Form>
                    <Form.Group >
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Name" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Phone" />
                        
                    </Form.Group>

                {
                    isEdit?
                    <Button>  Edit card </Button>
                    :
                    <Button
                    onClick={()=>dispatch(addContact({name:"Bassssem", email:"basseeeem@gmail.com", phone:1234698}))}
                    >  Add Contact </Button>
                }
                </Form>

                
            </div>
        // </div>
    )
}

export default ContactAddEdit
