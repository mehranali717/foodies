import sql from "better-sqlite3";
const db = sql("meals.db");

async function getMeals() {
//   await new Promise(() => setTimeout((resolve) => resolve, 0));
 return db.prepare("SELECT * FROM meals").all();
}
export default getMeals;
