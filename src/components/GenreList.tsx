import { Heading, UnorderedList } from "@chakra-ui/react";
import useGenres, { TGenre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";

type Props = {
	onSelectGenre: (selectedGenre: TGenre) => void
}

export default function GenreList({ onSelectGenre }: Props) {
	const { data, error, isLoading } = useGenres()

	return (
		<>
			{error ? <p>{error}</p> : null}
			<Heading as="h3" size="lg" h="70px">Genres</Heading>
			<UnorderedList listStyleType="none" spacing={4} margin={0}>
				{data.map((genre: TGenre) => {
					return <GenreItem key={genre.id} genre={genre} onSelectGenre={onSelectGenre} />
				})}
			</UnorderedList>
		</>
	)
}