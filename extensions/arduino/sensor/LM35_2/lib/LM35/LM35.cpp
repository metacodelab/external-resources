#include "LM35.h"

LM35::LM35(){}

float LM35::readTemperature(uint32_t pin){
	return (float)(analogRead(pin)) * (5.5 / 10.24);
}
