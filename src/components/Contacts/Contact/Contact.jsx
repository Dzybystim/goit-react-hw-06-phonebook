import { useDispatch } from "react-redux";
import { deleteContacts } from "../../../redux/contactsSlice"


export default function Contact({contact}) {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteContacts(contact.id))
    }
    
    return <li >
            <p>{contact.text}: {contact.tel}</p>
            <button type="button" onClick={handleClick} > Delete</button>
           </li>
    
}