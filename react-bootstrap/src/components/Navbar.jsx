import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

const Navbar = () => {
	return (
		<Col
			as='nav'
			className='d-flex flex-row flex-md-column h4 text-center col-1 w-auto'>
			<OverlayTrigger placement='right' overlay={<Tooltip>Lists</Tooltip>}>
				<a href='/#'>
					<i className='bi bi-list'></i>
				</a>
			</OverlayTrigger>
			<OverlayTrigger placement='right' overlay={<Tooltip>Home Page</Tooltip>}>
				<a href='/#'>
					<i className='bi bi-house-fill'></i>
				</a>
			</OverlayTrigger>
			<OverlayTrigger placement='right' overlay={<Tooltip>Cloud</Tooltip>}>
				<a href='/#'>
					<i className='bi bi-cloud-fill'></i>
				</a>
			</OverlayTrigger>
			<OverlayTrigger placement='right' overlay={<Tooltip>Database</Tooltip>}>
				<a href='/#'>
					<i className='bi bi-database-fill'></i>
				</a>
			</OverlayTrigger>
			<OverlayTrigger placement='right' overlay={<Tooltip>Friends</Tooltip>}>
				<a href='/#'>
					<i className='bi bi-people-fill'></i>
				</a>
			</OverlayTrigger>
			<OverlayTrigger placement='right' overlay={<Tooltip>Update</Tooltip>}>
				<a href='/#'>
					<i className='bi bi-arrow-repeat'></i>
				</a>
			</OverlayTrigger>
			<OverlayTrigger placement='right' overlay={<Tooltip>Add</Tooltip>}>
				<a href='/#'>
					<i className='bi bi-plus-lg'></i>
				</a>
			</OverlayTrigger>
		</Col>
	);
};

export default Navbar;
