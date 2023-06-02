import React from "react";

const Header = ({handleToggleMode}) => {
    return (
    <div className="header">
        <h1>Notes</h1>
        <button className="save" onClick={() => handleToggleMode(
            (previousMode) => !previousMode)}>Toggle Mode</button>
    </div>
    )
}

export default Header;