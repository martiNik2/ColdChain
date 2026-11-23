import Button from "../components/Button";

export default function HomePage(){
	return (
		<div className="p-8 text-xl space-y-8 max-w-5xl">
			<h1 className="text-2xl font-semibold pt-4">
				Welcome to ColdChain!
			</h1>
			<p>
				ColdChain is a web app designed for the sole purpose of making the tedious
				process of handling vaccine shipments easier.
			</p>
			<p>
				From dispatchers to drivers, ColdChain aims to simplify vaccine transits
				and make them less prone to errors that could put ineffective vaccines
				into use, cuts down on back-and-forth calls, and prevents unnecessary
				shipment discards.
			</p>
			<p>
				To get started, sign in with your company's OpenID Connect credentials:
			</p>
			<Button>
				Sign in
			</Button>	
		</div>
	)
}