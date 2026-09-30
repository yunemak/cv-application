import "../styles/form.css";

function Education() {
	return (
		<form>
			<div className="education-form">
				<label htmlFor="school">School</label>
				<input id="school" type="text" />
				<label htmlFor="title-of-study">Title of Study</label>
				<input id="title-of-study" type="text" />
				<label htmlFor="date-of-study">Date of Study</label>
				<input id="date-of-study" type="date" />
			</div>
			<button>Submit</button>
		</form>
	);
}

export default Education;
