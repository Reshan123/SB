require('dotenv').config();

const adminCredentials = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

  
const login = (req, res) => {
    const { email, password } = req.body;
  
    if (email === adminCredentials.email && password === adminCredentials.password) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  };
  
  module.exports = {
    login
  };
  