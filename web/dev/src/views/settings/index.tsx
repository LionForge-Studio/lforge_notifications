import { useSettings } from '@/context/SettingsContext';

export function Settings() {
	const { position } = useSettings();

	return <div>position: {position}</div>;
}
