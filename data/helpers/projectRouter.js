const express = require("express");
const Projects = require("./projectModel");
const router = express.Router();
const Actions = require("./actionModel");

//this one needs middleware to confirm project_id exists

//Posting a new project
router.post("/", (req, res) => {
    Projects.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error posting project" })
        })
});

//adding an action to a project
router.post("/:id/actions", (req, res) => {
    const actionInfo = {...req.body, project_id: req.params.id };
    Projects.insert(actionInfo)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "error adding action to project"
            });
        });
});

router.get("/", (req, res) => {
    console.log("headers", req.headers);
    Projects.get(req.query)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error retrieving projects" })
        });
});

router.get("/:id", (req, res) => {
    res.status(200).json(req.project);
});

router.get("/:id/actions", (req, res) => {
    Projects.getProjectActions(req.params.id)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "error getting actions form projects"
            })
        })
})

router.delete("/:id", (req, res) => {
    Projects.remove(req.params.id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: "the project has been deleted" });
            } else {
                res.status(404).json({ message: "project cannot be found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error removing project" })
        });
});

router.put("/:id", (req, res) => {
    const changes = req.body;
    Projects.update(req.params.id, changes)
        .then(count => {
            if(count > 0) {
                res.status(200).json(count);
            } else {
                res.status(404).json({ message: "the project cannot be foudn" })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error updating project" })
        });
});


module.exports = router;