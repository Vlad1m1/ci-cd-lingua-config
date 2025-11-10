import LeaderBoard from "@components/LeaderBoard";

import {RatingUser} from "@/types/RatingUser";

import styles from "./LeaderboardPage.module.scss";

const sampleUsers: RatingUser[] = [
	{ id: 1, username: "lilyonetwo", stars: 146, userPhoto: undefined },
	{ id: 2, username: "joshelevel", stars: 105, userPhoto: undefined },
	{ id: 3, username: "herotaylor", stars: 99, userPhoto: undefined },
	{ id: 4, username: "whitefish664", stars: 96, userPhoto: undefined },
	{ id: 5, username: "sadpanda176", stars: 88, userPhoto: undefined },
	{ id: 6, username: "silverduck204", stars: 87, userPhoto: undefined },
	{ id: 7, username: "beautifulmouse112", stars: 85, userPhoto: undefined },
	{ id: 2, username: "joshelevel", stars: 105, userPhoto: undefined },
	{ id: 3, username: "herotaylor", stars: 99, userPhoto: undefined },
	{ id: 4, username: "whitefish664", stars: 96, userPhoto: undefined },
	{ id: 5, username: "sadpanda176", stars: 88, userPhoto: undefined },
	{ id: 6, username: "silverduck204", stars: 87, userPhoto: undefined },
	{ id: 7, username: "beautifulmouse112", stars: 85, userPhoto: undefined },
	{ id: 2, username: "joshelevel", stars: 105, userPhoto: undefined },
	{ id: 3, username: "herotaylor", stars: 99, userPhoto: undefined },
	{ id: 4, username: "whitefish664", stars: 96, userPhoto: undefined },
	{ id: 5, username: "sadpanda176", stars: 88, userPhoto: undefined },
	{ id: 6, username: "silverduck204", stars: 87, userPhoto: undefined },
	{ id: 7, username: "beautifulmouse112", stars: 85, userPhoto: undefined },
];

const LeaderboardPage = () => {
	return (
		<div className={styles.container}>
			<LeaderBoard users={sampleUsers} />
		</div>
	);
};

export default LeaderboardPage;
