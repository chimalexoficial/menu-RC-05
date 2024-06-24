import MenuItem from "./MenuItem"

const Menu = ({ menuItems }) => {
    return <div className="section-center">{menuItems.map(menuMap => {
        return <MenuItem
            key={menuMap.id} {...menuMap} />
    })}</div>

}

export default Menu