function Connect() {
	let now = new Date();
	let year = now.getFullYear();
	return(
		<section id="connect">
			<h2 className='sr-only'>Connect</h2>
			<footer>
				<p>&copy; Copyright {year} - Chad O'Brien</p>
			</footer>
		</section>
	)
}

export default Connect;