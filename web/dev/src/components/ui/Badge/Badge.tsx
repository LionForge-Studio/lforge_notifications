import type { ComponentChildren } from 'preact';
import STYLES from './Badge.module.css';

export interface BadgeProps {
	variant?: 'accent' | 'muted' | 'danger' | 'success';
	size?: 'sm' | 'md';
	children: ComponentChildren;
	className?: string;
}

export function Badge({ variant = 'accent', size = 'sm', children, className = '' }: BadgeProps) {
	const classNames = [STYLES.badge, STYLES[variant], STYLES[size], className]
		.filter(Boolean)
		.join(' ');

	return <span className={classNames}>{children}</span>;
}
