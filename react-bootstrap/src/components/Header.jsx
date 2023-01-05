import { Col, Row, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
	const { contrastMode, setContrastMode } = useContext(ThemeContext);

	const changeTheme = e => {
		e.preventDefault();
		setContrastMode(!contrastMode);
	};

	return (
		<Row
			as='header'
			className={
				contrastMode
					? "flex-column flex-md-row bg-dark pt-2 text-warning"
					: "flex-column flex-md-row bg-dark pt-2 text-white"
			}>
			<Col as={"h1"} className='h4'>
				Carbon Cloud Dashboard
			</Col>
			<Col
				as={"form"}
				className='d-flex align-items-center align-items-lg-start ps-4'>
				<Form.Control
					placeholder='Search resources...'
					className={
						contrastMode
							? "custom-background border-0 border-bottom border-warning p-1 border-radius-0"
							: "custom-background border-0 border-bottom p-1 border-radius-0"
					}></Form.Control>
				<OverlayTrigger
					placement='bottom'
					overlay={
						<Tooltip className={contrastMode ? "header-tooltip" : ""}>
							Search...
						</Tooltip>
					}>
					<a href='/#' className='left-margin'>
						<i className='bi bi-search h4' role='img' aria-label='Search'></i>
					</a>
				</OverlayTrigger>
			</Col>
			<Col
				as='ul'
				className='d-flex mt-2 mt-md-0 align-items-center justify-content-end h4'>
				<OverlayTrigger
					placement='bottom'
					overlay={
						<Tooltip className={contrastMode ? "header-tooltip" : ""}>
							High Contrast Mode
						</Tooltip>
					}>
					<li>
						<a href='/#' onClick={changeTheme}>
							<i
								className='bi bi-universal-access-circle'
								role='img'
								aria-label='High Contrast Mode'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement='bottom'
					overlay={
						<Tooltip className={contrastMode ? "header-tooltip" : ""}>
							Edit
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i className='bi bi-pencil-fill' role='img' aria-label='Edit'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement='bottom'
					overlay={
						<Tooltip className={contrastMode ? "header-tooltip" : ""}>
							Notifications
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i
								className='bi bi-bell-fill'
								role='img'
								aria-label='Notifications'></i>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement='bottom'
					overlay={
						<Tooltip className={contrastMode ? "header-tooltip" : ""}>
							Profile
						</Tooltip>
					}>
					<li>
						<a href='/#'>
							<i
								className='bi bi-person-fill'
								role='img'
								aria-label='Profile'></i>
						</a>
					</li>
				</OverlayTrigger>
			</Col>
		</Row>
	);
};

export default Header;
