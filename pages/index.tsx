import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  The future of WEB3 is here,
                </span>
                <br />
                faster than ever.
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="#"
                  target="_blank"
                >
                  Our platform
                </Link>{" "}
                gives you the tools you need to create audited, performant, and
                flexible Web3 platform in <b>hours</b>, <i>not months</i>.
              </p>

              <div className={styles.heroCtaContainer}>
                <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
                <Link
                  className={styles.secondaryCta}
                  style={{margin: "10px"}}
                  href="#"
                  target="_blank"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
