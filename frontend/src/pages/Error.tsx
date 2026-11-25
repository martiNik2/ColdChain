interface ErrorPageProps {
	status_code:number,
	error_message:string,
	error_description:string
}

export default function ErrorPage({status_code, error_message, error_description=""} : ErrorPageProps){
	return (
		<div className="flex flex-col gap-4 items-center p-6 min-h-[calc(100vh-7rem)] justify-center">
			<div className="flex flex-row gap-2 justify-center items-center">
				<div className="text-6xl text-slate-800 font-bold">{status_code}</div>
				<div className="text-2xl text-slate-800 font-semibold">{error_message}</div>
			</div>
			<p className="text-center">{error_description}</p>
		</div>
	)
}