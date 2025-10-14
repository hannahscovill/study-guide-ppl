---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flight Instruments

<InvisibilityCloak>
    <Tabs>
        <TabItem value="summer2025" label="Summer 2025">
            <VideoPlayer src="/video/3_flight_instruments_summer_2025/GMT20250730-005954_Recording_1760x900.mp4#t=1600" />
            <ZoomLink url="https://us06web.zoom.us/rec/share/oH8C4KnxDuajGjbIeL9cnRIlL6U0h9-t7ITzoqSUFpUdvZy4hx7P4OCxDV4NZDVU.T_f5Eo3tOYAeDiB2" passcode="!83#S#l!" />
        </TabItem>
    </Tabs>
</InvisibilityCloak>

## Pitot/Static Instruments

### Altimiter

Has an aneroid wafer stack and access to the static port. Aneroid wafers are flexible metal capsules that are sealed with/neutral at standard pressure. When you climb, the altitude is less dense. The static port allows that less dense air to flow into the altimeter's casing, causing the wafer stack to expand because of the difference in pressure in and out of the wafers. The stack is attached to gears that turn the hands on the indicator when the stack moves, giving us our altitude reading.

<StandardDayTable />

You lose 1"Hg for every 1000ft of altitude climbed

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/L1ml_vIibJc?si=sTZWyogX9ddReeXk&amp;start=155" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
Please note these videos mispronounce some things because they seem to be read by a text-to-speech system but the animations and explanation have been helpful

Supplement: The Pilot Institute - [Pressure Altitude vs. Density Altitude: What’s the Difference?](https://pilotinstitute.com/pressure-altitude-vs-density-altitude/)

### Vertical Airspeed indicator
Tells you if you're climbing or descending.

Pressure from the static port goes into the diaphragm and the casing. The casing has a claibrated (slower/delayed) leak so the pressure in the casing changes at a slower rate from the diaphragm. The pressure differences in the diaphragm and the casing cause the diaphragm to contract or expand, turning the gears that give us our indication.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PM8RxWVWzys?si=Wi8l_xwmdnTf1nmL&amp;start=26" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
Please note these videos mispronounce some things because they seem to be read by a text-to-speech system but the animations and explanation have been helpful

### Airspeed Indicator
Tells you what just the ram air pressure from the <TooltipInlineText text="pitot tube" tooltip='The word "pitot" came from Henri Pitot (1695–1771), who invented the device in the 1730s to measure the velocity of water in the River Seine.' /> is by comparing it with static pressure.

Static pressure is included with the ram air pressure from the pitot tube, so it

It uses a diapragm inside a casing where the static pressure is in the casing. The pitot tube feeds/expands the diaphragm.

Has a drain hole at the back that doesn't affect the formula other than helping the intake to stay unblocked

Imaginary formula `V = D+S-S`
- V: indicated airspeed
- D: dynamic/impact/ram air
- S: static air pressure
  - +S comes from the static port
  - -S is neutralized with the drain hole at the back of the pitot tube

<InvisibilityCloak>
:::note[Course Questions/Feedback]

Why is this formula considered imaginary?

:::
</InvisibilityCloak>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KVpFkUeV_lY?si=qsLaQ9VGYtFdgdW6&amp;start=228" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
Please note these videos mispronounce some things because they seem to be read by a text-to-speech system but the animations and explanation have been helpful


less accurate at higher altitudes and temperatures


### Pitot/Static System Errors

|                                      | Airspeed             | Altimiter | Vertical Speed |
| ------------------------------------ | -------------------- | --------- | -------------- |
| Front of pitot blocked, static clear | reads 0              | No effect | No effect      |
| Front and drain of pitot blocked     | acts as an altimeter | No effect | No effect      |
| Pitot clear, static blocked          | much higher airspeed | frozen in place | reads 0  |


## Gyroscopic Instruments
00:47:00
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

