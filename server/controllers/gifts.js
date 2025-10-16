import { pool } from '../db/db.js'

export const getGifts = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC');
        response.status(200).json(results.rows);
    }
    catch (error) {
        response.status(409).json({error: error.message});
    }
}