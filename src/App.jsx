import RecipeItem from './recipe-item/RecipeItem.jsx';

const App = () => {
   return (
      <div className='container'>
         <RecipeItem
            recipe={{
               id: 1,
               name: 'Лазанья'
            }}
         />
         <RecipeItem
            recipe={{
               id: 2,
               name: 'Паста'
            }}
         />
         <RecipeItem
            recipe={{
               id: 3,
               name: 'Каша'
            }}
         />
      </div>
   );
};

export default App;
