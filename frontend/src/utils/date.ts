import { format, isValid, parseISO} from 'date-fns'
import type {
	CalendarDateString,
	IsoTimestampString,
	DatetimeLocalString
} from '../types/date-types'

export function datetimeLocalToIso(date: DatetimeLocalString){
	const isoDate = parseISO(date)
	return isoDate.toISOString()
}

export function isoToDatetimeLocal(date: IsoTimestampString){
	const parsedIso = parseISO(date)
	return format(parsedIso, 'PPP p')
}

export function isoToDateLocal(date: IsoTimestampString){
	const parsedIso = parseISO(date)
	return format(parsedIso, 'PP')
}