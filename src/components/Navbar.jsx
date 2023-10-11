import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #222;
	padding: 1em 0;
`;

const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 1.5em;
	&:hover {
		text-decoration: underline;
		color: #ccc;
	}
`;

export default function Navbar() {
	return (
		<NavbarContainer>
			<StyledLink to="/">Home</StyledLink>
			<StyledLink to="/sobre">Sobre</StyledLink>
			<StyledLink to="/contato">Contato</StyledLink>
			<StyledLink to="/produtos">Produtos</StyledLink>
		</NavbarContainer>
	);
}
