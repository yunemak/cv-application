import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="app">
			<div className="form-field">
				<h1>CV Application</h1>
				<Contact />
				<hr />
				<form>
					<Education />
				</form>
				<form>
					<Experience />
				</form>
			</div>
			<div className="output-field"></div>
		</div>
	);
}

export default App;
