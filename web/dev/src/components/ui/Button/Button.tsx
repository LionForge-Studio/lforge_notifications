import type { ComponentChildren, HTMLAttributes } from 'preact';
import STYLES from './Button.module.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'action' | 'icon' | 'pill';
	size?: 'sm' | 'md' | 'lg';
	isActive?: boolean;
	icon?: ComponentChildren;
	children?: ComponentChildren;
	fullWidth?: boolean;
}

export function Button({
	variant = 'secondary',
	size = 'md',
	isActive = false,
	icon,
	children,
	fullWidth = false,
	className = '',
	...props
}: ButtonProps) {
	const classNames = [
		STYLES.button,
		STYLES[variant],
		STYLES[size],
		isActive ? STYLES.active : '',
		fullWidth ? STYLES.fullWidth : '',
		className,
	]
		.filter((c): c is string => typeof c === 'string' && c.length > 0)
		.join(' ');

	return (
		<button className={classNames} {...props}>
			{icon && <span className={STYLES.iconWrapper}>{icon}</span>}
			{children && <span className={STYLES.label}>{children}</span>}
		</button>
	);
}
