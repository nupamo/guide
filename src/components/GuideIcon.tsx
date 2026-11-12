import { Bot, Clapperboard, Frame, LayoutGrid, Music, Wrench } from 'lucide-react';
import type { IconName } from '../data/guides';

const icons = { clapperboard: Clapperboard, gallery: LayoutGrid, frame: Frame, music: Music, wrench: Wrench, bot: Bot } satisfies Record<IconName, unknown>;

export default function GuideIcon({ name, size = 36, className }: { name: IconName; size?: number; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} size={size} aria-hidden="true" />;
}
