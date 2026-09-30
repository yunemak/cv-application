import "../styles/form.css";

function Education({
	isEducationSubmitted,
	setIsEducationSubmitted,
	school,
	setSchool,
	study,
	setStudy,
	studyDateStart,
	setStudyDateStart,
	studyDateFinish,
	setStudyDateFinish,
}) {
	function handleSubmit(e) {
		e.preventDefault();
		setIsEducationSubmitted(!isEducationSubmitted);
	}

	function handleSchool(e) {
		setSchool(e.target.value);
	}

	function handleStudy(e) {
		setStudy(e.target.value);
	}

	function handleDateStart(e) {
		setStudyDateStart(e.target.value);
	}

	function handleDateFinish(e) {
		setStudyDateFinish(e.target.value);
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="education-form">
				<label htmlFor="school">School</label>
				<input
					id="school"
					type="text"
					onChange={handleSchool}
					value={school}
				/>
				<label htmlFor="title-of-study">Title of Study</label>
				<input
					id="title-of-study"
					type="text"
					onChange={handleStudy}
					value={study}
				/>
				<label htmlFor="date-of-study-start">Date of Start</label>
				<input
					id="date-of-study-start"
					type="date"
					onChange={handleDateStart}
					value={studyDateStart}
				/>
				<label htmlFor="date-of-study-finish">Date of Finish</label>
				<input
					id="date-of-study-finish"
					type="date"
					onChange={handleDateFinish}
					value={studyDateFinish}
				/>
			</div>
			<button>{isEducationSubmitted ? "Edit" : "Submit"}</button>
		</form>
	);
}

export default Education;
