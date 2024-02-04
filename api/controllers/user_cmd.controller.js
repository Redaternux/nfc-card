
const { sendResponse,generateId } = require("../functions/util");
const { execQuery } = require("../config/db");
const mysql = require('mysql2')


exports.createOne = async (req,res) => {
    const data=req.body

    try {
      const query = 'INSERT INTO user_cmd (fullname, phone_number, quantity, email) VALUES (?, ?, ?, ?)';
      const values = [data.fullname, data.phone_number, data.quantity, data.email];
      const search_query = mysql.format(query, values);
      const results = await execQuery(search_query);
      
      return sendResponse(res, 200, 'DATA_SENT', results);
    } catch (error) {
      console.error('Error sending data:', error);
      return sendResponse(res, 500, 'ERROR_SENDING_DATA', null);
    }
  };
