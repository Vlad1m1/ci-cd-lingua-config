import React, { useRef, useState, useCallback } from "react";

interface VirtualListProps<T> {
	items: T[];
	itemHeight: number;
	containerHeight: number;
	renderItem: (item: T, index: number) => React.ReactNode;
	overscan?: number;
	className?: string;
}

export function VirtualList<T>({
	items,
	itemHeight,
	containerHeight,
	renderItem,
	overscan = 3,
	className,
}: VirtualListProps<T>) {
	const [scrollTop, setScrollTop] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const totalHeight = items.length * itemHeight;

	const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
	const endIndex = Math.min(
		items.length - 1,
		Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan,
	);

	const visibleItems = items.slice(startIndex, endIndex + 1);

	const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
		setScrollTop(e.currentTarget.scrollTop);
	}, []);

	return (
		<div
			ref={containerRef}
			onScroll={handleScroll}
			className={className}
			style={{
				height: containerHeight,
				overflow: "auto",
				position: "relative",
			}}
		>
			<div style={{ height: totalHeight, position: "relative" }}>
				{visibleItems.map((item, i) => {
					const index = startIndex + i;
					return (
						<div
							key={index}
							style={{
								position: "absolute",
								top: index * itemHeight,
								height: itemHeight,
								width: "100%",
							}}
						>
							{renderItem(item, index)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VirtualList;
