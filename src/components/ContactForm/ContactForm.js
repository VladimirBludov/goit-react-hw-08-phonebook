import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { UserAddOutlined } from "@ant-design/icons";
import { checkContact } from "redux/contacts/contacts-selectors";
import { useGetContactsQuery } from "redux/contacts/contactsApi";
import {
  FormStyled,
  InputName,
  InputPhone,
  ButtonWrapper,
  ButtonStyled,
  ItemName,
  ItemNumber,
} from "./ContactForm.styles";

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  titleSubmit: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default function ContactForm({
  onClose,
  titleSubmit = "Submit",
  onSubmit,
  isLoading,
  name = "",
  number = "",
}) {
  const { data: contacts } = useGetContactsQuery();
  const [form] = FormStyled.useForm();

  const handleSubmit = async ({ name, number }) => {
    const isContact = checkContact(contacts, name, number);

    if (isContact) {
      toast.error(`${name} is already in contacts.`);
      form.resetFields();
      return;
    }

    await onSubmit({ name, number });
    form.resetFields();
    onClose();
  };

  return (
    <FormStyled form={form} onFinish={handleSubmit}>
      <ItemName label="Name" name="name" initialValue={name}>
        <InputName value={name} />
      </ItemName>
      <ItemNumber label="Number" name="number" initialValue={number}>
        <InputPhone value={number} />
      </ItemNumber>
      <ButtonWrapper>
        <ButtonStyled
          type="primary"
          htmlType="submit"
          icon={<UserAddOutlined />}
          loading={isLoading}
          style={{ marginRight: "10px" }}
        >
          {titleSubmit}
        </ButtonStyled>
        <ButtonStyled type="primary" danger onClick={() => onClose()}>
          Cancel
        </ButtonStyled>
      </ButtonWrapper>
    </FormStyled>
  );
}
