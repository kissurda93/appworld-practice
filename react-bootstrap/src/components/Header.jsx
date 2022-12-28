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
				<a href='/#' className='left-margin'>
					<i className='bi bi-search h4'></i>
				</a>
			</Col>
			<Col className='d-flex mt-2 mt-md-0 align-items-center justify-content-end h4'>
				<a href='/#'>
					<i className='bi bi-pencil-fill'></i>
				</a>
				<a href='/#'>
					<i className='bi bi-bell-fill'></i>
				</a>
				<a href='/#'>
					<i className='bi bi-person-fill'></i>
				</a>
			</Col>
		</Row>
	);
};

export default Header;
