import "../styles/form.css";

function Contact() {
	return (
		<form>
			<div className="contact-form">
				<label htmlFor="full-name">Full Name</label>
				<input id="full-name" type="text" />
				<label htmlFor="email">Email</label>
				<input id="email" type="email" />
				<label htmlFor="phone">Phone</label>
				<input id="phone" type="tel" />
			</div>
			<button>Submit</button>
		</form>
	);
}

export default Contact;
