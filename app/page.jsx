'use client';
import React, { useState } from 'react';
import Hero from '@components/Hero';
import LearnMore from '@components/LearnMore';
import PromptForm from '@components/PromptForm';
import PromptResults from '@components/PromptResults';
import { chat } from '../app/openai';

export default function Home() {
	const [apiData, setApiData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// Once the form is submitted, we come here and process all the data
	// Once the data is processed, we set the apiData state which is then passed on to PromptResults
	const handleFormSubmit = async ({ topic, numberOfQuestions, learnerLevel, questionType, answersIncluded }) => {
		try {
			setIsLoading(true);
			const response = await chat(topic, numberOfQuestions, learnerLevel, questionType, answersIncluded);
			setApiData(response);
		} catch (error) {
			setApiData(null);
			setError(error); // Set the error state
		}
		setIsLoading(false);
	};

	let clearResults = () => {
		setApiData(null);
	};

	return (
		<main>
			<Hero />
			<LearnMore />
			<PromptForm
				onFormSubmit={handleFormSubmit}
				clearResults={() => clearResults}
			/>
			<PromptResults
				data={apiData}
				isLoading={isLoading}
				error={error}
			/>
		</main>
	);
}
