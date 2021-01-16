import React from 'react';
import { Dropdown, DropdownMenu, Icon, Menu, Radio } from 'semantic-ui-react'
import {useHistory} from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions/defaultAction'
import RightMenu from './RightMenu';

const NavMenu = ({menuItemStyle,menuStyle})=>{
    const globalState = useSelector(state=>state.defaultReducer)
    const dispatch = useDispatch();
    const activeItem = globalState.activeItem
    const history = useHistory()
    const handleItemClick = (e, { name }) => {
        dispatch(changePage(name))
        history.push(`/${name}`)
    }
    return (
        <Menu style={{zIndex:"1",...menuStyle}} className="TabsMenu" pointing secondary>
            <Menu.Item
            style={menuItemStyle}
            name='About-Me'
            active={activeItem === 'About-Me'}
            onClick={handleItemClick}
            />
            <Menu.Item
            style={menuItemStyle}
            name='Skils'
            active={activeItem === 'Skils'}
            onClick={handleItemClick}
            />
            <Menu.Item
            style={menuItemStyle}
            name='Realisations'
            active={activeItem === 'Realisations'}
            onClick={handleItemClick}
            />
            <Menu.Item
            style={menuItemStyle}
            name='Certifications'
            active={activeItem === 'Certifications'}
            onClick={handleItemClick}
            />
            <RightMenu/>
      </Menu>
    )
}
  
export default NavMenu;