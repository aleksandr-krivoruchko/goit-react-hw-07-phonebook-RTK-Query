import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';

import { ContactStyle, ButtonStyle } from './ContactStyle.styled';
import { useDeleteContactMutation, useGetContactByIdQuery, useUpdateContactMutation } from '../../redux/contactsRTKQ';

export function Contact({ number, name, id }) {
    const [deleteContact, {isLoading, isSuccess}] = useDeleteContactMutation();
  // const { data: updateContactById } = useGetContactByIdQuery(id);
  // const [updateContact, res] = useUpdateContactMutation();
console.log(isSuccess);
  // if(isSuccess) {toast(`Contact named ${name} deleted`)}

  const handleUpdateContact = (id) => {
    console.log(id);
  }

  return (
    <ContactStyle id={id} >
      <ButtonStyle disabled={isLoading} type="button" onClick={() => deleteContact(id)}>
        X
      </ButtonStyle>
      {isLoading ? <Loader title="deletion..." color='red'/> : <p className='text'>{`${name}: ${number}`}</p>}
            {/* <ButtonStyle type="button" onClick={() => handleUpdateContact(id)}>
        E
      </ButtonStyle> */}

    </ContactStyle>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
