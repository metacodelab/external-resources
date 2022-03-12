#include "DoubleProbe.h"

DoubleProbe::DoubleProbe(){}

bool DoubleProbe::readProbeState(uint8_t pin)
{
	 return (digitalRead(pin)==1);
}
