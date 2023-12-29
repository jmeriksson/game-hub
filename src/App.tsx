import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { TGenre } from "./hooks/useGenres"
import { useState } from "react"

export type TGameQuery = {
	genre?: TGenre
}

function App() {
	const [gameQuery, setGameQuery] = useState<TGameQuery>({} as TGameQuery)

	const handleGenreSelect = (selectedGenre: TGenre) => {
		setGameQuery({
			genre: selectedGenre
		})
	}

  return (
    <Grid templateAreas={[
			`"nav" "main"`,
			`"nav" "main"`,
			`"nav" "main"`,
			`"nav nav" "aside main"`,
			`"nav nav" "aside main"`,
		]}
		templateColumns={[
			"1fr",
			"1fr",
			"1fr",
			"200px 1fr",
			"250px 1fr",
		]}
		p={6}>
			<GridItem area="nav"><NavBar /></GridItem>
			<Show above="lg">
				<GridItem area="aside"><GenreList onSelectGenre={handleGenreSelect} /></GridItem>
			</Show>
			<GridItem area="main"><GameGrid gameQuery={gameQuery} /></GridItem>
    </Grid>
  )
}

export default App
