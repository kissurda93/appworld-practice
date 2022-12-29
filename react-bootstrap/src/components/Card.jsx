import { Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Card = props => {
	const { contrastMode } = useContext(ThemeContext);

	const contrastModeTextFunction = () => {
		if (contrastMode) {
			return "text-warning";
		} else {
			return "text-white";
		}
	};

	const contrastModeBtnFunction = () => {
		if (contrastMode) {
			return "warning";
		} else {
			return "primary";
		}
	};

	return (
		<Col
			className={
				props.color === "dark"
					? `${contrastModeTextFunction()} bg-dark p-4`
					: "p-4"
			}
			lg={props.colsize ? props.colsize : ""}>
			<h2>{props.title}</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
				voluptatibus quaerat ad, odit, assumenda natus eligendi tenetur ea
				tempora deleniti maiores! Et a error ullam cum repudiandae dolorum
				dolore perferendis?
			</p>
			<Button
				variant={
					props.color === "dark"
						? `${contrastModeBtnFunction()}`
						: `outline-${contrastModeBtnFunction()}`
				}
				size='lg'
				className={props.colsize ? "mt-5" : ""}>
				Get Started<i className='bi bi-arrow-right ms-4 h4'></i>
			</Button>
		</Col>
	);
};

export default Card;
