import {
  MessageFormContainer,
  MessageFormInput,
  MessageFormTextarea,
  MessageFormButton,
  MessageBoardContainer,
  MessageBoardItem,
  MessageBoardItemUser,
  MessageBoardItemInfo,
} from "./style";
import React, { useState } from "react";

export const MessageBoard = ({ message }) => {
  return (
    <MessageBoardContainer>
      <MessageBoardItem>
        <MessageBoardItemUser>
          <b>username</b>
          <br />
          <b>email</b>
          <br />
          <b>phone</b>
        </MessageBoardItemUser>
        <MessageBoardItemInfo>{message}</MessageBoardItemInfo>
      </MessageBoardItem>
    </MessageBoardContainer>
  );
};

export function MessageForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState([123, 456, 555]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <MessageFormContainer onSubmit={handleSubmit}>
        <MessageFormInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="姓名"
        />
        <MessageFormInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="電子郵件"
        />
        <MessageFormInput
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="手機號碼"
        />
        <MessageFormTextarea
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          placeholder="輸入問題"
          rows="5"
        />
        <MessageFormButton>我要留言</MessageFormButton>
      </MessageFormContainer>
      {/*messages.map((message, index) => (
        <MessageBoard key={index} content={message} />
      ))*/}
    </>
  );
}
