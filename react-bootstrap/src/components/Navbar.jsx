import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = ({ tooltipRight }) => {
	const { contrastMode } = useContext(ThemeContext);

	return (
		<Col as='nav' className='h4 text-center col-1 w-auto'>
			<Col as='ul' className='d-flex flex-row flex-md-column p-0 '>
				<OverlayTrigger
					placement={tooltipRight ? "right" : "bottom"}
					overlay={
						<Tooltip className={contrastMode ? "nav-tooltip" : ""}>
							Lists
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i className='bi bi-list' role='img' aria-label='List'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement={tooltipRight ? "right" : "bottom"}
					overlay={
						<Tooltip className={contrastMode ? "nav-tooltip" : ""}>
							Home Page
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i
								className='bi bi-house-fill'
								role='img'
								aria-label='Home Page'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement={tooltipRight ? "right" : "bottom"}
					overlay={
						<Tooltip className={contrastMode ? "nav-tooltip" : ""}>
							Cloud
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i className='bi bi-cloud-fill' role='img' aria-label='Cloud'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement={tooltipRight ? "right" : "bottom"}
					overlay={
						<Tooltip className={contrastMode ? "nav-tooltip" : ""}>
							Database
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i
								className='bi bi-database-fill'
								role='img'
								aria-label='Database'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement={tooltipRight ? "right" : "bottom"}
					overlay={
						<Tooltip className={contrastMode ? "nav-tooltip" : ""}>
							Friends
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i
								className='bi bi-people-fill'
								role='img'
								aria-label='Friends'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement={tooltipRight ? "right" : "bottom"}
					overlay={
						<Tooltip className={contrastMode ? "nav-tooltip" : ""}>
							Update
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i
								className='bi bi-arrow-repeat'
								role='img'
								aria-label='Update'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement={tooltipRight ? "right" : "bottom"}
					overlay={
						<Tooltip className={contrastMode ? "nav-tooltip" : ""}>Add</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i className='bi bi-plus-lg' role='img' aria-label='Add'></i>
						</a>
					</li>
				</OverlayTrigger>
			</Col>
		</Col>
	);
};

export default Navbar;
