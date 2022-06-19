import React, { FC } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import s from './mapStyle.module.css';

interface MapProps{
  center: any
}

//https://www.npmjs.com/package/@react-google-maps/api

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map: FC<MapProps> = ({center}) => {

  const mapRef = React.useRef(undefined)

  const onLoad = React.useCallback(function callback(map: any) {

    mapRef.current = map// ссылка на саму карту
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined
  }, [])

  return (
    <div className={s.container} >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  )
}

export default Map;
