import React, {Fragment} from 'react';
import AdultsProductItem from "../adults-product-item";
import styles from './AdultsProductListing.module.css'
import {products} from '../../../data/products'
const AdultsProductListing = () => {
    return (
       <Fragment>

            <div className={styles.container}>
                <div className={styles.toptitle}>

                    <div className={styles.topic}>Conference Merchandise</div>
                    <div className={styles.subtopic}>Join us in making conference as colourful as possible and in spreading the message of Christ!</div>

                </div>
                <div className={styles.productstopic}>Oasis Adults</div>
                <div className={styles.listbody}>
               {
                   products.adults.map(({id, ...otherProps}) => <AdultsProductItem key={id} {...otherProps}/>)
               }
                </div>

            </div>

           </Fragment>
    )
}




export default AdultsProductListing;

