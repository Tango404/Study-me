'use client';
import React from 'react';

const PromptResults = ({ data }) => {
	const createCard = () => {
		if (data !== null) {
			return data.map((question) => (
				<div key={question.question}>
					<h2>{question.question}</h2>
					<ul>
						{question.options.map((option) => (
							<li key={option}>{option}</li>
						))}
					</ul>
				</div>
			));
		} else {
			return;
		}
	};

	return <section className="mx-auto align-middle text-center">{createCard()}</section>;
};

export default PromptResults;
