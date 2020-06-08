// DOM - The Document Object Model (DOM) is a platform and language-neutral interface
//       that allows programs and scripts to dynamically access and update the content,
//       structure, and style of a document.

// https://www.w3schools.com/js/js_htmldom.asp

// Document Object:
// The HTML DOM document object is the owner of all other objects in your web page.
// The document object represents your web page.
// If you want to access any element in an HTML page, you always start with accessing the document object.
// Link: https://www.w3schools.com/js/js_htmldom_document.asp


// Window Object 
      // Window Object is the parent object in the Browser.
        // console.log(window)
        // Everything comes under this window object
        // window.alert("This is an alert")
        // But since window is the parent object and everything comes under it
        // we dont need to say window all the time 
        // alert("this is a new alert")

        // Now this window object also has the object document, which refers to the DOM.
        // We will be using this document object to select elements from the DOM. 

 
//  ELEMENT SELECTORS

// Single Element Selectors
// console.log(document.getElementById('my-form'))
// let form = document.getElementById('my-form')

// We can also do the same thing using query selector 
// People used jQuery for a long time to select elements with attributes other than id,
// like classes, tags, etc. But with ES6 we can do the same thing using querySelector
// console.log(document.querySelector('#my-form'))


// // Multiple Element Selectors

// console.log(document.querySelectorAll('.item'))
// What this will give us is a node list which is just like an array 
// and we  can run array functions on it

// There are other ways to select elements, but the recommended one is
// querySelectorAll beacuse the other two are older.
// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('item'))

// Looping through the items
// console.log('\nLooping through the NodeList')
// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item.innerHTML))
// We can also use item.textContent to display just the text 


// // MANIPULATING THE DOM
const ul = document.querySelector('.items')

// Removing all elements under class items
// ul.remove()

// Removing last elemnt under class items
// ul.lastElementChild.remove()

// Changing text content 
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'


// Adding HTML
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'


// Changing styles
// const btn = document.querySelector('.btn')
// btn.style.background = 'red';


// // EVENTS

// Link: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


// // Mouse Event
// const btn = document.querySelector('.btn')
// const form = document.getElementById('my-form')



btn.addEventListener('click', e => {
  e.preventDefault()
  // the btn has a default fucntionality which makes the event flash and go away,
  // we are using preventDefault() to prevent that
  console.log('Hello')

  // console.log(e.target.className)
  // Adding Style 
  form.style.background = '#ccc'
  // Adding class to the element
  document.querySelector('body').classList.add('bg-dark')
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>'
})

// There are other events like hover and mouseout which can also be used.

// // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').h1.innerHTML = nameInput.value
//   // value(nameInput.value);
// });

// Links:
// https://www.w3schools.com/js/js_htmldom_events.asp  
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp


// // USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');



// const btn_1 = document.querySelector('.btn_1')
// const btn_2 = document.querySelector('.btn_2')

// btn_1.addEventListener('click', e => {
//     e.preventDefault()
//     console.log('Hello')
//   }
// )

// btn_2.addEventListener('click', e => {
//   e.preventDefault()
//   console.log('World')
//   }
// )







// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
//   }
// }
    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

//     // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
    li.innerHTML = `<strong>${nameInput.value}</strong>   :    ${emailInput.value}`;

//     // Append to ul
    userList.appendChild(li);

//     // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}