import useData from "./useData"

export type TGenre = {
	id: number
	name: string
	image_background: string
}

const useGenres = () => useData<TGenre>('/genres')

export default useGenres
