import type { UserDTO } from './user.dto';

/**
 * @openapi
 * components:
 *   schemas:
 *     AuthResponseDTO:
 *       type: object
 *       required:
 *         - accessToken
 *         - user
 *       properties:
 *         accessToken:
 *           type: string
 *           description: JWT access token for authentication
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *         user:
 *           $ref: '#/components/schemas/UserDTO'
 *       description: Response after successful authentication
 */
export class AuthResponseDTO {
	accessToken: string;
	user: UserDTO;

	constructor(accessToken: string, user: UserDTO) {
		this.accessToken = accessToken;
		this.user = user;
	}
}
