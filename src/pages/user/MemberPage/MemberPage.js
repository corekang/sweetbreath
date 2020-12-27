import styled, { createGlobalStyle } from "styled-components";
import { H1, MEDIA_QUERY } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Tabs, Tab, Content } from "../../../components/Tab/Tab.js";
import Table from "../../../components/Table/Table.js";

const Container = styled.div`
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

const PageTitle = styled(H1)`
  margin-bottom: 40px;
`;

const TabGroup = styled.div`
  width: 99%;
  border: 1px solid #ccc;
  border-top: none;
  padding: 30px;
`;

const TabItem = styled.div`
  display: column;
  padding: 10px 0;
  box-sizing: border-box;
`;

const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
  margin-left: 10px;
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
  table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th, td, tr {
      padding: 10px;
    }
    th {
      text-align: left;
    }
  }
`;

export default function MemberPage() {
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <Container>
      <PageTitle>會員專區</PageTitle>
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          個人資料
        </Tab>
        <Tab onClick={handleClick} active={active === 1} id={1}>
          消費紀錄
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          追蹤清單
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <TabGroup>
            <TabItem>姓名</TabItem>
            <TabItem>電子郵件</TabItem>
            <TabItem>
              手機號碼<EditButton>變更</EditButton>
            </TabItem>
            <TabItem>
              密碼<EditButton>變更</EditButton>
            </TabItem>
          </TabGroup>
        </Content>
        <Content active={active === 1}>
          <TabGroup>
            <GlobalStyle />
            <Table />
          </TabGroup>
        </Content>
        <Content active={active === 2}>
          <TabGroup>
            <TabItem>
              商品名稱1<EditButton>購買</EditButton>
              <EditButton>刪除</EditButton>
            </TabItem>
            <TabItem>
              商品名稱2<EditButton>購買</EditButton>
              <EditButton>刪除</EditButton>
            </TabItem>
          </TabGroup>
        </Content>
      </>
      {/* <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
    </Container>
  );
}
