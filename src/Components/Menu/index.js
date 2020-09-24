import React from "react";
import QRCode from 'react-native-qrcode-svg';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from "./styles";

const Menu = ({ translateY }) => {
    return (
        <Container
            style={{
                opacity: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1]
                })
            }}
        >
            <Code>
                <QRCode
                    value="https://github.com/jesimielefraimdias"
                    size={80}
                    backgroundColor="#FFF"
                    color="#8B10AE"
                >

                </QRCode>
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => { }}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}

export default Menu;