var carlo = db.collection("dev").doc("EJJTvb6ZdniHBbpNoyqr");
var mark = db.collection("dev").doc("G5W02H41La9yyhEMb2U9");
var ken = db.collection("dev").doc("QxcIKy8cMgMsJUXM9vi6");
var ben = db.collection("dev").doc("3PB1H9xlc0PfqaR5zF9y");
var arle = db.collection("dev").doc("Sx7oetCdFnSrZxmve3Ky");


const aboutc = document.querySelector('#carlo');
carlo.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let name = document.createElement('h5');
        let position = document.createElement('small');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        role.textContent =doc.data().role;
        position.textContent =doc.data().position;
    
        card.appendChild(name);
        card.appendChild(position);
    
        aboutc.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
const aboutm = document.querySelector('#mark');
mark.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let name = document.createElement('h5');
        let position = document.createElement('small');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        role.textContent =doc.data().role;
        position.textContent =doc.data().position;
    
        card.appendChild(name);
        card.appendChild(position);
    
        aboutm.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
const aboutk = document.querySelector('#ken');
ken.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let name = document.createElement('h5');
        let position = document.createElement('small');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        role.textContent =doc.data().role;
        position.textContent =doc.data().position;
    
        card.appendChild(name);
        card.appendChild(position);
    
        aboutk.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
const aboutb = document.querySelector('#ben');
ben.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let name = document.createElement('h5');
        let position = document.createElement('small');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        role.textContent =doc.data().role;
        position.textContent =doc.data().position;
    
        card.appendChild(name);
        card.appendChild(position);
    
        aboutb.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
const abouta = document.querySelector('#arle');
arle.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let name = document.createElement('h5');
        let position = document.createElement('small');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        role.textContent =doc.data().role;
        position.textContent =doc.data().position;
    
        card.appendChild(name);
        card.appendChild(position);
    
        abouta.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

// about footer code

const aboutcf = document.querySelector('#carlof');
carlo.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        role.textContent =doc.data().role;
    
        card.appendChild(role);
    
        aboutcf.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const aboutmf = document.querySelector('#markf');
mark.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        role.textContent =doc.data().role;
    
        card.appendChild(role);
    
        aboutmf.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


const aboutbf = document.querySelector('#benf');
ben.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        role.textContent =doc.data().role;
    
        card.appendChild(role);
    
        aboutbf.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const aboutaf = document.querySelector('#arlef');
arle.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        role.textContent =doc.data().role;
    
        card.appendChild(role);
    
        aboutaf.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

const aboutkf = document.querySelector('#kenf');
ken.get().then((doc) => {
    if (doc.exists) {
        
        let card = document.createElement('card');
        let role = document.createElement('small')
    
        card.setAttribute('data-id', doc.id);
        role.textContent =doc.data().role;
    
        card.appendChild(role);
    
        aboutkf.appendChild(card);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

