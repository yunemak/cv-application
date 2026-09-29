import InputField from "./InputField";

function Education() {
	return (
		<div className="education-field">
			<InputField labelText="School" type="text" />
			<InputField labelText="Title of Study" type="text" />
			<InputField labelText="Date of Study" type="date" />
		</div>
	);
}

export default Education;
