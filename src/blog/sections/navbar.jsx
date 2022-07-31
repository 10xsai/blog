const Navbar = () => {
    return (
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 link-info" href="#">
                Python
            </a>
            <a className="p-2 link-info" href="#">
                Javascript
            </a>
            <a className="p-2 link-info" href="#">
                Django              
            </a>
            <a className="p-2 link-info" href="#">
                React
            </a>
            <a className="p-2 link-info" href="#">
                AWS
            </a>
            <a className="p-2 link-info" href="#">
                Selenium
            </a>
          </nav>
        </div>
    );
}

export default Navbar;