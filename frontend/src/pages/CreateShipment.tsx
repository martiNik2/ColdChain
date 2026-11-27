import { useAuth } from "react-oidc-context";
import LoadingPage from "./Loading";
import ErrorPage from "./Error";
import type { Logger } from "../types/domain-types";
import { isCalibrationExpired } from "../utils/calibration-date";
import Button from "../components/Button";
import type { CreateShipmentDTO } from "../types/dtos";
import { datetimeLocalToIso, isoToDateLocal } from "../utils/date";

const test_loggers = [
	{ id: "20432", calibrationDate: "2010-03-12" },
	{ id: "324092", calibrationDate: "2012-10-10" },
	{ id: "342498", calibrationDate: "2020-02-24" },
	{ id: "wjeij3", calibrationDate: "2025-12-24" },
	{ id: "ajioejf", calibrationDate: "2026-05-17" },
] as Logger[]

export default function CreateShipmentPage(){
	const auth = useAuth()

	if (auth.isLoading){
		return <LoadingPage/>
	}

	if (!auth.isAuthenticated || auth.error){
		return <ErrorPage
		status_code={401}
		error_message="Unauthenticated"
		error_description="You need to be signed in to use this page."
		/>
	}

	const availableLoggers = test_loggers.filter((logger)=>
		isCalibrationExpired(logger.calibrationDate)===false
	)

	const handleSubmit = async (formData: FormData)=>{
		const expectedArrival = String(formData.get('expectedArrival')).trim()
		const isoExpectedArrival = datetimeLocalToIso(expectedArrival)

		const createShipment = {
			product: String(formData.get('product')).trim(),
			lots: String(formData.get('lots')).trim(),
			doses: Number(formData.get('doses')),
			origin: String(formData.get('origin')).trim(),
			destination: String(formData.get('destination')).trim(),
			loggerId: String(formData.get('loggerId')).trim(),
			expectedArrival: isoExpectedArrival
		} as CreateShipmentDTO

	}

	return (
		<form action={handleSubmit} className="p-4 bg-linear-to-t from-primary-tint to-primary/20 space-y-8 md:max-w-3xl md:mx-auto md:m-12 md:border md:border-active/30 md:rounded-xl md:shadow-sm">
			<h1 className="text-3xl font-semibold">
				Create shipment
			</h1>
			<div className="flex flex-col gap-2">
				<label htmlFor="shipment-product" className="text-base font-medium text-slate-700">Shipment product *</label>
				<input
				type="text"
				id="shipment-product"
				name="product"
				required
				minLength={1}
				maxLength={50}
				placeholder="Product 324ff"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="shipment-lots" className="text-base font-medium text-slate-700">Shipment lots *</label>
				<input
				type="text"
				id="shipment-lots"
				name="lots"
				required
				minLength={1}
				maxLength={100}
				placeholder="lot 23f, lot 1ss, ..."
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="shipment-doses" className="text-base font-medium text-slate-700">Number of doses *</label>
				<input
				type="number"
				id="shipment-doses"
				name="doses"
				required
				min={1}
				placeholder="300"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="shipment-origin" className="text-base font-medium text-slate-700">Origin *</label>
				<input
				type="text"
				id="shipment-origin"
				name="origin"
				required
				minLength={1}
				maxLength={50}
				placeholder="site-23SSUG"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="shipment-destination" className="text-base font-medium text-slate-700">Destination *</label>
				<input
				type="text" 
				id="shipment-destination"
				name="destination"
				required
				minLength={1}
				maxLength={50}
				placeholder="site-JFE32"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="shipment-logger" className="text-base font-medium text-slate-700">Logger *</label>
				<select
					name="loggerId"
					id="shipment-logger"
					defaultValue=""
					required
					className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				>
					<option value="" disabled>select a logger</option>
					{
						availableLoggers.length==0
						? <option value="empty" disabled>
							No loggers available. Register loggers to use
						</option>
						:
						availableLoggers.map((logger)=>
						<option key={logger.id} value={logger.id}>
							#{logger.id.slice(0,5)}... - Calibrated {isoToDateLocal(logger.calibrationDate)}
						</option>
						)
					}
				</select>
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="shipment-arrival" className="text-base font-medium text-slate-700">Expected arrival *</label>
				<input
				id="shipment-arrival"
				type="datetime-local"
				name="expectedArrival"
				required
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex justify-center">
				<Button type="submit">
					Create
				</Button>
			</div>
		</form>
	)
}