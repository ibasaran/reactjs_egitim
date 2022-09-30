import React from 'react';

const Card = (props) => {
    return (
        <div className=''>
            <ul>
                {
                    props.isimler.map((item,index) => {
                        
                            return <li>{item}</li>
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Card;