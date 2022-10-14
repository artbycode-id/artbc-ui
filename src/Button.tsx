import React, { FC } from "react";

const Login: FC = () => {
    const clickMe = () => {
        console.log("Button Clicks");
    };

    return (
        <div>
            <button onClick={clickMe}>My Button</button>
        </div>
    );
};

export default Login;