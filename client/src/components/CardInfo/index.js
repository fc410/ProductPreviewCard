import ProductImage from '../Assets/image-product-desktop.jpg';
import Cart from '../Assets/icon-cart.svg';

const CardInfo = () => {
    return(
        <div className="card-main-content">
            <img src={ProductImage} alt='product' className='product-img'/>
            <div className='card-info'>
                <p className='product-type'>
                    Perfume
                </p>
                <p className='product-name'>
                    Gabriel Essence Eau De Parfum
                </p>
                <p className='product-info'>
                    A floral, solar and voluptuous interpretation composed by 
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className='product-prices'>
                    <p className='discounted-price'>
                        $149.99
                    </p>
                    <p className='original-price'>
                        $169.99
                    </p>
                </div>

                <button className='info-button'>
                    <img src={Cart} alt='cart' className='cart-img'/> Add to cart
                </button>
            </div>
        </div>
    );
}

export default CardInfo;