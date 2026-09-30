import "../styles/form.css";

function Contact({
	isContactSubmitted,
	setIsContactSubmited,
	fullName,
	setFullName,
	email,
	setEmail,
	phone,
	setPhone,
}) {
	function handleClick(e) {
		e.preventDefault();
		setIsContactSubmited(!isContactSubmitted);
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
		<form onSubmit={handleClick}>
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
			<button>{isContactSubmitted ? "Edit" : "Submit"}</button>
		</form>
	);
}

export default Contact;
