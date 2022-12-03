

export default function AppBar({title, titleInputOne, titleInputTwo}) {
    return <header>
        <h1> {title} </h1>
        <form>
        <label> {titleInputOne}
            <input           
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
        </label>
        <label> {titleInputTwo}
             <input             
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
        </label>
        <button type="submit">Add Contact</button>
        </form>
    </header>
}