import Education from "./components/Education";
import Experience from "./components/Experience";
import InputField from "./components/InputField";

function App() {
	return (
		<div className="app">
			<div className="form-field">
				<h1>CV Application</h1>
				<form>
					<InputField labelText="Full Name" type="text" />
					<InputField labelText="Email" type="email" />
					<InputField labelText="Phone" type="tel" />
					<button>Submit</button>
				</form>
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
