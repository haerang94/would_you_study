import React from 'react'
import * as styles from './openingStyle';
import {openingMent} from 'data/openingMent';
import Image from 'next/image';
import one from './opening-1.png'

const Opening = () => {
    return (
        <styles.Container>
            <p>{openingMent[0]}</p> 
            {/* <img src='static/opening-2.png'></img> */}
            <Image src={one} layout="fill"></Image>
        </styles.Container>
    )
}

export default Opening
