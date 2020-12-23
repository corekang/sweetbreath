import styled from "styled-components";
import {
  MEDIA_QUERY,
  H3,
  Button,
  Body,
  BodyLarge,
  Input,
  Textarea,
} from "../../../constants/style";

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

const Question = ({ name }) => {
  return (
    <ProductInfo>
      <AdminName>{name}</AdminName>
      <AdminInput placeholder={name} name={name}></AdminInput>
    </ProductInfo>
  );
};

const QuestionText = ({ name }) => {
  return (
    <ProductInfo>
      <AdminName>{name}</AdminName>
      <AdminText rows="10" placeholder={name} name={name}></AdminText>
    </ProductInfo>
  );
};

const QuestionSelect = ({ name }) => {
  return (
    <ProductInfo>
      <AdminName>{name}</AdminName>
      <Selector placeholder={name} name={name}>
        <option value="1">常溫點心</option>
        <option value="1">家常塔派</option>
        <option value="1">招牌蛋糕</option>
      </Selector>
    </ProductInfo>
  );
};

export default function AdminProductPage() {
  return (
    <Content>
      <Product>
        <ProductImage>
          <img src="https://imgur.com/lxWa1BS.png" alt="product"></img>
        </ProductImage>
        <ProductDesc>
          <AdminTitle>商品資訊</AdminTitle>
          <ProductContent>
            <Question name="商品名稱" />
            <Question name="圖片網址" />
            <QuestionSelect name="分類" />
            <Question name="原價" />
            <Question name="特價" />
            <Question name="庫存" />
            <QuestionText name="商品介紹" />
          </ProductContent>
          <AdminBtn>
            <SubmitButton>提交</SubmitButton>
          </AdminBtn>
        </ProductDesc>
      </Product>
    </Content>
  );
}
