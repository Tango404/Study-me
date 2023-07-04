import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
config();

// Create an open ai instance
function configureOpenAi() {
	const configuration = new Configuration({
		apiKey: process.env.API_KEY,
	});

	const apiConfig = new OpenAIApi(configuration);
	return apiConfig;
}

function buildPrompt() {}

openai.createChatCompletion({
	model: 'gpt-3.5-turbo',
	messages: '',
});
