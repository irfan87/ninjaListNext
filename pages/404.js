import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, [router]);

	return (
		<>
			<Head>
				<title>Ninja List | 404</title>
				<meta name="keywords" content="not found" />
			</Head>
			<div className="not-found">
				<h1>Where are the ninjas?</h1>
				<h2>Maybe they have found the better Dojo to train.</h2>
				<h2>=(</h2>
				<p>
					Back to our <Link href="/">Dojo</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
