import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

const openAIKey = process.env.NEXT_PUBLIC_API_KEY;

// Create an open ai instance
function configureOpenAi() {
	const configuration = new Configuration({
		apiKey: openAIKey,
	});

	const apiConfig = new OpenAIApi(configuration);
	return apiConfig;
}

function buildPrompt(topic, numberOfQuestions, learnerLevel, questionType, answersIncluded) {
	const prompt = `I'm studying the following topic:
  
  --- Begin Topic ---
  ${topic}
  --- End Topic ---

  I need ${numberOfQuestions} ${questionType} questions, ${answersIncluded} the correct answer. 

  In terms of my knowledge level as a student, I am a ${learnerLevel} level student. 
  
  Please take this into account with your response.

  You must format your response as CLEAN JSON. Call the possible answers to the question 'options' which is an array of the different options, call the correct answer to the question 'correctAnswer' only include it if the prompt asks you to, 
  and call the question 'question'.
  
  You must be consistent within your JSON responses, do not send me responses which aren't JSON.
  `;

	console.log(prompt);
	return prompt;
}

async function chat(topic, numberOfQuestions, learnerLevel, questionType, answersIncluded) {
	// Setting up the OpenAI instance
	const openai = configureOpenAi();

	// List of preset messages basically telling the LLM how to act, and the user crafted prompt
	const messages = [
		// Tell LLM how to act
		{
			role: 'system',
			content: 'You are a college-level educational assistant, helping students study topics.',
		},
		// User Prompt
		{
			role: 'user',
			content: buildPrompt(topic, numberOfQuestions, learnerLevel, questionType, answersIncluded),
		},
	];

	try {
		// Send the messages to the LLM
		const completion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: messages,
		});

		console.log(completion.data.choices[0].message.content);

		let response = JSON.parse(completion.data.choices[0].message.content);
		response = response.questions;
		return response;
	} catch (error) {
		if (error.response) {
			console.log(error.response.status);
			console.log(error.response.data);
		} else {
			console.log(error.message);
		}
		return error;
	}
}

export { configureOpenAi, buildPrompt, chat };
