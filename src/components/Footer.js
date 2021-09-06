function Footer() {
    let now = new Date();
    let year = now.getFullYear();
    return(
        <p>&copy; Copyright {year} - Chad O'Brien</p>
    )
}

export default Footer;