import styles from './Login.module.css'
import leaf from '../../assets/leaf.svg'

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <img className={styles.leafImage} src={leaf} alt="Leaf background" />
      </div>

      <div className={styles.right}>
        <h1 className={styles.heading}>
          Hello, <span className={styles.guyss}>Guyss!</span>
        </h1>

        <div className={styles.tabs}>
          <span className={styles.tabActive}>Login</span>
          <span className={styles.tab}>SignUp</span>
        </div>

        <form className={styles.form}>
          <input type="email" placeholder="Enter your email" />
          <div className={styles.passwordWrap}>
            <input type="password" placeholder="Enter Password" />
            <svg className={styles.eye} viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M3 3l18 18M10.6 6.1A9.8 9.8 0 0 1 12 6c5 0 9 6 9 6a15 15 0 0 1-3.2 3.6M6.6 6.7C4.2 8.3 3 12 3 12s4 6 9 6c1.4 0 2.7-.4 3.9-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button type="submit">Login</button>
        </form>

        <p className={styles.or}>Or</p>

        <div className={styles.socials}>
          <svg viewBox="0 0 48 48" width="38" height="38">
            <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3A12 12 0 1 1 24 12a11.9 11.9 0 0 1 8.1 3.1l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.7-.4-3.9z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12a11.9 11.9 0 0 1 8.1 3.1l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44a20 20 0 0 0 13.5-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44z" />
            <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39 44 34 44 24c0-1.3-.1-2.7-.4-3.9z" />
          </svg>
          <svg viewBox="0 0 48 48" width="35" height="35">
            <circle cx="24" cy="24" r="22" fill="#1877f2" />
            <path fill="#fff" d="M26.5 38V26h4l.6-4.7h-4.6v-3c0-1.4.4-2.3 2.3-2.3h2.4V11.8c-.4-.1-1.9-.2-3.5-.2-3.5 0-5.8 2.1-5.8 6v3.5h-4V26h4v12h4.6z" />
          </svg>
        </div>
      </div>
    </div>
  )
}