import { useEffect, useRef, useState } from "react";

import styles from "@styles/components/TopBar.module.scss";

export interface TopBarItem {
	id: string;
	label: string;
}

interface TopBarProps {
	activeItem: string;
	onItemChange: (itemId: string) => void;
	items: TopBarItem[];
}

const TopBar = ({ activeItem, onItemChange, items }: TopBarProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
	const [underlineStyle, setUnderlineStyle] = useState<{ width: number; left: number }>({
		width: 0,
		left: 0,
	});

	const setRefForItem = (itemId: string) => (ref: HTMLButtonElement | null) => {
		if (ref) {
			itemRefs.current.set(itemId, ref);
		} else {
			itemRefs.current.delete(itemId);
		}
	};

	const updateUnderlinePosition = (itemId: string) => {
		const itemElement = itemRefs.current.get(itemId);
		const containerElement = containerRef.current;

		if (itemElement && containerElement) {
			const containerRect = containerElement.getBoundingClientRect();
			const itemRect = itemElement.getBoundingClientRect();

			setUnderlineStyle({
				width: itemRect.width,
				left: itemRect.left - containerRect.left + containerElement.scrollLeft,
			});
		}
	};

	const scrollToCenter = (itemId: string) => {
		const itemElement = itemRefs.current.get(itemId);
		const containerElement = containerRef.current;

		if (itemElement && containerElement) {
			const itemRect = itemElement.getBoundingClientRect();
			const containerRect = containerElement.getBoundingClientRect();

			const itemCenter = itemRect.left - containerRect.left + itemRect.width / 2;
			const containerCenter = containerRect.width / 2;
			const scrollOffset = itemCenter - containerCenter;

			containerElement.scrollTo({
				left: containerElement.scrollLeft + scrollOffset,
				behavior: "smooth",
			});
		}
	};

	const handleItemClick = (itemId: string) => {
		if (activeItem === itemId) return;

		onItemChange(itemId);
		updateUnderlinePosition(itemId);
		scrollToCenter(itemId);
	};

	useEffect(() => {
		updateUnderlinePosition(activeItem);
		
		const handleResize = () => {
			updateUnderlinePosition(activeItem);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [activeItem]);
	
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			updateUnderlinePosition(activeItem);
		}, 50);

		return () => clearTimeout(timeoutId);
	}, [items, activeItem]);

	return (
		<div className={styles.topBarContainer}>
			<div className={styles.topBar} ref={containerRef}>
				<div className={styles.itemsWrapper}>
					{items.map((item) => (
						<button
							key={item.id}
							ref={setRefForItem(item.id)}
							className={`${styles.topBarItem} ${
								activeItem === item.id ? styles.active : ""
							}`}
							onClick={() => handleItemClick(item.id)}
						>
							<span className={styles.label}>{item.label}</span>
						</button>
					))}
					<div
						className={styles.underline}
						style={{
							width: `${underlineStyle.width}px`,
							transform: `translateX(${underlineStyle.left}px)`,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
