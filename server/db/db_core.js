import crypto from 'crypto';
import getUserModel from './models/user';


const User = getUserModel();
const salt = 'formconstructor';


function hashPassword(password) {
  const passHash = crypto.createHash('sha256');
  passHash.update(password);

  const allHash = crypto.createHash('sha256');
  allHash.update(passHash.digest('hex') + salt);
}

export function signInUser(email, password, callback) {
  User.findOne({ email }).select({ passwordHash: 1 }).exec((err, user) => {
    if (user && (user.passwordHash === hashPassword(password))) {
      const userData = {
        userId: user.id,
        status: {
          type: 'success',
          text: 'Welcome',
        },
      };
      callback(userData);
    } else {
      const userData = {
        userid: '',
        status: {
          type: 'error',
          text: 'Something wrong',
        },
      };
      callback(userData);
    }
  });
}


export function signUpUser(email, password, name, sessionId, callback) {
  const passwordHash = hashPassword(password);
  const newUser = new User({
    email,
    name,
    passwordHash,
    sessionId,
  });

  newUser.save(error => {
    if (error) console.log(error);
    callback(sessionId);
  });
}


export function setSessionId(userId, sessionId, callback) {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: userId }, (err, user) => {
      if (err) reject(err);
      user.sessionId = sessionId;
      user.save(error => {
        if (error) reject(error);
        resolve();
      });
    });
  }).then(() => {
    callback(sessionId);
  }).catch(exception => { console.log(exception); });
}
