//javascript content
//select the <body> element node with the DOM method querySelector
const body = document.querySelector('body');
//select the children nodes with the <body> element node with the DOM property node.childNodes
const childrenNodes = body.childNodes;
//console log the children nodes
console.log(childrenNodes);//NodeList(5) [text, div, text, a, text]

//javascript content

const listItemsHtmlCollection = document.getElementsByTagName("li")
console.log(listItemsHtmlCollection) // HTMLCollection(4) [li, li, li, li]


// A nodeList comes with some inbuilt methods and properties not available in an HTMLCollection. 
// The methods include the forEach() and the entries methods to iterate over a nodeList. 
//An HTMLCollection is always live, while a nodeList can either be live or static. 
//query selector all returns a static node list.
const listItemsNodeList = document.querySelectorAll("li")
console.log(listItemsNodeList) // NodeList(4) [li, li, li, li]

//both the below for loops will apply red color to the text
// for(let i = 0; i < listItemsHtmlCollection.length; i++) {
//     listItemsHtmlCollection[i].style.color = 'red'
// }

// for(let i = 0; i < listItemsNodeList.length; i++) {
//     listItemsNodeList[i].style.color = 'red'
// }

//the below method does not work. we have to use array.from to convert it to arrays
// listItemsHtmlCollection.map( element => element.style.color = 'red' )
// listItemsNodeList.map( element => element.style.color = 'red' )

//working array below
// Array.from(listItemsHtmlCollection).map( element => element.style.color = 'red' )
Array.from(listItemsNodeList).map( element => element.style.color = 'red' );

//select the parent element
const list = document.querySelector('ul');
//create a new element
const listItem = document.createElement('li');
//make the newly created element a child of the parent
list.appendChild(listItem);
console.log(list);

const listText = document.createTextNode("item five");
listItem.appendChild(listText);

const ulList = document.getElementById("ulList");
ulList.style.border = '2px solid red';
ulList.style.padding='30px';

//select by elements one and two by their class name
const itemOneAndTwo = document.getElementsByClassName("listitem12");
//change text color to red with use of index
itemOneAndTwo[0].style.color = 'blue';
itemOneAndTwo[1].style.color = 'blue';

const liTags = document.getElementsByTagName("li") ;
for(let i = 0; i < liTags.length; i++) {
    liTags[i].style.fontStyle = 'italic';
}

// changing font color fro blue to purple
const querySelectItem = document.querySelector(".listitem12");
console.log('here '+querySelectItem);
querySelectItem.style.color = 'purple';

const querySelectAllItems = document.querySelectorAll("li")
for(let i = 0; i < querySelectAllItems.length; i++) {
    querySelectAllItems[i].style.marginTop = "20px";
    querySelectAllItems[i].style.border = "2px solid";
    console.log(querySelectAllItems.item(i));
    // item returns the below for all the li items 
    // <li class="listitem12" style="color: purple; font-style: italic; margin-top: 20px; border: 2px solid;">item one</li>
}  


//javascript content

const itemThree = querySelectAllItems[2] ;
itemThree.setAttribute("class", "listItem3");  
const getListItem = document.querySelector(".listItem3");
getListItem.style.border = "5px solid";


//remove attribute
ulList.removeAttribute('id')
ulList.style.border = 'none'