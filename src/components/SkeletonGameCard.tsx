import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

export default function SkeletonGameCard() {
	return (
		<Card overflow="hidden">
			<Skeleton height="250px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	)
}