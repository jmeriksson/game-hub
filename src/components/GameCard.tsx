import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { TGame } from "../hooks/useGames"
import getCroppedImageUrl from "../services/imageUrl"


export default function GameCard({name, background_image}: TGame) {
	return (
		<Card overflow="hidden">
			<Image
				src={getCroppedImageUrl(background_image)}
				boxSize="100%"
				h="250px"
				fit="cover"
				alt={name}
			/>
			<CardBody>
				<Heading as="h3" size="md">{name}</Heading>
			</CardBody>
		</Card>
	)
}