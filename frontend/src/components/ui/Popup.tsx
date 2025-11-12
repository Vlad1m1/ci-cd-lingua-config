import { FC, ReactNode } from "react";

import styles from "@styles/ui/Popup.module.scss";

import Button from "./Button";

interface PopupProps {
	title: string;
	children: ReactNode;
	buttonText: string;
	onButtonClick?: () => void;
	buttonDisabled?: boolean;
}

const Popup: FC<PopupProps> = ({
	title,
	children,
	buttonText,
	onButtonClick,
	buttonDisabled = false,
}) => {
	return (
		<div className={styles.popup}>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
			</div>
			<div className={styles.content}>{children}</div>
			<div className={styles.footer}>
				<Button
					onClick={onButtonClick}
					disabled={buttonDisabled}
					className={styles.footerButton}
					containerClasses={styles.footerButtonContainer}
					size="large"
				>
					{buttonText}
				</Button>
			</div>
		</div>
	);
};

export default Popup;
