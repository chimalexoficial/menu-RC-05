import { useState } from "react";
import Title from "./Title";
import menu from './data.js'
import Menu from "./Menu.jsx";
import Categories from "./Categories.jsx";

const tempCategories = menu.map(item => item.category);

const allCategories = ['all', ...new Set(tempCategories)];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter(menuFilter => menuFilter.category === category);
    setMenuItems(newItems);
  }

  return <main>
    <section className="menu">
      <Categories categories={categories} filterItems={filterItems} />
      <Title text='Our Menu' />
      <Menu menuItems={menuItems} />
    </section>
  </main>;
};
export default App;
