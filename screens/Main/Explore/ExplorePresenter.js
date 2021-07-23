import React from "react";
import { ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-horizontal: 15px;
`;

const Text = styled.Text``;

const FakeBar = styled.View`
    height: 40px;
    width: 100%;
    background-color: white;
    margin: 40px 0px 10px 0px;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    justify-content: center;
    padding-left: 10px;
`;  // 나는 box-shadow 안되는 듯..

const FakeText = styled.Text`
    font-size: 16px;
`;

export default ({rooms}) => {
    return(
    <Container>
        {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
        ) : (
        <>
        <FakeBar>
            <FakeText>Search..</FakeText>
        </FakeBar>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%" }} 
            contentContainerStyle={{ paddingTop: 30 }}
        >
            {
                rooms.map(room => (
                    <RoomCard 
                        key={room.id} 
                        name={room.name}
                        price={room.price} 
                        photos={room.photos}
                        id={room.id}
                        isFav={room.is_fav}
                        isSuperHost={room.user.superhost}
                        />
                ))
            }
            <TouchableOpacity>
                <Text>Load More</Text>
            </TouchableOpacity>
        </ScrollView>
        </>
        )}
    </Container>
    );
};