import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 20px;
  color: #fff;
  background-color: #4fa94d;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  /* background-color: #4fa94d;
  padding: 20px 0px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2); */
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  &.active {
    color: black;
  }
`;
