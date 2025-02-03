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
  // let [menuItems, setMenuItems] = useState(initialMenuItems)





  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.





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


const filteredMenuItems = menuItems.filter((item) => item.toLowerCase().includes(filter.toLowerCase()))



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
