---
title: Wordclock
year: 2018
tags: ["ATMega328", "AVR", "Bluetooth", "Android"]
featuredImage: ./wordclock.jpg
---
Wordclock is a project of clock where time is litteraly written.

I create a circuit based on ATMega328 (the same as you can find in most arduino), and TPIC6B595 shift register. 

I use (and discover) multiplexing to drive the led matrix. Anode are directly drive by arduino (not the best method) and cathode by shift register.

The clock contains a ds1307 chip and a hc05 module for bluetooth communication.