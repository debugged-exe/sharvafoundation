import React from 'react';
import sharvalogo from './sharva.png';

const PaymentsScanner = () => {
    return (
        <div style={{height:"90vh"}} className='pa2 pt5 tc flex flex-column justify-center items-center'>
            <div className="flex justify-center">
                <img src={sharvalogo}  className="join-logo" alt="logo"/>
            </div>
            <p className='ph6-ns w-50-ns mt3'>We make a living by what we get, but we make a life by what we give” These Words define the very energy that flows through the heart of Sharva foundation. We here at Sharva Foundation believe in building a community through giving. Our young minds and passion for this is what strives us towards giving the best! Although young, we look forward to do small things with great love. Your contribution will help us provide aid to  more underpriviledged people.</p>
            {/* <img className='mv3' height='200px' width='200px' src={code} alt="QR Code Scanner"/> */}
            <p className='f3 b mt3'>Account No.: 0679040100004767</p>
            <p className='b mt3'>IFSC Code: JAKA0GUJRAL</p>
            <p className='b mt3 mb2'>Name: SHARVA FOUNDATION</p>
            <p className='b'>In case of any query contact: +91 95961 56678</p>
        </div>
    )
}

export default PaymentsScanner;