import { useSettings } from '@/context/SettingsContext/useSettings';
import { PositionSelector } from '@/components/PositionSelector/PositionSelector';
import { VolumeControl } from '@/components/VolumeControl/VolumeControl';
import { NotificationTester } from '@/components/NotificationTester/NotificationTester';
import { Button, Badge } from '@/components/ui';
import { Sliders, LayoutGrid, Volume2, Sparkles, X } from 'lucide-preact';
import STYLE from './index.module.css';

interface SettingsProps {
	onClose?: () => void;
}

export function Settings({ onClose }: SettingsProps) {
	const {
		position,
		setPosition,
		volume,
		setVolume,
		isMuted,
		toggleMute,
		resetVolume,
		sendNotification,
	} = useSettings();

	return (
		<div className={STYLE.overlay}>
			<div className={STYLE.container}>
				{/* Header */}
				<header className={STYLE.header}>
					<div className={STYLE.headerLeft}>
						<div className={STYLE.headerIconWrapper}>
							<Sliders size={20} />
						</div>
						<div className={STYLE.headerTextGroup}>
							<h1 className={STYLE.headerTitle}>NOTIFICATIONS</h1>
							<p className={STYLE.headerSubtitle}>Position, volume &amp; alerts</p>
						</div>
					</div>
					{onClose && (
						<Button variant="icon" onClick={onClose} aria-label="Close Settings">
							<X size={18} />
						</Button>
					)}
				</header>

				{/* Content */}
				<div className={STYLE.contentGrid}>
					{/* Left: Position */}
					<section className={STYLE.section}>
						<div className={STYLE.sectionHeader}>
							<LayoutGrid size={16} className={STYLE.sectionIcon} />
							<span className={STYLE.sectionTitle}>Screen Position</span>
							<Badge>{position}</Badge>
						</div>
						<PositionSelector value={position} onChange={setPosition} />
					</section>

					{/* Right: Volume + Tester */}
					<div className={STYLE.rightColumn}>
						<section className={STYLE.section}>
							<div className={STYLE.sectionHeader}>
								<Volume2 size={16} className={STYLE.sectionIcon} />
								<span className={STYLE.sectionTitle}>Audio &amp; Volume</span>
							</div>
							<VolumeControl
								volume={volume}
								isMuted={isMuted}
								onVolumeChange={setVolume}
								onToggleMute={toggleMute}
								onReset={resetVolume}
								previewSound="/sounds/info.mp3"
							/>
						</section>

						<section className={STYLE.section}>
							<div className={STYLE.sectionHeader}>
								<Sparkles size={16} className={STYLE.sectionIcon} />
								<span className={STYLE.sectionTitle}>Test Notifications</span>
							</div>
							{sendNotification && <NotificationTester onSend={sendNotification} />}
						</section>
					</div>
				</div>

				{/* Footer */}
				<footer className={STYLE.footer}>
					<div className={STYLE.footerInfo}>
						<span className={STYLE.footerDot} />
						<span>Settings saved automatically</span>
					</div>
					{onClose && (
						<Button variant="secondary" size="sm" onClick={onClose}>
							Done
						</Button>
					)}
				</footer>
			</div>
		</div>
	);
}
