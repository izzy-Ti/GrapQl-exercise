import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, enum: ['Not started', 'in progress', 'completed']},
    clientid: {type: mongoose.Schema.ObjectId,
        ref: 'Client'
    }
})

export default mongoose.model('Project', ProjectSchema)