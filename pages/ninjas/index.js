import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const userJsonData = await res.json();

	return {
		props: { ninjas: userJsonData },
	};
};

const Ninjas = ({ ninjas }) => {
	return (
		<>
			<Head>
				<title>Ninja List | Lists</title>
				<meta name="keywords" content="lists" />
			</Head>
			<div>
				<h1>Ninjas List</h1>
				{ninjas.map((ninja) => (
					<Link
						key={ninja.id}
						className={styles.single}
						href={`/ninjas/${ninja.id}`}
					>
						<h3>{ninja.name}</h3>
					</Link>
				))}
			</div>
		</>
	);
};

export default Ninjas;
