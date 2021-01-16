import React from 'react';
import { Card, CardContent, Reveal,Image, CardHeader, CardDescription, } from 'semantic-ui-react';
import placeholder from '../assets/placeholder.png'
const RealCard = ({title,image,description,themeStyle})=>{
    return <Reveal animated='move down'>
                <Reveal.Content visible>
                <Card style={themeStyle}>
                    <CardDescription>
                    <h3 style={themeStyle}>{title}</h3>
                    </CardDescription>
                    <CardContent style={themeStyle}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officiis eveniet iste, alias aut adipisci inventore quidem ex perferendis distinctio fugiat deserunt libero dolor consequatur quod nisi non hic quia!</p>
                    </CardContent>
                </Card>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image style={styles.img} src={placeholder} rounded size="medium"/>
                </Reveal.Content>
            </Reveal>
}
const styles = {
    img:{
        width:'291px'
    }
}
export default RealCard;