import  React, { useEffect } from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, CardActionArea } from '@mui/material';
import "./Card.css"
import { useDispatch, useSelector } from "react-redux";
import Carte from './Carte';
import { GET_PRODUCTS } from '../redux/ActionTypes/ProductTypes';
import { get_product } from '../redux/Action/ProductAction';

const Card = () => {
 
  const product = useSelector((state) => state.productreducer.products);
  console.log(product)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_product());
  }, [dispatch]);

  console.log(product);
  return (

    <div className='Container'>
<div
      className="prod"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {product.map((prod) => (
        <Carte prod={prod} key={prod._id} />
      ))}
    </div>

  </div>
  );
}
export default Card;