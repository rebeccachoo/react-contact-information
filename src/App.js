import "./App.css";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	/* border: 1px solid black; */
	padding: 2rem;
	box-sizing: border-box;
	flex-direction: row;
`;
const Header = styled.div`
	font-weight: bold;
	font-size: 32px;
`;

function App() {
	return (
		<Container>
			<Header>Scheduler</Header>
		</Container>
	);
}

export default App;
