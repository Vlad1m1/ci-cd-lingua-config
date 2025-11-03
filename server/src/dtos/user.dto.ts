import type { User } from '../models/entities/User';
import type { UserRole } from '../models/types/UserRole';

/**
 * @openapi
 * components:
 *   schemas:
 *     UserDTO:
 *       type: object
 *       required:
 *         - id
 *         - externalId
 *         - username
 *         - stars
 *         - exp
 *         - role
 *         - createdAt
 *       properties:
 *         id:
 *           type: integer
 *           description: Internal user ID
 *           example: 1
 *         externalId:
 *           type: integer
 *           description: External user ID from Telegram
 *           example: 123456789
 *         username:
 *           type: string
 *           description: Username
 *           example: john_doe
 *         firstName:
 *           type: string
 *           description: User's first name
 *           example: John
 *         lastName:
 *           type: string
 *           description: User's last name
 *           example: Doe
 *         photoUrl:
 *           type: string
 *           description: URL to user's photo
 *           example: https://example.com/photo.jpg
 *         stars:
 *           type: integer
 *           description: Number of stars earned
 *           example: 100
 *         exp:
 *           type: integer
 *           description: Experience points
 *           example: 500
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           description: User role
 *           example: user
 *         languageId:
 *           type: integer
 *           description: Selected language ID
 *           example: 1
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Account creation date
 *           example: 2024-01-01T00:00:00.000Z
 *         lastLoginAt:
 *           type: string
 *           format: date-time
 *           description: Last login date
 *           example: 2024-01-15T10:30:00.000Z
 */
export class UserDTO {
	id: number;
	externalId: number;
	username: string;
	firstName?: string;
	lastName?: string;
	photoUrl?: string;
	stars: number;
	exp: number;
	role: UserRole;
	languageId?: number;
	createdAt: Date;
	lastLoginAt?: Date;

	constructor(user: User) {
		this.id = user.id;
		this.externalId = user.maxUserId!;
		this.username = user.username;
		this.firstName = user.firstName || undefined;
		this.lastName = user.lastName || undefined;
		this.photoUrl = user.photoUrl || undefined;
		this.stars = user.stars;
		this.exp = user.exp;
		this.role = user.role;
		this.languageId = user.languageId || undefined;
		this.createdAt = user.createdAt;
		this.lastLoginAt = user.lastLoginAt || undefined;
	}

	static fromUser(user: User): UserDTO {
		return new UserDTO(user);
	}
}
