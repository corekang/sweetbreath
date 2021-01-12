import React from "react";
import styled from "styled-components";
import { ScaleLoader } from "react-spinners";

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(55, 55, 55, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <LoadingWrapper>
      <ScaleLoader
        height={35}
        width={4}
        radius={2}
        margin={2}
        color={"#6e70ff"}
      />
    </LoadingWrapper>
  );
}
