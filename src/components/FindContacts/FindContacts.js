import Search from "antd/lib/input/Search";
import { useDispatch } from "react-redux";
import { changeFilter } from "redux/contacts/filterSlice";

export default function FindContacts() {
  const dispatch = useDispatch();

  return (
    <Search
      placeholder="input contact name"
      allowClear
      size="large"
      onSearch={value => dispatch(changeFilter(value))}
      onChange={e => dispatch(changeFilter(e.target.value))}
      style={{ width: 200 }}
    />
  );
}
