import { signInUser, signUpUser, setSessionId } from './db/db_core';
import { generateSessionId } from './lib/core';


export default function (app) {
  app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    signInUser(email, password, (userData) => {
      if (userData.status.type === 'success') {
        const sessionId = generateSessionId();
        setSessionId(userData.userId, sessionId, () => {
          res.send({ status: 'OK' });
        });
      } else {
        res.json({ user: userData });
      }
    });
  });

  app.post('/signup', (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const userSessionId = generateSessionId();

    signUpUser(email, password, name, userSessionId, () => {
      res.send({ status: 'OK' });
    });
  });
}
