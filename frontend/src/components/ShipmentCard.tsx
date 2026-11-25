import { useNavigate } from "react-router";
import type { Shipment } from "../types/domain-types";
import Button from "./Button";


interface ShipmentCardProps {
	shipment: Shipment
}

export default function ShipmentCard({shipment} : ShipmentCardProps){

	const nav = useNavigate()

	let arrivalTemperatureText = shipment.arrivalTemperature?.toString() as string | null | undefined
	let releaseActorIdText = shipment.releaseActorId as string | null | undefined

	if (arrivalTemperatureText === null || arrivalTemperatureText == undefined){
		arrivalTemperatureText = "Not measured"	
	}

	if (releaseActorIdText===null || releaseActorIdText == undefined){
		releaseActorIdText = "None"
	}

	return (
		<dl className="border-2 border-primary/40 rounded-2xl p-4 bg-primary-tint space-y-2 divide-y divide-slate-200/70 md:max-w-4xl md:mx-auto md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md-space-y-0 md:divide-y-0">
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
				<dt className="text-sm text-slate-700 shrink-0">
					Shipment id
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.id.substring(0,8) + "..." }
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
				<dt className="text-sm text-slate-700 shrink-0">
					Product
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.product}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Lots
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.lots}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Doses
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.doses}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Origin
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.origin}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Destination
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.destination}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Expected arrival
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.expectedArrival}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Arrival temperature
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{arrivalTemperatureText}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					State
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.state}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Excursion detected
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{shipment.excursion ? "Yes" : "No"}
				</div>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
				<dt className="text-sm text-slate-700 shrink-0">
					Release actor Id
				</dt>
				<div className="font-semibold text-sm text-slate-900 text-right">
					{releaseActorIdText}
				</div>
			</div>
			<div className="flex flex-col items-center md:col-span-2">
				<Button OnClick={()=> nav(`/shipments/${shipment.id}`)}>
					View details
				</Button>
			</div>
		</dl>
	)
}