import styled from "styled-components";
import { H1, H3, MEDIA_QUERY } from "../../../constants/style";
import { theme } from "../../../constants/theme";

const PageContainer = styled.div`
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

const PageTitle = styled(H1)``;

const NewsGroup = styled.div`
  margin-top: 30px;
  position: relative;
`;

const NewsItem = styled.div`
  height: 200px;
  margin-bottom: 30px;
  background: ${theme.colors.neutralLightGrey};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  justify-content: space-between;

  :hover {
    border-left: 3px solid ${theme.colors.mainPrimary};
    background: ${theme.colors.mainSecondary};
  }
`;

const NewsItemImg = styled.div`
  background: ${theme.colors.neutralPaleGrey};
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  :hover {
    border-left: 3px solid ${theme.colors.mainPrimary};
    background: ${theme.colors.mainSecondary};
  }

  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 100%;
    width: 300px;

    ${MEDIA_QUERY} {
      max-width: 200px;
    }
  }
`;

const NewsItemInfo = styled.div`
  margin: 0 20px;
`;

const NewsItemInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NewsItemTitle = styled(H3)``;

const NewsItemTime = styled.div``;

const NewsItemInfoBottom = styled.div``;

const NewsItemDesc = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 30px;
`;

const NewsItemDescMore = styled.div``;

const MoreIcon = styled.div`
  text-align: right;
`;

const MoreContent = styled.div`
  background: rgba(110, 112, 255);
  margin-top: 15px;
  width: 100%;
  line-height: 30px;
  padding: 10px;
  position: absolute;
  top: -15px;
  left: 0px;
  height: 160px;
  border-top-left-radius: 10px;
`;

function ShowHide() {
  const listBtn = document.getElementById("listBtn");
  const textlistn = document.getElementById("textlistn");
  if (textlistn.style.display === "none") {
    textlistn.style.display = "block";
    listBtn.innerText = "<<<";
  } else {
    textlistn.style.display = "none";
    listBtn.innerText = ">>>";
  }
}

export default function NewsPage() {
  return (
    <PageContainer>
      <PageTitle>最新消息</PageTitle>
      <NewsGroup>
        <NewsItem>
          <NewsItemImg>
            <img src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-1126359.jpg&fm=jpg" />
          </NewsItemImg>
          <NewsItemInfo>
            <NewsItemInfoTop>
              <NewsItemTitle>給長輩的甜點</NewsItemTitle>
              <NewsItemTime>2020/12/10</NewsItemTime>
            </NewsItemInfoTop>
            <NewsItemInfoBottom>
              <NewsItemDesc>
                每年年底是草莓開始採收的季節，這時草莓酸比甜多，酸甜比特別香濃明顯。搭配輕乳酪，一口咬下帶來豐富層次感，酸甜酸甜交錯，不甜膩得剛剛好，是長輩特別喜愛的鹹甜茶點。今年特別設計節慶禮盒，也歡迎自備購物袋，可折抵消費喔！　攝影／Suzy
                Hazelwood
              </NewsItemDesc>
              <NewsItemDescMore>
                <MoreIcon id="listBtn" onClick={ShowHide}>
                  &gt;&gt;&gt;
                </MoreIcon>
                <MoreContent id="textlistn" style={{ display: "none" }}>
                  每年年底是草莓開始採收的季節，這時草莓酸比甜多，酸甜比特別香濃明顯。搭配輕乳酪，一口咬下帶來豐富層次感，酸甜酸甜交錯，不甜膩得剛剛好，是長輩特別喜愛的鹹甜茶點。今年特別設計節慶禮盒，也歡迎自備購物袋，可折抵消費喔！　攝影／Suzy
                  Hazelwood
                </MoreContent>
              </NewsItemDescMore>
            </NewsItemInfoBottom>
          </NewsItemInfo>
        </NewsItem>
        <NewsItem>
          <NewsItemImg>
            <img src="https://images.pexels.com/photos/952724/pexels-photo-952724.jpeg?cs=srgb&dl=pexels-trang-doan-952724.jpg&fm=jpg" />
          </NewsItemImg>
          <NewsItemInfo>
            <NewsItemInfoTop>
              <NewsItemTitle>年輕的心意</NewsItemTitle>
              <NewsItemTime>2020/12/01</NewsItemTime>
            </NewsItemInfoTop>
            <NewsItemInfoBottom>
              <NewsItemDesc>
                偶爾心血來潮，總是想買點好吃的陪伴父母品嚐，但是父母可能總是不捨得你花錢，或覺得不吃甜點也能過日子。我們特別推出一款看起來迷你但又豐滿的水果甜點，可指定當季水果，以當季食材製作，因此降低成本，更重要的是支持在地農業，讓你用少少的錢帶豐盛的甜點開心回家，父母再怎麼捨不得也想吃一口。　攝影／Trang
                Doan
              </NewsItemDesc>
            </NewsItemInfoBottom>
          </NewsItemInfo>
        </NewsItem>
      </NewsGroup>
    </PageContainer>
  );
}
