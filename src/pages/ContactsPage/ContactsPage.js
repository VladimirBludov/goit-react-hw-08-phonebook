import { Tooltip } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import ContactForm from "components/ContactForm";
import Contacts from "components/Contacts";
import Modal from "components/Modal";
import Section from "components/Section";
import { useState } from "react";
import { ButtonContainer, ButtonStyled, Label } from "./ContactsPage.styles";
import { useAddContactMutation } from "redux/contacts/contactsApi";
import Container from "components/Container";

export default function ContactsPage() {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [addContact, { isLoading }] = useAddContactMutation();

  return (
    <Container>
      <Section title="Contacts">
        <ButtonContainer>
          <Label>
            Create new contact
            <Tooltip title="Create new contact">
              <ButtonStyled
                type="primary"
                shape="circle"
                icon={<UserAddOutlined style={{ fontSize: "24px" }} />}
                onClick={() => setShowModalAdd(true)}
              ></ButtonStyled>
            </Tooltip>
          </Label>
        </ButtonContainer>
        <Contacts />
      </Section>
      {showModalAdd && (
        <Modal
          title="Create new contact"
          onClose={() => setShowModalAdd(false)}
        >
          <ContactForm
            onClose={() => setShowModalAdd(false)}
            titleSubmit="Add contact"
            onSubmit={addContact}
            isLoading={isLoading}
          />
        </Modal>
      )}
    </Container>
  );
}
