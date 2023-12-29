import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

type FetchResponse<T> = {
	count: number
	results: T[]
}

export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) {
	const [data, setData] = useState<T[]>([])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()

		setIsLoading(true)

		apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
			.then(response => setData(response.data.results))
			.catch(error => {
				if (error instanceof CanceledError) {
					return
				}
				setError(error.message)
			})
			.finally(() => {
				setIsLoading(false)
			})

			return () => controller.abort()
	}, dependencies ? [...dependencies] : [])

	return { data, error, isLoading }
}