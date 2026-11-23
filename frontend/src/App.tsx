import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import LoadingPage from "./pages/Loading";

export default function App() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="min-h-screen bg-slate-50">
				<Routes>
					<Route path="/" element={<HomePage/>}/>	
					<Route path="/loading" element={<LoadingPage/>}/>	
				</Routes>
			</main>
		</div>
	)	
}

