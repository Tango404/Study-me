import '@styles/globals.css';
import Navbar from '@components/Navbar';

export const metadata = {
	title: 'Study Me',
	description: 'A study tool which generates questions based on the users input',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>

				<main className="app">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
