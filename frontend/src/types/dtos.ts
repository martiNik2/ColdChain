import type { IsoTimestampString } from "./date-types"

export type CreateShipmentDTO = {
	product: string
	lots: string
	doses: number
	origin: string
	destination: string
	loggerId: string
	expectedArrival: IsoTimestampString
}