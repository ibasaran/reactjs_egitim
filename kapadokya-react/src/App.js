import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { Menubar } from 'primereact/menubar';                          //icons
import { Menu } from 'primereact/menu';
import Urun from './components/Urun';
import YasamDongusu from './components/YasamDongusu'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function App() {

  let urunlistsi = [
    {
      title:'Super Jean',
      imgSrc: 'https://stn-nocturne.mncdn.com/Content/media/ProductImg/original/n22k-18504-0109-genis-paca-jean-pantolon-637692833940320526.jpg',
      description: 'Jean açıklama',
      kategorisi: 'pantolon'
    },
    {
      title: 'Bambaşa Jean',
      imgSrc: 'https://ktnimg2.mncdn.com/products/2022/06/20/2437553/aff5f86e-cfa7-4e79-af8a-2a13ea7ba25a_size624x818.jpg',
      description: 'Yok boylesi',
      kategorisi: 'pantolon'
    },
    {
      title: 'Ekstra Jean',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCc2fzSm7khYuUgp7pSxmCURMeQaNwAANjTw&usqp=CAU',
      description: 'Ozel seri',
      kategorisi: 'pantolon'
    },
    {
      title: 'Tshirt Süper',
      imgSrc: 'https://m.media-amazon.com/images/I/61gqx7hslmL._UX569_.jpg',
      description: 'Ozel seri',
      kategorisi: 'tshirt'
    },
    {
      title: 'Tshirt Süper 2',
      imgSrc: 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/F9164BDE70964F37836638A674960803/M10186027_6.jpg?fit=inside|540:540',
      description: 'Ozel seri',
      kategorisi: 'tshirt'
    },
  ]



  const [urunler,setUrunler] = useState(urunlistsi)
  const [urunEkleDialogGoster, setUrunEkleDialogGoster] = useState(false)

  let items = [
    {
      label: 'KATEGORİLER',
      items:[
        {label:'Pantolonlar', command: () => {
          const pantolonUrunListesi = urunlistsi.filter(urun => {
            if (urun.kategorisi == 'pantolon') {
              return urun
            }
          })
      
          setUrunler(pantolonUrunListesi)
        }},
        {label:'Tshirtler', command: () => {
          const tshirtUrunListesi = urunlistsi.filter(urun => {
            if (urun.kategorisi == 'tshirt') {
              return urun
            }
          })
      
          setUrunler(tshirtUrunListesi)
        }},
        {label:'Elbiseler'}
      ]
    }
  ];

  const pantolonlarButtonClick = () => {
    const pantolonUrunListesi = urunlistsi.filter(urun => {
      if (urun.kategorisi == 'pantolon') {
        return urun
      }
    })

    setUrunler(pantolonUrunListesi)
  }


  return (
    <div className="App">
     <Menubar  />
     
     <div style={{width:'100%', 
                  minHeight:'300px'}}>
        <div style={{width:'20%',
                  minHeight:'300px',
                  float:'left'}}>
            <Button label='YENİ URUN EKLE' onClick={() => setUrunEkleDialogGoster(true)}></Button>
            <Menu style={{width:'100%'}} model={items}/>
            <Button label='Pantolonlar' onClick={pantolonlarButtonClick}></Button>

        </div>
        <div style={{width:'80%',
                      
                      minHeight:'300px',
                      float:'left'
          }}>
            
          {
            urunler.map( (urun,index) => {
              return (
                <div style={{width:'25%', float:'left'}}>
                  <Urun 
                    title={urun.title}
                    imgSrc={urun.imgSrc}
                    description={urun.description}
                  />
                </div>
              )
            } )
          }


{/* <div style={{width:'25%', float:'left'}}>
              <Urun 
                title="Super Jean"
                imgSrc=""
                description="Yok böyle jean. Almayan bin pişman."
              />
            </div> */}

        </div>
     </div>


      <Dialog visible={urunEkleDialogGoster}>
            Merhaba Ürün Ekleme
      </Dialog>

    </div>
  );
}

export default App;
