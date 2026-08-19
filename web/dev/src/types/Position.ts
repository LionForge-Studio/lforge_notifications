import { POSITIONS } from '@/constants/positions';

export type Position = (typeof POSITIONS)[keyof typeof POSITIONS];
