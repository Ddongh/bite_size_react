import React from "react";
import "./Body.css";

const Body = ({ children }) => {
    console.log(children);
    return (
        <div className="body">
            {children}
        </div>
    )
}

Body.defaultProps = {
    favorList : [],
}

export default Body;