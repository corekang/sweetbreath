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
  margin-top: 0px;
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
  margin: 5px 0;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};
  ${MEDIA_QUERY} {
    width: 95%;
    padding: 10px;
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

const DeleteButton = styled(SubmitButton)`
  background: ${(props) => props.theme.colors.uiNegative};
  margin-right: 10px;
`;

const AddButton = styled(SubmitButton)`
  background: ${(props) => props.theme.colors.mainPrimary};

  justify-content: rignt;
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
    display: block;
  }
`;
const Error = styled(H4)`
  display: flex;
  height: 1em;
  font-weight: bold;
  margin: 25px 0;
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

const FeatureItem = styled.div`
  padding: 10px 0;
  margin: 20px 0;
  & + & {
    border-top: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  }
`;

const AdminFeature = styled.div`
  margin-top: 60px;
`;

const getCategory = () => {
  return fetch(`/api/category`).then((res) => res.json());
};

const getProduct = (id) => {
  return fetch(`/api/product/${id}`).then((res) => res.json());
};

const editProduct = (id, name, image, status, info, categoryId) => {
  const token = getAuthToken();
  return fetch(`/api/product/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      image,
      status,
      info,
      CategoryId: categoryId,
    }),
  }).then((res) => res.json());
};

const deleteFeature = (id) => {
  const token = getAuthToken();
  return fetch(`/api/feature/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};

const editFeature = (id, name, price, promo_price, stock) => {
  const token = getAuthToken();
  return fetch(`/api/feature/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      promo_price,
      stock,
    }),
  }).then((res) => res.json());
};

