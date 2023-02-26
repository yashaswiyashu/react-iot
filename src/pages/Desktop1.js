import BarChart from "../components/BarChart";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.crraoAdvancedInstituteOfParent}>
        <b className={styles.crraoAdvancedInstitute}>
          C.R.Rao Advanced Institute of Mathematics, Statistics and Computer
          Science (AIMSCS)
        </b>
        <b className={styles.universityOfHyderabad}>
          University of Hyderabad Campus, Gachibowli, Hyderabad – 500 046
        </b>
        <div className={styles.orderlist} />
        <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
      </div>
      <div className={styles.tuiTabsParent}>
        <div className={styles.tuiTabs}>
          <div className={styles.tuiTab}>
            <div className={styles.tabtext}>
              <div className={styles.text2}>Dashboard</div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.button}>
            <div className={styles.tuiButton}>
              <div className={styles.icon}>
                <img className={styles.icon16} alt="" src="../icon16.svg" />
              </div>
              <div className={styles.label}>
                <div className={styles.label1}>Button</div>
              </div>
              <div className={styles.container}>
                <img className={styles.icon161} alt="" src="../icon161.svg" />
              </div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.tuiButton1}>
              <div className={styles.icon}>
                <img className={styles.icon16} alt="" src="../icon162.svg" />
              </div>
              <div className={styles.label}>
                <div className={styles.label1}>Button</div>
              </div>
              <div className={styles.container}>
                <img className={styles.icon161} alt="" src="../icon161.svg" />
              </div>
            </div>
            <div className={styles.tuiBadge}>
              <div className={styles.labelcont}>
                <div className={styles.label4}>1</div>
                <img className={styles.minWidthIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chart}>
        <BarChart/>
      </div>
    </div>
  );
};

export default Desktop1;
