import {
  CategoryNameLink,
  CategorySection,
  Setting,
  SettingButton,
  SettingInput,
} from "./style";
import PropTypes from "prop-types";

export default function Category({
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
          value={editInputValue[category.id]}
          onChange={(e) => {
            handleEditInputChange(e, category.id);
          }}
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

Category.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object),
  editInputValue: PropTypes.func,
  handleEditInputChange: PropTypes.func,
  handleEditInputFocus: PropTypes.func,
  handleEditClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};
