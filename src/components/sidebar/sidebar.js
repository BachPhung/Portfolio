import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './sidebarElement'
function Sidebar({toggle,isOpen}) {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="project" onClick={toggle}>
                        Project
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                    
                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
