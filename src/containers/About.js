import React from 'react'
import { Icon, Image } from 'semantic-ui-react'
import sele from '../assets/sele_mini.jpg'

const About = ()=>{
    return(
        <div style={styles.main}>
            <div style={styles.presentation}>
                <Image style={styles.img} src={sele} size='small' circular bordered avatar/>
                <div style={styles.contentBloc}>
                    <h1 style={styles.h1}>Hi, i'm {"<Sele Shabani/>"}.</h1>
                    <h2 style={styles.h2}>
                        Develloper and web pationate, Living at Kinshasa Drc.
                    </h2>
                    <p>
                        <a style={styles.a} href="facebook.com"><Icon name="facebook"></Icon></a>
                        <a style={styles.a} href="instagram.com"><Icon name="instagram"></Icon></a>
                        <a style={styles.a} href="twitter.com"><Icon name="twitter"></Icon></a>
                        <a style={styles.a} href="github.com/seleshabani"><Icon name="github"></Icon></a>
                    </p>
                </div>
            </div>
            <div style={styles.aside}>
                <h2 style={{...styles.h2,...styles.h2aside}}>#Freeleance</h2>
                <p style={styles.p}>
                    You can call me for all software application(not necessary computer science projects) project you have, 
                    I will help you or your team for make it become reality.
                </p>
            </div>
            <div style={styles.aside}>
                <h2 style={{...styles.h2,...styles.h2aside}}>#ImSearchingAJob</h2>
                <p style={styles.p}>
                    I came to get my graduation bac +3 on computer science, and i'm searching a good job where i can exploit my talent, if you know one Call Me (+243821419199,+243997184779) ;).
                </p>
            </div>
        </div>
    )
}
const styles = {
    main:{
        display:'flex',
        flexDirection:'column'
    },
    presentation:{
        display:'flex',
        flexDirection:'row',
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "flex-start",
        fontFamily:'Nerko One',
    },
    img:{
        marginRight:'105px'
    },
    contentBloc:{
        display:'flex',
        flexDirection:'column',
    },
    h1:{
        fontFamily:'Nerko One',
        fontSize:'5rem',
        marginBottom:'0px'
    },
    h2:{
        fontFamily:'Nerko One',
        fontSize:'2rem',
    },
    aside:{
        display:'flex',
        flexDirection:'column',
        justifyContent: "left",
        marginTop:'20px',
    },
    p:{
        fontFamily:'Nerko One',
        textAlign:'left',
        fontSize:'1.5rem'
    },
    a:{
        textDecoration:'none',
        color:'black',
        fontSize:'1.2rem',
        margin:'5px'
    },
    h2aside:{
        textAlign:'left'
    }
}
export default About;