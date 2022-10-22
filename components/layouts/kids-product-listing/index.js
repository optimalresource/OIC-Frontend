import React, {Fragment} from 'react';
import KidsProductItem from "../kids-product-item";
import styles from './KidsProductListing.module.css'
import {products} from '../../../data/products'
const KidsProductListing = () => {
    return (
            <div className={styles.container}>
                <div className={styles.producttopic}>Oasis Kids</div>
                <div className={styles.listbody}>
                {
                    products.kids.map(({id, ...otherProps}) => <KidsProductItem key={id} {...otherProps}/>)
                }
                </div>

               <div className={styles.paybutton}>
               <a href=""><button>&#8358;{products.kids[0].price} </button></a>
               </div>

            </div>
            )
}




export default KidsProductListing;

