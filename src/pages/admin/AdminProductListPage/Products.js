import {
  ProductContainer,
  ProductTitle,
  ProductName,
  ProductSetting,
  SettingButton,
} from "./style";
import ProductItems from "./ProductItems";
import {
  deleteProduct,
  getCategoryAndProducts,
} from "../../../webAPI/productAPI";
import PropTypes from "prop-types";

export default function Products({ products, setErrorMessage, setCategories }) {
  // 刪除分類
  const handleDeleteClick = (id) => {
    deleteProduct(id).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
        return;
      }
      getCategoryAndProducts().then((res) => {
        let newCategory = res.data.filter(
          (category) => category.Products.length !== 0
        );
        setCategories(newCategory);
      });
    });
  };

  return products.map((product) => (
    <ProductContainer key={product.id}>
      <ProductTitle>
        <ProductName>{product.name}</ProductName>
        <ProductSetting>
          <SettingButton to={"/admin/product/" + product.id}>
            編輯
          </SettingButton>
          <SettingButton
            to={"/admin/products"}
            onClick={() => handleDeleteClick(product.id)}
          >
            刪除
          </SettingButton>
        </ProductSetting>
      </ProductTitle>
      <ProductItems key={product.id} productId={product.id} />
    </ProductContainer>
  ));
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  setErrorMessage: PropTypes.func,
  setCategories: PropTypes.func,
};
