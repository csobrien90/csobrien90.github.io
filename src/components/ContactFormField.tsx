const ContactFormField = ({name, type, value, setProp}: any): JSX.Element => {
  return (
	<label htmlFor={name}>
		{name.charAt(0).toUpperCase() + name.slice(1)}:
		<br></br>
		{type === 'textarea' ?
			<textarea name={name} id={name} value={value} onChange={setProp} required></textarea>
			:
			<input type={type} name={name} id={name} value={value} onChange={setProp} required/>
		}
	</label>
  )
}

export default ContactFormField