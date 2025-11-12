import { FriendDTO, FriendInviteDTO, FriendshipDTO } from "@/types/api";

import { BaseApiClient } from "./BaseApiClient";

export class FriendsApiClient extends BaseApiClient {
	async getFriends(): Promise<FriendDTO[]> {
		return this.get<FriendDTO[]>("/friends");
	}

	async removeFriend(friendId: number): Promise<void> {
		return this.delete<void>(`/friends/${friendId}`);
	}

	async createInvite(): Promise<FriendInviteDTO> {
		return this.post<FriendInviteDTO>("/friends/invite");
	}

	async acceptInvite(inviteId: number): Promise<FriendshipDTO> {
		return this.post<FriendshipDTO>(`/friends/invite/${inviteId}/accept`);
	}
}
