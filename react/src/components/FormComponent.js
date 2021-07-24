import React from "react";

// this probably shouldn't be a component, i just wanted some shared data between some components
export class FormComponent extends React.Component {
    formSectionStyle = {
        margin: "20px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    };

    rowLabelStyle = {
        display: "inline-block",
        width: "10em"
    };

    inputRowStyle = {
        marginBottom: "8px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    };

    inputElementStyle = {
        margin: "8px"
    };
}

