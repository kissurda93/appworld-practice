import "./App.css";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
	const [contrastMode, setContrastMode] = useState(false);

	return (
		<ThemeContext.Provider value={{ contrastMode, setContrastMode }}>
			<Container className={contrastMode ? "bg-black text-warning" : ""}>
				<Header />
				<Row className='flex-column flex-md-row'>
					<Navbar />
					<Main />
				</Row>
			</Container>
		</ThemeContext.Provider>
	);
}

export default App;
