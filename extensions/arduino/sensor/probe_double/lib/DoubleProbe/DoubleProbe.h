#ifndef DoubleProbe_h
#define DoubleProbe_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

class DoubleProbe
{

public:
    DoubleProbe();
    bool readProbeState(uint8_t pin);
};

#endif