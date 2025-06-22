const mongoose = require('mongoose');

const memorySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    family: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Family',
    },
    type: {
      type: String,
      required: true, // e.g., 'photo', 'video', 'note'
    },
    content: {
      type: String, // URL for files, text for notes
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory; 