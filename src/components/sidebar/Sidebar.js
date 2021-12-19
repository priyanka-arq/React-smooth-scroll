import React from "react";
import {
  SidebarContainer,
  Closeicon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./sidebarStyle";

export default function Sidebar({ toogle, isOpen }) {
  //on sidebar open onclick toogle to close the sidebar
  return (
    <SidebarContainer isOpen={isOpen} onClick={toogle}>
      <Icon>
        <Closeicon></Closeicon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* SidebarLink are react-scroll*/}
          <SidebarLink to="about" onClick={toogle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toogle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toogle}>
            Services
          </SidebarLink>
          <SidebarLink to="enrol" onClick={toogle}>
            Enrol
          </SidebarLink>
          <SidebarLink to="contact" onClick={toogle}>
            Contact us
          </SidebarLink>
          <SidebarLink to="enrol" onClick={toogle}>
            Enrol
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/enrol">Enrol</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
