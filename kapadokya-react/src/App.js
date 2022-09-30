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

function App() {

  let items = [
    {
      label: 'KATEGORİLER',
      items:[
        {label:'Pantolonlar'},
        {label:'Tshirtler'},
        {label:'Elbiseler'}
      ]
    }
  ];


  return (
    <div className="App">
     <Menubar  />
     <div style={{width:'100%', 
                  minHeight:'300px'}}>
        <div style={{width:'20%',
                  minHeight:'300px',
                  float:'left'}}>
            <Menu style={{width:'100%'}} model={items}/>

        </div>
        <div style={{width:'80%',
                      
                      minHeight:'300px',
                      float:'left'
          }}>
            <div style={{width:'25%', float:'left'}}>
              <Urun 
                title="Super Jean"
                imgSrc="https://stn-nocturne.mncdn.com/Content/media/ProductImg/original/n22k-18504-0109-genis-paca-jean-pantolon-637692833940320526.jpg"
                description="Yok böyle jean. Almayan bin pişman."
              />
            </div>

            <YasamDongusu/>
        </div>
     </div>
    </div>
  );
}

export default App;
