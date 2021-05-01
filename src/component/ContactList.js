import React from 'react'
import Contact from '../component/Contact'
import { connect, useSelector } from 'react-redux';

const ContactList = ({contact}) => {
 console.log({contact})

    return (
        <div>
           <div>

          {contact.map((el,i)=> {
            return(<Contact el={el} key={i} />)
            
          })}
       </div> 
        </div>
    )
};
const mapStateToProps = (state) => {
  console.log(state);

  return {
    contact: state.contacts,
  };
};
  
export default connect(mapStateToProps)(ContactList)
