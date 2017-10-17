'use strict';

let mongoose = require('mongoose');
let Task = mongoose.model('Task');

exports.allTasks = (req, res) => {
    res.send('allTasks');
};

exports.createTask = (req, res) => {
    res.send('createTask');
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
