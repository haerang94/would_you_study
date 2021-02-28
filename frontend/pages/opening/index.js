import React,{useState,useEffect} from 'react'
import {Container,ImgBox,FlexBox,pStyle,Button,Nav} from './openingStyle';
import {openingMent} from 'data/openingMent';
import Image from 'next/image';


const Opening = () => {
    const [page, setPage] = useState(0);
    useEffect(() => {
        
        return () => {
                    }
    }, [])

    const prevBtn=()=>{
        const prevPage=page-1;
        setPage(prevPage<0?5:prevPage);
    }

    const nextBtn=()=>{
        setPage((page+1)%6);
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
                <p css={pStyle}>{openingMent[0]}</p>
                <Button onClick={nextBtn}>다음</Button>
            </FlexBox>
        </Container>
    )
}

export default Opening
