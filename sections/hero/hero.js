import Link from "next/link";
import classes from "./hero.module.css";
import ImageSlideShow from "@/components/slideshow/image-slideshow";

const Hero = () => (
  <section className={classes.hero}>
    <div className="container">
      <div className={classes.content_inner}>
          <ImageSlideShow />
        <div className={classes.text_wrapper}>
          <div>
            <h1 className={classes.main_heading}>
              NextLevel Food For NextLevel Foodies
            </h1>
            <p>Taste & Share food from all over the world</p>
          </div>
          <div>
            <Link href="/community">Join The Community</Link>
            <Link href="/meals">Share The Meals</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
