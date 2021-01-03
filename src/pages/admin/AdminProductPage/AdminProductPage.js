import styled from "styled-components";
import {
  MEDIA_QUERY,
  H3,
  H4,
  Button,
  Body,
  BodyLarge,
  Input,
  Textarea,
} from "../../../constants/style";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuthToken } from "../../../utils";

const Content = styled.div`
  margin: 40px auto;
  padding: 0 40px;
`;

const Product = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0;
  ${MEDIA_QUERY} {
    display: block;
  }
`;

const ProductImage = styled.div`
  flex: 2;
  margin-right: 40px;
  border-radius: 4px;
  img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 3px 22px 1px rgba(100, 100, 100, 0.32);
  }
  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

const AdminInput = styled(Input)`
  flex: 3.5;
  margin: 10px 5px;
  width: 70%;
  ${MEDIA_QUERY} {
    margin: 10px 0;
    width: 90%;
  }
`;
const AdminText = styled(Textarea)`
  flex: 3.5;
  margin: 10px 5px;
  width: 70%;
  ${MEDIA_QUERY} {
    margin: 10px 0;
    width: 90%;
  }
`;
const ProductDesc = styled.div`
  flex: 3;
  ${MEDIA_QUERY} {
    margin: 20px 0;
  }
`;

const AdminTitle = styled(H3)`
  margin-top: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  padding-bottom: 10px;
`;

const ProductContent = styled(Body)`
  word-break: break-all;
  white-space: pre-line;
  margin: 20px 0;
  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

const SubmitButton = styled(Button)`
  cursor: pointer;
  padding: 20px 100px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};
  ${MEDIA_QUERY} {
    width: 95%;
    padding: 10px;
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: baseline;
  ${MEDIA_QUERY} {
    display: block;
    margin: 20px 0;
  }
`;

const AdminName = styled(BodyLarge)`
  flex: 1.5;
  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

const AdminBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  ${MEDIA_QUERY} {
    justify-content: left;
  }
`;
const Error = styled(H4)`
  display: flex;
  height: 1em;
  font-weight: bold;
  margin: 10px 0;
  visibility: ${(props) => (props.error ? "visible" : "hidden")};
  color: ${(props) => props.theme.colors.uiWarning};
  justify-content: center;
`;

const Selector = styled.select`
  margin: 10px 5px;
  width: 70%;
  padding: 12px;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.colors.neutralLightGrey};
  background-color: ${(props) => props.theme.colors.neutralWhite};
  color: ${(props) => props.theme.colors.neutralBlack};

  &:focus {
    border: solid 1px ${(props) => props.theme.colors.mainPrimary};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralDarkGrey};
  }
  ${MEDIA_QUERY} {
    margin: 10px 0;
    width: 95%;
  }
`;

const getCategory = () => {
  return fetch(`/api/category`).then((res) => res.json());
};

const addProduct = (
  name,
  image,
  info,
  CategoryId,
  feature,
  price,
  promo_price,
  stock
) => {
  const token = getAuthToken();
  return fetch(`/api/product`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      image,
      info,
      CategoryId,
      feature_name: feature,
      price,
      promo_price,
      stock,
    }),
  }).then((res) => res.json());
};

const Question = ({ name, title, value, handleChange }) => {
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
};

const QuestionText = ({ title, name, value, handleChange }) => {
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
};

const QuestionSelect = ({ name, title, value, handleChange }) => {
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
          category.map((item) => <option value={item.id}>{item.name}</option>)}
      </Selector>
    </ProductInfo>
  );
};

const QuestionStatusSelect = ({ name, title, value, setValue }) => {
  return (
    <ProductInfo>
      <AdminName>{title}</AdminName>
      <Selector
        placeholder={title}
        name={name}
        value={value}
        onChange={setValue}
      >
        <option value="1">上架</option>
        <option value="2">下架</option>
      </Selector>
    </ProductInfo>
  );
};

export default function AdminProductPage() {
  const history = useHistory();
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
      return setErrorMessage("請輸入完整商品資訊");
    }
    addProduct(
      name,
      image,
      info,
      CategoryId,
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
              setValue={handleChange}
            />
            <QuestionSelect
              title="分類"
              name="CategoryId"
              value={product.CategoryId}
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
