import "./App.css";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
	return (
		<Container>
			<Header />
			<Row className='flex-column flex-md-row'>
				<Navbar />
				<Main />
			</Row>
		</Container>
	);
}

export default App;
