import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {Menu,Dropdown,DropdownMenu,Icon,Radio} from 'semantic-ui-react'
import { changeTheme } from '../actions/defaultAction';
const RightMenu = ()=>{
   const [theme,setTheme] = useState('light');//false=mode light
   const dispatch = useDispatch();
   
   const toggleNightMode = ()=>{
     let t = theme === 'light'?'dark':'light'
     setTheme(t)
   }

   useEffect(()=>{
      dispatch(changeTheme(theme))
   },[theme,dispatch])

    return  <Menu.Menu position='right'>
            <Menu.Item>
               {theme==='light'?<Icon color="yellow" name="sun"/>:<Icon color='grey' name="moon"/>}
               <Radio slider={true}  onChange={toggleNightMode}/>
            </Menu.Item>
            <Menu.Item>
               <Dropdown placeholder='Trad'>
                  <DropdownMenu>
                     <Dropdown.Item>
                           <h3>Fr</h3>
                     </Dropdown.Item>
                     <Dropdown.Item>
                           <h3>En</h3>
                     </Dropdown.Item>
                  </DropdownMenu>
               </Dropdown>
            </Menu.Item>
        </Menu.Menu>
}
export default RightMenu;