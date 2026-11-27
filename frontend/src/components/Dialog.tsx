import type { ReactNode } from "react";
import Button from "./Button";

interface DialogProps {
	isDialogOpen: boolean
	onClose: () => void
	action: (formData: FormData) => void | Promise<void>
	children: ReactNode
}

export default function Dialog({ isDialogOpen, onClose, action, children }: DialogProps) {
	if (!isDialogOpen) {
		return null
	}

	return (
		<div onClick={onClose} className="h-dvh w-screen fixed inset-0 bg-black/50 flex items-center justify-center">
			<form
				onClick={(e) => e.stopPropagation()}
				action={action}
				className="w-4/5 max-h-[85dvh] md:max-w-md bg-primary-tint rounded-xl p-4 flex flex-col gap-6">
				<div>
					{children}
				</div>
				<div className="flex flex-row justify-center gap-4">
					<Button type="submit">
						Confirm
					</Button>
					<Button OnClick={onClose} className="bg-blue-200 hover:bg-blue-300 active:bg-blue-400 text-black">
						Back
					</Button>
				</div>
			</form>
		</div>
	)
}