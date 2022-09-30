import React from 'react';
import { Card } from 'primereact/card';

const Urun = (props) => {
    return (
        <Card title={props.title} 
            header={<img style={{maxHeight:'300px'}}  src={props.imgSrc}/>}>
             {props.description}   
        </Card>
    )
}


export default Urun;