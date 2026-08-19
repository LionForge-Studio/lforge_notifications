import type { Position } from '@/types/Position';

export function Settings({
	position,
}: {
	position: Position;
	setPosition: (position: Position) => void;
}) {
	return <div>position: {position}</div>;
}
