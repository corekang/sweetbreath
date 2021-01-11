import {
  MessageFormContainer,
  MessageFormInput,
  MessageFormTextarea,
  MessageFormButton,
} from "./style";
import React, { useState } from "react";

export const MessageForm = (props) => {
  const { updateMessageboardArray } = props;
  const initialInputState = {
    username: "",
    email: "",
    phone: "",
    messages: "",
    createdAt: Date.now(),
  };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { username, email, phone, messages, createdAt } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMessageboardArray(eachEntry);
    setEachEntry(initialInputState);
  };

  return (
    <>
      <MessageFormContainer onSubmit={handleSubmit}>
        <MessageFormInput
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="姓名"
          required
        />
        <MessageFormInput
          name="email"
          value={email}
          type="email"
          onChange={handleInputChange}
          placeholder="電子郵件"
          required
        />
        <MessageFormInput
          name="phone"
          value={phone}
          onChange={handleInputChange}
          placeholder="手機號碼"
          required
        />
        <MessageFormTextarea
          name="messages"
          value={messages}
          onChange={handleInputChange}
          placeholder="輸入問題"
          rows="5"
          required
        />
        <MessageFormInput
          name="createdAt"
          value={createdAt}
          onChange={handleInputChange}
          style={{ display: "none" }}
        />
        <MessageFormButton>提問</MessageFormButton>
      </MessageFormContainer>
    </>
  );
};
