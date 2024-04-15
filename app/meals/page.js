import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  return (
    <section className={classes.meals_wrapper}>
      <div className="container">
        <div className="content_inner">
          <header className={classes.header}>
            <h1 className={classes.main_heading}>
              Delicious meals, created{" "}
              <span className={classes.highlight}>by you</span>
            </h1>
            <p className={classes.section_description}>
              Choose your favorite recipe and cook it yourself. It is easy and
              fun!
            </p>
            <p className={classes.cta}>
              <Link href="/meals/share">Share Your Favorite Recipe</Link>
            </p>
          </header>
          <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
              <Meals />
            </Suspense>
          </main>
        </div>
      </div>
    </section>
  );
}
export default MealsPage;
