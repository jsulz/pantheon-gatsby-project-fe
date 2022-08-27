/*
 * Category list component that uses categories from the post where it's loaded
*/
import React from "react"

const CategoryList = ({categories}) => {

    return (
        <div>
            <ol>
                {categories.map((category) => {
                    return (
                        <li key={category.id}>
                            <a href={category.uri}>{category.name}</a>
                        </li>
                    )
                })}
            </ol>
        </div>
    )

}

export default CategoryList