import React from 'react';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className="flex-center w-full mb-16 pt-3 ">
			<Image
				src="/assets/images/logo.png"
				alt="Logo"
				width={30}
				height={30}
			/>
			<p className="logo_text">Study Me</p>
		</nav>
	);
};

export default Navbar;
