
const firebase = require('firebase/app');
require('firebase/firestore');
const { getFirestore, getDoc,getDocs, collection, doc } = require('firebase/firestore');



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN ,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore();
const collectionRef = collection(db, 'contacts');




async function getAllDocumentsID(){
  const querySnapshot = await getDocs(collectionRef); 
  const documentIDS=[];
  querySnapshot.forEach(doc=>{
    documentIDS.push(doc.id);
  });
  return documentIDS;

}

type DocData = {
  cell: string;
  list: string[];
  colors: Record<string, string>;
  numericField: number;
  mixedField: any;
};

class FirestoreDoc {
  private data: DocData;

  constructor(docSnapshot) {
    this.data = docSnapshot.data() as DocData;
  }

  getStringField(): string {
    return this.data.cell;
  }

  getStringArrayField(): string[] {
    return this.data.list;
  }

  getStringMapField(): Record<string, string> {
    return this.data.colors;
  }

  getNumericField(): number {
    return this.data.numericField;
  }

  getMixedField(): any {
    return this.data.mixedField;
  }
}


async function store_object(){
  const querySnapshot = doc(db, "contacts","0dOGTsLnlFXXdJeeuA1g");
  const docSnapshot= await getDoc(querySnapshot);
  const firestoreDoc = new FirestoreDoc(docSnapshot);
  console.log(firestoreDoc);


}

store_object();