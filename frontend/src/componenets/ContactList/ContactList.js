import React, {useEffect} from 'react'
import {useDispatch,useSelector } from 'react-redux'
import { getContacts } from '../../Js/Action/actionsContact'
import ContactCard from '../ContactCard/ContactCard'

const ContactList = () => {
    const contacts = useSelector(state => state.contactReducer.contacts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
        
    }, [dispatch])
    return (
        <div>
            <div>
                {contacts.map (contact=> <ContactCard  contact={contact} key={contact._id} />)}
            </div>
           
            
        </div>
    )
}

export default ContactList
