import { execute } from '../db/connection';
import generatePDF from '../utils/pdfGenerator';

export async function searchLandRecord(req, res) {
  const query = req.query.query;

  if (!query) return res.status(400).json({ error: 'Query is required' });

  try {
    const [rows] = await execute(
      `SELECT * FROM land_records WHERE plot_number LIKE ? OR owner_name LIKE ? OR id = ?`,
      [`%${query}%`, `%${query}%`, query]
    );

    if (rows.length === 0) return res.status(404).json({ message: 'No records found' });

    generatePDF(rows[0], res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}
