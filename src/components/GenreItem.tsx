import { Button, HStack, Image, ListItem, Text } from "@chakra-ui/react";
import type { TGenre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

type Props = {
	genre: TGenre,
	onSelectGenre: (selectedGenre: TGenre) => void
}

export default function GenreItem({genre, onSelectGenre}: Props) {
	const handleGenreSelect = (event: React.MouseEvent) => {
		event.preventDefault()
		onSelectGenre(genre)
	}

	return (
		<ListItem onClick={handleGenreSelect} data-genre-id={genre.id}>
			<HStack>
				<Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius="md"/>
				<Button variant="link" fontSize="xl" fontWeight="bold">{genre.name}</Button>
			</HStack>
		</ListItem>
	)
}