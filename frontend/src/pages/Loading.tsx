import Spinner from "../components/Spinner";

export default function LoadingPage(){
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-4xl text-center font-semibold pt-40 pb-10">
				Loading...
			</h1>
			<Spinner className="w-32 h-32"/>
		</div>
	)
}

