import Image from "next/image";
import classes from "./page.module.css";
import { getMealDetail } from "@/lib/meals";
import { notFound } from "next/navigation";
const MealDetailsPage = ({ params }) => {
  const meal = getMealDetail(params.mealSlug);
  if (!meal) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <div className={classes.detail_Wrapper}>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} width={200} height={200} alt="image" />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by: <a href={`mailto:${"MAIL"}`}>{meal.creator}</a>
          </p>
          <p
            className={classes.summary}
            dangerouslySetInnerHTML={{ __html: meal.summary }}
          ></p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </div>
  );
};
export default MealDetailsPage;
