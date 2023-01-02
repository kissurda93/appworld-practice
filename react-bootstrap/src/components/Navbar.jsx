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
							<i className='bi bi-house-fill'></i>
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
							<i className='bi bi-cloud-fill'></i>
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
							<i className='bi bi-database-fill'></i>
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
							<i className='bi bi-people-fill'></i>
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
							<i className='bi bi-arrow-repeat'></i>
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
							<i className='bi bi-plus-lg'></i>
						</a>
					</li>
				</OverlayTrigger>
			</Col>
		</Col>
	);
};

export default Navbar;
