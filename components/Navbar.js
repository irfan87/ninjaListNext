import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<Image src="/logo.png" alt="logo" width={128} height={77} />
				</Link>
			</div>
			<Link href="/">Home</Link>
			<Link href="/ninjas">Ninja Listings</Link>
			<Link href="/about">About</Link>
		</nav>
	);
};

export default Navbar;
