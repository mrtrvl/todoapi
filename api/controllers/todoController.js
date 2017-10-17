'use strict';

let mongoose = require('mongoose');
let Task = mongoose.model('Task');

exports.allTasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err){
            res.send(err);
        } else {
            res.json(task);
        }
    });
};

exports.createTask = (req, res) => {
    let newTask = new Task(req.body);
    newTask.save((err, task) => {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
};

exports.getTask = (req, res) => {
    res.send('getTask');
};

exports.updateTask = (req, res) => {
    res.send('updateTask');
};

exports.deleteTask = (req, res) => {
    res.send('deleteTask');
};
