var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var firebase = require('firebase/app');
require('firebase/firestore');
var _a = require('firebase/firestore'), getFirestore = _a.getFirestore, getDoc = _a.getDoc, getDocs = _a.getDocs, collection = _a.collection, doc = _a.doc;
var firebaseConfig = {
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain:process.env.FIREBASE_AUTH_DOMAIN ,
    // databaseURL:process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket:process.env.FIREBASE_STORAGE_BUCKET ,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyCq5OsIGwWNQAWhljXSGrnt-JBF63QKFjA",
    authDomain: "test-1edb0.firebaseapp.com",
    databaseURL: "https://test-1edb0-default-rtdb.firebaseio.com/",
    projectId: "test-1edb0",
    storageBucket: "test-1edb0.appspot.com",
    messagingSenderId: "239136829511",
    appId: "1:239136829511:web:a79655588889b4a0df8162",
    measurementId: "G-VZKL7Z9NSJ"
};
firebase.initializeApp(firebaseConfig);
var db = getFirestore();
var collectionRef = collection(db, 'contacts');
// async function read_data() {
//   const querySnapshot = doc(db, "contacts","0dOGTsLnlFXXdJeeuA1g");
//   const docSnap = await getDoc(querySnapshot);
//   console.log(docSnap.data().cell);
// }
function getAllDocumentsID() {
    return __awaiter(this, void 0, void 0, function () {
        var querySnapshot, documentIDS;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDocs(collectionRef)];
                case 1:
                    querySnapshot = _a.sent();
                    documentIDS = [];
                    querySnapshot.forEach(function (doc) {
                        documentIDS.push(doc.id);
                    });
                    return [2 /*return*/, documentIDS];
            }
        });
    });
}
var FirestoreDoc = /** @class */ (function () {
    function FirestoreDoc(docSnapshot) {
        this.data = docSnapshot.data();
    }
    FirestoreDoc.prototype.getStringField = function () {
        return this.data.cell;
    };
    FirestoreDoc.prototype.getStringArrayField = function () {
        return this.data.list;
    };
    FirestoreDoc.prototype.getStringMapField = function () {
        return this.data.colors;
    };
    FirestoreDoc.prototype.getNumericField = function () {
        return this.data.numericField;
    };
    FirestoreDoc.prototype.getMixedField = function () {
        return this.data.mixedField;
    };
    return FirestoreDoc;
}());
//read_data();
// getAllDocumentsID()
//   .then(documentIds => console.log(documentIds))
//   .catch(error => console.error(error));
// interface MyData {
//   [key: string]: string | string[] | { [key: string]: string } | number | any;
// }
function store_object() {
    return __awaiter(this, void 0, void 0, function () {
        var querySnapshot, docSnapshot, firestoreDoc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    querySnapshot = doc(db, "contacts", "0dOGTsLnlFXXdJeeuA1g");
                    return [4 /*yield*/, getDoc(querySnapshot)];
                case 1:
                    docSnapshot = _a.sent();
                    firestoreDoc = new FirestoreDoc(docSnapshot);
                    console.log(firestoreDoc);
                    return [2 /*return*/];
            }
        });
    });
}
store_object();
// //chatgpt
// class FirebaseTable {
//   private tableRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
//   constructor(tablePath: string) {
//     this.tableRef = firebase.firestore().collection(tablePath);
//   }
//   // function to get document data as MyData object
//   async getDocument(docId: string): Promise<MyData | undefined> {
//     const doc = await this.tableRef.doc(docId).get();
//     if (!doc.exists) {
//       return undefined;
//     }
//     const data = doc.data() as MyData;
//     return data;
//   }
// }
// // initialize Firebase table object
// const table = new FirebaseTable('my-table');
// // read data from table
// (async () => {
//   const docId = 'my-doc';
//   const data = await table.getDocument(docId);
//   if (data !== undefined) {
//     console.log(data['my-string-field'] as string);
//     console.log(data['my-string-array-field'] as string[]);
//     console.log(data['my-string-map-field'] as { [key: string]: string });
//     console.log(data['my-numeric-field'] as number);
//     console.log(data['my-mixed-field']);
//   }
// })();
