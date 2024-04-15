import MealItem from "./meal-item"
import classes from "./meals-grid.module.css"
const MealsGrid =({meals})=>{
    
    return <ul className={classes.cards_wrapper}>
        {meals.map(meal => <li key={meal.id} className={classes.grid_wrapper}>
            <MealItem {...meal}/>
        </li>)}
    </ul>
}
export default MealsGrid