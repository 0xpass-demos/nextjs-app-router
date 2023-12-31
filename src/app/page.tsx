import { ConnectButton } from "0xpass";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.centerText}>
            <h1 className={styles.title}>0xPass</h1>
            <p className={styles.subtitle}>
              Connect with your wallet to see what&apos;s possible with 0xPass.
            </p>
            <div style={{ marginTop: "10px" }}>
              <ConnectButton />
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <a
              href="https://docs.0xpass.io/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about 0xPass features and API.</p>
          </a>

          <a
              href="https://dashboard.0xpass.io/register"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
          >
            <h2>
              Get Started <span>-&gt;</span>
            </h2>
            <p>Get started using a super powered wallet today</p>
            <p className={styles.subtitle}>
              Connect web2 and web3 login methods, integrate with embedded wallet
              providers, and efficiently manage users, all in one place.
            </p>
          </a>
        </div>
      </main>
  );
}
