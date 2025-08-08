const axios = require('axios');

exports.getProduits = async (req, res) => {
  const userId = req.params.userId;

  try {
    const gamepassesRes = await axios.get(`https://games.roblox.com/v1/users/${userId}/game-passes`);
    const catalogRes = await axios.get(`https://catalog.roblox.com/v1/search/items`, {
      params: {
        Category: 3,
        CreatorId: userId,
        Limit: 30,
        SortType: 3
      }
    });

    res.json({
      gamepasses: gamepassesRes.data.data,
      catalogItems: catalogRes.data.data
    });

  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données Roblox', details: err.message });
  }
};
