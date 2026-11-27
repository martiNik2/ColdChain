import { useAuth } from "react-oidc-context";
import LoggerCard from "../components/LoggerCard";
import type { Logger } from "../types/domain-types";
import LoadingPage from "./Loading";
import ErrorPage from "./Error";
import Button from "../components/Button";
import { useState } from "react";
import Dialog from "../components/Dialog";


const test_loggers = [
	{ id: "20432", calibrationDate: "24020492" },
	{ id: "324092", calibrationDate: "3294082" },
	{ id: "342498", calibrationDate: "wjeri32" },
	{ id: "wjeij3", calibrationDate: "28hjf" },
	{ id: "ajioejf", calibrationDate: "jfwoie3" },
] as Logger[]


export default function LoggersPage() {
	const [loggers, setLoggers] = useState<Logger[]>(test_loggers)
	const [createLoggerDialog, setCreateLoggerDialog] = useState(false)
	const auth = useAuth()

	if (auth.isLoading) {
		return <LoadingPage />
	}

	if (!auth.isAuthenticated || auth.error) {
		return (
			<ErrorPage
				status_code={401}
				error_message="Unauthenticated"
				error_description="You have to be signed in to access this page"
			/>
		)
	}

	const updateCalibration = (id: string, date: string) => {
		setLoggers(
			prev => prev.map(i => i.id === id ? { ...i, calibrationDate: date } : i)
		)
	}

	const createLogger = (formData: FormData) => {
		const date = String(formData.get('calibrationDate') ?? "") 
		const newLogger = { id: String(Math.random() * 100), calibrationDate: date } as Logger
		setLoggers((prev) => [...prev, newLogger])
		setCreateLoggerDialog(false)
		console.log('created')
	}



	return (
		<div className="p-4 space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
			<div className="flex flex-row justify-between items-center md:col-span-3">
				<h1 className="text-3xl font-semibold">
					Loggers
				</h1>
				<Dialog
					isDialogOpen={createLoggerDialog}
					onClose={() => setCreateLoggerDialog(false)}
					action={createLogger}>
					<div className="flex flex-col items-center gap-4 px-4 pt-4 pb-10">
						<h1 className="text-center text-xl font-semibold">Register logger</h1>
						<label>The date of the last calibration:</label>
						<input
							type="date"
							required
							name="calibrationDate"
							className="bg-primary/10 rounded-xl p-2"
						/>
					</div>
				</Dialog>
				<Button OnClick={() => setCreateLoggerDialog(true)}>
					Register logger
				</Button>
			</div>
			{
				loggers.length > 0 ?
					loggers.map((logger) => (
						<LoggerCard key={logger.id} logger={logger} onCalibrationChange={updateCalibration} />
					))
					: <div className="text-center text-xl md:col-span-3">No loggers available.</div>
			}
		</div>
	)
}