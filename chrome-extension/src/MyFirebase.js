import firebase from 'firebase'
import {firebaseConfig} from './hidden_data'

const config = firebaseConfig

firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots:true
})

export const myFirebase=firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()