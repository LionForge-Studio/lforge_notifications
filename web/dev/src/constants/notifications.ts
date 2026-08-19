import {
	CircleCheckBig,
	CircleDollarSign,
	CircleX,
	Info,
	TriangleAlert,
	type LucideIcon,
} from 'lucide-preact';
import type { NotificationType } from '@/types/Notification';

export const NOTIFICATION_TYPES = {
	INFO: 'info',
	SUCCESS: 'success',
	ERROR: 'error',
	WARNING: 'warning',
	BANKING: 'banking',
} as const;

export const DEFAULT_NOTIFICATION_DURATION = 5000;
export const MAX_ACTIVE_NOTIFICATIONS = 4;
export const DEFAULT_VOLUME = 0.1;

export const NOTIFICATION_ICONS: Record<NotificationType, LucideIcon> = {
	[NOTIFICATION_TYPES.INFO]: Info,
	[NOTIFICATION_TYPES.SUCCESS]: CircleCheckBig,
	[NOTIFICATION_TYPES.ERROR]: CircleX,
	[NOTIFICATION_TYPES.WARNING]: TriangleAlert,
	[NOTIFICATION_TYPES.BANKING]: CircleDollarSign,
} as const;
