import { getDatabase } from '../src/lib/server/database.js';

async function run() {
	const db = await getDatabase();
	await db.migrate();
}

run()
	.then(() => {
		console.log('✅ Run migration successfully');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
