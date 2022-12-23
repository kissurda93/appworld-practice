import { Col, Row } from "react-bootstrap";
import Card from "./Card";

const Main = () => {
	return (
		<Col as='main' className='d-flex flex-column'>
			<Row className='flex-column flex-lg-row mb-3'>
				<Card />
				<Card />
				<Card />
			</Row>
			<Row className='flex-column flex-lg-row mb-3'>
				<Card color={"dark"} colsize={8} />
				<Card />
			</Row>
			<Row className='flex-column flex-lg-row mb-3'>
				<Card />
				<Card color={"dark"} colsize={8} />
			</Row>
		</Col>
	);
};

export default Main;
