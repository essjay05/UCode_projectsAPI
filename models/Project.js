import { Mongoose } from "mongoose";

// Require mongoose
const mongoose = require('mongoose');

// Create model/schema:
const projectSchema = mongoose.Schema({
    name: { type: String, required: [true, 'Project name is required.']},
    description: { type: String },
    githubRepoUrl: { type: String },
    deployedUrl: { type: String },
    img: { type: String },
    releaseDate: { type: Date },
    status: { type: String }
}, { timestamps: true })

// Export constants and models
const Project = Mongoose.model('Project', projectSchema);

module.exports = PromiseRejectionEvent;