function Footer() {
    let now = new Date();
    let year = now.getFullYear();
    return(
        <footer>
            <p>&copy; Copyright {year} - Chad O'Brien</p>
        </footer>
    )
}

export default Footer;