const express = require('express');
const app = express();
const port=5000
const cors = require("cors")
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())
app.listen(port, () => {
console.log('server is running at port : 5000')
});

//fill the database
const User = require('./User');
const KindergartenUser = require('./User').model('KindergartenUser');

//create an Kindergarten user instance
/*const kindergartenUser = new KindergartenUser({
    email: 'elyasmine@email.com',
    password: 'elyasmine2013',
    phoneNumber: 213553621425,
    location: 'Kouba',
    kindergartenName: 'El Yasmine',
    Education: 'HAHA',
    minAge: 3,
    maxAge: 6,
    classCapacity: [
      { name: 'Class A', capacity: 20 },
      { name: 'Class B', capacity: 25 },
      { name: 'Class c', capacity: 20 },
    ],
    rating: 4,
    photos: ['https://example.com/photo1.jpg', 'https://example.com/photo2.jpg'],
    videos: ['https://example.com/video1.mp4'],
    schedule: {
      openTime: '9:00 AM',
      closeTime: '5:00 PM'
    }
  });*/
  
  
  const kindergartens = [
    {
        email: 'crecheAngels@email.com',
        password: 'Angelscreche16',
        phoneNumber: 213653251425,
        location: 'Birkhadem',
        kindergartenName: 'Angels',
        Education: 'HOHO',
        minAge: 2,
        maxAge: 5,
        classCapacity: [
          { name: 'Class A', capacity: 20 },
          { name: 'Class B', capacity: 20 },
          { name: 'Class c', capacity: 20 },
        ],
        rating: 4.5,
        photos: ['https://example.com/photo1.jpg', 'https://example.com/photo2.jpg'],
        videos: ['https://example.com/video1.mp4'],
        schedule: {
          openTime: '8:00 AM',
          closeTime: '6:00 PM'
        }
      },
      {
        email: 'elyasmine@email.com',
        password: 'elyasmine2013',
        phoneNumber: 213553621425,
        location: 'Kouba',
        kindergartenName: 'El Yasmine',
        Education: 'HAHA',
        minAge: 3,
        maxAge: 6,
        classCapacity: [
          { name: 'Class A', capacity: 20 },
          { name: 'Class B', capacity: 25 },
          { name: 'Class c', capacity: 20 },
        ],
        rating: 4,
        photos: ['https://example.com/photo1.jpg', 'https://example.com/photo2.jpg'],
        videos: ['https://example.com/video1.mp4'],
        schedule: {
          openTime: '9:00 AM',
          closeTime: '5:00 PM'
        }
      }
  ]

  // Save the Kindergarten user instance to the database
  /*kindergartenUser.save()
    .then(() => {
      console.log('Kindergarten user saved to database');
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error(error);
      mongoose.connection.close();
    });*/

    KindergartenUser.insertMany(kindergartens)
  .then((docs) => {
    console.log('Kindergartens successfully added');
  })
  .catch((err) => {
    console.log(err);
  });
