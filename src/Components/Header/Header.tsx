import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";



const Header = ({handleCart, orderLen}) => {
    return (
        <AppBar position = "static">
            <Toolbar>
                <Typography
                    variant="h5"
                    component="span"
                    sx={{flexGrow:1}}
                >
                    MUI SHOP
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                   <Badge
                       badgeContent={orderLen}
                       color="secondary">
                       <ShoppingBasket/>
                   </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;