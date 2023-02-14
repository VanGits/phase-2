import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({items}) => {

    const { id } = useParams()

    console.log(id)
    console.log(items)

    const itemDisplay = items.map((item) => {

        

        if (item.id == id){
            return (
                <h1 key={item.id}>{item.title}</h1>
            )
        }

    })


    return (
        <div>
            {itemDisplay}
        </div>
    );
}

export default ItemDetail;
