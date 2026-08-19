import { POSITIONS } from '@/constants/positions';
import type { Position } from '@/types/Position';
import { Check, Monitor } from 'lucide-preact';
import STYLES from './PositionSelector.module.css';

interface PositionOption {
	id: Position;
	label: string;
	image: string;
}

const POSITION_OPTIONS: PositionOption[] = [
	{ id: POSITIONS.TOP_LEFT, label: 'Top Left', image: '/images/top-left.png' },
	{ id: POSITIONS.TOP_CENTER, label: 'Top Center', image: '/images/top-center.png' },
	{ id: POSITIONS.TOP_RIGHT, label: 'Top Right', image: '/images/top-right.png' },
	{ id: POSITIONS.LEFT_CENTER, label: 'Left Center', image: '/images/left-center.png' },
	{ id: POSITIONS.RIGHT_CENTER, label: 'Right Center', image: '/images/right-center.png' },
	{ id: POSITIONS.BOTTOM_LEFT, label: 'Bottom Left', image: '/images/bottom-left.png' },
	{ id: POSITIONS.BOTTOM_CENTER, label: 'Bottom Center', image: '/images/bottom-center.png' },
	{ id: POSITIONS.BOTTOM_RIGHT, label: 'Bottom Right', image: '/images/bottom-right.png' },
];

interface PositionSelectorProps {
	value: Position;
	onChange: (pos: Position) => void;
}

export function PositionSelector({ value, onChange }: PositionSelectorProps) {
	return (
		<div className={STYLES.mockup}>
			<div className={STYLES.grid}>
				{POSITION_OPTIONS.map((pos) => {
					const isActive = value === pos.id;
					return (
						<button
							key={pos.id}
							className={`${STYLES.card} ${isActive ? STYLES.active : ''}`}
							onClick={() => onChange(pos.id)}
							data-pos={pos.id}
						>
							<div className={STYLES.imageWrapper}>
								<img
									src={pos.image}
									alt={pos.label}
									className={STYLES.image}
									loading="eager"
								/>
								{isActive && (
									<div className={STYLES.indicator}>
										<Check size={12} strokeWidth={3} />
									</div>
								)}
							</div>
							<span className={STYLES.label}>{pos.label}</span>
						</button>
					);
				})}
				<div className={STYLES.center}>
					<Monitor size={20} className={STYLES.centerIcon} />
					<span className={STYLES.centerText}>SCREEN</span>
				</div>
			</div>
		</div>
	);
}
