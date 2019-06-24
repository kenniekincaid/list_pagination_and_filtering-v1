
//Initial global variables that contain my list and maximum number of entries per page.
const studentList = document.querySelectorAll('li'); //Global variable for my studentList index
const itemsPerPage = 10; //The maximum number of entries I want on each page.

//ShowPage function
const showPage = (studentList, page) => { // assigned my list of students and page to showPage
   let startIndex = (page * itemsPerPage) - itemsPerPage; //determines the first item to be shown on the page
   let endIndex = (page * itemsPerPage); //determines the last items to be shown on the page
   for (let i = 0; i < studentList.length; i++) { //loop to repeat showing links 
      if (i >= startIndex && i < endIndex) { //my condition that determines if page will show
         studentList[i].style.display = 'block'; //page will show if condition is true
      } else {
         studentList[i].style.display = 'none'; //pay will not show if condition is false
      }
   }
};
showPage(studentList, 1); //calling the function

//Function to create functioning Pagination buttons
const appendPageLinks = (studentList) => { //variable to append pages to my student list
   let numberOfPages = Math.ceil(studentList.length / itemsPerPage); //determines how many pages are needed.
   let div = document.createElement('div'); //assigns the div element to my div variable
   div.className="pagination"; //assigns div to className pagination
   let page = document.querySelector('.page'); //assigns class .page to the page variable
   page.appendChild(div); //appeands div to its parent
   let ul = document.createElement('ul'); //assigns the ul element to my ul variable
   div.appendChild(ul)  // appends ul to its parent
   for (let l = 1; l <= numberOfPages; l++) { //loop for page numbers = 1
      let li = document.createElement('li'); 
      let a = document.createElement('a');
      ul.appendChild(li); //appends li to its parent.
      li.appendChild(a);  //assigns link to li.
      a.setAttribute('href', '#'); //assigns href contents to a.
      a.textContent=l;
   if (l === 1) { //if page number is exactly 1 in type and value, the page is active.
      a.className="active"; 
   } 
  
   a.addEventListener('click', (e) => { // whenever a page number is clicked
      let active = e.target.textContent; //  makes the page active
      let a = document.querySelectorAll('a'); // 
      showPage(studentList, active); // 
      for (let j = 0; j < a.length; j++) { // ensures the active page is highlighted
         a[j].classList.remove("active"); //remvoes active status from page if not true.
      }
      event.target.className="active";
   });
   }
};
showPage(studentList, 1); //call the student list and first page
appendPageLinks(studentList); //calls the creation of whatever number