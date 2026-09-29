function InputField({ labelText, type }) {
	return (
		<div className="input-field">
			<label>{labelText}</label>
			<input type={type} />
		</div>
	);
}

export default InputField;
