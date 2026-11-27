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
	else {
		releaseActorIdText = releaseActorIdText.slice(0,5)
	}

	return (
		<dl className="border-2 border-primary/40 rounded-2xl p-4 bg-primary-tint space-y-2 divide-y divide-slate-200/70 md:max-w-4xl md:mx-auto md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0 md:divide-y-0">
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
				<dt className="text-sm text-slate-700 shrink-0">
					Shipment id
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.id.substring(0,8) + "..." }
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
				<dt className="text-sm text-slate-700 shrink-0">
					Product
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.product}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Lots
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.lots}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Doses
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.doses}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Origin
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.origin}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Destination
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.destination}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Expected arrival
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.expectedArrival}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Arrival temperature
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{arrivalTemperatureText}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					State
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.state}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0">
				<dt className="text-sm text-slate-700 shrink-0">
					Excursion detected
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{shipment.excursion ? "Yes" : "No"}
				</dd>
			</div>
			<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
				<dt className="text-sm text-slate-700 shrink-0">
					Release actor Id
				</dt>
				<dd className="font-semibold text-sm text-slate-900 text-right">
					{releaseActorIdText}
				</dd>
			</div>
			<div className="flex flex-col items-center md:col-span-2">
				<Button OnClick={()=> nav(`/shipments/${shipment.id}`)}>
					View details
				</Button>
			</div>
		</dl>
	)
}