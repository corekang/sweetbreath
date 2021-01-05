import { ProductInfo, AdminName, AdminInput } from "./style";
import PropTypes from "prop-types";

export default function Question({ name, title, value, handleChange }) {
  return (
    <ProductInfo>
      <AdminName>{title}</AdminName>
      <AdminInput
        placeholder={title}
        name={name}
        value={value}
        onChange={handleChange}
      ></AdminInput>
    </ProductInfo>
  );
}

Question.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
};
