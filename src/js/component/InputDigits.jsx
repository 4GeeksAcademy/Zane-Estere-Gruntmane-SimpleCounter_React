import React from "react";

const InputDigits = ({text}) => {

    return (

        <div className="container-fluid" > 
        
            <div className="Watcher">
                {<i className="fa-brands fa-watchman-monitoring fa-spin" style={{ color: "#1b71b3" }}></i>} 
            </div>

            <div className="Digits">{text}</div>
        </div>
    )
};

export default Layout; 