import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import dotenv from 'dotenv';
dotenv.config();
async function checkFirestoreAccess() {
    try {
        // Initialize Firebase app if it hasn't been already
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: process.env.FIREBASE_API_KEY,
                authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                databaseURL: process.env.FIREBASE_DATABASE_URL,
                projectId: process.env.FIREBASE_PROJECT_ID,
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.FIREBASE_APP_ID,
                measurementId: process.env.FIREBASE_MEASUREMENT_ID
            });
        }
        console.log('Firebase app initialized successfully');
        // Try to retrieve some data from Firestore
        const collectionRef = firebase.firestore().collection('test');
        console.log('Retrieved collection reference:', collectionRef.path);
        const querySnapshot = await collectionRef.limit(1).get();
        // If we successfully retrieved data, Firestore is accessible
        return querySnapshot.size > 0;
    }
    catch (error) {
        // If an error occurred, Firestore is not accessible
        console.error(error);
        return false;
    }
}
checkFirestoreAccess().then((isAccessible) => {
    if (isAccessible) {
        console.log('Firestore is accessible!');
    }
    else {
        console.log('Firestore is not accessible.');
    }
});
//# sourceMappingURL=firebase_test.js.map