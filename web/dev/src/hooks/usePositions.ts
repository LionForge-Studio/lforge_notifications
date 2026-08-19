import { POSITIONS } from '@/constants/positions';
import type { Position } from '@/types/Position';
import { useCallback, useState } from 'react';

const STORAGE_KEY = 'lforge_notifications:position';

export const usePosition = (defaultValue: Position = POSITIONS.TOP_RIGHT) => {
	const [position, setPositionState] = useState<Position>(() => {
		try {
			const saved = localStorage.getItem(STORAGE_KEY) as Position | null;
			if (saved && Object.values(POSITIONS).includes(saved)) {
				return saved;
			}
		} catch {}
		return defaultValue;
	});

	const setPosition = useCallback((newPosition: Position) => {
		try {
			localStorage.setItem(STORAGE_KEY, newPosition);
		} catch {}
		setPositionState(newPosition);
	}, []);

	return { position, setPosition };
};
