import Link from "next/link";

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>Where are the ninjas?</h1>
			<h2>Maybe they have found the better Dojo to train.</h2>
			<h2>=(</h2>
			<p>
				Back to our <Link href="/">Dojo</Link>
			</p>
		</div>
	);
};

export default NotFound;
