import "../styles/form.css";

function Experience() {
	return (
		<form>
			<div className="experience-form">
				<label>Company Name</label>
				<input type="text" />
				<label>Position Title</label>
				<input type="text" />
				<label>Main Responsibilities</label>
				<textarea></textarea>
				<label>Start</label>
				<input type="date" />
				<label>Finish</label>
				<input type="date" />
			</div>
			<button>Submit</button>
		</form>
	);
}

export default Experience;
