import React,{useState,useEffect} from 'react'
import {Container,ImgBox,FlexBox,pStyle,Button} from './openingStyle';
import {openingMent} from 'data/openingMent';
import Image from 'next/image';


const Opening = () => {
    useEffect(() => {
        
        return () => {
                    }
    }, [])

    return (
        <Container>
            <ImgBox>
                <Image src={'/static/opening-1.png'} layout="fill" objectFit="cover" ></Image>
            </ImgBox>
            <FlexBox>
                <Button>이전</Button>
                <p css={pStyle}>{openingMent[0]}</p>
                <Button>다음</Button>
            </FlexBox>
        </Container>
    )
}

export default Opening
