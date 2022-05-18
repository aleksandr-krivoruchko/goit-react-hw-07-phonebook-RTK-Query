import PropTypes from 'prop-types';
import { ContactStyle, ButtonStyle } from './ContactStyle.styled';
import { useDeleteContactMutation, useGetContactByIdQuery, useUpdateContactMutation } from '../../redux/contactsRTKQ';

export function Contact({ number, name, id }) {
    const [deleteContact, result] = useDeleteContactMutation();
  const { data: updateContactById } = useGetContactByIdQuery(id);
  const [updateContact, res] = useUpdateContactMutation();


  const handleUpdateContact = (id) => {
    console.log(id);
  }

  return (
    <ContactStyle id={id} >
      <ButtonStyle disabled={result.isLoading} type="button" onClick={() => deleteContact(id)}>
        X
      </ButtonStyle>
      <p className='text'>{`${name}: ${number}`}</p>
            <ButtonStyle type="button" onClick={() => handleUpdateContact(id)}>
        E
      </ButtonStyle>

    </ContactStyle>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
