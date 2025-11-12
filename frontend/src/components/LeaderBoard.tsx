import React, { useMemo } from "react";

import { FC } from "react";

import Avatar from "@components/ui/Avatar";
import Icon from "@components/ui/Icon";
import LeaderBoardList from "@components/LeaderBoardList";
import Podium from "@components/Podium";
import {formatNumber} from "@utils/formatNumber";

import { RatingUser } from "@/types/RatingUser";

import styles from "../styles/components/LeaderBoard.module.scss";
import cls from "../utils/cls";



interface LeaderBoardProps {
	users: RatingUser[];
	className?: string;
}
export const LeaderBoard: React.FC<LeaderBoardProps> = ({ users, className }) => {
	
	const sorted = useMemo(() => {
		return [...users].sort((a, b) => b.stars - a.stars);
	}, [users]);

	const podium = sorted.slice(0, 3);
	const rest = sorted.slice(3);
	
	
	return (
		<div className={cls(styles.leaderboard, className)}>
			<Podium users={podium}/>
			{rest.length > 0 && (
				<LeaderBoardList
					items={rest}
					itemHeight={60}
					containerHeight={400}
					renderItem={(user, index) => (
						<div className={styles.userRow} key={user.id}>
							<span className={styles.rank}>{index + 4}</span>
							<Avatar url={user.photoUrl} initials={user.username.slice(0, 2).toUpperCase()} className={styles.avatar} />
							<span className={styles.username}>{user.username}</span>
							<span className={styles.stars}><Icon name="star-16" size={10}/> {formatNumber(user.stars)}</span>
						</div>
					)}
				/>
			)}
		</div>
	);
};

export default LeaderBoard;

