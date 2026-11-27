import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import LoadingPage from "./pages/Loading";
import ShipmentsPage from "./pages/Shipments";
import CreateShipmentPage from "./pages/CreateShipment";
import LoggersPage from "./pages/Loggers";
import ErrorPage from "./pages/Error";

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
					<Route path="/*" element={
						<ErrorPage
							status_code={404}
							error_message="Not found"
							error_description="The page you are looking for was not found, try again?"
						/>
					}/>	
				</Routes>
			</main>
		</div>
	)	
}

