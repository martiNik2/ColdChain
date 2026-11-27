import { useState } from "react";
import type { Logger } from "../types/domain-types";
import Dialog from "./Dialog";
import Button from "./Button";
import { isCalibrationExpired } from "../utils/calibration-date";
import type { CalendarDateString } from "../types/date-types";

interface LoggerCardProps {
	logger: Logger
	onCalibrationChange: (id: string, date: CalendarDateString) => void
}

export default function LoggerCard({ logger, onCalibrationChange }: LoggerCardProps) {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const handleConfirm = async (formData: FormData) => {
		const modifiedDate = String(formData.get("calibrationDate") ?? "")
		onCalibrationChange(logger.id, modifiedDate)
		setIsDialogOpen(false)
	}

	return (
		<>
			<Dialog isDialogOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} action={handleConfirm}>
				<div className="flex flex-col items-center gap-4 px-4 pt-4 pb-10">
					<h1 className="text-center text-xl font-semibold">Update logger</h1>
					<label>The date of the last calibration:</label>
					<input
						type="date"
						required
						name="calibrationDate"
						className="bg-primary/10 rounded-xl p-2"
					/>
				</div>
			</Dialog>
			<dl className="border-2 border-primary/40 rounded-2xl p-4 bg-primary-tint space-y-2 divide-y divide-slate-200/70 md:w-full md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:space-y-0 md:divide-y-0">
				<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
					<dt className="text-sm text-slate-700 shrink-0">
						Logger Id
					</dt>
					<dd className="font-semibold text-sm text-slate-900 text-right">
						{logger.id.slice(0, 6) + "..."}
					</dd>
				</div>
				<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
					<dt className="text-sm text-slate-700 shrink-0">
						Calibration date
					</dt>
					<dd className="font-semibold text-sm text-slate-900 text-right">
						{logger.calibrationDate}
					</dd>
				</div>
				<div className="flex flex-row items-baseline justify-between text-lg gap-4 py-2 first:pt-0 last:pb-0 md:col-span-2">
					<dt className="text-sm text-slate-700 shrink-0">
						Expired
					</dt>
					<dd className="font-semibold text-sm text-slate-900 text-right">
						{isCalibrationExpired(logger.calibrationDate) ? 'Yes' : 'No'}
					</dd>
				</div>
				<div className="flex flex-row justify-center md:col-span-2">
					<Button OnClick={() => setIsDialogOpen(true)}>
						Recalibrate
					</Button>
				</div>
			</dl>
		</>
	)
}