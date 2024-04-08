import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { Link } from "react-router-dom";

// https://www.themealdb.com/api/json/v1/1/list.php?i
const HomeItem = ({ items }) => {
    const { strMeal, strMealThumb, idMeal } = items;
    const string = strMeal.slice(0, 19);
    return (
        <Link to={`/details/${idMeal}`}>
            <Card >
                <CardHeader>
                    <h4>{string}</h4>
                    {/* <CardTitle>{strMeal}</CardTitle> */}
                    {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent>
                    <img src={strMealThumb} alt="" />
                </CardContent>
                <CardFooter>
                    {/* <p>Card Footer</p> */}
                </CardFooter>
            </Card>

        </Link>
    );
};

export default HomeItem;