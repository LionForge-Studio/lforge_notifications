// Will return whether the current environment is in a regular browser
// and not CEF
export const isEnvBrowser = (): boolean =>
	!(window as unknown as { invokeNative: unknown }).invokeNative;

// Basic no operation function
export const noop = () => {};
