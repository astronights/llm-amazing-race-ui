import Chat from './Chat';
import Blueprint from './Blueprint';
import { Flex } from '@chakra-ui/react';

import '../assets/app.sass';
import type { City, Play } from '../types';
import { useState } from 'react';
import Stats from './Stats';


let location: City = {
    name: '',
    lat: 0.0,
    lng: 0.0
}

let play: Play = {
    name: '',
    progress: [],
    start: 0,
    end: 0
}

const App = () => {
    // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow
    const color = "teal";

    const [status, setStatus] = useState(true);
    const [city, setCity] = useState(location);
    const [progress, setProgress] = useState(play);

    const updateName = (name: string) => {
        setProgress({ ...progress, name: name })
    }

    const updateCity = (lat: number, lng: number) => {
        setCity({ name: '', lat: lat, lng: lng })
    }

    return (
        <>
            <Flex>
                {!status ? (
                    <Blueprint
                        color={color}
                        city={city}
                        progress={progress}
                        updateStatus={setStatus}
                        updateCity={setCity}
                        updateName={updateName} />
                ) : (
                    <Stats
                        color={color}
                        city={city}
                        progress={progress}
                        updateStatus={setStatus}
                        updateCity={setCity}
                        updateName={updateName} />
                )}

                <Chat color={color} name={progress.name} city={city} updateCoor={updateCity} />
            </Flex>
        </>
    );
}

export default App;