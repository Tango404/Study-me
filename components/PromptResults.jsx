import React, { useState } from 'react';

const PromptResults = ({ data, isLoading, error }) => {
	const [showAnswer, setShowAnswer] = useState({});

	const toggleAnswer = (question) => {
		setShowAnswer((prevShowAnswer) => ({
			...prevShowAnswer,
			[question]: !prevShowAnswer[question],
		}));
	};

	const createCard = () => {
		if (data !== null) {
			return data.map((questions) => (
				<div
					key={questions.question}
					className="bg-white shadow rounded-lg p-5 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mx-2 my-4 relative"
				>
					<div className="w-full h-1.5 mb-4 rounded-lg blue_btn"></div>
					<div className="flex flex-col h-full">
						<h2 className="text-lg font-bold mb-2">{questions.question}</h2>
						<ol className="list-disc pl-4 flex-grow">
							{questions.options.map((option, index) => (
								<li key={option}>
									{String.fromCharCode(65 + index)}) {option}
								</li>
							))}
						</ol>
						{questions.hasOwnProperty('correctAnswer') ? (
							<button
								onClick={() => toggleAnswer(questions.question)}
								className="mt-10 mb-5 rounded-md blue_btn hover:shadow-xl ease-in-out duration-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{showAnswer[questions.question] ? 'Hide Answer' : 'View Answer'}
							</button>
						) : (
							''
						)}
						{showAnswer[questions.question] && questions.hasOwnProperty('correctAnswer') && <p className="mb-5 text-gray-700">Correct Answer: {questions.correctAnswer}</p>}
					</div>
				</div>
			));
		} else if (error) {
			return <p className="text-lg font-bold mb-2">Sorry, looks like there was an error. Please refresh the page, or press the clear button and try again!</p>;
		} else {
			return null;
		}
	};

	return (
		<section
			id="promptResults"
			className="flex flex-wrap justify-center"
		>
			{isLoading ? (
				<div
					id="loading"
					role="status"
					className="w-full flex-center flex-col my-20"
				>
					<svg
						aria-hidden="true"
						className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 text-center"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span className="sr-only">Loading...</span>
				</div>
			) : (
				<div className="flex flex-wrap justify-center">{createCard()}</div>
			)}
		</section>
	);
};

export default PromptResults;
