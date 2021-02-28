import React from 'react'
import * as styles from './openingStyle';
import {openingMent} from 'data/openingMent';
import Image from 'next/image';


const Opening = () => {
    return (
        <styles.Container>
            <styles.ImgBox>
                <Image src={'/static/opening-1.png'} layout="fill" objectFit="contain"></Image>
            </styles.ImgBox>
            <p css={styles.pStyle}>{openingMent[0]}</p>
        </styles.Container>
    )
}

export default Opening
