function Navbar () {
    return (
        <nav>
            <div className='navbar'>
                <div>
                <img src='/images/brand_logo.png'></img>
                </div>
                <ul>
                    <li>Menu</li>
                    <li>location</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;