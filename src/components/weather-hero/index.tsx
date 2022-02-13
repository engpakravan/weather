import styles from "./styles.module.scss"

type Props = {
};
const WeatherHeroComponent = (props: Props) => {
    return (
        <section className={styles.weather_hero}>


            <div className={styles.cloud_wrapper}>
                <figure className={`${styles.cloud}`} style={{top : 0 , left : -50}}/>
                <figure className={`${styles.cloud} ${styles.cloud__lg}`} style={{top: 160,left : -60}}/>
                <figure className={`${styles.cloud}`} style={{top: 260,right : -20}}/>
                <figure className={`${styles.cloud} ${styles.cloud__lg}`} style={{top: 0,right : -80}}/>
            </div>

            <div className={styles.hero_content}>
                <img src={require("../../assets/img/HeavyRain.png")} alt=""/>
                <span className={styles.hero_content__degree}>15<span className={styles.hero_content__degree__unit}>درجه سانتیگراد</span></span>
                <span className={styles.hero_content__title}>ابری</span>

                <span className={styles.hero_content__timezone}> امروز  ■ شنبه سوم مهر 1400</span>

                {/* TODO location icon */}
                <span className={styles.hero_content__location}>تهران</span>
            </div>

        </section>
    );
};

export default WeatherHeroComponent;