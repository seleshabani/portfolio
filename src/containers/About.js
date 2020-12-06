import React from 'react'
import { Image } from 'semantic-ui-react'
import sele from '../assets/sele.jpg'

const About = ()=>{
    return(
        <div>
            <Image src={sele} size='small' circular/>
            <h1>Hi, i'm Sele Shabani.</h1>
        </div>
    )
}
export default About;