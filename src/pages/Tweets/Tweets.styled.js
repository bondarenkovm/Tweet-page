import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  color: black;
  margin-bottom: 10px;
  margin-top: 10px;
  display: inline-block;
  border-radius: 10px;
  background-color: #d5b4fa;
  :hover {
    background-color: #4fa94d;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3), 0 4px 7px 0 rgba(0, 0, 0, 0.19);
  }
`;
