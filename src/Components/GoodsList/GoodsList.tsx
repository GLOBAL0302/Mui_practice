import GoodsItem from "../GoodsItem/GoodsItem.tsx";


const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        <div className='goods-list col-md-8'>
            <div className='row'>
                {goods.map((item) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
            </div>
        </div>
    );
};

export default GoodsList;