import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialContacts = [

  ]

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
        addContact: {reducer(state, action) {return [ ...state, action.payload]},
                     prepare(text, tel) {
                        return {
                            payload: {
                              id: nanoid(),
                              text: text,
                              tel: tel
                            }}}
                    },
        deleteContacts(state, action){
            return  state.filter(contact => contact.id !== action.payload)
        }     
    }
})

export const {addContact, deleteContacts} = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer