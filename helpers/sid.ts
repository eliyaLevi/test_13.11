import fs from 'fs';
import  Missile  from '../src/models/Missile';
import  Org  from '../src/models/organization';

async function loadInitialData() {
  const orgData = JSON.parse(fs.readFileSync('./data/organizations.json', 'utf8'));
  const missileData = JSON.parse(fs.readFileSync('./data/missiles.json', 'utf8'));

  if ((await Org.countDocuments()) === 0) {
    await Org.insertMany(orgData);
  }

  if ((await Missile.countDocuments()) === 0) {
    await Missile.insertMany(missileData);
  }
}

export default loadInitialData