import { TGameQuery } from "../App"
import useData from "./useData"

export type TGame = {
	id: number
	name: string
	background_image: string
}

const useGames = (gameQuery: TGameQuery) => useData<TGame>(
	'/games',
	{
		params: {
			genres: gameQuery.genre?.id
		}
	},
	[gameQuery]
)

export default useGames
