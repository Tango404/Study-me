'use client';
import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

config.autoAddCss = false;

const Hero = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Generate study questions
				<br />
				<span className="blue_gradient text-center">Pass all your future exams</span>
			</h1>
			<p className="desc text-center">Study Me is an open-source tool which utilizes the OpenAI API to generate study questions based on user input</p>
			<Link
				to="promptForm"
				smooth={true}
				duration={700}
				className="hover:cursor-pointer rounded-md blue_btn hover:shadow-xl ease-in-out duration-300 px-3.5 py-2.5 my-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Get started
			</Link>
			<Link
				to="aboutUs"
				smooth={true}
				duration={700}
				className=" hover:cursor-pointer"
			>
				<FontAwesomeIcon
					icon={faArrowDown}
					bounce
					style={{ color: '#4e74b7', height: '2rem', margin: '2rem' }}
				/>
			</Link>
		</section>
	);
};

export default Hero;
