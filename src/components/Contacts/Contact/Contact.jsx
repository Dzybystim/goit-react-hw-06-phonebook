
export default function Contact({visibleContacts}) {
    
    return visibleContacts.map(contact => {
        return <li key={contact.id}>
            <p>{contact.text}: {contact.tel}</p>
            <button type="button">Delete</button>
        </li>
    })
}