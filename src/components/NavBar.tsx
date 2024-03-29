import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";

export default function NavBar() {
	return (
		<HStack justifyContent="space-between">
			<Image src={logo} boxSize="60px" />
			<Heading>GameHub</Heading>
			<ColorModeSwitch />
		</HStack>
	)
}