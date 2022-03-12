#ifndef LM35_h
#define LM35_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

class LM35
{

public:
    LM35();
    float readTemperature(uint32_t pin);
};

#endif