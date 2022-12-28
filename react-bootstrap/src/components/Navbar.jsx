import { Col } from "react-bootstrap";

const Navbar = () => {
	return (
		<Col
			as='nav'
			className='d-flex flex-row flex-md-column h4 text-center col-1 w-auto'>
			<a href='/#'>
				<i className='bi bi-list'></i>
			</a>
			<a href='/#'>
				<i className='bi bi-house-fill'></i>
			</a>
			<a href='/#'>
				<i className='bi bi-cloud-fill'></i>
			</a>
			<a href='/#'>
				<i className='bi bi-database-fill'></i>
			</a>
			<a href='/#'>
				<i className='bi bi-people-fill'></i>
			</a>
			<a href='/#'>
				<i className='bi bi-arrow-repeat'></i>
			</a>
			<a href='/#'>
				<i className='bi bi-plus-lg'></i>
			</a>
		</Col>
	);
};

export default Navbar;
