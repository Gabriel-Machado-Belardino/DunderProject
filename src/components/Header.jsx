import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #0047ba;
	color: #fff;
	padding: 1em 0;
`;

export default function Header() {
	return (
		<HeaderContainer>
			<h1>DUNDER MIFFLIN</h1>
		</HeaderContainer>
	);
}
