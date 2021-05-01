import React, {useState} from 'react'
import { connect, useDispatch,  useSelector } from "react-redux";
import {add} from '../js/actions/actions'

import './AddContact.css'
const AddContact = (props) => {
    const [company, setCompany] = useState('');
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    let  id = contacts.length + 1;

    const addNewContact = (e) => {
        e.preventDefault();
        props.add({
          id: id,
          company: company,
          name: name,
          notes: notes,
        });
        setCompany("");
        setName("");
        setNotes("");
      };
    return (
        <div>
             <form>
                 <p className='item'> <span>Company :</span></p>
                 <input 
                   type='text'
                   required
                   onChange={(e) => setCompany(e.target.value)}
                   value={company}/>
                 <p className='item'> <span>Name :</span></p>
                 <input 
                   type='text'
                   required
                   onChange={(e) => setName(e.target.value)}
                   value={name}/>
                   <p className='item'> <span>Notes :</span></p>
                 <textarea 
                   type='text'
                   required
                   onChange={(e) => setNotes(e.target.value)}
                   value={notes}/>
                 <br />
                 {console.log(notes)}
                 <button className='add-contact'  onClick={addNewContact } style={{cursor:'pointer'}}> 
                   <p className='item' style={{fontSize:'16px'}}> 
                      <span>Add Contact </span>
                    </p>
                 </button>
             </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      add: (x) => dispatch(add(x)),
    };
  };
export default connect(null,mapDispatchToProps) (AddContact)
