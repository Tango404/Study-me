'use client';
import React from 'react';

const PromptResults = ({ data }) => {
	const createCard = () => {
		if (data !== null) {
			return data.map((questions) => (
				<div
					key={questions.question}
					className=""
				>
					<h2>{questions.question}</h2>
					<ol>
						{questions.options.map((option, index) => (
							<li key={option}>
								{String.fromCharCode(65 + index)}) {option}
							</li>
						))}
					</ol>
					{questions.hasOwnProperty('correctAnswer') ? <p>{questions.correctAnswer}</p> : ''}
				</div>
			));
		} else {
			return;
		}
	};

	return <section className="mx-auto align-middle text-center">{createCard()}</section>;
};

export default PromptResults;
