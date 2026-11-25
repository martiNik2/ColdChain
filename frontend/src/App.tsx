import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="min-h-screen bg-slate-50">
				<Routes>
					<Route path="/" element={<Home/>}/>	
				</Routes>
			</main>
		</div>
	)	
}

