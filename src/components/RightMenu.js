import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import {Menu,Dropdown,DropdownMenu,Icon,Radio} from 'semantic-ui-react'
import { changeTheme } from '../actions/defaultAction';
const RightMenu = ()=>{
   const [flag,setFlag] = useState(false);
   const dispatch = useDispatch();
   const toggleNightMode = useCallback(()=>{
     
      const canvas = document.querySelectorAll('canvas');
      const body = document.querySelector('body');
      
      if (canvas.length>1) {
         setFlag(!flag);
         if (flag) {
            canvas[1].style.backgroundColor = 'white';
            body.style.color = 'black';
         }else{
            canvas[1].style.backgroundColor = 'black';
            body.style.color = 'white';
         }
         dispatch(changeTheme());
      }
   })

    return  <Menu.Menu position='right'>
            <Menu.Item>
               {flag?<Icon name="moon"/>:<Icon name="sun"/>}
               <Radio slider={true} onChange={toggleNightMode}/>
            </Menu.Item>
            <Menu.Item>
               <Dropdown placeholder='Trad'>
                  <DropdownMenu>
                     <Dropdown.Item>
                           <h3>Fr</h3>
                     </Dropdown.Item>
                     <Dropdown.Item>
                           <h3>Us</h3>
                     </Dropdown.Item>
                  </DropdownMenu>
               </Dropdown>
            </Menu.Item>
        </Menu.Menu>
}
export default RightMenu;