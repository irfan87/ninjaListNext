import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Welcome to the Ninja List, where you can search your favorite ninja
					here
				</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed
					ipsam cupiditate optio dolore, iure, laboriosam similique saepe
					aliquam fuga illo beatae soluta molestias expedita excepturi, ipsa
					tenetur quibusdam iste!
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
					dolorum, odit blanditiis perspiciatis ab numquam ea voluptatibus
					dignissimos natus mollitia assumenda explicabo iusto voluptatem
					repudiandae dolore culpa, repellat itaque autem.
				</p>
				<Link href="/ninjas" className={styles.btn}>
					See other ninjas
				</Link>
			</div>
		</>
	);
}
