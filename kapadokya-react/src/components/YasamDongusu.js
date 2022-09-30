import React,{useEffect, useState} from 'react'




const YDongusu = () => {

    const [title,setTitle] = useState('Merhaba Yaşam Döngüsü Fonksiyonu')

    useEffect(()=>{
        console.log('1. use effect interval calistiyorum')
        setInterval(()=> {
            setTitle('Abc' + new Date())
        },3000);
    },[])


    useEffect(()=> {
        console.log('Title değiştiğinde çalışıtım')
        // DB den dosyaları çek göster
    },[title])

    useEffect(()=> {console.log('Ben 3. effectim')},[])

    return (
        <>
           <h1>{title}</h1>
        </>
        
    )
}

// class YasamDongusu extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             title: 'Merhaba Yaşam Döngüsü',
//             onemsiz:1
//         }
//     }


//     componentDidMount() {
//         console.log('Component Did mount calisti')
//         setInterval(() => {
//             this.setState({...this.state,onemsiz:2});
//         }, 3000);
//     }

//     componentWillUnmount(){
//         console.log('Component will unmount calisti')
//     }

//     render() {
//         console.log('Render olutor')
//         return (
//             <h1>{this.state.title}</h1>
//         )
//     }

// }

export default YDongusu