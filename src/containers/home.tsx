import HomeComponent from "../components/home";
import {useQuery} from "react-query";

export const Home = () => {

    const {isLoading , isError , data} = useQuery("todos" , () => {
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                resolve("I Fetched !")
            } , 3000)
        })
    })

    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Errored...</h1>}
            <HomeComponent homeData={data as string}/>
        </>
    );
};