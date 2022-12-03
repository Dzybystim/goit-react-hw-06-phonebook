import { useSelector } from "react-redux";
import {getContacts, getFilter} from "../../redux/selectors"

import Contact from "./Contact/Contact"

const getVisibleContacts = (contacts, filterNormalize) => {
   return contacts.filter(contact => contact.text.toLowerCase().includes(filterNormalize))
}


export default function Contacts() {

const contacts = useSelector(getContacts)

const filter = useSelector(getFilter)
const normalize = filter.toLowerCase()


const visibleContacts = getVisibleContacts(contacts, normalize)


    return <section>
        <ul>
        <Contact visibleContacts={visibleContacts} />
        </ul>
    </section>
}