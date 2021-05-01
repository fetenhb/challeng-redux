import {
    delete_contact,
    add_contact,
  } from '../constants/actionsTypes';
const initialState = {
    contacts: [
        {
            id: 0,
            company:"Some company",
            name: "Jhon Smith",
            notes:"Good Guy",
          },
          {
            id: 1,
            company:"Some other company ",
            name: "Jhon Guns",
            notes: "bad Guy",
        },
        {
            id: 2,
            company:"New Note",
              name: "Mr Man",
              notes:"Stuff Stuff Stuff",
          },
    ],
  };

const reducers = (state = initialState , action) =>{
    switch (action.type) {
        case delete_contact:
            return {
                ...state,
                contacts: state.contacts.filter((el, i) => el.id !== action.payload),
              };
        case add_contact:
            return { 
              ...state, 
              contacts: state.contacts.concat(action.payload),
              };   
    
        default:
            return state;
           
    }
}

export default reducers;