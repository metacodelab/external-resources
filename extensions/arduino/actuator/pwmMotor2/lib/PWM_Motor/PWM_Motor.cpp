// 
// 
// 

#include "PWM_Motor.h"

PWM_Motor::PWM_Motor() {
    servo = NULL;
}

PWM_Motor::~PWM_Motor() {
    if (servo) delete servo;
    servo = NULL;
}

void PWM_Motor::speed(int speed)
{
    if (speed_last != speed)
    {
        speed_last = speed;
        int _speed = 90 - (int)((speed / 100.0) * 90);
#if defined(NRF5)
        _speed = constrain(_speed - 4, 0, 180);
#elif defined NRF52833
        _speed = constrain(_speed - 4, 0, 180);
#else
        _speed = constrain(_speed, 0, 180);
#endif
        servo->angle(_speed);
        Serial.println(_speed);
    }

}

void PWM_Motor::attach(uint32_t pin)
{
    if (servo) return;
    servo = new MetaCodeServo();
    servo->attach(pin);
}

void PWM_Motor::detach()
{
    servo->detach();
    if (servo) delete servo;
    servo = NULL;
}
