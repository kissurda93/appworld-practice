import { Col, Button } from "react-bootstrap";

const Card = props => {
	return (
		<Col
			className={props.color === "dark" ? "bg-dark text-white p-4" : "p-4"}
			lg={props.colsize ? props.colsize : ""}>
			<h2>AI</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
				voluptatibus quaerat ad, odit, assumenda natus eligendi tenetur ea
				tempora deleniti maiores! Et a error ullam cum repudiandae dolorum
				dolore perferendis?
			</p>
			<Button
				variant={props.color === "dark" ? "primary" : "outline-primary"}
				size='lg'
				className={props.colsize ? "mt-5" : ""}>
				Get Started<i className='bi bi-arrow-right ms-4 h4'></i>
			</Button>
		</Col>
	);
};

export default Card;
