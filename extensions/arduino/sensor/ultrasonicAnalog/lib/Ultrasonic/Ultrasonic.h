// Ultrasonic.h

#ifndef _ULTRASONIC_h
#define _ULTRASONIC_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif
class Ultrasonic
{
public:
	Ultrasonic(void);
	void begin(uint8_t SignalPin);
	void analogUltrasonicSetPin(uint8_t SignalPin);
	void digitalUltrasonicSetPin(uint8_t SignalPin);
	int getAnalogUltrasonicDistance(uint16_t  = 300 );
	long measure(unsigned long = 30000);
	double distanceCm(uint16_t = 400);
	double getDigitalUltrasonicDistance();
	double getDigitalUltrasonicDistance(uint16_t MAXcm);
	double getDigitalUltrasonicDistance(uint16_t MAXcm, double Temperature);
private:
	volatile uint8_t  _SignalPin;
	volatile bool _measureFlag;
	volatile long _lastEnterTime;
	volatile float _measureValue;
};

#endif

