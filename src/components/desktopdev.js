import { Card, CardContent, CardDescription, Icon } from 'semantic-ui-react'
import styles from '../assets/skillsStyles';
const Desktopdev = ({theme})=>{
    return (
        <div style={styles.row}>
                <h2 style={styles.h2}>#Desktopdev</h2>
                <div style={styles.rowContent}>
                    <Card style={theme==='light'?styles.card:{...styles.card,...{backgroundColor:'black'}}}>
                        <CardContent>
                            <Icon style={styles.icone} name="computer"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>Electron js</h2>
                        </CardDescription>
                    </Card>
                    <Card style={theme==='light'?styles.card:{...styles.card,...{backgroundColor:'black'}}}>
                        <CardContent>
                            <Icon style={styles.icone} name="computer"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>Vb.net</h2>
                        </CardDescription>
                    </Card>
                    <Card style={theme==='light'?styles.card:{...styles.card,...{backgroundColor:'black'}}}>
                        <CardContent>
                            <Icon style={styles.icone} name="computer"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>windev</h2>
                        </CardDescription>
                    </Card>
                </div>
            </div>
    )
}
export default Desktopdev;