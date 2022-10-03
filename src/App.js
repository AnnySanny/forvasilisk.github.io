
import './App.css';
import { colorplate } from './data';
function App() {
  

 let res = colorplate.map(function(item) {
  
    let d = item.color
    return <tr key={item.id}>
       <td>{item.artkl}</td>
       <td><img   width="200" height="90"  style= {{backgroundColor: d}} /></td>
       <td>{item.artkl}</td>
       <td><img   width="200" height="90" style= {{backgroundColor: d }} /></td>
       <td>{item.artkl}</td>
       <td><img   width="200" height="90" style= {{backgroundColor: d }} /></td>
       <td>{item.artkl}</td>
       <td><img   width="200" height="90" style= {{backgroundColor: d }} /></td>
        
    </tr>;
 });

 return  (<table>
    <thead>
       <tr>
          <td>Артикль</td>
          <td>Картинка</td>
          <td>Артикль</td>
          <td>Картинка</td>
          <td>Артикль</td>
          <td>Картинка</td>
          <td>Артикль</td>
          <td>Картинка</td>
       </tr>
    </thead>
    <tbody>
       {res}
    </tbody>
    
 </table>
  );
}

export default App;
