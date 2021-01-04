import { ProductInfo, AdminName, AdminText } from "./style";
import PropTypes from "prop-types";

export default function QuestionText({ title, name, value, handleChange }) {
  return (
    <ProductInfo>
      <AdminName>{title}</AdminName>
      <AdminText
        rows="10"
        placeholder={title}
        name={name}
        value={value}
        onChange={handleChange}
      ></AdminText>
    </ProductInfo>
  );
}

QuestionText.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
