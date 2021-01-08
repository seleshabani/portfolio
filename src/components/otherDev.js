import { Card, CardContent, CardDescription, Icon } from 'semantic-ui-react'
import styles from '../assets/skillsStyles';
const Otherdev = ()=>{
    return (
        <div style={styles.row}>
                <h2 style={styles.h2}>#Others</h2>
                <div style={styles.rowContent}>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="github"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>Github</h2>
                        </CardDescription>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="cloud"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>heroku</h2>
                        </CardDescription>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="google"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>Firebase</h2>
                        </CardDescription>
                    </Card>
                </div>
            </div>
    )
}
export default Otherdev;