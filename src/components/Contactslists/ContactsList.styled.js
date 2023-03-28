import styled from "styled-components";

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-bottom: 1px solid #9baacf;
  font-size: 20px;
  color: #9baacf;
  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const EmptyList = styled.div`
  max-width: 200px;
  text-align: center;
  font-size: 14px;
`;