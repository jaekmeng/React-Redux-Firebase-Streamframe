const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

//Firebase Cloud Functions that ended up not being used.
/* exports.completeTask = functions.firestore
    .document('tasks/{id}')
    .onUpdate((change, context) => {
        const newTask = change.after.data();
        var childCounter = 0;
        const firestoreRef = admin.firestore().collection('tasks');

        firestoreRef.where('parentid', '==', newTask.tid)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    childCounter++;
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        //find child save to variable
        if (newTask.status === 1 && childCounter === 0) {
            firestoreRef.doc(newTask.id).update({ status: 2 });
        }

        return 0;
    }); */

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
