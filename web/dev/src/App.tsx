import { Display } from '@/views/display';
import { Settings } from '@/views/settings';
import { useCallback, useState } from 'preact/hooks';
import useNuiEvent from '@/hooks/useNuiEvents';
import type { Notification } from '@/types/Notification';
import { useQueue } from '@/hooks/useQueue';
import { SettingsProvider } from './context/SettingsContext';

export function App() {
	const queue = useQueue<Notification>();
	const [settingsActive, setSettingsActive] = useState(false);

	const handleSendNotification = useCallback(
		(data: Omit<Notification, 'id'>) => {
			const notification: Notification = {
				id: crypto.randomUUID(),
				title: data.title,
				message: data.message,
				type: data.type,
				duration: data.duration ?? 5000,
				icon: data.icon,
			};
			queue.enqueue(notification);
		},
		[queue],
	);

	useNuiEvent<Omit<Notification, 'id'>>('notification', (data) => {
		handleSendNotification(data);
	});

	useNuiEvent<boolean>('setSettingsActive', (data) => {
		setSettingsActive(data);
	});

	return (
		<SettingsProvider onSendNotification={handleSendNotification}>
			<Display queue={queue} />
			{settingsActive && <Settings onClose={() => setSettingsActive(false)} />}
		</SettingsProvider>
	);
}

export default App;
