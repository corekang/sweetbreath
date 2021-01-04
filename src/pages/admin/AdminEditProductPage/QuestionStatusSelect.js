import { ProductInfo, AdminName, Selector } from "./style";
import PropTypes from "prop-types";

export default function QuestionStatusSelect({
  name,
  title,
  value,
  handleChange,
}) {
  return (
    <ProductInfo>
      <AdminName>{title}</AdminName>
      <Selector
        placeholder={title}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option value="1">上架</option>
        <option value="2">下架</option>
      </Selector>
    </ProductInfo>
  );
}

QuestionStatusSelect.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
};
