import "./App.css";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
	const [contrastMode, setContrastMode] = useState(false);
	const [width, setWindowWidth] = useState(0);

	useEffect(() => {
		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const updateDimensions = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
	};

	const responsive = {
		tooltipRight: width > 768,
	};

	return (
		<ThemeContext.Provider value={{ contrastMode, setContrastMode }}>
			<Container className={contrastMode ? "bg-black text-warning" : ""}>
				<Header />
				<Row className='flex-column flex-md-row'>
					<Navbar tooltipRight={responsive.tooltipRight} />
					<Main />
				</Row>
			</Container>
		</ThemeContext.Provider>
	);
}

export default App;
