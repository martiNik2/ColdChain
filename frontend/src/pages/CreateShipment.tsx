import { useAuth } from "react-oidc-context";
import LoadingPage from "./Loading";
import ErrorPage from "./Error";



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

	const handleSubmit = async (formData: FormData)=>{
			
	}

	return (
		<form action={handleSubmit} className="min-h-screen p-4 bg-linear-to-t from-primary-tint to-primary/20 space-y-8">
			<h1 className="text-3xl font-semibold">
				Create shipment
			</h1>
			<div className="flex flex-col gap-2">
				<label className="text-base font-medium text-slate-700">Shipment product *</label>
				<input
				type="text"
				name="product"
				required
				minLength={1}
				maxLength={50}
				placeholder="Product 324ff"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-base font-medium text-slate-700">Shipment lots *</label>
				<input
				type="text"
				name="lots"
				required
				minLength={1}
				maxLength={100}
				placeholder="lot 23f, lot 1ss, ..."
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-base font-medium text-slate-700">Number of doses *</label>
				<input
				type="number"
				name="doses"
				required
				min={1}
				placeholder="300"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-base font-medium text-slate-700">Origin *</label>
				<input
				type="text"
				name="origin"
				required
				minLength={1}
				maxLength={50}
				placeholder="site-23SSUG"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-base font-medium text-slate-700">Destination *</label>
				<input
				type="text"
				name="destination"
				required
				minLength={1}
				maxLength={50}
				placeholder="site-JFE32"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-base font-medium text-slate-700">Logger *</label>
				<input
				type="text"
				name="loggerId"
				required
				minLength={1}
				maxLength={50}
				placeholder="32432432"
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="text-base font-medium text-slate-700">Expected arrival *</label>
				<input
				type="date"
				name="expectedArrival"
				required
				className="border rounded-md border-primary/50 p-2 bg-primary-tint"
				/>
			</div>
		</form>
	)
}