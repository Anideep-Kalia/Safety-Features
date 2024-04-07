import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes, FaSave } from 'react-icons/fa'
import axios from 'axios';
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState, useEffect } from 'react'

let center = { lat: 29.6857, lng: 76.9905 }
let dest

function App() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyBVzhfAB_XLqaayJkOSuThEdaK4vifdxAI',
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [policeStations, setPoliceStations] = useState([]);
    const [markers, setMarkers] = useState([]);

    const destiantionRef = useRef()

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                center = { lat: position.coords.latitude, lng: position.coords.longitude };
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleClick = (e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            },
        ]);
        console.log(markers)
    };

    const handleClearMarkers = () => {
        setMarkers([]);
    };

    const getNearbyPoliceStations = async () => {
        if (!center) return;

        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat},${center.lng}&radius=5000&type=police&key=AIzaSyBVzhfAB_XLqaayJkOSuThEdaK4vifdxAI`
        );

        setPoliceStations(response.data.results);
    };

    async function destinationRoute() {
        if (destiantionRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${destiantionRef.current.value}&key=AIzaSyBVzhfAB_XLqaayJkOSuThEdaK4vifdxAI`);
        const destination = response.data.results[0].geometry.location;
        dest = { lat: destination.lat, lng: destination.lng };
        setMarkers((current) => [
            ...current,
            {
                lat: destination.lat,
                lng: destination.lng,
            }])
        if (map) {
            map.panTo(dest);
            map.setZoom(13);
        }
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: center,
                destination: destiantionRef.current.value,
                travelMode: 'WALKING',
            },
            (result, status) => {
                if (status === 'OK') {
                    // Set the distance and duration states
                    const leg = result.routes[0].legs[0];
                    setDistance(leg.distance.text);
                    setDuration(leg.duration.text);
                } else {
                    console.error('Directions request failed due to ' + status);
                }
            }
        );
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        destiantionRef.current.value = ''
    }


    useEffect(() => {
        getNearbyPoliceStations();
    }, [center]);

    if (!isLoaded) {
        return <SkeletonText />
    }


    return (
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            h='100vh'
            w='100vw'
        >
            <Box position='absolute' left={0} top={0} h='90%' w='100%'>
                {/* Google Map Box */}
                <GoogleMap
                    center={center}
                    zoom={15}
                    onClick={handleClick}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >

                    <Marker position={center} />
                    {policeStations.map((station, index) => (
                        <Marker
                            key={index}
                            position={{ lat: station.geometry.location.lat, lng: station.geometry.location.lng }}
                            icon={{
                                url: 'police-badge.png', // URL of the marker icon
                                scaledSize: new window.google.maps.Size(32, 32) // Adjust the size as needed
                            }}
                            title={station.name}
                        />
                    ))}
                    {markers.map((marker, index) => (
                        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
                    ))}
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </Box>
            <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='1'
            >
                <HStack spacing={2} justifyContent='space-between'>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input
                                type='text'
                                placeholder='Destination'
                                ref={destiantionRef}
                            />
                        </Autocomplete>
                    </Box>

                    <ButtonGroup>
                        <Button colorScheme='pink' type='submit' onClick={destinationRoute}>
                            Calculate Route
                        </Button>
                        <IconButton
                            aria-label='center back'
                            icon={<FaTimes />}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
                <HStack spacing={4} mt={4} justifyContent='space-between'>
                    <Text>Distance: {distance} </Text>
                    <Text>Duration: {duration} </Text>
                    <IconButton
                        aria-label='center back'
                        icon={<FaTimes />}
                        isRound
                        onClick={() => {
                            handleClearMarkers();
                        }}
                    />
                    <IconButton
                        aria-label='center back'
                        icon={<FaLocationArrow />}
                        isRound
                        onClick={() => {
                            map.panTo(center)
                            map.setZoom(15)
                        }}
                    />
                    <IconButton
              aria-label='center back'
              icon={<FaSave />}
              isRound
              onClick={() => {
              }}
            />
                </HStack>
            </Box>
        </Flex>
    )
}

export default App
