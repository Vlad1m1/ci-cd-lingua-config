import { MediaDTO } from "@/types/api";

import { BaseApiClient } from "./BaseApiClient";

export class MediaApiClient extends BaseApiClient {
	async getMediaMetadata(mediaId: number): Promise<MediaDTO> {
		return this.get<MediaDTO>(`/media/${mediaId}`);
	}

	getMediaUrl(mediaId: number): string {
		return `${this.axiosInstance.defaults.baseURL}/media/${mediaId}`;
	}
}
