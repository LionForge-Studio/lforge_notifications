import { useContext } from 'preact/hooks';
import { SettingsContext } from './settingsContextDef';

export const useSettings = () => {
	const ctx = useContext(SettingsContext);
	if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
	return ctx;
};
