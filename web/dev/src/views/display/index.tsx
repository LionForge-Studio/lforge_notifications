import type { Notification as NotificationType } from '@/types/Notification';
import STYLES from './index.module.css';
import { useEffect, useState } from 'preact/hooks';
import { MAX_ACTIVE_NOTIFICATIONS } from '@/constants/notifications';
import { Notification } from '@/components/Notification';
import { useQueue } from '@/hooks/useQueue';
import { useSettings } from '@/context/SettingsContext';

export interface DisplayProps {
	queue: ReturnType<typeof useQueue<NotificationType>>;
}

export function Display({ queue }: DisplayProps) {
	const { position } = useSettings();
	const [activeNotifications, setActiveNotifications] = useState<NotificationType[]>([]);

	useEffect(() => {
		if (queue.isEmpty()) return;

		const availableSlots = MAX_ACTIVE_NOTIFICATIONS - activeNotifications.length;
		if (availableSlots <= 0) return;

		const nextBatch = queue.items.slice(0, availableSlots);
		queue.setItems((prev) => prev.slice(availableSlots));
		setActiveNotifications((prev) => [...prev, ...nextBatch]);
	}, [queue.items, activeNotifications.length]);

	const handleNotificationComplete = (id: string) => {
		setActiveNotifications((prev) => prev.filter((n) => n.id !== id));
	};

	if (activeNotifications.length === 0) return null;

	return (
		<div id="notification-display" className={STYLES.wrapper} data-position={position}>
			{activeNotifications.map((notification) => (
				<Notification
					notification={notification}
					onComplete={() => handleNotificationComplete(notification.id)}
					position={position}
				/>
			))}
		</div>
	);
}

export default Display;
