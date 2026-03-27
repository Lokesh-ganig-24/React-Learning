import React from "react";

function HocComponent(Wrapped) {
    return function (props) {
        return (
            <div className="hoc">
                <Wrapped {...props} />
            </div>
        );
    };
}

export default HocComponent;