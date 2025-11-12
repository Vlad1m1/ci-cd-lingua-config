import {
	ModuleDTO,
	CreateModuleRequestDTO,
	UpdateModuleRequestDTO,
} from "@/types/api";

import { BaseApiClient } from "./BaseApiClient";

export class ModulesApiClient extends BaseApiClient {
	async getModulesByLanguage(languageId: number): Promise<ModuleDTO[]> {
		return this.get<ModuleDTO[]>(`/languages/${languageId}/modules`);
	}

	async getModuleById(moduleId: number): Promise<ModuleDTO> {
		return this.get<ModuleDTO>(`/modules/${moduleId}`);
	}

	async createModule(data: CreateModuleRequestDTO): Promise<ModuleDTO> {
		return this.post<ModuleDTO, CreateModuleRequestDTO>("/modules", data);
	}

	async updateModule(moduleId: number, data: UpdateModuleRequestDTO): Promise<ModuleDTO> {
		return this.put<ModuleDTO, UpdateModuleRequestDTO>(`/modules/${moduleId}`, data);
	}

	async deleteModule(moduleId: number): Promise<void> {
		return this.delete<void>(`/modules/${moduleId}`);
	}
}
