import { createContext } from 'preact';
import type { Position } from '@/types/Position';
import type { Notification } from '@/types/Notification';

export interface SettingsContextType {
	position: Position;
	setPosition: (pos: Position) => void;
	volume: number;
	setVolume: (vol: number) => void;
	isMuted: boolean;
	toggleMute: () => void;
	resetVolume: () => void;
	sendNotification?: (data: Omit<Notification, 'id'>) => void;
}

export const SettingsContext = createContext<SettingsContextType | null>(null);
