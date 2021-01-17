import React from 'react'
import { Icon, Image, Modal } from 'semantic-ui-react'
import sele from '../assets/sele_mini.jpg'
import sele2 from '../assets/sele.jpg'
import { useSelector } from 'react-redux'
const About = ()=>{
    const reducerState = useSelector(dr=>dr.defaultReducer);

    return(
        <div style={styles.main}>
            <div style={styles.presentation}>
                <Modal size="mini" trigger={<Image style={styles.img} src={sele} size='small' circular bordered avatar/>}>
                    <Image src={sele2} bordered/>
                </Modal>
                <div style={styles.contentBloc}>
                    <h1 style={styles.h1}>Hi, i'm {"<Sele Shabani/>"}.</h1>
                    <h2 style={styles.h2}>
                        Develloper and web pationate, Living at Kinshasa Drc.
                    </h2>
                    <p>
                        <a style={reducerState.theme==='light'?styles.aLight:styles.aDark} href="facebook.com"><Icon name="facebook"></Icon></a>
                        <a style={reducerState.theme==='light'?styles.aLight:styles.aDark} href="instagram.com"><Icon name="instagram"></Icon></a>
                        <a style={reducerState.theme==='light'?styles.aLight:styles.aDark} href="twitter.com"><Icon name="twitter"></Icon></a>
                        <a style={reducerState.theme==='light'?styles.aLight:styles.aDark} href="github.com/seleshabani"><Icon name="github"></Icon></a>
                    </p>
                </div>
            </div>
            <div style={styles.row}>
                <div style={styles.rowContent1}>
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
                            I came to get my graduation bac +3 on computer science, and i'm searching a good job where i can exploit my talent, if you know one Call Me! ;).
                        </p>
                    </div>
                </div>
                <div style={styles.rowContent2}>
                    <div style={styles.aside}>
                        <h2 style={{...styles.h2,...styles.h2aside}}>#Contact</h2>
                        <ul style={styles.ul}>
                            <li style={styles.li}>+243821419199</li>
                            <li style={styles.li}>+243997187449</li>
                            <li style={styles.li}>seleshabani4@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
const styles = {
    main:{
        display:'flex',
        flexDirection:'column',
        zIndex:'1'
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
        marginRight:'105px',
        cursor:'pointer'
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
    aLight:{
        textDecoration:'none',
        color:'black',
        fontSize:'1.2rem',
        margin:'5px'
    },
    aDark:{
        textDecoration:'none',
        color:'white',
        fontSize:'1.2rem',
        margin:'5px'
    },
    h2aside:{
        textAlign:'left'
    },
    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'baseline'
    },
    rowContent1:{
        width:'60%'
    },
    rowContent2:{
        width:'30%'
    },
    ul:{
        listStyle:'none',
        fontFamily:'Nerko One',
        textAlign:'left',
        marginTop:'0',
        fontSize:'1.5rem',
        paddingLeft:'0'
    },
    li:{
        marginBottom:'10px'
    }
}
export default About;