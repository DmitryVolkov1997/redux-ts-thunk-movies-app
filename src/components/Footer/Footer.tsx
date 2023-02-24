import styles from './Footer.module.scss';
import {Container} from '../Container'
import {ReactComponent as Logo} from './logo.svg'

interface FooterProps { }

export const Footer = ({ }: FooterProps) => {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.footerRow}>
                    <Logo className={styles.footerLogo}/>
                    <p className={styles.footerText}>
                        © 1999 ~ 2023 All content copyright of Cinema Online Asia and their respective owners
                    </p>
                </div>
            </Container>
        </div>
    )
}


