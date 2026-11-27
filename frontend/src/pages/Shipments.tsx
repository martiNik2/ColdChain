import { useAuth } from "react-oidc-context"
import ErrorPage from "./Error"
import LoadingPage from "./Loading"
import type { Shipment } from "../types/domain-types"
import ShipmentCard from "../components/ShipmentCard"
import Button from "../components/Button"
import { useNavigate } from "react-router"

const test_shipments : Shipment[] = [
	{
		id:"j2932-095729n4072n34n097525n27",
		product:"cocaine",
		lots:"a lot",
		doses:300,
		origin:"madrid",
		destination:"irbid",
		expectedArrival:"25th november",
		loggerId:"435",
		state:"created",
		excursion:false
	},
	{
		id:"4",
		product:"adrenaline",
		lots:"j52h",
		doses:100,
		origin:"ukraine",
		destination:"washington",
		expectedArrival:"23rd dec",
		loggerId:"4360",
		state:"in-transit",
		excursion:true
	},
	{
		id:"63",
		product:"fentanyl",
		lots:"y202",
		doses:50,
		origin:"area51",
		destination:"riyadh",
		expectedArrival:"2015 in past",
		loggerId:"1010",
		state:"discarded",
		excursion:true
	},
	{
		id:"235",
		product:"phizer",
		lots:"320222dfs",
		doses:250,
		origin:"kyoto",
		destination:"qatar",
		expectedArrival:"2077 4th",
		loggerId:"435",
		state:"delivered",
		excursion:true
	},
]

export default function ShipmentsPage(){
	const auth = useAuth()
	const nav = useNavigate()

	if (auth.isLoading){
		return <LoadingPage/>
	}

	if (!auth.isAuthenticated || auth.error){
		return <ErrorPage status_code={401}
		error_message="Unauthenticated"
		error_description="You cannot view this page because you are not signed in."
		/>
	}

	if (test_shipments.length == 0){
		return <div className="text-center text-2xl text-semibold pt-8">
			No Shipments found. Create shipments to track
		</div>
	}

	return (
		<div className="p-6">
			<div className="flex flex-row pb-8 justify-between items-center">
				<h1 className="text-3xl font-bold">
					Shipments
				</h1>
				<Button OnClick={()=> nav('/shipments/create')}>
					Create
				</Button>
			</div>
			<div className="space-y-8">
			{
				test_shipments.map((shipment)=><ShipmentCard key={shipment.id} shipment={shipment}/>)
			}
			</div>
		</div>
	)
}