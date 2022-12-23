import "./App.css";
import { Container, Col, Row, Form } from "react-bootstrap";

function App() {
	return (
		<Container>
			<Row className='bg-dark text-white pt-2'>
				<Col as={"h4"}>Carbon Cloud Dashboard</Col>
				<Col as={"form"} className='d-flex align-items-start'>
					<Form.Control
						placeholder='Search resources...'
						className='custom-background border-0 border-bottom p-1 border-radius-0'></Form.Control>
					<i className='bi bi-search h4 left-margin'></i>
				</Col>
				<Col className='text-end h4'>
					<i className='bi bi-pencil-fill me-2'></i>
					<i className='bi bi-bell-fill me-2'></i>
					<i className='bi bi-person-fill me-2'></i>
				</Col>
			</Row>
			<Row>
				<Col className='d-flex flex-column h4 text-center col-1 w-auto'>
					<i className='bi bi-list pt-2'></i>
					<i className='bi bi-house-fill pt-2'></i>
					<i className='bi bi-cloud-fill pt-2'></i>
					<i className='bi bi-database-fill pt-2'></i>
					<i className='bi bi-code-slash pt-2'></i>
					<i className='bi bi-people-fill pt-2'></i>
					<i className='bi bi-arrow-repeat pt-2'></i>
					<i className='bi bi-plus-lg pt-2'></i>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}

export default App;
