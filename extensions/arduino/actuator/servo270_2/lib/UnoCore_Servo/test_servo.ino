// Visual Micro is in vMicro>General>Tutorial Mode
// 
/*
    Name:       test_servo.ino
    Created:	2021/11/2 22:33:40
    Author:     SCHAFER-PRECISI\13968
*/

// Define User Types below here or use a .h file
//


// Define Function Prototypes that use User Types below here or use a .h file
//


// Define Functions below here or use other .ino or cpp files
//
#include "UnoCore_Servo.h"
UnoCore_Servo servo_2;
UnoCore_Servo servo_7;

// The setup() function runs once each time the micro-controller starts
void setup()
{
    servo_2.attach(2);
    servo_7.attach(7);
    delay(3000);

}

// Add the main program code into the continuous loop() function
void loop()
{
	servo_2.angle_270(0);
	delay(1000);
	servo_2.angle_270(135);
	delay(1000);
	servo_2.angle_270(270);
	delay(1000);
	servo_2.angle_270(135);
	delay(1000);
	servo_7.setAngle_180(-90);
	delay(1000);
	servo_7.setAngle_180(0);
	delay(1000);
	servo_7.setAngle_180(90);
	delay(1000);
	servo_7.setAngle_180(0);
	delay(1000);

}
