import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button" 
const CardDeal = () => (
 <section className={`${layout.section} mt-6`}>
<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>
    Find a better card deal<br className="sm:block hidden"/> in a few easy steps.
  </h2>
  <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis, felis a gravida laoreet, nibh mauris maximus nunc, ut sagittis urna leo a nisi.
  </p>
  <Button styles="mt-10"  />
</div>

<div className={layout.sectionImg}>
  <img src={card} alt=""  className="w-[100%] h-[100%]        "/>

</div>
 </section>
)
  


export default CardDeal