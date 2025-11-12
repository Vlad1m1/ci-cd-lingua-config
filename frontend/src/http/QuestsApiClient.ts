import { QuestDTO, QuestFullDTO, CreateQuestRequestDTO } from "@/types/api";

import { BaseApiClient } from "./BaseApiClient";

export class QuestsApiClient extends BaseApiClient {
	async getQuestsByLevel(levelId: number): Promise<QuestDTO[]> {
		return this.get<QuestDTO[]>(`/levels/${levelId}/quests`);
	}

	async getQuestById(questId: number): Promise<QuestFullDTO> {
		return this.get<QuestFullDTO>(`/quests/${questId}`);
	}

	async createQuest(data: CreateQuestRequestDTO): Promise<QuestFullDTO> {
		return this.post<QuestFullDTO, CreateQuestRequestDTO>("/quests", data);
	}

	async deleteQuest(questId: number): Promise<void> {
		return this.delete<void>(`/quests/${questId}`);
	}
}
