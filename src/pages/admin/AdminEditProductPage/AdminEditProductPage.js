import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getProduct,
  editProduct,
  addFeature,
  editFeature,
  deleteFeature,
} from "../../../webAPI/productAPI";
import {
  Content,
  Product,
  ProductImage,
  ProductDesc,
  AdminTitle,
  ProductContent,
  Error,
  AdminBtn,
  SubmitButton,
  AdminFeature,
  FeatureItem,
  DeleteButton,
  AddButton,
} from "./style";
import Question from "./Question";
import QuestionText from "./QuestionText";
import QuestionSelect from "./QuestionSelect";
import QuestionStatusSelect from "./QuestionStatusSelect";

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
    const { name, price, promo_price, stock } = newFeature[0];
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
              value={product.CategoryId}
              handleChange={handleChange}
            />
            <QuestionText
              title="商品介紹"
              name="info"
              value={product.info}
              handleChange={handleChange}
            />
            <Error error={error}>{product.errorMessage}</Error>
            <AdminBtn>
              <SubmitButton onClick={handleProductEdit}>提交</SubmitButton>
            </AdminBtn>
            <AdminFeature>
              <AdminTitle>商品規格</AdminTitle>
              {features &&
                features.map((feature) => (
                  <FeatureItem key={feature.id}>
                    <Question
                      title="規格名稱"
                      name="name"
                      value={feature.name}
                      handleChange={handleFeatureChange(feature.id)}
                    />
                    <Question
                      title="原價"
                      name="price"
                      value={feature.price}
                      handleChange={handleFeatureChange(feature.id)}
                    />

                    <Question
                      title="特價"
                      name="promo_price"
                      value={feature.promo_price}
                      handleChange={handleFeatureChange(feature.id)}
                    />
                    <Question
                      title="庫存"
                      name="stock"
                      value={feature.stock}
                      handleChange={handleFeatureChange(feature.id)}
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
                    handleChange={handleNewFeatureChange}
                  />
                  <Question
                    title="原價"
                    name="price"
                    value={feature.price}
                    handleChange={handleNewFeatureChange}
                  />

                  <Question
                    title="特價"
                    name="promo_price"
                    value={feature.promo_price}
                    handleChange={handleNewFeatureChange}
                  />
                  <Question
                    title="庫存"
                    name="stock"
                    value={feature.stock}
                    handleChange={handleNewFeatureChange}
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
