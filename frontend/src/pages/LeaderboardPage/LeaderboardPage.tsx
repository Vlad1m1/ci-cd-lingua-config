import LeaderBoard from "@components/LeaderBoard";

import {RatingUser} from "@/types/RatingUser";

import styles from "./LeaderboardPage.module.scss";

const sampleUsers: RatingUser[] = [
	{ id: 1, username: "lilyonetwo", stars: 146, photoUrl: null },
	{ id: 2, username: "joshelevel", stars: 105, photoUrl: null },
	{ id: 3, username: "herotaylor", stars: 99, photoUrl: null },
	{ id: 4, username: "whitefish664", stars: 96, photoUrl: null },
	{ id: 5, username: "sadpanda176", stars: 88, photoUrl: null },
	{ id: 6, username: "silverduck204", stars: 87, photoUrl: null },
	{ id: 7, username: "beautifulmouse112", stars: 85, photoUrl: null },
	{ id: 2, username: "joshelevel", stars: 105, photoUrl: null },
	{ id: 3, username: "herotaylor", stars: 99, photoUrl: null },
	{ id: 4, username: "whitefish664", stars: 96, photoUrl: null },
	{ id: 5, username: "sadpanda176", stars: 88, photoUrl: null },
	{ id: 6, username: "silverduck204", stars: 87, photoUrl: null },
	{ id: 7, username: "beautifulmouse112", stars: 85, photoUrl: null },
	{ id: 2, username: "joshelevel", stars: 105, photoUrl: null },
	{ id: 3, username: "herotaylor", stars: 99, photoUrl: null },
	{ id: 4, username: "whitefish664", stars: 96, photoUrl: null },
	{ id: 5, username: "sadpanda176", stars: 88, photoUrl: null },
	{ id: 6, username: "silverduck204", stars: 87, photoUrl: null },
	{ id: 7, username: "beautifulmouse112", stars: 85, photoUrl: null },
];

const LeaderboardPage = () => {
	return (
		<div className={styles.container}>
			<LeaderBoard users={sampleUsers} />
		</div>
	);
};

export default LeaderboardPage;
