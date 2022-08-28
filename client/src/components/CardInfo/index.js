import ProductImage from '../Assets/image-product-desktop.jpg';
import Cart from '../Assets/icon-cart.svg';

const CardInfo = () => {
    return(
        <div className="card-main-content">
            <img src={ProductImage} alt='product' className='product-img'/>
            <div className='card-info'>
                <p>
                    Perfume
                </p>
                <p>
                    Gabriel Essence Eau De Parfum
                </p>
                <p>
                    A floral, solar and voluptuous interpretation composed by 
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className='product-prices'>
                    <p>
                        $149.99
                    </p>
                    <p>
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