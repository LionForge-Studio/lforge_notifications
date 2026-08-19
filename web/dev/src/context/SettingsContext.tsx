import { createContext, type ComponentChildren } from 'preact';
import { usePosition as usePositionInternal } from '@/hooks/usePositions';
import { useVolume as useVolumeInternal } from '@/hooks/useVolume';
import type { Position } from '@/types/Position';
import { useContext } from 'preact/hooks';

interface SettingsContextType {
	position: Position;
	setPosition: (pos: Position) => void;
	volume: number;
	setVolume: (vol: number) => void;
}

const SettingsContext = createContext<SettingsContextType | null>(null);

export function SettingsProvider({ children }: { children: ComponentChildren }) {
	const { position, setPosition } = usePositionInternal();
	const [volume, setVolume] = useVolumeInternal();

	return (
		<SettingsContext.Provider value={{ position, setPosition, volume, setVolume }}>
			{children}
		</SettingsContext.Provider>
	);
}

export const useSettings = () => {
	const ctx = useContext(SettingsContext);
	if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
	return ctx;
};
