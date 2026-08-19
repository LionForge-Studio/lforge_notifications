import type { Notification as NotificationType } from '@/types/Notification';
import STYLES from './index.module.css';
import { NOTIFICATION_ICONS, DEFAULT_NOTIFICATION_DURATION } from '@/constants/notifications';
import { useEffect, useRef } from 'preact/hooks';
import { Icon } from '@iconify/react';
import { useSettings } from '@/context/SettingsContext';

interface NotificationProps {
	notification: NotificationType;
	onComplete: () => void;
	position: string;
}

const getIcon = (notification: NotificationType): preact.JSX.Element => {
	if (!notification.icon) {
		const FallbackIcon = NOTIFICATION_ICONS[notification.type];
		return <FallbackIcon className={STYLES.notificationIcon} />;
	}
	return (
		<Icon
			icon={notification.icon ?? 'stash:question-light'}
			className={STYLES.notificationIcon}
			width="24"
			height="24"
		/>
	);
};

export function Notification({ notification, onComplete, position }: NotificationProps) {
	const icon = getIcon(notification);
	const notificationRef = useRef<HTMLDivElement>(null);
	const onCompleteRef = useRef(onComplete);
	onCompleteRef.current = onComplete;
	const { volume } = useSettings();

	useEffect(() => {
		let removeTimer: ReturnType<typeof setTimeout> | undefined;

		const timer = setTimeout(() => {
			notificationRef.current?.classList.add(STYLES.removing);
			removeTimer = setTimeout(() => {
				onCompleteRef.current();
			}, 400);
		}, notification.duration ?? DEFAULT_NOTIFICATION_DURATION);

		return () => {
			clearTimeout(timer);
			if (removeTimer) clearTimeout(removeTimer);
		};
	}, [notification.duration]);

	useEffect(() => {
		const audio = new Audio(`/sounds/${notification.type}.mp3`);
		audio.volume = volume;
		audio.play();
	}, []);

	return (
		<article
			ref={notificationRef}
			className={STYLES.notification}
			data-position={position}
			data-type={notification.type}
		>
			<div className={STYLES.lateralDecoration}></div>
			<div className={STYLES.topDecoration}>
				<li />
				<li />
				<li />
			</div>
			{icon}
			<div className={STYLES.notificationContent}>
				<h2 className={STYLES.notificationTitle}>{notification.title}</h2>
				<p className={STYLES.notificationMessage}>{notification.message}</p>
			</div>
		</article>
	);
}
