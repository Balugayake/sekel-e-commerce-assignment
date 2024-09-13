import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productTypeData } from '../features/slices/type';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar() {
    const navigate = useNavigate();
  return (
    <div className="NavBar" style={{ display: 'flex', flexDirection: 'row' ,justifyContent:"space-between", border: '1px solid black', backgroundColor: 'lightgray', borderRadius: '5px', padding: '10px', marginBottom: '15px'}}>
      <h3 onClick={() => navigate('/home')} style={{cursor:"pointer"}}>E-Commerce Products</h3>
      <h3 onClick={() => navigate('/cart') } style={{cursor:"pointer"}}>MY Cart <ShoppingCartIcon color='primary'/></h3>
    </div>
  );
}

export default NavBar;
