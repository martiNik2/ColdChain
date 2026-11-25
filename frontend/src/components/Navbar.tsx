import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from './Button'

interface SidebarProps {
	SidebarLinks?: string[]
	SetIsOpen: (state:boolean)=>void
}

export default function Navbar(){
	const [isOpen,setIsOpen] = useState(false)
	const navigate = useNavigate()

	return (
		<>
			<div className="w-full h-20 bg-primary-tint flex border-b-2 border-b-slate-300 flex-row justify-between p-4 items-center">
				<img src="/ColdChainLogo.svg" className="w-12 h-12" onClick={()=> navigate("/")}/>
				<div className="hidden md:flex">
					<Button>
						Sign in
					</Button>
				</div>
				<button 
				className="md:hidden"
				onClick={()=>{
					setIsOpen(true)
				}}>
					<Menu size={40}/>
				</button>
			</div>
			{isOpen && <Sidebar SidebarLinks={["foo","bar","baz"]} SetIsOpen={()=>setIsOpen(false)}/>}
		</>
	)
}


function Sidebar({ SidebarLinks, SetIsOpen } : SidebarProps){
	const navigate = useNavigate()
	return (
		<div className="fixed inset-0 z-50 bg-gray-600/50 md:hidden">
			<div className="flex flex-col fixed inset-y-0 right-0 w-64 h-screen bg-blue-200 z-51">
				<button className="self-end p-4" onClick={()=>SetIsOpen(false)}>
					<Menu size={40}/>
				</button>
				<ul className="pt-10">
					{SidebarLinks?.map((page)=>(
						<li 
						key={page}
						className="text-2xl text-center py-4 border-b-2 border-b-gray-800"
						onClick={(event)=> {
							navigate(`/${page.toLowerCase()}`)
							event.stopPropagation()
							SetIsOpen(false)
						}}
						>{page}</li>
					))}
				</ul>
			</div>
		</div>
	)
}