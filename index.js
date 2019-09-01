const express = require("express");

const server = express();

server.use(express.json());

const projects = [];
let CountRequest = 0;

// Middleware que verifica se existe id para o projeto.
function VerifyExitsProjectID(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: "The project id not exits" });
  }
  return next();
}

function logRequest(req, res, next) {
  CountRequest++;

  console.log(`Quantidade de requisições: ${CountRequest}`);

  return next();
}

server.use(logRequest);

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

server.post("/projects/:id/tasks", VerifyExitsProjectID, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.put("/projects/:id", VerifyExitsProjectID, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

server.get("/projects/", (req, res) => {
  return res.json(projects);
});

server.delete("/projects/:id", VerifyExitsProjectID, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.listen(8080);
