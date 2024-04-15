import classes from "./meal-item.module.css";
import Link from "next/link";
import Image from "next/image";
const MealItem = ({ title, slug, image, summery, creator }) => {
  return (
    <article className={classes.meal}>
      <header>
        <Image src={image} alt={title} width={100} height={100}/>
        <div className={classes.card_head}>
          <h2>{title}</h2>
          <p>by: {creator}</p>
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
export default MealItem;
