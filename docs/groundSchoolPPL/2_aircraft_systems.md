---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InvisibilityCloak from '@site/src/components/InvisibilityCloak/InvisibilityCloak';
import VideoPlayer from '@site/src/components/VideoPlayer/VideoPlayer';

# Aircraft Systems

<InvisibilityCloak>
    <Tabs>
        <TabItem value="spring2025" label="Spring 2025">
            <VideoPlayer src="/video/2_engines_electrical_systems_spring_2025/GMT20250430-010349_Recording_1760x900.mp4#t=1235" />
        <ZoomLink url="https://us06web.zoom.us/rec/share/hSYd900TKmmia5uNVeIFz7q86R2_PcvLjFL0-Cj_y8zDb_-DHECGjFjnpFqo-wYL.wMM4ddAh31QrHrDq" passcode="Y%2..T4E" />
        </TabItem>
        <TabItem value="summer2025" label="Summer 2025">
            Important! I think this video might be for the wrong topic
            <ZoomLink url="https://us06web.zoom.us/rec/share/sZYs0XcM5_zDvTIkK2ngXiWTZtYSQCDwcyPW2dDJmrf2pbyCbHoJ-xvZWPFwDLQ.Zw4qq8ZXSSed_DI5" passcode="*bTMt.2g" />
        </TabItem>
    </Tabs>
</InvisibilityCloak>

## Primary Flight Controls

How the airplane controls the movement around the different axis

### Alierons
Turn the airplane by changing the chord lines opposite from each other

### Elevator
Kicks the tail up or down

### Rudder
For adverse yaw
![alt text](image-3.png)

## Secondary Flight Controls

### Trim
Poor Man's Autopilot
You can have trim on any of the controls.

There's manual trim on small planes that's made

If you want the elevator down, the trim tab will move up


### Flaps
Leading edge (Kreuger) flaps and trailing
edge (Fowler) flaps,

Basic section
Plain flaps (RV)
Split flap
Slotted flowler flap
Slotted flap

### Spoilers
Called spoilers because they "spoil" the airflow
To counteract adverse yaw

---

## Powerplant
Engine!!
All the Cesnas at Twin Oaks:
- 4 cylander
- horizontally opposed
  - creates better balanced forces
- naturally aspirated - breathing natrual air, (not spooled, more compressed air)
- air cooled - fins with more surface area for the air to naturally cool it down

### Four Stroke Cycle
Intake
Compression
Combusion
Exhaust

### Detonation and Preignition
**Detonation** -Rather than combusting in the powerstroke, it's just exploding (during the compression stroke) (because the piston isn't moving)

Causes include:
- Fuel grade lower than needed
- Engine overheating

Watch cylinder head temperatures (CHTs) 

**Preignition** - the spark plugs light the fuel prematurely or on the intake cycle. This causes opposing forces out of cycle, e.g. the two sides of a horizontally opposed engine pressing on the connecting rods and other engine components

Causes include:
- Cracked spark plug tip
- burned exhaust valve
- "anything that can act as a glow plug to ignite the charge prematurely"

<InvisibilityCloak>
:::note[Course Questions/Feedback]

Is there a better spot to talk about the propeller? It feels a little out of place here

:::
</InvisibilityCloak>

## Propeller
Twisted because needs to take more of a "bite" from the air closer to the nose because it's moving more slowly

The faster the edge of the propeller is traveling, the more drag it's producing
Big planes add blades instead of longer propellers because the edges approach the speed of sound and get much less efficient

TIL: You always increase drag with speed, but the drag coefficient drops after you break the sound barrier. [NASA: Drag Coefficient](https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/dragco.html)

### Fixed Pitch
The simpler of the two types. The propeller blades are fixed at a certain pitch and do not rotate

### Constant Speed
More complex, the propeller blades can rotate within the spinner in order to take bigger or smaller "bites" of the air, increasing or decreasing the blade's angle of attack. This allows the propeller to spin at lower RPMs while still creating the same amount of force as it would spinning at a higher rate with a lower angle of attack.

<InvisibilityCloak>
:::note[Course Questions/Feedback]

This lower speed of revolution also creates less drag (right?)

:::
</InvisibilityCloak>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kCSKhDL0bXM?si=qHVPMbRJ9wVsLn3N&amp;start=6" title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Induction System
How does the air and the fuel gets into the engine

