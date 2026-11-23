
interface ButtonProps {
	OnClick?: ()=>void
	children: React.ReactNode
}

export default function Button({ OnClick, children }: ButtonProps){
	return (
		<button 
		type="button"
		className="h-12 bg-primary text-lg text-slate-100 rounded-md px-4 active:bg-active hover:bg-hover hover:cursor-pointer"
		onClick={OnClick}
		>
			{children}
		</button>
	)
}