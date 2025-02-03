import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
import ReactDOM from 'react-dom/client';
//DO I need this?
//Too scared to remove it

//Also please have mercy




export default function Sidebar({initialMenuItems}) {
  let [newMenuItem, setNewMenuItem] = useState("")
  //here is where the code is vvv
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
/*Use State is a hook, and creates a variable and a function

let[menuItems, setMenuItems] destructuring the array, and the two inside are the variables
"Create a state variable called menuItems, and set its initial value to initial menu items, and also create a function (set menu items) that we can update the state of menu items later"


I'm writing this out to understand it better
*/



  // let [menuItems, setMenuItems] = useState(initialMenuItems)





  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
/*

useState is a hook
1. filter
2. setFilter -- updates filter state
useState("") initializes state with value passed to it

create state variable called filter and set initial value to empty string
set filter updates it later


*/




  let addMenuItem = useCallback(() => {
    setMenuItems([newMenuItem, ...menuItems])
    if(newMenuItem.trim()!==""){
      setMenuItems([newMenuItem, ...menuItems])
      setNewMenuItem("")
    }

    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
  }, [newMenuItem, menuItems])

/*
function is addMenuItem, uses a hook called Callback

useCallback returns memorized version of callback function,
function will only be recreated if one of the dependencies (newMenuItem, menuItem) changes

addMenu is name

if (newMenuItem bla bla)
checks that the input isn't blank



*/












const filteredMenuItems = menuItems.filter((item) => item.toLowerCase().includes(filter.toLowerCase()))

//Makes it case insensitive

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.








  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.

  //Find the first "TODO" comment in the "Sidebar" component.
//Implement the rendering of an unordered list of menu items using the initialMenuItems prop, which is an array of strings.
//Ensure that the rendered result aligns with the expected behavior outlined in the "index.js" file.
//Refer to the provided animation for an overview of the intended component behavior.

//using the w3schools example

//function Car(props){
  //return <li>I am a {props.brand}</li>;
//}
//function Garage(){
  //const cars = ['Ford', 'BMW', 'Mercedes'];
  //return (
   // <ul>
   //   {cars.map((car) => <Car brand={car} />)}
   // </ul>
 // );
//}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Garage />);


/*When I tried to do the method with root.render, it wasn't working

So I tried another method
*/


  return (
    <div id="root">

<ul>
        {filteredMenuItems.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
        placeholder="New Menu Item"
      ></input>



      <br />

      <button
        onClick={addMenuItem}>Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

    </div>
  )
}
