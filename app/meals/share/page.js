import Form from "@/sections/form/form";
import classes from "./page.module.css";
const SharePage = () => (
  <main>
    <header className={classes.header}>
      <h1>
        Share Your <span className={classes.hightlight}>Favorite meal</span>
      </h1>
      <p>Or any other meal you feel neads sharing!</p>
    </header>
    <Form />
  </main>
);
export default SharePage;
