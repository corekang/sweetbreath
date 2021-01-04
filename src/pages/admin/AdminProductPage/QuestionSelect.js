import { useState, useEffect } from "react";
import { getCategory } from "../../../webAPI/productAPI";
import { ProductInfo, AdminName, Selector } from "./style";
import PropTypes from "prop-types";

export default function QuestionSelect({ name, title, value, handleChange }) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res.data);
    });
  }, []);

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
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
