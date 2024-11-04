'use client'

import { useState, useRef } from 'react'
import { Search } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Button } from '@/app/supervisor/components/button'
import { Input } from '@/app/supervisor/components/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/supervisor/components/card'
// import { Map } from 'leaflet'

type Location = {
  city: string
  country: string
  trainees: number
  position: [number, number]
}

type MapViewMode = 'global' | 'density'

const locations: Location[] = [
  { city: 'Paris', country: 'France', trainees: 45, position: [48.8566, 2.3522] },
  { city: 'Tokyo', country: 'Japan', trainees: 38, position: [35.6895, 139.6917] },
  { city: 'Dubai', country: 'UAE', trainees: 32, position: [25.2048, 55.2708] },
  { city: 'New York', country: 'USA', trainees: 28, position: [40.7128, -74.0060] },
]

const stats = {
  activePrograms: 124,
  trainingCenters: 168,
  avgDuration: '6 weeks'
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 20,
  lng: 0
}

console.log('All env:', process.env)
console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
console.log('API Key loaded:', !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)

// Fix for default markers
const icon = L.divIcon({
  className: 'custom-marker',
  html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="5" fill="#3b82f6"/>
    <path d="M4 20C4 17.2386 7.58172 15 12 15C16.4183 15 20 17.2386 20 20" stroke="#3b82f6" stroke-width="2"/>
  </svg>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24]
})

export default function Component() {
  const [mapViewMode, setMapViewMode] = useState<MapViewMode>('global')
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [map, setMap] = useState<L.Map | null>(null)

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location)
    if (map) {
      map.setView(location.position, 10)
    }
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Global Trainee Locations</h1>
          <p className="text-muted-foreground">Real-time view of trainee placements</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search locations..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filter View</Button>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-4 mb-4">
            <Button
              variant={mapViewMode === 'global' ? 'default' : 'outline'}
              className={mapViewMode === 'global' ? 'bg-blue-100 hover:bg-blue-200 text-blue-800' : ''}
              onClick={() => setMapViewMode('global')}
            >
              Global View
            </Button>
            <Button
              variant={mapViewMode === 'density' ? 'default' : 'outline'}
              onClick={() => setMapViewMode('density')}
            >
              Density
            </Button>
          </div>
          <div className="h-[400px] w-full">
            <MapContainer 
              center={[20, 0]} 
              zoom={2} 
              style={{ height: '100%', width: '100%' }}
              ref={setMap}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location) => (
                <Marker 
                  key={location.city} 
                  position={location.position}
                  icon={icon}
                >
                  <Popup>
                    <div>
                      <h3 className="font-semibold">{location.city}, {location.country}</h3>
                      <p>Trainees: {location.trainees}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.activePrograms}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Training Centers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.trainingCenters}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{stats.avgDuration}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Location Overview</CardTitle>
          <p className="text-sm text-muted-foreground">
            Total Locations: {stats.trainingCenters} Training Centers • 24 Countries
          </p>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {locations.map((location) => (
              <div 
                key={location.city} 
                className={`py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 ${
                  selectedLocation?.city === location.city ? 'bg-blue-100' : ''
                }`}
                onClick={() => handleLocationClick(location)}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <div className="font-medium">{location.city}</div>
                    <div className="text-sm text-muted-foreground">{location.country}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{location.trainees}</div>
                  <div className="text-sm text-muted-foreground">Trainees</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}