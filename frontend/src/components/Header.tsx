import { FC } from "react";

import { useLanguages } from "@/hooks/useLanguages";
import { useUser } from "@/hooks/useUser";
import { formatNumber } from "@/utils/formatNumber";

import styles from "../styles/components/Header.module.scss";

import Icon from "./ui/Icon";

const Header: FC = () => {
	const { user } = useUser();
	const { languages } = useLanguages();

	const selectedLanguage = languages.find((lang) => lang.id === user?.languageId);

	if (!user) {
		return null;
	}

	return (
		<header className={styles.container}>
			<div className={styles.language}>
				{selectedLanguage?.icon && (
					<span className={styles.languageIcon}>{selectedLanguage.icon}</span>
				)}
			</div>

			<div className={styles.stats}>
				<div className={styles.stat}>
					<Icon name="star-16" size={12} className={styles.statIcon} />
					<span className={styles.statValue}>{formatNumber(user.stars)}</span>
				</div>

				<div className={styles.stat}>
					<span className={styles.statLabel}>EXP</span>
					<span className={styles.statValue}>{formatNumber(user.exp)}</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
