function Contact() {
	return (
		<form>
			<div className="contact-form">
				<label>Full Name</label>
				<input type="text" />
				<label>Email</label>
				<input type="email" />
				<label>Phone</label>
				<input type="tel" />
			</div>
			<button>Submit</button>
		</form>
	);
}

export default Contact;
