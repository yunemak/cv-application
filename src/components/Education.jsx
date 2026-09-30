import "../styles/form.css";

function Education() {
	return (
		<form>
			<div className="education-form">
				<label>School</label>
				<input type="text" />
				<label>Title of Study</label>
				<input type="text" />
				<label>Date of Study</label>
				<input type="date" />
			</div>
			<button>Submit</button>
		</form>
	);
}

export default Education;
