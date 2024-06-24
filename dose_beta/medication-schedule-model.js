const { Pool } = require('pg');

const pool = new Pool({
  user: 'doseninja',
  host: 'localhost',
  database: 'doseninja',
  password: 'password',
  port: 5432,
});

class MedicationSchedule {
  async getAllMedicationSchedules(userId) {
    const result = await pool.query({
      text: `SELECT * FROM medication_schedule WHERE user_id = $1`,
      values: [userId],
    });
    return result.rows;
  }

  async getMedicationSchedule(id) {
    const result = await pool.query({
      text: `SELECT * FROM medication_schedule WHERE id = $1`,
      values: [id],
    });
    return result.rows[0];
  }

  async createMedicationSchedule(prescriptionId, doseDate, doseTime, taken) {
    const result = await pool.query({
      text: `INSERT INTO medication_schedule (prescription_id, dose_date, dose_time, taken) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [prescriptionId, doseDate, doseTime, taken],
    });
    return result.rows[0];
  }

  async updateMedicationSchedule(id, doseDate, doseTime, taken) {
    const result = await pool.query({
      text: `UPDATE medication_schedule SET dose_date = $2, dose_time = $3, taken = $4 WHERE id = $1 RETURNING *`,
      values: [id, doseDate, doseTime, taken],
    });
    return result.rows[0];
  }

  async deleteMedicationSchedule(id) {
    await pool.query({
      text: `DELETE FROM medication_schedule WHERE id = $1`,
      values: [id],
    });
  }
}

module.exports = MedicationSchedule;
