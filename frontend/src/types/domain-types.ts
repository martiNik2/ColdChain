export type Role = 'admin' |'dispatcher' |'quality_officer' |'receiver'	
export type ShipmentState = 'created' | 'in-transit' | 'delivered' | 'quarantined' | 'accepted' | 'discarded'


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
	timestamp: string
}

export type Logger = {
	id: string,
	calibrationDate: string //ISO string: yyyy-mm-dd
}

export type Reading = {
	shipmentId: string,
	time: string,
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
	expectedArrival: string,
	state: ShipmentState,
	excursion: boolean,
	arrivalTemperature?: number,
	releaseActorId?: string
}