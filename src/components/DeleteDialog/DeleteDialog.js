import PropTypes from "prop-types";
import { ButtonDialog, Content, Dialog, Title } from "./DeleteDialog.styles";

DeleteDialog.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function DeleteDialog({ onDelete, onClose }) {
  return (
    <Dialog role="dialog">
      <Title className="content">Delete this item?</Title>
      <Content className="content">
        This operation will permanently delete this item and all its
        dependencies. This action <strong>cannot be undone</strong>.
      </Content>
      <ButtonDialog className="secondary" onClick={onClose}>
        Oh no, bring me back
      </ButtonDialog>
      <ButtonDialog className="primary" onClick={onDelete}>
        I understand, delete it
      </ButtonDialog>
    </Dialog>
  );
}
