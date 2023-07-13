'use client';
import React from 'react';
import { useState } from 'react';
import { chat } from '../app/openai';
import PromptResults from './PromptResults';
import { Link } from 'react-scroll';

const PromptForm = ({ onFormSubmit, clearResults }) => {
	const [formData, setFormData] = useState({
		topic: 'Dog Breeds',
		numberOfQuestions: 5,
		learnerLevel: 'Beginner',
		questionType: 'True/False',
		answersIncluded: 'including',
	});

	const handleChange = (e) => {
		// Gets the name field, and value of that name field
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onFormSubmit(formData);

		setTimeout(() => {
			const loadingSection = document.getElementById('loading');
			if (loadingSection) {
				loadingSection.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);

		// Reset the form, and the actual data
		e.target.reset();
		setFormData({
			topic: 'Dog Breeds',
			numberOfQuestions: 5,
			learnerLevel: 'Beginner',
			questionType: 'True/False',
			answersIncluded: true,
		});
	};

	return (
		<section
			id="promptForm"
			className="my-80 mb-20 "
		>
			<h2 className="head_text text-center p-10">
				Start <span className="green_gradient"> Studying! </span>
			</h2>
			<form
				id="study-form"
				method="POST"
				onSubmit={handleSubmit}
				action="#"
				className="w-full max-w-lg mx-auto"
			>
				{/* Topic Section */}
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="topic"
						>
							Topic
						</label>
						<textarea
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="topic"
							name="topic"
							placeholder="E.g. Dog Breeds"
							onChange={handleChange}
							cols="30"
							rows="5"
						></textarea>
						<p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
					</div>
				</div>

				<div className="flex flex-wrap -mx-3 mb-2">
					{/* Number of questions */}
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="numberOfQuestions"
						>
							Number of Questions
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="numberOfQuestions"
							onChange={handleChange}
							name="numberOfQuestions"
							type="number"
							placeholder="1"
							max={20}
							min={1}
						/>
					</div>

					{/* Learner Level*/}
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="learnerLevel"
						>
							Learner Level
						</label>
						<div className="relative">
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="learnerLevel"
								onChange={handleChange}
								name="learnerLevel"
							>
								<option value={'Beginner'}>Beginner</option>
								<option value={'Intermediate'}>Intermediate</option>
								<option value={'Advanced'}>Advanced</option>
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>

					{/* Question Type */}
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="questionType"
						>
							Question Type
						</label>
						<div className="relative">
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="questionType"
								onChange={handleChange}
								name="questionType"
							>
								<option value={'True/False'}>True/False</option>
								<option value={'Multiple Choice'}>Multiple Choice</option>
								<option value={'Short Answer'}>Short Answer</option>
								<option value={'Fill In The Blank'}>Fill In The Blank</option>
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>

					{/* Answers Included */}
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="answersIncluded"
						>
							Answers Included
						</label>
						<div className="relative">
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="answersIncluded"
								onChange={handleChange}
								name="answersIncluded"
							>
								<option value={'including'}>Yes</option>
								<option value={'excluding'}>No</option>
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-evenly">
					<button
						type="submit"
						className="hover:cursor-pointer rounded-md blue_btn hover:shadow-xl ease-in-out duration-300 px-3.5 py-2.5 my-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/3 text-center"
					>
						Submit
					</button>
					<button
						type="reset"
						onClick={clearResults()}
						className="hover:cursor-pointer rounded-md green_btn hover:shadow-xl ease-in-out duration-300 px-3.5 py-2.5 my-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/3 text-center"
					>
						Clear
					</button>
				</div>
			</form>
		</section>
	);
};

export default PromptForm;
