import { Col, Row, Form } from "react-bootstrap";

const Header = () => {
	return (
		<Row
			as='header'
			className='flex-column flex-md-row bg-dark text-white pt-2'>
			<Col as={"h1"} className='h4'>
				Carbon Cloud Dashboard
			</Col>
			<Col
				as={"form"}
				className='d-flex align-items-center align-items-lg-start ps-4'>
				<Form.Control
					placeholder='Search resources...'
					className='custom-background border-0 border-bottom p-1 border-radius-0'></Form.Control>
				<i className='bi bi-search h4 left-margin'></i>
			</Col>
			<Col className='d-flex mt-2 mt-md-0 align-items-center justify-content-end h4'>
				<i className='bi bi-pencil-fill me-3'></i>
				<i className='bi bi-bell-fill me-3'></i>
				<i className='bi bi-person-fill me-3'></i>
			</Col>
		</Row>
	);
};

export default Header;
