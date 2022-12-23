import { Col } from "react-bootstrap";

const Navbar = () => {
	return (
		<Col
			as='nav'
			className='d-flex flex-row flex-md-column h4 text-center col-1 w-auto'>
			<i className='bi bi-list p-2'></i>
			<i className='bi bi-house-fill p-2'></i>
			<i className='bi bi-cloud-fill p-2'></i>
			<i className='bi bi-database-fill p-2'></i>
			<i className='bi bi-code-slash p-2'></i>
			<i className='bi bi-people-fill p-2'></i>
			<i className='bi bi-arrow-repeat p-2'></i>
			<i className='bi bi-plus-lg p-2'></i>
		</Col>
	);
};

export default Navbar;
