import { useState } from 'preact/hooks';
import { Send } from 'lucide-preact';
import { NOTIFICATION_TYPES, NOTIFICATION_ICONS } from '@/constants/notifications';
import type { Notification, NotificationType } from '@/types/Notification';
import { Button } from '@/components/ui';
import STYLES from './NotificationTester.module.css';

const TEST_PRESETS: Record<NotificationType, { title: string; message: string }> = {
	[NOTIFICATION_TYPES.INFO]: {
		title: 'System Information',
		message: 'Your vehicle has been registered successfully to garage slot #3.',
	},
	[NOTIFICATION_TYPES.SUCCESS]: {
		title: 'Payment Received',
		message: 'Received $4,250 for completing delivery contract.',
	},
	[NOTIFICATION_TYPES.WARNING]: {
		title: 'Engine Warning',
		message: 'Engine temperature is rising rapidly! Please pull over.',
	},
	[NOTIFICATION_TYPES.ERROR]: {
		title: 'Access Denied',
		message: 'Security authorization code invalid. Access has been locked.',
	},
	[NOTIFICATION_TYPES.BANKING]: {
		title: 'Maze Bank Wire',
		message: 'Direct deposit of $12,500 credited to account #849201.',
	},
};

interface NotificationTesterProps {
	onSend: (data: Omit<Notification, 'id'>) => void;
}

export function NotificationTester({ onSend }: NotificationTesterProps) {
	const [selected, setSelected] = useState<NotificationType>(NOTIFICATION_TYPES.SUCCESS);

	const fire = (type: NotificationType) => {
		const preset = TEST_PRESETS[type];
		onSend({ title: preset.title, message: preset.message, type, duration: 4500 });
	};

	return (
		<div className={STYLES.root}>
			<div className={STYLES.pills}>
				{(Object.values(NOTIFICATION_TYPES) as NotificationType[]).map((type) => {
					const Icon = NOTIFICATION_ICONS[type];
					const isSelected = selected === type;
					return (
						<button
							key={type}
							className={`${STYLES.pill} ${STYLES[`type_${type}`]} ${isSelected ? STYLES.activePill : ''}`}
							onClick={() => {
								setSelected(type);
								fire(type);
							}}
						>
							<Icon size={14} />
							<span>{type}</span>
						</button>
					);
				})}
			</div>

			<Button
				variant="primary"
				size="md"
				fullWidth
				icon={<Send size={16} />}
				onClick={() => fire(selected)}
			>
				Trigger Test Alert
			</Button>
		</div>
	);
}
