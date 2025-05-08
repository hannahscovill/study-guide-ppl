import { useState } from "react";
import './CoefficientOfLiftCount.css'

const CoefficientOfLiftCalculation = () => {

    const [flaps, setFlaps] = useState('');
    const [atmosphericPressure, setAtmosphericPressure] = useState('');

    const inoutStyle = { display: 'inline-block', innerHeight:'30px' }



    return (
        <>
            {/* <label >
                Name (4 to 8 characters):
            </label> */}

            <h1>{flaps} * {atmosphericPressure} = hello</h1>
            <p>
                <form style={{display:'flex', flexDirection:'row'}}>

                    <input placeholder="hello" style={inoutStyle} type="text" id="name" name="name" onChange={event => setFlaps(event.target.value)} /><p>*</p>
                    <input placeholder="atmospheric pressure" style={inoutStyle} type="text" id="name" name="name" onChange={event => setAtmosphericPressure(event.target.value)} />
                </form>
            </p>
        </>
    )
}

export default CoefficientOfLiftCalculation;