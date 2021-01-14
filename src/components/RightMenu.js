import React, { useCallback, useState,useEffect } from 'react'
import {Menu,Dropdown,DropdownMenu,Icon,Radio} from 'semantic-ui-react'
const RightMenu = ()=>{
    const [flag,setFlag] = useState(false);

   //  useEffect(()=>{
   //    toggleNightMode();
   //  },[]);

    const toggleNightMode = useCallback(()=>{
       let canvas = document.querySelectorAll('canvas')[1];
       let body = document.querySelector('body');
       let cards = document.querySelectorAll('.ui.card');
       setFlag(flag=>!flag);

         if (flag) {
            
             canvas.style.backgroundColor = 'black';
             body.style.color = 'white';
             if (cards.length>1) {
               cards.forEach(card=>{
                  card.style.backgroundColor = 'black';
               })
             }
            
         }else{
             canvas.style.backgroundColor = 'white';
             body.style.color = 'black';
             if (cards.length>1) {
               cards.forEach(card=>{
                  card.style.backgroundColor = 'white';
               })
             }
         }
   })

    return  <Menu.Menu position='right'>
            <Menu.Item>
               {flag?<Icon name="sun"/>:<Icon name="moon"/>}
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