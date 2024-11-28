import { Link } from "react-router-dom";
import { Flex,Button } from "@chakra-ui/react";

const HomePage = () => {
	// This page added after the tutorial
	return (
		<Link to={"/markzuckerberg"}>
			<Flex w={"full"} justifyContent={"center"}>
				<Button mx={"auto"}>Visit Profile Page</Button>
			</Flex>
		</Link>
	);
};

export default HomePage;