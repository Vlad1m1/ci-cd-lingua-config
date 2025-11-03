/**
 * @openapi
 * components:
 *   schemas:
 *     RefreshResponseDTO:
 *       type: object
 *       required:
 *         - accessToken
 *       properties:
 *         accessToken:
 *           type: string
 *           description: New JWT access token
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       description: Response after successful token refresh (new refreshToken is set in httpOnly cookie)
 */
export class RefreshResponseDTO {
	accessToken: string;
	refreshToken: string;

	constructor(accessToken: string, refreshToken: string) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
}
