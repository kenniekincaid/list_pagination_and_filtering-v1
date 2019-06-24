const studentList = document.querySelectorAll('li'); //Global variable for my studentList index
const itemsPerPage = 10; //The maximum number of entries I want on each page.

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (studentList, page) => { // assigned my list of students and page to showPage
   let startIndex = (page * itemsPerPage) - itemsPerPage; 
   let endIndex = (page * itemsPerPage);
   for (let i = 0; i < studentList.length; i++) { //loop to repeat showing links 
      if (i >= startIndex && i < endIndex) {
         studentList[i].style.display = 'block'; 
      } else {
         studentList[i].style.display = 'none';
      }
   }
};
showPage(studentList, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// (54/10 = 5 full pages with a remainder of 4 contained on a 6th page.
const appendPageLinks = (studentList) => { 
   let numberOfPages = Math.ceil(studentList.length / itemsPerPage);
   let div = document.createElement('div');
   div.className="pagination";
   let page = document.querySelector('.page');
   page.appendChild(div);
   let ul = document.createElement('ul');
   div.appendChild(ul)
   for (let l = 1; l <= numberOfPages; l++) { //loop for page numbers = 1
      let li = document.createElement('li');
      let a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      a.setAttribute('href', '#');
      a.textContent=l;
   if (l === 1) {
      a.className="active";
   } 
  
   a.addEventListener('click', (e) => { //
      let active = e.target.textContent; // 
      let a = document.querySelectorAll('a'); // 
      showPage(studentList, active); // 
      for (let j = 0; j < a.length; j++) { //
         a[j].classList.remove("active"); //
      }
      event.target.className="active"; //
   });
   }
}; 
showPage(studentList, 1); //
appendPageLinks(studentList); //



// Remember to delete the comments that came with this file, and replace them with your own code comments.