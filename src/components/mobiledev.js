import { Card, CardContent, CardDescription, Icon } from 'semantic-ui-react'
import styles from '../assets/skillsStyles';
const Mobiledev = ({theme})=>{
    return (
        <div style={styles.row}>
                <h2 style={styles.h2}>#MobileDev</h2>
                <div style={styles.rowContent}>
                    <Card style={theme==='light'?styles.card:{...styles.card,...{backgroundColor:'black'}}}>
                        <CardContent>
                            <Icon style={styles.icone} name="react"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>React Native</h2>
                        </CardDescription>
                    </Card>
                </div>
            </div>
    )
}
export default Mobiledev;