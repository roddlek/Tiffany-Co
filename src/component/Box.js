import React from 'react';
//컴포넌트 연결
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

function Box({children}){
    return(
        <div id='#wrap'>
            <Header />
            {children}
            <Aside />
            <Footer />
        </div>
    )
}

export default Box;