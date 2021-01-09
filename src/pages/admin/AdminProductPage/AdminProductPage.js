import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { addProduct, getCategory } from "../../../webAPI/productAPI";
import {
  Content,
  Product,
  ProductDesc,
  AdminTitle,
  ProductContent,
  Error,
  AdminBtn,
  SubmitButton,
} from "./style";
import Question from "./Question";
import QuestionText from "./QuestionText";
import QuestionSelect from "./QuestionSelect";
import QuestionStatusSelect from "./QuestionStatusSelect";

export default function AdminProductPage() {
  const history = useHistory();
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    CategoryId: "",
    info: "",
    feature: "",
    price: "",
    promo_price: "",
    stock: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res.data);
      setProduct({ ...product, CategoryId: res.data[0].id });
    });
  }, []);

  const handleSubmit = () => {
    const {
      name,
      image,
      info,
      CategoryId,
      feature,
      price,
      promo_price,
      stock,
    } = product;
    if (
      !name ||
      !image ||
      !info ||
      !CategoryId ||
      !feature ||
      !price ||
      !stock
    ) {
      setError(true);
      console.log(product);
      return setErrorMessage("請輸入完整商品資訊");
    }
    const newCategoryId = Number(CategoryId);
    addProduct(
      name,
      image,
      info,
      newCategoryId,
      feature,
      price,
      promo_price,
      stock
    )
      .then((res) => {
        if (res.ok === 0) {
          setError(true);
          setErrorMessage(res.message);
          return;
        }
        history.push("/admin/products");
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.toString());
        return;
      });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <Content>
      <Product>
        <ProductDesc>
          <AdminTitle>商品資訊</AdminTitle>
          <ProductContent>
            <Question
              title="商品名稱"
              name="name"
              value={product.name}
              handleChange={handleChange}
            />
            <Question
              title="圖片網址"
              name="image"
              value={product.image}
              handleChange={handleChange}
            />
            <QuestionStatusSelect
              title="狀態"
              name="status"
              value={product.status}
              handleChange={handleChange}
            />
            <QuestionSelect
              title="分類"
              name="CategoryId"
              category={category}
              value={Number(product.CategoryId)}
              handleChange={handleChange}
            />
            <QuestionText
              title="商品介紹"
              name="info"
              value={product.info}
              handleChange={handleChange}
            />
            <AdminTitle>商品規格</AdminTitle>
            <Question
              title="規格名稱"
              name="feature"
              value={product.feature}
              handleChange={handleChange}
            />
            <Question
              title="原價"
              name="price"
              value={product.price}
              handleChange={handleChange}
            />
            <Question
              title="特價"
              name="promo_price"
              value={product.promo_price}
              handleChange={handleChange}
            />
            <Question
              title="庫存"
              name="stock"
              value={product.stock}
              handleChange={handleChange}
            />
          </ProductContent>
          <Error error={error}>{errorMessage}</Error>
          <AdminBtn>
            <SubmitButton onClick={handleSubmit}>提交</SubmitButton>
          </AdminBtn>
        </ProductDesc>
      </Product>
    </Content>
  );
}
