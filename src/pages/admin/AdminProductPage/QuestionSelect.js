import { ProductInfo, AdminName, Selector } from "./style";
import PropTypes from "prop-types";

export default function QuestionSelect({
  name,
  title,
  category,
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
        {category.length !== 0 &&
          category.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </Selector>
    </ProductInfo>
  );
}

QuestionSelect.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.number,
  handleChange: PropTypes.func,
};
