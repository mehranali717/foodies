import classes from "./meal-item.module.css";
import Link from "next/link";
const MealItem = ({title, slug, image, summery, creater}) => {
  console.log({image});
  return (
    <article className={classes.meal}>
      <header>
        <img src={image.src} alt={"title"} />
        <div>
          <h2>{title}</h2>
          <p>by {creater}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summery}>{summery}</p>
        <div className={classes.action}>
            <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};
export default MealItem