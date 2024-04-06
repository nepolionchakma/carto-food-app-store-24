import { createContext, useContext } from "react";

export const CartoContext = createContext({
    carts: [
        {
            idMeal: 1,
            strMeal: 'food name',
            strMealThumb:'link'
        }
    ],
    addCart: (cart) => { },
    deleteCart: (id) => { },
    
})
export const CartoProvider = CartoContext.Provider

export const useCarto = () => {
    return useContext(CartoContext);
}