import type { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';
import { ApiError } from '../error/apiError';

/**
 * @openapi
 * tags:
 *   - name: Authentication
 *     description: User authentication and session management
 */
class AuthController {
	/**
	 * Authenticates user via Telegram WebApp initData
	 * @param req - Request with initData in body
	 * @param res - Response with access token and user data
	 * @param next - Next middleware function
	 * @example
	 * Request body:
	 * {
	 *   "initData": "query_id=AAHdF6IQAAAAAN0XohDhrOrc&user=%7B%22id%22%3A279058397..."
	 * }
	 * 
	 * Response:
	 * {
	 *   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
	 *   "user": {
	 *     "id": 1,
	 *     "externalId": 279058397,
	 *     "username": "john_doe",
	 *     "firstName": "John",
	 *     "lastName": "Doe",
	 *     "stars": 0,
	 *     "exp": 0,
	 *     "role": "user",
	 *     "createdAt": "2024-01-01T00:00:00.000Z"
	 *   }
	 * }
	 */
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const { initData } = req.body;

			if (!initData) {
				throw ApiError.errorByType('BAD_REQUEST');
			}

			const authResponse = await authService.authenticate(initData);

			return res.json({
				accessToken: authResponse.accessToken,
				user: authResponse.user,
			});
		} catch (error) {
			next(error);
		}
	}

	/**
	 * Gets current authenticated user profile
	 * @param req - Request with user data from auth middleware
	 * @param res - Response with user profile
	 * @param next - Next middleware function
	 * @example
	 * Response:
	 * {
	 *   "id": 1,
	 *   "externalId": 279058397,
	 *   "username": "john_doe",
	 *   "firstName": "John",
	 *   "lastName": "Doe",
	 *   "photoUrl": "https://example.com/photo.jpg",
	 *   "stars": 100,
	 *   "exp": 500,
	 *   "role": "user",
	 *   "languageId": 1,
	 *   "createdAt": "2024-01-01T00:00:00.000Z",
	 *   "lastLoginAt": "2024-01-15T10:30:00.000Z"
	 * }
	 */
	async getMe(req: Request, res: Response, next: NextFunction) {
		try {
			if (!req.user) {
				throw ApiError.errorByType('UNAUTHORIZED');
			}

			const userProfile = await authService.getProfile(req.user.userId);
			return res.json(userProfile);
		} catch (error) {
			next(error);
		}
	}
}

export default new AuthController();
