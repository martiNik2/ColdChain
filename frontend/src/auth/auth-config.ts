export const oidcConfig = {
	authority: "http://localhost/auth/realms/ColdChain",
	client_id: "coldchain-frontend",
	redirect_uri: window.location.origin,
	post_logout_redirect_uri: window.location.origin,
	automaticSilentRenew: true,
}