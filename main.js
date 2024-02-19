// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAQYdEIrsksIn6Rye1TZ9ZoyrLHU6jfHg4",
  authDomain: "max-learn-b0415.firebaseapp.com",
  databaseURL: "https://max-learn-b0415-default-rtdb.firebaseio.com",
  projectId: "max-learn-b0415",
  storageBucket: "max-learn-b0415.appspot.com",
  messagingSenderId: "530326840871"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var pass = getInputVal('pass');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, pass, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
