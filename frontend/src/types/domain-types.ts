import type { CalendarDateString, IsoTimestampString } from "./date-types"

export type Role = 'admin' |'dispatcher' |'quality_officer' |'receiver'	
export type ShipmentState = 'created' | 'in-transit' 
| 'delivered' | 'quarantined' | 'accepted' | 'discarded'


export type User = {
	id: string,
	name: string,
	email: string,
	site: string,
	role: Role
}

export type AuditEntry = {
	id: string,
	actorId: string,
	action: string,
	target: string,
	timestamp: IsoTimestampString
}

export type Logger = {
	id: string,
	calibrationDate: CalendarDateString
}

export type Reading = {
	shipmentId: string,
	time: IsoTimestampString,
	temperature: number
}

export type Shipment = {
	id: string,
	product: string,
	lots: string,
	doses: number,
	origin: string,
	destination: string,
	loggerId: string,
	expectedArrival: IsoTimestampString,
	state: ShipmentState,
	excursion: boolean,
	arrivalTemperature?: number,
	releaseActorId?: string
}