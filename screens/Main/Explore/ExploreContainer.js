import React, { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, rooms, page }) => {
    useEffect(() => {               // component mount가 useEffect를 사용할 때마다 execute 될 것이다.
        getRooms();                 // 이렇게 하면, 우리는 rooms들의 첫 묶음들을 fetch 하는 것이다.
    }, []);
    return <ExplorePresenter rooms={rooms} />; // ExplorePresenter에 rooms를 보낸다? 하지만 아직 console.log를 보면, rooms이 비어있는 array이다. roomsSlice.js 에서 const { data } 부분을 끝내지 않았기 때문 -> /api/v1/rooms/를 보면 count, next, previous, results 값이 있는데, results 값을 받아야 한다.
};