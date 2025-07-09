import { useState } from "react";
import './CoefficientOfLiftCount.css'

const CoefficientOfLiftCalculation = () => {

    const [chordLine, setChordLine] = useState(0);
    const [flaps, setFlaps] = useState(0);
    const [atmosphericPressure, setAtmosphericPressure] = useState(0);
    const [airspeed, setAirspeed] = useState(0);
    // const [chordLine, setChordLine] = useState('');
    // const [flaps, setFlaps] = useState('');
    // const [atmosphericPressure, setAtmosphericPressure] = useState('');
    // const [airspeed, setAirspeed] = useState('');
    // const [lift, setLift] = useState(`CL: ${chordLine} | SA: ${flaps} | P: ${atmosphericPressure} | V: ${airspeed}`);
    // const lift = `CL: ${parseInt(chordLine)} | SA: ${parseInt(flaps)} | P: ${parseInt(atmosphericPressure)} | V: ${parseInt(airspeed)}`
    // const lift = `CL: ${chordLine} | SA: ${flaps} | P: ${atmosphericPressure} | V: ${airspeed}`
    const lift = chordLine * flaps * (.5 * atmosphericPressure) * airspeed

    const inoutStyle = { display: 'inline-block', innerHeight: '30px' }

    // const handleCoefficientLiftChange = (changedValueName, value) => {
    //     switch (true) {
    //         case changedValueName == 'cl': setChordLine(value)
    //             break;
    //         case changedValueName == 'sa': setFlaps(value)
    //             break;
    //         case changedValueName == 'p': setAtmosphericPressure(value)
    //             break;
    //         case changedValueName == 'v': setAirspeed(value)
    //             break;
    //     }
    //     const cl = parseInt(chordLine)
    //     const sa = parseInt(flaps)
    //     const p = parseInt(atmosphericPressure)
    //     const v = parseInt(airspeed)

    //     // setLift(`CL: ${chordLine} | SA: ${flaps} | P: ${atmosphericPressure} | V: ${airspeed}`)
    //     // setLift(`CL: ${cl} | SA: ${sa} | P: ${p} | V: ${v}`)
    // }

    // L=CL * SA * .5P * V

    return (
        <>
            {/* <label >
                Name (4 to 8 characters):
            </label> */}

            <h1>{chordLine} * {flaps} * .5 {atmosphericPressure} * {airspeed} = {lift}</h1>
            <p>
                <form style={{ display: 'flex', flexDirection: 'row' }}>

                    {/* <input placeholder="chord line" style={inoutStyle} type="text" id="name" name="name" onChange={event => handleCoefficientLiftChange('cl', event.target.value)} />
                    <p> * </p>
                    <input placeholder="flaps" style={inoutStyle} type="text" id="name" name="name" onChange={event => handleCoefficientLiftChange('sa', event.target.value)} />
                    <p> * </p>
                    <input placeholder="atmospheric pressure" style={inoutStyle} type="text" id="name" name="name" onChange={event => handleCoefficientLiftChange('p', event.target.value)} />
                    <p> * </p>
                    <input placeholder="airspeed" style={inoutStyle} type="text" id="name" name="name" onChange={event => handleCoefficientLiftChange('v', event.target.value)} /> */}

                    <input placeholder="chord line" style={inoutStyle} type="text" id="name" name="name" onChange={event => setChordLine(event.target.value)} />
                    <p> * </p>
                    <input placeholder="flaps" style={inoutStyle} type="text" id="name" name="name" onChange={event => setFlaps(event.target.value)} />
                    <p> * </p>
                    <input placeholder="atmospheric pressure" style={inoutStyle} type="text" id="name" name="name" onChange={event => setAtmosphericPressure(event.target.value)} />
                    <p> * </p>
                    <input placeholder="airspeed" style={inoutStyle} type="text" id="name" name="name" onChange={event => setAirspeed(event.target.value)} />


                    <p> = </p>
                    <p>{lift}</p>
                    {/* <h1>{lift}</h1> */}
                    {/* <input placeholder="lift" style={inoutStyle} type="text" id="name" name="name" onChange={event => setAtmosphericPressure(event.target.value)} /> */}
                </form>
            </p>
        </>
    )
}

export default CoefficientOfLiftCalculation;