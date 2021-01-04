import React from "react";
import {
  ProgressBarContainer,
  StepLine,
  StepContainer,
  StepNumber,
  StepName,
} from "./style";

export function ProgressBar() {
  return (
    <ProgressBarContainer>
      <StepContainer>
        <StepNumber selected="1">1</StepNumber>
        <StepName>登入會員</StepName>
      </StepContainer>
      <StepContainer>
        <StepLine></StepLine>
        <StepNumber selected="2">2</StepNumber>
        <StepName>填寫地址與付款</StepName>
      </StepContainer>
    </ProgressBarContainer>
  );
}
