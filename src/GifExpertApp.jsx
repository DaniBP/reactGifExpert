import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball GTX 4090 Ti']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        //console.log(newCategory);
        //categories.push(newCategory)
        setCategories([newCategory, ...categories]);
        // setCategories(cat =>[...cat,'Pokemon']);
    }

    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 

                onNewCategory={(value) => onAddCategory(value)}
                currentCateogories = {categories}
            />

    
                {
                    categories.map((category) =>
                        (
                            <GifGrid 
                                key={category} 
                                category={category} />
                        )
                    )
                }

        </>
    )
}
