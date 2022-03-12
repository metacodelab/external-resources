// PWM_Motor.h

#ifndef _PWM_MOTOR_H
#define _PWM_MOTOR_H

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif
#include <MetaCodeServo.h>
class PWM_Motor
{
public:
    PWM_Motor();
    ~PWM_Motor();
    void speed(int speed);
    void attach(uint32_t pin);
    void detach();

private:
    MetaCodeServo* servo;
    int speed_last=0;
};
#endif

