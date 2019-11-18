---
title: SNES to USB Adapter
year: 2019
tags: ["CAO", "ATTiny85", "USB"]
featuredImage: ./snes_adapter.png
---
A simple adapter for SNES controller.

It uses an AVR ATTiny85 to emulate USB function thanks to the V-USB library.

SNES Controllers contain a simple parallel-in/serial-out shift register, which latch/clock/data signals are retreive by attiny85. Data is then send to computer through Generic USB joystick driver. Buttons are map according to Xbox controller.