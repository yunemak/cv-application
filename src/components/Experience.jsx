import InputField from "./InputField";

function Experience() {
	return (
		<div>
			<InputField labelText="Company Name" type="text" />
			<InputField labelText="Poisition Title" type="text" />
			<label>Main Responsibilities</label>
			<textarea></textarea>
			<InputField labelText="Started from" type="date" />
			<InputField labelText="Finished" type="date" />
		</div>
	);
}

export default Experience;
