import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>
				Welcome to the Ninja List, where you can search your favorite ninja here
			</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed
				ipsam cupiditate optio dolore, iure, laboriosam similique saepe aliquam
				fuga illo beatae soluta molestias expedita excepturi, ipsa tenetur
				quibusdam iste!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
				dolorum, odit blanditiis perspiciatis ab numquam ea voluptatibus
				dignissimos natus mollitia assumenda explicabo iusto voluptatem
				repudiandae dolore culpa, repellat itaque autem.
			</p>
			<Footer />
		</div>
	);
}
