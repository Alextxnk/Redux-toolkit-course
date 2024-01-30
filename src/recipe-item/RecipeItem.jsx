import styles from './RecipeItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/favorites/favorites.slice.js';

const RecipeItem = ({ recipe }) => {
   const { favorites } = useSelector((state) => state);
   console.log(favorites);

   const dispatch = useDispatch(); // нужен для того, чтобы дергать actions

   return (
      <div className={styles.item}>
         <h3>{recipe.name}</h3>
         <button onClick={() => dispatch(actions.toggleFavorites(recipe))} className={styles.button}>Add to favorites</button>
      </div>
   );
};

export default RecipeItem;