> Mixture ratios span a spectrum from a rich of 6 to 1 to a lean of 18 to 1 depending on combustion chamber design and operating conditions.
[AOPA](https://www.aopa.org/training-and-safety/students/solo/special/the-fuel-air-mixture)

<InvisibilityCloak>
:::note[Course Questions/Feedback]

Nick mentions 40% and 60% - sometimes giving actual numbers like that can be confusing without a heads up that they're not real numbers

:::
</InvisibilityCloak>

### Carburated engines
Venturi draws air and fuel and <TooltipInlineText text="atomizes the fuel together" tooltip="Breaks fuel into a fine mist or spray of tiny droplets" />.
There's a needle that 

Any time you reduce the throttle, you "pull the carb heat out" (turn the heat on) to apply heat on the carb to prevent icing. This decreases performance/RPM because you're spreading out the air going into the fuel/air mixture, reducing the amount of air going into the mixture, making it leaner because the fuel flow is the same.

<InvisibilityCloak>
:::note[Course Questions/Feedback]

What does "pull the carb heat out" mean? Is it pulling the lever out that applies the heat?

:::
</InvisibilityCloak>

Icing happens because you're accelerating air

Ice can form in
- the butterfly valve
- the venturi because it's creating a low pressure (cooler) system



### Fuel Injected Engines
Instead of a carburator (mechanical), you have an electrical system called fuel air control unit (FCU) that's governing the ratio of fuel to air

The injector does the atomizing of the fuel electronically
They're more eficient
They can have a vapor lock

**Full Authority Digital Engine Control (FADEC):**

Full authroity, meaning all control inputs to the engine go through the FADEC and there's no pilot override.
Electrical systems that allow for override are electronic control units (ECU)s or electronic engine control (EEC)s

RV-12s use a FADEC

They are redundant in case of failure.

:::info

From [Skybrary](https://skybrary.aero/articles/full-authority-digital-engine-control-fadec):

- If a total FADEC failure occurs, the engine fails.
- Upon total FADEC failure, pilots have no manual controls for engine restart, throttle, or other functions.
- Single point of failure risk can be mitigated with redundant FADECs (assuming that the failure is a random hardware failure and not the result of a design or manufacturing error, which may cause identical failures in all identical redundant components).

:::

<InvisibilityCloak>
:::note[Course Questions/Feedback]

Hand-propping apparently does not work on an engine that utilizes a FADEC

There's an Audi engine that is apparently technically a car engine but there's at least one airplane that will try using it

:::
</InvisibilityCloak>

## Ignition Sysyem
2 magnetos for 4 cylinders with 8 spark plugs.
![alt text](image-4.png)

You need the battery to start but 

Impulse coupling..??
Magnetic field spins to generate magnetic field



Magneto is a self contained (from other electrical systems) magnetic field
There's a ball that spins around in it
There's a spring in it - when you start, it uses

Each magneto connects to one of the spark plugs in each cylanger

If a magneto failed, you'd not really be able to climb. You'd probably drop around 4000 RPM

## Oil System

Wet sump system
There's oil sitting at the bottom of the crankcase, the crankshaft dips into the pool then flings it all over the engine
It doesn't froth as long as it isn't over full


Dry sump system
Oil is stored in a sperate resivor and pumped through the engine
Scavange pump
Oil cooler

## Cooling
RV is air and liquid cooled

Shock cooling is a thing - causes cracks in the engine

## Exhaust
The hot air has to go somewhere or it can't intake more air

MANIFOLD, NOT SHROUD
Goes trhough a heat shroud  - it's a cabin and carburator heater. If there's a crack in the shroud you can get CO poisioning. You'll get light headed

Exhaust gas is over 1000 degrees

## Starter System
You have to turn on the master switch (the battery) before you can start the engine

## Electrical System
The electrical system digram is in the POH

Buses are like power strips that power multiple components coming from it.

14v or 28v system with 12v or 24v batteries

The RVs have lanes that are generators, not alternators
Casnas have alternators, not generators

(alternators efficiant at low RPMs, generators are worse, they produce)

The RV has no magnetos, It has a backup EMS battery

The master switch turns on both the battery and alternator at the same time

You can turn off radios, lights, anything electrical you can


## Landing Gear
Tricycle

Castering nose wheel - rudder also turns the wheels

Tailwheels - bush flying

Lubscome tail wheel planes

## Hydraulics
Shimmy dampener - some are air
Olwheel strut
Brakes


#### Scenarios

1
You have a p-lead When you turn a magneto off and don't see a drop in rpms
If it doesn't drop, it means that the right mag isn't grounded and it's notturning off when it's supposed to


2
High CHT, low EGT could mean detonation

You would definitely hear that, right?
If the engine starts banging, it could be other things, but it would be accomanied by the

Enrich the mixture, lower the rpm, decent to cool the engine


## Lesson Supplements

<!-- [The Pros And Cons Of Carbureted vs. Fuel Injected Engines](https://www.boldmethod.com/learn-to-fly/systems/carbureted-vs-fuel-injected-engines-in-your-airplane-and-how-it-works/) -->