import WeatherHero from "containers/WeatherHero";

type Props = {
    homeData : string
};
const HomeComponent = (props: Props) => {
    return (
        <>
            <WeatherHero/>
        </>
    );
};

export default HomeComponent;