import React from 'react'


const List = (props) => {
    const { people } = props;
    return (
        <div className='hero'>
            {
                people.map((person) => {
                    //สลายโครงสร้าง object
                    const { id, name, age, image } = person;
                    return (
                        <article className='person' key={id}>
                            <div className='image'>
                                <img src={image} alt="" />
                            </div>
                            
                            <div>
                                <h4>{name}</h4>
                                <p>{age} year old</p>
                            </div>
                        </article>
                    )
                })
            }

        </div>
    )
}

export default List