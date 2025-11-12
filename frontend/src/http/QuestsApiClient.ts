import { QuestDTO, CreateQuestRequestDTO } from "@/types/api";

import { BaseApiClient } from "./BaseApiClient";

export class QuestsApiClient extends BaseApiClient {
	async getQuestsByLevel(levelId: number): Promise<QuestDTO[]> {
		return this.get<QuestDTO[]>(`/levels/${levelId}/quests`);
	}

	async getQuestById(questId: number): Promise<QuestDTO> {
		return this.get<QuestDTO>(`/quests/${questId}`);
	}

	async createQuest(data: CreateQuestRequestDTO): Promise<QuestDTO> {
		return this.post<QuestDTO, CreateQuestRequestDTO>("/quests", data);
	}

	async deleteQuest(questId: number): Promise<void> {
		return this.delete<void>(`/quests/${questId}`);
	}
}
