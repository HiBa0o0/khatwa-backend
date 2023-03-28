const mongoose = require('mongoose');
const { Schema } = mongoose;
const educationTypes = ['HAHA', 'HIHI', 'HOHO', 'HEHE'];

// Base user schema
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  location: { type: String, required: true },
}, { timestamps: true });

// Kindergarten user schema
const kindergartenUserSchema = new Schema({
  kindergartenName: {type: String,required: true},
  Education: { type: String, enum: educationTypes, required: true},
  minAge: { type: Number, required: true },
  maxAge: { type: Number, required: true },
  classCapacity: [
    {
      name: { type: String, required: true },
      capacity: { type: Number, required: true }
    }
  ],
  rating: { type: Number, min: 0, max: 5},
  photos: [{ type: String }],
  videos: [{ type: String }],
  schedule: {
    openTime: {
      type: String,
      required: true
    },
    closeTime: {
      type: String,
      required: true
    }
  }
});

// Parent user schema
const parentUserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: { type: String,required: true},
  photo: { type: String },
  children: [{ type: Schema.Types.ObjectId, ref: 'Child' }]
});

// Child schema
const childSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  photo: String,
});

const User = mongoose.model('User', userSchema);
const KindergartenUser = User.discriminator('KindergartenUser', kindergartenUserSchema);
const ParentUser = User.discriminator('ParentUser', parentUserSchema);
const Child = mongoose.model('Child', childSchema);
module.exports = { User};

module.exports = mongoose.connection.models.KindergartenUser;
module.exports = mongoose.connection.models.ParentUser;
module.exports = mongoose.connection.models.Child;


//User.discriminator('KindergartenUser', kindergartenUserSchema);

