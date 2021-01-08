import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";

import { MEDIA_QUERY, H1, H4, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import {
  getCategoryAndLaunchedProducts,
  addCategory,
  editCategory,
  deleteCategory,
} from "../../../webAPI/productAPI";

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;

  a,
  button {
    text-decoration: none;
    border: none;
    outline: transparent;
  }
`;

const CategoryContainer = styled.div``;

const CategorySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  background: ${theme.colors.neutralWhite};

  :hover {
    background: ${theme.colors.neutralSnow};
    input {
      border: 1px solid ${theme.colors.neutralGrey};
      border-radius: 4px;
    }
  }

  ${MEDIA_QUERY} {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const CategoryNameLink = styled(Link)`
  font-size: ${theme.fontSize.h3};
  padding: 20px;
  margin: 0;
  color: ${theme.colors.neutralBlack};

  :hover {
    color: ${theme.colors.mainPrimaryDark};
  }
`;

const Setting = styled.div``;

const SettingInput = styled(Input)`
  color: ${theme.colors.neutralBlack};
  font-size: ${theme.fontSize.bodyLarge};
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  padding: 8px;
  margin: 0 10px;
`;

const SettingButton = styled.button`
  padding: 6px 10px;
  margin-left: 20px;
  border-radius: 4px;
  font-size: ${theme.fontSize.button};
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.neutralDarkGrey};
  color: ${theme.colors.neutralPaleGrey};
  background: ${theme.colors.neutralDarkGrey};
  cursor: pointer;

  :hover {
    color: ${theme.colors.neutralWhite};
    background: ${theme.colors.uiNegative};
  }

  ${MEDIA_QUERY} {
    margin-left: 5px;
    padding: 4px;
  }
`;

const AddCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  :hover {
    input {
      border: 1px solid ${theme.colors.neutralGrey};
      border-radius: 4px;
    }
  }

  ${MEDIA_QUERY} {
    justify-content: center;
    margin: 20px 0;
  }
`;

const AddInput = styled(SettingInput)``;

const AddButton = styled(SettingButton)`
  color: ${theme.colors.neutralBlack};
  background: ${theme.colors.uiWarning};
`;

const ErrorMessage = styled(H4)`
  margin: 0;
  padding: 0 20px;
  text-align: right;
  font-weight: 700;
  color: ${theme.colors.uiNegative};
`;

function Category({
  category,
  editInputValue,
  handleEditInputChange,
  handleEditInputFocus,
  handleEditClick,
  handleDeleteClick,
}) {
  return (
    <CategorySection>
      <CategoryNameLink to={`/admin/products#${category.id}`}>
        {category.name} ({category.Products.length})
      </CategoryNameLink>
      <Setting>
        <SettingInput
          type="text"
          placeholder="修改分類名稱..."
          value={editInputValue}
          onChange={handleEditInputChange}
          onFocus={handleEditInputFocus}
        ></SettingInput>
        <SettingButton onClick={() => handleEditClick(category.id)}>
          修改
        </SettingButton>
        <SettingButton onClick={() => handleDeleteClick(category.id)}>
          刪除
        </SettingButton>
      </Setting>
    </CategorySection>
  );
}

export default function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [addInputValue, setAddInputValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    getCategoryAndLaunchedProducts().then((res) => setCategories(res.data));
  }, []);

  // 讀取 add input 值
  const handleAddInputChange = (e) => {
    setAddInputValue(e.target.value);
  };

  const handleAddInputFocus = () => {
    setErrorMessage(null);
  };

  // 讀取 edit input 值
  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
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
      getCategoryAndLaunchedProducts().then((res) => setCategories(res.data));
    });
  };

  // 編輯分類
  const handleEditClick = (id) => {
    if (!editInputValue) return;
    // 改畫面
    setCategories(
      categories.map((category) => {
        if (category.id !== id) return category;
        return { ...category, name: editInputValue };
      })
    );

    // 改資料庫
    editCategory(id, editInputValue).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
        return;
      }
    });
  };

  // 刪除分類
  const handleDeleteClick = (id) => {
    deleteCategory(id).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
        return;
      }
      getCategoryAndLaunchedProducts().then((res) => setCategories(res.data));
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
