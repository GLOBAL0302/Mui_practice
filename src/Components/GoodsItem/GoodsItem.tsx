import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const GoodsItem = (props) => {
    const { name, price, setOrder , poster} = props;

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{height:"100%"}}
            >
                <CardMedia
                    component="img"
                    sx={{height:140}}
                    image={poster}
                    alt={name}
                    title={name}
                />
                <CardContent className='card-body'>
                    <Typography
                        variant="h6"
                        component="h3"
                    >{name}</Typography>
                    <Typography variant="body1"
                        className='card-text'>
                        Цена: {price} руб.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;