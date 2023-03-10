import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  get,
  orderByChild,
  query,
  limitToFirst,
} from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const getRealtimeDatabase = () => {
  return getDatabase(app);
};

export function listenForTeamData(callback) {
  try {
    onValue(ref(database, "teams"), (snapshot) => {
      const data = snapshot.val() || [];
      callback(data);
    });
  } catch (e) {
    console.log(e);
  }
}
export function getMostRecentScore(callback) {
  try {
    const scoresRef = ref(database, "scores");
    const query = orderByChild(scoresRef, "timestamp");
    const latestScoreQuery = limitToLast(query, 1);
    onValue(latestScoreQuery, (snapshot) => {
      const data = snapshot.val() || null;
      callback(data);
    });
  } catch (e) {
    console.log(e);
  }
}

export function saveScoreData(score) {
  try {
    push(ref(database, "scores"), score);
  } catch (e) {
    console.log(e);
  }
}
export function listenForScores(callback) {
  try {
    onValue(ref(database, "scores"), (snapshot) => {
      const data = snapshot.val() || [];
      callback(data);
    });
  } catch (e) {
    console.log(e);
  }
}

export function saveTeamData(team) {
  try {
    push(ref(database, "teams"), team);
  } catch (e) {
    console.log(e);
  }
}

export function deleteTeamData(teamId) {
  try {
    set(ref(database, "teams/" + teamId), null);
  } catch (e) {
    console.log(e);
  }
}
