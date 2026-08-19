// vite-env.d.ts (typically already present from vite scaffolding)
declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
