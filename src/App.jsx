import { faDroplet, faMagnifyingGlass, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const App = () => {

  return (
    <div className='grid place-items-center h-screen'>

        <div style={{backgroundColor: '#FAFAFA'}} className="weatherCard flex w-[818px] h-[512px] p-4 border rounded-md shadow-lg">
        <div className="sectionOne w-[70%] h-full">
          <div className="nameAndDate flex justify-between w-full h-[15%] ">
            <div className="inputField flex justify-center w-2/4 h-full ">
              <div className='border m-4 rounded-md p-2 flex items-center'>
                <input type="text" placeholder='Type your city' style={{backgroundColor: '#FAFAFA'}} className=' input focus:outline-none'/>
                <FontAwesomeIcon className='searchBtn p-2 cursor-pointer' icon={faMagnifyingGlass} />
              </div>
            </div>
            <div className="dateField flex justify-center items-center w-2/4 h-full ">
              <p className='text-2xl font-semibold'>18/02/2024</p>
            </div>
          </div>
          <div className="weatherCondition relative w-full h-[55%] ">
            <div className="weatherTemp absolute bottom-8 right-36 text-[11rem]">
              20°
            </div>
            <div className='weatherSpeedHumidity right-[19%] bottom-[42%] text-start absolute'>
              <p className='windSpeed w-[100px] flex justify-between items-center'><FontAwesomeIcon icon={faWind}/> <span className='text-lg font-semibold'>6.1 mph</span></p>
              <p className='humidity w-[100px] flex justify-between items-center'><FontAwesomeIcon icon={faDroplet} /> <span className='mr-6 text-lg font-semibold'>90 %</span></p>
            </div>
            <div className="weatherCondition absolute left-1/2 top-3/4 transform -translate-x-1/2 text-2xl font-semibold">
            Cloudy

            </div>
          </div>
          <div className="weatherNextDay w-full h-[30%]  flex justify-center items-center gap-2">
            <div className="weekDays flex flex-col items-center gap-1 border p-2 rounded-md">
              <div className="day font-semibold text-sm ">
                Today
              </div>
              <div className="weatherTemForDay font-semibold text-3xl">
              20°
              </div>
              <div className="weatherCondiForDay font-semibold text-sm opacity-50">
              Cloudy
              </div>
            </div>
            <div className="weekDays flex flex-col items-center gap-1 border p-2 rounded-md">
              <div className="day font-semibold text-sm">
                Fri
              </div>
              <div className="weatherTemForDay font-semibold text-3xl">
                32°
              </div>
              <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                Sunny
              </div>
            </div>
            <div className="weekDays flex flex-col items-center gap-1 border p-2 rounded-md">
              <div className="day font-semibold text-sm">
                Sat
              </div>
              <div className="weatherTemForDay font-semibold text-3xl">
                12°
              </div>
              <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                Rainy
              </div>
            </div>
            <div className="weekDays flex flex-col items-center gap-1 border p-2 rounded-md">
              <div className="day font-semibold text-sm">
                Sun
              </div>
              <div className="weatherTemForDay font-semibold text-3xl">
                13°
              </div>
              <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                Rainy
              </div>
            </div>
            <div className="weekDays flex flex-col items-center gap-1 border p-2 rounded-md">
              <div className="day font-semibold text-sm">
                Mon
              </div>
              <div className="weatherTemForDay font-semibold text-3xl">
                22°
              </div>
              <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                Mist
              </div>
            </div>
            <div className="weekDays flex flex-col items-center gap-1 border p-2 rounded-md">
              <div className="day font-semibold text-sm">
                Tue
              </div>
              <div className="weatherTemForDay font-semibold text-3xl">
                22°
              </div>
              <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                Mist
              </div>
            </div>
          </div>
        </div>
        <div className="sectionTwo w-[30%] h-full ">
          <div className="salutation w-full flex justify-center items-center flex-col h-[20%] ">
            <div className="salutaionDiv text-2xl font-semibold">
              Good Morning
            </div>
            <div className="dateDiv text-xl font-semibold">
              2:32 PM
            </div>
          </div>
          <div className="weatherCondition flex justify-center items-center flex-col w-full h-[30%] ">
              <div className="weatherCon flex items-center gap-2">
                <div className="weatherTemp font-semibold text-[3rem]">
                  20°
                </div>
                <div className='weatherSpeedHumidity text-start '>
                  <p className='windSpeed flex gap-1 items-center'><FontAwesomeIcon className='text-xs font-semibold' icon={faWind}/> <span className='text-xs font-semibold'>6.1 mph</span></p>
                  <p className='humidity flex gap-1 items-center'><FontAwesomeIcon className='text-xs font-semibold' icon={faDroplet} /> <span className='ml-2 text-xs font-semibold'>90 %</span></p>
                </div>
              </div>
              <div className="weatherCondition font-semibold">
              Cloudy

            </div>
          </div>
          <div className="hourlyForcast w-full h-[50%]">
            <div className="title text-xl font-semibold text-center mb-2">
              Hourly Forcast
            </div>
            <div className="weekForcast flex flex-wrap justify-center items-center gap-2">
              <div className="weekDays w-[62px] flex flex-col items-center gap-1 border p-2 rounded-md">
                <div className="day font-semibold text-sm ">
                  1 PM
                </div>
                <div className="weatherTemForDay font-semibold text-2xl">
                  20°
                </div>
                <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                Cloudy
                </div>
              </div>
              <div className="weekDays w-[62px] flex flex-col items-center gap-1 border p-2 rounded-md">
                <div className="day font-semibold text-sm">
                  2 PM
                </div>
                <div className="weatherTemForDay font-semibold text-2xl">
                  21°
                </div>
                <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                  Rainy
                </div>
              </div>
              <div className="weekDays w-[62px] flex flex-col items-center gap-1 border p-2 rounded-md">
                <div className="day font-semibold text-sm">
                  3 PM
                </div>
                <div className="weatherTemForDay font-semibold text-2xl">
                  21°
                </div>
                <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                  Rainy
                </div>
              </div>
              <div className="weekDays w-[62px] flex flex-col items-center gap-1 border p-2 rounded-md">
                <div className="day font-semibold text-sm">
                  4 PM
                </div>
                <div className="weatherTemForDay font-semibold text-2xl">
                  20°
                </div>
                <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                  Cloudy
                </div>
              </div>
              <div className="weekDays w-[62px] flex flex-col items-center gap-1 border p-2 rounded-md">
                <div className="day font-semibold text-sm">
                  5 PM
                </div>
                <div className="weatherTemForDay font-semibold text-2xl">
                  21°
                </div>
                <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                  Rainy
                </div>
              </div>
              <div className="weekDays w-[62px] flex flex-col items-center gap-1 border p-2 rounded-md">
                <div className="day font-semibold text-sm">
                  6 PM
                </div>
                <div className="weatherTemForDay font-semibold text-2xl">
                  21°
                </div>
                <div className="weatherCondiForDay font-semibold text-sm opacity-50">
                  Rainy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App