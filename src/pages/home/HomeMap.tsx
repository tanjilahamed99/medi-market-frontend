"use client";
import { Map, Marker } from "pigeon-maps";

const HomeMap = () => {
  return (
    <div className="my-5">
      <Map height={400} defaultCenter={[23.9236, 90.7194]} defaultZoom={12}>
        <Marker anchor={[23.9236, 90.7194]} className="text-red-500" />
      </Map>
    </div>
  );
};

export default HomeMap;
