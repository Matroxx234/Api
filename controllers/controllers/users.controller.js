const axios = require('axios');

exports.getUserId = async (req, res) => {
  const username = req.params.username;

  try {
    const response = await axios.get(`https://api.roblox.com/users/get-by-username?username=${username}`);

    if (response.data && response.data.Id) {
      res.json({ userId: response.data.Id });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération du userId', details: err.message });
  }
};
