import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="app">
			<h1>CV Application</h1>
			<Contact />
			<hr />
			<Education />
			<hr />
			<Experience />
		</div>
	);
}

export default App;
