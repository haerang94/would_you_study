import React,{useState,useEffect} from 'react'
import {Container,ImgBox,FlexBox,pStyle,Button,Nav} from './openingStyle';
import {openingMent} from 'data/openingMent';
import Image from 'next/image';
import {IMG_LIST_LENGTH} from 'utils/constant'


const Opening = () => {
    const [page, setPage] = useState(0);
    useEffect(() => {
        
        return () => {
                    }
    }, [])

    const prevBtn=()=>{
        const prevPage=page-1;
        setPage(prevPage<0?IMG_LIST_LENGTH-1:prevPage);
    }

    const nextBtn=()=>{
        setPage((page+1)%IMG_LIST_LENGTH);
    }

    return (
        <Container>
            <Nav>
                <Image src={'/static/logo.png'} width={100} height={80}></Image>
            </Nav>
            <ImgBox>
                <Image src={`/static/opening-${page+1}.png`} layout="fill" objectFit="contain" ></Image>
            </ImgBox>
            <FlexBox>
                <Button onClick={prevBtn}>이전</Button>
                <p css={pStyle}>{openingMent[`${page}`]}</p>
                <Button onClick={nextBtn}>다음</Button>
            </FlexBox>
        </Container>
    )
}

export default Opening
