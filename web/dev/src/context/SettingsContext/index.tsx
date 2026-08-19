import type { ComponentChildren } from 'preact';
import { usePosition as usePositionInternal } from '@/hooks/usePositions';
import { useVolume as useVolumeInternal } from '@/hooks/useVolume';
import type { Notification } from '@/types/Notification';
import { SettingsContext } from './settingsContextDef';

interface SettingsProviderProps {
	children: ComponentChildren;
	onSendNotification?: (data: Omit<Notification, 'id'>) => void;
}

export function SettingsProvider({ children, onSendNotification }: SettingsProviderProps) {
	const { position, setPosition } = usePositionInternal();
	const { volume, setVolume, isMuted, toggleMute, resetVolume } = useVolumeInternal();

	return (
		<SettingsContext.Provider
			value={{
				position,
				setPosition,
				volume,
				setVolume,
				isMuted,
				toggleMute,
				resetVolume,
				sendNotification: onSendNotification,
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
}
