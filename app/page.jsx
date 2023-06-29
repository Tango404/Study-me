import Hero from '@components/Hero';
import AboutUs from '@components/AboutUs';
import PromptForm from '@components/PromptForm';

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutUs />
			<PromptForm />
		</main>
	);
}
