import { Col, Row } from "react-bootstrap";
import Card from "./Card";

const Main = () => {
	return (
		<Col as='main' className='d-flex flex-column'>
			<Row className='flex-column flex-lg-row mb-3'>
				<Card title={"AI"} />
				<Card title={"Infrastructure"} />
				<Card title={"Services"} />
			</Row>
			<Row className='flex-column flex-lg-row mb-3'>
				<Card color={"dark"} colsize={8} title={"Smart Grid"} />
				<Card title={"Security"} />
			</Row>
			<Row className='flex-column flex-lg-row mb-3'>
				<Card title={"Security"} />
				<Card color={"dark"} colsize={8} title={"Fast Data Transfer"} />
			</Row>
		</Col>
	);
};

export default Main;
