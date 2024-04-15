import classes from "./form.module.css"
const Form =()=>{
    return <main className={classes.main}>
    <form className={classes.form}>
      <div className={classes.row}>
        <div className={classes.field_Wrapper}>
          <p>
            <label className={classes.label} htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label className={classes.label} htmlFor="email">Your Email</label>
            <input type="text" id="email" name="email" required />
          </p>
        </div>
        <div className={classes.field_Wrapper}>
        <p>
          <label className={classes.label} htmlFor="title">Your Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        </div>
        <div className={classes.field_Wrapper}>

        <p>
          <label className={classes.label} htmlFor="summary">Your Summary</label>
          <input type="text" id="summary" name="summary" required />
        </p>
        </div>
        <div className={classes.field_Wrapper}>
        <p>
          <label className={classes.label} htmlFor="instructions">Your Instructions</label>
          <textarea
            type="text"
            id="instructions"
            name="instructions"
            rows={10}
            required
          ></textarea>
        </p>
        </div>
        {/* Image Picker */}
        <p className={classes.actions}>
          <button type="submit" className="default-btn">Share Meal</button>
        </p>
      </div>
    </form>
  </main>
}
export default Form