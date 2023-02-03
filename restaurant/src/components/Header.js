const Header = ({restaurantName, menuItems}) => (
    <header>
        <div className="logo">
            <nav>
                <div className="menu">
                    {menuItems?.map((menuItem) => (
                      <p>
                      <a
                            className = {menuItem.type === "button" && "orderbutton"}
                            href = {menuItem.link}
                        >
                            {menuItem.name}
                    </a>
                    </p>
                    ))}
                </div>
            </nav>
        </div>
    </header>
)

export default Header