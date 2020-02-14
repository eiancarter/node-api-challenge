const express = require("express");
const Actions = require("./actionModel");
const router = express.Router();

router.get("/", (req, res) => {
    Actions.get()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "error retrieving actions" })
        })
});

router.get("/:id", (req, res) => {
    Actions.get(req.params.id)
        .then(action => {
            if(action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({ message: "action not found" })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "error retrieving that action"
            })
        })
});

router.post('/:id', (req, res) => {
    const newAction = req.body;
    actions.insert(newAction)
      .then(() => res.status(201))
      .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
    Actions.remove(req.params.id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: "the action is gone" })
            } else {
                res.status(404).json({ message: "cannot delete action" })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error deleting" })
        })
});

router.put("/:id", (req, res) => {
    const changes = req.body;
    Actions.update(req.params.id, changes)
        .then(action => {
            if(action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({ message: "the action cannot be changed" })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "error updating" })
        });
});


module.exports = router;