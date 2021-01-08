import { Card, CardContent, CardDescription, Icon } from 'semantic-ui-react'
import styles from '../assets/skillsStyles';
const Webdev = ()=>{
    return (
        <div style={styles.row}>
                <h2 style={styles.h2}>#webdev</h2>
                <div style={styles.rowContent}>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="node js"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>Node js</h2>
                        </CardDescription>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="laravel"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>Laravel</h2>
                        </CardDescription>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="php"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>Symfony</h2>
                        </CardDescription>
                    </Card>
                </div>
                <div style={styles.rowContent2}>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="react"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>React</h2>
                        </CardDescription>
                    </Card>
                    <Card style={styles.card}>
                        <CardContent>
                            <Icon style={styles.icone} name="wordpress"/>
                        </CardContent>
                        <CardDescription>
                            <h2 style={styles.h2card}>wordpress</h2>
                        </CardDescription>
                    </Card>
                </div>
            </div>
    )
}
export default Webdev;