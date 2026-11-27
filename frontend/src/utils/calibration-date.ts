import { addMonths, isAfter, parseISO, startOfDay } from "date-fns";


export function isCalibrationExpired(date: string){
	const calibrationDate = startOfDay(parseISO(date))
	const now = startOfDay(new Date())
	return isAfter(now, addMonths(calibrationDate,12))
}