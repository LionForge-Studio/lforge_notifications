import { useState } from 'preact/hooks';

export function useQueue<T>() {
	const [items, setItems] = useState<T[]>([]);

	const enqueue = (item: T) => {
		setItems((prev) => [...prev, item]);
	};

	const dequeue = () => {
		const item = items[0];
		setItems((prev) => prev.slice(1));
		return item;
	};

	const peek = () => {
		return items[0];
	};

	const isEmpty = () => {
		return items.length === 0;
	};

	const length = () => {
		return items.length;
	};

	const clear = () => {
		setItems([]);
	};

	const toString = () => {
		return items.join(',');
	};

	return { items, enqueue, dequeue, peek, isEmpty, length, clear, setItems, toString };
}
