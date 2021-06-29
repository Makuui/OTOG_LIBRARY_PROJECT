var bookc = db.collection("books").doc("sC4uGBLo4w7CdldrN5Th"); // carlo
var bookm = db.collection("books").doc("fpxKgU97Lam037zBxVc9"); // mark
var bookk = db.collection("books").doc("0kPlMe79psMnVvVt94fN"); //ken
var bookb = db.collection("books").doc("FlqHymTIa8TgqQoOpDw2"); //ben
var booka = db.collection("books").doc("5S0kVTutL3OnrpzOFRb8"); //arle

// card title and Description Firebase to front end
const book1 = document.querySelector('#book1');
bookc.get().then((doc) => {
    if (doc.exists) {

        let card = document.createElement('card');
        let title = document.createElement('h5');
        let description = document.createElement('small');

        card.setAttribute('data-id', doc.id);
        title.textContent = doc.data().title;
        description.textContent = doc.data().Description;

        card.appendChild(title);
        card.appendChild(description);

        book1.appendChild(card);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const book2 = document.querySelector('#book2');
bookm.get().then((doc) => {
    if (doc.exists) {

        let card = document.createElement('card');
        let title = document.createElement('h5');
        let description = document.createElement('small');

        card.setAttribute('data-id', doc.id);
        title.textContent = doc.data().title;
        description.textContent = doc.data().Description;

        card.appendChild(title);
        card.appendChild(description);

        book2.appendChild(card);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const book3 = document.querySelector('#book3');
bookk.get().then((doc) => {
    if (doc.exists) {

        let card = document.createElement('card');
        let title = document.createElement('h5');
        let description = document.createElement('small');

        card.setAttribute('data-id', doc.id);
        title.textContent = doc.data().title;
        description.textContent = doc.data().Description;

        card.appendChild(title);
        card.appendChild(description);

        book3.appendChild(card);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const book4 = document.querySelector('#book4');
bookb.get().then((doc) => {
    if (doc.exists) {

        let card = document.createElement('card');
        let title = document.createElement('h5');
        let description = document.createElement('small');

        card.setAttribute('data-id', doc.id);
        title.textContent = doc.data().title;
        description.textContent = doc.data().Description;

        card.appendChild(title);
        card.appendChild(description);

        book4.appendChild(card);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const book5 = document.querySelector('#book5');
booka.get().then((doc) => {
    if (doc.exists) {

        let card = document.createElement('card');
        let title = document.createElement('h5');
        let description = document.createElement('small');

        card.setAttribute('data-id', doc.id);
        title.textContent = doc.data().title;
        description.textContent = doc.data().Description;

        card.appendChild(title);
        card.appendChild(description);

        book5.appendChild(card);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});