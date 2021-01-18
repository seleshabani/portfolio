import React, { useState } from 'react';
import { Button, Icon, Sidebar, SidebarPushable, SidebarPusher } from 'semantic-ui-react';

const MenuForMobile = ()=>{
    const [visible,setVisible] = useState(false);
    const toggler = ()=>{
        let intermed = visible === false?true:false
        setVisible(intermed)
    }
    return <>
            <SidebarPushable>
                <Sidebar
                    animation='push'
                    icon='labeled'
                    vertical
                    visible={visible}
                    style={styles.sidebar}>
                    <h2>llll</h2>
                </Sidebar>
                <SidebarPusher>
                    <Button onClick={toggler}><Icon name='bars'/></Button>
                </SidebarPusher>
            </SidebarPushable>
    </>
}
const styles = {
   pushable:{
    width:'max-content'
   },
   sidebar:{
    backgroundColor:'rgba(62,63,68,0.4)',
   }
}
export default MenuForMobile;