import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle.js";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/contato" element={<Contato />} />
				<Route path="/produtos" element={<Produtos />} />
			</Routes>
		</Router>
	);
}

export default App;
