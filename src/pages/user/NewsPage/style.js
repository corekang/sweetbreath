import styled from "styled-components";
import { MEDIA_QUERY } from "../../../constants/style";

export const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  max-width: 1280px;
  margin: 40px auto;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERY} {
    padding: 0 20px;
  }
`;

export const NewsGroup = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const NewsItem = styled.div`
  min-height: 200px;
  margin-bottom: 30px;
  background: ${(props) => props.theme.colors.neutralSnow};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  ${MEDIA_QUERY} {
    display: block;
    max-height: 550px;
  }

  :hover {
    box-shadow: 0 3px 22px 1px rgba(100, 100, 100, 0.32);
  }
`;

export const NewsItemImg = styled.div`
  max-height: 200px;
  border-top-left-radius: 10px;
  :hover {
    background: ${(props) => props.theme.colors.neutralLightGrey};
  }

  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    max-height: 200px;
    min-width: 350px;
    object-fit: cover;
  }
  ${MEDIA_QUERY} {
    width: 100%;

    img {
      height: 320px;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const NewsItemInfo = styled.div`
  margin: 0 20px;
  min-height: 150px;
`;

export const NewsItemInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BriefDesc = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 30px;
  margin-bottom: 25px;
`;

export const FullDesc = styled.div`
  width: 100%;
  line-height: 30px;
  border-top-left-radius: 10px;
  margin-bottom: 30px;
`;
