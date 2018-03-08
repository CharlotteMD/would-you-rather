const mongoose   = require('mongoose');
const { db, env } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

const User = require('../models/user');
const Question = require('../models/question');


Question.collection.drop();
User.collection.drop();

let globalUserData = null;

const userData = [{
  name: 'Meghan',
  email: 'megz@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Ameelah',
  email: 'meela@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Callie',
  email: 'callie@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Kate',
  email: 'kate@btinternet.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Sunshine',
  email: 'liu.sun@yahoo.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Shawn',
  email: 'shawn@yahoo.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Kelly',
  email: 'kelz@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Lucy',
  email: 'lucy@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Hussein',
  email: 'h.akhtar@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
},{
  name: 'Alfred',
  email: 'alf@ga.com',
  password: 'password',
  passwordConfirmation: 'password'
}];

User
  .create(userData)
  .then(users => {
    globalUserData = users;
    console.log(`${users.length} users created! 😎`);
    return Question.create([
      {
        ratherA: 'wear wet socks for the rest of your life',
        ratherB: 'only wash your hair once a year',
        addedBy: globalUserData[6],
        answers: [{
          createdBy: globalUserData[9],
          choice: 'A',
          comment: 'I could never be without my beautiful shining locks!'
        },{
          createdBy: globalUserData[3],
          choice: 'A'
        },{
          createdBy: globalUserData[2],
          choice: 'B',
          comment: 'Your feet would shrivel up!'
        },{
          createdBy: globalUserData[1],
          choice: 'B'
        },{
          createdBy: globalUserData[8],
          choice: 'B'
        }]
      },{
        ratherA: 'never have access to the internet ever again',
        ratherB: 'never be able to fly anywhere ever again',
        addedBy: globalUserData[2],
        answers: [{
          createdBy: globalUserData[0],
          choice: 'A',
          comment: 'I have such a travel bug!'
        },{
          createdBy: globalUserData[1],
          choice: 'A'
        },{
          createdBy: globalUserData[9],
          choice: 'B',
          comment: 'Ahhh internet! Get mad enough when no wifi!'
        },{
          createdBy: globalUserData[1],
          choice: 'B'
        },{
          createdBy: globalUserData[7],
          choice: 'B'
        }]
      },{
        ratherA: 'only be able to whisper',
        ratherB: 'only be able to shout',
        addedBy: globalUserData[3],
        answers: [{
          createdBy: globalUserData[0],
          choice: 'A',
          comment: 'Haha im so loud!!'
        },{
          createdBy: globalUserData[4],
          choice: 'A'
        },{
          createdBy: globalUserData[5],
          choice: 'B',
          comment: 'I hate shouting! :('
        },{
          createdBy: globalUserData[9],
          choice: 'B'
        },{
          createdBy: globalUserData[2],
          choice: 'B'
        }]
      },{
        ratherA: 'be invisible',
        ratherB: 'be able to fly',
        addedBy: globalUserData[1],
        answers: [{
          createdBy: globalUserData[0],
          choice: 'A',
          comment: 'Id be so sneaky!'
        },{
          createdBy: globalUserData[0],
          choice: 'A'
        },{
          createdBy: globalUserData[9],
          choice: 'B',
          comment: 'Id LOVE to be able to fly!'
        },{
          createdBy: globalUserData[8],
          choice: 'B'
        },{
          createdBy: globalUserData[4],
          choice: 'B'
        }]
      },{
        ratherA: 'know WHEN you are going to die',
        ratherB: 'know HOW you are going to die',
        addedBy: globalUserData[7],
        answers: [{
          createdBy: globalUserData[5],
          choice: 'A',
          comment: 'Creepy!!'
        },{
          createdBy: globalUserData[4],
          choice: 'A'
        },{
          createdBy: globalUserData[3],
          choice: 'B',
          comment: 'Id be prepared and cheat death! Ahaha!'
        },{
          createdBy: globalUserData[1],
          choice: 'B'
        },{
          createdBy: globalUserData[2],
          choice: 'B'
        }]
      }
    ]);
  })
  .then(questions => {
    console.log(`${questions.length} questions created! 🤷🏻‍🤷🏾‍`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
