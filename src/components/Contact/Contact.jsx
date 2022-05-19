import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';

import { ContactStyle, ButtonStyle } from './ContactStyle.styled';
import { useDeleteContactMutation } from '../../redux/contactsRTKQ';
import { useEffect } from 'react';

export function Contact({ number, name, id }) {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast(`Contact named ${name} deleted`);
    }
  }, [isSuccess, name]);

  return (
    <ContactStyle id={id}>
      <ButtonStyle
        disabled={isLoading}
        type="button"
        onClick={() => deleteContact(id)}>
        X
      </ButtonStyle>
      {isLoading ? (
        <Loader title="deletion..." color="red" />
      ) : (
        <p className="text">{`${name}: ${number}`}</p>
      )}
    </ContactStyle>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
