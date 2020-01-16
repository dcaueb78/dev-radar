const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post("/devs", async (req, res) => {
  const { github_username, techs } = req.body;

  const response = await axios.get(`https://api.github.com/users/${github_username}`)

  const { name = login, avatar_url, bio } = (response.data);

  const techsArray = techs.split(',').map(tech => tech.trim());

  return res.json({ ok: true });
});

module.exports = routes;