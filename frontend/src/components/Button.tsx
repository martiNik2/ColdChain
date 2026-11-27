import { twMerge } from "tailwind-merge"

interface ButtonProps {
	OnClick?: () => void
	children: React.ReactNode
	className?: string
	type?: "submit" | "button" | "reset" | undefined
}

export default function Button({ OnClick, children, className, type = "button" }: ButtonProps) {
	return (
		<button
			type={type}
			className={
				twMerge("h-12 bg-primary text-lg text-slate-100 rounded-md px-4 active:bg-active hover:bg-hover hover:cursor-pointer"
					, className)}
			onClick={OnClick}
		>
			{children}
		</button>
	)
}