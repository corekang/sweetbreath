import styled from "styled-components";
import { H1, H3, BodyLarge, MEDIA_QUERY } from "../../../constants/style";
import sweetBreath from "../../../components/icon/sweetBreath.png";

const AboutContent = styled.div`
  max-width: 1280px;
  margin: 40px auto;
  padding: 0 40px;
  overflow: hidden;
  ${MEDIA_QUERY} {
    padding: 0 20px;
  }
`;

const AboutDescription = styled.div`
  display: flex;
  margin: 50px auto 0px;
  width: 80%;
  @media screen and (max-width: 1200px) {
    display: block;
    width: 100%;
    overflow: hidden;
  }
`;

const Description = styled.div`
  box-sizing: border-box;
  min-width: 60%;
  text-align: center;
  padding: 0px 90px;
  @media screen and (max-width: 1200px) {
    display: block;
    padding: 0px;
  }
`;

const DescriptionImg = styled.img`
  max-height: 700px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    display: block;
    margin: 0px auto;
  }
  ${MEDIA_QUERY} {
    width: 350px;
  }
`;

const DescriptionText = styled(BodyLarge)`
  line-height: 3em;
`;

const LogoImg = styled.img`
  height: 180px;
`;

export default function AboutPage() {
  return (
    <AboutContent>
      <H1>關於我們</H1>
      <AboutDescription>
        <DescriptionImg
          src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          alt="unsplash好好用讚讚"
        />
        <Description>
          <LogoImg src={sweetBreath} alt="logo" />
          <DescriptionText>
            根據《鬼滅之刃》漫畫第5話的解釋，
            <br />
            「全集中呼吸」的定義：
            <br />
            透過吸入大量氧氣到肺部，讓更多的空氣進入到血液中，
            <br />
            加速血液的流動以及心臟的跳動，
            <br />
            這樣的話體溫就會上升，
            <br />
            而血液變熱之後，
            <br />
            人類就能擁有一雙溫度高於常人的手，
            <br />
            做麵包的時候，可以讓麵糰更快發酵，
            <br />
            做出來的麵包也比較好吃。
            <br />
            堅持使用真材實料，純手工新鮮製作，
            <br />
            只為了將最好的口感呈現給你們！
          </DescriptionText>
        </Description>
      </AboutDescription>
    </AboutContent>
  );
}
