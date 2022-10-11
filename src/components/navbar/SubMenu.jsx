
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";


function SubMenu({ route }) {
  return (
    <>
      <SMenu>
        <MenuButton>{route.name}</MenuButton>
        <SubRoutesContainer>
          {route.subRoutes.map((subRoute) => (
            <SubRoute to={subRoute.link} key={subRoute.name}>
              {subRoute.name}
            </SubRoute>
          ))}
        </SubRoutesContainer>
      </SMenu>
    </>
  );
}

export default SubMenu;

const SubRoutesContainer = styled.div`
  margin-top: 2px;
  position: absolute;
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.1s ease-in-out, opacity 0.1s ease-in-out;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  margin-right: 2rem;
  &:hover {
    transition: 0.1s ease;
    cursor: pointer;
    color: blue;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: 0.1s ease-in;

  &:hover {
    transition: 0.1s ease-in;
    color: #6f07f6;
    background-color: #d0a7fc;
    hideOnOutsideClick: true
  }
`;
