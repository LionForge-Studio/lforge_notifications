import type { TargetedEvent } from 'preact';
import { useCallback } from 'preact/hooks';
import { Volume2, Volume1, VolumeX, RotateCcw } from 'lucide-preact';
import { Button, Badge } from '@/components/ui';
import STYLES from './VolumeControl.module.css';

let previewTimer: ReturnType<typeof setTimeout> | null = null;

interface VolumeControlProps {
	volume: number;
	isMuted: boolean;
	onVolumeChange: (vol: number) => void;
	onToggleMute: () => void;
	onReset: () => void;
	/** Sound file to preview when adjusting slider */
	previewSound?: string;
}

export function VolumeControl({
	volume,
	isMuted,
	onVolumeChange,
	onToggleMute,
	onReset,
	previewSound,
}: VolumeControlProps) {
	const playPreview = useCallback(
		(vol: number) => {
			if (vol <= 0 || !previewSound) return;
			if (previewTimer) clearTimeout(previewTimer);
			previewTimer = setTimeout(() => {
				const audio = new Audio(previewSound);
				audio.volume = vol;
				void audio.play().catch(() => {});
			}, 200);
		},
		[previewSound],
	);

	const handleInput = (e: TargetedEvent<HTMLInputElement, Event>) => {
		const newVol = Number(e.currentTarget.value) / 100;
		onVolumeChange(newVol);
		playPreview(newVol);
	};

	const pct = Math.round(volume * 100);
	const displayPct = isMuted ? 0 : pct;

	const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

	return (
		<div className={STYLES.root}>
			<div className={STYLES.sliderRow}>
				<VolumeIcon size={16} className={STYLES.icon} />
				<input
					type="range"
					min="0"
					max="100"
					step="1"
					value={displayPct}
					onInput={handleInput}
					className={STYLES.slider}
					style={{
						background: `linear-gradient(to right, #f08a15 0%, #f08a15 ${displayPct}%, rgba(255,255,255,0.08) ${displayPct}%, rgba(255,255,255,0.08) 100%)`,
					}}
					aria-label="Notification Volume"
				/>
				<Badge variant={isMuted ? 'danger' : 'accent'}>
					{isMuted ? 'MUTED' : `${pct}%`}
				</Badge>
			</div>

			<div className={STYLES.actions}>
				<Button
					variant="action"
					size="sm"
					isActive={isMuted}
					icon={isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
					onClick={onToggleMute}
					title={isMuted ? 'Unmute' : 'Mute'}
				>
					{isMuted ? 'Unmute' : 'Mute'}
				</Button>

				<Button
					variant="action"
					size="sm"
					icon={<RotateCcw size={14} />}
					onClick={onReset}
					title="Reset to default (10%)"
				>
					Reset
				</Button>
			</div>
		</div>
	);
}
