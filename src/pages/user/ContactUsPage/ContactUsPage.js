import {
  PageContainer,
  ContactUsMap,
  ContactUsInfo,
  ContactUsAbout,
  ContactUsPageTitle,
  ContactUsAboutItem,
  MessageBoardEmpty,
} from "./style";
import React, { useState, useEffect } from "react";
import { Map } from "../../../components/Map/Map";
import { MessageForm } from "./MessageForm";
import { MessageBoard } from "./MessageBoard";

function writeTodosToLocalStorage(eachEntry) {
  window.localStorage.setItem("messageboard", JSON.stringify(eachEntry));
}

export default function ContactUsPage() {
  const [messageboard, setMessageboard] = useState([]);
  const updateMessageboardArray = (eachEntry) => {
    setMessageboard([...messageboard, eachEntry]);
  };

  useEffect(() => {
    const messageboardData = window.localStorage.getItem("messageboard") || "";
    if (messageboardData) {
      setMessageboard(JSON.parse(messageboardData));
    }
  }, []);

  useEffect(() => {
    writeTodosToLocalStorage(messageboard);
  }, [messageboard]);

  return (
    <PageContainer>
      <ContactUsMap>
        <Map />
      </ContactUsMap>
      <ContactUsInfo>
        <ContactUsAbout>
          <ContactUsPageTitle>聯絡我們</ContactUsPageTitle>
          <ContactUsAboutItem>
            Sweetbreath 甜の呼吸 網路甜點工作室
          </ContactUsAboutItem>
          <ContactUsAboutItem>地址｜臺灣臺北市</ContactUsAboutItem>
          <ContactUsAboutItem>電話｜0800-888888</ContactUsAboutItem>
          <ContactUsAboutItem>
            電子郵件｜0800-888888@gmail.com
          </ContactUsAboutItem>
          <ContactUsAboutItem>
            服務時間｜週一至週五　08:00-16:00
          </ContactUsAboutItem>
          <ContactUsAboutItem>
            版權聲明｜
            <a
              href="https://choosealicense.com/licenses/mit/"
              target="_blank"
              rel="noreferrer"
            >
              MIT License
            </a>
          </ContactUsAboutItem>
        </ContactUsAbout>
        <MessageForm updateMessageboardArray={updateMessageboardArray} />
      </ContactUsInfo>
      {messageboard.length > 0 ? (
        <>
          <MessageBoard messageboard={messageboard} />
        </>
      ) : (
        <MessageBoardEmpty>
          <h3>——　尚無留言，歡迎提問　——</h3>
        </MessageBoardEmpty>
      )}
    </PageContainer>
  );
}
