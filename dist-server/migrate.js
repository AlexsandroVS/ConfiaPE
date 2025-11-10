import 'dotenv/config';
import { db } from './db.js';
async function migrate() {
    console.log('Starting database migration...');
    try {
        // Step 1: Ensure the table exists
        await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
        console.log('Table "contacts" created or already exists.');
        // Step 2: Add the 'phone' column if it doesn't exist
        try {
            await db.execute('ALTER TABLE contacts ADD COLUMN phone TEXT;');
            console.log('Column "phone" added to "contacts" table.');
        }
        catch (e) {
            // If the error indicates the column already exists, we can ignore it.
            if (e.message.includes('duplicate column name')) {
                console.log('Column "phone" already exists.');
            }
            else {
                // For other errors, re-throw them
                throw e;
            }
        }
        console.log('Migration complete.');
    }
    catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}
migrate();
