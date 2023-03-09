import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, push, get, orderByChild, query, limitToFirst } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDD6W_dowUCnUHPtU7-4aU7o-P21LSM-c0",
  authDomain: "foosball-aa9fd.firebaseapp.com",
  projectId: "foosball-aa9fd",
  storageBucket: "foosball-aa9fd.appspot.com",
  messagingSenderId: "418882552712",
  appId: "1:418882552712:web:d375bd0712f19f5fa6f03d",
  databaseURL: "https://foosball-aa9fd-default-rtdb.firebaseio.com/",
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
  try{
  push(ref(database, "teams"), team);
  }catch(e){
    console.log(e);
  }
}

export function deleteTeamData(teamId) {
  try{
    set(ref(database, 'teams/' + teamId), null);
  }catch(e){
    console.log(e);
  }
}