const addFeature = (id, name, price, promo_price, stock) => {
  const token = getAuthToken();
  return fetch(`/api/feature/${id}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      promo_price,
      stock,
    }),
  }).then((res) => res.json());
};

const Question = ({ name, title, value, setValue }) => {
  return (
    <ProductInfo>
      <AdminName>{title}</AdminName>
      <AdminInput
        placeholder={title}
        name={name}
        value={value}
        onChange={setValue}
      ></AdminInput>
    </ProductInfo>
  );
};

const QuestionText = ({ title, name, value, setValue }) => {
  return (
    <ProductInfo>
      <AdminName>{title}</AdminName>
      <AdminText
        rows="10"
        placeholder={title}
        name={name}
        value={value}
        onChange={setValue}
      ></AdminText>
    </ProductInfo>
  );
};

const QuestionSelect = ({ name, title, value, setValue }) => {
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
        onChange={setValue}
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
  const { id } = useParams();
  const history = useHistory();
  const [add, setAdd] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    image: "",
    status: "",
    CategoryId: "",
    info: "",
    errorMessage: "",
  });
  const [features, setFeatures] = useState([]);
  const [feature, setFeature] = useState({
    name: "",
    stock: "",
    promo_price: "",
    price: "",
    errorMessage: "",
  });

  const handleProductEdit = () => {
    const { name, image, status, CategoryId, info } = product;
    if (!name || !image || !info || !CategoryId) {
      setError(true);
      return setProduct({ ...product, errorMessage: "請輸入完整商品資訊" });
    }
    editProduct(id, name, image, status, info, CategoryId)
      .then((res) => {
        if (res.ok === 0) {
          setError(true);
          setProduct({ ...product, errorMessage: res.message });
          return;
        }
        history.push("/admin/products");
      })
      .catch((err) => {
        setError(true);
        setProduct({ ...product, errorMessage: err.toString() });
        return;
      });
  };

  const handleFeatureAdd = (id) => {
    const { name, price, promo_price, stock } = feature;
    if (!name || !price || !stock) {
      setError(true);
      return setFeature({ ...feature, errorMessage: "請輸入完整規格資訊" });
    }
    addFeature(id, name, price, promo_price, stock)
      .then((res) => {
        if (res.ok === 0) {
          setError(true);
          setFeature({ ...feature, errorMessage: res.message });
          return;
        }
        return getProduct(id).then((response) => {
          const {
            id,
            name,
            image,
            status,
            CategoryId,
            info,
            Features,
          } = response.data;
          let addErrorFeatures = Features;
          addErrorFeatures.map((item) => (item.errorMessage = ""));
          setProduct({ id, name, image, status, CategoryId, info });
          setFeatures(addErrorFeatures);
          setAdd(false);
          setFeature({
            name: "",
            stock: "",
            promo_price: "",
            price: "",
            errorMessage: "",
          });
        });
      })
      .catch((err) => {
        setError(true);
        setFeature({ ...feature, errorMessage: err.toString() });
        return;
      });
  };
  const handleFeatureEdit = (id) => {
    const newFeature = features.filter((item) => item.id === id);
    const { name, price, promo_price, stock, errorMessage } = newFeature[0];
    if (!name || !price || !stock) {
      setError(true);
      const newFeatures = features.map((feature) => {
        if (feature.id === id) {
          return {
            ...feature,
            errorMessage: "請輸入完整規格資訊",
          };
        } else {
          return feature;
        }
      });
      return setFeatures(newFeatures);
    }
    editFeature(id, name, price, promo_price, stock)
      .then((res) => {
        if (res.ok === 0) {
          setError(true);
          const newFeatures = features.map((feature) => {
            if (feature.id === id) {
              return {
                ...feature,
                errorMessage: res.message,
              };
            } else {
              return feature;
            }
          });
          return setFeatures(newFeatures);
        }
        history.push("/admin/products");
      })
      .catch((err) => {
        setError(true);
        const newFeatures = features.map((feature) => {
          if (feature.id === id) {
            return {
              ...feature,
              errorMessage: err.toString(),
            };
          } else {
            return feature;
          }
        });
        return setFeatures(newFeatures);
      });
  };

  const handleFeatureDelete = (featureId, productId) => {
    if (features.length > 1) {
      deleteFeature(featureId)
        .then((res) => {
          if (res.ok === 0) {
            setError(true);
            const newFeatures = features.map((feature) => {
              if (feature.id === id) {
                return {
                  ...feature,
                  errorMessage: res.message,
                };
              } else {
                return feature;
              }
            });
            return setFeatures(newFeatures);
          }
          return getProduct(productId).then((response) => {
            const {
              id,
              name,
              image,
              status,
              CategoryId,
              info,
              Features,
            } = response.data;
            let addErrorFeatures = Features;
            addErrorFeatures.map((item) => (item.errorMessage = ""));
            setProduct({ id, name, image, status, CategoryId, info });
            return setFeatures(addErrorFeatures);
          });
        })
        .catch((err) => {
          setError(true);
          const newFeatures = features.map((feature) => {
            if (feature.id === id) {
              return {
                ...feature,
                errorMessage: err.toString(),
              };
            } else {
              return feature;
            }
          });
          return setFeatures(newFeatures);
        });
    } else {
      setError(true);
      const newFeatures = features.map((feature) => {
        if (feature.id === featureId) {
          return {
            ...feature,
            errorMessage: "每個商品至少需有一項規格",
          };
        } else {
          return feature;
        }
      });
      return setFeatures(newFeatures);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleNewFeatureChange = (e) => {
    setFeature({ ...feature, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (id) => (e) => {
    const newFeatures = features.map((feature) => {
      if (feature.id === id) {
        return {
          ...feature,
          [e.target.name]: e.target.value,
        };
      } else {
        return feature;
      }
    });
    setFeatures(newFeatures);
  };

  useEffect(() => {
    getProduct(id).then((res) => {
      const { id, name, image, status, CategoryId, info, Features } = res.data;
      let addErrorFeatures = Features;
      addErrorFeatures.map((item) => (item.errorMessage = ""));
      setProduct({ id, name, image, status, CategoryId, info });
      setFeatures(addErrorFeatures);
    });
  }, []);

  return (
    <Content>
      <Product>
        <ProductImage>
          <img src={product.image} alt="product"></img>
        </ProductImage>
        <ProductDesc>
          <AdminTitle>商品資訊</AdminTitle>
          <ProductContent>
            <Question
              title="商品名稱"
              name="name"
              value={product.name}
              setValue={handleChange}
            />
            <Question
              title="圖片網址"
              name="image"
              value={product.image}
              setValue={handleChange}
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
              setValue={handleChange}
            />
            <QuestionText
              title="商品介紹"
              name="info"
              value={product.info}
              setValue={handleChange}
            />
            <Error error={error}>{product.errorMessage}</Error>
            <AdminBtn>
              <SubmitButton onClick={handleProductEdit}>提交</SubmitButton>
            </AdminBtn>
            <AdminFeature>
              <AdminTitle>商品規格</AdminTitle>
              {features &&
                features.map((feature) => (
                  <FeatureItem>
                    <Question
                      title="規格名稱"
                      name="name"
                      value={feature.name}
                      setValue={handleFeatureChange(feature.id)}
                    />
                    <Question
                      title="原價"
                      name="price"
                      value={feature.price}
                      setValue={handleFeatureChange(feature.id)}
                    />

                    <Question
                      title="特價"
                      name="promo_price"
                      value={feature.promo_price}
                      setValue={handleFeatureChange(feature.id)}
                    />
                    <Question
                      title="庫存"
                      name="stock"
                      value={feature.stock}
                      setValue={handleFeatureChange(feature.id)}
                    />
                    <Error error={error}>{feature.errorMessage}</Error>
                    <AdminBtn>
                      <DeleteButton
                        onClick={() => {
                          handleFeatureDelete(feature.id, feature.ProductId);
                        }}
                      >
                        刪除
                      </DeleteButton>
                      <SubmitButton
                        onClick={() => {
                          handleFeatureEdit(feature.id);
                        }}
                      >
                        編輯
                      </SubmitButton>
                    </AdminBtn>
                  </FeatureItem>
                ))}
              {!add && (
                <FeatureItem>
                  <AdminBtn>
                    <AddButton
                      onClick={() => {
                        setAdd(true);
                      }}
                    >
                      新增規格
                    </AddButton>
                  </AdminBtn>
                </FeatureItem>
              )}
              {add && (
                <FeatureItem>
                  <Question
                    title="規格名稱"
                    name="name"
                    value={feature.name}
                    setValue={handleNewFeatureChange}
                  />
                  <Question
                    title="原價"
                    name="price"
                    value={feature.price}
                    setValue={handleNewFeatureChange}
                  />

                  <Question
                    title="特價"
                    name="promo_price"
                    value={feature.promo_price}
                    setValue={handleNewFeatureChange}
                  />
                  <Question
                    title="庫存"
                    name="stock"
                    value={feature.stock}
                    setValue={handleNewFeatureChange}
                  />
                  <Error error={error}>{feature.errorMessage}</Error>
                  <AdminBtn>
                    <SubmitButton
                      onClick={() => {
                        handleFeatureAdd(product.id);
                      }}
                    >
                      提交
                    </SubmitButton>
                  </AdminBtn>
                </FeatureItem>
              )}
            </AdminFeature>
          </ProductContent>
        </ProductDesc>
      </Product>
    </Content>
  );
}
