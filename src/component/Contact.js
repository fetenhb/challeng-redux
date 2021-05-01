import React from 'react'
import {deleteContact} from '../js/actions/actions'
import '../component/Contact.css'
import { connect, useDispatch } from "react-redux";

const Contact = ({el}) => {
    const dispatch = useDispatch();


    return (
        <div>
            <ul >
            <li  >
              <div className='company'>
                  <div>
             <p className='item'> <span> Company:</span> {el.company}</p>
             <p className='item'> <span>Name: </span>{el.name}</p>
             <p className='item'><span> Notes:</span> {el.notes}</p>
                 </div>
                 <div style={{alignSelf:'center'}}>
              <a style={{cursor:'pointer'}} onClick={()=> dispatch(deleteContact(el.id)) }>Delete Me</a>
                 </div>
             </div>
            </li>
            </ul>
        </div>
    )
}

  
export default connect()(Contact)
