import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "../BasketItem/BasketItem.tsx";

const Basket = (props) => {
    const {
        closeCart,
        cartOpen,
        order=[],
        removeFromOrder
    } = props
    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width:"400px"}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary="Basket"/>
                </ListItem>
                <Divider/>
                {!order.length?(
                    <ListItem>Basket is empty</ListItem>
                ):(
                    <>
                    {order.map((item)=>(
                        <BasketItem
                            key={item.name}
                            removeFromOrder={removeFromOrder}
                            {...item}
                        />
                        ))}
                        <Divider/>
                        <ListItem>
                            <Typography sx={{fontWeight:700}}>
                                Total:{""}
                                {order.reduce((acc, item)=>{
                                    return acc + item.price * item.quantity
                                }, 0)}{""}
                            </Typography>
                        </ListItem>
                    </>
                )}
            </List>
        </Drawer>
    );
};

export default Basket;