
import React from 'react'
import styled from 'styled-components';
import "../index.css";

import LoginFormComponent from "./LoginFormComponent";

class LoginPageComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content>
              <LoginFormComponent></LoginFormComponent>
            </Content>
        );
    }
}

const Content = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default LoginPageComponent;

