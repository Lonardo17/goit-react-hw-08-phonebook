import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getFilter } from 'redux/selectors';
import { useGetContactsQuery, useDeleteContactsMutation } from 'services/api';
import { FcFullTrash, FcBusinessman } from 'react-icons/fc';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/esm/Button';
import { ListGroup } from 'react-bootstrap';
import s from './ContactList.module.css';

const ContactList = () => {
  const [deleteContact, { isLoading: isDeliting }] =
    useDeleteContactsMutation();
  const { data, isFetching } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase().trim();
  const contacts = data
    ?.map(item => item.name.toLowerCase().includes(normalizedFilter) && item)
    .filter(item => item !== false)
    .sort((a, b) => a.name.localeCompare(b.name));

  const onDeleteContact = (id, name) => {
    deleteContact(id);
    toast.success(`Contact ${name} has been deleted`);
  };

  return (
    <ListGroup className={s.list}>
      {contacts &&
        !isFetching &&
        contacts.map(({ id, name, number }) => (
          <ListGroup.Item className={s.contact} key={id}>
            <span>
              <FcBusinessman />
            </span>
            <p>{name}:</p>
            <p>{number}</p>
            <Button
              type="button"
              className={s.btn}
              onClick={() => onDeleteContact(id, name)}
              disabled={isDeliting}
              variant="outline-danger"
            >
              {isDeliting ? <span>Deliting...</span> : <span>Delete</span>}
              <FcFullTrash className={s.icon} />
            </Button>
          </ListGroup.Item>
        ))}
      {isFetching === true && <Loader />}
    </ListGroup>
  );
};

export default ContactList;