import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Swiper from 'react-native-swiper'

const {width, height} = Dimensions.get("screen");

const Container = styled.View`
    margin-bottom: 25px;
    align-items: flex-start;
`;

const Name = styled.Text`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 7px;
`;

const PriceContainer = styled.View`
    flex-direction: row;
`;

const PriceText = styled.Text``;

const PriceNumber = styled.Text`
    font-weight: 900;
`;

const Superhost = styled.View`
    padding: 3px 5px
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
`;

const PhotosContainer = styled.View`
    margin-bottom: 10px;
    overflow: hidden;
    background-color: red;
    width: 100%;
    height: ${height/4}px;
`;


const SlideImage = styled.Image`
width: 100%;
height: 100%;
`;                          // require로 내부 폴더에서 가져오면 이거 안해도 이미지가 보이지만, source로 온라인 등에서 이미지 가져올때는 이미지 크기 설정안해주면 나타나지를 않는다.



const RoomCard = ({id, isFav, isSuperHost, photos, name, price,}) => {
    console.log(typeof photos)              // photos가 array(? object?)가 아니면 아래 코드들이 실행이 안된다. photos의 length가 없다고 나오면 거의 이 문제. 꼭 확인
    return (
        <Container>
        <PhotosContainer>
            {photos.length === 0 ? (
                <SlideImage 
                    resizeMode="repeat" 
                    source={require("../assets/roomDefault.jpg")} 
                />
                ) : (
                    <Swiper 
                        paginationStyle={{ marginBottom: -15 }}
                        dotColor = {"gray"}
                        activeDotColor = {"white"}
                        >
                        {photos.map(photo => (
                            <SlideImage key={photo.id} source={{ uri: photo.file }} />
                        ))}
                    </Swiper>
                )}
        </PhotosContainer>
        {isSuperHost ? (
            <Superhost>
                <SuperhostText>Superhost</SuperhostText>
            </Superhost>
            ) : null}
        <Name>{name}</Name>
        <PriceContainer><PriceNumber>{price}</PriceNumber><PriceText>/night</PriceText></PriceContainer>
    </Container>
    );
};

RoomCard.propTypes = {
    id: Pt.number,
    isFav: Pt.bool.isRequired,
    isSuperHost: Pt.bool.isRequired,
    photos: Pt.arrayOf(
        Pt.shape({
            file: Pt.string
        })
    ),
    name: Pt.string.isRequired,
    price: Pt.number.isRequired
};

export default RoomCard