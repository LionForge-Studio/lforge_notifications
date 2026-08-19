import { DEFAULT_VOLUME } from '@/constants/notifications';
import { useCallback, useState } from 'react';

const STORAGE_KEY = 'lforge_notifications:volume';

export function useVolume() {
	const [volume, setVolumeState] = useState<number>(() => {
		try {
			const saved = Number(localStorage.getItem(STORAGE_KEY));
			if (saved && !Number.isNaN(saved) && Number.isFinite(saved)) {
				return saved;
			}
		} catch {}
		return DEFAULT_VOLUME;
	});

	const setVolume = useCallback((volume: number) => {
		try {
			localStorage.setItem(STORAGE_KEY, volume.toString());
		} catch {}
		setVolumeState(volume);
	}, []);

	return [volume, setVolume] as const;
}
