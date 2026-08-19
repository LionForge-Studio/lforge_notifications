import { NOTIFICATION_TYPES } from '@/constants/notifications';

export interface Notification {
	id: string;
	message: string;
	type: NotificationType;
	duration: number;
	icon?: string;
	title?: string;
}

export type NotificationType = (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];
