import React from 'react';
import Product from "../../Components/Product/Product";
import './Home.css'

function Home() {
    return <div>
        <div className="home">

            <div className="homeRow">
                <Product
                    id="1"
                    title="Fundamental Analysis"
                    des=""
                    price={187425}
                    rating={5}
                    image="https://www.tickertape.in/blog/wp-content/uploads/2021/05/fundamental-analysis.png"
                />
                <Product
                    id="2"
                    title="Technical Analysis"
                    des=""
                    price={346499}
                    rating={5}
                    image="https://news.tradimo.com/wp-content/uploads/2019/11/technicalanalysis.jpg"
                />
                <Product
                    id="3"
                    title="Crypto Trading & Investments"
                    des=""
                    price={61000}
                    rating={5}
                    image="https://www.trustetc.com/wp-content/uploads/2018/09/cryptocurrency-accepted.jpg"
                />
            </div>
        </div>
    </div>;
}

export default Home;
