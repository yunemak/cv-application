import "../styles/form.css";
import { useState } from "react";

function Contact() {
	let [isSubmitted, setIsSubmited] = useState(false);
	let [fullName, setFullName] = useState("");
	let [email, setEmail] = useState("");
	let [phone, setPhone] = useState("");

	function handleClick(e) {
		e.preventDefault();
		setIsSubmited(!isSubmitted);
	}

	function handleFullName(e) {
		setFullName(e.target.value);
	}

	function handleEmail(e) {
		setEmail(e.target.value);
	}

	function handlePhone(e) {
		setPhone(e.target.value);
	}

	return (
		<form>
			<div className="contact-form">
				<label htmlFor="full-name">Full Name</label>
				<input
					id="full-name"
					type="text"
					onChange={handleFullName}
					value={fullName}
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					onChange={handleEmail}
					value={email}
				/>
				<label htmlFor="phone">Phone</label>
				<input
					id="phone"
					type="tel"
					onChange={handlePhone}
					value={phone}
				/>
			</div>
			<button onSubmit={handleClick}>
				{isSubmitted ? "Edit" : "Submit"}
			</button>
		</form>
	);
}

export default Contact;
