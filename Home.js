import React from 'react';
import './Home.css'
import Product from "./Product";
function Home() {
    return (
        <div
            className="home">
            <div
                className="home_container">
                <img 
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg" />

<div
    className="home_row">
< Product 
id="123465789"
title='The lean Startup' 
price={29.99} image='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg' 
rating={5} />
< Product id="123456789"
title="Computors and accessories"
price="239.9"
rating={4}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />
</div>
<div
    className="home_row">
< Product 
id="123465789"
title='The lean Startup' 
price={29.99} image='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg' 
rating={5} />
< Product id="123456789"
title="Computors and accessories"
price="239.9"
rating={4}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />
< Product 
id="123465789"
title='Oculus' 
price={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg" 
rating={5} />
</div>
<div className="home_row">
< Product id="123456789"
title="Laptops and PCs"
price="139.9"
rating={4}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"/>
< Product 
id="123465589"
title='Home fitness and Workout' 
price={124} image='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg' 
rating={5} />
< Product id="123456889"
title="Laptops and Accessories"
price="256.9"
rating={4}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"/>
</div>

<div
    className="home_row">
< Product 
id="123465789"
title='Television and Accessories' 
price={1123.99} image='https://m.media-amazon.com/images/I/71Ao8Im97TL._AC_UL320_.jpg' 
rating={5} />
< Product id="123456789"
title="Computors and accessories"
price="239.9"
rating={4}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg" />


</div>
 </div>
</div>
    );
}

export default Home
