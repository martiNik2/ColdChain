import type { User } from "./domain-types"

type Role = keyof typeof ROLES
type Permission = (typeof ROLES)[Role][number]

const ROLES = {
	admin: [
		"view:shipments",
		"view:audit_entries",
		"view:readings",
		"view:loggers",
		"view:users"
	],
	quality_officer: [
		"create:loggers",
		"update:loggers",
		"view:loggers",
		"view:shipments",
		"update:shipments",
		"view:readings",
	],
	receiver: [
		"view:shipments",
		"update:shipments",
		"view:readings"
	],
	dispatcher: [
		"create:shipments",
		"view:shipments",
		"update:shipments",
		"view:readings",
		"view:loggers",
	]
} as const

export function hasPermission(
	user: Pick<User,"role"> | null | undefined, 
	permission: Permission
	): boolean {
	if (!user){
		return false
	}

	return (ROLES[user.role] as readonly Permission[]).includes(permission)	
}

