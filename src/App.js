import Course from './component/course/course';
import Cart from './component/cart/cart';
import { useState } from 'react/cjs/react.development';
import {fakeData} from './fakeData/fakeData'
import './app.css'

function App() {
  const [product, setproduct] = useState(fakeData);
  const [cart, setCart] = useState([]);
  const enrollHandler = (course)=>{
    const newCart = [...cart, course] ;
    setCart(newCart);
  }
  return (
    <div className="App">
      <div className="appCourseContainer">
        {
            product.map((product)=>{
              return <Course product={product} enrollHandler={enrollHandler}></Course>;
            })
        }
      </div>
      <div className="appCartContainer">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
