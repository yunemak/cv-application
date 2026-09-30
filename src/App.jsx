import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
	let [isContactSubmitted, setIsContactSubmited] = useState(false);
	let [fullName, setFullName] = useState("");
	let [email, setEmail] = useState("");
	let [phone, setPhone] = useState("");
	return (
		<div className="app">
			<div className="input-field">
				<h1>CV Application</h1>
				<Contact
					isContactSubmitted={isContactSubmitted}
					setIsContactSubmited={setIsContactSubmited}
					fullName={fullName}
					setFullName={setFullName}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
				/>
				<hr />
				<Education />
				<hr />
				<Experience />
			</div>
			<div className="output-field">
				<h1>CV Preview</h1>
			</div>
		</div>
	);
}

export default App;
