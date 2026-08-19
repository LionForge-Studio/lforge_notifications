import { Display } from '@/views/display';
import { Settings } from '@/views/settings';
import { usePosition } from '@/hooks/usePositions';
import { useEffect } from 'react';
import useNuiEvent from '@/hooks/useNuiEvents';
import { isEnvBrowser } from '@/utils/misc';
import { NOTIFICATION_TYPES } from '@/constants/notifications';
import type { Notification } from '@/types/Notification';
import { useQueue } from '@/hooks/useQueue';

export function App() {
	const { position, setPosition } = usePosition();
	const queue = useQueue<Notification>();

	useEffect(() => {
		if (!isEnvBrowser()) return;

		const timeouts: ReturnType<typeof setTimeout>[] = [];

		timeouts.push(
			setTimeout(() => {
				queue.enqueue({
					id: '1234',
					title: 'Notification',
					message: 'Notification',
					type: NOTIFICATION_TYPES.INFO,
					duration: 5000,
				});
			}, 0),
		);

		timeouts.push(
			setTimeout(() => {
				queue.enqueue({
					id: '1235',
					title: 'Notification2',
					message: 'Notification2',
					type: NOTIFICATION_TYPES.WARNING,
					duration: 5000,
				});
			}, 3000),
		);

		timeouts.push(
			setTimeout(() => {
				queue.enqueue({
					id: '1236',
					title: 'Notification3',
					message: 'Notification3',
					type: NOTIFICATION_TYPES.ERROR,
					duration: 5000,
				});
				queue.enqueue({
					id: '1237',
					title: 'Notification4',
					message:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus deserunt voluptatum ea exercitationem rem debitis libero explicabo, dolore excepturi, itaque quidem placeat repudiandae architecto! Aliquid dolore impedit reprehenderit vel esse. Esse dolor repellendus, itaque, ea officiis neque ducimus aliquid accusantium fugiat nulla odio atque molestiae eaque ipsa? Nisi, alias rem cumque error velit ducimus natus quo facilis accusantium eveniet perspiciatis',
					type: NOTIFICATION_TYPES.BANKING,
					duration: 5000,
				});
			}, 6000),
		);

		timeouts.push(
			setTimeout(() => {
				queue.enqueue({
					id: '1238',
					title: 'Notification5',
					message: 'Notification5',
					type: NOTIFICATION_TYPES.SUCCESS,
					duration: 5000,
				});
			}, 8000),
		);

		return () => {
			timeouts.forEach(clearTimeout);
		};
	}, []);

	useNuiEvent<Omit<Notification, 'id'>>('notification', (data) => {
		const notification: Notification = {
			id: crypto.randomUUID(),
			title: data.title,
			message: data.message,
			type: data.type,
			duration: data.duration,
		};
		queue.enqueue(notification);
	});

	return (
		<>
			<Display position={position} queue={queue} />
			<Settings position={position} setPosition={setPosition} />
		</>
	);
}

export default App;
