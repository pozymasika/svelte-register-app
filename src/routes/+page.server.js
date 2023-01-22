import { getUserById } from '$lib/server/database.js';

export async function load({ cookies }) {
	const userId = cookies.get('userId');
	const user = await getUserById(userId);
	return {
		user
	};
}
