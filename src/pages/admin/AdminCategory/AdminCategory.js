import { useEffect, useState } from "react";
import Category from "./Category";
import {
  AddButton,
  AddCategoryContainer,
  AddInput,
  CategoryContainer,
  Content,
  ErrorMessage,
  H1,
} from "./style";
import {
  getCategoryAndProducts,
  addCategory,
  editCategory,
  deleteCategory,
} from "../../../webAPI/productAPI";

export default function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [addInputValue, setAddInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    getCategoryAndProducts().then((res) => setCategories(res.data));
  }, []);

  // 讀取 add input 值
  const handleAddInputChange = (e) => {
    setAddInputValue(e.target.value);
  };

  const handleAddInputFocus = () => {
    setErrorMessage(null);
  };

  // 讀取 edit input 值
  const handleEditInputChange = (e, id) => {
    setEditInputValue((input) => {
      return { ...input, [id]: e.target.value };
    });
  };

  const handleEditInputFocus = () => {
    setErrorMessage(null);
  };

  // 新增分類
  const handleAddClick = () => {
    if (!addInputValue) return;

    addCategory(addInputValue).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
        return;
      }
      setAddInputValue("");
      getCategoryAndProducts().then((res) => setCategories(res.data));
    });
  };

  // 編輯分類
  const handleEditClick = (id) => {
    console.log();
    if (!editInputValue[id]) return;
    // 改畫面
    setCategories(
      categories.map((category) => {
        if (category.id !== id) return category;
        return { ...category, name: editInputValue[id] };
      })
    );
    // 改資料庫
    editCategory(id, editInputValue[id]).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
        return;
      }
    });
    setEditInputValue((input) => {
      return { ...input, [id]: "" };
    });
  };

  // 刪除分類
  const handleDeleteClick = (id) => {
    deleteCategory(id).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
        return;
      }
      getCategoryAndProducts().then((res) => setCategories(res.data));
    });
  };

  return (
    <Content>
      <H1>分類管理</H1>
      <AddCategoryContainer>
        <AddInput
          type="text"
          placeholder="輸入分類名稱"
          onChange={handleAddInputChange}
          onFocus={handleAddInputFocus}
          value={addInputValue}
        ></AddInput>
        <AddButton onClick={handleAddClick}>新增分類</AddButton>
      </AddCategoryContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <CategoryContainer>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            editInputValue={editInputValue}
            handleEditClick={handleEditClick}
            handleEditInputChange={handleEditInputChange}
            handleEditInputFocus={handleEditInputFocus}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </CategoryContainer>
    </Content>
  );
}
