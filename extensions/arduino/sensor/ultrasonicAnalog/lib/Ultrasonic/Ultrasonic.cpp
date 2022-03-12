// 
// 
// 

#include "Ultrasonic.h"

Ultrasonic::Ultrasonic(void)
{

}

void Ultrasonic::begin(uint8_t SignalPin)
{
	_SignalPin = SignalPin;
	_lastEnterTime = millis();
	_measureFlag = true;
	_measureValue = 0;
}

void Ultrasonic::analogUltrasonicSetPin(uint8_t SignalPin)
{
	_SignalPin = SignalPin;

}



void Ultrasonic::digitalUltrasonicSetPin(uint8_t SignalPin)
{
	_SignalPin = SignalPin;
	_lastEnterTime = millis();
	_measureFlag = true;
	_measureValue = 0;
}

int Ultrasonic::getAnalogUltrasonicDistance(uint16_t range)
{
	float distCM, readValue;
	if (range == 100)
	{
		range = 100;
		readValue = analogRead(_SignalPin);
		distCM = readValue * range / 1023;
		if (distCM > 9.5)
		{
			distCM = distCM - 1;
		}
	}
	else 
	{
		range = 300;
		readValue = analogRead(_SignalPin);
		distCM = readValue * range / 1023;
		if (distCM > 8.5)
		{
			distCM = distCM - 1;
		}

	}

	return distCM;
}

long Ultrasonic::measure(unsigned long timeout)
{
	long duration;
	timeout = 500000;
	pinMode(_SignalPin, OUTPUT);
	if (millis() - _lastEnterTime > 23)
	{
		_measureFlag = true;
	}

	if (_measureFlag == true)
	{
		_lastEnterTime = millis();
		_measureFlag = false;
		digitalWrite(_SignalPin, LOW);
		delayMicroseconds(2);//2
		digitalWrite(_SignalPin, HIGH);
		delayMicroseconds(10);//10
		digitalWrite(_SignalPin, LOW);
		pinMode(_SignalPin, INPUT);
		duration = pulseIn(_SignalPin, HIGH, timeout);
		_measureValue = duration;
	}
	else
	{
		duration = _measureValue;
	}
	return(duration);
}

double Ultrasonic::distanceCm(uint16_t MAXcm)
{
	double distance = measure();
	//distance = distance * 340 / 2 / 10000;//计算距离 1：声速：340M/S  2：实际距离为1/2声速距离 3：计数时钟为1US//温补公式：c=(331.45+0.61t/℃)m•s-1 (其中331.45是在0度）
	distance = (double)distance / 57.6 + 0.5;

	if ((distance >= 400.0) || (distance == 0))
	{
		return((double)400.0);//MAXcm
	}
	else
	{
		return(distance);
	}
}

double Ultrasonic::getDigitalUltrasonicDistance( )
{
	double distance = measure();
	//distance = distance * 340 / 2 / 10000;//计算距离 1：声速：340M/S  2：实际距离为1/2声速距离 3：计数时钟为1US//温补公式：c=(331.45+0.61t/℃)m•s-1 (其中331.45是在0度）
	distance = (double)distance / 57.6 + 0.5;

	if ((distance >= 400.0) || (distance == 0))
	{
		return((double)400.0);//MAXcm
	}
	else
	{
		return(distance);
	}
}

double Ultrasonic::getDigitalUltrasonicDistance(uint16_t MAXcm )
{
	double distance = measure();
	//distance = distance * 340 / 2 / 10000;//计算距离 1：声速：340M/S  2：实际距离为1/2声速距离 3：计数时钟为1US//温补公式：c=(331.45+0.61t/℃)m•s-1 (其中331.45是在0度）
	distance = (double)distance / 57.6 + 0.5;

	if ((distance >= MAXcm) || (distance == 0))
	{
		return((double)400.0);//MAXcm
	}
	else
	{
		return(distance);
	}
}

double Ultrasonic::getDigitalUltrasonicDistance(uint16_t MAXcm, double Temperature)
{
	double distance = measure();
	distance = distance * ( 331.45 + 0.61* Temperature ) / 2 / 10000;//计算距离 1：声速：340M/S  2：实际距离为1/2声速距离 3：计数时钟为1US//温补公式：c=(331.45+0.61t/℃)m•s-1 (其中331.45是在0度）
	//distance = (double)distance / 57.6 + 0.5;

	if ((distance >= 400.0) || (distance == 0))
	{
		return((double)400.0);//MAXcm
	}
	else
	{
		return(distance);
	}
}

