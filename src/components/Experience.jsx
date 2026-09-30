import "../styles/form.css";

function Experience({
	isExperienceSubmitted,
	setIsExperienceSubmitted,
	companyName,
	setCompanyName,
	positionTitle,
	setPositionTitle,
	mainResponsibilities,
	setMainResponsibilities,
	experienceDateStart,
	setExperienceDateStart,
	experienceDateFinish,
	setExperienceDateFinish,
}) {
	function handleSubmit(e) {
		e.preventDefault();
		setIsExperienceSubmitted(!isExperienceSubmitted);
	}

	function handleCompanyName(e) {
		setCompanyName(e.target.value);
	}

	function handlePositionTitle(e) {
		setPositionTitle(e.target.value);
	}

	function handleMainResponsibilities(e) {
		setMainResponsibilities(e.target.value);
	}

	function handleDateStart(e) {
		setExperienceDateStart(e.target.value);
	}

	function handleDateFinish(e) {
		setExperienceDateFinish(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="experience-form">
				<label htmlFor="company-name">Company Name</label>
				<input
					id="company-name"
					type="text"
					onChange={handleCompanyName}
					value={companyName}
				/>
				<label htmlFor="position-title">Position Title</label>
				<input
					id="position-title"
					type="text"
					onChange={handlePositionTitle}
					value={positionTitle}
				/>
				<label htmlFor="main-responsibilities">
					Main Responsibilities
				</label>
				<textarea
					id="main-responsibilities"
					onChange={handleMainResponsibilities}
					value={mainResponsibilities}
				></textarea>
				<label htmlFor="start-date">Start Date</label>
				<input
					id="start-date"
					type="date"
					onChange={handleDateStart}
					value={experienceDateStart}
				/>
				<label htmlFor="finish-date">Finish Date</label>
				<input
					id="finish-date"
					type="date"
					onChange={handleDateFinish}
					value={experienceDateFinish}
				/>
			</div>
			<button>{isExperienceSubmitted ? "Edit" : "Submit"}</button>
		</form>
	);
}

export default Experience;
