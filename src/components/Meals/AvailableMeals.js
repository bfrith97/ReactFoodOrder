import classes from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'sushi',
        desc: 'Finest fish and vegetables',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'pie',
        desc: 'Golden crust pie',
        price: 28.49
    }
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} desc={meal.desc} price={meal.price}/>)

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals