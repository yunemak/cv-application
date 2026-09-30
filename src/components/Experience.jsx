import "../styles/form.css";

function Experience() {
	return (
		<form>
			<div className="experience-form">
				<label htmlFor="company-name">Company Name</label>
				<input id="company-name" type="text" />
				<label htmlFor="position-title">Position Title</label>
				<input id="position-title" type="text" />
				<label htmlFor="main-responsibilities">
					Main Responsibilities
				</label>
				<textarea id="main-responsibilities"></textarea>
				<label htmlFor="start-date">Start Date</label>
				<input id="start-date" type="date" />
				<label htmlFor="finish-date">Finish Date</label>
				<input id="finish-date" type="date" />
			</div>
			<button>Submit</button>
		</form>
	);
}

export default Experience;
