import { DEFAULT_VOLUME } from '@/constants/notifications';
import { useCallback, useRef, useState } from 'preact/hooks';

const STORAGE_KEY = 'lforge_notifications:volume';

export function useVolume() {
	const [volume, setVolumeState] = useState<number>(() => {
		try {
			const saved = Number(localStorage.getItem(STORAGE_KEY));
			if (!Number.isNaN(saved) && Number.isFinite(saved) && saved >= 0 && saved <= 1) {
				return saved;
			}
		} catch {}
		return DEFAULT_VOLUME;
	});

	const prevVolumeRef = useRef<number>(volume > 0 ? volume : DEFAULT_VOLUME);

	const setVolume = useCallback((newVolume: number) => {
		const clamped = Math.min(Math.max(Number(newVolume.toFixed(2)), 0), 1);
		if (clamped > 0) {
			prevVolumeRef.current = clamped;
		}
		try {
			localStorage.setItem(STORAGE_KEY, clamped.toString());
		} catch {}
		setVolumeState(clamped);
	}, []);

	const isMuted = volume === 0;

	const toggleMute = useCallback(() => {
		if (volume > 0) {
			prevVolumeRef.current = volume;
			setVolume(0);
		} else {
			setVolume(prevVolumeRef.current > 0 ? prevVolumeRef.current : DEFAULT_VOLUME);
		}
	}, [volume, setVolume]);

	const resetVolume = useCallback(() => {
		setVolume(DEFAULT_VOLUME);
	}, [setVolume]);

	return { volume, setVolume, isMuted, toggleMute, resetVolume };
}
