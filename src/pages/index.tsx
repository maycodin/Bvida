import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bvida</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar">
        <Image
          src="/Layer1.png"
          alt="bvida Logo"
          className="logo"
          width={140}
          height={31.59}
          priority
        />
        <div className="nav-btn">
          <p>Solutions</p>
          <p>Partners</p>
          <p>Investors</p>
        </div>

        <div className="btn">Contact Sales</div>
      </nav>
      <main className="main">
        <p>
          Get Quality medications at <br />
          <span>giveaway prices</span>
        </p>
        <Image
          src="/frame.png"
          alt="bvida purpose"
          className="logo"
          width={1200}
          height={442.7}
          priority
        />
        <div className="form">
          <input type="text" placeholder="Enter your email" />
          <div className="btn2">Join us</div>
        </div>
      </main>
      <section>
        <div className="partners">
          <p className="head">OUR PARTNERS</p>
          <p className="subtitle">
            Current Great Partners with <span>BVIDA</span>
          </p>
          <div className="images">
            <Image
              src="/image 3.png"
              alt="bvida purpose"
              className="logo"
              width={226.79}
              height={80}
              priority
            />
            <Image
              src="/image 2.png"
              alt="bvida purpose"
              className="logo"
              width={65}
              height={65}
              priority
            />
            <Image
              src="/image 1.png"
              alt="bvida purpose"
              className="logo"
              width={200}
              height={45}
              priority
            />
            <Image
              src="/image 4.png"
              alt="bvida purpose"
              className="logo"
              width={133.3}
              height={59.9}
              priority
            />
            <Image
              src="/image 5.png"
              alt="bvida purpose"
              className="logo"
              width={80}
              height={80}
              priority
            />
          </div>
        </div>
        <div className="purpose bg-slate-600">
          <p>What we do</p>
          <div className="support">
            <div className="support-text">
              <p>FOR OUR PARTNERS</p>
              <h1>We support our pharmacy partners </h1>
              <span>
                We support our pharmacy partners (community, wholesalers,
                hospitals and industries) in offloading short-dated drug
                products by offering them to a wide audience at discounted
                prices to help prevent outright losses due to inevitable expiry.
              </span>
            </div>
            <Image
              src="/image 6.png"
              alt="bvida purpose"
              className="logo"
              width={500}
              height={463.7}
              priority
            />
          </div>
          <div className="access">
            <Image
              src="/image 7.png"
              alt="bvida purpose"
              className="logo"
              width={500}
              height={463.7}
              priority
            />
            <div className="access-text">
              <p>FOR OUR PATIENTS</p>
              <h1>Access to cheap medications</h1>
              <span>
                We provide our patients with the opportunity to purchase quality
                medications at giveaway prices! Yes, only giveaway prices
                guaranteed!
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="join">
          <p>Join us today!</p>
          <div className="form">
            <input type="text" placeholder="Enter your email" />
            <div className="btn2">Join us</div>
          </div>
        </div>
        <div className="foot">
          <div className="buy">
            <p>Buy</p>
            <ul>
              <li>Registration</li>
              <li>Special Requests</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="sell">
            <p>Sell</p>
            <ul>
              <li>Become a partner</li>
            </ul>
          </div>
          <div className="stay">
            <p>Stay Informed</p>
            <ul>
              <li>Bvida Blogs</li>
              <li>Bvida Community</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="contact">
            <p>Contact Us</p>
            <ul>
              <li>Email Us</li>
              <li>Call Us</li>
              <li>Text Us</li>
            </ul>
          </div>
        </div>
        <div className="links">
          <a href="">
            <Image
              src="/Vector.png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </a>
          <a href="">
            <Image
              src="/Vector (1).png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </a>
          <a href="">
            <Image
              src="/Vector (2).png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </a>
          <a href="">
            <Image
              src="/Vector (3).png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </a>
        </div>
        <Image
          src="/Asset 11 1.png"
          alt="Bvida Logo"
          className="bvida"
          width={120}
          height={27.12}
          priority
        />
      </footer>
      {/* <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects
              bzalll fush.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  );
}
