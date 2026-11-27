import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from './Button'
import { useAuth, type AuthContextProps } from 'react-oidc-context'

const SYSTEM_ROLES = [
	"default-roles-coldchain",
	"offline_access",
	"uma_authorization"
]

interface SidebarProps {
	SidebarLinks?: string[]
	SetIsSidebarOpen: (state: boolean) => void
	Auth: AuthContextProps
}

export default function Navbar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const navigate = useNavigate()
	const auth = useAuth()


	const roles = (auth.user?.profile?.realm_access as { roles?: string[] } | undefined)?.roles ?? []
	const name = auth.user?.profile?.name as string

	console.log("she is " + name)

	const mainRole = roles.find((r) => !SYSTEM_ROLES.includes(r)) as string
	
	return (
		<>
			<div className="w-full h-20 bg-primary-tint flex border-b-2 border-b-slate-300 flex-row justify-between p-4 items-center">
				<img src="/ColdChainLogo.svg" className="w-12 h-12 hover:cursor-pointer" onClick={() => navigate("/")} />
				<div className="hidden md:flex gap-4">
					{
						auth.isAuthenticated ?
							(
								<>
									<div className="flex flex-col items-center">
										<div>{name}</div>
										<div>{mainRole}</div>
									</div>
									<Button OnClick={() => auth.signoutRedirect()}>
										Sign out
									</Button>
								</>
							)
							: (
								<Button OnClick={() => auth.signinRedirect()}>
									Sign in
								</Button>
							)
					}
				</div>
				<button
					className="md:hidden"
					onClick={() => {
						setIsSidebarOpen(true)
					}}>
					<Menu size={40} />
				</button>
			</div>
			{isSidebarOpen && <Sidebar
				SidebarLinks={["foo", "bar", "baz"]}
				SetIsSidebarOpen={() => setIsSidebarOpen(false)}
				Auth={auth}
			/>}
		</>
	)
}


function Sidebar({ SidebarLinks, SetIsSidebarOpen, Auth }: SidebarProps) {
	const navigate = useNavigate()

	const roles = (Auth.user?.profile?.realm_access as { roles?: string[] } | undefined)?.roles ?? []
	const name = Auth.user?.profile?.name as string

	const mainRole = roles.find((r) => !SYSTEM_ROLES.includes(r)) as string

	return (
		<div onClick={() => SetIsSidebarOpen(false)} className="fixed inset-0 z-50 bg-gray-600/50 md:hidden">
			<div onClick={(e) => e.stopPropagation()} className="flex flex-col fixed inset-y-0 right-0 w-64 h-screen bg-blue-200 z-51">
				<div className="flex flex-row items-center justify-between p-4">
					{Auth.isAuthenticated
						? <Button OnClick={() => Auth.signoutRedirect()}>
							Sign out
						</Button>
						: <Button OnClick={() => Auth.signinRedirect()}>
							Sign in
						</Button>
					}
					<button onClick={() => SetIsSidebarOpen(false)}>
						<Menu size={40} />
					</button>
				</div>
				<div className="flex flex-col p-2 gap-1 text-lg">
					<span>{Auth.isAuthenticated && name}</span>
					<span>{Auth.isAuthenticated && mainRole}</span>
				</div>
				<ul className="pt-4">
					{SidebarLinks?.map((page) => (
						<li
							key={page}
							className="text-2xl text-center py-4 border-b-2 border-b-gray-800"
							onClick={(event) => {
								navigate(`/${page.toLowerCase()}`)
								event.stopPropagation()
								SetIsSidebarOpen(false)
							}}
						>{page}</li>
					))}
				</ul>
			</div>
		</div>
	)
}