---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InvisibilityCloak from '@site/src/components/InvisibilityCloak/InvisibilityCloak';
import VideoPlayer from '@site/src/components/VideoPlayer/VideoPlayer';

# Flight Instruments

## Pitot/Static Instruments
### Airspeed Indicator

Tries to figure out just the ram air pressure
less accurate at higher altitudes and temperatures
Fed by the pitot tube
- Takes in both ram air pressure and static air pressure
Compares two different pressures

"Calibrated leak"

If you lea


### Vertical Airspeed indicator
Tells you if you're climbing or descending
Calibrated leak goes into the casing

### Altimiter
Anaroid wafer stack expands and contracts
29.92 standard at sea level


## Pitot/Static System Errors

|     | Airspeed | Altimiter | Vertical Speed |
| --- | -------- | --------- | -------------- |
| Front of pitot blocked, static clear ||||
| Front and drain of pitot blocked||||
| Pitot clear, static blocked ||||


## Gyroscopic Instruments
Ther's an engine driven vacuum pump moving gyroscopes in the system

### Rigitity in Space
As long as a gyroscope is spinning, it will be able to stay in a "fixed" position


## Heading indicator
Gimbal rotation

The airplane is spinning around the 


## Gyroscopic procession
Why do we care about this in the instruments

## Turn Coordinator
Candted Gyro

Operates from electrical power
The ball is just from gravity in fluid

Skid is tokyo drifting, you can end up in a spin
On base to final you sometimes encourage a skid
Also taking off and turning crosswind is when you'll spin

Uses rigity in space

## Magnetic Compass

True north and magnetic north -> Magnetic variation

UNOS
Undershoot north, overshoot south

ANDS
Accellerate North Decelerate South


Magnetic deviation
The metal in the plane interferes with the metal in the compass

Airplanes have a compass card that 


## VOR
Very High Frequency Omnidirectional Range
VOR Station

After "Tuning in a VOR" You can fingure out where in relation to the VOR you are

Pulsing and Sweeping signal

## Course Deviation Indicator

If you did dual VOR navigation you'd ude two CDIs

You get the VOR frequencies from your chart

Turn the OBS knob to change the heading, tune in your CDI through OBS

### Errors

Scalping - it will swing back and forth. you can still use it by averaging the center of where it's swinging

The US has a VOR "minimum operational network" where you could 

You can use DME for measuring distance from a VOR


### Distance Measuring Equipment
DME measures distance in slant range distance
Not good at it's job when you're close and high. Accurate when you're low and far away

Do we need to know more than abode?


A VOR _has_ DME most of the time if it has DME at all. twin oakes planes have GPS instead of DME

### Horizontal Situation Indicator HSI
Usually wont have the analog version of this in most (Twin Oaks) cesnas
The cesnas have a G5


### Electronic instruments

Combines your entire 6pack into one instrument

## magnetometer
Heading comes from magnetometer - located in the tail, the wing or in cesnas the strut. It measures the change in the flow of an electronic current

## Air Data computer
rv12s
448
35H

Those iwthout an air temperature probe uses ... something else. Without the probe it cant calculate true airspeed

## Attitude and Headeing Reference System
Combination of magnitometer, accelerometer and a fake gyroscope
In the g5s it

Air inertia sensor ..??




## Quiz

<details>
    <summary><strong>1. What are the primary flight controls? What do they control?</strong></summary>

    Ailerons - Roll  
    Rudder - Yaw  
    Elevator - Pitch
</details>
<br/>

<details>
    <summary><strong>2. What are the secondary flight controls? What do they do?</strong></summary>

    Trim - Helps hold an attitude  
    Flaps - Helps fly a steeper descent at a constant airspeed. Greater lift for slower speed  
    Spoilers - Spoil the lift on the surface of the wing, putting the weight on the wheels
</details>
<br/>

<details>
    <summary><strong>3. What are the 4 strokes of our aircraft’s internal combustion engines?</strong></summary>

    Intake, Compression, Combustion, Exhaust
</details>
<br/>

<details>
    <summary><strong>4. What is detonation? Pre Ignition? How do you fix them?</strong></summary>

    Detonation - When the fuel/air mixture explodes rather than burns evenly  
    Pre Ignition - Hot spots on the cylinder ignite the fuel/air mixture early
</details>
<br/>

<details>
    <summary><strong>5. Why is the propeller twisted?</strong></summary>

    Greater angle of attack at the hub to provide equal lift across the blade
</details>
<br/>

<details>
    <summary><strong>6. How does fuel get drawn into the carburetor?</strong></summary>

    Venturi effect creates a low pressure zone, sucking the fuel into the air
</details>
<br/>

<details>
    <summary><strong>7. Where does ice form in the carb and under what conditions? If it’s 60 degrees outside (F) can carb ice still form? 70? 80?</strong></summary>

    When that low pressure zone is formed, the temp drops and ice will form there. Ice can form usually under 70 degrees but when it’s hotter on the ground, at altitude it will most often be cooler, so the risk is basically always there. Even if there is no visible moisture in the air, like on a clear summer day.
</details>
<br/>

<details>
    <summary><strong>8. What are magneto’s? How are they connected to the rest of the ignition system?</strong></summary>

    Self-contained electrical generator units with a spinning electromagnet inside that each provide power to one of each of the two spark plugs on each cylinder, essentially allowing for one of them to run the engine if the other one fails
</details>
<br/>

<details>
    <summary><strong>9. How do carb and cabin heat work?</strong></summary>

    Air for the carb and cabin heat are routed over the exhaust shroud allowing the heat from the exhaust to heat up the air.
</details>
<br/>

## Scenarios

Explain what you would do or check in each of the following scenarios:

<details>
    <summary><strong>a. In the summer, climbing to cruise altitude and the CHT’s are in the red</strong></summary>

    Lower the pitch, reduce rpm, accelerate to increase airflow over the engine
</details>
<br/>

<details>
    <summary><strong>b. At runup, you pull the carb heat and watch the engine rpm. Nothing changes</strong></summary>

    Take the airplane back to get checked out, some problems you will not be able to solve yourself
</details>
<br/>

<details>
    <summary><strong>c. On takeoff, you appear to take longer than usual to get off the ground and your climb performance is greatly reduced. Density altitude is standard</strong></summary>

    Verify carb heat is pushed in and magnetos are on BOTH
</details>
<br/>

<details>
    <summary><strong>d. In cruise the engine appears to die or cut out, losing large amounts of rpm for short periods of time</strong></summary>

    Likely carb ice, so pull carb heat and let run for several minutes
</details>