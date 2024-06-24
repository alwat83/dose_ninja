const { Pool } = require('pg');

const pool = new Pool({
  user: 'doseninja',
  host: 'localhost',
  database: 'doseninja',
  password: 'password',
  port: 5432,
});

class Prescription {
  async getAllPrescriptions(userId) {
    const result = await pool.query({
      text: `SELECT * FROM prescriptions WHERE user_id = $1`,
      values: [userId],
    });
    return result.rows;
  }

  async getPrescription(id) {
    const result = await pool.query({
      text: `SELECT * FROM prescriptions WHERE id = $1`,
      values: [id],
    });
    return result.rows[0];
  }

  async createPrescription(userId, medicationName, dosage, frequency, startDate, endDate, refillReminder) {
    const result = await pool.query({
      text: `INSERT INTO prescriptions (user_id, medication_name, dosage, frequency, start_date, end_date, refill_reminder) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      values: [userId, medicationName, dosage, frequency, startDate, endDate, refillReminder],
    });
    return result.rows[0];
  }

  async updatePrescription(id, medicationName, dosage, frequency, startDate, endDate, refillReminder) {
    const result = await pool.query({
      text: `UPDATE prescriptions SET medication_name = $2, dosage = $3, frequency = $4, start_date = $5, end_date = $6, refill_reminder = $7 WHERE id = $1 RETURNING *`,
      values: [id, medicationName, dosage, frequency, startDate, endDate, refillReminder],
    });
    return result.rows[0];
  }

  async deletePrescription(id) {
    await pool.query({
      text: `DELETE FROM prescriptions WHERE id = $1`,
      values: [id],
    });
  }
}

module.exports = Prescription;
