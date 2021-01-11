import {
  MessageBoardContainer,
  MessageBoardItem,
  MessageBoardItemContent,
  MessageBoardItemUesr,
} from "./style";
import React from "react";

export const MessageBoard = (props) => {
  const { messageboard } = props;
  return (
    <MessageBoardContainer>
      <RenderData messageboard={messageboard} />
    </MessageBoardContainer>
  );
};

const RenderData = (props) => {
  const { messageboard } = props;
  let count = 0;
  const finalArray = messageboard.sort((a, b) => b.createdAt - a.createdAt);

  return Object.keys(finalArray).map((i) => {
    const { username, email, phone, messages, createdAt } = finalArray[i];
    count = count + 1;
    return (
      <>
        <MessageBoardItem key={count.toString(10)}>
          <MessageBoardItemContent>
            <b>
              問題&nbsp;{count.toString(10)}
              <br />
            </b>
            {messages}
          </MessageBoardItemContent>
          <MessageBoardItemUesr>
            <b>留言者｜{username}</b>&nbsp;&nbsp;&nbsp;{phone}
            <p>{email}</p>
            <p>{new Date(createdAt).toLocaleString("zh-TW")}</p>
          </MessageBoardItemUesr>
        </MessageBoardItem>
      </>
    );
  });
};
