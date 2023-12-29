import { Heading, SimpleGrid } from "@chakra-ui/react"
import useGames, { TGame } from "../hooks/useGames"
import GameCard from "./GameCard"
import { TGameQuery } from "../App"
import SkeletonGameCard from "./SkeletonGameCard"

type Props = {
	gameQuery: TGameQuery
}

export default function GameGrid({ gameQuery }: Props) {
	const { data, error, isLoading } = useGames(gameQuery)
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

	return (
		<>
			{error ? <p>{error}</p> : null}
			<Heading as="h2" size="2xl" h="70px">Games</Heading>
			<SimpleGrid
			columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
				{isLoading ? 
				skeletons.map(skeleton => {
					return <SkeletonGameCard key={skeleton} />
				}) : null }
				{data.map((game: TGame ) => {
					return <GameCard key={game.id} {...game} />
				})}
			</SimpleGrid>
		</>
	)
}