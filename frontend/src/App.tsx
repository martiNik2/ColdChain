import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import LoadingPage from "./pages/Loading";
import ShipmentsPage from "./pages/Shipments";
import CreateShipmentPage from "./pages/CreateShipment";
import LoggersPage from "./pages/Loggers";

export default function App() {
	return (
		<div className="min-h-screen bg-slate-50">
			<Navbar />
			<main className="min-h-screen">
				<Routes>
					<Route path="/" element={<HomePage/>}/>	
					<Route path="/loading" element={<LoadingPage/>}/>	
					<Route path="/shipments" element={<ShipmentsPage/>}/>	
					<Route path="/shipments/create" element={<CreateShipmentPage/>}/>	
					<Route path="/loggers" element={<LoggersPage/>}/>	
				</Routes>
			</main>
		</div>
	)	
}

