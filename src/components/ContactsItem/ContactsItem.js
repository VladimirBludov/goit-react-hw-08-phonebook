import { useState } from "react";
import PropTypes from "prop-types";
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from "redux/contacts/contactsApi";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  ActionsContainer,
  AvatarStyled,
  ButtonStyled,
  Container,
  LinkPhone,
  Name,
  Number,
} from "./ContactsItem.styles";
import ContactForm from "components/ContactForm";
import Modal from "components/Modal";
import DeleteDialog from "components/DeleteDialog";
import { Tooltip } from "antd";
import { toast } from "react-toastify";

export default function ContactsItem({ id, name, number }) {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [deleteContact, { isLoading: isLoadingDel }] =
    useDeleteContactMutation();
  const [updateContact, { isLoading: isLoadingEdit }] =
    useUpdateContactMutation();

  const handleOnDelete = () => {
    setShowModalDelete(false);
    deleteContact(id)
      .unwrap()
      .catch(() => {
        toast.error("Sorry, the server is temporarily unavailable.");
      });
  };

  return (
    <>
      <Container>
        <LinkPhone href={`tel:${number}`}>
          <AvatarStyled />
          <Name>{name}</Name>
          <Number href={`tel:${number}`}>{number}</Number>
        </LinkPhone>
        <ActionsContainer>
          <Tooltip title="Edit">
            <ButtonStyled
              icon={<EditOutlined style={{ fontSize: "20px" }} />}
              loading={isLoadingEdit}
              onClick={() => setShowModalEdit(true)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <ButtonStyled
              icon={<DeleteOutlined style={{ fontSize: "20px" }} />}
              loading={isLoadingDel}
              onClick={() => setShowModalDelete(true)}
            />
          </Tooltip>
        </ActionsContainer>
      </Container>
      {showModalEdit && (
        <Modal title="Edit contact" onClose={() => setShowModalEdit(false)}>
          <ContactForm
            onClose={() => setShowModalEdit(false)}
            titleSubmit="Edit"
            onSubmit={contact => {
              updateContact({ id, contact });
            }}
            isLoading={isLoadingEdit}
            name={name}
            number={number}
          />
        </Modal>
      )}
      {showModalDelete && (
        <Modal onClose={() => setShowModalDelete(false)}>
          <DeleteDialog
            onDelete={handleOnDelete}
            onClose={() => setShowModalDelete(false)}
          />
        </Modal>
      )}
    </>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
