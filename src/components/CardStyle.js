import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 240px;
  height: 380px;
  border: #efefef 1px solid;
  border-radius: 12px;
  background-color: white;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  width: 240px;
  height: 240px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #efefef;
  display: flex;
`;

export const CardContent = styled.div`
  width: 240px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: white;
  display: flex;
`;
