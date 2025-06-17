const Nav = (props)=> {
    const styles = {
        color: "red",
        backgroundColor: "blue"
    }
    return (
        <nav className="main-nav">
            <ul>
                <li style={styles}>Location: {props.location}</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;