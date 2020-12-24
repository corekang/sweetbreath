import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

import { MEDIA_QUERY, H1, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";

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
  padding: 6px 20px;
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
  font-size: ${theme.fontSize.bodyLarge};
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

function Category({ category }) {
  const [inputValue, setInputValue] = useState("");
  const [categoryName, setCategoryName] = useState(`${category.categoryName}`);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSettingClick = () => {
    setCategoryName(inputValue);
  };

  const handleDeleteClick = () => {};

  return (
    <CategorySection>
      <CategoryNameLink to={`/admin/products#${category.categoryId}`}>
        {category.categoryName}
      </CategoryNameLink>
      <Setting>
        <SettingInput
          type="text"
          placeholder="修改分類名稱..."
          value={inputValue}
          onChange={handleInputChange}
        ></SettingInput>
        <SettingButton onClick={handleSettingClick}>修改</SettingButton>
        <SettingButton onClick={handleDeleteClick}>刪除</SettingButton>
      </Setting>
    </CategorySection>
  );
}

export default function AdminCategory() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      categoryName: "常溫蛋糕",
      categoryId: "cake",
      categoryStatus: true,
      createdAt: "2020/12/24 00:00:00",
    },
    {
      id: 2,
      categoryName: "家常塔派",
      categoryId: "pie",
      categoryStatus: true,
      createdAt: "2020/12/24 00:00:00",
    },
    {
      id: 3,
      categoryName: "招牌蛋糕",
      categoryId: "house",
      categoryStatus: true,
      createdAt: "2020/12/24 00:00:00",
    },
  ]);

  const [addInputValue, setAddInputValue] = useState("");

  const handleAddInputChange = (e) => {
    setAddInputValue(e.target.value);
  };

  const handleAddClick = () => {};

  return (
    <Content>
      <H1>分類管理</H1>
      <AddCategoryContainer>
        <AddInput
          type="text"
          placeholder="輸入分類名稱"
          onChange={handleAddInputChange}
          value={addInputValue}
        ></AddInput>
        <AddButton onClick={handleAddClick}>新增分類</AddButton>
      </AddCategoryContainer>
      <CategoryContainer>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </CategoryContainer>
    </Content>
  );
}
