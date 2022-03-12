/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
  function numberck(pinn){

      if (pinn == "1")
      {
      return "P1";
      }
      if (pinn == "2")
      {
      return "P2";
      }
      if (pinn == "3")
      {
      return "P3";
      }
      if (pinn == "4")
      {
      return "P4";
      }
      if (pinn == "5")
      {
      return "P5";  
      }
      if (pinn == "6")
      {
      return "P6";  
      }
    }

    //一般按钮
    Blockly.Arduino.QH_button_general = function (block) {
        const pin = this.getFieldValue('pin');
        const mode = this.getFieldValue('mode');

        Blockly.Arduino.includes_.definitions_include_QDPport = `#include <QDPport.h>`;
        Blockly.Arduino.setups_[`QHbutton_${pin}`] = `pinMode(QDPport[${pin}][${mode}], INPUT);`;
        return [`digitalRead(QDPport[${pin}][${mode}])`, Blockly.Arduino.ORDER_ATOMIC];
    };
    //双按钮
    Blockly.Arduino.QH_button_both = function (block) {
        var pin = this.getFieldValue('pin');

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.setups_['setup_input_'+pin] = 'pinMode(QDPport['+pin+'][0], INPUT);\n  pinMode(QDPport['+pin+'][1], INPUT);';
        var code = 'digitalRead(QDPport['+pin+'][0])||digitalRead(QDPport['+pin+'][1])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //多功能按钮初始化
    Blockly.Arduino.QH_buttonfuction_init = function() {
        var pin = this.getFieldValue('pin');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'buttonP'+pin+'_0.Update();\nbuttonP'+pin+'_1.Update();\n';
        return code;
    };
    //多功能按钮
    Blockly.Arduino.QH_buttonfuction_do = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin1 = this.getFieldValue('PIN1');
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_include_clickButton'] = '#include <clickButton.h>';
        Blockly.Arduino.definitions_['define_click0'+dropdown_pin] = 'ClickButton buttonP'+dropdown_pin+'_0(QDPport['+dropdown_pin+'][0],HIGH);\n';
        Blockly.Arduino.definitions_['define_click1'+dropdown_pin] = 'ClickButton buttonP'+dropdown_pin+'_1(QDPport['+dropdown_pin+'][1],HIGH);\n';
        var code = 'buttonP'+dropdown_pin+'_'+dropdown_pin1+'.buttoncheck('+dropdown_pin2+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //
    //超声波
    Blockly.Arduino.QH_UltraSonicDistanceSensor = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_HCSR'] = '#include <QDPHCSR04.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_chaoshengbo'+dropdown_pin] = 'UltraSonicDistanceSensor distanceSensor_'+dropdown_pin+'('+dropdown_pin+');\n';
        var code = 'distanceSensor_'+dropdown_pin+'.measureDistance'+dropdown_pin2+'()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //巡线
    Blockly.Arduino.QH_Line_follower = function() {
        var PIN = this.getFieldValue('PIN');
        var state1 = this.getFieldValue('state1');
        var state2 = this.getFieldValue('state2');

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.setups_['setup_input_'+PIN] = 'pinMode(QDPport['+PIN+'][0], INPUT);\n  pinMode(QDPport['+PIN+'][1], INPUT);';
        var code = '(digitalRead(QDPport['+PIN+'][0]) == '+state1+')&&(digitalRead(QDPport['+PIN+'][1]) == '+state2+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //光线
    Blockly.Arduino.QH_lightSensor = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport['+dropdown_pin+'][1])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //声音
    Blockly.Arduino.QH_sound = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport['+dropdown_pin+'][0])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //电位器

    Blockly.Arduino.QH_Potentiometer = function() {
        var dropdown_pin = this.getFieldValue('PIN');
        var dropdown_pin1 = this.getFieldValue('PIN1');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        var code = 'analogRead(QDPport['+dropdown_pin+']['+dropdown_pin1+'])';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //摇杆初始化
    Blockly.Arduino.QH_joystick_initialization = function() {
      var port= this.getFieldValue('port');
      Blockly.Arduino.definitions_['include_QDPJoystick'] ='#include <QDPJoystick.h>\n';
      Blockly.Arduino.definitions_['var_declare_QDPJoystick'] = 'QDPJoystick QDPJoystick;';
      Blockly.Arduino.setups_['QDPJoystick_setup'] = 'QDPJoystick.begin('+port+');\n'
      var code='';
      return code;
    };
    //获取摇杆值
    Blockly.Arduino.QH_get_the_joystick_value = function() {
        var mode= this.getFieldValue('mode');
        var code = "";
      if(mode==0)
      {
        code = 'QDPJoystick.Angle1()';
      }
      if(mode==1)
      {
        code = 'QDPJoystick.Angle2()';
      }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //土壤
    Blockly.Arduino.QH_Soilmoisture = function() {
      var dropdown_pin = this.getFieldValue('PIN');
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      var code = 'analogRead(QDPport['+dropdown_pin+'][1])';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //DH11温湿度
    Blockly.Arduino.QH_dht11 = function () {
        var dropdown_pin = this.getFieldValue('PIN');
        var what = this.getFieldValue('WHAT');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_DHT'] = '#include <DHT.h>';
        Blockly.Arduino.definitions_['define_dht_p'] = 'DHT myDHT_'+dropdown_pin+'(QDPport['+dropdown_pin+'][0],11);';
        Blockly.Arduino.setups_['myDHT_'+dropdown_pin+'begin'] = 'myDHT_'+dropdown_pin+'.begin();';
        
        var code ='myDHT_'+dropdown_pin+'.read'+what+'()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //颜色传感器启用块
    Blockly.Arduino.QH_yssb_init = function() {
        var dropdown_pin1 = this.getFieldValue('PIN1');
        var dropdown_pin2 = this.getFieldValue('PIN2');
        var dropdown_pin3 = this.getFieldValue('PIN3');
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['define_qdprscgq'] = '#include "QDPcolor.h"';
        Blockly.Arduino.definitions_['var_declare_qdprobot_qdpyscgq'] = 'QDPcolor tcs = QDPcolor(TCS34725_INTEGRATIONTIME_'+dropdown_pin1+'MS, TCS34725_GAIN_'+dropdown_pin2+'X);\n';
        var code = 'uint16_t r, g, b, c, colorTemp, lux;\ntcs.getRawData(&r, &g, &b, &c);\ncolorTemp = tcs.calculateColorTemperature_dn40(r, g, b, c);\nlux = tcs.calculateLux(r, g, b);\n';
        if(dropdown_pin3=='1')
        {
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['yscgq_setup']='if (tcs.begin('+num1+')) {\nSerial.println("Found sensor");\n} else {\nSerial.println("No TCS34725 found ... check your connections");\nwhile (1);\n }\n';
        var code1 ='Serial.print("Color Temp: "); Serial.print(colorTemp, DEC); Serial.print(" K - ");\nSerial.print("Lux: "); Serial.print(lux, DEC); Serial.print(" - ");\nSerial.print("R: "); Serial.print(r, DEC); Serial.print(" ");\nSerial.print("G: "); Serial.print(g, DEC); Serial.print(" ");\nSerial.print("B: "); Serial.print(b, DEC); Serial.print(" ");\nSerial.print("C: "); Serial.print(c, DEC); Serial.print(" ");\nSerial.println(" ");\n';
        code = code +code1;
        }

        return code;

    };
    //颜色传感器的值读取
    Blockly.Arduino.QH_yssb_get = function () {
        var dropdown_pin1 = this.getFieldValue('PIN');
        var code =''+dropdown_pin1+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //颜色传感器值比较
    Blockly.Arduino.QH_yssb_compare = function () {
      var dropdown_pin1 = this.getFieldValue('PIN');

      var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

      var code =''+dropdown_pin1+' >= ('+num1+' - '+num2+') && '+dropdown_pin1+' <= ('+num1+' + '+num2+')';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //传感器-MPU6050-更新数据
    Blockly.Arduino.QH_MPU6050_update = function() {
        Blockly.Arduino.definitions_['includeMPU6050'] = '#include <MPU6050.h>';
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['var_declare_MPU6050'] = 'MPU6050 mpu;';
        Blockly.Arduino.setups_['setup_ngyro'] = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G);';
        Blockly.Arduino.setups_['mpu_calibrateGyro'] = 'mpu.calibrateGyro();';
        Blockly.Arduino.setups_['mpu_setThreshold'] = 'mpu.setThreshold(3);';
        var code = 'Vector normAccel = mpu.readNormalizeAccel();\nVector normGyro = mpu.readNormalizeGyro();\n';
        return code;
    };
    //偏航角复位
    Blockly.Arduino.QH_MPU6050_yaw_reset = function() {
      var code = 'yaw = 0;\n';
      return code;
    };
    //MPU6050-获取数据
    Blockly.Arduino.QH_MPU6050_GETDATA = function() {
      var MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
      var code;
      if(MPU6050_TYPE =='readYaw')
      {
        Blockly.Arduino.definitions_['var_declare_MPU6050GetYaw'] = 'unsigned long GetYawtimer = 0;\nfloat timeStep = 0.005;\nfloat yaw = 0;';
        Blockly.Arduino.definitions_['var_MPU6050GetYaw'] = 'float MPU6050GetYaw(Vector &norm)\n'+
          '{\n'+
          '  if (millis() - GetYawtimer >= (timeStep * 1000)) {\n'+
          '    GetYawtimer = millis();\n'+
          '    yaw = yaw + norm.ZAxis * timeStep;\n'+
          '  }\n'+
          '  return yaw;\n'+
          '}\n';
       code = 'MPU6050GetYaw(normGyro)';
      }
      else
      {
      code = MPU6050_TYPE;
      }
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //MPU6050-动作检测更新数据
    Blockly.Arduino.QH_MPU6050_MOTION_update = function() {
      Blockly.Arduino.definitions_['includeMPU6050'] = '#include <MPU6050.h>';
      Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
      Blockly.Arduino.definitions_['var_declare_MPU6050'] = 'MPU6050 mpu;';
      Blockly.Arduino.setups_['setup_MOTION'] = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_16G);\n'+
        ' mpu.setAccelPowerOnDelay(MPU6050_DELAY_3MS);\n'+
        ' mpu.setIntFreeFallEnabled(false);  \n'+
        ' mpu.setIntZeroMotionEnabled(false);\n'+
        ' mpu.setIntMotionEnabled(false);\n'+ 
        ' mpu.setDHPFMode(MPU6050_DHPF_5HZ);\n'+
        ' mpu.setMotionDetectionThreshold(2);\n'+
        ' mpu.setMotionDetectionDuration(5);\n'+
        ' mpu.setZeroMotionDetectionThreshold(4);\n'+
        ' mpu.setZeroMotionDetectionDuration(2);\n';
      var code = 'Vector rawAccel = mpu.readRawAccel();\nActivites act = mpu.readActivites();\n';
      return code;
    };
    //传感器-MPU6050-获取数据
    Blockly.Arduino.QH_MPU6050_MOTION_GETDATA = function() {
     var MPU6050_TYPE = this.getFieldValue('MPU6050_TYPE');
     var code = MPU6050_TYPE;
     return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.QH_inout_highlow = function () {
        // Boolean values HIGH and LOW.
        var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //LED1

    Blockly.Arduino.QH_ledlight = function() {
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';

      var dropdown_pin = this.getFieldValue('PIN');
      var dropdown_pin2 = this.getFieldValue('PIN1');
      var dropdown_stat =Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);  
      Blockly.Arduino.setups_['setup_output33_'+dropdown_pin+dropdown_pin2] = 'pinMode(QDPport['+dropdown_pin+']['+dropdown_pin2+'], OUTPUT);';
      var code = 'digitalWrite(QDPport['+dropdown_pin+']['+dropdown_pin2+'],'+dropdown_stat+');\n'
      return code;
    };
    //读取LED灯状态
    Blockly.Arduino.QH_read_ledlight = function() {
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      var dropdown_pin = this.getFieldValue('PIN');
      var dropdown_pin2 = this.getFieldValue('PIN1'); 
      Blockly.Arduino.setups_['setup_output33_'+dropdown_pin+dropdown_pin2] = 'pinMode(QDPport['+dropdown_pin+']['+dropdown_pin2+'], OUTPUT);';
      var code = 'digitalRead(QDPport['+dropdown_pin+']['+dropdown_pin2+'])'
      return [code,Blockly.Arduino.ORDER_ATOMIC];
    };
    //LED亮度
    Blockly.Arduino.QH_ledlight_PWM = function() {
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      var dropdown_pin = this.getFieldValue('PIN');
      var dropdown_pin2 = this.getFieldValue('PIN1');
      var ledn = Blockly.Arduino.valueToCode(this, 'ledn',Blockly.Arduino.ORDER_ATOMIC) || '0';
      Blockly.Arduino.setups_['setup_output1_'+dropdown_pin+dropdown_pin2] = 'pinMode(QDPport['+dropdown_pin+']['+dropdown_pin2+'], OUTPUT);';
      var code = 'analogWrite(QDPport['+dropdown_pin+']['+dropdown_pin2+'],'+ledn+');\n'
      return code;
    };
    //继电器
    Blockly.Arduino.QH_relay = function() {
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      var dropdown_pin = this.getFieldValue('PIN');
      var dropdown_pin2 = this.getFieldValue('PIN1');
      var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.setups_['setup_output33_'+dropdown_pin+dropdown_pin2] = 'pinMode(QDPport['+dropdown_pin+']['+dropdown_pin2+'], OUTPUT);';
      var code = 'digitalWrite(QDPport['+dropdown_pin+']['+dropdown_pin2+'],'+dropdown_stat+');\n'
      return code;
    };
    //读继电器状态
    Blockly.Arduino.QH_read_relay = function() {
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      var dropdown_pin = this.getFieldValue('PIN');
      var dropdown_pin2 = this.getFieldValue('PIN1');
      Blockly.Arduino.setups_['setup_output33_'+dropdown_pin+dropdown_pin2] = 'pinMode(QDPport['+dropdown_pin+']['+dropdown_pin2+'], OUTPUT);';
      var code = 'digitalRead(QDPport['+dropdown_pin+']['+dropdown_pin2+'])'
      return [code,Blockly.Arduino.ORDER_ATOMIC];
    };
    //RBGLED
    Blockly.Arduino.QH_rgb_led = function() {
        Blockly.Arduino.definitions_['include_display'] = '#include "QDPRGBLED.h"';
        var pin1 = this.getFieldValue('PIN');
        var NUM=Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC) || '0';

        var R=Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var G=Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var B=Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var NUM8=Blockly.Arduino.valueToCode(this, 'num8', Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if (!Blockly.Arduino.definitions_['var_declare_rgb_display' + pin1]) {
          Blockly.Arduino.definitions_['var_declare_rgb_display' + pin1] = 'QDPRGBLED QDPRGBLED_' + pin1 + ';';
          Blockly.Arduino.setups_['setup_rgb_display_setpin' + pin1] = 'QDPRGBLED_' + pin1 + '.init(QDPport[' + pin1 + '][1],'+NUM8+');';
        }  
        var code = 'QDPRGBLED_' + pin1 + '.setRgbLEDColor('+NUM+','+R+','+G+','+B+');\n';
        return code;
    };
    //蜂鸣器

    Blockly.Arduino.QH_buzzer=function(){
        var dropdown_pin = this.getFieldValue('PIN'); 
        var dropdown_pin2 = this.getFieldValue('PIN2');
        var dur = Blockly.Arduino.valueToCode(this, 'DURATION',Blockly.Arduino.ORDER_ASSIGNMENT) || '0';

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer'] = '#include "QDPBuzzer.h"';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer2'+dropdown_pin] = 'QDPBuzzer QDPBuzzer'+dropdown_pin+';';

        Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = '';
        var code='QDPBuzzer'+dropdown_pin+'.tone(QDPport['+dropdown_pin+'][1],'+dropdown_pin2+','+dur+');\n';
        return code; 
    };
    //蜂鸣器音乐
    Blockly.Arduino.QH_buzzer_music=function(){
        var dropdown_pin = this.getFieldValue('PIN'); 
        var dropdown_pin2 = this.getFieldValue('PIN2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer'] = '#include "QDPBuzzer.h"';
        Blockly.Arduino.definitions_['define_qdportqdpbuzzer2'+dropdown_pin] = 'QDPBuzzer QDPBuzzer'+dropdown_pin+';';

        Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = '';
        var code='QDPBuzzer'+dropdown_pin+'.buzzer_music(QDPport['+dropdown_pin+'][1],'+dropdown_pin2+');\n';
        return code; 
    };
    //直流电机
    Blockly.Arduino.QH_motor = function() {
      var dropdown_pin = this.getFieldValue('PIN');
      var speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC) || '0';
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      Blockly.Arduino.definitions_['define_qdprobot00'] = '#include <QDPDCMOTOR.h>';
      Blockly.Arduino.definitions_['var_declare_qdprobot_motor'+dropdown_pin] = 'QDPDCMOTOR QDPM'+dropdown_pin+'('+dropdown_pin+');\n';
      var code = 'QDPM'+dropdown_pin+'.run('+speed+');\n';
      return code;
    };
    //编码电机
    Blockly.Arduino.QH_code_motor = function() {
      var dropdown_pin = this.getFieldValue('pim');
      var dropdown_pin2 = this.getFieldValue('pim');//这个是调用函数
      var dropdown_pin3 = this.getFieldValue('pim');
      var dropdown_pin4 = this.getFieldValue('pin2');
      var speed1 = Blockly.Arduino.valueToCode(this, 'speed1',Blockly.Arduino.ORDER_ATOMIC) || '0';
      var speed2 = Blockly.Arduino.valueToCode(this, 'speed2',Blockly.Arduino.ORDER_ATOMIC) || '0';
      var speed3 = Blockly.Arduino.valueToCode(this, 'speed3',Blockly.Arduino.ORDER_ATOMIC) || '0';
      var speed4 = Blockly.Arduino.valueToCode(this, 'speed4',Blockly.Arduino.ORDER_ATOMIC) || '0';
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
       Blockly.Arduino.definitions_['define_qdprobot02'] = '#include <QDPDCMOTOR.h>';
      Blockly.Arduino.definitions_['var_declare_qdprobot_motor0'+dropdown_pin] = 'QDPDCMOTOR QDPM'+dropdown_pin+'('+dropdown_pin2+');\n';
      Blockly.Arduino.definitions_['var_declare_qdprobot_motor2'+dropdown_pin] = 'void DcMotorCount'+dropdown_pin2+'() {\n';
      Blockly.Arduino.definitions_['var_declare_qdprobot_motor3'+dropdown_pin] = 'QDPM'+dropdown_pin+'.DcMotorCount'+dropdown_pin2+'();\n';
       Blockly.Arduino.definitions_['var_declare_qdprobot_motor4'+dropdown_pin] = '}\n';
       
        var code = 'QDPM'+dropdown_pin+'.PulseINI('+speed1+','+speed2+','+speed3+','+speed4+');\nattachInterrupt(!('+dropdown_pin3+' - 1), DcMotorCount'+dropdown_pin2+', RISING);\nQDPM'+dropdown_pin+'.PulseRun('+dropdown_pin4+');\n';
      
      return code;
    };
    //编码状态
    Blockly.Arduino.QH_code_motor_read= function() {
        var dropdown_pin = this.getFieldValue('pin');
        var dropdown_pin2 = this.getFieldValue('pin2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot02'] = '#include <QDPDCMOTOR.h>';
        var code = 'QDPM'+dropdown_pin+'.flag1 =='+dropdown_pin2+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //舵机360
    Blockly.Arduino.QH_servomotor360 = function() {
      var dropdown_pin = this.getFieldValue('PIN');
      var dropdown_pin2 = this.getFieldValue('DIR');
      var num1 = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC) || '0';
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      Blockly.Arduino.definitions_['define_qdprobotservo'] = '#include <QDPServo.h>';
      Blockly.Arduino.definitions_['define_qdprobotread'] = '#include <VarSpeedServo.h>'; 
      Blockly.Arduino.definitions_['var_declare_qdprobot_motor31'+dropdown_pin] = 'VarSpeedServo QDPservo_'+dropdown_pin+';\n';
      Blockly.Arduino.setups_['setup_output_3'+dropdown_pin] ='QDPservo_'+dropdown_pin+'.attach(QDPport['+dropdown_pin+'][1]);\n';
      var code = 'QDPservo_'+dropdown_pin+'.writeMicroseconds(QDPServoPulseWith1('+dropdown_pin2+','+num1+'));\n';
       return code;
    };
    //舵机
    Blockly.Arduino.QH_servomotor180 = function() {
        var dropdown_pin = this.getFieldValue('pin');
        var IsWait = this.getFieldValue('wait');
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var speed =Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobotread'] = '#include <VarSpeedServo.h>';

        Blockly.Arduino.definitions_['var_declare_qdprobot_motor31'+dropdown_pin] = 'VarSpeedServo QDPservo_'+dropdown_pin+';\n';
        Blockly.Arduino.setups_['setup_output_3'+dropdown_pin] ='QDPservo_'+dropdown_pin+'.attach(QDPport['+dropdown_pin+'][1],500,2500);\n';
        var code = 'QDPservo_'+dropdown_pin+'.write('+num1+','+speed+','+IsWait+');\n';
        return code;
    };
    //舵机角度

    Blockly.Arduino.QH_servomotorread = function() {
        var dropdown_pin = this.getFieldValue('pin');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobotread'] = '#include <VarSpeedServo.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_motor31'+dropdown_pin] = 'VarSpeedServo QDPservo_'+dropdown_pin+';\n';
        Blockly.Arduino.setups_['setup_output_3'+dropdown_pin] ='QDPservo_'+dropdown_pin+'.attach(QDPport['+dropdown_pin+'][1]);\n';

        var code = 'QDPservo_'+dropdown_pin+'.read()';             
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //舵机板设置参数180
    Blockly.Arduino.QH_servomotorPWM_set180 = function() {
        var dropdown_pin = this.getFieldValue('pin');
        var param1 = Blockly.Arduino.valueToCode(this, 'param1',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var param2 = Blockly.Arduino.valueToCode(this, 'param2',Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['define_qdportPWM2'] = '#include "QDP16PWM.h"';
        Blockly.Arduino.definitions_['var_declare_qdprobot_PWM'+dropdown_pin] = 'QDP16PWM pwm'+dropdown_pin+' = QDP16PWM(0x4'+dropdown_pin+');\n';
        Blockly.Arduino.setups_['setup_output_PWM_set180'+dropdown_pin] ='pwm'+dropdown_pin+'.set_180('+param1+','+param2+');\n';
        var code = '';
        return code;
    };
    //舵机板180
    Blockly.Arduino.QH_servomotorPWM = function() {
        var dropdown_pin = this.getFieldValue('pin');
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['define_qdportPWM2'] = '#include "QDP16PWM.h"';
        Blockly.Arduino.definitions_['var_declare_qdprobot_PWM'+dropdown_pin] = 'QDP16PWM pwm'+dropdown_pin+' = QDP16PWM(0x4'+dropdown_pin+');\n';
        Blockly.Arduino.setups_['setup_output_PWM'+dropdown_pin] ='pwm'+dropdown_pin+'.begin();\n';
        var code = 'pwm'+dropdown_pin+'.setDegree1('+num2+','+num1+');\n';
        return code;
    };
    //舵机板360度设置参数
    Blockly.Arduino.QH_servomotorPWM_set360 = function() {
        var dropdown_pin = this.getFieldValue('pin');
        var S_param = Blockly.Arduino.valueToCode(this, 'S_param',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var CW_L_param = Blockly.Arduino.valueToCode(this, 'CW_L_param',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var CW_H_param = Blockly.Arduino.valueToCode(this, 'CW_H_param',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var CCW_L_param = Blockly.Arduino.valueToCode(this, 'CCW_L_param',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var CCW_H_param = Blockly.Arduino.valueToCode(this, 'CCW_H_param',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['define_qdportPWM2'] = '#include "QDP16PWM.h"';
        Blockly.Arduino.definitions_['var_declare_qdprobot_PWM'+dropdown_pin] = 'QDP16PWM pwm'+dropdown_pin+' = QDP16PWM(0x4'+dropdown_pin+');\n';
        Blockly.Arduino.setups_['setup_output_PWM_set360'+dropdown_pin] ='pwm'+dropdown_pin+'.set_360('+S_param+','+CW_L_param+','+CW_H_param+','+CCW_L_param+','+CCW_H_param+');\n';
        var code = '';
        return code;
    };
    //舵机板360度
    Blockly.Arduino.QH_servomotorPWM360 = function() {
        var dropdown_pin = this.getFieldValue('pin');
        var dropdown_pin3 = this.getFieldValue('pin3');
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) || '0';

        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['define_qdportPWM2'] = '#include "QDP16PWM.h"';
        Blockly.Arduino.definitions_['var_declare_qdprobot_PWM'+dropdown_pin] = 'QDP16PWM pwm'+dropdown_pin+' = QDP16PWM(0x4'+dropdown_pin+');\n';
        Blockly.Arduino.setups_['setup_output_PWM'+dropdown_pin] ='pwm'+dropdown_pin+'.begin();\n';
        var code = 'pwm'+dropdown_pin+'.setDegree2('+num2+','+dropdown_pin3+','+num1+ ');\n';
        return code;
    };
    //语音模块
    Blockly.Arduino.QH_Voice = function() {
        Blockly.Arduino.definitions_['include_QDPVoice'] = '#include <QDPVoice.h>';
        var PIN = this.getFieldValue('PIN');
        var addr = this.getFieldValue('addr');
        var delayTime = Blockly.Arduino.valueToCode(this, 'delayTime',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var code = 'VoiceSendData('+addr+','+PIN+');\ndelay('+delayTime+');\n'
        return code;
    };
    //语音模块读值
    Blockly.Arduino.QH_VoicePlayValue = function() {
        Blockly.Arduino.definitions_['include_QDPVoice'] = '#include <QDPVoice.h>';
        var PIN = this.getFieldValue('PIN');
        var addr = Blockly.Arduino.valueToCode(this, 'addr',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var code = 'VoicePlayValue('+addr+','+PIN+');\n'
        return code;
    };
     //语音识别发送数据
    Blockly.Arduino.QH_ASR_SendData = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var keyword = this.getFieldValue('keyword');

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['include_QDPASR'] = '#include <QDPASR.h>';
        Blockly.Arduino.definitions_['var_declare_MyASR'+dropdown_pin] = 'QDPASR MyASR'+dropdown_pin +';';
        if(dropdown_pin==5){ 
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_QDPASR_serial3'] = 'MyASR'+dropdown_pin+'.begin(Serial);';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'MyASR'+dropdown_pin+'.begin(P'+dropdown_pin+');';
        };
        var code = 'MyASR'+dropdown_pin+'.SendData(\"'+keyword+'\");\n';
        return code;
    };
    //语音识别接收
    Blockly.Arduino.QH_ASR_ReceiveData = function() {
        var dropdown_pin = this.getFieldValue('pinn');

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['include_QDPASR'] = '#include <QDPASR.h>';
        Blockly.Arduino.definitions_['var_declare_MyASR'+dropdown_pin] = 'QDPASR MyASR'+dropdown_pin +';';
        if(dropdown_pin==5){ 
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_QDPASR_serial3'] = 'MyASR'+dropdown_pin+'.begin(Serial);';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'MyASR'+dropdown_pin+'.begin(P'+dropdown_pin+');';
        }
        var code ='MyASR'+dropdown_pin+'.ReceiveData();\n';
        return code;
    };
    //语音识别对比数据
    Blockly.Arduino.QH_ASR_CompareData = function() {
        var dropdown_pin2 = this.getFieldValue('pinn');
        var keyword = this.getFieldValue('keyword');
        var code = 'MyASR'+dropdown_pin2+'.CompareData(\"'+keyword+'\")';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    var json = {
  "00A4":"A1E8",
  "00A7":"A1EC",
  "00A8":"A1A7",
  "00B0":"A1E3",
  "00B1":"A1C0",
  "00B7":"A1A4",
  "00D7":"A1C1",
  "00E0":"A8A4",
  "00E1":"A8A2",
  "00E8":"A8A8",
  "00E9":"A8A6",
  "00EA":"A8BA",
  "00EC":"A8AC",
  "00ED":"A8AA",
  "00F2":"A8B0",
  "00F3":"A8AE",
  "00F7":"A1C2",
  "00F9":"A8B4",
  "00FA":"A8B2",
  "00FC":"A8B9",
  "0101":"A8A1",
  "0113":"A8A5",
  "011B":"A8A7",
  "012B":"A8A9",
  "014D":"A8AD",
  "016B":"A8B1",
  "01CE":"A8A3",
  "01D0":"A8AB",
  "01D2":"A8AF",
  "01D4":"A8B3",
  "01D6":"A8B5",
  "01D8":"A8B6",
  "01DA":"A8B7",
  "01DC":"A8B8",
  "02C7":"A1A6",
  "02C9":"A1A5",
  "0391":"A6A1",
  "0392":"A6A2",
  "0393":"A6A3",
  "0394":"A6A4",
  "0395":"A6A5",
  "0396":"A6A6",
  "0397":"A6A7",
  "0398":"A6A8",
  "0399":"A6A9",
  "039A":"A6AA",
  "039B":"A6AB",
  "039C":"A6AC",
  "039D":"A6AD",
  "039E":"A6AE",
  "039F":"A6AF",
  "03A0":"A6B0",
  "03A1":"A6B1",
  "03A3":"A6B2",
  "03A4":"A6B3",
  "03A5":"A6B4",
  "03A6":"A6B5",
  "03A7":"A6B6",
  "03A8":"A6B7",
  "03A9":"A6B8",
  "03B1":"A6C1",
  "03B2":"A6C2",
  "03B3":"A6C3",
  "03B4":"A6C4",
  "03B5":"A6C5",
  "03B6":"A6C6",
  "03B7":"A6C7",
  "03B8":"A6C8",
  "03B9":"A6C9",
  "03BA":"A6CA",
  "03BB":"A6CB",
  "03BC":"A6CC",
  "03BD":"A6CD",
  "03BE":"A6CE",
  "03BF":"A6CF",
  "03C0":"A6D0",
  "03C1":"A6D1",
  "03C3":"A6D2",
  "03C4":"A6D3",
  "03C5":"A6D4",
  "03C6":"A6D5",
  "03C7":"A6D6",
  "03C8":"A6D7",
  "03C9":"A6D8",
  "0401":"A7A7",
  "0410":"A7A1",
  "0411":"A7A2",
  "0412":"A7A3",
  "0413":"A7A4",
  "0414":"A7A5",
  "0415":"A7A6",
  "0416":"A7A8",
  "0417":"A7A9",
  "0418":"A7AA",
  "0419":"A7AB",
  "041A":"A7AC",
  "041B":"A7AD",
  "041C":"A7AE",
  "041D":"A7AF",
  "041E":"A7B0",
  "041F":"A7B1",
  "0420":"A7B2",
  "0421":"A7B3",
  "0422":"A7B4",
  "0423":"A7B5",
  "0424":"A7B6",
  "0425":"A7B7",
  "0426":"A7B8",
  "0427":"A7B9",
  "0428":"A7BA",
  "0429":"A7BB",
  "042A":"A7BC",
  "042B":"A7BD",
  "042C":"A7BE",
  "042D":"A7BF",
  "042E":"A7C0",
  "042F":"A7C1",
  "0430":"A7D1",
  "0431":"A7D2",
  "0432":"A7D3",
  "0433":"A7D4",
  "0434":"A7D5",
  "0435":"A7D6",
  "0436":"A7D8",
  "0437":"A7D9",
  "0438":"A7DA",
  "0439":"A7DB",
  "043A":"A7DC",
  "043B":"A7DD",
  "043C":"A7DE",
  "043D":"A7DF",
  "043E":"A7E0",
  "043F":"A7E1",
  "0440":"A7E2",
  "0441":"A7E3",
  "0442":"A7E4",
  "0443":"A7E5",
  "0444":"A7E6",
  "0445":"A7E7",
  "0446":"A7E8",
  "0447":"A7E9",
  "0448":"A7EA",
  "0449":"A7EB",
  "044A":"A7EC",
  "044B":"A7ED",
  "044C":"A7EE",
  "044D":"A7EF",
  "044E":"A7F0",
  "044F":"A7F1",
  "0451":"A7D7",
  "2014":"A1AA",
  "2016":"A1AC",
  "2018":"A1AE",
  "2019":"A1AF",
  "201C":"A1B0",
  "201D":"A1B1",
  "2026":"A1AD",
  "2030":"A1EB",
  "2032":"A1E4",
  "2033":"A1E5",
  "203B":"A1F9",
  "2103":"A1E6",
  "2116":"A1ED",
  "2160":"A2F1",
  "2161":"A2F2",
  "2162":"A2F3",
  "2163":"A2F4",
  "2164":"A2F5",
  "2165":"A2F6",
  "2166":"A2F7",
  "2167":"A2F8",
  "2168":"A2F9",
  "2169":"A2FA",
  "216A":"A2FB",
  "216B":"A2FC",
  "2190":"A1FB",
  "2191":"A1FC",
  "2192":"A1FA",
  "2193":"A1FD",
  "2208":"A1CA",
  "220F":"A1C7",
  "2211":"A1C6",
  "221A":"A1CC",
  "221D":"A1D8",
  "221E":"A1DE",
  "2220":"A1CF",
  "2225":"A1CE",
  "2227":"A1C4",
  "2228":"A1C5",
  "2229":"A1C9",
  "222A":"A1C8",
  "222B":"A1D2",
  "222E":"A1D3",
  "2234":"A1E0",
  "2235":"A1DF",
  "2236":"A1C3",
  "2237":"A1CB",
  "223D":"A1D7",
  "2248":"A1D6",
  "224C":"A1D5",
  "2260":"A1D9",
  "2261":"A1D4",
  "2264":"A1DC",
  "2265":"A1DD",
  "226E":"A1DA",
  "226F":"A1DB",
  "2299":"A1D1",
  "22A5":"A1CD",
  "2312":"A1D0",
  "2460":"A2D9",
  "2461":"A2DA",
  "2462":"A2DB",
  "2463":"A2DC",
  "2464":"A2DD",
  "2465":"A2DE",
  "2466":"A2DF",
  "2467":"A2E0",
  "2468":"A2E1",
  "2469":"A2E2",
  "2474":"A2C5",
  "2475":"A2C6",
  "2476":"A2C7",
  "2477":"A2C8",
  "2478":"A2C9",
  "2479":"A2CA",
  "247A":"A2CB",
  "247B":"A2CC",
  "247C":"A2CD",
  "247D":"A2CE",
  "247E":"A2CF",
  "247F":"A2D0",
  "2480":"A2D1",
  "2481":"A2D2",
  "2482":"A2D3",
  "2483":"A2D4",
  "2484":"A2D5",
  "2485":"A2D6",
  "2486":"A2D7",
  "2487":"A2D8",
  "2488":"A2B1",
  "2489":"A2B2",
  "248A":"A2B3",
  "248B":"A2B4",
  "248C":"A2B5",
  "248D":"A2B6",
  "248E":"A2B7",
  "248F":"A2B8",
  "2490":"A2B9",
  "2491":"A2BA",
  "2492":"A2BB",
  "2493":"A2BC",
  "2494":"A2BD",
  "2495":"A2BE",
  "2496":"A2BF",
  "2497":"A2C0",
  "2498":"A2C1",
  "2499":"A2C2",
  "249A":"A2C3",
  "249B":"A2C4",
  "2500":"A9A4",
  "2501":"A9A5",
  "2502":"A9A6",
  "2503":"A9A7",
  "2504":"A9A8",
  "2505":"A9A9",
  "2506":"A9AA",
  "2507":"A9AB",
  "2508":"A9AC",
  "2509":"A9AD",
  "250A":"A9AE",
  "250B":"A9AF",
  "250C":"A9B0",
  "250D":"A9B1",
  "250E":"A9B2",
  "250F":"A9B3",
  "2510":"A9B4",
  "2511":"A9B5",
  "2512":"A9B6",
  "2513":"A9B7",
  "2514":"A9B8",
  "2515":"A9B9",
  "2516":"A9BA",
  "2517":"A9BB",
  "2518":"A9BC",
  "2519":"A9BD",
  "251A":"A9BE",
  "251B":"A9BF",
  "251C":"A9C0",
  "251D":"A9C1",
  "251E":"A9C2",
  "251F":"A9C3",
  "2520":"A9C4",
  "2521":"A9C5",
  "2522":"A9C6",
  "2523":"A9C7",
  "2524":"A9C8",
  "2525":"A9C9",
  "2526":"A9CA",
  "2527":"A9CB",
  "2528":"A9CC",
  "2529":"A9CD",
  "252A":"A9CE",
  "252B":"A9CF",
  "252C":"A9D0",
  "252D":"A9D1",
  "252E":"A9D2",
  "252F":"A9D3",
  "2530":"A9D4",
  "2531":"A9D5",
  "2532":"A9D6",
  "2533":"A9D7",
  "2534":"A9D8",
  "2535":"A9D9",
  "2536":"A9DA",
  "2537":"A9DB",
  "2538":"A9DC",
  "2539":"A9DD",
  "253A":"A9DE",
  "253B":"A9DF",
  "253C":"A9E0",
  "253D":"A9E1",
  "253E":"A9E2",
  "253F":"A9E3",
  "2540":"A9E4",
  "2541":"A9E5",
  "2542":"A9E6",
  "2543":"A9E7",
  "2544":"A9E8",
  "2545":"A9E9",
  "2546":"A9EA",
  "2547":"A9EB",
  "2548":"A9EC",
  "2549":"A9ED",
  "254A":"A9EE",
  "254B":"A9EF",
  "25A0":"A1F6",
  "25A1":"A1F5",
  "25B2":"A1F8",
  "25B3":"A1F7",
  "25C6":"A1F4",
  "25C7":"A1F3",
  "25CB":"A1F0",
  "25CE":"A1F2",
  "25CF":"A1F1",
  "2605":"A1EF",
  "2606":"A1EE",
  "2640":"A1E2",
  "2642":"A1E1",
  "3000":"A1A1",
  "3001":"A1A2",
  "3002":"A1A3",
  "3003":"A1A8",
  "3005":"A1A9",
  "3008":"A1B4",
  "3009":"A1B5",
  "300A":"A1B6",
  "300B":"A1B7",
  "300C":"A1B8",
  "300D":"A1B9",
  "300E":"A1BA",
  "300F":"A1BB",
  "3010":"A1BE",
  "3011":"A1BF",
  "3013":"A1FE",
  "3014":"A1B2",
  "3015":"A1B3",
  "3016":"A1BC",
  "3017":"A1BD",
  "3041":"A4A1",
  "3042":"A4A2",
  "3043":"A4A3",
  "3044":"A4A4",
  "3045":"A4A5",
  "3046":"A4A6",
  "3047":"A4A7",
  "3048":"A4A8",
  "3049":"A4A9",
  "304A":"A4AA",
  "304B":"A4AB",
  "304C":"A4AC",
  "304D":"A4AD",
  "304E":"A4AE",
  "304F":"A4AF",
  "3050":"A4B0",
  "3051":"A4B1",
  "3052":"A4B2",
  "3053":"A4B3",
  "3054":"A4B4",
  "3055":"A4B5",
  "3056":"A4B6",
  "3057":"A4B7",
  "3058":"A4B8",
  "3059":"A4B9",
  "305A":"A4BA",
  "305B":"A4BB",
  "305C":"A4BC",
  "305D":"A4BD",
  "305E":"A4BE",
  "305F":"A4BF",
  "3060":"A4C0",
  "3061":"A4C1",
  "3062":"A4C2",
  "3063":"A4C3",
  "3064":"A4C4",
  "3065":"A4C5",
  "3066":"A4C6",
  "3067":"A4C7",
  "3068":"A4C8",
  "3069":"A4C9",
  "306A":"A4CA",
  "306B":"A4CB",
  "306C":"A4CC",
  "306D":"A4CD",
  "306E":"A4CE",
  "306F":"A4CF",
  "3070":"A4D0",
  "3071":"A4D1",
  "3072":"A4D2",
  "3073":"A4D3",
  "3074":"A4D4",
  "3075":"A4D5",
  "3076":"A4D6",
  "3077":"A4D7",
  "3078":"A4D8",
  "3079":"A4D9",
  "307A":"A4DA",
  "307B":"A4DB",
  "307C":"A4DC",
  "307D":"A4DD",
  "307E":"A4DE",
  "307F":"A4DF",
  "3080":"A4E0",
  "3081":"A4E1",
  "3082":"A4E2",
  "3083":"A4E3",
  "3084":"A4E4",
  "3085":"A4E5",
  "3086":"A4E6",
  "3087":"A4E7",
  "3088":"A4E8",
  "3089":"A4E9",
  "308A":"A4EA",
  "308B":"A4EB",
  "308C":"A4EC",
  "308D":"A4ED",
  "308E":"A4EE",
  "308F":"A4EF",
  "3090":"A4F0",
  "3091":"A4F1",
  "3092":"A4F2",
  "3093":"A4F3",
  "30A1":"A5A1",
  "30A2":"A5A2",
  "30A3":"A5A3",
  "30A4":"A5A4",
  "30A5":"A5A5",
  "30A6":"A5A6",
  "30A7":"A5A7",
  "30A8":"A5A8",
  "30A9":"A5A9",
  "30AA":"A5AA",
  "30AB":"A5AB",
  "30AC":"A5AC",
  "30AD":"A5AD",
  "30AE":"A5AE",
  "30AF":"A5AF",
  "30B0":"A5B0",
  "30B1":"A5B1",
  "30B2":"A5B2",
  "30B3":"A5B3",
  "30B4":"A5B4",
  "30B5":"A5B5",
  "30B6":"A5B6",
  "30B7":"A5B7",
  "30B8":"A5B8",
  "30B9":"A5B9",
  "30BA":"A5BA",
  "30BB":"A5BB",
  "30BC":"A5BC",
  "30BD":"A5BD",
  "30BE":"A5BE",
  "30BF":"A5BF",
  "30C0":"A5C0",
  "30C1":"A5C1",
  "30C2":"A5C2",
  "30C3":"A5C3",
  "30C4":"A5C4",
  "30C5":"A5C5",
  "30C6":"A5C6",
  "30C7":"A5C7",
  "30C8":"A5C8",
  "30C9":"A5C9",
  "30CA":"A5CA",
  "30CB":"A5CB",
  "30CC":"A5CC",
  "30CD":"A5CD",
  "30CE":"A5CE",
  "30CF":"A5CF",
  "30D0":"A5D0",
  "30D1":"A5D1",
  "30D2":"A5D2",
  "30D3":"A5D3",
  "30D4":"A5D4",
  "30D5":"A5D5",
  "30D6":"A5D6",
  "30D7":"A5D7",
  "30D8":"A5D8",
  "30D9":"A5D9",
  "30DA":"A5DA",
  "30DB":"A5DB",
  "30DC":"A5DC",
  "30DD":"A5DD",
  "30DE":"A5DE",
  "30DF":"A5DF",
  "30E0":"A5E0",
  "30E1":"A5E1",
  "30E2":"A5E2",
  "30E3":"A5E3",
  "30E4":"A5E4",
  "30E5":"A5E5",
  "30E6":"A5E6",
  "30E7":"A5E7",
  "30E8":"A5E8",
  "30E9":"A5E9",
  "30EA":"A5EA",
  "30EB":"A5EB",
  "30EC":"A5EC",
  "30ED":"A5ED",
  "30EE":"A5EE",
  "30EF":"A5EF",
  "30F0":"A5F0",
  "30F1":"A5F1",
  "30F2":"A5F2",
  "30F3":"A5F3",
  "30F4":"A5F4",
  "30F5":"A5F5",
  "30F6":"A5F6",
  "3105":"A8C5",
  "3106":"A8C6",
  "3107":"A8C7",
  "3108":"A8C8",
  "3109":"A8C9",
  "310A":"A8CA",
  "310B":"A8CB",
  "310C":"A8CC",
  "310D":"A8CD",
  "310E":"A8CE",
  "310F":"A8CF",
  "3110":"A8D0",
  "3111":"A8D1",
  "3112":"A8D2",
  "3113":"A8D3",
  "3114":"A8D4",
  "3115":"A8D5",
  "3116":"A8D6",
  "3117":"A8D7",
  "3118":"A8D8",
  "3119":"A8D9",
  "311A":"A8DA",
  "311B":"A8DB",
  "311C":"A8DC",
  "311D":"A8DD",
  "311E":"A8DE",
  "311F":"A8DF",
  "3120":"A8E0",
  "3121":"A8E1",
  "3122":"A8E2",
  "3123":"A8E3",
  "3124":"A8E4",
  "3125":"A8E5",
  "3126":"A8E6",
  "3127":"A8E7",
  "3128":"A8E8",
  "3129":"A8E9",
  "3220":"A2E5",
  "3221":"A2E6",
  "3222":"A2E7",
  "3223":"A2E8",
  "3224":"A2E9",
  "3225":"A2EA",
  "3226":"A2EB",
  "3227":"A2EC",
  "3228":"A2ED",
  "3229":"A2EE",
  "4E00":"D2BB",
  "4E01":"B6A1",
  "4E03":"C6DF",
  "4E07":"CDF2",
  "4E08":"D5C9",
  "4E09":"C8FD",
  "4E0A":"C9CF",
  "4E0B":"CFC2",
  "4E0C":"D8A2",
  "4E0D":"B2BB",
  "4E0E":"D3EB",
  "4E10":"D8A4",
  "4E11":"B3F3",
  "4E13":"D7A8",
  "4E14":"C7D2",
  "4E15":"D8A7",
  "4E16":"CAC0",
  "4E18":"C7F0",
  "4E19":"B1FB",
  "4E1A":"D2B5",
  "4E1B":"B4D4",
  "4E1C":"B6AB",
  "4E1D":"CBBF",
  "4E1E":"D8A9",
  "4E22":"B6AA",
  "4E24":"C1BD",
  "4E25":"D1CF",
  "4E27":"C9A5",
  "4E28":"D8AD",
  "4E2A":"B8F6",
  "4E2B":"D1BE",
  "4E2C":"E3DC",
  "4E2D":"D6D0",
  "4E30":"B7E1",
  "4E32":"B4AE",
  "4E34":"C1D9",
  "4E36":"D8BC",
  "4E38":"CDE8",
  "4E39":"B5A4",
  "4E3A":"CEAA",
  "4E3B":"D6F7",
  "4E3D":"C0F6",
  "4E3E":"BED9",
  "4E3F":"D8AF",
  "4E43":"C4CB",
  "4E45":"BEC3",
  "4E47":"D8B1",
  "4E48":"C3B4",
  "4E49":"D2E5",
  "4E4B":"D6AE",
  "4E4C":"CEDA",
  "4E4D":"D5A7",
  "4E4E":"BAF5",
  "4E4F":"B7A6",
  "4E50":"C0D6",
  "4E52":"C6B9",
  "4E53":"C5D2",
  "4E54":"C7C7",
  "4E56":"B9D4",
  "4E58":"B3CB",
  "4E59":"D2D2",
  "4E5C":"D8BF",
  "4E5D":"BEC5",
  "4E5E":"C6F2",
  "4E5F":"D2B2",
  "4E60":"CFB0",
  "4E61":"CFE7",
  "4E66":"CAE9",
  "4E69":"D8C0",
  "4E70":"C2F2",
  "4E71":"C2D2",
  "4E73":"C8E9",
  "4E7E":"C7AC",
  "4E86":"C1CB",
  "4E88":"D3E8",
  "4E89":"D5F9",
  "4E8B":"CAC2",
  "4E8C":"B6FE",
  "4E8D":"D8A1",
  "4E8E":"D3DA",
  "4E8F":"BFF7",
  "4E91":"D4C6",
  "4E92":"BBA5",
  "4E93":"D8C1",
  "4E94":"CEE5",
  "4E95":"BEAE",
  "4E98":"D8A8",
  "4E9A":"D1C7",
  "4E9B":"D0A9",
  "4E9F":"D8BD",
  "4EA0":"D9EF",
  "4EA1":"CDF6",
  "4EA2":"BFBA",
  "4EA4":"BDBB",
  "4EA5":"BAA5",
  "4EA6":"D2E0",
  "4EA7":"B2FA",
  "4EA8":"BAE0",
  "4EA9":"C4B6",
  "4EAB":"CFED",
  "4EAC":"BEA9",
  "4EAD":"CDA4",
  "4EAE":"C1C1",
  "4EB2":"C7D7",
  "4EB3":"D9F1",
  "4EB5":"D9F4",
  "4EBA":"C8CB",
  "4EBB":"D8E9",
  "4EBF":"D2DA",
  "4EC0":"CAB2",
  "4EC1":"C8CA",
  "4EC2":"D8EC",
  "4EC3":"D8EA",
  "4EC4":"D8C6",
  "4EC5":"BDF6",
  "4EC6":"C6CD",
  "4EC7":"B3F0",
  "4EC9":"D8EB",
  "4ECA":"BDF1",
  "4ECB":"BDE9",
  "4ECD":"C8D4",
  "4ECE":"B4D3",
  "4ED1":"C2D8",
  "4ED3":"B2D6",
  "4ED4":"D7D0",
  "4ED5":"CACB",
  "4ED6":"CBFB",
  "4ED7":"D5CC",
  "4ED8":"B8B6",
  "4ED9":"CFC9",
  "4EDD":"D9DA",
  "4EDE":"D8F0",
  "4EDF":"C7AA",
  "4EE1":"D8EE",
  "4EE3":"B4FA",
  "4EE4":"C1EE",
  "4EE5":"D2D4",
  "4EE8":"D8ED",
  "4EEA":"D2C7",
  "4EEB":"D8EF",
  "4EEC":"C3C7",
  "4EF0":"D1F6",
  "4EF2":"D6D9",
  "4EF3":"D8F2",
  "4EF5":"D8F5",
  "4EF6":"BCFE",
  "4EF7":"BCDB",
  "4EFB":"C8CE",
  "4EFD":"B7DD",
  "4EFF":"B7C2",
  "4F01":"C6F3",
  "4F09":"D8F8",
  "4F0A":"D2C1",
  "4F0D":"CEE9",
  "4F0E":"BCBF",
  "4F0F":"B7FC",
  "4F10":"B7A5",
  "4F11":"D0DD",
  "4F17":"D6DA",
  "4F18":"D3C5",
  "4F19":"BBEF",
  "4F1A":"BBE1",
  "4F1B":"D8F1",
  "4F1E":"C9A1",
  "4F1F":"CEB0",
  "4F20":"B4AB",
  "4F22":"D8F3",
  "4F24":"C9CB",
  "4F25":"D8F6",
  "4F26":"C2D7",
  "4F27":"D8F7",
  "4F2A":"CEB1",
  "4F2B":"D8F9",
  "4F2F":"B2AE",
  "4F30":"B9C0",
  "4F32":"D9A3",
  "4F34":"B0E9",
  "4F36":"C1E6",
  "4F38":"C9EC",
  "4F3A":"CBC5",
  "4F3C":"CBC6",
  "4F3D":"D9A4",
  "4F43":"B5E8",
  "4F46":"B5AB",
  "4F4D":"CEBB",
  "4F4E":"B5CD",
  "4F4F":"D7A1",
  "4F50":"D7F4",
  "4F51":"D3D3",
  "4F53":"CCE5",
  "4F55":"BACE",
  "4F57":"D9A2",
  "4F58":"D9DC",
  "4F59":"D3E0",
  "4F5A":"D8FD",
  "4F5B":"B7F0",
  "4F5C":"D7F7",
  "4F5D":"D8FE",
  "4F5E":"D8FA",
  "4F5F":"D9A1",
  "4F60":"C4E3",
  "4F63":"D3B6",
  "4F64":"D8F4",
  "4F65":"D9DD",
  "4F67":"D8FB",
  "4F69":"C5E5",
  "4F6C":"C0D0",
  "4F6F":"D1F0",
  "4F70":"B0DB",
  "4F73":"BCD1",
  "4F74":"D9A6",
  "4F76":"D9A5",
  "4F7B":"D9AC",
  "4F7C":"D9AE",
  "4F7E":"D9AB",
  "4F7F":"CAB9",
  "4F83":"D9A9",
  "4F84":"D6B6",
  "4F88":"B3DE",
  "4F89":"D9A8",
  "4F8B":"C0FD",
  "4F8D":"CACC",
  "4F8F":"D9AA",
  "4F91":"D9A7",
  "4F94":"D9B0",
  "4F97":"B6B1",
  "4F9B":"B9A9",
  "4F9D":"D2C0",
  "4FA0":"CFC0",
  "4FA3":"C2C2",
  "4FA5":"BDC4",
  "4FA6":"D5EC",
  "4FA7":"B2E0",
  "4FA8":"C7C8",
  "4FA9":"BFEB",
  "4FAA":"D9AD",
  "4FAC":"D9AF",
  "4FAE":"CEEA",
  "4FAF":"BAEE",
  "4FB5":"C7D6",
  "4FBF":"B1E3",
  "4FC3":"B4D9",
  "4FC4":"B6ED",
  "4FC5":"D9B4",
  "4FCA":"BFA1",
  "4FCE":"D9DE",
  "4FCF":"C7CE",
  "4FD0":"C0FE",
  "4FD1":"D9B8",
  "4FD7":"CBD7",
  "4FD8":"B7FD",
  "4FDA":"D9B5",
  "4FDC":"D9B7",
  "4FDD":"B1A3",
  "4FDE":"D3E1",
  "4FDF":"D9B9",
  "4FE1":"D0C5",
  "4FE3":"D9B6",
  "4FE6":"D9B1",
  "4FE8":"D9B2",
  "4FE9":"C1A9",
  "4FEA":"D9B3",
  "4FED":"BCF3",
  "4FEE":"D0DE",
  "4FEF":"B8A9",
  "4FF1":"BEE3",
  "4FF3":"D9BD",
  "4FF8":"D9BA",
  "4FFA":"B0B3",
  "4FFE":"D9C2",
  "500C":"D9C4",
  "500D":"B1B6",
  "500F":"D9BF",
  "5012":"B5B9",
  "5014":"BEF3",
  "5018":"CCC8",
  "5019":"BAF2",
  "501A":"D2D0",
  "501C":"D9C3",
  "501F":"BDE8",
  "5021":"B3AB",
  "5025":"D9C5",
  "5026":"BEEB",
  "5028":"D9C6",
  "5029":"D9BB",
  "502A":"C4DF",
  "502C":"D9BE",
  "502D":"D9C1",
  "502E":"D9C0",
  "503A":"D5AE",
  "503C":"D6B5",
  "503E":"C7E3",
  "5043":"D9C8",
  "5047":"BCD9",
  "5048":"D9CA",
  "504C":"D9BC",
  "504E":"D9CB",
  "504F":"C6AB",
  "5055":"D9C9",
  "505A":"D7F6",
  "505C":"CDA3",
  "5065":"BDA1",
  "506C":"D9CC",
  "5076":"C5BC",
  "5077":"CDB5",
  "507B":"D9CD",
  "507E":"D9C7",
  "507F":"B3A5",
  "5080":"BFFE",
  "5085":"B8B5",
  "5088":"C0FC",
  "508D":"B0F8",
  "50A3":"B4F6",
  "50A5":"D9CE",
  "50A7":"D9CF",
  "50A8":"B4A2",
  "50A9":"D9D0",
  "50AC":"B4DF",
  "50B2":"B0C1",
  "50BA":"D9D1",
  "50BB":"C9B5",
  "50CF":"CFF1",
  "50D6":"D9D2",
  "50DA":"C1C5",
  "50E6":"D9D6",
  "50E7":"C9AE",
  "50EC":"D9D5",
  "50ED":"D9D4",
  "50EE":"D9D7",
  "50F3":"CBDB",
  "50F5":"BDA9",
  "50FB":"C6A7",
  "5106":"D9D3",
  "5107":"D9D8",
  "510B":"D9D9",
  "5112":"C8E5",
  "5121":"C0DC",
  "513F":"B6F9",
  "5140":"D8A3",
  "5141":"D4CA",
  "5143":"D4AA",
  "5144":"D0D6",
  "5145":"B3E4",
  "5146":"D5D7",
  "5148":"CFC8",
  "5149":"B9E2",
  "514B":"BFCB",
  "514D":"C3E2",
  "5151":"B6D2",
  "5154":"CDC3",
  "5155":"D9EE",
  "5156":"D9F0",
  "515A":"B5B3",
  "515C":"B6B5",
  "5162":"BEA4",
  "5165":"C8EB",
  "5168":"C8AB",
  "516B":"B0CB",
  "516C":"B9AB",
  "516D":"C1F9",
  "516E":"D9E2",
  "5170":"C0BC",
  "5171":"B9B2",
  "5173":"B9D8",
  "5174":"D0CB",
  "5175":"B1F8",
  "5176":"C6E4",
  "5177":"BEDF",
  "5178":"B5E4",
  "5179":"D7C8",
  "517B":"D1F8",
  "517C":"BCE6",
  "517D":"CADE",
  "5180":"BCBD",
  "5181":"D9E6",
  "5182":"D8E7",
  "5185":"C4DA",
  "5188":"B8D4",
  "5189":"C8BD",
  "518C":"B2E1",
  "518D":"D4D9",
  "5192":"C3B0",
  "5195":"C3E1",
  "5196":"DAA2",
  "5197":"C8DF",
  "5199":"D0B4",
  "519B":"BEFC",
  "519C":"C5A9",
  "51A0":"B9DA",
  "51A2":"DAA3",
  "51A4":"D4A9",
  "51A5":"DAA4",
  "51AB":"D9FB",
  "51AC":"B6AC",
  "51AF":"B7EB",
  "51B0":"B1F9",
  "51B1":"D9FC",
  "51B2":"B3E5",
  "51B3":"BEF6",
  "51B5":"BFF6",
  "51B6":"D2B1",
  "51B7":"C0E4",
  "51BB":"B6B3",
  "51BC":"D9FE",
  "51BD":"D9FD",
  "51C0":"BEBB",
  "51C4":"C6E0",
  "51C6":"D7BC",
  "51C7":"DAA1",
  "51C9":"C1B9",
  "51CB":"B5F2",
  "51CC":"C1E8",
  "51CF":"BCF5",
  "51D1":"B4D5",
  "51DB":"C1DD",
  "51DD":"C4FD",
  "51E0":"BCB8",
  "51E1":"B7B2",
  "51E4":"B7EF",
  "51EB":"D9EC",
  "51ED":"C6BE",
  "51EF":"BFAD",
  "51F0":"BBCB",
  "51F3":"B5CA",
  "51F5":"DBC9",
  "51F6":"D0D7",
  "51F8":"CDB9",
  "51F9":"B0BC",
  "51FA":"B3F6",
  "51FB":"BBF7",
  "51FC":"DBCA",
  "51FD":"BAAF",
  "51FF":"D4E4",
  "5200":"B5B6",
  "5201":"B5F3",
  "5202":"D8D6",
  "5203":"C8D0",
  "5206":"B7D6",
  "5207":"C7D0",
  "5208":"D8D7",
  "520A":"BFAF",
  "520D":"DBBB",
  "520E":"D8D8",
  "5211":"D0CC",
  "5212":"BBAE",
  "5216":"EBBE",
  "5217":"C1D0",
  "5218":"C1F5",
  "5219":"D4F2",
  "521A":"B8D5",
  "521B":"B4B4",
  "521D":"B3F5",
  "5220":"C9BE",
  "5224":"C5D0",
  "5228":"C5D9",
  "5229":"C0FB",
  "522B":"B1F0",
  "522D":"D8D9",
  "522E":"B9CE",
  "5230":"B5BD",
  "5233":"D8DA",
  "5236":"D6C6",
  "5237":"CBA2",
  "5238":"C8AF",
  "5239":"C9B2",
  "523A":"B4CC",
  "523B":"BFCC",
  "523D":"B9F4",
  "523F":"D8DB",
  "5240":"D8DC",
  "5241":"B6E7",
  "5242":"BCC1",
  "5243":"CCEA",
  "524A":"CFF7",
  "524C":"D8DD",
  "524D":"C7B0",
  "5250":"B9D0",
  "5251":"BDA3",
  "5254":"CCDE",
  "5256":"C6CA",
  "525C":"D8E0",
  "525E":"D8DE",
  "5261":"D8DF",
  "5265":"B0FE",
  "5267":"BEE7",
  "5269":"CAA3",
  "526A":"BCF4",
  "526F":"B8B1",
  "5272":"B8EE",
  "527D":"D8E2",
  "527F":"BDCB",
  "5281":"D8E4",
  "5282":"D8E3",
  "5288":"C5FC",
  "5290":"D8E5",
  "5293":"D8E6",
  "529B":"C1A6",
  "529D":"C8B0",
  "529E":"B0EC",
  "529F":"B9A6",
  "52A0":"BCD3",
  "52A1":"CEF1",
  "52A2":"DBBD",
  "52A3":"C1D3",
  "52A8":"B6AF",
  "52A9":"D6FA",
  "52AA":"C5AC",
  "52AB":"BDD9",
  "52AC":"DBBE",
  "52AD":"DBBF",
  "52B1":"C0F8",
  "52B2":"BEA2",
  "52B3":"C0CD",
  "52BE":"DBC0",
  "52BF":"CAC6",
  "52C3":"B2AA",
  "52C7":"D3C2",
  "52C9":"C3E3",
  "52CB":"D1AB",
  "52D0":"DBC2",
  "52D2":"C0D5",
  "52D6":"DBC3",
  "52D8":"BFB1",
  "52DF":"C4BC",
  "52E4":"C7DA",
  "52F0":"DBC4",
  "52F9":"D9E8",
  "52FA":"C9D7",
  "52FE":"B9B4",
  "52FF":"CEF0",
  "5300":"D4C8",
  "5305":"B0FC",
  "5306":"B4D2",
  "5308":"D0D9",
  "530D":"D9E9",
  "530F":"DECB",
  "5310":"D9EB",
  "5315":"D8B0",
  "5316":"BBAF",
  "5317":"B1B1",
  "5319":"B3D7",
  "531A":"D8CE",
  "531D":"D4D1",
  "5320":"BDB3",
  "5321":"BFEF",
  "5323":"CFBB",
  "5326":"D8D0",
  "532A":"B7CB",
  "532E":"D8D1",
  "5339":"C6A5",
  "533A":"C7F8",
  "533B":"D2BD",
  "533E":"D8D2",
  "533F":"C4E4",
  "5341":"CAAE",
  "5343":"C7A7",
  "5345":"D8A6",
  "5347":"C9FD",
  "5348":"CEE7",
  "5349":"BBDC",
  "534A":"B0EB",
  "534E":"BBAA",
  "534F":"D0AD",
  "5351":"B1B0",
  "5352":"D7E4",
  "5353":"D7BF",
  "5355":"B5A5",
  "5356":"C2F4",
  "5357":"C4CF",
  "535A":"B2A9",
  "535C":"B2B7",
  "535E":"B1E5",
  "535F":"DFB2",
  "5360":"D5BC",
  "5361":"BFA8",
  "5362":"C2AC",
  "5363":"D8D5",
  "5364":"C2B1",
  "5366":"D8D4",
  "5367":"CED4",
  "5369":"DAE0",
  "536B":"CEC0",
  "536E":"D8B4",
  "536F":"C3AE",
  "5370":"D3A1",
  "5371":"CEA3",
  "5373":"BCB4",
  "5374":"C8B4",
  "5375":"C2D1",
  "5377":"BEED",
  "5378":"D0B6",
  "537A":"DAE1",
  "537F":"C7E4",
  "5382":"B3A7",
  "5384":"B6F2",
  "5385":"CCFC",
  "5386":"C0FA",
  "5389":"C0F7",
  "538B":"D1B9",
  "538C":"D1E1",
  "538D":"D8C7",
  "5395":"B2DE",
  "5398":"C0E5",
  "539A":"BAF1",
  "539D":"D8C8",
  "539F":"D4AD",
  "53A2":"CFE1",
  "53A3":"D8C9",
  "53A5":"D8CA",
  "53A6":"CFC3",
  "53A8":"B3F8",
  "53A9":"BEC7",
  "53AE":"D8CB",
  "53B6":"DBCC",
  "53BB":"C8A5",
  "53BF":"CFD8",
  "53C1":"C8FE",
  "53C2":"B2CE",
  "53C8":"D3D6",
  "53C9":"B2E6",
  "53CA":"BCB0",
  "53CB":"D3D1",
  "53CC":"CBAB",
  "53CD":"B7B4",
  "53D1":"B7A2",
  "53D4":"CAE5",
  "53D6":"C8A1",
  "53D7":"CADC",
  "53D8":"B1E4",
  "53D9":"D0F0",
  "53DB":"C5D1",
  "53DF":"DBC5",
  "53E0":"B5FE",
  "53E3":"BFDA",
  "53E4":"B9C5",
  "53E5":"BEE4",
  "53E6":"C1ED",
  "53E8":"DFB6",
  "53E9":"DFB5",
  "53EA":"D6BB",
  "53EB":"BDD0",
  "53EC":"D5D9",
  "53ED":"B0C8",
  "53EE":"B6A3",
  "53EF":"BFC9",
  "53F0":"CCA8",
  "53F1":"DFB3",
  "53F2":"CAB7",
  "53F3":"D3D2",
  "53F5":"D8CF",
  "53F6":"D2B6",
  "53F7":"BAC5",
  "53F8":"CBBE",
  "53F9":"CCBE",
  "53FB":"DFB7",
  "53FC":"B5F0",
  "53FD":"DFB4",
  "5401":"D3F5",
  "5403":"B3D4",
  "5404":"B8F7",
  "5406":"DFBA",
  "5408":"BACF",
  "5409":"BCAA",
  "540A":"B5F5",
  "540C":"CDAC",
  "540D":"C3FB",
  "540E":"BAF3",
  "540F":"C0F4",
  "5410":"CDC2",
  "5411":"CFF2",
  "5412":"DFB8",
  "5413":"CFC5",
  "5415":"C2C0",
  "5416":"DFB9",
  "5417":"C2F0",
  "541B":"BEFD",
  "541D":"C1DF",
  "541E":"CDCC",
  "541F":"D2F7",
  "5420":"B7CD",
  "5421":"DFC1",
  "5423":"DFC4",
  "5426":"B7F1",
  "5427":"B0C9",
  "5428":"B6D6",
  "5429":"B7D4",
  "542B":"BAAC",
  "542C":"CCFD",
  "542D":"BFD4",
  "542E":"CBB1",
  "542F":"C6F4",
  "5431":"D6A8",
  "5432":"DFC5",
  "5434":"CEE2",
  "5435":"B3B3",
  "5438":"CEFC",
  "5439":"B4B5",
  "543B":"CEC7",
  "543C":"BAF0",
  "543E":"CEE1",
  "5440":"D1BD",
  "5443":"DFC0",
  "5446":"B4F4",
  "5448":"B3CA",
  "544A":"B8E6",
  "544B":"DFBB",
  "5450":"C4C5",
  "5452":"DFBC",
  "5453":"DFBD",
  "5454":"DFBE",
  "5455":"C5BB",
  "5456":"DFBF",
  "5457":"DFC2",
  "5458":"D4B1",
  "5459":"DFC3",
  "545B":"C7BA",
  "545C":"CED8",
  "5462":"C4D8",
  "5464":"DFCA",
  "5466":"DFCF",
  "5468":"D6DC",
  "5471":"DFC9",
  "5472":"DFDA",
  "5473":"CEB6",
  "5475":"BAC7",
  "5476":"DFCE",
  "5477":"DFC8",
  "5478":"C5DE",
  "547B":"C9EB",
  "547C":"BAF4",
  "547D":"C3FC",
  "5480":"BED7",
  "5482":"DFC6",
  "5484":"DFCD",
  "5486":"C5D8",
  "548B":"D5A6",
  "548C":"BACD",
  "548E":"BECC",
  "548F":"D3BD",
  "5490":"B8C0",
  "5492":"D6E4",
  "5494":"DFC7",
  "5495":"B9BE",
  "5496":"BFA7",
  "5499":"C1FC",
  "549A":"DFCB",
  "549B":"DFCC",
  "549D":"DFD0",
  "54A3":"DFDB",
  "54A4":"DFE5",
  "54A6":"DFD7",
  "54A7":"DFD6",
  "54A8":"D7C9",
  "54A9":"DFE3",
  "54AA":"DFE4",
  "54AB":"E5EB",
  "54AC":"D2A7",
  "54AD":"DFD2",
  "54AF":"BFA9",
  "54B1":"D4DB",
  "54B3":"BFC8",
  "54B4":"DFD4",
  "54B8":"CFCC",
  "54BB":"DFDD",
  "54BD":"D1CA",
  "54BF":"DFDE",
  "54C0":"B0A7",
  "54C1":"C6B7",
  "54C2":"DFD3",
  "54C4":"BAE5",
  "54C6":"B6DF",
  "54C7":"CDDB",
  "54C8":"B9FE",
  "54C9":"D4D5",
  "54CC":"DFDF",
  "54CD":"CFEC",
  "54CE":"B0A5",
  "54CF":"DFE7",
  "54D0":"DFD1",
  "54D1":"D1C6",
  "54D2":"DFD5",
  "54D3":"DFD8",
  "54D4":"DFD9",
  "54D5":"DFDC",
  "54D7":"BBA9",
  "54D9":"DFE0",
  "54DA":"DFE1",
  "54DC":"DFE2",
  "54DD":"DFE6",
  "54DE":"DFE8",
  "54DF":"D3B4",
  "54E5":"B8E7",
  "54E6":"C5B6",
  "54E7":"DFEA",
  "54E8":"C9DA",
  "54E9":"C1A8",
  "54EA":"C4C4",
  "54ED":"BFDE",
  "54EE":"CFF8",
  "54F2":"D5DC",
  "54F3":"DFEE",
  "54FA":"B2B8",
  "54FC":"BADF",
  "54FD":"DFEC",
  "54FF":"DBC1",
  "5501":"D1E4",
  "5506":"CBF4",
  "5507":"B4BD",
  "5509":"B0A6",
  "550F":"DFF1",
  "5510":"CCC6",
  "5511":"DFF2",
  "5514":"DFED",
  "551B":"DFE9",
  "5520":"DFEB",
  "5522":"DFEF",
  "5523":"DFF0",
  "5524":"BBBD",
  "5527":"DFF3",
  "552A":"DFF4",
  "552C":"BBA3",
  "552E":"CADB",
  "552F":"CEA8",
  "5530":"E0A7",
  "5531":"B3AA",
  "5533":"E0A6",
  "5537":"E0A1",
  "553C":"DFFE",
  "553E":"CDD9",
  "553F":"DFFC",
  "5541":"DFFA",
  "5543":"BFD0",
  "5544":"D7C4",
  "5546":"C9CC",
  "5549":"DFF8",
  "554A":"B0A1",
  "5550":"DFFD",
  "5555":"DFFB",
  "5556":"E0A2",
  "555C":"E0A8",
  "5561":"B7C8",
  "5564":"C6A1",
  "5565":"C9B6",
  "5566":"C0B2",
  "5567":"DFF5",
  "556A":"C5BE",
  "556C":"D8C4",
  "556D":"DFF9",
  "556E":"C4F6",
  "5575":"E0A3",
  "5576":"E0A4",
  "5577":"E0A5",
  "5578":"D0A5",
  "557B":"E0B4",
  "557C":"CCE4",
  "557E":"E0B1",
  "5580":"BFA6",
  "5581":"E0AF",
  "5582":"CEB9",
  "5583":"E0AB",
  "5584":"C9C6",
  "5587":"C0AE",
  "5588":"E0AE",
  "5589":"BAED",
  "558A":"BAB0",
  "558B":"E0A9",
  "558F":"DFF6",
  "5591":"E0B3",
  "5594":"E0B8",
  "5598":"B4AD",
  "5599":"E0B9",
  "559C":"CFB2",
  "559D":"BAC8",
  "559F":"E0B0",
  "55A7":"D0FA",
  "55B1":"E0AC",
  "55B3":"D4FB",
  "55B5":"DFF7",
  "55B7":"C5E7",
  "55B9":"E0AD",
  "55BB":"D3F7",
  "55BD":"E0B6",
  "55BE":"E0B7",
  "55C4":"E0C4",
  "55C5":"D0E1",
  "55C9":"E0BC",
  "55CC":"E0C9",
  "55CD":"E0CA",
  "55D1":"E0BE",
  "55D2":"E0AA",
  "55D3":"C9A4",
  "55D4":"E0C1",
  "55D6":"E0B2",
  "55DC":"CAC8",
  "55DD":"E0C3",
  "55DF":"E0B5",
  "55E1":"CECB",
  "55E3":"CBC3",
  "55E4":"E0CD",
  "55E5":"E0C6",
  "55E6":"E0C2",
  "55E8":"E0CB",
  "55EA":"E0BA",
  "55EB":"E0BF",
  "55EC":"E0C0",
  "55EF":"E0C5",
  "55F2":"E0C7",
  "55F3":"E0C8",
  "55F5":"E0CC",
  "55F7":"E0BB",
  "55FD":"CBD4",
  "55FE":"E0D5",
  "5600":"E0D6",
  "5601":"E0D2",
  "5608":"E0D0",
  "5609":"BCCE",
  "560C":"E0D1",
  "560E":"B8C2",
  "560F":"D8C5",
  "5618":"D0EA",
  "561B":"C2EF",
  "561E":"E0CF",
  "561F":"E0BD",
  "5623":"E0D4",
  "5624":"E0D3",
  "5627":"E0D7",
  "562C":"E0DC",
  "562D":"E0D8",
  "5631":"D6F6",
  "5632":"B3B0",
  "5634":"D7EC",
  "5636":"CBBB",
  "5639":"E0DA",
  "563B":"CEFB",
  "563F":"BAD9",
  "564C":"E0E1",
  "564D":"E0DD",
  "564E":"D2AD",
  "5654":"E0E2",
  "5657":"E0DB",
  "5658":"E0D9",
  "5659":"E0DF",
  "565C":"E0E0",
  "5662":"E0DE",
  "5664":"E0E4",
  "5668":"C6F7",
  "5669":"D8AC",
  "566A":"D4EB",
  "566B":"E0E6",
  "566C":"CAC9",
  "5671":"E0E5",
  "5676":"B8C1",
  "567B":"E0E7",
  "567C":"E0E8",
  "5685":"E0E9",
  "5686":"E0E3",
  "568E":"BABF",
  "568F":"CCE7",
  "5693":"E0EA",
  "56A3":"CFF9",
  "56AF":"E0EB",
  "56B7":"C8C2",
  "56BC":"BDC0",
  "56CA":"C4D2",
  "56D4":"E0EC",
  "56D7":"E0ED",
  "56DA":"C7F4",
  "56DB":"CBC4",
  "56DD":"E0EE",
  "56DE":"BBD8",
  "56DF":"D8B6",
  "56E0":"D2F2",
  "56E1":"E0EF",
  "56E2":"CDC5",
  "56E4":"B6DA",
  "56EB":"E0F1",
  "56ED":"D4B0",
  "56F0":"C0A7",
  "56F1":"B4D1",
  "56F4":"CEA7",
  "56F5":"E0F0",
  "56F9":"E0F2",
  "56FA":"B9CC",
  "56FD":"B9FA",
  "56FE":"CDBC",
  "56FF":"E0F3",
  "5703":"C6D4",
  "5704":"E0F4",
  "5706":"D4B2",
  "5708":"C8A6",
  "5709":"E0F6",
  "570A":"E0F5",
  "571C":"E0F7",
  "571F":"CDC1",
  "5723":"CAA5",
  "5728":"D4DA",
  "5729":"DBD7",
  "572A":"DBD9",
  "572C":"DBD8",
  "572D":"B9E7",
  "572E":"DBDC",
  "572F":"DBDD",
  "5730":"B5D8",
  "5733":"DBDA",
  "5739":"DBDB",
  "573A":"B3A1",
  "573B":"DBDF",
  "573E":"BBF8",
  "5740":"D6B7",
  "5742":"DBE0",
  "5747":"BEF9",
  "574A":"B7BB",
  "574C":"DBD0",
  "574D":"CCAE",
  "574E":"BFB2",
  "574F":"BBB5",
  "5750":"D7F8",
  "5751":"BFD3",
  "5757":"BFE9",
  "575A":"BCE1",
  "575B":"CCB3",
  "575C":"DBDE",
  "575D":"B0D3",
  "575E":"CEEB",
  "575F":"B7D8",
  "5760":"D7B9",
  "5761":"C6C2",
  "5764":"C0A4",
  "5766":"CCB9",
  "5768":"DBE7",
  "5769":"DBE1",
  "576A":"C6BA",
  "576B":"DBE3",
  "576D":"DBE8",
  "576F":"C5F7",
  "5773":"DBEA",
  "5776":"DBE9",
  "5777":"BFC0",
  "577B":"DBE6",
  "577C":"DBE5",
  "5782":"B4B9",
  "5783":"C0AC",
  "5784":"C2A2",
  "5785":"DBE2",
  "5786":"DBE4",
  "578B":"D0CD",
  "578C":"DBED",
  "5792":"C0DD",
  "5793":"DBF2",
  "579B":"B6E2",
  "57A0":"DBF3",
  "57A1":"DBD2",
  "57A2":"B9B8",
  "57A3":"D4AB",
  "57A4":"DBEC",
  "57A6":"BFD1",
  "57A7":"DBF0",
  "57A9":"DBD1",
  "57AB":"B5E6",
  "57AD":"DBEB",
  "57AE":"BFE5",
  "57B2":"DBEE",
  "57B4":"DBF1",
  "57B8":"DBF9",
  "57C2":"B9A1",
  "57C3":"B0A3",
  "57CB":"C2F1",
  "57CE":"B3C7",
  "57CF":"DBEF",
  "57D2":"DBF8",
  "57D4":"C6D2",
  "57D5":"DBF4",
  "57D8":"DBF5",
  "57D9":"DBF7",
  "57DA":"DBF6",
  "57DD":"DBFE",
  "57DF":"D3F2",
  "57E0":"B2BA",
  "57E4":"DBFD",
  "57ED":"DCA4",
  "57EF":"DBFB",
  "57F4":"DBFA",
  "57F8":"DBFC",
  "57F9":"C5E0",
  "57FA":"BBF9",
  "57FD":"DCA3",
  "5800":"DCA5",
  "5802":"CCC3",
  "5806":"B6D1",
  "5807":"DDC0",
  "580B":"DCA1",
  "580D":"DCA2",
  "5811":"C7B5",
  "5815":"B6E9",
  "5819":"DCA7",
  "581E":"DCA6",
  "5820":"DCA9",
  "5821":"B1A4",
  "5824":"B5CC",
  "582A":"BFB0",
  "5830":"D1DF",
  "5835":"B6C2",
  "5844":"DCA8",
  "584C":"CBFA",
  "584D":"EBF3",
  "5851":"CBDC",
  "5854":"CBFE",
  "5858":"CCC1",
  "585E":"C8FB",
  "5865":"DCAA",
  "586B":"CCEE",
  "586C":"DCAB",
  "587E":"DBD3",
  "5880":"DCAF",
  "5881":"DCAC",
  "5883":"BEB3",
  "5885":"CAFB",
  "5889":"DCAD",
  "5892":"C9CA",
  "5893":"C4B9",
  "5899":"C7BD",
  "589A":"DCAE",
  "589E":"D4F6",
  "589F":"D0E6",
  "58A8":"C4AB",
  "58A9":"B6D5",
  "58BC":"DBD4",
  "58C1":"B1DA",
  "58C5":"DBD5",
  "58D1":"DBD6",
  "58D5":"BABE",
  "58E4":"C8C0",
  "58EB":"CABF",
  "58EC":"C8C9",
  "58EE":"D7B3",
  "58F0":"C9F9",
  "58F3":"BFC7",
  "58F6":"BAF8",
  "58F9":"D2BC",
  "5902":"E2BA",
  "5904":"B4A6",
  "5907":"B1B8",
  "590D":"B8B4",
  "590F":"CFC4",
  "5914":"D9E7",
  "5915":"CFA6",
  "5916":"CDE2",
  "5919":"D9ED",
  "591A":"B6E0",
  "591C":"D2B9",
  "591F":"B9BB",
  "5924":"E2B9",
  "5925":"E2B7",
  "5927":"B4F3",
  "5929":"CCEC",
  "592A":"CCAB",
  "592B":"B7F2",
  "592D":"D8B2",
  "592E":"D1EB",
  "592F":"BABB",
  "5931":"CAA7",
  "5934":"CDB7",
  "5937":"D2C4",
  "5938":"BFE4",
  "5939":"BCD0",
  "593A":"B6E1",
  "593C":"DEC5",
  "5941":"DEC6",
  "5942":"DBBC",
  "5944":"D1D9",
  "5947":"C6E6",
  "5948":"C4CE",
  "5949":"B7EE",
  "594B":"B7DC",
  "594E":"BFFC",
  "594F":"D7E0",
  "5951":"C6F5",
  "5954":"B1BC",
  "5955":"DEC8",
  "5956":"BDB1",
  "5957":"CCD7",
  "5958":"DECA",
  "595A":"DEC9",
  "5960":"B5EC",
  "5962":"C9DD",
  "5965":"B0C2",
  "5973":"C5AE",
  "5974":"C5AB",
  "5976":"C4CC",
  "5978":"BCE9",
  "5979":"CBFD",
  "597D":"BAC3",
  "5981":"E5F9",
  "5982":"C8E7",
  "5983":"E5FA",
  "5984":"CDFD",
  "5986":"D7B1",
  "5987":"B8BE",
  "5988":"C2E8",
  "598A":"C8D1",
  "598D":"E5FB",
  "5992":"B6CA",
  "5993":"BCCB",
  "5996":"D1FD",
  "5997":"E6A1",
  "5999":"C3EE",
  "599E":"E6A4",
  "59A3":"E5FE",
  "59A4":"E6A5",
  "59A5":"CDD7",
  "59A8":"B7C1",
  "59A9":"E5FC",
  "59AA":"E5FD",
  "59AB":"E6A3",
  "59AE":"C4DD",
  "59AF":"E6A8",
  "59B2":"E6A7",
  "59B9":"C3C3",
  "59BB":"C6DE",
  "59BE":"E6AA",
  "59C6":"C4B7",
  "59CA":"E6A2",
  "59CB":"CABC",
  "59D0":"BDE3",
  "59D1":"B9C3",
  "59D2":"E6A6",
  "59D3":"D0D5",
  "59D4":"CEAF",
  "59D7":"E6A9",
  "59D8":"E6B0",
  "59DA":"D2A6",
  "59DC":"BDAA",
  "59DD":"E6AD",
  "59E3":"E6AF",
  "59E5":"C0D1",
  "59E8":"D2CC",
  "59EC":"BCA7",
  "59F9":"E6B1",
  "59FB":"D2F6",
  "59FF":"D7CB",
  "5A01":"CDFE",
  "5A03":"CDDE",
  "5A04":"C2A6",
  "5A05":"E6AB",
  "5A06":"E6AC",
  "5A07":"BDBF",
  "5A08":"E6AE",
  "5A09":"E6B3",
  "5A0C":"E6B2",
  "5A11":"E6B6",
  "5A13":"E6B8",
  "5A18":"C4EF",
  "5A1C":"C4C8",
  "5A1F":"BEEA",
  "5A20":"C9EF",
  "5A23":"E6B7",
  "5A25":"B6F0",
  "5A29":"C3E4",
  "5A31":"D3E9",
  "5A32":"E6B4",
  "5A34":"E6B5",
  "5A36":"C8A2",
  "5A3C":"E6BD",
  "5A40":"E6B9",
  "5A46":"C6C5",
  "5A49":"CDF1",
  "5A4A":"E6BB",
  "5A55":"E6BC",
  "5A5A":"BBE9",
  "5A62":"E6BE",
  "5A67":"E6BA",
  "5A6A":"C0B7",
  "5A74":"D3A4",
  "5A75":"E6BF",
  "5A76":"C9F4",
  "5A77":"E6C3",
  "5A7A":"E6C4",
  "5A7F":"D0F6",
  "5A92":"C3BD",
  "5A9A":"C3C4",
  "5A9B":"E6C2",
  "5AAA":"E6C1",
  "5AB2":"E6C7",
  "5AB3":"CFB1",
  "5AB5":"EBF4",
  "5AB8":"E6CA",
  "5ABE":"E6C5",
  "5AC1":"BCDE",
  "5AC2":"C9A9",
  "5AC9":"BCB5",
  "5ACC":"CFD3",
  "5AD2":"E6C8",
  "5AD4":"E6C9",
  "5AD6":"E6CE",
  "5AD8":"E6D0",
  "5ADC":"E6D1",
  "5AE0":"E6CB",
  "5AE1":"B5D5",
  "5AE3":"E6CC",
  "5AE6":"E6CF",
  "5AE9":"C4DB",
  "5AEB":"E6C6",
  "5AF1":"E6CD",
  "5B09":"E6D2",
  "5B16":"E6D4",
  "5B17":"E6D3",
  "5B32":"E6D5",
  "5B34":"D9F8",
  "5B37":"E6D6",
  "5B40":"E6D7",
  "5B50":"D7D3",
  "5B51":"E6DD",
  "5B53":"E6DE",
  "5B54":"BFD7",
  "5B55":"D4D0",
  "5B57":"D7D6",
  "5B58":"B4E6",
  "5B59":"CBEF",
  "5B5A":"E6DA",
  "5B5B":"D8C3",
  "5B5C":"D7CE",
  "5B5D":"D0A2",
  "5B5F":"C3CF",
  "5B62":"E6DF",
  "5B63":"BCBE",
  "5B64":"B9C2",
  "5B65":"E6DB",
  "5B66":"D1A7",
  "5B69":"BAA2",
  "5B6A":"C2CF",
  "5B6C":"D8AB",
  "5B70":"CAEB",
  "5B71":"E5EE",
  "5B73":"E6DC",
  "5B75":"B7F5",
  "5B7A":"C8E6",
  "5B7D":"C4F5",
  "5B80":"E5B2",
  "5B81":"C4FE",
  "5B83":"CBFC",
  "5B84":"E5B3",
  "5B85":"D5AC",
  "5B87":"D3EE",
  "5B88":"CAD8",
  "5B89":"B0B2",
  "5B8B":"CBCE",
  "5B8C":"CDEA",
  "5B8F":"BAEA",
  "5B93":"E5B5",
  "5B95":"E5B4",
  "5B97":"D7DA",
  "5B98":"B9D9",
  "5B99":"D6E6",
  "5B9A":"B6A8",
  "5B9B":"CDF0",
  "5B9C":"D2CB",
  "5B9D":"B1A6",
  "5B9E":"CAB5",
  "5BA0":"B3E8",
  "5BA1":"C9F3",
  "5BA2":"BFCD",
  "5BA3":"D0FB",
  "5BA4":"CAD2",
  "5BA5":"E5B6",
  "5BA6":"BBC2",
  "5BAA":"CFDC",
  "5BAB":"B9AC",
  "5BB0":"D4D7",
  "5BB3":"BAA6",
  "5BB4":"D1E7",
  "5BB5":"CFFC",
  "5BB6":"BCD2",
  "5BB8":"E5B7",
  "5BB9":"C8DD",
  "5BBD":"BFED",
  "5BBE":"B1F6",
  "5BBF":"CBDE",
  "5BC2":"BCC5",
  "5BC4":"BCC4",
  "5BC5":"D2FA",
  "5BC6":"C3DC",
  "5BC7":"BFDC",
  "5BCC":"B8BB",
  "5BD0":"C3C2",
  "5BD2":"BAAE",
  "5BD3":"D4A2",
  "5BDD":"C7DE",
  "5BDE":"C4AF",
  "5BDF":"B2EC",
  "5BE1":"B9D1",
  "5BE4":"E5BB",
  "5BE5":"C1C8",
  "5BE8":"D5AF",
  "5BEE":"E5BC",
  "5BF0":"E5BE",
  "5BF8":"B4E7",
  "5BF9":"B6D4",
  "5BFA":"CBC2",
  "5BFB":"D1B0",
  "5BFC":"B5BC",
  "5BFF":"CAD9",
  "5C01":"B7E2",
  "5C04":"C9E4",
  "5C06":"BDAB",
  "5C09":"CEBE",
  "5C0A":"D7F0",
  "5C0F":"D0A1",
  "5C11":"C9D9",
  "5C14":"B6FB",
  "5C15":"E6D8",
  "5C16":"BCE2",
  "5C18":"B3BE",
  "5C1A":"C9D0",
  "5C1C":"E6D9",
  "5C1D":"B3A2",
  "5C22":"DECC",
  "5C24":"D3C8",
  "5C25":"DECD",
  "5C27":"D2A2",
  "5C2C":"DECE",
  "5C31":"BECD",
  "5C34":"DECF",
  "5C38":"CAAC",
  "5C39":"D2FC",
  "5C3A":"B3DF",
  "5C3B":"E5EA",
  "5C3C":"C4E1",
  "5C3D":"BEA1",
  "5C3E":"CEB2",
  "5C3F":"C4F2",
  "5C40":"BED6",
  "5C41":"C6A8",
  "5C42":"B2E3",
  "5C45":"BED3",
  "5C48":"C7FC",
  "5C49":"CCEB",
  "5C4A":"BDEC",
  "5C4B":"CEDD",
  "5C4E":"CABA",
  "5C4F":"C6C1",
  "5C50":"E5EC",
  "5C51":"D0BC",
  "5C55":"D5B9",
  "5C59":"E5ED",
  "5C5E":"CAF4",
  "5C60":"CDC0",
  "5C61":"C2C5",
  "5C63":"E5EF",
  "5C65":"C2C4",
  "5C66":"E5F0",
  "5C6E":"E5F8",
  "5C6F":"CDCD",
  "5C71":"C9BD",
  "5C79":"D2D9",
  "5C7A":"E1A8",
  "5C7F":"D3EC",
  "5C81":"CBEA",
  "5C82":"C6F1",
  "5C88":"E1AC",
  "5C8C":"E1A7",
  "5C8D":"E1A9",
  "5C90":"E1AA",
  "5C91":"E1AF",
  "5C94":"B2ED",
  "5C96":"E1AB",
  "5C97":"B8DA",
  "5C98":"E1AD",
  "5C99":"E1AE",
  "5C9A":"E1B0",
  "5C9B":"B5BA",
  "5C9C":"E1B1",
  "5CA2":"E1B3",
  "5CA3":"E1B8",
  "5CA9":"D1D2",
  "5CAB":"E1B6",
  "5CAC":"E1B5",
  "5CAD":"C1EB",
  "5CB1":"E1B7",
  "5CB3":"D4C0",
  "5CB5":"E1B2",
  "5CB7":"E1BA",
  "5CB8":"B0B6",
  "5CBD":"E1B4",
  "5CBF":"BFF9",
  "5CC1":"E1B9",
  "5CC4":"E1BB",
  "5CCB":"E1BE",
  "5CD2":"E1BC",
  "5CD9":"D6C5",
  "5CE1":"CFBF",
  "5CE4":"E1BD",
  "5CE5":"E1BF",
  "5CE6":"C2CD",
  "5CE8":"B6EB",
  "5CEA":"D3F8",
  "5CED":"C7CD",
  "5CF0":"B7E5",
  "5CFB":"BEFE",
  "5D02":"E1C0",
  "5D03":"E1C1",
  "5D06":"E1C7",
  "5D07":"B3E7",
  "5D0E":"C6E9",
  "5D14":"B4DE",
  "5D16":"D1C2",
  "5D1B":"E1C8",
  "5D1E":"E1C6",
  "5D24":"E1C5",
  "5D26":"E1C3",
  "5D27":"E1C2",
  "5D29":"B1C0",
  "5D2D":"D5B8",
  "5D2E":"E1C4",
  "5D34":"E1CB",
  "5D3D":"E1CC",
  "5D3E":"E1CA",
  "5D47":"EFFA",
  "5D4A":"E1D3",
  "5D4B":"E1D2",
  "5D4C":"C7B6",
  "5D58":"E1C9",
  "5D5B":"E1CE",
  "5D5D":"E1D0",
  "5D69":"E1D4",
  "5D6B":"E1D1",
  "5D6C":"E1CD",
  "5D6F":"E1CF",
  "5D74":"E1D5",
  "5D82":"E1D6",
  "5D99":"E1D7",
  "5D9D":"E1D8",
  "5DB7":"E1DA",
  "5DC5":"E1DB",
  "5DCD":"CEA1",
  "5DDB":"E7DD",
  "5DDD":"B4A8",
  "5DDE":"D6DD",
  "5DE1":"D1B2",
  "5DE2":"B3B2",
  "5DE5":"B9A4",
  "5DE6":"D7F3",
  "5DE7":"C7C9",
  "5DE8":"BEDE",
  "5DE9":"B9AE",
  "5DEB":"CED7",
  "5DEE":"B2EE",
  "5DEF":"DBCF",
  "5DF1":"BCBA",
  "5DF2":"D2D1",
  "5DF3":"CBC8",
  "5DF4":"B0CD",
  "5DF7":"CFEF",
  "5DFD":"D9E3",
  "5DFE":"BDED",
  "5E01":"B1D2",
  "5E02":"CAD0",
  "5E03":"B2BC",
  "5E05":"CBA7",
  "5E06":"B7AB",
  "5E08":"CAA6",
  "5E0C":"CFA3",
  "5E0F":"E0F8",
  "5E10":"D5CA",
  "5E11":"E0FB",
  "5E14":"E0FA",
  "5E15":"C5C1",
  "5E16":"CCFB",
  "5E18":"C1B1",
  "5E19":"E0F9",
  "5E1A":"D6E3",
  "5E1B":"B2AF",
  "5E1C":"D6C4",
  "5E1D":"B5DB",
  "5E26":"B4F8",
  "5E27":"D6A1",
  "5E2D":"CFAF",
  "5E2E":"B0EF",
  "5E31":"E0FC",
  "5E37":"E1A1",
  "5E38":"B3A3",
  "5E3B":"E0FD",
  "5E3C":"E0FE",
  "5E3D":"C3B1",
  "5E42":"C3DD",
  "5E44":"E1A2",
  "5E45":"B7F9",
  "5E4C":"BBCF",
  "5E54":"E1A3",
  "5E55":"C4BB",
  "5E5B":"E1A4",
  "5E5E":"E1A5",
  "5E61":"E1A6",
  "5E62":"B4B1",
  "5E72":"B8C9",
  "5E73":"C6BD",
  "5E74":"C4EA",
  "5E76":"B2A2",
  "5E78":"D0D2",
  "5E7A":"E7DB",
  "5E7B":"BBC3",
  "5E7C":"D3D7",
  "5E7D":"D3C4",
  "5E7F":"B9E3",
  "5E80":"E2CF",
  "5E84":"D7AF",
  "5E86":"C7EC",
  "5E87":"B1D3",
  "5E8A":"B4B2",
  "5E8B":"E2D1",
  "5E8F":"D0F2",
  "5E90":"C2AE",
  "5E91":"E2D0",
  "5E93":"BFE2",
  "5E94":"D3A6",
  "5E95":"B5D7",
  "5E96":"E2D2",
  "5E97":"B5EA",
  "5E99":"C3ED",
  "5E9A":"B8FD",
  "5E9C":"B8AE",
  "5E9E":"C5D3",
  "5E9F":"B7CF",
  "5EA0":"E2D4",
  "5EA5":"E2D3",
  "5EA6":"B6C8",
  "5EA7":"D7F9",
  "5EAD":"CDA5",
  "5EB3":"E2D8",
  "5EB5":"E2D6",
  "5EB6":"CAFC",
  "5EB7":"BFB5",
  "5EB8":"D3B9",
  "5EB9":"E2D5",
  "5EBE":"E2D7",
  "5EC9":"C1AE",
  "5ECA":"C0C8",
  "5ED1":"E2DB",
  "5ED2":"E2DA",
  "5ED3":"C0AA",
  "5ED6":"C1CE",
  "5EDB":"E2DC",
  "5EE8":"E2DD",
  "5EEA":"E2DE",
  "5EF4":"DBC8",
  "5EF6":"D1D3",
  "5EF7":"CDA2",
  "5EFA":"BDA8",
  "5EFE":"DEC3",
  "5EFF":"D8A5",
  "5F00":"BFAA",
  "5F01":"DBCD",
  "5F02":"D2EC",
  "5F03":"C6FA",
  "5F04":"C5AA",
  "5F08":"DEC4",
  "5F0A":"B1D7",
  "5F0B":"DFAE",
  "5F0F":"CABD",
  "5F11":"DFB1",
  "5F13":"B9AD",
  "5F15":"D2FD",
  "5F17":"B8A5",
  "5F18":"BAEB",
  "5F1B":"B3DA",
  "5F1F":"B5DC",
  "5F20":"D5C5",
  "5F25":"C3D6",
  "5F26":"CFD2",
  "5F27":"BBA1",
  "5F29":"E5F3",
  "5F2A":"E5F2",
  "5F2D":"E5F4",
  "5F2F":"CDE4",
  "5F31":"C8F5",
  "5F39":"B5AF",
  "5F3A":"C7BF",
  "5F3C":"E5F6",
  "5F40":"ECB0",
  "5F50":"E5E6",
  "5F52":"B9E9",
  "5F53":"B5B1",
  "5F55":"C2BC",
  "5F56":"E5E8",
  "5F57":"E5E7",
  "5F58":"E5E9",
  "5F5D":"D2CD",
  "5F61":"E1EA",
  "5F62":"D0CE",
  "5F64":"CDAE",
  "5F66":"D1E5",
  "5F69":"B2CA",
  "5F6A":"B1EB",
  "5F6C":"B1F2",
  "5F6D":"C5ED",
  "5F70":"D5C3",
  "5F71":"D3B0",
  "5F73":"E1DC",
  "5F77":"E1DD",
  "5F79":"D2DB",
  "5F7B":"B3B9",
  "5F7C":"B1CB",
  "5F80":"CDF9",
  "5F81":"D5F7",
  "5F82":"E1DE",
  "5F84":"BEB6",
  "5F85":"B4FD",
  "5F87":"E1DF",
  "5F88":"BADC",
  "5F89":"E1E0",
  "5F8A":"BBB2",
  "5F8B":"C2C9",
  "5F8C":"E1E1",
  "5F90":"D0EC",
  "5F92":"CDBD",
  "5F95":"E1E2",
  "5F97":"B5C3",
  "5F98":"C5C7",
  "5F99":"E1E3",
  "5F9C":"E1E4",
  "5FA1":"D3F9",
  "5FA8":"E1E5",
  "5FAA":"D1AD",
  "5FAD":"E1E6",
  "5FAE":"CEA2",
  "5FB5":"E1E7",
  "5FB7":"B5C2",
  "5FBC":"E1E8",
  "5FBD":"BBD5",
  "5FC3":"D0C4",
  "5FC4":"E2E0",
  "5FC5":"B1D8",
  "5FC6":"D2E4",
  "5FC9":"E2E1",
  "5FCC":"BCC9",
  "5FCD":"C8CC",
  "5FCF":"E2E3",
  "5FD0":"ECFE",
  "5FD1":"ECFD",
  "5FD2":"DFAF",
  "5FD6":"E2E2",
  "5FD7":"D6BE",
  "5FD8":"CDFC",
  "5FD9":"C3A6",
  "5FDD":"E3C3",
  "5FE0":"D6D2",
  "5FE1":"E2E7",
  "5FE4":"E2E8",
  "5FE7":"D3C7",
  "5FEA":"E2EC",
  "5FEB":"BFEC",
  "5FED":"E2ED",
  "5FEE":"E2E5",
  "5FF1":"B3C0",
  "5FF5":"C4EE",
  "5FF8":"E2EE",
  "5FFB":"D0C3",
  "5FFD":"BAF6",
  "5FFE":"E2E9",
  "5FFF":"B7DE",
  "6000":"BBB3",
  "6001":"CCAC",
  "6002":"CBCB",
  "6003":"E2E4",
  "6004":"E2E6",
  "6005":"E2EA",
  "6006":"E2EB",
  "600A":"E2F7",
  "600D":"E2F4",
  "600E":"D4F5",
  "600F":"E2F3",
  "6012":"C5AD",
  "6014":"D5FA",
  "6015":"C5C2",
  "6016":"B2C0",
  "6019":"E2EF",
  "601B":"E2F2",
  "601C":"C1AF",
  "601D":"CBBC",
  "6020":"B5A1",
  "6021":"E2F9",
  "6025":"BCB1",
  "6026":"E2F1",
  "6027":"D0D4",
  "6028":"D4B9",
  "6029":"E2F5",
  "602A":"B9D6",
  "602B":"E2F6",
  "602F":"C7D3",
  "6035":"E2F0",
  "603B":"D7DC",
  "603C":"EDA1",
  "603F":"E2F8",
  "6041":"EDA5",
  "6042":"E2FE",
  "6043":"CAD1",
  "604B":"C1B5",
  "604D":"BBD0",
  "6050":"BFD6",
  "6052":"BAE3",
  "6055":"CBA1",
  "6059":"EDA6",
  "605A":"EDA3",
  "605D":"EDA2",
  "6062":"BBD6",
  "6063":"EDA7",
  "6064":"D0F4",
  "6067":"EDA4",
  "6068":"BADE",
  "6069":"B6F7",
  "606A":"E3A1",
  "606B":"B6B2",
  "606C":"CCF1",
  "606D":"B9A7",
  "606F":"CFA2",
  "6070":"C7A1",
  "6073":"BFD2",
  "6076":"B6F1",
  "6078":"E2FA",
  "6079":"E2FB",
  "607A":"E2FD",
  "607B":"E2FC",
  "607C":"C4D5",
  "607D":"E3A2",
  "607F":"D3C1",
  "6083":"E3A7",
  "6084":"C7C4",
  "6089":"CFA4",
  "608C":"E3A9",
  "608D":"BAB7",
  "6092":"E3A8",
  "6094":"BBDA",
  "6096":"E3A3",
  "609A":"E3A4",
  "609B":"E3AA",
  "609D":"E3A6",
  "609F":"CEF2",
  "60A0":"D3C6",
  "60A3":"BBBC",
  "60A6":"D4C3",
  "60A8":"C4FA",
  "60AB":"EDA8",
  "60AC":"D0FC",
  "60AD":"E3A5",
  "60AF":"C3F5",
  "60B1":"E3AD",
  "60B2":"B1AF",
  "60B4":"E3B2",
  "60B8":"BCC2",
  "60BB":"E3AC",
  "60BC":"B5BF",
  "60C5":"C7E9",
  "60C6":"E3B0",
  "60CA":"BEAA",
  "60CB":"CDEF",
  "60D1":"BBF3",
  "60D5":"CCE8",
  "60D8":"E3AF",
  "60DA":"E3B1",
  "60DC":"CFA7",
  "60DD":"E3AE",
  "60DF":"CEA9",
  "60E0":"BBDD",
  "60E6":"B5EB",
  "60E7":"BEE5",
  "60E8":"B2D2",
  "60E9":"B3CD",
  "60EB":"B1B9",
  "60EC":"E3AB",
  "60ED":"B2D1",
  "60EE":"B5AC",
  "60EF":"B9DF",
  "60F0":"B6E8",
  "60F3":"CFEB",
  "60F4":"E3B7",
  "60F6":"BBCC",
  "60F9":"C8C7",
  "60FA":"D0CA",
  "6100":"E3B8",
  "6101":"B3EE",
  "6106":"EDA9",
  "6108":"D3FA",
  "6109":"D3E4",
  "610D":"EDAA",
  "610E":"E3B9",
  "610F":"D2E2",
  "6115":"E3B5",
  "611A":"D3DE",
  "611F":"B8D0",
  "6120":"E3B3",
  "6123":"E3B6",
  "6124":"B7DF",
  "6126":"E3B4",
  "6127":"C0A2",
  "612B":"E3BA",
  "613F":"D4B8",
  "6148":"B4C8",
  "614A":"E3BB",
  "614C":"BBC5",
  "614E":"C9F7",
  "6151":"C9E5",
  "6155":"C4BD",
  "615D":"EDAB",
  "6162":"C2FD",
  "6167":"BBDB",
  "6168":"BFAE",
  "6170":"CEBF",
  "6175":"E3BC",
  "6177":"BFB6",
  "618B":"B1EF",
  "618E":"D4F7",
  "6194":"E3BE",
  "619D":"EDAD",
  "61A7":"E3BF",
  "61A8":"BAA9",
  "61A9":"EDAC",
  "61AC":"E3BD",
  "61B7":"E3C0",
  "61BE":"BAB6",
  "61C2":"B6AE",
  "61C8":"D0B8",
  "61CA":"B0C3",
  "61CB":"EDAE",
  "61D1":"EDAF",
  "61D2":"C0C1",
  "61D4":"E3C1",
  "61E6":"C5B3",
  "61F5":"E3C2",
  "61FF":"DCB2",
  "6206":"EDB0",
  "6208":"B8EA",
  "620A":"CEEC",
  "620B":"EAA7",
  "620C":"D0E7",
  "620D":"CAF9",
  "620E":"C8D6",
  "620F":"CFB7",
  "6210":"B3C9",
  "6211":"CED2",
  "6212":"BDE4",
  "6215":"E3DE",
  "6216":"BBF2",
  "6217":"EAA8",
  "6218":"D5BD",
  "621A":"C6DD",
  "621B":"EAA9",
  "621F":"EAAA",
  "6221":"EAAC",
  "6222":"EAAB",
  "6224":"EAAE",
  "6225":"EAAD",
  "622A":"BDD8",
  "622C":"EAAF",
  "622E":"C2BE",
  "6233":"B4C1",
  "6234":"B4F7",
  "6237":"BBA7",
  "623D":"ECE6",
  "623E":"ECE5",
  "623F":"B7BF",
  "6240":"CBF9",
  "6241":"B1E2",
  "6243":"ECE7",
  "6247":"C9C8",
  "6248":"ECE8",
  "6249":"ECE9",
  "624B":"CAD6",
  "624C":"DED0",
  "624D":"B2C5",
  "624E":"D4FA",
  "6251":"C6CB",
  "6252":"B0C7",
  "6253":"B4F2",
  "6254":"C8D3",
  "6258":"CDD0",
  "625B":"BFB8",
  "6263":"BFDB",
  "6266":"C7A4",
  "6267":"D6B4",
  "6269":"C0A9",
  "626A":"DED1",
  "626B":"C9A8",
  "626C":"D1EF",
  "626D":"C5A4",
  "626E":"B0E7",
  "626F":"B3B6",
  "6270":"C8C5",
  "6273":"B0E2",
  "6276":"B7F6",
  "6279":"C5FA",
  "627C":"B6F3",
  "627E":"D5D2",
  "627F":"B3D0",
  "6280":"BCBC",
  "6284":"B3AD",
  "6289":"BEF1",
  "628A":"B0D1",
  "6291":"D2D6",
  "6292":"CAE3",
  "6293":"D7A5",
  "6295":"CDB6",
  "6296":"B6B6",
  "6297":"BFB9",
  "6298":"D5DB",
  "629A":"B8A7",
  "629B":"C5D7",
  "629F":"DED2",
  "62A0":"BFD9",
  "62A1":"C2D5",
  "62A2":"C7C0",
  "62A4":"BBA4",
  "62A5":"B1A8",
  "62A8":"C5EA",
  "62AB":"C5FB",
  "62AC":"CCA7",
  "62B1":"B1A7",
  "62B5":"B5D6",
  "62B9":"C4A8",
  "62BB":"DED3",
  "62BC":"D1BA",
  "62BD":"B3E9",
  "62BF":"C3F2",
  "62C2":"B7F7",
  "62C4":"D6F4",
  "62C5":"B5A3",
  "62C6":"B2F0",
  "62C7":"C4B4",
  "62C8":"C4E9",
  "62C9":"C0AD",
  "62CA":"DED4",
  "62CC":"B0E8",
  "62CD":"C5C4",
  "62CE":"C1E0",
  "62D0":"B9D5",
  "62D2":"BEDC",
  "62D3":"CDD8",
  "62D4":"B0CE",
  "62D6":"CDCF",
  "62D7":"DED6",
  "62D8":"BED0",
  "62D9":"D7BE",
  "62DA":"DED5",
  "62DB":"D5D0",
  "62DC":"B0DD",
  "62DF":"C4E2",
  "62E2":"C2A3",
  "62E3":"BCF0",
  "62E5":"D3B5",
  "62E6":"C0B9",
  "62E7":"C5A1",
  "62E8":"B2A6",
  "62E9":"D4F1",
  "62EC":"C0A8",
  "62ED":"CAC3",
  "62EE":"DED7",
  "62EF":"D5FC",
  "62F1":"B9B0",
  "62F3":"C8AD",
  "62F4":"CBA9",
  "62F6":"DED9",
  "62F7":"BFBD",
  "62FC":"C6B4",
  "62FD":"D7A7",
  "62FE":"CAB0",
  "62FF":"C4C3",
  "6301":"B3D6",
  "6302":"B9D2",
  "6307":"D6B8",
  "6308":"EAFC",
  "6309":"B0B4",
  "630E":"BFE6",
  "6311":"CCF4",
  "6316":"CDDA",
  "631A":"D6BF",
  "631B":"C2CE",
  "631D":"CECE",
  "631E":"CCA2",
  "631F":"D0AE",
  "6320":"C4D3",
  "6321":"B5B2",
  "6322":"DED8",
  "6323":"D5F5",
  "6324":"BCB7",
  "6325":"BBD3",
  "6328":"B0A4",
  "632A":"C5B2",
  "632B":"B4EC",
  "632F":"D5F1",
  "6332":"EAFD",
  "6339":"DEDA",
  "633A":"CDA6",
  "633D":"CDEC",
  "6342":"CEE6",
  "6343":"DEDC",
  "6345":"CDB1",
  "6346":"C0A6",
  "6349":"D7BD",
  "634B":"DEDB",
  "634C":"B0C6",
  "634D":"BAB4",
  "634E":"C9D3",
  "634F":"C4F3",
  "6350":"BEE8",
  "6355":"B2B6",
  "635E":"C0CC",
  "635F":"CBF0",
  "6361":"BCF1",
  "6362":"BBBB",
  "6363":"B5B7",
  "6367":"C5F5",
  "6369":"DEE6",
  "636D":"DEE3",
  "636E":"BEDD",
  "6371":"DEDF",
  "6376":"B4B7",
  "6377":"BDDD",
  "637A":"DEE0",
  "637B":"C4ED",
  "6380":"CFC6",
  "6382":"B5E0",
  "6387":"B6DE",
  "6388":"CADA",
  "6389":"B5F4",
  "638A":"DEE5",
  "638C":"D5C6",
  "638E":"DEE1",
  "638F":"CCCD",
  "6390":"C6FE",
  "6392":"C5C5",
  "6396":"D2B4",
  "6398":"BEF2",
  "63A0":"C2D3",
  "63A2":"CCBD",
  "63A3":"B3B8",
  "63A5":"BDD3",
  "63A7":"BFD8",
  "63A8":"CDC6",
  "63A9":"D1DA",
  "63AA":"B4EB",
  "63AC":"DEE4",
  "63AD":"DEDD",
  "63AE":"DEE7",
  "63B0":"EAFE",
  "63B3":"C2B0",
  "63B4":"DEE2",
  "63B7":"D6C0",
  "63B8":"B5A7",
  "63BA":"B2F4",
  "63BC":"DEE8",
  "63BE":"DEF2",
  "63C4":"DEED",
  "63C6":"DEF1",
  "63C9":"C8E0",
  "63CD":"D7E1",
  "63CE":"DEEF",
  "63CF":"C3E8",
  "63D0":"CCE1",
  "63D2":"B2E5",
  "63D6":"D2BE",
  "63DE":"DEEE",
  "63E0":"DEEB",
  "63E1":"CED5",
  "63E3":"B4A7",
  "63E9":"BFAB",
  "63EA":"BEBE",
  "63ED":"BDD2",
  "63F2":"DEE9",
  "63F4":"D4AE",
  "63F6":"DEDE",
  "63F8":"DEEA",
  "63FD":"C0BF",
  "63FF":"DEEC",
  "6400":"B2F3",
  "6401":"B8E9",
  "6402":"C2A7",
  "6405":"BDC1",
  "640B":"DEF5",
  "640C":"DEF8",
  "640F":"B2AB",
  "6410":"B4A4",
  "6413":"B4EA",
  "6414":"C9A6",
  "641B":"DEF6",
  "641C":"CBD1",
  "641E":"B8E3",
  "6420":"DEF7",
  "6421":"DEFA",
  "6426":"DEF9",
  "642A":"CCC2",
  "642C":"B0E1",
  "642D":"B4EE",
  "6434":"E5BA",
  "643A":"D0AF",
  "643D":"B2EB",
  "643F":"EBA1",
  "6441":"DEF4",
  "6444":"C9E3",
  "6445":"DEF3",
  "6446":"B0DA",
  "6447":"D2A1",
  "6448":"B1F7",
  "644A":"CCAF",
  "6452":"DEF0",
  "6454":"CBA4",
  "6458":"D5AA",
  "645E":"DEFB",
  "6467":"B4DD",
  "6469":"C4A6",
  "646D":"DEFD",
  "6478":"C3FE",
  "6479":"C4A1",
  "647A":"DFA1",
  "6482":"C1CC",
  "6484":"DEFC",
  "6485":"BEEF",
  "6487":"C6B2",
  "6491":"B3C5",
  "6492":"C8F6",
  "6495":"CBBA",
  "6496":"DEFE",
  "6499":"DFA4",
  "649E":"D7B2",
  "64A4":"B3B7",
  "64A9":"C1C3",
  "64AC":"C7CB",
  "64AD":"B2A5",
  "64AE":"B4E9",
  "64B0":"D7AB",
  "64B5":"C4EC",
  "64B7":"DFA2",
  "64B8":"DFA3",
  "64BA":"DFA5",
  "64BC":"BAB3",
  "64C0":"DFA6",
  "64C2":"C0DE",
  "64C5":"C9C3",
  "64CD":"B2D9",
  "64CE":"C7E6",
  "64D0":"DFA7",
  "64D2":"C7DC",
  "64D7":"DFA8",
  "64D8":"EBA2",
  "64DE":"CBD3",
  "64E2":"DFAA",
  "64E4":"DFA9",
  "64E6":"B2C1",
  "6500":"C5CA",
  "6509":"DFAB",
  "6512":"D4DC",
  "6518":"C8C1",
  "6525":"DFAC",
  "652B":"BEF0",
  "652E":"DFAD",
  "652F":"D6A7",
  "6534":"EAB7",
  "6535":"EBB6",
  "6536":"CAD5",
  "6538":"D8FC",
  "6539":"B8C4",
  "653B":"B9A5",
  "653E":"B7C5",
  "653F":"D5FE",
  "6545":"B9CA",
  "6548":"D0A7",
  "6549":"F4CD",
  "654C":"B5D0",
  "654F":"C3F4",
  "6551":"BEC8",
  "6555":"EBB7",
  "6556":"B0BD",
  "6559":"BDCC",
  "655B":"C1B2",
  "655D":"B1D6",
  "655E":"B3A8",
  "6562":"B8D2",
  "6563":"C9A2",
  "6566":"B6D8",
  "656B":"EBB8",
  "656C":"BEB4",
  "6570":"CAFD",
  "6572":"C7C3",
  "6574":"D5FB",
  "6577":"B7F3",
  "6587":"CEC4",
  "658B":"D5AB",
  "658C":"B1F3",
  "6590":"ECB3",
  "6591":"B0DF",
  "6593":"ECB5",
  "6597":"B6B7",
  "6599":"C1CF",
  "659B":"F5FA",
  "659C":"D0B1",
  "659F":"D5E5",
  "65A1":"CED3",
  "65A4":"BDEF",
  "65A5":"B3E2",
  "65A7":"B8AB",
  "65A9":"D5B6",
  "65AB":"EDBD",
  "65AD":"B6CF",
  "65AF":"CBB9",
  "65B0":"D0C2",
  "65B9":"B7BD",
  "65BC":"ECB6",
  "65BD":"CAA9",
  "65C1":"C5D4",
  "65C3":"ECB9",
  "65C4":"ECB8",
  "65C5":"C2C3",
  "65C6":"ECB7",
  "65CB":"D0FD",
  "65CC":"ECBA",
  "65CE":"ECBB",
  "65CF":"D7E5",
  "65D2":"ECBC",
  "65D6":"ECBD",
  "65D7":"C6EC",
  "65E0":"CEDE",
  "65E2":"BCC8",
  "65E5":"C8D5",
  "65E6":"B5A9",
  "65E7":"BEC9",
  "65E8":"D6BC",
  "65E9":"D4E7",
  "65EC":"D1AE",
  "65ED":"D0F1",
  "65EE":"EAB8",
  "65EF":"EAB9",
  "65F0":"EABA",
  "65F1":"BAB5",
  "65F6":"CAB1",
  "65F7":"BFF5",
  "65FA":"CDFA",
  "6600":"EAC0",
  "6602":"B0BA",
  "6603":"EABE",
  "6606":"C0A5",
  "660A":"EABB",
  "660C":"B2FD",
  "660E":"C3F7",
  "660F":"BBE8",
  "6613":"D2D7",
  "6614":"CEF4",
  "6615":"EABF",
  "6619":"EABC",
  "661D":"EAC3",
  "661F":"D0C7",
  "6620":"D3B3",
  "6625":"B4BA",
  "6627":"C3C1",
  "6628":"D7F2",
  "662D":"D5D1",
  "662F":"CAC7",
  "6631":"EAC5",
  "6634":"EAC4",
  "6635":"EAC7",
  "6636":"EAC6",
  "663C":"D6E7",
  "663E":"CFD4",
  "6641":"EACB",
  "6643":"BBCE",
  "664B":"BDFA",
  "664C":"C9CE",
  "664F":"EACC",
  "6652":"C9B9",
  "6653":"CFFE",
  "6654":"EACA",
  "6655":"D4CE",
  "6656":"EACD",
  "6657":"EACF",
  "665A":"CDED",
  "665F":"EAC9",
  "6661":"EACE",
  "6664":"CEEE",
  "6666":"BBDE",
  "6668":"B3BF",
  "666E":"C6D5",
  "666F":"BEB0",
  "6670":"CEFA",
  "6674":"C7E7",
  "6676":"BEA7",
  "6677":"EAD0",
  "667A":"D6C7",
  "667E":"C1C0",
  "6682":"D4DD",
  "6684":"EAD1",
  "6687":"CFBE",
  "668C":"EAD2",
  "6691":"CAEE",
  "6696":"C5AF",
  "6697":"B0B5",
  "669D":"EAD4",
  "66A7":"EAD3",
  "66A8":"F4DF",
  "66AE":"C4BA",
  "66B4":"B1A9",
  "66B9":"E5DF",
  "66BE":"EAD5",
  "66D9":"CAEF",
  "66DB":"EAD6",
  "66DC":"EAD7",
  "66DD":"C6D8",
  "66E6":"EAD8",
  "66E9":"EAD9",
  "66F0":"D4BB",
  "66F2":"C7FA",
  "66F3":"D2B7",
  "66F4":"B8FC",
  "66F7":"EAC2",
  "66F9":"B2DC",
  "66FC":"C2FC",
  "66FE":"D4F8",
  "66FF":"CCE6",
  "6700":"D7EE",
  "6708":"D4C2",
  "6709":"D3D0",
  "670A":"EBC3",
  "670B":"C5F3",
  "670D":"B7FE",
  "6710":"EBD4",
  "6714":"CBB7",
  "6715":"EBDE",
  "6717":"C0CA",
  "671B":"CDFB",
  "671D":"B3AF",
  "671F":"C6DA",
  "6726":"EBFC",
  "6728":"C4BE",
  "672A":"CEB4",
  "672B":"C4A9",
  "672C":"B1BE",
  "672D":"D4FD",
  "672F":"CAF5",
  "6731":"D6EC",
  "6734":"C6D3",
  "6735":"B6E4",
  "673A":"BBFA",
  "673D":"D0E0",
  "6740":"C9B1",
  "6742":"D4D3",
  "6743":"C8A8",
  "6746":"B8CB",
  "6748":"E8BE",
  "6749":"C9BC",
  "674C":"E8BB",
  "674E":"C0EE",
  "674F":"D0D3",
  "6750":"B2C4",
  "6751":"B4E5",
  "6753":"E8BC",
  "6756":"D5C8",
  "675C":"B6C5",
  "675E":"E8BD",
  "675F":"CAF8",
  "6760":"B8DC",
  "6761":"CCF5",
  "6765":"C0B4",
  "6768":"D1EE",
  "6769":"E8BF",
  "676A":"E8C2",
  "676D":"BABC",
  "676F":"B1AD",
  "6770":"BDDC",
  "6772":"EABD",
  "6773":"E8C3",
  "6775":"E8C6",
  "6777":"E8CB",
  "677C":"E8CC",
  "677E":"CBC9",
  "677F":"B0E5",
  "6781":"BCAB",
  "6784":"B9B9",
  "6787":"E8C1",
  "6789":"CDF7",
  "678B":"E8CA",
  "6790":"CEF6",
  "6795":"D5ED",
  "6797":"C1D6",
  "6798":"E8C4",
  "679A":"C3B6",
  "679C":"B9FB",
  "679D":"D6A6",
  "679E":"E8C8",
  "67A2":"CAE0",
  "67A3":"D4E6",
  "67A5":"E8C0",
  "67A7":"E8C5",
  "67A8":"E8C7",
  "67AA":"C7B9",
  "67AB":"B7E3",
  "67AD":"E8C9",
  "67AF":"BFDD",
  "67B0":"E8D2",
  "67B3":"E8D7",
  "67B5":"E8D5",
  "67B6":"BCDC",
  "67B7":"BCCF",
  "67B8":"E8DB",
  "67C1":"E8DE",
  "67C3":"E8DA",
  "67C4":"B1FA",
  "67CF":"B0D8",
  "67D0":"C4B3",
  "67D1":"B8CC",
  "67D2":"C6E2",
  "67D3":"C8BE",
  "67D4":"C8E1",
  "67D8":"E8CF",
  "67D9":"E8D4",
  "67DA":"E8D6",
  "67DC":"B9F1",
  "67DD":"E8D8",
  "67DE":"D7F5",
  "67E0":"C4FB",
  "67E2":"E8DC",
  "67E5":"B2E9",
  "67E9":"E8D1",
  "67EC":"BCED",
  "67EF":"BFC2",
  "67F0":"E8CD",
  "67F1":"D6F9",
  "67F3":"C1F8",
  "67F4":"B2F1",
  "67FD":"E8DF",
  "67FF":"CAC1",
  "6800":"E8D9",
  "6805":"D5A4",
  "6807":"B1EA",
  "6808":"D5BB",
  "6809":"E8CE",
  "680A":"E8D0",
  "680B":"B6B0",
  "680C":"E8D3",
  "680E":"E8DD",
  "680F":"C0B8",
  "6811":"CAF7",
  "6813":"CBA8",
  "6816":"C6DC",
  "6817":"C0F5",
  "681D":"E8E9",
  "6821":"D0A3",
  "6829":"E8F2",
  "682A":"D6EA",
  "6832":"E8E0",
  "6833":"E8E1",
  "6837":"D1F9",
  "6838":"BACB",
  "6839":"B8F9",
  "683C":"B8F1",
  "683D":"D4D4",
  "683E":"E8EF",
  "6840":"E8EE",
  "6841":"E8EC",
  "6842":"B9F0",
  "6843":"CCD2",
  "6844":"E8E6",
  "6845":"CEA6",
  "6846":"BFF2",
  "6848":"B0B8",
  "6849":"E8F1",
  "684A":"E8F0",
  "684C":"D7C0",
  "684E":"E8E4",
  "6850":"CDA9",
  "6851":"C9A3",
  "6853":"BBB8",
  "6854":"BDDB",
  "6855":"E8EA",
  "6860":"E8E2",
  "6861":"E8E3",
  "6862":"E8E5",
  "6863":"B5B5",
  "6864":"E8E7",
  "6865":"C7C5",
  "6866":"E8EB",
  "6867":"E8ED",
  "6868":"BDB0",
  "6869":"D7AE",
  "686B":"E8F8",
  "6874":"E8F5",
  "6876":"CDB0",
  "6877":"E8F6",
  "6881":"C1BA",
  "6883":"E8E8",
  "6885":"C3B7",
  "6886":"B0F0",
  "688F":"E8F4",
  "6893":"E8F7",
  "6897":"B9A3",
  "68A2":"C9D2",
  "68A6":"C3CE",
  "68A7":"CEE0",
  "68A8":"C0E6",
  "68AD":"CBF3",
  "68AF":"CCDD",
  "68B0":"D0B5",
  "68B3":"CAE1",
  "68B5":"E8F3",
  "68C0":"BCEC",
  "68C2":"E8F9",
  "68C9":"C3DE",
  "68CB":"C6E5",
  "68CD":"B9F7",
  "68D2":"B0F4",
  "68D5":"D7D8",
  "68D8":"BCAC",
  "68DA":"C5EF",
  "68E0":"CCC4",
  "68E3":"E9A6",
  "68EE":"C9AD",
  "68F0":"E9A2",
  "68F1":"C0E2",
  "68F5":"BFC3",
  "68F9":"E8FE",
  "68FA":"B9D7",
  "68FC":"E8FB",
  "6901":"E9A4",
  "6905":"D2CE",
  "690B":"E9A3",
  "690D":"D6B2",
  "690E":"D7B5",
  "6910":"E9A7",
  "6912":"BDB7",
  "691F":"E8FC",
  "6920":"E8FD",
  "6924":"E9A1",
  "692D":"CDD6",
  "6930":"D2AC",
  "6934":"E9B2",
  "6939":"E9A9",
  "693D":"B4AA",
  "693F":"B4BB",
  "6942":"E9AB",
  "6954":"D0A8",
  "6957":"E9A5",
  "695A":"B3FE",
  "695D":"E9AC",
  "695E":"C0E3",
  "6960":"E9AA",
  "6963":"E9B9",
  "6966":"E9B8",
  "696B":"E9AE",
  "696E":"E8FA",
  "6971":"E9A8",
  "6977":"BFAC",
  "6978":"E9B1",
  "6979":"E9BA",
  "697C":"C2A5",
  "6980":"E9AF",
  "6982":"B8C5",
  "6984":"E9AD",
  "6986":"D3DC",
  "6987":"E9B4",
  "6988":"E9B5",
  "6989":"E9B7",
  "698D":"E9C7",
  "6994":"C0C6",
  "6995":"E9C5",
  "6998":"E9B0",
  "699B":"E9BB",
  "699C":"B0F1",
  "69A7":"E9BC",
  "69A8":"D5A5",
  "69AB":"E9BE",
  "69AD":"E9BF",
  "69B1":"E9C1",
  "69B4":"C1F1",
  "69B7":"C8B6",
  "69BB":"E9BD",
  "69C1":"E9C2",
  "69CA":"E9C3",
  "69CC":"E9B3",
  "69CE":"E9B6",
  "69D0":"BBB1",
  "69D4":"E9C0",
  "69DB":"BCF7",
  "69DF":"E9C4",
  "69E0":"E9C6",
  "69ED":"E9CA",
  "69F2":"E9CE",
  "69FD":"B2DB",
  "69FF":"E9C8",
  "6A0A":"B7AE",
  "6A17":"E9CB",
  "6A18":"E9CC",
  "6A1F":"D5C1",
  "6A21":"C4A3",
  "6A28":"E9D8",
  "6A2A":"BAE1",
  "6A2F":"E9C9",
  "6A31":"D3A3",
  "6A35":"E9D4",
  "6A3D":"E9D7",
  "6A3E":"E9D0",
  "6A44":"E9CF",
  "6A47":"C7C1",
  "6A50":"E9D2",
  "6A58":"E9D9",
  "6A59":"B3C8",
  "6A5B":"E9D3",
  "6A61":"CFF0",
  "6A65":"E9CD",
  "6A71":"B3F7",
  "6A79":"E9D6",
  "6A7C":"E9DA",
  "6A80":"CCB4",
  "6A84":"CFAD",
  "6A8E":"E9D5",
  "6A90":"E9DC",
  "6A91":"E9DB",
  "6A97":"E9DE",
  "6AA0":"E9D1",
  "6AA9":"E9DD",
  "6AAB":"E9DF",
  "6AAC":"C3CA",
  "6B20":"C7B7",
  "6B21":"B4CE",
  "6B22":"BBB6",
  "6B23":"D0C0",
  "6B24":"ECA3",
  "6B27":"C5B7",
  "6B32":"D3FB",
  "6B37":"ECA4",
  "6B39":"ECA5",
  "6B3A":"C6DB",
  "6B3E":"BFEE",
  "6B43":"ECA6",
  "6B46":"ECA7",
  "6B47":"D0AA",
  "6B49":"C7B8",
  "6B4C":"B8E8",
  "6B59":"ECA8",
  "6B62":"D6B9",
  "6B63":"D5FD",
  "6B64":"B4CB",
  "6B65":"B2BD",
  "6B66":"CEE4",
  "6B67":"C6E7",
  "6B6A":"CDE1",
  "6B79":"B4F5",
  "6B7B":"CBC0",
  "6B7C":"BCDF",
  "6B81":"E9E2",
  "6B82":"E9E3",
  "6B83":"D1EA",
  "6B84":"E9E5",
  "6B86":"B4F9",
  "6B87":"E9E4",
  "6B89":"D1B3",
  "6B8A":"CAE2",
  "6B8B":"B2D0",
  "6B8D":"E9E8",
  "6B92":"E9E6",
  "6B93":"E9E7",
  "6B96":"D6B3",
  "6B9A":"E9E9",
  "6B9B":"E9EA",
  "6BA1":"E9EB",
  "6BAA":"E9EC",
  "6BB3":"ECAF",
  "6BB4":"C5B9",
  "6BB5":"B6CE",
  "6BB7":"D2F3",
  "6BBF":"B5EE",
  "6BC1":"BBD9",
  "6BC2":"ECB1",
  "6BC5":"D2E3",
  "6BCB":"CEE3",
  "6BCD":"C4B8",
  "6BCF":"C3BF",
  "6BD2":"B6BE",
  "6BD3":"D8B9",
  "6BD4":"B1C8",
  "6BD5":"B1CF",
  "6BD6":"B1D1",
  "6BD7":"C5FE",
  "6BD9":"B1D0",
  "6BDB":"C3AB",
  "6BE1":"D5B1",
  "6BEA":"EBA4",
  "6BEB":"BAC1",
  "6BEF":"CCBA",
  "6BF3":"EBA5",
  "6BF5":"EBA7",
  "6BF9":"EBA8",
  "6BFD":"EBA6",
  "6C05":"EBA9",
  "6C06":"EBAB",
  "6C07":"EBAA",
  "6C0D":"EBAC",
  "6C0F":"CACF",
  "6C10":"D8B5",
  "6C11":"C3F1",
  "6C13":"C3A5",
  "6C14":"C6F8",
  "6C15":"EBAD",
  "6C16":"C4CA",
  "6C18":"EBAE",
  "6C19":"EBAF",
  "6C1A":"EBB0",
  "6C1B":"B7D5",
  "6C1F":"B7FA",
  "6C21":"EBB1",
  "6C22":"C7E2",
  "6C24":"EBB3",
  "6C26":"BAA4",
  "6C27":"D1F5",
  "6C28":"B0B1",
  "6C29":"EBB2",
  "6C2A":"EBB4",
  "6C2E":"B5AA",
  "6C2F":"C2C8",
  "6C30":"C7E8",
  "6C32":"EBB5",
  "6C34":"CBAE",
  "6C35":"E3DF",
  "6C38":"D3C0",
  "6C3D":"D9DB",
  "6C40":"CDA1",
  "6C41":"D6AD",
  "6C42":"C7F3",
  "6C46":"D9E0",
  "6C47":"BBE3",
  "6C49":"BABA",
  "6C4A":"E3E2",
  "6C50":"CFAB",
  "6C54":"E3E0",
  "6C55":"C9C7",
  "6C57":"BAB9",
  "6C5B":"D1B4",
  "6C5C":"E3E1",
  "6C5D":"C8EA",
  "6C5E":"B9AF",
  "6C5F":"BDAD",
  "6C60":"B3D8",
  "6C61":"CEDB",
  "6C64":"CCC0",
  "6C68":"E3E8",
  "6C69":"E3E9",
  "6C6A":"CDF4",
  "6C70":"CCAD",
  "6C72":"BCB3",
  "6C74":"E3EA",
  "6C76":"E3EB",
  "6C79":"D0DA",
  "6C7D":"C6FB",
  "6C7E":"B7DA",
  "6C81":"C7DF",
  "6C82":"D2CA",
  "6C83":"CED6",
  "6C85":"E3E4",
  "6C86":"E3EC",
  "6C88":"C9F2",
  "6C89":"B3C1",
  "6C8C":"E3E7",
  "6C8F":"C6E3",
  "6C90":"E3E5",
  "6C93":"EDB3",
  "6C94":"E3E6",
  "6C99":"C9B3",
  "6C9B":"C5E6",
  "6C9F":"B9B5",
  "6CA1":"C3BB",
  "6CA3":"E3E3",
  "6CA4":"C5BD",
  "6CA5":"C1A4",
  "6CA6":"C2D9",
  "6CA7":"B2D7",
  "6CA9":"E3ED",
  "6CAA":"BBA6",
  "6CAB":"C4AD",
  "6CAD":"E3F0",
  "6CAE":"BEDA",
  "6CB1":"E3FB",
  "6CB2":"E3F5",
  "6CB3":"BAD3",
  "6CB8":"B7D0",
  "6CB9":"D3CD",
  "6CBB":"D6CE",
  "6CBC":"D5D3",
  "6CBD":"B9C1",
  "6CBE":"D5B4",
  "6CBF":"D1D8",
  "6CC4":"D0B9",
  "6CC5":"C7F6",
  "6CC9":"C8AA",
  "6CCA":"B2B4",
  "6CCC":"C3DA",
  "6CD0":"E3EE",
  "6CD3":"E3FC",
  "6CD4":"E3EF",
  "6CD5":"B7A8",
  "6CD6":"E3F7",
  "6CD7":"E3F4",
  "6CDB":"B7BA",
  "6CDE":"C5A2",
  "6CE0":"E3F6",
  "6CE1":"C5DD",
  "6CE2":"B2A8",
  "6CE3":"C6FC",
  "6CE5":"C4E0",
  "6CE8":"D7A2",
  "6CEA":"C0E1",
  "6CEB":"E3F9",
  "6CEE":"E3FA",
  "6CEF":"E3FD",
  "6CF0":"CCA9",
  "6CF1":"E3F3",
  "6CF3":"D3BE",
  "6CF5":"B1C3",
  "6CF6":"EDB4",
  "6CF7":"E3F1",
  "6CF8":"E3F2",
  "6CFA":"E3F8",
  "6CFB":"D0BA",
  "6CFC":"C6C3",
  "6CFD":"D4F3",
  "6CFE":"E3FE",
  "6D01":"BDE0",
  "6D04":"E4A7",
  "6D07":"E4A6",
  "6D0B":"D1F3",
  "6D0C":"E4A3",
  "6D0E":"E4A9",
  "6D12":"C8F7",
  "6D17":"CFB4",
  "6D19":"E4A8",
  "6D1A":"E4AE",
  "6D1B":"C2E5",
  "6D1E":"B6B4",
  "6D25":"BDF2",
  "6D27":"E4A2",
  "6D2A":"BAE9",
  "6D2B":"E4AA",
  "6D2E":"E4AC",
  "6D31":"B6FD",
  "6D32":"D6DE",
  "6D33":"E4B2",
  "6D35":"E4AD",
  "6D39":"E4A1",
  "6D3B":"BBEE",
  "6D3C":"CDDD",
  "6D3D":"C7A2",
  "6D3E":"C5C9",
  "6D41":"C1F7",
  "6D43":"E4A4",
  "6D45":"C7B3",
  "6D46":"BDAC",
  "6D47":"BDBD",
  "6D48":"E4A5",
  "6D4A":"D7C7",
  "6D4B":"B2E2",
  "6D4D":"E4AB",
  "6D4E":"BCC3",
  "6D4F":"E4AF",
  "6D51":"BBEB",
  "6D52":"E4B0",
  "6D53":"C5A8",
  "6D54":"E4B1",
  "6D59":"D5E3",
  "6D5A":"BFA3",
  "6D5C":"E4BA",
  "6D5E":"E4B7",
  "6D60":"E4BB",
  "6D63":"E4BD",
  "6D66":"C6D6",
  "6D69":"BAC6",
  "6D6A":"C0CB",
  "6D6E":"B8A1",
  "6D6F":"E4B4",
  "6D74":"D4A1",
  "6D77":"BAA3",
  "6D78":"BDFE",
  "6D7C":"E4BC",
  "6D82":"CDBF",
  "6D85":"C4F9",
  "6D88":"CFFB",
  "6D89":"C9E6",
  "6D8C":"D3BF",
  "6D8E":"CFD1",
  "6D91":"E4B3",
  "6D93":"E4B8",
  "6D94":"E4B9",
  "6D95":"CCE9",
  "6D9B":"CCCE",
  "6D9D":"C0D4",
  "6D9E":"E4B5",
  "6D9F":"C1B0",
  "6DA0":"E4B6",
  "6DA1":"CED0",
  "6DA3":"BBC1",
  "6DA4":"B5D3",
  "6DA6":"C8F3",
  "6DA7":"BDA7",
  "6DA8":"D5C7",
  "6DA9":"C9AC",
  "6DAA":"B8A2",
  "6DAB":"E4CA",
  "6DAE":"E4CC",
  "6DAF":"D1C4",
  "6DB2":"D2BA",
  "6DB5":"BAAD",
  "6DB8":"BAD4",
  "6DBF":"E4C3",
  "6DC0":"B5ED",
  "6DC4":"D7CD",
  "6DC5":"E4C0",
  "6DC6":"CFFD",
  "6DC7":"E4BF",
  "6DCB":"C1DC",
  "6DCC":"CCCA",
  "6DD1":"CAE7",
  "6DD6":"C4D7",
  "6DD8":"CCD4",
  "6DD9":"E4C8",
  "6DDD":"E4C7",
  "6DDE":"E4C1",
  "6DE0":"E4C4",
  "6DE1":"B5AD",
  "6DE4":"D3D9",
  "6DE6":"E4C6",
  "6DEB":"D2F9",
  "6DEC":"B4E3",
  "6DEE":"BBB4",
  "6DF1":"C9EE",
  "6DF3":"B4BE",
  "6DF7":"BBEC",
  "6DF9":"D1CD",
  "6DFB":"CCED",
  "6DFC":"EDB5",
  "6E05":"C7E5",
  "6E0A":"D4A8",
  "6E0C":"E4CB",
  "6E0D":"D7D5",
  "6E0E":"E4C2",
  "6E10":"BDA5",
  "6E11":"E4C5",
  "6E14":"D3E6",
  "6E16":"E4C9",
  "6E17":"C9F8",
  "6E1A":"E4BE",
  "6E1D":"D3E5",
  "6E20":"C7FE",
  "6E21":"B6C9",
  "6E23":"D4FC",
  "6E24":"B2B3",
  "6E25":"E4D7",
  "6E29":"CEC2",
  "6E2B":"E4CD",
  "6E2D":"CEBC",
  "6E2F":"B8DB",
  "6E32":"E4D6",
  "6E34":"BFCA",
  "6E38":"D3CE",
  "6E3A":"C3EC",
  "6E43":"C5C8",
  "6E44":"E4D8",
  "6E4D":"CDC4",
  "6E4E":"E4CF",
  "6E53":"E4D4",
  "6E54":"E4D5",
  "6E56":"BAFE",
  "6E58":"CFE6",
  "6E5B":"D5BF",
  "6E5F":"E4D2",
  "6E6B":"E4D0",
  "6E6E":"E4CE",
  "6E7E":"CDE5",
  "6E7F":"CAAA",
  "6E83":"C0A3",
  "6E85":"BDA6",
  "6E86":"E4D3",
  "6E89":"B8C8",
  "6E8F":"E4E7",
  "6E90":"D4B4",
  "6E98":"E4DB",
  "6E9C":"C1EF",
  "6E9F":"E4E9",
  "6EA2":"D2E7",
  "6EA5":"E4DF",
  "6EA7":"E4E0",
  "6EAA":"CFAA",
  "6EAF":"CBDD",
  "6EB1":"E4DA",
  "6EB2":"E4D1",
  "6EB4":"E4E5",
  "6EB6":"C8DC",
  "6EB7":"E4E3",
  "6EBA":"C4E7",
  "6EBB":"E4E2",
  "6EBD":"E4E1",
  "6EC1":"B3FC",
  "6EC2":"E4E8",
  "6EC7":"B5E1",
  "6ECB":"D7CC",
  "6ECF":"E4E6",
  "6ED1":"BBAC",
  "6ED3":"D7D2",
  "6ED4":"CCCF",
  "6ED5":"EBF8",
  "6ED7":"E4E4",
  "6EDA":"B9F6",
  "6EDE":"D6CD",
  "6EDF":"E4D9",
  "6EE0":"E4DC",
  "6EE1":"C2FA",
  "6EE2":"E4DE",
  "6EE4":"C2CB",
  "6EE5":"C0C4",
  "6EE6":"C2D0",
  "6EE8":"B1F5",
  "6EE9":"CCB2",
  "6EF4":"B5CE",
  "6EF9":"E4EF",
  "6F02":"C6AF",
  "6F06":"C6E1",
  "6F09":"E4F5",
  "6F0F":"C2A9",
  "6F13":"C0EC",
  "6F14":"D1DD",
  "6F15":"E4EE",
  "6F20":"C4AE",
  "6F24":"E4ED",
  "6F29":"E4F6",
  "6F2A":"E4F4",
  "6F2B":"C2FE",
  "6F2D":"E4DD",
  "6F2F":"E4F0",
  "6F31":"CAFE",
  "6F33":"D5C4",
  "6F36":"E4F1",
  "6F3E":"D1FA",
  "6F46":"E4EB",
  "6F47":"E4EC",
  "6F4B":"E4F2",
  "6F4D":"CEAB",
  "6F58":"C5CB",
  "6F5C":"C7B1",
  "6F5E":"C2BA",
  "6F62":"E4EA",
  "6F66":"C1CA",
  "6F6D":"CCB6",
  "6F6E":"B3B1",
  "6F72":"E4FB",
  "6F74":"E4F3",
  "6F78":"E4FA",
  "6F7A":"E4FD",
  "6F7C":"E4FC",
  "6F84":"B3CE",
  "6F88":"B3BA",
  "6F89":"E4F7",
  "6F8C":"E4F9",
  "6F8D":"E4F8",
  "6F8E":"C5EC",
  "6F9C":"C0BD",
  "6FA1":"D4E8",
  "6FA7":"E5A2",
  "6FB3":"B0C4",
  "6FB6":"E5A4",
  "6FB9":"E5A3",
  "6FC0":"BCA4",
  "6FC2":"E5A5",
  "6FC9":"E5A1",
  "6FD1":"E4FE",
  "6FD2":"B1F4",
  "6FDE":"E5A8",
  "6FE0":"E5A9",
  "6FE1":"E5A6",
  "6FEE":"E5A7",
  "6FEF":"E5AA",
  "7011":"C6D9",
  "701A":"E5AB",
  "701B":"E5AD",
  "7023":"E5AC",
  "7035":"E5AF",
  "7039":"E5AE",
  "704C":"B9E0",
  "704F":"E5B0",
  "705E":"E5B1",
  "706B":"BBF0",
  "706C":"ECE1",
  "706D":"C3F0",
  "706F":"B5C6",
  "7070":"BBD2",
  "7075":"C1E9",
  "7076":"D4EE",
  "7078":"BEC4",
  "707C":"D7C6",
  "707E":"D4D6",
  "707F":"B2D3",
  "7080":"ECBE",
  "7085":"EAC1",
  "7089":"C2AF",
  "708A":"B4B6",
  "708E":"D1D7",
  "7092":"B3B4",
  "7094":"C8B2",
  "7095":"BFBB",
  "7096":"ECC0",
  "7099":"D6CB",
  "709C":"ECBF",
  "709D":"ECC1",
  "70AB":"ECC5",
  "70AC":"BEE6",
  "70AD":"CCBF",
  "70AE":"C5DA",
  "70AF":"BEBC",
  "70B1":"ECC6",
  "70B3":"B1FE",
  "70B7":"ECC4",
  "70B8":"D5A8",
  "70B9":"B5E3",
  "70BB":"ECC2",
  "70BC":"C1B6",
  "70BD":"B3E3",
  "70C0":"ECC3",
  "70C1":"CBB8",
  "70C2":"C0C3",
  "70C3":"CCFE",
  "70C8":"C1D2",
  "70CA":"ECC8",
  "70D8":"BAE6",
  "70D9":"C0D3",
  "70DB":"D6F2",
  "70DF":"D1CC",
  "70E4":"BFBE",
  "70E6":"B7B3",
  "70E7":"C9D5",
  "70E8":"ECC7",
  "70E9":"BBE2",
  "70EB":"CCCC",
  "70EC":"BDFD",
  "70ED":"C8C8",
  "70EF":"CFA9",
  "70F7":"CDE9",
  "70F9":"C5EB",
  "70FD":"B7E9",
  "7109":"D1C9",
  "710A":"BAB8",
  "7110":"ECC9",
  "7113":"ECCA",
  "7115":"BBC0",
  "7116":"ECCB",
  "7118":"ECE2",
  "7119":"B1BA",
  "711A":"B7D9",
  "7126":"BDB9",
  "712F":"ECCC",
  "7130":"D1E6",
  "7131":"ECCD",
  "7136":"C8BB",
  "7145":"ECD1",
  "714A":"ECD3",
  "714C":"BBCD",
  "714E":"BCE5",
  "715C":"ECCF",
  "715E":"C9B7",
  "7164":"C3BA",
  "7166":"ECE3",
  "7167":"D5D5",
  "7168":"ECD0",
  "716E":"D6F3",
  "7172":"ECD2",
  "7173":"ECCE",
  "7178":"ECD4",
  "717A":"ECD5",
  "717D":"C9BF",
  "7184":"CFA8",
  "718A":"D0DC",
  "718F":"D1AC",
  "7194":"C8DB",
  "7198":"ECD6",
  "7199":"CEF5",
  "719F":"CAEC",
  "71A0":"ECDA",
  "71A8":"ECD9",
  "71AC":"B0BE",
  "71B3":"ECD7",
  "71B5":"ECD8",
  "71B9":"ECE4",
  "71C3":"C8BC",
  "71CE":"C1C7",
  "71D4":"ECDC",
  "71D5":"D1E0",
  "71E0":"ECDB",
  "71E5":"D4EF",
  "71E7":"ECDD",
  "71EE":"DBC6",
  "71F9":"ECDE",
  "7206":"B1AC",
  "721D":"ECDF",
  "7228":"ECE0",
  "722A":"D7A6",
  "722C":"C5C0",
  "7230":"EBBC",
  "7231":"B0AE",
  "7235":"BEF4",
  "7236":"B8B8",
  "7237":"D2AF",
  "7238":"B0D6",
  "7239":"B5F9",
  "723B":"D8B3",
  "723D":"CBAC",
  "723F":"E3DD",
  "7247":"C6AC",
  "7248":"B0E6",
  "724C":"C5C6",
  "724D":"EBB9",
  "7252":"EBBA",
  "7256":"EBBB",
  "7259":"D1C0",
  "725B":"C5A3",
  "725D":"EAF2",
  "725F":"C4B2",
  "7261":"C4B5",
  "7262":"C0CE",
  "7266":"EAF3",
  "7267":"C4C1",
  "7269":"CEEF",
  "726E":"EAF0",
  "726F":"EAF4",
  "7272":"C9FC",
  "7275":"C7A3",
  "7279":"CCD8",
  "727A":"CEFE",
  "727E":"EAF5",
  "727F":"EAF6",
  "7280":"CFAC",
  "7281":"C0E7",
  "7284":"EAF7",
  "728A":"B6BF",
  "728B":"EAF8",
  "728D":"EAF9",
  "728F":"EAFA",
  "7292":"EAFB",
  "729F":"EAF1",
  "72AC":"C8AE",
  "72AD":"E1EB",
  "72AF":"B7B8",
  "72B0":"E1EC",
  "72B4":"E1ED",
  "72B6":"D7B4",
  "72B7":"E1EE",
  "72B8":"E1EF",
  "72B9":"D3CC",
  "72C1":"E1F1",
  "72C2":"BFF1",
  "72C3":"E1F0",
  "72C4":"B5D2",
  "72C8":"B1B7",
  "72CD":"E1F3",
  "72CE":"E1F2",
  "72D0":"BAFC",
  "72D2":"E1F4",
  "72D7":"B9B7",
  "72D9":"BED1",
  "72DE":"C4FC",
  "72E0":"BADD",
  "72E1":"BDC6",
  "72E8":"E1F5",
  "72E9":"E1F7",
  "72EC":"B6C0",
  "72ED":"CFC1",
  "72EE":"CAA8",
  "72EF":"E1F6",
  "72F0":"D5F8",
  "72F1":"D3FC",
  "72F2":"E1F8",
  "72F3":"E1FC",
  "72F4":"E1F9",
  "72F7":"E1FA",
  "72F8":"C0EA",
  "72FA":"E1FE",
  "72FB":"E2A1",
  "72FC":"C0C7",
  "7301":"E1FB",
  "7303":"E1FD",
  "730A":"E2A5",
  "730E":"C1D4",
  "7313":"E2A3",
  "7315":"E2A8",
  "7316":"B2FE",
  "7317":"E2A2",
  "731B":"C3CD",
  "731C":"B2C2",
  "731D":"E2A7",
  "731E":"E2A6",
  "7321":"E2A4",
  "7322":"E2A9",
  "7325":"E2AB",
  "7329":"D0C9",
  "732A":"D6ED",
  "732B":"C3A8",
  "732C":"E2AC",
  "732E":"CFD7",
  "7331":"E2AE",
  "7334":"BAEF",
  "7337":"E9E0",
  "7338":"E2AD",
  "7339":"E2AA",
  "733E":"BBAB",
  "733F":"D4B3",
  "734D":"E2B0",
  "7350":"E2AF",
  "7352":"E9E1",
  "7357":"E2B1",
  "7360":"E2B2",
  "736C":"E2B3",
  "736D":"CCA1",
  "736F":"E2B4",
  "737E":"E2B5",
  "7384":"D0FE",
  "7387":"C2CA",
  "7389":"D3F1",
  "738B":"CDF5",
  "738E":"E7E0",
  "7391":"E7E1",
  "7396":"BEC1",
  "739B":"C2EA",
  "739F":"E7E4",
  "73A2":"E7E3",
  "73A9":"CDE6",
  "73AB":"C3B5",
  "73AE":"E7E2",
  "73AF":"BBB7",
  "73B0":"CFD6",
  "73B2":"C1E1",
  "73B3":"E7E9",
  "73B7":"E7E8",
  "73BA":"E7F4",
  "73BB":"B2A3",
  "73C0":"E7EA",
  "73C2":"E7E6",
  "73C8":"E7EC",
  "73C9":"E7EB",
  "73CA":"C9BA",
  "73CD":"D5E4",
  "73CF":"E7E5",
  "73D0":"B7A9",
  "73D1":"E7E7",
  "73D9":"E7EE",
  "73DE":"E7F3",
  "73E0":"D6E9",
  "73E5":"E7ED",
  "73E7":"E7F2",
  "73E9":"E7F1",
  "73ED":"B0E0",
  "73F2":"E7F5",
  "7403":"C7F2",
  "7405":"C0C5",
  "7406":"C0ED",
  "7409":"C1F0",
  "740A":"E7F0",
  "740F":"E7F6",
  "7410":"CBF6",
  "741A":"E8A2",
  "741B":"E8A1",
  "7422":"D7C1",
  "7425":"E7FA",
  "7426":"E7F9",
  "7428":"E7FB",
  "742A":"E7F7",
  "742C":"E7FE",
  "742E":"E7FD",
  "7430":"E7FC",
  "7433":"C1D5",
  "7434":"C7D9",
  "7435":"C5FD",
  "7436":"C5C3",
  "743C":"C7ED",
  "7441":"E8A3",
  "7455":"E8A6",
  "7457":"E8A5",
  "7459":"E8A7",
  "745A":"BAF7",
  "745B":"E7F8",
  "745C":"E8A4",
  "745E":"C8F0",
  "745F":"C9AA",
  "746D":"E8A9",
  "7470":"B9E5",
  "7476":"D1FE",
  "7477":"E8A8",
  "747E":"E8AA",
  "7480":"E8AD",
  "7481":"E8AE",
  "7483":"C1A7",
  "7487":"E8AF",
  "748B":"E8B0",
  "748E":"E8AC",
  "7490":"E8B4",
  "749C":"E8AB",
  "749E":"E8B1",
  "74A7":"E8B5",
  "74A8":"E8B2",
  "74A9":"E8B3",
  "74BA":"E8B7",
  "74D2":"E8B6",
  "74DC":"B9CF",
  "74DE":"F0AC",
  "74E0":"F0AD",
  "74E2":"C6B0",
  "74E3":"B0EA",
  "74E4":"C8BF",
  "74E6":"CDDF",
  "74EE":"CECD",
  "74EF":"EAB1",
  "74F4":"EAB2",
  "74F6":"C6BF",
  "74F7":"B4C9",
  "74FF":"EAB3",
  "7504":"D5E7",
  "750D":"DDF9",
  "750F":"EAB4",
  "7511":"EAB5",
  "7513":"EAB6",
  "7518":"B8CA",
  "7519":"DFB0",
  "751A":"C9F5",
  "751C":"CCF0",
  "751F":"C9FA",
  "7525":"C9FB",
  "7528":"D3C3",
  "7529":"CBA6",
  "752B":"B8A6",
  "752C":"F0AE",
  "752D":"B1C2",
  "752F":"E5B8",
  "7530":"CCEF",
  "7531":"D3C9",
  "7532":"BCD7",
  "7533":"C9EA",
  "7535":"B5E7",
  "7537":"C4D0",
  "7538":"B5E9",
  "753A":"EEAE",
  "753B":"BBAD",
  "753E":"E7DE",
  "7540":"EEAF",
  "7545":"B3A9",
  "7548":"EEB2",
  "754B":"EEB1",
  "754C":"BDE7",
  "754E":"EEB0",
  "754F":"CEB7",
  "7554":"C5CF",
  "7559":"C1F4",
  "755A":"DBCE",
  "755B":"EEB3",
  "755C":"D0F3",
  "7565":"C2D4",
  "7566":"C6E8",
  "756A":"B7AC",
  "7572":"EEB4",
  "7574":"B3EB",
  "7578":"BBFB",
  "7579":"EEB5",
  "757F":"E7DC",
  "7583":"EEB6",
  "7586":"BDAE",
  "758B":"F1E2",
  "758F":"CAE8",
  "7591":"D2C9",
  "7592":"F0DA",
  "7594":"F0DB",
  "7596":"F0DC",
  "7597":"C1C6",
  "7599":"B8ED",
  "759A":"BECE",
  "759D":"F0DE",
  "759F":"C5B1",
  "75A0":"F0DD",
  "75A1":"D1F1",
  "75A3":"F0E0",
  "75A4":"B0CC",
  "75A5":"BDEA",
  "75AB":"D2DF",
  "75AC":"F0DF",
  "75AE":"B4AF",
  "75AF":"B7E8",
  "75B0":"F0E6",
  "75B1":"F0E5",
  "75B2":"C6A3",
  "75B3":"F0E1",
  "75B4":"F0E2",
  "75B5":"B4C3",
  "75B8":"F0E3",
  "75B9":"D5EE",
  "75BC":"CCDB",
  "75BD":"BED2",
  "75BE":"BCB2",
  "75C2":"F0E8",
  "75C3":"F0E7",
  "75C4":"F0E4",
  "75C5":"B2A1",
  "75C7":"D6A2",
  "75C8":"D3B8",
  "75C9":"BEB7",
  "75CA":"C8AC",
  "75CD":"F0EA",
  "75D2":"D1F7",
  "75D4":"D6CC",
  "75D5":"BADB",
  "75D6":"F0E9",
  "75D8":"B6BB",
  "75DB":"CDB4",
  "75DE":"C6A6",
  "75E2":"C1A1",
  "75E3":"F0EB",
  "75E4":"F0EE",
  "75E6":"F0ED",
  "75E7":"F0F0",
  "75E8":"F0EC",
  "75EA":"BBBE",
  "75EB":"F0EF",
  "75F0":"CCB5",
  "75F1":"F0F2",
  "75F4":"B3D5",
  "75F9":"B1D4",
  "75FC":"F0F3",
  "75FF":"F0F4",
  "7600":"F0F6",
  "7601":"B4E1",
  "7603":"F0F1",
  "7605":"F0F7",
  "760A":"F0FA",
  "760C":"F0F8",
  "7610":"F0F5",
  "7615":"F0FD",
  "7617":"F0F9",
  "7618":"F0FC",
  "7619":"F0FE",
  "761B":"F1A1",
  "761F":"CEC1",
  "7620":"F1A4",
  "7622":"F1A3",
  "7624":"C1F6",
  "7625":"F0FB",
  "7626":"CADD",
  "7629":"B4F1",
  "762A":"B1F1",
  "762B":"CCB1",
  "762D":"F1A6",
  "7630":"F1A7",
  "7633":"F1AC",
  "7634":"D5CE",
  "7635":"F1A9",
  "7638":"C8B3",
  "763C":"F1A2",
  "763E":"F1AB",
  "763F":"F1A8",
  "7640":"F1A5",
  "7643":"F1AA",
  "764C":"B0A9",
  "764D":"F1AD",
  "7654":"F1AF",
  "7656":"F1B1",
  "765C":"F1B0",
  "765E":"F1AE",
  "7663":"D1A2",
  "766B":"F1B2",
  "766F":"F1B3",
  "7678":"B9EF",
  "767B":"B5C7",
  "767D":"B0D7",
  "767E":"B0D9",
  "7682":"D4ED",
  "7684":"B5C4",
  "7686":"BDD4",
  "7687":"BBCA",
  "7688":"F0A7",
  "768B":"B8DE",
  "768E":"F0A8",
  "7691":"B0A8",
  "7693":"F0A9",
  "7696":"CDEE",
  "7699":"F0AA",
  "76A4":"F0AB",
  "76AE":"C6A4",
  "76B1":"D6E5",
  "76B2":"F1E4",
  "76B4":"F1E5",
  "76BF":"C3F3",
  "76C2":"D3DB",
  "76C5":"D6D1",
  "76C6":"C5E8",
  "76C8":"D3AF",
  "76CA":"D2E6",
  "76CD":"EEC1",
  "76CE":"B0BB",
  "76CF":"D5B5",
  "76D0":"D1CE",
  "76D1":"BCE0",
  "76D2":"BAD0",
  "76D4":"BFF8",
  "76D6":"B8C7",
  "76D7":"B5C1",
  "76D8":"C5CC",
  "76DB":"CAA2",
  "76DF":"C3CB",
  "76E5":"EEC2",
  "76EE":"C4BF",
  "76EF":"B6A2",
  "76F1":"EDEC",
  "76F2":"C3A4",
  "76F4":"D6B1",
  "76F8":"CFE0",
  "76F9":"EDEF",
  "76FC":"C5CE",
  "76FE":"B6DC",
  "7701":"CAA1",
  "7704":"EDED",
  "7707":"EDF0",
  "7708":"EDF1",
  "7709":"C3BC",
  "770B":"BFB4",
  "770D":"EDEE",
  "7719":"EDF4",
  "771A":"EDF2",
  "771F":"D5E6",
  "7720":"C3DF",
  "7722":"EDF3",
  "7726":"EDF6",
  "7728":"D5A3",
  "7729":"D1A3",
  "772D":"EDF5",
  "772F":"C3D0",
  "7735":"EDF7",
  "7736":"BFF4",
  "7737":"BEEC",
  "7738":"EDF8",
  "773A":"CCF7",
  "773C":"D1DB",
  "7740":"D7C5",
  "7741":"D5F6",
  "7743":"EDFC",
  "7747":"EDFB",
  "7750":"EDF9",
  "7751":"EDFA",
  "775A":"EDFD",
  "775B":"BEA6",
  "7761":"CBAF",
  "7762":"EEA1",
  "7763":"B6BD",
  "7765":"EEA2",
  "7766":"C4C0",
  "7768":"EDFE",
  "776B":"BDDE",
  "776C":"B2C7",
  "7779":"B6C3",
  "777D":"EEA5",
  "777E":"D8BA",
  "777F":"EEA3",
  "7780":"EEA6",
  "7784":"C3E9",
  "7785":"B3F2",
  "778C":"EEA7",
  "778D":"EEA4",
  "778E":"CFB9",
  "7791":"EEA8",
  "7792":"C2F7",
  "779F":"EEA9",
  "77A0":"EEAA",
  "77A2":"DEAB",
  "77A5":"C6B3",
  "77A7":"C7C6",
  "77A9":"D6F5",
  "77AA":"B5C9",
  "77AC":"CBB2",
  "77B0":"EEAB",
  "77B3":"CDAB",
  "77B5":"EEAC",
  "77BB":"D5B0",
  "77BD":"EEAD",
  "77BF":"F6C4",
  "77CD":"DBC7",
  "77D7":"B4A3",
  "77DB":"C3AC",
  "77DC":"F1E6",
  "77E2":"CAB8",
  "77E3":"D2D3",
  "77E5":"D6AA",
  "77E7":"EFF2",
  "77E9":"BED8",
  "77EB":"BDC3",
  "77EC":"EFF3",
  "77ED":"B6CC",
  "77EE":"B0AB",
  "77F3":"CAAF",
  "77F6":"EDB6",
  "77F8":"EDB7",
  "77FD":"CEF9",
  "77FE":"B7AF",
  "77FF":"BFF3",
  "7800":"EDB8",
  "7801":"C2EB",
  "7802":"C9B0",
  "7809":"EDB9",
  "780C":"C6F6",
  "780D":"BFB3",
  "7811":"EDBC",
  "7812":"C5F8",
  "7814":"D1D0",
  "7816":"D7A9",
  "7817":"EDBA",
  "7818":"EDBB",
  "781A":"D1E2",
  "781C":"EDBF",
  "781D":"EDC0",
  "781F":"EDC4",
  "7823":"EDC8",
  "7825":"EDC6",
  "7826":"EDCE",
  "7827":"D5E8",
  "7829":"EDC9",
  "782C":"EDC7",
  "782D":"EDBE",
  "7830":"C5E9",
  "7834":"C6C6",
  "7837":"C9E9",
  "7838":"D4D2",
  "7839":"EDC1",
  "783A":"EDC2",
  "783B":"EDC3",
  "783C":"EDC5",
  "783E":"C0F9",
  "7840":"B4A1",
  "7845":"B9E8",
  "7847":"EDD0",
  "784C":"EDD1",
  "784E":"EDCA",
  "7850":"EDCF",
  "7852":"CEF8",
  "7855":"CBB6",
  "7856":"EDCC",
  "7857":"EDCD",
  "785D":"CFF5",
  "786A":"EDD2",
  "786B":"C1F2",
  "786C":"D3B2",
  "786D":"EDCB",
  "786E":"C8B7",
  "7877":"BCEF",
  "787C":"C5F0",
  "7887":"EDD6",
  "7889":"B5EF",
  "788C":"C2B5",
  "788D":"B0AD",
  "788E":"CBE9",
  "7891":"B1AE",
  "7893":"EDD4",
  "7897":"CDEB",
  "7898":"B5E2",
  "789A":"EDD5",
  "789B":"EDD3",
  "789C":"EDD7",
  "789F":"B5FA",
  "78A1":"EDD8",
  "78A3":"EDD9",
  "78A5":"EDDC",
  "78A7":"B1CC",
  "78B0":"C5F6",
  "78B1":"BCEE",
  "78B2":"EDDA",
  "78B3":"CCBC",
  "78B4":"B2EA",
  "78B9":"EDDB",
  "78BE":"C4EB",
  "78C1":"B4C5",
  "78C5":"B0F5",
  "78C9":"EDDF",
  "78CA":"C0DA",
  "78CB":"B4E8",
  "78D0":"C5CD",
  "78D4":"EDDD",
  "78D5":"BFC4",
  "78D9":"EDDE",
  "78E8":"C4A5",
  "78EC":"EDE0",
  "78F2":"EDE1",
  "78F4":"EDE3",
  "78F7":"C1D7",
  "78FA":"BBC7",
  "7901":"BDB8",
  "7905":"EDE2",
  "7913":"EDE4",
  "791E":"EDE6",
  "7924":"EDE5",
  "7934":"EDE7",
  "793A":"CABE",
  "793B":"ECEA",
  "793C":"C0F1",
  "793E":"C9E7",
  "7940":"ECEB",
  "7941":"C6EE",
  "7946":"ECEC",
  "7948":"C6ED",
  "7949":"ECED",
  "7953":"ECF0",
  "7956":"D7E6",
  "7957":"ECF3",
  "795A":"ECF1",
  "795B":"ECEE",
  "795C":"ECEF",
  "795D":"D7A3",
  "795E":"C9F1",
  "795F":"CBEE",
  "7960":"ECF4",
  "7962":"ECF2",
  "7965":"CFE9",
  "7967":"ECF6",
  "7968":"C6B1",
  "796D":"BCC0",
  "796F":"ECF5",
  "7977":"B5BB",
  "7978":"BBF6",
  "797A":"ECF7",
  "7980":"D9F7",
  "7981":"BDFB",
  "7984":"C2BB",
  "7985":"ECF8",
  "798A":"ECF9",
  "798F":"B8A3",
  "799A":"ECFA",
  "79A7":"ECFB",
  "79B3":"ECFC",
  "79B9":"D3ED",
  "79BA":"D8AE",
  "79BB":"C0EB",
  "79BD":"C7DD",
  "79BE":"BACC",
  "79C0":"D0E3",
  "79C1":"CBBD",
  "79C3":"CDBA",
  "79C6":"B8D1",
  "79C9":"B1FC",
  "79CB":"C7EF",
  "79CD":"D6D6",
  "79D1":"BFC6",
  "79D2":"C3EB",
  "79D5":"EFF5",
  "79D8":"C3D8",
  "79DF":"D7E2",
  "79E3":"EFF7",
  "79E4":"B3D3",
  "79E6":"C7D8",
  "79E7":"D1ED",
  "79E9":"D6C8",
  "79EB":"EFF8",
  "79ED":"EFF6",
  "79EF":"BBFD",
  "79F0":"B3C6",
  "79F8":"BDD5",
  "79FB":"D2C6",
  "79FD":"BBE0",
  "7A00":"CFA1",
  "7A02":"EFFC",
  "7A03":"EFFB",
  "7A06":"EFF9",
  "7A0B":"B3CC",
  "7A0D":"C9D4",
  "7A0E":"CBB0",
  "7A14":"EFFE",
  "7A17":"B0DE",
  "7A1A":"D6C9",
  "7A1E":"EFFD",
  "7A20":"B3ED",
  "7A23":"F6D5",
  "7A33":"CEC8",
  "7A37":"F0A2",
  "7A39":"F0A1",
  "7A3B":"B5BE",
  "7A3C":"BCDA",
  "7A3D":"BBFC",
  "7A3F":"B8E5",
  "7A46":"C4C2",
  "7A51":"F0A3",
  "7A57":"CBEB",
  "7A70":"F0A6",
  "7A74":"D1A8",
  "7A76":"BEBF",
  "7A77":"C7EE",
  "7A78":"F1B6",
  "7A79":"F1B7",
  "7A7A":"BFD5",
  "7A7F":"B4A9",
  "7A80":"F1B8",
  "7A81":"CDBB",
  "7A83":"C7D4",
  "7A84":"D5AD",
  "7A86":"F1B9",
  "7A88":"F1BA",
  "7A8D":"C7CF",
  "7A91":"D2A4",
  "7A92":"D6CF",
  "7A95":"F1BB",
  "7A96":"BDD1",
  "7A97":"B4B0",
  "7A98":"BEBD",
  "7A9C":"B4DC",
  "7A9D":"CED1",
  "7A9F":"BFDF",
  "7AA0":"F1BD",
  "7AA5":"BFFA",
  "7AA6":"F1BC",
  "7AA8":"F1BF",
  "7AAC":"F1BE",
  "7AAD":"F1C0",
  "7AB3":"F1C1",
  "7ABF":"C1FE",
  "7ACB":"C1A2",
  "7AD6":"CAFA",
  "7AD9":"D5BE",
  "7ADE":"BEBA",
  "7ADF":"BEB9",
  "7AE0":"D5C2",
  "7AE3":"BFA2",
  "7AE5":"CDAF",
  "7AE6":"F1B5",
  "7AED":"BDDF",
  "7AEF":"B6CB",
  "7AF9":"D6F1",
  "7AFA":"F3C3",
  "7AFD":"F3C4",
  "7AFF":"B8CD",
  "7B03":"F3C6",
  "7B04":"F3C7",
  "7B06":"B0CA",
  "7B08":"F3C5",
  "7B0A":"F3C9",
  "7B0B":"CBF1",
  "7B0F":"F3CB",
  "7B11":"D0A6",
  "7B14":"B1CA",
  "7B15":"F3C8",
  "7B19":"F3CF",
  "7B1B":"B5D1",
  "7B1E":"F3D7",
  "7B20":"F3D2",
  "7B24":"F3D4",
  "7B25":"F3D3",
  "7B26":"B7FB",
  "7B28":"B1BF",
  "7B2A":"F3CE",
  "7B2B":"F3CA",
  "7B2C":"B5DA",
  "7B2E":"F3D0",
  "7B31":"F3D1",
  "7B33":"F3D5",
  "7B38":"F3CD",
  "7B3A":"BCE3",
  "7B3C":"C1FD",
  "7B3E":"F3D6",
  "7B45":"F3DA",
  "7B47":"F3CC",
  "7B49":"B5C8",
  "7B4B":"BDEE",
  "7B4C":"F3DC",
  "7B4F":"B7A4",
  "7B50":"BFF0",
  "7B51":"D6FE",
  "7B52":"CDB2",
  "7B54":"B4F0",
  "7B56":"B2DF",
  "7B58":"F3D8",
  "7B5A":"F3D9",
  "7B5B":"C9B8",
  "7B5D":"F3DD",
  "7B60":"F3DE",
  "7B62":"F3E1",
  "7B6E":"F3DF",
  "7B71":"F3E3",
  "7B72":"F3E2",
  "7B75":"F3DB",
  "7B77":"BFEA",
  "7B79":"B3EF",
  "7B7B":"F3E0",
  "7B7E":"C7A9",
  "7B80":"BCF2",
  "7B85":"F3EB",
  "7B8D":"B9BF",
  "7B90":"F3E4",
  "7B94":"B2AD",
  "7B95":"BBFE",
  "7B97":"CBE3",
  "7B9C":"F3ED",
  "7B9D":"F3E9",
  "7BA1":"B9DC",
  "7BA2":"F3EE",
  "7BA6":"F3E5",
  "7BA7":"F3E6",
  "7BA8":"F3EA",
  "7BA9":"C2E1",
  "7BAA":"F3EC",
  "7BAB":"F3EF",
  "7BAC":"F3E8",
  "7BAD":"BCFD",
  "7BB1":"CFE4",
  "7BB4":"F3F0",
  "7BB8":"F3E7",
  "7BC1":"F3F2",
  "7BC6":"D7AD",
  "7BC7":"C6AA",
  "7BCC":"F3F3",
  "7BD1":"F3F1",
  "7BD3":"C2A8",
  "7BD9":"B8DD",
  "7BDA":"F3F5",
  "7BDD":"F3F4",
  "7BE1":"B4DB",
  "7BE5":"F3F6",
  "7BE6":"F3F7",
  "7BEA":"F3F8",
  "7BEE":"C0BA",
  "7BF1":"C0E9",
  "7BF7":"C5F1",
  "7BFC":"F3FB",
  "7BFE":"F3FA",
  "7C07":"B4D8",
  "7C0B":"F3FE",
  "7C0C":"F3F9",
  "7C0F":"F3FC",
  "7C16":"F3FD",
  "7C1F":"F4A1",
  "7C26":"F4A3",
  "7C27":"BBC9",
  "7C2A":"F4A2",
  "7C38":"F4A4",
  "7C3F":"B2BE",
  "7C40":"F4A6",
  "7C41":"F4A5",
  "7C4D":"BCAE",
  "7C73":"C3D7",
  "7C74":"D9E1",
  "7C7B":"C0E0",
  "7C7C":"F4CC",
  "7C7D":"D7D1",
  "7C89":"B7DB",
  "7C91":"F4CE",
  "7C92":"C1A3",
  "7C95":"C6C9",
  "7C97":"B4D6",
  "7C98":"D5B3",
  "7C9C":"F4D0",
  "7C9D":"F4CF",
  "7C9E":"F4D1",
  "7C9F":"CBDA",
  "7CA2":"F4D2",
  "7CA4":"D4C1",
  "7CA5":"D6E0",
  "7CAA":"B7E0",
  "7CAE":"C1B8",
  "7CB1":"C1BB",
  "7CB2":"F4D3",
  "7CB3":"BEAC",
  "7CB9":"B4E2",
  "7CBC":"F4D4",
  "7CBD":"F4D5",
  "7CBE":"BEAB",
  "7CC1":"F4D6",
  "7CC5":"F4DB",
  "7CC7":"F4D7",
  "7CC8":"F4DA",
  "7CCA":"BAFD",
  "7CCC":"F4D8",
  "7CCD":"F4D9",
  "7CD5":"B8E2",
  "7CD6":"CCC7",
  "7CD7":"F4DC",
  "7CD9":"B2DA",
  "7CDC":"C3D3",
  "7CDF":"D4E3",
  "7CE0":"BFB7",
  "7CE8":"F4DD",
  "7CEF":"C5B4",
  "7CF8":"F4E9",
  "7CFB":"CFB5",
  "7D0A":"CEC9",
  "7D20":"CBD8",
  "7D22":"CBF7",
  "7D27":"BDF4",
  "7D2B":"D7CF",
  "7D2F":"C0DB",
  "7D6E":"D0F5",
  "7D77":"F4EA",
  "7DA6":"F4EB",
  "7DAE":"F4EC",
  "7E3B":"F7E3",
  "7E41":"B7B1",
  "7E47":"F4ED",
  "7E82":"D7EB",
  "7E9B":"F4EE",
  "7E9F":"E6F9",
  "7EA0":"BEC0",
  "7EA1":"E6FA",
  "7EA2":"BAEC",
  "7EA3":"E6FB",
  "7EA4":"CFCB",
  "7EA5":"E6FC",
  "7EA6":"D4BC",
  "7EA7":"BCB6",
  "7EA8":"E6FD",
  "7EA9":"E6FE",
  "7EAA":"BCCD",
  "7EAB":"C8D2",
  "7EAC":"CEB3",
  "7EAD":"E7A1",
  "7EAF":"B4BF",
  "7EB0":"E7A2",
  "7EB1":"C9B4",
  "7EB2":"B8D9",
  "7EB3":"C4C9",
  "7EB5":"D7DD",
  "7EB6":"C2DA",
  "7EB7":"B7D7",
  "7EB8":"D6BD",
  "7EB9":"CEC6",
  "7EBA":"B7C4",
  "7EBD":"C5A6",
  "7EBE":"E7A3",
  "7EBF":"CFDF",
  "7EC0":"E7A4",
  "7EC1":"E7A5",
  "7EC2":"E7A6",
  "7EC3":"C1B7",
  "7EC4":"D7E9",
  "7EC5":"C9F0",
  "7EC6":"CFB8",
  "7EC7":"D6AF",
  "7EC8":"D6D5",
  "7EC9":"E7A7",
  "7ECA":"B0ED",
  "7ECB":"E7A8",
  "7ECC":"E7A9",
  "7ECD":"C9DC",
  "7ECE":"D2EF",
  "7ECF":"BEAD",
  "7ED0":"E7AA",
  "7ED1":"B0F3",
  "7ED2":"C8DE",
  "7ED3":"BDE1",
  "7ED4":"E7AB",
  "7ED5":"C8C6",
  "7ED7":"E7AC",
  "7ED8":"BBE6",
  "7ED9":"B8F8",
  "7EDA":"D1A4",
  "7EDB":"E7AD",
  "7EDC":"C2E7",
  "7EDD":"BEF8",
  "7EDE":"BDCA",
  "7EDF":"CDB3",
  "7EE0":"E7AE",
  "7EE1":"E7AF",
  "7EE2":"BEEE",
  "7EE3":"D0E5",
  "7EE5":"CBE7",
  "7EE6":"CCD0",
  "7EE7":"BCCC",
  "7EE8":"E7B0",
  "7EE9":"BCA8",
  "7EEA":"D0F7",
  "7EEB":"E7B1",
  "7EED":"D0F8",
  "7EEE":"E7B2",
  "7EEF":"E7B3",
  "7EF0":"B4C2",
  "7EF1":"E7B4",
  "7EF2":"E7B5",
  "7EF3":"C9FE",
  "7EF4":"CEAC",
  "7EF5":"C3E0",
  "7EF6":"E7B7",
  "7EF7":"B1C1",
  "7EF8":"B3F1",
  "7EFA":"E7B8",
  "7EFB":"E7B9",
  "7EFC":"D7DB",
  "7EFD":"D5C0",
  "7EFE":"E7BA",
  "7EFF":"C2CC",
  "7F00":"D7BA",
  "7F01":"E7BB",
  "7F02":"E7BC",
  "7F03":"E7BD",
  "7F04":"BCEA",
  "7F05":"C3E5",
  "7F06":"C0C2",
  "7F07":"E7BE",
  "7F08":"E7BF",
  "7F09":"BCA9",
  "7F0B":"E7C0",
  "7F0C":"E7C1",
  "7F0D":"E7B6",
  "7F0E":"B6D0",
  "7F0F":"E7C2",
  "7F11":"E7C3",
  "7F12":"E7C4",
  "7F13":"BBBA",
  "7F14":"B5DE",
  "7F15":"C2C6",
  "7F16":"B1E0",
  "7F17":"E7C5",
  "7F18":"D4B5",
  "7F19":"E7C6",
  "7F1A":"B8BF",
  "7F1B":"E7C8",
  "7F1C":"E7C7",
  "7F1D":"B7EC",
  "7F1F":"E7C9",
  "7F20":"B2F8",
  "7F21":"E7CA",
  "7F22":"E7CB",
  "7F23":"E7CC",
  "7F24":"E7CD",
  "7F25":"E7CE",
  "7F26":"E7CF",
  "7F27":"E7D0",
  "7F28":"D3A7",
  "7F29":"CBF5",
  "7F2A":"E7D1",
  "7F2B":"E7D2",
  "7F2C":"E7D3",
  "7F2D":"E7D4",
  "7F2E":"C9C9",
  "7F2F":"E7D5",
  "7F30":"E7D6",
  "7F31":"E7D7",
  "7F32":"E7D8",
  "7F33":"E7D9",
  "7F34":"BDC9",
  "7F35":"E7DA",
  "7F36":"F3BE",
  "7F38":"B8D7",
  "7F3A":"C8B1",
  "7F42":"F3BF",
  "7F44":"F3C0",
  "7F45":"F3C1",
  "7F50":"B9DE",
  "7F51":"CDF8",
  "7F54":"D8E8",
  "7F55":"BAB1",
  "7F57":"C2DE",
  "7F58":"EEB7",
  "7F5A":"B7A3",
  "7F5F":"EEB9",
  "7F61":"EEB8",
  "7F62":"B0D5",
  "7F68":"EEBB",
  "7F69":"D5D6",
  "7F6A":"D7EF",
  "7F6E":"D6C3",
  "7F71":"EEBD",
  "7F72":"CAF0",
  "7F74":"EEBC",
  "7F79":"EEBE",
  "7F7E":"EEC0",
  "7F81":"EEBF",
  "7F8A":"D1F2",
  "7F8C":"C7BC",
  "7F8E":"C3C0",
  "7F94":"B8E1",
  "7F9A":"C1E7",
  "7F9D":"F4C6",
  "7F9E":"D0DF",
  "7F9F":"F4C7",
  "7FA1":"CFDB",
  "7FA4":"C8BA",
  "7FA7":"F4C8",
  "7FAF":"F4C9",
  "7FB0":"F4CA",
  "7FB2":"F4CB",
  "7FB8":"D9FA",
  "7FB9":"B8FE",
  "7FBC":"E5F1",
  "7FBD":"D3F0",
  "7FBF":"F4E0",
  "7FC1":"CECC",
  "7FC5":"B3E1",
  "7FCA":"F1B4",
  "7FCC":"D2EE",
  "7FCE":"F4E1",
  "7FD4":"CFE8",
  "7FD5":"F4E2",
  "7FD8":"C7CC",
  "7FDF":"B5D4",
  "7FE0":"B4E4",
  "7FE1":"F4E4",
  "7FE5":"F4E3",
  "7FE6":"F4E5",
  "7FE9":"F4E6",
  "7FEE":"F4E7",
  "7FF0":"BAB2",
  "7FF1":"B0BF",
  "7FF3":"F4E8",
  "7FFB":"B7AD",
  "7FFC":"D2ED",
  "8000":"D2AB",
  "8001":"C0CF",
  "8003":"BFBC",
  "8004":"EBA3",
  "8005":"D5DF",
  "8006":"EAC8",
  "800B":"F1F3",
  "800C":"B6F8",
  "800D":"CBA3",
  "8010":"C4CD",
  "8012":"F1E7",
  "8014":"F1E8",
  "8015":"B8FB",
  "8016":"F1E9",
  "8017":"BAC4",
  "8018":"D4C5",
  "8019":"B0D2",
  "801C":"F1EA",
  "8020":"F1EB",
  "8022":"F1EC",
  "8025":"F1ED",
  "8026":"F1EE",
  "8027":"F1EF",
  "8028":"F1F1",
  "8029":"F1F0",
  "802A":"C5D5",
  "8031":"F1F2",
  "8033":"B6FA",
  "8035":"F1F4",
  "8036":"D2AE",
  "8037":"DEC7",
  "8038":"CBCA",
  "803B":"B3DC",
  "803D":"B5A2",
  "803F":"B9A2",
  "8042":"C4F4",
  "8043":"F1F5",
  "8046":"F1F6",
  "804A":"C1C4",
  "804B":"C1FB",
  "804C":"D6B0",
  "804D":"F1F7",
  "8052":"F1F8",
  "8054":"C1AA",
  "8058":"C6B8",
  "805A":"BEDB",
  "8069":"F1F9",
  "806A":"B4CF",
  "8071":"F1FA",
  "807F":"EDB2",
  "8080":"EDB1",
  "8083":"CBE0",
  "8084":"D2DE",
  "8086":"CBC1",
  "8087":"D5D8",
  "8089":"C8E2",
  "808B":"C0DF",
  "808C":"BCA1",
  "8093":"EBC1",
  "8096":"D0A4",
  "8098":"D6E2",
  "809A":"B6C7",
  "809B":"B8D8",
  "809C":"EBC0",
  "809D":"B8CE",
  "809F":"EBBF",
  "80A0":"B3A6",
  "80A1":"B9C9",
  "80A2":"D6AB",
  "80A4":"B7F4",
  "80A5":"B7CA",
  "80A9":"BCE7",
  "80AA":"B7BE",
  "80AB":"EBC6",
  "80AD":"EBC7",
  "80AE":"B0B9",
  "80AF":"BFCF",
  "80B1":"EBC5",
  "80B2":"D3FD",
  "80B4":"EBC8",
  "80B7":"EBC9",
  "80BA":"B7CE",
  "80BC":"EBC2",
  "80BD":"EBC4",
  "80BE":"C9F6",
  "80BF":"D6D7",
  "80C0":"D5CD",
  "80C1":"D0B2",
  "80C2":"EBCF",
  "80C3":"CEB8",
  "80C4":"EBD0",
  "80C6":"B5A8",
  "80CC":"B1B3",
  "80CD":"EBD2",
  "80CE":"CCA5",
  "80D6":"C5D6",
  "80D7":"EBD3",
  "80D9":"EBD1",
  "80DA":"C5DF",
  "80DB":"EBCE",
  "80DC":"CAA4",
  "80DD":"EBD5",
  "80DE":"B0FB",
  "80E1":"BAFA",
  "80E4":"D8B7",
  "80E5":"F1E3",
  "80E7":"EBCA",
  "80E8":"EBCB",
  "80E9":"EBCC",
  "80EA":"EBCD",
  "80EB":"EBD6",
  "80EC":"E6C0",
  "80ED":"EBD9",
  "80EF":"BFE8",
  "80F0":"D2C8",
  "80F1":"EBD7",
  "80F2":"EBDC",
  "80F3":"B8EC",
  "80F4":"EBD8",
  "80F6":"BDBA",
  "80F8":"D0D8",
  "80FA":"B0B7",
  "80FC":"EBDD",
  "80FD":"C4DC",
  "8102":"D6AC",
  "8106":"B4E0",
  "8109":"C2F6",
  "810A":"BCB9",
  "810D":"EBDA",
  "810E":"EBDB",
  "810F":"D4E0",
  "8110":"C6EA",
  "8111":"C4D4",
  "8112":"EBDF",
  "8113":"C5A7",
  "8114":"D9F5",
  "8116":"B2B1",
  "8118":"EBE4",
  "811A":"BDC5",
  "811E":"EBE2",
  "812C":"EBE3",
  "812F":"B8AC",
  "8131":"CDD1",
  "8132":"EBE5",
  "8136":"EBE1",
  "8138":"C1B3",
  "813E":"C6A2",
  "8146":"CCF3",
  "8148":"EBE6",
  "814A":"C0B0",
  "814B":"D2B8",
  "814C":"EBE7",
  "8150":"B8AF",
  "8151":"B8AD",
  "8153":"EBE8",
  "8154":"C7BB",
  "8155":"CDF3",
  "8159":"EBEA",
  "815A":"EBEB",
  "8160":"EBED",
  "8165":"D0C8",
  "8167":"EBF2",
  "8169":"EBEE",
  "816D":"EBF1",
  "816E":"C8F9",
  "8170":"D1FC",
  "8171":"EBEC",
  "8174":"EBE9",
  "8179":"B8B9",
  "817A":"CFD9",
  "817B":"C4E5",
  "817C":"EBEF",
  "817D":"EBF0",
  "817E":"CCDA",
  "817F":"CDC8",
  "8180":"B0F2",
  "8182":"EBF6",
  "8188":"EBF5",
  "818A":"B2B2",
  "818F":"B8E0",
  "8191":"EBF7",
  "8198":"B1EC",
  "819B":"CCC5",
  "819C":"C4A4",
  "819D":"CFA5",
  "81A3":"EBF9",
  "81A6":"ECA2",
  "81A8":"C5F2",
  "81AA":"EBFA",
  "81B3":"C9C5",
  "81BA":"E2DF",
  "81BB":"EBFE",
  "81C0":"CDCE",
  "81C1":"ECA1",
  "81C2":"B1DB",
  "81C3":"D3B7",
  "81C6":"D2DC",
  "81CA":"EBFD",
  "81CC":"EBFB",
  "81E3":"B3BC",
  "81E7":"EAB0",
  "81EA":"D7D4",
  "81EC":"F4AB",
  "81ED":"B3F4",
  "81F3":"D6C1",
  "81F4":"D6C2",
  "81FB":"D5E9",
  "81FC":"BECA",
  "81FE":"F4A7",
  "8200":"D2A8",
  "8201":"F4A8",
  "8202":"F4A9",
  "8204":"F4AA",
  "8205":"BECB",
  "8206":"D3DF",
  "820C":"C9E0",
  "820D":"C9E1",
  "8210":"F3C2",
  "8212":"CAE6",
  "8214":"CCF2",
  "821B":"E2B6",
  "821C":"CBB4",
  "821E":"CEE8",
  "821F":"D6DB",
  "8221":"F4AD",
  "8222":"F4AE",
  "8223":"F4AF",
  "8228":"F4B2",
  "822A":"BABD",
  "822B":"F4B3",
  "822C":"B0E3",
  "822D":"F4B0",
  "822F":"F4B1",
  "8230":"BDA2",
  "8231":"B2D5",
  "8233":"F4B6",
  "8234":"F4B7",
  "8235":"B6E6",
  "8236":"B2B0",
  "8237":"CFCF",
  "8238":"F4B4",
  "8239":"B4AC",
  "823B":"F4B5",
  "823E":"F4B8",
  "8244":"F4B9",
  "8247":"CDA7",
  "8249":"F4BA",
  "824B":"F4BB",
  "824F":"F4BC",
  "8258":"CBD2",
  "825A":"F4BD",
  "825F":"F4BE",
  "8268":"F4BF",
  "826E":"F4DE",
  "826F":"C1BC",
  "8270":"BCE8",
  "8272":"C9AB",
  "8273":"D1DE",
  "8274":"E5F5",
  "8279":"DCB3",
  "827A":"D2D5",
  "827D":"DCB4",
  "827E":"B0AC",
  "827F":"DCB5",
  "8282":"BDDA",
  "8284":"DCB9",
  "8288":"D8C2",
  "828A":"DCB7",
  "828B":"D3F3",
  "828D":"C9D6",
  "828E":"DCBA",
  "828F":"DCB6",
  "8291":"DCBB",
  "8292":"C3A2",
  "8297":"DCBC",
  "8298":"DCC5",
  "8299":"DCBD",
  "829C":"CEDF",
  "829D":"D6A5",
  "829F":"DCCF",
  "82A1":"DCCD",
  "82A4":"DCD2",
  "82A5":"BDE6",
  "82A6":"C2AB",
  "82A8":"DCB8",
  "82A9":"DCCB",
  "82AA":"DCCE",
  "82AB":"DCBE",
  "82AC":"B7D2",
  "82AD":"B0C5",
  "82AE":"DCC7",
  "82AF":"D0BE",
  "82B0":"DCC1",
  "82B1":"BBA8",
  "82B3":"B7BC",
  "82B4":"DCCC",
  "82B7":"DCC6",
  "82B8":"DCBF",
  "82B9":"C7DB",
  "82BD":"D1BF",
  "82BE":"DCC0",
  "82C1":"DCCA",
  "82C4":"DCD0",
  "82C7":"CEAD",
  "82C8":"DCC2",
  "82CA":"DCC3",
  "82CB":"DCC8",
  "82CC":"DCC9",
  "82CD":"B2D4",
  "82CE":"DCD1",
  "82CF":"CBD5",
  "82D1":"D4B7",
  "82D2":"DCDB",
  "82D3":"DCDF",
  "82D4":"CCA6",
  "82D5":"DCE6",
  "82D7":"C3E7",
  "82D8":"DCDC",
  "82DB":"BFC1",
  "82DC":"DCD9",
  "82DE":"B0FA",
  "82DF":"B9B6",
  "82E0":"DCE5",
  "82E1":"DCD3",
  "82E3":"DCC4",
  "82E4":"DCD6",
  "82E5":"C8F4",
  "82E6":"BFE0",
  "82EB":"C9BB",
  "82EF":"B1BD",
  "82F1":"D3A2",
  "82F4":"DCDA",
  "82F7":"DCD5",
  "82F9":"C6BB",
  "82FB":"DCDE",
  "8301":"D7C2",
  "8302":"C3AF",
  "8303":"B7B6",
  "8304":"C7D1",
  "8305":"C3A9",
  "8306":"DCE2",
  "8307":"DCD8",
  "8308":"DCEB",
  "8309":"DCD4",
  "830C":"DCDD",
  "830E":"BEA5",
  "830F":"DCD7",
  "8311":"DCE0",
  "8314":"DCE3",
  "8315":"DCE4",
  "8317":"DCF8",
  "831A":"DCE1",
  "831B":"DDA2",
  "831C":"DCE7",
  "8327":"BCEB",
  "8328":"B4C4",
  "832B":"C3A3",
  "832C":"B2E7",
  "832D":"DCFA",
  "832F":"DCF2",
  "8331":"DCEF",
  "8333":"DCFC",
  "8334":"DCEE",
  "8335":"D2F0",
  "8336":"B2E8",
  "8338":"C8D7",
  "8339":"C8E3",
  "833A":"DCFB",
  "833C":"DCED",
  "8340":"DCF7",
  "8343":"DCF5",
  "8346":"BEA3",
  "8347":"DCF4",
  "8349":"B2DD",
  "834F":"DCF3",
  "8350":"BCF6",
  "8351":"DCE8",
  "8352":"BBC4",
  "8354":"C0F3",
  "835A":"BCD4",
  "835B":"DCE9",
  "835C":"DCEA",
  "835E":"DCF1",
  "835F":"DCF6",
  "8360":"DCF9",
  "8361":"B5B4",
  "8363":"C8D9",
  "8364":"BBE7",
  "8365":"DCFE",
  "8366":"DCFD",
  "8367":"D3AB",
  "8368":"DDA1",
  "8369":"DDA3",
  "836A":"DDA5",
  "836B":"D2F1",
  "836C":"DDA4",
  "836D":"DDA6",
  "836E":"DDA7",
  "836F":"D2A9",
  "8377":"BAC9",
  "8378":"DDA9",
  "837B":"DDB6",
  "837C":"DDB1",
  "837D":"DDB4",
  "8385":"DDB0",
  "8386":"C6CE",
  "8389":"C0F2",
  "838E":"C9AF",
  "8392":"DCEC",
  "8393":"DDAE",
  "8398":"DDB7",
  "839B":"DCF0",
  "839C":"DDAF",
  "839E":"DDB8",
  "83A0":"DDAC",
  "83A8":"DDB9",
  "83A9":"DDB3",
  "83AA":"DDAD",
  "83AB":"C4AA",
  "83B0":"DDA8",
  "83B1":"C0B3",
  "83B2":"C1AB",
  "83B3":"DDAA",
  "83B4":"DDAB",
  "83B6":"DDB2",
  "83B7":"BBF1",
  "83B8":"DDB5",
  "83B9":"D3A8",
  "83BA":"DDBA",
  "83BC":"DDBB",
  "83BD":"C3A7",
  "83C0":"DDD2",
  "83C1":"DDBC",
  "83C5":"DDD1",
  "83C7":"B9BD",
  "83CA":"BED5",
  "83CC":"BEFA",
  "83CF":"BACA",
  "83D4":"DDCA",
  "83D6":"DDC5",
  "83D8":"DDBF",
  "83DC":"B2CB",
  "83DD":"DDC3",
  "83DF":"DDCB",
  "83E0":"B2A4",
  "83E1":"DDD5",
  "83E5":"DDBE",
  "83E9":"C6D0",
  "83EA":"DDD0",
  "83F0":"DDD4",
  "83F1":"C1E2",
  "83F2":"B7C6",
  "83F8":"DDCE",
  "83F9":"DDCF",
  "83FD":"DDC4",
  "8401":"DDBD",
  "8403":"DDCD",
  "8404":"CCD1",
  "8406":"DDC9",
  "840B":"DDC2",
  "840C":"C3C8",
  "840D":"C6BC",
  "840E":"CEAE",
  "840F":"DDCC",
  "8411":"DDC8",
  "8418":"DDC1",
  "841C":"DDC6",
  "841D":"C2DC",
  "8424":"D3A9",
  "8425":"D3AA",
  "8426":"DDD3",
  "8427":"CFF4",
  "8428":"C8F8",
  "8431":"DDE6",
  "8438":"DDC7",
  "843C":"DDE0",
  "843D":"C2E4",
  "8446":"DDE1",
  "8451":"DDD7",
  "8457":"D6F8",
  "8459":"DDD9",
  "845A":"DDD8",
  "845B":"B8F0",
  "845C":"DDD6",
  "8461":"C6CF",
  "8463":"B6AD",
  "8469":"DDE2",
  "846B":"BAF9",
  "846C":"D4E1",
  "846D":"DDE7",
  "8471":"B4D0",
  "8473":"DDDA",
  "8475":"BFFB",
  "8476":"DDE3",
  "8478":"DDDF",
  "847A":"DDDD",
  "8482":"B5D9",
  "8487":"DDDB",
  "8488":"DDDC",
  "8489":"DDDE",
  "848B":"BDAF",
  "848C":"DDE4",
  "848E":"DDE5",
  "8497":"DDF5",
  "8499":"C3C9",
  "849C":"CBE2",
  "84A1":"DDF2",
  "84AF":"D8E1",
  "84B2":"C6D1",
  "84B4":"DDF4",
  "84B8":"D5F4",
  "84B9":"DDF3",
  "84BA":"DDF0",
  "84BD":"DDEC",
  "84BF":"DDEF",
  "84C1":"DDE8",
  "84C4":"D0EE",
  "84C9":"C8D8",
  "84CA":"DDEE",
  "84CD":"DDE9",
  "84D0":"DDEA",
  "84D1":"CBF2",
  "84D3":"DDED",
  "84D6":"B1CD",
  "84DD":"C0B6",
  "84DF":"BCBB",
  "84E0":"DDF1",
  "84E3":"DDF7",
  "84E5":"DDF6",
  "84E6":"DDEB",
  "84EC":"C5EE",
  "84F0":"DDFB",
  "84FC":"DEA4",
  "84FF":"DEA3",
  "850C":"DDF8",
  "8511":"C3EF",
  "8513":"C2FB",
  "8517":"D5E1",
  "851A":"CEB5",
  "851F":"DDFD",
  "8521":"B2CC",
  "852B":"C4E8",
  "852C":"CADF",
  "8537":"C7BE",
  "8538":"DDFA",
  "8539":"DDFC",
  "853A":"DDFE",
  "853B":"DEA2",
  "853C":"B0AA",
  "853D":"B1CE",
  "8543":"DEAC",
  "8548":"DEA6",
  "8549":"BDB6",
  "854A":"C8EF",
  "8556":"DEA1",
  "8559":"DEA5",
  "855E":"DEA9",
  "8564":"DEA8",
  "8568":"DEA7",
  "8572":"DEAD",
  "8574":"D4CC",
  "8579":"DEB3",
  "857A":"DEAA",
  "857B":"DEAE",
  "857E":"C0D9",
  "8584":"B1A1",
  "8585":"DEB6",
  "8587":"DEB1",
  "858F":"DEB2",
  "859B":"D1A6",
  "859C":"DEB5",
  "85A4":"DEAF",
  "85A8":"DEB0",
  "85AA":"D0BD",
  "85AE":"DEB4",
  "85AF":"CAED",
  "85B0":"DEB9",
  "85B7":"DEB8",
  "85B9":"DEB7",
  "85C1":"DEBB",
  "85C9":"BDE5",
  "85CF":"B2D8",
  "85D0":"C3EA",
  "85D3":"DEBA",
  "85D5":"C5BA",
  "85DC":"DEBC",
  "85E4":"CCD9",
  "85E9":"B7AA",
  "85FB":"D4E5",
  "85FF":"DEBD",
  "8605":"DEBF",
  "8611":"C4A2",
  "8616":"DEC1",
  "8627":"DEBE",
  "8629":"DEC0",
  "8638":"D5BA",
  "863C":"DEC2",
  "864D":"F2AE",
  "864E":"BBA2",
  "864F":"C2B2",
  "8650":"C5B0",
  "8651":"C2C7",
  "8654":"F2AF",
  "865A":"D0E9",
  "865E":"D3DD",
  "8662":"EBBD",
  "866B":"B3E6",
  "866C":"F2B0",
  "866E":"F2B1",
  "8671":"CAAD",
  "8679":"BAE7",
  "867A":"F2B3",
  "867B":"F2B5",
  "867C":"F2B4",
  "867D":"CBE4",
  "867E":"CFBA",
  "867F":"F2B2",
  "8680":"CAB4",
  "8681":"D2CF",
  "8682":"C2EC",
  "868A":"CEC3",
  "868B":"F2B8",
  "868C":"B0F6",
  "868D":"F2B7",
  "8693":"F2BE",
  "8695":"B2CF",
  "869C":"D1C1",
  "869D":"F2BA",
  "86A3":"F2BC",
  "86A4":"D4E9",
  "86A7":"F2BB",
  "86A8":"F2B6",
  "86A9":"F2BF",
  "86AA":"F2BD",
  "86AC":"F2B9",
  "86AF":"F2C7",
  "86B0":"F2C4",
  "86B1":"F2C6",
  "86B4":"F2CA",
  "86B5":"F2C2",
  "86B6":"F2C0",
  "86BA":"F2C5",
  "86C0":"D6FB",
  "86C4":"F2C1",
  "86C6":"C7F9",
  "86C7":"C9DF",
  "86C9":"F2C8",
  "86CA":"B9C6",
  "86CB":"B5B0",
  "86CE":"F2C3",
  "86CF":"F2C9",
  "86D0":"F2D0",
  "86D1":"F2D6",
  "86D4":"BBD7",
  "86D8":"F2D5",
  "86D9":"CDDC",
  "86DB":"D6EB",
  "86DE":"F2D2",
  "86DF":"F2D4",
  "86E4":"B8F2",
  "86E9":"F2CB",
  "86ED":"F2CE",
  "86EE":"C2F9",
  "86F0":"D5DD",
  "86F1":"F2CC",
  "86F2":"F2CD",
  "86F3":"F2CF",
  "86F4":"F2D3",
  "86F8":"F2D9",
  "86F9":"D3BC",
  "86FE":"B6EA",
  "8700":"CAF1",
  "8702":"B7E4",
  "8703":"F2D7",
  "8707":"F2D8",
  "8708":"F2DA",
  "8709":"F2DD",
  "870A":"F2DB",
  "870D":"F2DC",
  "8712":"D1D1",
  "8713":"F2D1",
  "8715":"CDC9",
  "8717":"CECF",
  "8718":"D6A9",
  "871A":"F2E3",
  "871C":"C3DB",
  "871E":"F2E0",
  "8721":"C0AF",
  "8722":"F2EC",
  "8723":"F2DE",
  "8725":"F2E1",
  "8729":"F2E8",
  "872E":"F2E2",
  "8731":"F2E7",
  "8734":"F2E6",
  "8737":"F2E9",
  "873B":"F2DF",
  "873E":"F2E4",
  "873F":"F2EA",
  "8747":"D3AC",
  "8748":"F2E5",
  "8749":"B2F5",
  "874C":"F2F2",
  "874E":"D0AB",
  "8753":"F2F5",
  "8757":"BBC8",
  "8759":"F2F9",
  "8760":"F2F0",
  "8763":"F2F6",
  "8764":"F2F8",
  "8765":"F2FA",
  "876E":"F2F3",
  "8770":"F2F1",
  "8774":"BAFB",
  "8776":"B5FB",
  "877B":"F2EF",
  "877C":"F2F7",
  "877D":"F2ED",
  "877E":"F2EE",
  "8782":"F2EB",
  "8783":"F3A6",
  "8785":"F3A3",
  "8788":"F3A2",
  "878B":"F2F4",
  "878D":"C8DA",
  "8793":"F2FB",
  "8797":"F3A5",
  "879F":"C3F8",
  "87A8":"F2FD",
  "87AB":"F3A7",
  "87AC":"F3A9",
  "87AD":"F3A4",
  "87AF":"F2FC",
  "87B3":"F3AB",
  "87B5":"F3AA",
  "87BA":"C2DD",
  "87BD":"F3AE",
  "87C0":"F3B0",
  "87C6":"F3A1",
  "87CA":"F3B1",
  "87CB":"F3AC",
  "87D1":"F3AF",
  "87D2":"F2FE",
  "87D3":"F3AD",
  "87DB":"F3B2",
  "87E0":"F3B4",
  "87E5":"F3A8",
  "87EA":"F3B3",
  "87EE":"F3B5",
  "87F9":"D0B7",
  "87FE":"F3B8",
  "8803":"D9F9",
  "880A":"F3B9",
  "8813":"F3B7",
  "8815":"C8E4",
  "8816":"F3B6",
  "881B":"F3BA",
  "8821":"F3BB",
  "8822":"B4C0",
  "8832":"EEC3",
  "8839":"F3BC",
  "883C":"F3BD",
  "8840":"D1AA",
  "8844":"F4AC",
  "8845":"D0C6",
  "884C":"D0D0",
  "884D":"D1DC",
  "8854":"CFCE",
  "8857":"BDD6",
  "8859":"D1C3",
  "8861":"BAE2",
  "8862":"E1E9",
  "8863":"D2C2",
  "8864":"F1C2",
  "8865":"B2B9",
  "8868":"B1ED",
  "8869":"F1C3",
  "886B":"C9C0",
  "886C":"B3C4",
  "886E":"D9F2",
  "8870":"CBA5",
  "8872":"F1C4",
  "8877":"D6D4",
  "887D":"F1C5",
  "887E":"F4C0",
  "887F":"F1C6",
  "8881":"D4AC",
  "8882":"F1C7",
  "8884":"B0C0",
  "8885":"F4C1",
  "8888":"F4C2",
  "888B":"B4FC",
  "888D":"C5DB",
  "8892":"CCBB",
  "8896":"D0E4",
  "889C":"CDE0",
  "88A2":"F1C8",
  "88A4":"D9F3",
  "88AB":"B1BB",
  "88AD":"CFAE",
  "88B1":"B8A4",
  "88B7":"F1CA",
  "88BC":"F1CB",
  "88C1":"B2C3",
  "88C2":"C1D1",
  "88C5":"D7B0",
  "88C6":"F1C9",
  "88C9":"F1CC",
  "88CE":"F1CE",
  "88D2":"D9F6",
  "88D4":"D2E1",
  "88D5":"D4A3",
  "88D8":"F4C3",
  "88D9":"C8B9",
  "88DF":"F4C4",
  "88E2":"F1CD",
  "88E3":"F1CF",
  "88E4":"BFE3",
  "88E5":"F1D0",
  "88E8":"F1D4",
  "88F0":"F1D6",
  "88F1":"F1D1",
  "88F3":"C9D1",
  "88F4":"C5E1",
  "88F8":"C2E3",
  "88F9":"B9FC",
  "88FC":"F1D3",
  "88FE":"F1D5",
  "8902":"B9D3",
  "890A":"F1DB",
  "8910":"BAD6",
  "8912":"B0FD",
  "8913":"F1D9",
  "8919":"F1D8",
  "891A":"F1D2",
  "891B":"F1DA",
  "8921":"F1D7",
  "8925":"C8EC",
  "892A":"CDCA",
  "892B":"F1DD",
  "8930":"E5BD",
  "8934":"F1DC",
  "8936":"F1DE",
  "8941":"F1DF",
  "8944":"CFE5",
  "895E":"F4C5",
  "895F":"BDF3",
  "8966":"F1E0",
  "897B":"F1E1",
  "897F":"CEF7",
  "8981":"D2AA",
  "8983":"F1FB",
  "8986":"B8B2",
  "89C1":"BCFB",
  "89C2":"B9DB",
  "89C4":"B9E6",
  "89C5":"C3D9",
  "89C6":"CAD3",
  "89C7":"EAE8",
  "89C8":"C0C0",
  "89C9":"BEF5",
  "89CA":"EAE9",
  "89CB":"EAEA",
  "89CC":"EAEB",
  "89CE":"EAEC",
  "89CF":"EAED",
  "89D0":"EAEE",
  "89D1":"EAEF",
  "89D2":"BDC7",
  "89D6":"F5FB",
  "89DA":"F5FD",
  "89DC":"F5FE",
  "89DE":"F5FC",
  "89E3":"BDE2",
  "89E5":"F6A1",
  "89E6":"B4A5",
  "89EB":"F6A2",
  "89EF":"F6A3",
  "89F3":"ECB2",
  "8A00":"D1D4",
  "8A07":"D9EA",
  "8A3E":"F6A4",
  "8A48":"EEBA",
  "8A79":"D5B2",
  "8A89":"D3FE",
  "8A8A":"CCDC",
  "8A93":"CAC4",
  "8B07":"E5C0",
  "8B26":"F6A5",
  "8B66":"BEAF",
  "8B6C":"C6A9",
  "8BA0":"DAA5",
  "8BA1":"BCC6",
  "8BA2":"B6A9",
  "8BA3":"B8BC",
  "8BA4":"C8CF",
  "8BA5":"BCA5",
  "8BA6":"DAA6",
  "8BA7":"DAA7",
  "8BA8":"CCD6",
  "8BA9":"C8C3",
  "8BAA":"DAA8",
  "8BAB":"C6FD",
  "8BAD":"D1B5",
  "8BAE":"D2E9",
  "8BAF":"D1B6",
  "8BB0":"BCC7",
  "8BB2":"BDB2",
  "8BB3":"BBE4",
  "8BB4":"DAA9",
  "8BB5":"DAAA",
  "8BB6":"D1C8",
  "8BB7":"DAAB",
  "8BB8":"D0ED",
  "8BB9":"B6EF",
  "8BBA":"C2DB",
  "8BBC":"CBCF",
  "8BBD":"B7ED",
  "8BBE":"C9E8",
  "8BBF":"B7C3",
  "8BC0":"BEF7",
  "8BC1":"D6A4",
  "8BC2":"DAAC",
  "8BC3":"DAAD",
  "8BC4":"C6C0",
  "8BC5":"D7E7",
  "8BC6":"CAB6",
  "8BC8":"D5A9",
  "8BC9":"CBDF",
  "8BCA":"D5EF",
  "8BCB":"DAAE",
  "8BCC":"D6DF",
  "8BCD":"B4CA",
  "8BCE":"DAB0",
  "8BCF":"DAAF",
  "8BD1":"D2EB",
  "8BD2":"DAB1",
  "8BD3":"DAB2",
  "8BD4":"DAB3",
  "8BD5":"CAD4",
  "8BD6":"DAB4",
  "8BD7":"CAAB",
  "8BD8":"DAB5",
  "8BD9":"DAB6",
  "8BDA":"B3CF",
  "8BDB":"D6EF",
  "8BDC":"DAB7",
  "8BDD":"BBB0",
  "8BDE":"B5AE",
  "8BDF":"DAB8",
  "8BE0":"DAB9",
  "8BE1":"B9EE",
  "8BE2":"D1AF",
  "8BE3":"D2E8",
  "8BE4":"DABA",
  "8BE5":"B8C3",
  "8BE6":"CFEA",
  "8BE7":"B2EF",
  "8BE8":"DABB",
  "8BE9":"DABC",
  "8BEB":"BDEB",
  "8BEC":"CEDC",
  "8BED":"D3EF",
  "8BEE":"DABD",
  "8BEF":"CEF3",
  "8BF0":"DABE",
  "8BF1":"D3D5",
  "8BF2":"BBE5",
  "8BF3":"DABF",
  "8BF4":"CBB5",
  "8BF5":"CBD0",
  "8BF6":"DAC0",
  "8BF7":"C7EB",
  "8BF8":"D6EE",
  "8BF9":"DAC1",
  "8BFA":"C5B5",
  "8BFB":"B6C1",
  "8BFC":"DAC2",
  "8BFD":"B7CC",
  "8BFE":"BFCE",
  "8BFF":"DAC3",
  "8C00":"DAC4",
  "8C01":"CBAD",
  "8C02":"DAC5",
  "8C03":"B5F7",
  "8C04":"DAC6",
  "8C05":"C1C2",
  "8C06":"D7BB",
  "8C07":"DAC7",
  "8C08":"CCB8",
  "8C0A":"D2EA",
  "8C0B":"C4B1",
  "8C0C":"DAC8",
  "8C0D":"B5FD",
  "8C0E":"BBD1",
  "8C0F":"DAC9",
  "8C10":"D0B3",
  "8C11":"DACA",
  "8C12":"DACB",
  "8C13":"CEBD",
  "8C14":"DACC",
  "8C15":"DACD",
  "8C16":"DACE",
  "8C17":"B2F7",
  "8C18":"DAD1",
  "8C19":"DACF",
  "8C1A":"D1E8",
  "8C1B":"DAD0",
  "8C1C":"C3D5",
  "8C1D":"DAD2",
  "8C1F":"DAD3",
  "8C20":"DAD4",
  "8C21":"DAD5",
  "8C22":"D0BB",
  "8C23":"D2A5",
  "8C24":"B0F9",
  "8C25":"DAD6",
  "8C26":"C7AB",
  "8C27":"DAD7",
  "8C28":"BDF7",
  "8C29":"C3A1",
  "8C2A":"DAD8",
  "8C2B":"DAD9",
  "8C2C":"C3FD",
  "8C2D":"CCB7",
  "8C2E":"DADA",
  "8C2F":"DADB",
  "8C30":"C0BE",
  "8C31":"C6D7",
  "8C32":"DADC",
  "8C33":"DADD",
  "8C34":"C7B4",
  "8C35":"DADE",
  "8C36":"DADF",
  "8C37":"B9C8",
  "8C41":"BBED",
  "8C46":"B6B9",
  "8C47":"F4F8",
  "8C49":"F4F9",
  "8C4C":"CDE3",
  "8C55":"F5B9",
  "8C5A":"EBE0",
  "8C61":"CFF3",
  "8C62":"BBBF",
  "8C6A":"BAC0",
  "8C6B":"D4A5",
  "8C73":"E1D9",
  "8C78":"F5F4",
  "8C79":"B1AA",
  "8C7A":"B2F2",
  "8C82":"F5F5",
  "8C85":"F5F7",
  "8C89":"BAD1",
  "8C8A":"F5F6",
  "8C8C":"C3B2",
  "8C94":"F5F9",
  "8C98":"F5F8",
  "8D1D":"B1B4",
  "8D1E":"D5EA",
  "8D1F":"B8BA",
  "8D21":"B9B1",
  "8D22":"B2C6",
  "8D23":"D4F0",
  "8D24":"CFCD",
  "8D25":"B0DC",
  "8D26":"D5CB",
  "8D27":"BBF5",
  "8D28":"D6CA",
  "8D29":"B7B7",
  "8D2A":"CCB0",
  "8D2B":"C6B6",
  "8D2C":"B1E1",
  "8D2D":"B9BA",
  "8D2E":"D6FC",
  "8D2F":"B9E1",
  "8D30":"B7A1",
  "8D31":"BCFA",
  "8D32":"EADA",
  "8D33":"EADB",
  "8D34":"CCF9",
  "8D35":"B9F3",
  "8D36":"EADC",
  "8D37":"B4FB",
  "8D38":"C3B3",
  "8D39":"B7D1",
  "8D3A":"BAD8",
  "8D3B":"EADD",
  "8D3C":"D4F4",
  "8D3D":"EADE",
  "8D3E":"BCD6",
  "8D3F":"BBDF",
  "8D40":"EADF",
  "8D41":"C1DE",
  "8D42":"C2B8",
  "8D43":"D4DF",
  "8D44":"D7CA",
  "8D45":"EAE0",
  "8D46":"EAE1",
  "8D47":"EAE4",
  "8D48":"EAE2",
  "8D49":"EAE3",
  "8D4A":"C9DE",
  "8D4B":"B8B3",
  "8D4C":"B6C4",
  "8D4D":"EAE5",
  "8D4E":"CAEA",
  "8D4F":"C9CD",
  "8D50":"B4CD",
  "8D53":"E2D9",
  "8D54":"C5E2",
  "8D55":"EAE6",
  "8D56":"C0B5",
  "8D58":"D7B8",
  "8D59":"EAE7",
  "8D5A":"D7AC",
  "8D5B":"C8FC",
  "8D5C":"D8D3",
  "8D5D":"D8CD",
  "8D5E":"D4DE",
  "8D60":"D4F9",
  "8D61":"C9C4",
  "8D62":"D3AE",
  "8D63":"B8D3",
  "8D64":"B3E0",
  "8D66":"C9E2",
  "8D67":"F4F6",
  "8D6B":"BAD5",
  "8D6D":"F4F7",
  "8D70":"D7DF",
  "8D73":"F4F1",
  "8D74":"B8B0",
  "8D75":"D5D4",
  "8D76":"B8CF",
  "8D77":"C6F0",
  "8D81":"B3C3",
  "8D84":"F4F2",
  "8D85":"B3AC",
  "8D8A":"D4BD",
  "8D8B":"C7F7",
  "8D91":"F4F4",
  "8D94":"F4F3",
  "8D9F":"CCCB",
  "8DA3":"C8A4",
  "8DB1":"F4F5",
  "8DB3":"D7E3",
  "8DB4":"C5BF",
  "8DB5":"F5C0",
  "8DB8":"F5BB",
  "8DBA":"F5C3",
  "8DBC":"F5C2",
  "8DBE":"D6BA",
  "8DBF":"F5C1",
  "8DC3":"D4BE",
  "8DC4":"F5C4",
  "8DC6":"F5CC",
  "8DCB":"B0CF",
  "8DCC":"B5F8",
  "8DCE":"F5C9",
  "8DCF":"F5CA",
  "8DD1":"C5DC",
  "8DD6":"F5C5",
  "8DD7":"F5C6",
  "8DDA":"F5C7",
  "8DDB":"F5CB",
  "8DDD":"BEE0",
  "8DDE":"F5C8",
  "8DDF":"B8FA",
  "8DE3":"F5D0",
  "8DE4":"F5D3",
  "8DE8":"BFE7",
  "8DEA":"B9F2",
  "8DEB":"F5BC",
  "8DEC":"F5CD",
  "8DEF":"C2B7",
  "8DF3":"CCF8",
  "8DF5":"BCF9",
  "8DF7":"F5CE",
  "8DF8":"F5CF",
  "8DF9":"F5D1",
  "8DFA":"B6E5",
  "8DFB":"F5D2",
  "8DFD":"F5D5",
  "8E05":"F5BD",
  "8E09":"F5D4",
  "8E0A":"D3BB",
  "8E0C":"B3EC",
  "8E0F":"CCA4",
  "8E14":"F5D6",
  "8E1D":"F5D7",
  "8E1E":"BEE1",
  "8E1F":"F5D8",
  "8E22":"CCDF",
  "8E23":"F5DB",
  "8E29":"B2C8",
  "8E2A":"D7D9",
  "8E2C":"F5D9",
  "8E2E":"F5DA",
  "8E2F":"F5DC",
  "8E31":"F5E2",
  "8E35":"F5E0",
  "8E39":"F5DF",
  "8E3A":"F5DD",
  "8E3D":"F5E1",
  "8E40":"F5DE",
  "8E41":"F5E4",
  "8E42":"F5E5",
  "8E44":"CCE3",
  "8E47":"E5BF",
  "8E48":"B5B8",
  "8E49":"F5E3",
  "8E4A":"F5E8",
  "8E4B":"CCA3",
  "8E51":"F5E6",
  "8E52":"F5E7",
  "8E59":"F5BE",
  "8E66":"B1C4",
  "8E69":"F5BF",
  "8E6C":"B5C5",
  "8E6D":"B2E4",
  "8E6F":"F5EC",
  "8E70":"F5E9",
  "8E72":"B6D7",
  "8E74":"F5ED",
  "8E76":"F5EA",
  "8E7C":"F5EB",
  "8E7F":"B4DA",
  "8E81":"D4EA",
  "8E85":"F5EE",
  "8E87":"B3F9",
  "8E8F":"F5EF",
  "8E90":"F5F1",
  "8E94":"F5F0",
  "8E9C":"F5F2",
  "8E9E":"F5F3",
  "8EAB":"C9ED",
  "8EAC":"B9AA",
  "8EAF":"C7FB",
  "8EB2":"B6E3",
  "8EBA":"CCC9",
  "8ECE":"EAA6",
  "8F66":"B3B5",
  "8F67":"D4FE",
  "8F68":"B9EC",
  "8F69":"D0F9",
  "8F6B":"E9ED",
  "8F6C":"D7AA",
  "8F6D":"E9EE",
  "8F6E":"C2D6",
  "8F6F":"C8ED",
  "8F70":"BAE4",
  "8F71":"E9EF",
  "8F72":"E9F0",
  "8F73":"E9F1",
  "8F74":"D6E1",
  "8F75":"E9F2",
  "8F76":"E9F3",
  "8F77":"E9F5",
  "8F78":"E9F4",
  "8F79":"E9F6",
  "8F7A":"E9F7",
  "8F7B":"C7E1",
  "8F7C":"E9F8",
  "8F7D":"D4D8",
  "8F7E":"E9F9",
  "8F7F":"BDCE",
  "8F81":"E9FA",
  "8F82":"E9FB",
  "8F83":"BDCF",
  "8F84":"E9FC",
  "8F85":"B8A8",
  "8F86":"C1BE",
  "8F87":"E9FD",
  "8F88":"B1B2",
  "8F89":"BBD4",
  "8F8A":"B9F5",
  "8F8B":"E9FE",
  "8F8D":"EAA1",
  "8F8E":"EAA2",
  "8F8F":"EAA3",
  "8F90":"B7F8",
  "8F91":"BCAD",
  "8F93":"CAE4",
  "8F94":"E0CE",
  "8F95":"D4AF",
  "8F96":"CFBD",
  "8F97":"D5B7",
  "8F98":"EAA4",
  "8F99":"D5DE",
  "8F9A":"EAA5",
  "8F9B":"D0C1",
  "8F9C":"B9BC",
  "8F9E":"B4C7",
  "8F9F":"B1D9",
  "8FA3":"C0B1",
  "8FA8":"B1E6",
  "8FA9":"B1E7",
  "8FAB":"B1E8",
  "8FB0":"B3BD",
  "8FB1":"C8E8",
  "8FB6":"E5C1",
  "8FB9":"B1DF",
  "8FBD":"C1C9",
  "8FBE":"B4EF",
  "8FC1":"C7A8",
  "8FC2":"D3D8",
  "8FC4":"C6F9",
  "8FC5":"D1B8",
  "8FC7":"B9FD",
  "8FC8":"C2F5",
  "8FCE":"D3AD",
  "8FD0":"D4CB",
  "8FD1":"BDFC",
  "8FD3":"E5C2",
  "8FD4":"B7B5",
  "8FD5":"E5C3",
  "8FD8":"BBB9",
  "8FD9":"D5E2",
  "8FDB":"BDF8",
  "8FDC":"D4B6",
  "8FDD":"CEA5",
  "8FDE":"C1AC",
  "8FDF":"B3D9",
  "8FE2":"CCF6",
  "8FE4":"E5C6",
  "8FE5":"E5C4",
  "8FE6":"E5C8",
  "8FE8":"E5CA",
  "8FE9":"E5C7",
  "8FEA":"B5CF",
  "8FEB":"C6C8",
  "8FED":"B5FC",
  "8FEE":"E5C5",
  "8FF0":"CAF6",
  "8FF3":"E5C9",
  "8FF7":"C3D4",
  "8FF8":"B1C5",
  "8FF9":"BCA3",
  "8FFD":"D7B7",
  "9000":"CDCB",
  "9001":"CBCD",
  "9002":"CACA",
  "9003":"CCD3",
  "9004":"E5CC",
  "9005":"E5CB",
  "9006":"C4E6",
  "9009":"D1A1",
  "900A":"D1B7",
  "900B":"E5CD",
  "900D":"E5D0",
  "900F":"CDB8",
  "9010":"D6F0",
  "9011":"E5CF",
  "9012":"B5DD",
  "9014":"CDBE",
  "9016":"E5D1",
  "9017":"B6BA",
  "901A":"CDA8",
  "901B":"B9E4",
  "901D":"CAC5",
  "901E":"B3D1",
  "901F":"CBD9",
  "9020":"D4EC",
  "9021":"E5D2",
  "9022":"B7EA",
  "9026":"E5CE",
  "902D":"E5D5",
  "902E":"B4FE",
  "902F":"E5D6",
  "9035":"E5D3",
  "9036":"E5D4",
  "9038":"D2DD",
  "903B":"C2DF",
  "903C":"B1C6",
  "903E":"D3E2",
  "9041":"B6DD",
  "9042":"CBEC",
  "9044":"E5D7",
  "9047":"D3F6",
  "904D":"B1E9",
  "904F":"B6F4",
  "9050":"E5DA",
  "9051":"E5D8",
  "9052":"E5D9",
  "9053":"B5C0",
  "9057":"D2C5",
  "9058":"E5DC",
  "905B":"E5DE",
  "9062":"E5DD",
  "9063":"C7B2",
  "9065":"D2A3",
  "9068":"E5DB",
  "906D":"D4E2",
  "906E":"D5DA",
  "9074":"E5E0",
  "9075":"D7F1",
  "907D":"E5E1",
  "907F":"B1DC",
  "9080":"D1FB",
  "9082":"E5E2",
  "9083":"E5E4",
  "9088":"E5E3",
  "908B":"E5E5",
  "9091":"D2D8",
  "9093":"B5CB",
  "9095":"E7DF",
  "9097":"DAF5",
  "9099":"DAF8",
  "909B":"DAF6",
  "909D":"DAF7",
  "90A1":"DAFA",
  "90A2":"D0CF",
  "90A3":"C4C7",
  "90A6":"B0EE",
  "90AA":"D0B0",
  "90AC":"DAF9",
  "90AE":"D3CA",
  "90AF":"BAAA",
  "90B0":"DBA2",
  "90B1":"C7F1",
  "90B3":"DAFC",
  "90B4":"DAFB",
  "90B5":"C9DB",
  "90B6":"DAFD",
  "90B8":"DBA1",
  "90B9":"D7DE",
  "90BA":"DAFE",
  "90BB":"C1DA",
  "90BE":"DBA5",
  "90C1":"D3F4",
  "90C4":"DBA7",
  "90C5":"DBA4",
  "90C7":"DBA8",
  "90CA":"BDBC",
  "90CE":"C0C9",
  "90CF":"DBA3",
  "90D0":"DBA6",
  "90D1":"D6A3",
  "90D3":"DBA9",
  "90D7":"DBAD",
  "90DB":"DBAE",
  "90DC":"DBAC",
  "90DD":"BAC2",
  "90E1":"BFA4",
  "90E2":"DBAB",
  "90E6":"DBAA",
  "90E7":"D4C7",
  "90E8":"B2BF",
  "90EB":"DBAF",
  "90ED":"B9F9",
  "90EF":"DBB0",
  "90F4":"B3BB",
  "90F8":"B5A6",
  "90FD":"B6BC",
  "90FE":"DBB1",
  "9102":"B6F5",
  "9104":"DBB2",
  "9119":"B1C9",
  "911E":"DBB4",
  "9122":"DBB3",
  "9123":"DBB5",
  "912F":"DBB7",
  "9131":"DBB6",
  "9139":"DBB8",
  "9143":"DBB9",
  "9146":"DBBA",
  "9149":"D3CF",
  "914A":"F4FA",
  "914B":"C7F5",
  "914C":"D7C3",
  "914D":"C5E4",
  "914E":"F4FC",
  "914F":"F4FD",
  "9150":"F4FB",
  "9152":"BEC6",
  "9157":"D0EF",
  "915A":"B7D3",
  "915D":"D4CD",
  "915E":"CCAA",
  "9161":"F5A2",
  "9162":"F5A1",
  "9163":"BAA8",
  "9164":"F4FE",
  "9165":"CBD6",
  "9169":"F5A4",
  "916A":"C0D2",
  "916C":"B3EA",
  "916E":"CDAA",
  "916F":"F5A5",
  "9170":"F5A3",
  "9171":"BDB4",
  "9172":"F5A8",
  "9174":"F5A9",
  "9175":"BDCD",
  "9176":"C3B8",
  "9177":"BFE1",
  "9178":"CBE1",
  "9179":"F5AA",
  "917D":"F5A6",
  "917E":"F5A7",
  "917F":"C4F0",
  "9185":"F5AC",
  "9187":"B4BC",
  "9189":"D7ED",
  "918B":"B4D7",
  "918C":"F5AB",
  "918D":"F5AE",
  "9190":"F5AD",
  "9191":"F5AF",
  "9192":"D0D1",
  "919A":"C3D1",
  "919B":"C8A9",
  "91A2":"F5B0",
  "91A3":"F5B1",
  "91AA":"F5B2",
  "91AD":"F5B3",
  "91AE":"F5B4",
  "91AF":"F5B5",
  "91B4":"F5B7",
  "91B5":"F5B6",
  "91BA":"F5B8",
  "91C7":"B2C9",
  "91C9":"D3D4",
  "91CA":"CACD",
  "91CC":"C0EF",
  "91CD":"D6D8",
  "91CE":"D2B0",
  "91CF":"C1BF",
  "91D1":"BDF0",
  "91DC":"B8AA",
  "9274":"BCF8",
  "928E":"F6C6",
  "92AE":"F6C7",
  "92C8":"F6C8",
  "933E":"F6C9",
  "936A":"F6CA",
  "938F":"F6CC",
  "93CA":"F6CB",
  "93D6":"F7E9",
  "943E":"F6CD",
  "946B":"F6CE",
  "9485":"EEC4",
  "9486":"EEC5",
  "9487":"EEC6",
  "9488":"D5EB",
  "9489":"B6A4",
  "948A":"EEC8",
  "948B":"EEC7",
  "948C":"EEC9",
  "948D":"EECA",
  "948E":"C7A5",
  "948F":"EECB",
  "9490":"EECC",
  "9492":"B7B0",
  "9493":"B5F6",
  "9494":"EECD",
  "9495":"EECF",
  "9497":"EECE",
  "9499":"B8C6",
  "949A":"EED0",
  "949B":"EED1",
  "949C":"EED2",
  "949D":"B6DB",
  "949E":"B3AE",
  "949F":"D6D3",
  "94A0":"C4C6",
  "94A1":"B1B5",
  "94A2":"B8D6",
  "94A3":"EED3",
  "94A4":"EED4",
  "94A5":"D4BF",
  "94A6":"C7D5",
  "94A7":"BEFB",
  "94A8":"CED9",
  "94A9":"B9B3",
  "94AA":"EED6",
  "94AB":"EED5",
  "94AC":"EED8",
  "94AD":"EED7",
  "94AE":"C5A5",
  "94AF":"EED9",
  "94B0":"EEDA",
  "94B1":"C7AE",
  "94B2":"EEDB",
  "94B3":"C7AF",
  "94B4":"EEDC",
  "94B5":"B2A7",
  "94B6":"EEDD",
  "94B7":"EEDE",
  "94B8":"EEDF",
  "94B9":"EEE0",
  "94BA":"EEE1",
  "94BB":"D7EA",
  "94BC":"EEE2",
  "94BD":"EEE3",
  "94BE":"BCD8",
  "94BF":"EEE4",
  "94C0":"D3CB",
  "94C1":"CCFA",
  "94C2":"B2AC",
  "94C3":"C1E5",
  "94C4":"EEE5",
  "94C5":"C7A6",
  "94C6":"C3AD",
  "94C8":"EEE6",
  "94C9":"EEE7",
  "94CA":"EEE8",
  "94CB":"EEE9",
  "94CC":"EEEA",
  "94CD":"EEEB",
  "94CE":"EEEC",
  "94D0":"EEED",
  "94D1":"EEEE",
  "94D2":"EEEF",
  "94D5":"EEF0",
  "94D6":"EEF1",
  "94D7":"EEF2",
  "94D8":"EEF4",
  "94D9":"EEF3",
  "94DB":"EEF5",
  "94DC":"CDAD",
  "94DD":"C2C1",
  "94DE":"EEF6",
  "94DF":"EEF7",
  "94E0":"EEF8",
  "94E1":"D5A1",
  "94E2":"EEF9",
  "94E3":"CFB3",
  "94E4":"EEFA",
  "94E5":"EEFB",
  "94E7":"EEFC",
  "94E8":"EEFD",
  "94E9":"EFA1",
  "94EA":"EEFE",
  "94EB":"EFA2",
  "94EC":"B8F5",
  "94ED":"C3FA",
  "94EE":"EFA3",
  "94EF":"EFA4",
  "94F0":"BDC2",
  "94F1":"D2BF",
  "94F2":"B2F9",
  "94F3":"EFA5",
  "94F4":"EFA6",
  "94F5":"EFA7",
  "94F6":"D2F8",
  "94F7":"EFA8",
  "94F8":"D6FD",
  "94F9":"EFA9",
  "94FA":"C6CC",
  "94FC":"EFAA",
  "94FD":"EFAB",
  "94FE":"C1B4",
  "94FF":"EFAC",
  "9500":"CFFA",
  "9501":"CBF8",
  "9502":"EFAE",
  "9503":"EFAD",
  "9504":"B3FA",
  "9505":"B9F8",
  "9506":"EFAF",
  "9507":"EFB0",
  "9508":"D0E2",
  "9509":"EFB1",
  "950A":"EFB2",
  "950B":"B7E6",
  "950C":"D0BF",
  "950D":"EFB3",
  "950E":"EFB4",
  "950F":"EFB5",
  "9510":"C8F1",
  "9511":"CCE0",
  "9512":"EFB6",
  "9513":"EFB7",
  "9514":"EFB8",
  "9515":"EFB9",
  "9516":"EFBA",
  "9517":"D5E0",
  "9518":"EFBB",
  "9519":"B4ED",
  "951A":"C3AA",
  "951B":"EFBC",
  "951D":"EFBD",
  "951E":"EFBE",
  "951F":"EFBF",
  "9521":"CEFD",
  "9522":"EFC0",
  "9523":"C2E0",
  "9524":"B4B8",
  "9525":"D7B6",
  "9526":"BDF5",
  "9528":"CFC7",
  "9529":"EFC3",
  "952A":"EFC1",
  "952B":"EFC2",
  "952C":"EFC4",
  "952D":"B6A7",
  "952E":"BCFC",
  "952F":"BEE2",
  "9530":"C3CC",
  "9531":"EFC5",
  "9532":"EFC6",
  "9534":"EFC7",
  "9535":"EFCF",
  "9536":"EFC8",
  "9537":"EFC9",
  "9538":"EFCA",
  "9539":"C7C2",
  "953A":"EFF1",
  "953B":"B6CD",
  "953C":"EFCB",
  "953E":"EFCC",
  "953F":"EFCD",
  "9540":"B6C6",
  "9541":"C3BE",
  "9542":"EFCE",
  "9544":"EFD0",
  "9545":"EFD1",
  "9546":"EFD2",
  "9547":"D5F2",
  "9549":"EFD3",
  "954A":"C4F7",
  "954C":"EFD4",
  "954D":"C4F8",
  "954E":"EFD5",
  "954F":"EFD6",
  "9550":"B8E4",
  "9551":"B0F7",
  "9552":"EFD7",
  "9553":"EFD8",
  "9554":"EFD9",
  "9556":"EFDA",
  "9557":"EFDB",
  "9558":"EFDC",
  "9559":"EFDD",
  "955B":"EFDE",
  "955C":"BEB5",
  "955D":"EFE1",
  "955E":"EFDF",
  "955F":"EFE0",
  "9561":"EFE2",
  "9562":"EFE3",
  "9563":"C1CD",
  "9564":"EFE4",
  "9565":"EFE5",
  "9566":"EFE6",
  "9567":"EFE7",
  "9568":"EFE8",
  "9569":"EFE9",
  "956A":"EFEA",
  "956B":"EFEB",
  "956C":"EFEC",
  "956D":"C0D8",
  "956F":"EFED",
  "9570":"C1AD",
  "9571":"EFEE",
  "9572":"EFEF",
  "9573":"EFF0",
  "9576":"CFE2",
  "957F":"B3A4",
  "95E8":"C3C5",
  "95E9":"E3C5",
  "95EA":"C9C1",
  "95EB":"E3C6",
  "95ED":"B1D5",
  "95EE":"CECA",
  "95EF":"B4B3",
  "95F0":"C8F2",
  "95F1":"E3C7",
  "95F2":"CFD0",
  "95F3":"E3C8",
  "95F4":"BCE4",
  "95F5":"E3C9",
  "95F6":"E3CA",
  "95F7":"C3C6",
  "95F8":"D5A2",
  "95F9":"C4D6",
  "95FA":"B9EB",
  "95FB":"CEC5",
  "95FC":"E3CB",
  "95FD":"C3F6",
  "95FE":"E3CC",
  "9600":"B7A7",
  "9601":"B8F3",
  "9602":"BAD2",
  "9603":"E3CD",
  "9604":"E3CE",
  "9605":"D4C4",
  "9606":"E3CF",
  "9608":"E3D0",
  "9609":"D1CB",
  "960A":"E3D1",
  "960B":"E3D2",
  "960C":"E3D3",
  "960D":"E3D4",
  "960E":"D1D6",
  "960F":"E3D5",
  "9610":"B2FB",
  "9611":"C0BB",
  "9612":"E3D6",
  "9614":"C0AB",
  "9615":"E3D7",
  "9616":"E3D8",
  "9617":"E3D9",
  "9619":"E3DA",
  "961A":"E3DB",
  "961C":"B8B7",
  "961D":"DAE2",
  "961F":"B6D3",
  "9621":"DAE4",
  "9622":"DAE3",
  "962A":"DAE6",
  "962E":"C8EE",
  "9631":"DAE5",
  "9632":"B7C0",
  "9633":"D1F4",
  "9634":"D2F5",
  "9635":"D5F3",
  "9636":"BDD7",
  "963B":"D7E8",
  "963C":"DAE8",
  "963D":"DAE7",
  "963F":"B0A2",
  "9640":"CDD3",
  "9642":"DAE9",
  "9644":"B8BD",
  "9645":"BCCA",
  "9646":"C2BD",
  "9647":"C2A4",
  "9648":"B3C2",
  "9649":"DAEA",
  "964B":"C2AA",
  "964C":"C4B0",
  "964D":"BDB5",
  "9650":"CFDE",
  "9654":"DAEB",
  "9655":"C9C2",
  "965B":"B1DD",
  "965F":"DAEC",
  "9661":"B6B8",
  "9662":"D4BA",
  "9664":"B3FD",
  "9667":"DAED",
  "9668":"D4C9",
  "9669":"CFD5",
  "966A":"C5E3",
  "966C":"DAEE",
  "9672":"DAEF",
  "9674":"DAF0",
  "9675":"C1EA",
  "9676":"CCD5",
  "9677":"CFDD",
  "9685":"D3E7",
  "9686":"C2A1",
  "9688":"DAF1",
  "968B":"CBE5",
  "968D":"DAF2",
  "968F":"CBE6",
  "9690":"D2FE",
  "9694":"B8F4",
  "9697":"DAF3",
  "9698":"B0AF",
  "9699":"CFB6",
  "969C":"D5CF",
  "96A7":"CBED",
  "96B0":"DAF4",
  "96B3":"E3C4",
  "96B6":"C1A5",
  "96B9":"F6BF",
  "96BC":"F6C0",
  "96BD":"F6C1",
  "96BE":"C4D1",
  "96C0":"C8B8",
  "96C1":"D1E3",
  "96C4":"D0DB",
  "96C5":"D1C5",
  "96C6":"BCAF",
  "96C7":"B9CD",
  "96C9":"EFF4",
  "96CC":"B4C6",
  "96CD":"D3BA",
  "96CE":"F6C2",
  "96CF":"B3FB",
  "96D2":"F6C3",
  "96D5":"B5F1",
  "96E0":"F6C5",
  "96E8":"D3EA",
  "96E9":"F6A7",
  "96EA":"D1A9",
  "96EF":"F6A9",
  "96F3":"F6A8",
  "96F6":"C1E3",
  "96F7":"C0D7",
  "96F9":"B1A2",
  "96FE":"CEED",
  "9700":"D0E8",
  "9701":"F6AB",
  "9704":"CFF6",
  "9706":"F6AA",
  "9707":"D5F0",
  "9708":"F6AC",
  "9709":"C3B9",
  "970D":"BBF4",
  "970E":"F6AE",
  "970F":"F6AD",
  "9713":"C4DE",
  "9716":"C1D8",
  "971C":"CBAA",
  "971E":"CFBC",
  "972A":"F6AF",
  "972D":"F6B0",
  "9730":"F6B1",
  "9732":"C2B6",
  "9738":"B0D4",
  "9739":"C5F9",
  "973E":"F6B2",
  "9752":"C7E0",
  "9753":"F6A6",
  "9756":"BEB8",
  "9759":"BEB2",
  "975B":"B5E5",
  "975E":"B7C7",
  "9760":"BFBF",
  "9761":"C3D2",
  "9762":"C3E6",
  "9765":"D8CC",
  "9769":"B8EF",
  "9773":"BDF9",
  "9774":"D1A5",
  "9776":"B0D0",
  "977C":"F7B0",
  "9785":"F7B1",
  "978B":"D0AC",
  "978D":"B0B0",
  "9791":"F7B2",
  "9792":"F7B3",
  "9794":"F7B4",
  "9798":"C7CA",
  "97A0":"BECF",
  "97A3":"F7B7",
  "97AB":"F7B6",
  "97AD":"B1DE",
  "97AF":"F7B5",
  "97B2":"F7B8",
  "97B4":"F7B9",
  "97E6":"CEA4",
  "97E7":"C8CD",
  "97E9":"BAAB",
  "97EA":"E8B8",
  "97EB":"E8B9",
  "97EC":"E8BA",
  "97ED":"BEC2",
  "97F3":"D2F4",
  "97F5":"D4CF",
  "97F6":"C9D8",
  "9875":"D2B3",
  "9876":"B6A5",
  "9877":"C7EA",
  "9878":"F1FC",
  "9879":"CFEE",
  "987A":"CBB3",
  "987B":"D0EB",
  "987C":"E7EF",
  "987D":"CDE7",
  "987E":"B9CB",
  "987F":"B6D9",
  "9880":"F1FD",
  "9881":"B0E4",
  "9882":"CBCC",
  "9883":"F1FE",
  "9884":"D4A4",
  "9885":"C2AD",
  "9886":"C1EC",
  "9887":"C6C4",
  "9888":"BEB1",
  "9889":"F2A1",
  "988A":"BCD5",
  "988C":"F2A2",
  "988D":"F2A3",
  "988F":"F2A4",
  "9890":"D2C3",
  "9891":"C6B5",
  "9893":"CDC7",
  "9894":"F2A5",
  "9896":"D3B1",
  "9897":"BFC5",
  "9898":"CCE2",
  "989A":"F2A6",
  "989B":"F2A7",
  "989C":"D1D5",
  "989D":"B6EE",
  "989E":"F2A8",
  "989F":"F2A9",
  "98A0":"B5DF",
  "98A1":"F2AA",
  "98A2":"F2AB",
  "98A4":"B2FC",
  "98A5":"F2AC",
  "98A6":"F2AD",
  "98A7":"C8A7",
  "98CE":"B7E7",
  "98D1":"ECA9",
  "98D2":"ECAA",
  "98D3":"ECAB",
  "98D5":"ECAC",
  "98D8":"C6AE",
  "98D9":"ECAD",
  "98DA":"ECAE",
  "98DE":"B7C9",
  "98DF":"CAB3",
  "98E7":"E2B8",
  "98E8":"F7CF",
  "990D":"F7D0",
  "9910":"B2CD",
  "992E":"F7D1",
  "9954":"F7D3",
  "9955":"F7D2",
  "9963":"E2BB",
  "9965":"BCA2",
  "9967":"E2BC",
  "9968":"E2BD",
  "9969":"E2BE",
  "996A":"E2BF",
  "996B":"E2C0",
  "996C":"E2C1",
  "996D":"B7B9",
  "996E":"D2FB",
  "996F":"BDA4",
  "9970":"CACE",
  "9971":"B1A5",
  "9972":"CBC7",
  "9974":"E2C2",
  "9975":"B6FC",
  "9976":"C8C4",
  "9977":"E2C3",
  "997A":"BDC8",
  "997C":"B1FD",
  "997D":"E2C4",
  "997F":"B6F6",
  "9980":"E2C5",
  "9981":"C4D9",
  "9984":"E2C6",
  "9985":"CFDA",
  "9986":"B9DD",
  "9987":"E2C7",
  "9988":"C0A1",
  "998A":"E2C8",
  "998B":"B2F6",
  "998D":"E2C9",
  "998F":"C1F3",
  "9990":"E2CA",
  "9991":"E2CB",
  "9992":"C2F8",
  "9993":"E2CC",
  "9994":"E2CD",
  "9995":"E2CE",
  "9996":"CAD7",
  "9997":"D8B8",
  "9998":"D9E5",
  "9999":"CFE3",
  "99A5":"F0A5",
  "99A8":"DCB0",
  "9A6C":"C2ED",
  "9A6D":"D4A6",
  "9A6E":"CDD4",
  "9A6F":"D1B1",
  "9A70":"B3DB",
  "9A71":"C7FD",
  "9A73":"B2B5",
  "9A74":"C2BF",
  "9A75":"E6E0",
  "9A76":"CABB",
  "9A77":"E6E1",
  "9A78":"E6E2",
  "9A79":"BED4",
  "9A7A":"E6E3",
  "9A7B":"D7A4",
  "9A7C":"CDD5",
  "9A7D":"E6E5",
  "9A7E":"BCDD",
  "9A7F":"E6E4",
  "9A80":"E6E6",
  "9A81":"E6E7",
  "9A82":"C2EE",
  "9A84":"BDBE",
  "9A85":"E6E8",
  "9A86":"C2E6",
  "9A87":"BAA7",
  "9A88":"E6E9",
  "9A8A":"E6EA",
  "9A8B":"B3D2",
  "9A8C":"D1E9",
  "9A8F":"BFA5",
  "9A90":"E6EB",
  "9A91":"C6EF",
  "9A92":"E6EC",
  "9A93":"E6ED",
  "9A96":"E6EE",
  "9A97":"C6AD",
  "9A98":"E6EF",
  "9A9A":"C9A7",
  "9A9B":"E6F0",
  "9A9C":"E6F1",
  "9A9D":"E6F2",
  "9A9E":"E5B9",
  "9A9F":"E6F3",
  "9AA0":"E6F4",
  "9AA1":"C2E2",
  "9AA2":"E6F5",
  "9AA3":"E6F6",
  "9AA4":"D6E8",
  "9AA5":"E6F7",
  "9AA7":"E6F8",
  "9AA8":"B9C7",
  "9AB0":"F7BB",
  "9AB1":"F7BA",
  "9AB6":"F7BE",
  "9AB7":"F7BC",
  "9AB8":"BAA1",
  "9ABA":"F7BF",
  "9ABC":"F7C0",
  "9AC0":"F7C2",
  "9AC1":"F7C1",
  "9AC2":"F7C4",
  "9AC5":"F7C3",
  "9ACB":"F7C5",
  "9ACC":"F7C6",
  "9AD1":"F7C7",
  "9AD3":"CBE8",
  "9AD8":"B8DF",
  "9ADF":"F7D4",
  "9AE1":"F7D5",
  "9AE6":"F7D6",
  "9AEB":"F7D8",
  "9AED":"F7DA",
  "9AEF":"F7D7",
  "9AF9":"F7DB",
  "9AFB":"F7D9",
  "9B03":"D7D7",
  "9B08":"F7DC",
  "9B0F":"F7DD",
  "9B13":"F7DE",
  "9B1F":"F7DF",
  "9B23":"F7E0",
  "9B2F":"DBCB",
  "9B32":"D8AA",
  "9B3B":"E5F7",
  "9B3C":"B9ED",
  "9B41":"BFFD",
  "9B42":"BBEA",
  "9B43":"F7C9",
  "9B44":"C6C7",
  "9B45":"F7C8",
  "9B47":"F7CA",
  "9B48":"F7CC",
  "9B49":"F7CB",
  "9B4D":"F7CD",
  "9B4F":"CEBA",
  "9B51":"F7CE",
  "9B54":"C4A7",
  "9C7C":"D3E3",
  "9C7F":"F6CF",
  "9C81":"C2B3",
  "9C82":"F6D0",
  "9C85":"F6D1",
  "9C86":"F6D2",
  "9C87":"F6D3",
  "9C88":"F6D4",
  "9C8B":"F6D6",
  "9C8D":"B1AB",
  "9C8E":"F6D7",
  "9C90":"F6D8",
  "9C91":"F6D9",
  "9C92":"F6DA",
  "9C94":"F6DB",
  "9C95":"F6DC",
  "9C9A":"F6DD",
  "9C9B":"F6DE",
  "9C9C":"CFCA",
  "9C9E":"F6DF",
  "9C9F":"F6E0",
  "9CA0":"F6E1",
  "9CA1":"F6E2",
  "9CA2":"F6E3",
  "9CA3":"F6E4",
  "9CA4":"C0F0",
  "9CA5":"F6E5",
  "9CA6":"F6E6",
  "9CA7":"F6E7",
  "9CA8":"F6E8",
  "9CA9":"F6E9",
  "9CAB":"F6EA",
  "9CAD":"F6EB",
  "9CAE":"F6EC",
  "9CB0":"F6ED",
  "9CB1":"F6EE",
  "9CB2":"F6EF",
  "9CB3":"F6F0",
  "9CB4":"F6F1",
  "9CB5":"F6F2",
  "9CB6":"F6F3",
  "9CB7":"F6F4",
  "9CB8":"BEA8",
  "9CBA":"F6F5",
  "9CBB":"F6F6",
  "9CBC":"F6F7",
  "9CBD":"F6F8",
  "9CC3":"C8FA",
  "9CC4":"F6F9",
  "9CC5":"F6FA",
  "9CC6":"F6FB",
  "9CC7":"F6FC",
  "9CCA":"F6FD",
  "9CCB":"F6FE",
  "9CCC":"F7A1",
  "9CCD":"F7A2",
  "9CCE":"F7A3",
  "9CCF":"F7A4",
  "9CD0":"F7A5",
  "9CD3":"F7A6",
  "9CD4":"F7A7",
  "9CD5":"F7A8",
  "9CD6":"B1EE",
  "9CD7":"F7A9",
  "9CD8":"F7AA",
  "9CD9":"F7AB",
  "9CDC":"F7AC",
  "9CDD":"F7AD",
  "9CDE":"C1DB",
  "9CDF":"F7AE",
  "9CE2":"F7AF",
  "9E1F":"C4F1",
  "9E20":"F0AF",
  "9E21":"BCA6",
  "9E22":"F0B0",
  "9E23":"C3F9",
  "9E25":"C5B8",
  "9E26":"D1BB",
  "9E28":"F0B1",
  "9E29":"F0B2",
  "9E2A":"F0B3",
  "9E2B":"F0B4",
  "9E2C":"F0B5",
  "9E2D":"D1BC",
  "9E2F":"D1EC",
  "9E31":"F0B7",
  "9E32":"F0B6",
  "9E33":"D4A7",
  "9E35":"CDD2",
  "9E36":"F0B8",
  "9E37":"F0BA",
  "9E38":"F0B9",
  "9E39":"F0BB",
  "9E3A":"F0BC",
  "9E3D":"B8EB",
  "9E3E":"F0BD",
  "9E3F":"BAE8",
  "9E41":"F0BE",
  "9E42":"F0BF",
  "9E43":"BEE9",
  "9E44":"F0C0",
  "9E45":"B6EC",
  "9E46":"F0C1",
  "9E47":"F0C2",
  "9E48":"F0C3",
  "9E49":"F0C4",
  "9E4A":"C8B5",
  "9E4B":"F0C5",
  "9E4C":"F0C6",
  "9E4E":"F0C7",
  "9E4F":"C5F4",
  "9E51":"F0C8",
  "9E55":"F0C9",
  "9E57":"F0CA",
  "9E58":"F7BD",
  "9E5A":"F0CB",
  "9E5B":"F0CC",
  "9E5C":"F0CD",
  "9E5E":"F0CE",
  "9E63":"F0CF",
  "9E64":"BAD7",
  "9E66":"F0D0",
  "9E67":"F0D1",
  "9E68":"F0D2",
  "9E69":"F0D3",
  "9E6A":"F0D4",
  "9E6B":"F0D5",
  "9E6C":"F0D6",
  "9E6D":"F0D8",
  "9E70":"D3A5",
  "9E71":"F0D7",
  "9E73":"F0D9",
  "9E7E":"F5BA",
  "9E7F":"C2B9",
  "9E82":"F7E4",
  "9E87":"F7E5",
  "9E88":"F7E6",
  "9E8B":"F7E7",
  "9E92":"F7E8",
  "9E93":"C2B4",
  "9E9D":"F7EA",
  "9E9F":"F7EB",
  "9EA6":"C2F3",
  "9EB4":"F4F0",
  "9EB8":"F4EF",
  "9EBB":"C2E9",
  "9EBD":"F7E1",
  "9EBE":"F7E2",
  "9EC4":"BBC6",
  "9EC9":"D9E4",
  "9ECD":"CAF2",
  "9ECE":"C0E8",
  "9ECF":"F0A4",
  "9ED1":"BADA",
  "9ED4":"C7AD",
  "9ED8":"C4AC",
  "9EDB":"F7EC",
  "9EDC":"F7ED",
  "9EDD":"F7EE",
  "9EDF":"F7F0",
  "9EE0":"F7EF",
  "9EE2":"F7F1",
  "9EE5":"F7F4",
  "9EE7":"F7F3",
  "9EE9":"F7F2",
  "9EEA":"F7F5",
  "9EEF":"F7F6",
  "9EF9":"EDE9",
  "9EFB":"EDEA",
  "9EFC":"EDEB",
  "9EFE":"F6BC",
  "9F0B":"F6BD",
  "9F0D":"F6BE",
  "9F0E":"B6A6",
  "9F10":"D8BE",
  "9F13":"B9C4",
  "9F17":"D8BB",
  "9F19":"DCB1",
  "9F20":"CAF3",
  "9F22":"F7F7",
  "9F2C":"F7F8",
  "9F2F":"F7F9",
  "9F37":"F7FB",
  "9F39":"F7FA",
  "9F3B":"B1C7",
  "9F3D":"F7FC",
  "9F3E":"F7FD",
  "9F44":"F7FE",
  "9F50":"C6EB",
  "9F51":"ECB4",
  "9F7F":"B3DD",
  "9F80":"F6B3",
  "9F83":"F6B4",
  "9F84":"C1E4",
  "9F85":"F6B5",
  "9F86":"F6B6",
  "9F87":"F6B7",
  "9F88":"F6B8",
  "9F89":"F6B9",
  "9F8A":"F6BA",
  "9F8B":"C8A3",
  "9F8C":"F6BB",
  "9F99":"C1FA",
  "9F9A":"B9A8",
  "9F9B":"EDE8",
  "9F9F":"B9EA",
  "9FA0":"D9DF",
  "FF01":"A3A1",
  "FF02":"A3A2",
  "FF03":"A3A3",
  "FF04":"A1E7",
  "FF05":"A3A5",
  "FF06":"A3A6",
  "FF07":"A3A7",
  "FF08":"A3A8",
  "FF09":"A3A9",
  "FF0A":"A3AA",
  "FF0B":"A3AB",
  "FF0C":"A3AC",
  "FF0D":"A3AD",
  "FF0E":"A3AE",
  "FF0F":"A3AF",
  "FF10":"A3B0",
  "FF11":"A3B1",
  "FF12":"A3B2",
  "FF13":"A3B3",
  "FF14":"A3B4",
  "FF15":"A3B5",
  "FF16":"A3B6",
  "FF17":"A3B7",
  "FF18":"A3B8",
  "FF19":"A3B9",
  "FF1A":"A3BA",
  "FF1B":"A3BB",
  "FF1C":"A3BC",
  "FF1D":"A3BD",
  "FF1E":"A3BE",
  "FF1F":"A3BF",
  "FF20":"A3C0",
  "FF21":"A3C1",
  "FF22":"A3C2",
  "FF23":"A3C3",
  "FF24":"A3C4",
  "FF25":"A3C5",
  "FF26":"A3C6",
  "FF27":"A3C7",
  "FF28":"A3C8",
  "FF29":"A3C9",
  "FF2A":"A3CA",
  "FF2B":"A3CB",
  "FF2C":"A3CC",
  "FF2D":"A3CD",
  "FF2E":"A3CE",
  "FF2F":"A3CF",
  "FF30":"A3D0",
  "FF31":"A3D1",
  "FF32":"A3D2",
  "FF33":"A3D3",
  "FF34":"A3D4",
  "FF35":"A3D5",
  "FF36":"A3D6",
  "FF37":"A3D7",
  "FF38":"A3D8",
  "FF39":"A3D9",
  "FF3A":"A3DA",
  "FF3B":"A3DB",
  "FF3C":"A3DC",
  "FF3D":"A3DD",
  "FF3E":"A3DE",
  "FF3F":"A3DF",
  "FF40":"A3E0",
  "FF41":"A3E1",
  "FF42":"A3E2",
  "FF43":"A3E3",
  "FF44":"A3E4",
  "FF45":"A3E5",
  "FF46":"A3E6",
  "FF47":"A3E7",
  "FF48":"A3E8",
  "FF49":"A3E9",
  "FF4A":"A3EA",
  "FF4B":"A3EB",
  "FF4C":"A3EC",
  "FF4D":"A3ED",
  "FF4E":"A3EE",
  "FF4F":"A3EF",
  "FF50":"A3F0",
  "FF51":"A3F1",
  "FF52":"A3F2",
  "FF53":"A3F3",
  "FF54":"A3F4",
  "FF55":"A3F5",
  "FF56":"A3F6",
  "FF57":"A3F7",
  "FF58":"A3F8",
  "FF59":"A3F9",
  "FF5A":"A3FA",
  "FF5B":"A3FB",
  "FF5C":"A3FC",
  "FF5D":"A3FD",
  "FF5E":"A1AB",
  "FFE0":"A1E9",
  "FFE1":"A1EA",
  "FFE3":"A3FE",
  "FFE5":"A3A4"
};
    var encodeToGb2312 = function(str){
        var strOut="";
        for(var i = 0; i < str.length; i++){
        var c = str.charAt(i); 
        var code = str.charCodeAt(i);
        var gcode = json[code.toString(16).toUpperCase()];
        if(gcode && gcode.length % 2 !== 0) gcode = "0" + gcode;
        if(c==" ") {
          strOut += "20";
        }else if(code < 19968){
          var b = str.charCodeAt(i).toString(16);
          if(b && b.length % 2 !== 0) b = "0" + b;
          strOut += b;
        } else if(gcode){
          strOut += gcode;
        } else{
          throw Error("not match");
        }
        }
        return strOut;
    };

    var utf8ToGb2312Array =function(str){

        var output_data = "";
        output_data = encodeToGb2312(str);
        var output_data1 = "";
        for(var i in output_data)
        {
        if(i > 0 && i%2 == 1)
        output_data1 = output_data1 + output_data.charAt(i) + "%";
        else
        output_data1 += output_data.charAt(i);
        }
        if(output_data1.charAt(output_data1.length-1) == '%')
        output_data = output_data1.substring(0,output_data1.length-1);
        else
        output_data = output_data1;
        return '0x'+output_data.replace(/\%/g,',0x');
    };


    //QF合成
    Blockly.Arduino.QH_QF_hc = function() {
        var number = Math.ceil(Math.random() * 100000);  
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('PIN33');
        var dropdown_pin4 = this.getFieldValue('PIN44');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var text = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        text = text.replace(/\"/g,'')

        //编码解析
        text = utf8ToGb2312Array(text);
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['var_declare_'+number] = 'const char str_'+number+'[] = {'+text+'};';//定义数组


        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'QFYY.begin(Serial);\nQFYY.HC("'+dropdown_pin3+'[h0][v'+num+'][s'+num2+'][t'+num3+']");\nQFYY.HC(str_'+number+',sizeof(str_'+number+'),'+dropdown_pin4+');\n';

        }
        else{

        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.definitions_['var_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);\n';
        var code = 'QFYY.begin(P'+dropdown_pin+');\nQFYY.HC("'+dropdown_pin3+'[h0][v'+num+'][s'+num2+'][t'+num3+']");\nQFYY.HC(str_'+number+',sizeof(str_'+number+'),'+dropdown_pin4+');\n';
        }
        return code;
    };
    //QF合成变量英文
    Blockly.Arduino.QH_QF_hc_en = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('PIN33');
        var dropdown_pin4 = this.getFieldValue('PIN44');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) ||'0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'QFYY.begin(Serial);\nQFYY.HC("'+dropdown_pin3+'[h0][v'+num+'][s'+num2+'][t'+num3+']");\nQFYY.HC('+text+','+dropdown_pin4+');\n';

        }
        else{

        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.definitions_['var_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);\n';
        var code = 'QFYY.begin(P'+dropdown_pin+');\nQFYY.HC("'+dropdown_pin3+'[h0][v'+num+'][s'+num2+'][t'+num3+']");\nQFYY.HC('+text+','+dropdown_pin4+');\n';
        }
        return code;
    };
    //QF提示音
    Blockly.Arduino.QH_QF_sound = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin');
        var num = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Num = String(parseInt(dropdown_pin3)*100+parseInt(num));
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'QFYY.begin(Serial);\nQFYY.HC("[x1]sound'+Num+'",0);\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.definitions_['var_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);\n';
        var code = 'QFYY.begin(P'+dropdown_pin+');\nQFYY.HC("[x1]sound'+Num+'",0);\n';
        }
        return code;
    };
    //QF停止合成
    Blockly.Arduino.QH_QF_stophc = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        if(dropdown_pin == 5){
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'QFYY.begin(Serial);\nQFYY.TZHC();\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';
        Blockly.Arduino.definitions_['var_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);\n';
        var code = 'QFYY.begin(P'+dropdown_pin+');\nQFYY.TZHC();\n';
        }
        return code;
    };
    //QF启动识别
    Blockly.Arduino.QH_QF_startstopsb = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin4 = this.getFieldValue('PIN33');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';

        //通用
        Blockly.Arduino.definitions_['define_qdpxf'] = '#include <QDPQF.h>';
        Blockly.Arduino.definitions_['var_qdprobot_qdpxfhs'] = 'QDPQF QFYY;\n';

        if(dropdown_pin==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'QFYY.begin(Serial);\nQFYY.QDSB('+dropdown_pin4+');\n'; 
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);\n';
        var code = 'QFYY.begin(P'+dropdown_pin+');\nQFYY.QDSB('+dropdown_pin4+');\n'; 
        }
        return code;
    };
     //QF识别结果
    Blockly.Arduino.QH_QF_sbjg = function() {
        var number = Math.ceil(Math.random() * 100000);  
        var str1 = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC) ||'String(\"\")';
        str1 = str1.replace(/\"/g,'');
        str1 = utf8ToGb2312Array(str1);
        Blockly.Arduino.definitions_['var_declare_'+number] = 'char Corpus_'+number+'[] = {'+str1+',0X00};';//定义数组

        var code = 'QFYY.DBJG(Corpus_'+number+')';

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
     //QF识别结果2
    Blockly.Arduino.QH_QF_sbjg2 = function() {
        var number = Math.ceil(Math.random() * 100000);  
        var dropdown_pin3 = this.getFieldValue('pinn2');
        dropdown_pin3 = dropdown_pin3.replace(/\"/g,'');
        dropdown_pin3 = utf8ToGb2312Array(dropdown_pin3);
        Blockly.Arduino.definitions_['var_declare_'+number] = 'char Corpus_'+number+'[] = {'+dropdown_pin3+',0X00};';//定义数组  
        var code = 'QFYY.DBJG(Corpus_'+number+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //红外遥控器

    Blockly.Arduino.QH_ir_re2 = function() {
        var dropdown_pin = this.getFieldValue('PIN1');
        var dropdown_pin1 = this.getFieldValue('PIN');
        var type = this.getFieldValue('TYPE');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_ir_recv'] = '#include "IRremote.h"\n';
        Blockly.Arduino.definitions_['var_declare_ir_recv0'+dropdown_pin] = 'IRrecv irrecv_'+dropdown_pin+'(QDPport['+dropdown_pin+'][1]);\ndecode_results results_'+dropdown_pin+';\n';
        Blockly.Arduino.definitions_['var_ir_recv1'+dropdown_pin] = 'bool irkeypressed_'+dropdown_pin+'(uint8_t key ,bool type) {\n'
        +'static uint8_t resultkey = 0;\n'
        +'const uint8_t keyval[] = {0xFF, 0x5D, 0x9D, 0x1D, 0xDD, 0xFD, 0x3D, 0x1F, 0x57, 0x6F, 0x97, 0x67, 0x4F, 0xCF, 0xE7, 0x85, 0xEF, 0xC7, 0xA5, 0xBD, 0xB5, 0xAD}; //对应编码值\n'
        +'static uint8_t keyrecv = 0;\n'
        +'static unsigned long irDelayTime = 0;\n'
        +'if (irrecv_'+dropdown_pin+'.decode(&results_'+dropdown_pin+')) {\n'
        +'  uint8_t ir_item = results_'+dropdown_pin+'.value & 0xFF;\n'
        +'  uint8_t i ;\n'
        +'  for ( i = 0; i < 22; i++) {\n'
        +'    if (ir_item == keyval[i]) {\n'
        +'      break;\n'
        +'    }\n'
        +'  }\n'
        +'  if (i > 0 && i < 22)\n'
        +'    keyrecv = i;\n'
        +'  irrecv_'+dropdown_pin+'.resume();\n'
        +'  irDelayTime = millis();\n'
        +'} else {\n'
        +'  if(type){\n'
        +'    if (millis() - irDelayTime > 200) {\n'
        +'       keyrecv = 0;\n'
        +'      }\n'
        +'  }\n'
        +'}\n'
        +'if (key == keyrecv) {\n'
        +'  if(!type)\n'
        +   'keyrecv = 0;\n'
        +'  return true;\n'
        +'}\n'
        +'return false;\n'
        +'}\n'
        Blockly.Arduino.setups_['setup_ir_recv_'+dropdown_pin] = 'irrecv_'+dropdown_pin+'.enableIRIn();';

        var code = 'irkeypressed_'+dropdown_pin+'('+dropdown_pin1+','+type+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //红外发送
    Blockly.Arduino.QH_ir_send_nec = function() {
        Blockly.Arduino.definitions_['define_ir_recv'] = '#include "IRremote.h"';
        Blockly.Arduino.definitions_['var_declare_ir_send'] = 'IRsend irsend;';
        var data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) || '0';
        data = data.replace(/\"/g,'')
        var bits = Blockly.Arduino.valueToCode(this, 'bits',Blockly.Arduino.ORDER_ATOMIC) || '0';
        var type = this.getFieldValue('TYPE');
        var code ='irsend.send'+type+'('+data+','+bits+');';
        return code;
    };
    //红外发送数组
    Blockly.Arduino.QH_ir_send_raw = function () {
        var dropdown_pin = this.getFieldValue('PIN');
        Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
        Blockly.Arduino.definitions_['var_declare_ir_send'] = 'IRsend irsend;\n';
        var length = Blockly.Arduino.valueToCode(this, 'length', Blockly.Arduino.ORDER_ATOMIC) || '0';
        var freq = Blockly.Arduino.valueToCode(this, 'freq', Blockly.Arduino.ORDER_ATOMIC) || '0';

        var text = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        text = text.replace(/\"/g,'')

        Blockly.Arduino.definitions_['QDPir_send_raw'+dropdown_pin]='uint16_t buf_raw'+dropdown_pin+'[' + length + ']={' + text + '};\nint vpin_value'+dropdown_pin+';\n';
        var code = 'irsend.sendRaw(buf_raw'+dropdown_pin+',' + length + ',' + freq + ');\n';
        return code;
    };
    //蓝牙接收数据
    Blockly.Arduino.QH_BT_START = function() {
        Blockly.Arduino.definitions_['define_qdpBT'] = '#include <AppBtRec.h>';
        Blockly.Arduino.definitions_['define_qdpBTD'] = 'AppBtRec AppBtRec;\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'AppBtRec.PortReceive();\n';
        return code;
    };
    //蓝牙按键
    Blockly.Arduino.QH_BT_button = function() {
        var num = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var code = 'AppBtRec.IsObject('+num+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //蓝牙变量
    Blockly.Arduino.QH_BT_variable = function() {
        var dropdown_pin1 = this.getFieldValue('pin');
        var code = 'AppBtRec.GetVal('+dropdown_pin1+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //蓝牙发送变量
    Blockly.Arduino.QH_BT_print = function() {
        var num1 = Blockly.Arduino.valueToCode(this, 'N1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'N2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'N3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'N4',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num5 = Blockly.Arduino.valueToCode(this, 'N5',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var code = "Serial.print(String(" + num1 + ")+','+String(" + num2 + ")+','+String(" + num3+ ")+','+String(" + num4 +")+','+String(" + num5 + "));";
        return code;
    };
    //更改串口定义
    Blockly.Arduino.QH_serial_change = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        var code = 'P'+dropdown_pin+'.listen();\n';
        return code;
    };
    //串口接收的数据等于

    Blockly.Arduino.QH_serial_jieshouzhi = function() {
        var dropdown_pin = this.getFieldValue('pin1');
        var num = Blockly.Arduino.valueToCode(this, 'text',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';

        if(dropdown_pin==5)
        {

        Blockly.Arduino.definitions_['J1_return_SoftwareSerial'+dropdown_pin] = 'bool portReceived_Serial(String inputStr) {\n'
        +'static String recStr = "";\n'
        +'if (Serial.available() > 0) {\n'
        +'  recStr = Serial.readString();\n'
        +'}\n'
        +'if (String(recStr).equals(String(inputStr))) {\n'
        +'  recStr = "";\n'
        +'  return true;\n'
        +'}\n'
        +'return false;\n'
        +'}\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'portReceived_Serial('+num+')';

        }
        else
        {
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['return_SoftwareSerial1'+dropdown_pin] = 'bool portReceived_P'+dropdown_pin+'(String inputStr) {\n'
        +'static String recStr = "";\n'
        +'P'+dropdown_pin+'.listen();\n'
        +'if (P'+dropdown_pin+'.available() > 0) {\n'
        +'  recStr = P'+dropdown_pin+'.readString();\n'
        +'}\n'
        +'if (String(recStr).equals(String(inputStr))) {\n'
        +'  recStr = "";\n'
        +'  return true;\n'
        +'}\n'
        +'return false;\n'
        +'}\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        var code = 'portReceived_P'+dropdown_pin+'('+num+')';
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //串口发送
    Blockly.Arduino.QH_serial_fasong = function() {
        var dropdown_pin = this.getFieldValue('pin1');
        var OutputModel = this.getFieldValue('OutputModel');
        var num = Blockly.Arduino.valueToCode(this, 'text',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.'+OutputModel+'('+num+');\n'; 
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        var code = 'P'+dropdown_pin+'.'+OutputModel+'('+num+');\n'; 
        }
        return code;
    };
    //串口接收
    Blockly.Arduino.QH_serial_jieshou = function() {
        var dropdown_pin = this.getFieldValue('pin1');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.readString()'; 
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        var code = 'P'+dropdown_pin+'.readString()'; 
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //串口有数据可读
    Blockly.Arduino.QH_serial_suju = function() {
        var dropdown_pin = this.getFieldValue('pin1');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.available() > 0\n';

        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        var code = 'P'+dropdown_pin+'.available() > 0';
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //MP3播放
    Blockly.Arduino.QH_MP3_bofangx = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot2'] = '#include <QDPRobotQDPPlayerMini.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(P'+dropdown_pin+')) {\n   while(true);\n }';

        }

        Blockly.Arduino.setups_['setup_qdprobot_serial4'] = 'myQDPPlayer.setTimeOut(600);';
        var code ='myQDPPlayer.volume('+num+');\n myQDPPlayer.play('+num2+');\n delay(50);';
        return code;
    };
    //MP3音量
    Blockly.Arduino.QH_MP3_yingliang = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot2'] = '#include <QDPRobotQDPPlayerMini.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }'; 
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(P'+dropdown_pin+')) {\n   while(true);\n }'; 
        }
        var code ='myQDPPlayer.volume('+num+');\n ';
        return code;
    };
    //MP3重复播放
    Blockly.Arduino.QH_MP3_loopplay = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot2'] = '#include <QDPRobotQDPPlayerMini.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';

        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(P'+dropdown_pin+')) {\n   while(true);\n }';
        }
        Blockly.Arduino.setups_['setup_qdprobot_serial4'] = 'myQDPPlayer.setTimeOut(50);';
        var code ='myQDPPlayer.volume('+num+');\n myQDPPlayer.loop('+num2+');\n delay(50);';
        return code;
    };
    //MP3播放暂停

    Blockly.Arduino.QH_MP3_startpause = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('PIN22');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot2'] = '#include <QDPRobotQDPPlayerMini.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }'; 
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(P'+dropdown_pin+')) {\n   while(true);\n }'; 
        }
        var code ='myQDPPlayer.order('+dropdown_pin3+');\n delay(50);';
        return code;
    };
    //MP3上一首
    Blockly.Arduino.QH_MP3_previous_next = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('PIN22');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot2'] = '#include <QDPRobotQDPPlayerMini.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }'; 

        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(P'+dropdown_pin+')) {\n   while(true);\n }'; 
        }
        if(dropdown_pin3 == '0'){
        dropdown_pin3 = 'previous';
        }else{
        dropdown_pin3 = 'next';
        }
        var code ='myQDPPlayer.'+dropdown_pin3+'();\n delay(50);';
        return code;
    };
    //MP3播放音效
    Blockly.Arduino.QH_MP3_play = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin2');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot2'] = '#include <QDPRobotQDPPlayerMini.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }'; 
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(P'+dropdown_pin+')) {\n   while(true);\n }'; 
        }
        Blockly.Arduino.setups_['setup_qdprobot_serial4'] = 'myQDPPlayer.setTimeOut(600);';
        var code ='myQDPPlayer.volume('+num+');\n myQDPPlayer.play('+dropdown_pin3+');\n delay(600);';
        return code;
    };
    //定义PlayerMini目录
    Blockly.Arduino.QH_ESPuno_define_mp3_directory = function() {
        var data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;;
        data = data.replace(/\.mp3/g,"\",\"");
        data = "\"" + data +  "\"";
        data = data.replace(",\"\"","");
        data = data.replace(/ /g,"");
        Blockly.Arduino.definitions_['var_define_mp3_directory'] ='String mp3_file_directory[]={'+data+'};';
        var code='';
        return code;
    };
    //PlayerMini指定播放
    Blockly.Arduino.QH_ESPuno_mp3_designated_play = function() {
        var mode = this.getFieldValue('mode');
        var num= Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
        var NAME= Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
        var dropdown_pin = this.getFieldValue('pinn');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_qdprobot2'] = '#include <QDPRobotQDPPlayerMini.h>';
        if(dropdown_pin==5){
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(Serial)) {\n   while(true);\n }';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  P'+dropdown_pin+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.definitions_['G1_var_declare_qdprobot_serial2'] = 'QDPRobotQDPPlayerMini myQDPPlayer;';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = 'P'+dropdown_pin+'.begin(9600);';
        Blockly.Arduino.setups_['setup_qdprobot_serial3'] = 'if (!myQDPPlayer.begin(P'+dropdown_pin+')) {\n   while(true);\n }';
        }
        Blockly.Arduino.setups_['setup_qdprobot_serial4'] = 'myQDPPlayer.setTimeOut(600);';
        var code='  for (int i = (1); i <= (sizeof(mp3_file_directory)/sizeof(mp3_file_directory[0])); i = i + (1)) {\n    if (String('+NAME+').indexOf(String(mp3_file_directory[(int)(i - 1)])) != -1) {\n      myQDPPlayer.volume('+num+');\n      '+mode+'(i);\n      delay(1);\n      break;\n    }\n  }\n';
        return code;
    };
    //数码管显示 
    Blockly.Arduino.QH_display = function() {
        var dropdown_pin = this.getFieldValue('pinn');
        var dropdown_pin2 = numberck(this.getFieldValue('pinn'));
        var dropdown_pin3 = this.getFieldValue('pinn2');
        var num = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC) || '0';
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_displayd'] = '#include <QDP7SegmentDisplay.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_display'+dropdown_pin] = 'QDP7SegmentDisplay  QDP7SegmentDisplay'+dropdown_pin2+'(QDPport['+dropdown_pin+'][1],QDPport['+dropdown_pin+'][0]);';
        Blockly.Arduino.setups_['setup_qdprobot_display1'+dropdown_pin] = 'QDP7SegmentDisplay'+dropdown_pin2+'.init();\nQDP7SegmentDisplay'+dropdown_pin2+'.set(2);\n';
        if(dropdown_pin3=="auto"){
        var code = 'QDP7SegmentDisplay'+dropdown_pin2+'.display('+num+');\n';
        }
        else {
        var code = 'QDP7SegmentDisplay'+dropdown_pin2+'.display('+num+','+dropdown_pin3+');\n';
        }

        return code;
    };
    //关闭数码管
    Blockly.Arduino.QH_displayoff = function() {
        var dropdown_pin2 = numberck(this.getFieldValue('pinn'));
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_displayd'] = '#include <QDP7SegmentDisplay.h>';
        var code = 'QDP7SegmentDisplay'+dropdown_pin2+'.clearDisplay();\n';
        return code;
    };
    //显示-OLED-初始化
    Blockly.Arduino.oled_init = function() {
        var OLED_TYPE = this.getFieldValue('OLED_TYPE');
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var ROTATION = this.getFieldValue('ROTATION');
        var SDA = this.getFieldValue('SDA');
        var SCL = this.getFieldValue('SCL');
        var ADDRESS = Blockly.Arduino.valueToCode(this, 'ADDRESS') || '0x3C';
        ADDRESS = ADDRESS.replace(/\"/g, ""); 
        //var board_type=JSFuncs.getPlatform();
        //var board_type ="ESP8266";
        Blockly.Arduino.definitions_['include_U8g2lib'] = '#include <U8g2lib.h>';
        // if(board_type.match(RegExp(/AVR/)))
        // {
        if(SDA=="SDA"&&SCL=="SCL")
          Blockly.Arduino.definitions_['var_declare_U8G2'+NAME] ='U8G2_'+OLED_TYPE+'_1_HW_I2C '+NAME+'('+ROTATION+', U8X8_PIN_NONE);';
        else
          Blockly.Arduino.definitions_['var_declare_U8G2'+NAME] ='U8G2_'+OLED_TYPE+'_1_SW_I2C '+NAME+'('+ROTATION+',  '+SCL+', '+SDA+', U8X8_PIN_NONE);';
        // }
        // else
        // {
        // if(SDA=="SDA"&&SCL=="SCL")
        //   Blockly.Arduino.definitions_['var_declare_U8G2'+NAME] ='U8G2_'+OLED_TYPE+'_F_HW_I2C '+NAME+'('+ROTATION+', U8X8_PIN_NONE);';
        // else
        //   Blockly.Arduino.definitions_['var_declare_U8G2'+NAME] ='U8G2_'+OLED_TYPE+'_F_SW_I2C '+NAME+'('+ROTATION+',  '+SCL+', '+SDA+', U8X8_PIN_NONE);';
        // }  
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.setups_["setup_u8g2"+NAME] =NAME+'.setI2CAddress('+ADDRESS+'*2);\n'
        +'  '+NAME+'.begin();';
        var code = '';
        return code;
    };
    //显示-OLED-刷新页面
    Blockly.Arduino.oled_page = function() {
      var NAME = this.getFieldValue('NAME') || 'u8g2';
      var branch = Blockly.Arduino.statementToCode(this, 'DO')||'\n';
      //branch = branch.replace(/(^\s*)|(\s*$)/g, ""); 
      if (branch) {
        var code = NAME+".firstPage();"
        +"\ndo"
        +"\n{"
        +"\n"+branch 
        +  "}while("+NAME+".nextPage());\n";
        return code;
      }
    };
    //显示-OLED-显示图像
    Blockly.Arduino.oled_showBitmap = function() {
      var NAME = this.getFieldValue('NAME') || 'u8g2';
      var start_x = Blockly.Arduino.valueToCode(this, 'START_X') || '0';
      var start_y = Blockly.Arduino.valueToCode(this, 'START_Y') || '0';
      var width = Blockly.Arduino.valueToCode(this, 'WIDTH') || '0';
      var height = Blockly.Arduino.valueToCode(this, 'HEIGHT') || '0';
      var data_name = Blockly.Arduino.valueToCode(this, 'bitmap_name', Blockly.Arduino.ORDER_ATOMIC);
      data_name = data_name.replace(/\"/g, ""); 
      var code = "";
      //YANG use PROGMEM to save the RAM space
      //code = 'u8g2.drawXBM(' + start_x + ', ';
      code = NAME+'.drawXBMP(' + start_x + ', ';
      code += start_y + ', ';
      code += width + ', ';
      code += height + ', ' + data_name + ');\n';
      return code;
    };
    //将字符串转整数
    function myAtoi(str) {
      str=str.replace(/(^\s*)|(\s*$)/g, "");//去掉字符串最前面的空格，中间的不用管
      var str1="";
      for(i=0;i<str.length;i++){
      if((str.charAt(i)=="-"||str.charAt(i)=="+")&&i==0){
        str1=str1.concat(str.charAt(i))
        }//如果“+”“-”号在最前面
        else if(/^\d+$/.test(str.charAt(i))){
          str1=str1.concat(str.charAt(i))
        }//用字符串存储值
        else{
            break//直接跳出for循环
          };
        }
        if(str1-0>2147483647){
          return 2147483647
        }                      //str-0   字符串化为数组最简单也是最常用的方法
        else if(str1-0<-2147483648){
          return -2147483648
        }
        if(isNaN(str1-0)) return 0//"+"/"-"这种情况,返回0
          return str1-0            
    };
    //将一个数字转化成16进制字符串形式
    function toHex(num){
      return num<16?"0x0"+num.toString(16).toUpperCase():"0x"+num.toString(16).toUpperCase();
    };
    //将文本或符号编码
    function encodeUnicode(str){
      let res = [];
      for(let i = 0; i < str.length;i++)
      {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
      }
      return "_u" + res.join("_u");
    };

    function string_Bin_to_Hex(outstr_select){
      switch (outstr_select)
      {
        case '0000':
        {
          outstr_select = '0';
          break;
        }
        case '0001':
        {
          outstr_select = '1';
          break;
        }
        case '0010':
        {
          outstr_select = '2';
          break;
        }
        case '0011':
        {
          outstr_select = '3';
          break;
        }
        case '0100':
        {
          outstr_select = '4';
          break;
        }
        case '0101':
        {
          outstr_select = '5';
          break;
        }
        case '0110':
        {
          outstr_select = '6';
          break;
        }
        case '0111':
        {
          outstr_select = '7';
          break;
        }
        case '1000':
        {
          outstr_select = '8';
          break;
        }
        case '1001':
        {
          outstr_select = '9';
          break;
        }
        case '1010':
        {
          outstr_select = 'A';
          break;
        }
        case '1011':
        {
          outstr_select = 'B';
          break;
        }
        case '1100':
        {
          outstr_select = 'C';
          break;
        }
        case '1101':
        {
          outstr_select = 'D';
          break;
        }
        case '1110':
        {
          outstr_select = 'E';
          break;
        }
        case '1111':
        {
          outstr_select = 'F';
          break;
        }
      }
      return outstr_select;
    };
   
    //取模工具设置部分
  var bitArr=new Array();
  for(var i=0;i<8;i++)bitArr[i]=(0x80>>i);//初始化位数组
  var canvas=document.createElement("canvas");//创建canvas
  var ctx=canvas.getContext("2d");//获得内容描述句柄

  Blockly.Arduino.tool_modulus = function() {
    var dropdown_bitmap_formats = this.getFieldValue('bitmap_formats');
    var dropdown_modulus_way = this.getFieldValue('modulus_way');
    var dropdown_modulus_direction = this.getFieldValue('modulus_direction');
    var dropdown_hz_sharp = this.getFieldValue('hz_sharp');

    //var text_hz_line_height = this.getFieldValue('hz_line_height');
    var text_hz_line_height = Blockly.Arduino.valueToCode(this, 'hz_line_height',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
    text_hz_line_height = text_hz_line_height.replace(/\"/g,'');

    var dropdown_hz_up_down = this.getFieldValue('hz_up_down');
    var text_hz_up_down_data = this.getFieldValue('hz_up_down_data');
    var dropdown_hz_left_right = this.getFieldValue('hz_left_right');
    var text_hz_left_right_data = this.getFieldValue('hz_left_right_data');

    //var text_bitmap_width = this.getFieldValue('bitmap_width');
    //var text_bitmap_height = this.getFieldValue('bitmap_height');
    var text_bitmap_width = Blockly.Arduino.valueToCode(this, 'bitmap_width',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
    text_bitmap_width = text_bitmap_width.replace(/\"/g,'');
    var text_bitmap_height = Blockly.Arduino.valueToCode(this, 'bitmap_height',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
    text_bitmap_height = text_bitmap_height.replace(/\"/g,'');


    var angle_bitmap_rotate = 0;
    var checkbox_show_hz = 'TRUE';

    //var text_input_data = this.getFieldValue('input_data');
    var text_input_data = Blockly.Arduino.valueToCode(this, 'input_data',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
    text_input_data = text_input_data.replace(/\"/g,'');

    var dropdown_hz_variant = 'normal';
    var dropdown_hz_style = 'normal';
    var dropdown_hz_thickness = 'normal';
    var fontSize_width=myAtoi(text_bitmap_width);
    var fontSize_height=myAtoi(text_bitmap_height);
      var bs=Math.ceil(fontSize_width/8);//每行占字节数

      var move_x = 0;
      var move_y = 0;
      if(dropdown_hz_up_down == "hz_down")
      {
        move_y = myAtoi(text_hz_up_down_data);
      }
      else
      {
        move_y = myAtoi("-"+text_hz_up_down_data);
      }

      if(dropdown_hz_left_right == "hz_right")
      {
        move_x = myAtoi(text_hz_left_right_data);
      }
      else
      {
        move_x = myAtoi("-"+text_hz_left_right_data);
      }
      canvas.width=fontSize_width;
      canvas.height=fontSize_height;
      ctx.font = dropdown_hz_style + ' ' + dropdown_hz_variant + ' ' + dropdown_hz_thickness + ' ' + text_hz_line_height + 'px ' + dropdown_hz_sharp;
      ctx.textAlign="left";
      ctx.textBaseline="top";

      var c = text_input_data;

      ctx.fillStyle="#000000";
      ctx.fillRect(0,0,fontSize_width,fontSize_height);//涂背景
      ctx.fillStyle="#ffffff";
      ctx.translate(fontSize_width/2,fontSize_height/2);
      ctx.rotate(Math.PI/180*(angle_bitmap_rotate-0));
      ctx.fillText(c,move_x-fontSize_width/2,move_y-fontSize_height/2);//写字
      //ctx.drawImage(img,0,0,100,100);//写字

      var data=ctx.getImageData(0,0,fontSize_width,fontSize_height).data;//获取图像
      var zm=new Array(bs*fontSize_height);
      for(var i=0;i<zm.length;i++)zm[i]=0;//初始化字模数组
      for(var i=0;i<fontSize_height;i++)//读像素值组成字模数组
        for(var j=0;j<fontSize_width;j++)
          if(data[i*fontSize_width*4+j*4])zm[parseInt(j/8)+i*bs]+=bitArr[j%8];
      var outStr="";//将字模数组转化为十六进制形式
      for(var i=0;i<zm.length-1;i++)outStr+=toHex(zm[i])+",";
        outStr+=toHex(zm[i]);

      var zm1=new Array(bs*fontSize_height);
      var outstr1 = "";
      for(var i in zm)zm1[i] = zm[i].toString(2);
        for(var i in zm1)
        {
          var str = "";
          for(var j = 0;j<8-zm1[i].length;j++)str+="0";
            zm1[i] = str + zm1[i];
        }
        for(var i in zm1)outstr1+=zm1[i];

          var HZ_image = "";
        var num_hz = 0;
        for(var i = 0;i<fontSize_width;i++)
        {
          HZ_image+="--";
          if(i == (fontSize_width - 1))HZ_image+="\n|";
        }

        for(var data_hz of outstr1)
        {
          num_hz++;
          if(num_hz == outstr1.length)
          {
            HZ_image+="|\n";
          }
          else if(num_hz%(bs*8) < fontSize_width && num_hz%(bs*8) > 0)
          {
            if(data_hz == "0")HZ_image+="  ";
            else if(data_hz == "1")HZ_image+="0 ";
          } 
          else if(num_hz%(bs*8) == 0)
          {
            HZ_image+="|\n|";
          }
        }
        for(var i = 0;i<fontSize_width;i++)
        {
          HZ_image+="--";
        }
        HZ_image = "/*" + "\n" + HZ_image + "\n" + "*/";
        
        var hz_sharp = "";
        switch(dropdown_hz_sharp)
        {
          case "STHeiti":
          hz_sharp = "华文黑体";
          break;
          case "STKaiti":
          hz_sharp = "华文楷体";
          break;
          case "STXihei":
          hz_sharp = "华文细黑";
          break;
          case "STSong":
          hz_sharp = "华文宋体";
          break;
          case "STZhongsong":
          hz_sharp = "华文中宋";
          break;
          case "STFangsong":
          hz_sharp = "华文仿宋";
          break;
          case "STCaiyun":
          hz_sharp = "华文彩云";
          break;
          case "STHupo":
          hz_sharp = "华文琥珀";
          break;
          case "STLiti":
          hz_sharp = "华文隶书";
          break;
          case "STXingkai":
          hz_sharp = "华文行楷";
          break;
          case "STXinwei":
          hz_sharp = "华文新魏";
          break;
          case "simHei":
          hz_sharp = "黑体";
          break;
          case "simSun":
          hz_sharp = "宋体";
          break;
          case "NSimSun":
          hz_sharp = "新宋体";
          break;
          case "FangSong":
          hz_sharp = "仿宋";
          break;
          case "KaiTi":
          hz_sharp = "楷体";
          break;
          case "FangSong_GB2312":
          hz_sharp = "仿宋_GB2312";
          break;
          case "KaiTi_GB2312":
          hz_sharp = "楷体_GB2312";
          break;
          case "LiSu":
          hz_sharp = "隶书";
          break;
          case "YouYuan":
          hz_sharp = "幼圆";
          break;
          case "PMingLiU":
          hz_sharp = "新细明体";
          break;
          case "MingLiU":
          hz_sharp = "细明体";
          break;
          case "DFKai-SB":
          hz_sharp = "标楷体";
          break;
          case "Microsoft JhengHei":
          hz_sharp = "微软正黑体";
          break;
          case "Microsoft YaHei":
          hz_sharp = "微软雅黑体";
          break;
          default:
          hz_sharp = dropdown_hz_sharp;
          break;
        }
        hz_sharp = "字体：" + hz_sharp + "  字号：" + text_hz_line_height + "px" + "  显示文字：" + text_input_data + '\n' + HZ_image;

        var modulus_array = new Array();
        for(var i = 0;i < fontSize_height; i++)
        {
          modulus_array[i] = new Array();
          for(var j = 0;j < bs*8;j++)
          {
            modulus_array[i][j] = "";
          }
        }

        for(var i = 1;i <= fontSize_height; i++)
        {
          for(var j = 1;j <= bs*8;j++)
          {
            modulus_array[i-1][j-1] = outstr1.charAt((i-1)*bs*8 + j - 1);
          }
        }
      //取模方式
      //逐列式 - 1,逐行式 - 2,列行式 - 3,行列式 - 4

      //取模走向
      //顺向(高位在前) - 1,逆向(低位在前) - 2
      var bit_num = fontSize_height*bs;
      var modulus_data = "";
      var array_x = 0;
      var array_y = 0;
      var modulus_y = Math.ceil(fontSize_height/8);
      var modulus_x = Math.ceil(fontSize_width/8);
      
      //if(dropdown_modulus_direction == '1')
      //{
      //逐列式 - 1
      if(dropdown_modulus_way == '1')
      {
        bit_num = modulus_y*fontSize_width;
        for(var j = 1;j <= bit_num;j++)
        {
          for(var i = 1;i <= 8;i++)
          {
            if(j%modulus_y == 0)
              array_y = (modulus_y-1)*8 + i - 1;
            else
              array_y = (j%modulus_y-1)*8 + i - 1;
            
            array_x = Math.ceil(j/modulus_y) - 1;
            if(array_x > (fontSize_width - 1))
              break;
            if(array_y > (fontSize_height - 1))
            {
              if(dropdown_bitmap_formats == '1')
                modulus_data+="0";
              else
                modulus_data+="1";
              continue;
            }

            //modulus_data+=modulus_array[array_y][array_x];
            if(dropdown_bitmap_formats == '1')
              modulus_data+=modulus_array[array_y][array_x];
            else
            {
              if(modulus_array[array_y][array_x] == "0")
                modulus_data+="1";
              else
                modulus_data+="0";
            }
          }
          modulus_data+=",";
        }
      }
      //逐行式 - 2
      else if(dropdown_modulus_way == '2')
      {
        bit_num = modulus_x*fontSize_height;
        for(var j = 1;j <= bit_num;j++)
        {
          for(var i = 1;i <= 8;i++)
          {
            if(j%modulus_x == 0)
              array_x = (modulus_x-1)*8 + i - 1;
            else
              array_x = (j%modulus_x-1)*8 + i - 1;
            array_y = Math.ceil(j/modulus_x) - 1;

            //modulus_data+=modulus_array[array_y][array_x];
            if(dropdown_bitmap_formats == '1')
              modulus_data+=modulus_array[array_y][array_x];
            else
            {
              if(modulus_array[array_y][array_x] == "0")
                modulus_data+="1";
              else
                modulus_data+="0";
            }
          }
          modulus_data+=",";
        }
      }
      //列行式 - 3
      else if(dropdown_modulus_way == '3')
      {
        bit_num = modulus_y*fontSize_width;
        for(var j = 1;j <= bit_num;j++)
        {
          for(var i = 1;i <= 8;i++)
          {
            if(j%(modulus_x*8) == 0)
              array_x = modulus_x*8 - 1;
            else
              array_x = j%(modulus_x*8) - 1;
            array_y = (Math.ceil(j/(modulus_x*8)) - 1)*8 + i - 1;
            if(array_x > (fontSize_width - 1))
              break;
            if(array_y > (fontSize_height - 1))
            {
              if(dropdown_bitmap_formats == '1')
                modulus_data+="0";
              else
                modulus_data+="1";
              continue;
            }

            //modulus_data+=modulus_array[array_y][array_x];
            if(dropdown_bitmap_formats == '1')
              modulus_data+=modulus_array[array_y][array_x];
            else
            {
              if(modulus_array[array_y][array_x] == "0")
                modulus_data+="1";
              else
                modulus_data+="0";
            }
          }
          modulus_data+=",";
        }
      }
      //行列式 - 4
      else if(dropdown_modulus_way == '4')
      {
        bit_num = modulus_x*fontSize_height;
        for(var j = 1;j <= bit_num;j++)
        {
          for(var i = 1;i <= 8;i++)
          {
            if(j%fontSize_height == 0)
              array_y = fontSize_height - 1;
            else
              array_y = j%fontSize_height - 1;
            array_x = (Math.ceil(j/fontSize_height) - 1)*8 + i - 1;

            //modulus_data+=modulus_array[array_y][array_x];
            if(dropdown_bitmap_formats == '1')
              modulus_data+=modulus_array[array_y][array_x];
            else
            {
              if(modulus_array[array_y][array_x] == "0")
                modulus_data+="1";
              else
                modulus_data+="0";
            }
          }
          modulus_data+=",";
        }
      }
      //}
      var now_data = "";
      var end_data = "";
      if(dropdown_modulus_direction == 2)
      {
        for(var i of modulus_data)
        {
          if(i == ",")
          {
            end_data+=now_data;
            end_data+=",";
            now_data = "";
          }
          else
            now_data = i + now_data;
        }
        modulus_data = end_data;
      }

      now_data = "";
      end_data = "0x";
      for(var i of modulus_data)
      {
        if(i == ",")
        {
          end_data+=",0x";
          continue;
        }
        now_data+=i;
        if(now_data.length == 4)
        {
          end_data+=string_Bin_to_Hex(now_data);
          now_data = "";
        }
      }
      modulus_data = end_data;
      modulus_data = modulus_data.substring(0,modulus_data.length-3);
      
      if(checkbox_show_hz)
        Blockly.Arduino.definitions_['var_declare_tool_modulus_data_' + dropdown_hz_sharp + '_' + text_hz_line_height + 'px' + encodeUnicode(text_input_data)] = '//' + hz_sharp;
      
      var code = modulus_data;
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //取模工具显示数据部分
    Blockly.Arduino.tool_modulus_show = function() {
        //var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE);
        var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_ATOMIC);
        varName = varName.replace(/\"/g, ""); 
        var X = this.getFieldValue('x');
        var checkbox_save_hz = this.getFieldValue('save_hz') == 'TRUE';
        var value_input = Blockly.Arduino.valueToCode(this, 'input_data', Blockly.Arduino.ORDER_ATOMIC);

        var X_1 = 0;
        for(var i of value_input)
        {
          if(i == ',')
            X_1++;
        }
        X_1++;

        this.setFieldValue(X_1,"x");
        
        if(checkbox_save_hz)
          Blockly.Arduino.definitions_['var_declare'+varName] = 'static const unsigned char PROGMEM '+varName+'['+X_1+'] = '+ '{' + value_input + '};';
        else
          Blockly.Arduino.definitions_['var_declare'+varName] = 'unsigned char '+varName+'['+X_1+'] = '+ '{' + value_input + '};';
        var code = '';
        return code;
    };
    //OLED清屏
    Blockly.Arduino.oled_clear = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var code=NAME+".clearDisplay();\n";
        return code;
    };
    //OLED背光亮度
    Blockly.Arduino.u8g2_setContrast = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var Contrast= Blockly.Arduino.valueToCode(this, 'Contrast', Blockly.Arduino.ORDER_ATOMIC);
        var code=NAME+'.setContrast(' +Contrast+ ');\n';
        return code;
    };
    //OLED显示内置图片
    Blockly.Arduino.oled_face = function() {
       var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
       var POS_x = Blockly.Arduino.valueToCode(this, 'POS_X') || '0';
       var POS_y = Blockly.Arduino.valueToCode(this, 'POS_Y') || '0';
       var FACE_IMAGE = this.getFieldValue('FACE_IMAGE');
       var pos=FACE_IMAGE.indexOf(',');
       var varName="FACE_"+FACE_IMAGE.substring(0,pos);
       FACE_IMAGE=FACE_IMAGE.substring(pos+1,FACE_IMAGE.length);
       Blockly.Arduino.definitions_['var_declare' + varName] = 'const static unsigned char ' + varName + '[] PROGMEM ={' + FACE_IMAGE + ' };\n';
       var code=NAME+".drawXBMP("+POS_x+","+POS_y+",89,64,"+varName+");\n";
       return code;
    };
    //显示-OLED-画点
    Blockly.Arduino.oled_drawPixel = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var pos_x = Blockly.Arduino.valueToCode(this, 'POS_X') || '0';
        var pos_y = Blockly.Arduino.valueToCode(this, 'POS_Y') || '0';
        var code = "";
        code = code + NAME + '.drawPixel(' + pos_x + ',';
        code += pos_y + ');\n';
        return code;
    };
    //显示-OLED-画线
    Blockly.Arduino.oled_drawLine = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var start_x = Blockly.Arduino.valueToCode(this, 'START_X') || '0';
        var start_y = Blockly.Arduino.valueToCode(this, 'START_Y') || '0';
        var end_x = Blockly.Arduino.valueToCode(this, 'END_X') || '0';
        var end_y = Blockly.Arduino.valueToCode(this, 'END_Y') || '0';
        var code = "";
        code = NAME+'.drawLine(' + start_x + ',';
        code += start_y + ',';
        code += end_x + ',';
        code += end_y + ');\n';
        return code;
    };
    //显示-OLED-画直线
    Blockly.Arduino.oled_draw_Str_Line = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var start_x = Blockly.Arduino.valueToCode(this, 'START_X') || '0';
        var start_y = Blockly.Arduino.valueToCode(this, 'START_Y') || '0';
        var length = Blockly.Arduino.valueToCode(this, 'LENGTH') || '0';
        var TYPE = this.getFieldValue('TYPE');
        var code = "";
        code = NAME+".draw" + TYPE + "Line(" + start_x + ',';
        code += start_y + ',';
        code += length + ');\n'; 
        return code;
    };
    //显示-OLED-画矩形
    Blockly.Arduino.oled_drawFrame = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X') || '0';
        var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y') || '0';
        var Width = Blockly.Arduino.valueToCode(this, 'WIDTH') || '0';
        var Height = Blockly.Arduino.valueToCode(this, 'HEIGHT') || '0';
        var type = this.getFieldValue('TYPE');
        var code = "";
        code = NAME+'.'+type+'(' + D0_x + ',';
        code += D0_y + ',';
        code += Width + ',';
        code += Height + ');\n';
        return code;
    };
    //显示-OLED-画圆角矩形
    Blockly.Arduino.oled_drawRFrame = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X') || '0';
        var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y') || '0';
        var Width = Blockly.Arduino.valueToCode(this, 'WIDTH') || '0';
        var Height = Blockly.Arduino.valueToCode(this, 'HEIGHT') || '0';
        var Rauius = Blockly.Arduino.valueToCode(this, 'RADIUS') || '0';
        var type = this.getFieldValue('TYPE');
        var code = "";
        code = NAME+'.'+type+'(' + D0_x + ',';
        code += D0_y + ',';
        code += Width + ',';
        code += Height + ',';
        code += Rauius + ');\n'; 
        return code;
    };
    //显示-OLED-画圆（空心，实心）
    Blockly.Arduino.oled_drawCircle = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, ""); 
        var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X') || '0';
        var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y') || '0';
        var Rauius = Blockly.Arduino.valueToCode(this, 'RADIUS') || '0';
        var type = this.getFieldValue('TYPE');
        var opt = this.getFieldValue('OPT');
        var code = "";
        code = NAME+'.'+type+'(' + D0_x + ',';
        code += D0_y + ',';
        code += Rauius + "," + opt + "); \n";
        return code;
    };
    //显示-OLED-画椭圆（空心，实心）
    Blockly.Arduino.oled_drawEllipse = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, "");
        var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X') || '0';
        var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y') || '0';
        var Rauius_X = Blockly.Arduino.valueToCode(this, 'RADIUS_X') || '0';
        var Rauius_Y = Blockly.Arduino.valueToCode(this, 'RADIUS_Y') || '0';
        var type = this.getFieldValue('TYPE');
        var opt = this.getFieldValue('OPT');
        var code = "";
        code = NAME+'.'+type+'(' + D0_x + ',';
        code += D0_y + ',';
        code += Rauius_X + "," ;
        code += Rauius_Y + "," + opt + "); \n";
        return code;
    };
    //显示-OLED-画三角
    Blockly.Arduino.oled_drawTriangle = function() {
        var NAME = Blockly.Arduino.valueToCode(this, 'NAME', Blockly.Arduino.ORDER_ATOMIC)|| 'u8g2';
        NAME = NAME.replace(/\"/g, "");
        var D0_x = Blockly.Arduino.valueToCode(this, 'D0_X') || '0';
        var D0_y = Blockly.Arduino.valueToCode(this, 'D0_Y') || '0';
        var D1_x = Blockly.Arduino.valueToCode(this, 'D1_X') || '0';
        var D1_y = Blockly.Arduino.valueToCode(this, 'D1_Y') || '0';
        var D2_x = Blockly.Arduino.valueToCode(this, 'D2_X') || '0';
        var D2_y = Blockly.Arduino.valueToCode(this, 'D2_Y') || '0';
        var code = "";
        code = NAME+'.drawTriangle(' + D0_x + ',';
        code += D0_y + ',';
        code += D1_x + ',';
        code += D1_y + ',';
        code += D2_x + ',';
        code += D2_y + ');\n';
        return code;
    };
    //彩屏刷新显示
    Blockly.Arduino.QH_display_samll_refresh_display = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var branch = Blockly.Arduino.statementToCode(this, 'DO');
        branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
        if(dropdown_pin2==5){
          var code = branch+'\nSerial.println("");\n';
        }else{
          var code =branch +'\n'+dropdown_pin+'.println("");\n';
        }
        return code;
    };
    //横坚屏设置
    Blockly.Arduino.QH_display_samll_HV = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print("DIR('+dropdown_pin3+');");\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print("DIR('+dropdown_pin3+');");\n';
        }
        return code;
    };
    //屏亮度设置
    Blockly.Arduino.QH_display_samll_BL = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var num = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_bl_1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print(String("BL(")+String('+num+')+String(");"));\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print(String("BL(")+String('+num+')+String(");"));\n';
        }
        return code;
    };
    //小彩屏颜色刷屏
    Blockly.Arduino.QH_display_samll_clr = function() {
      var dropdown_pin = numberck(this.getFieldValue('pinn'));
      var dropdown_pin2 = this.getFieldValue('pinn');
      var dropdown_pin3 = this.getFieldValue('pin');

      var num = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_clr_1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      if(dropdown_pin2==5){
      Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
      var code = 'Serial.print(String("'+dropdown_pin3+'(")+String('+num+')+String(");"));\n';
      }else{
      Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
      Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
      Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
      var code = ''+dropdown_pin+'.print(String("'+dropdown_pin3+'(")+String('+num+')+String(");"));\n';
      }
      return code;
    };
    //小彩屏默认图片显示
    Blockly.Arduino.QH_display_samll_flash_pic = function() {
      var dropdown_pin = numberck(this.getFieldValue('Serial'));
      var dropdown_pin2 = this.getFieldValue('Serial');
      var Serial = this.getFieldValue('Serial');
      var model = this.getFieldValue('model');
      var picNum = parseInt(this.getFieldValue('picNum'));
      var HV = parseInt(this.getFieldValue('HV'));

      var W,H;
      picNum = 2097152 + (picNum+HV*12)*40960;

      if(HV)
      {
        W =160;
        H=128;
      }
      else
      {
        W =128;
        H=160;
      }

      if(Serial==5){
      Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
      var code = 'Serial.print(String("FSIMG(")+String('+picNum+')+String(",0,0,")+String('+W+')+String(",")+String('+H+')+String(",")+String('+model+')+String(");"));\n';
      }else{
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
      Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
      Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
      var code = 'P'+Serial+'.print(String("FSIMG(")+String('+picNum+')+String(",0,0,")+String('+W+')+String(",")+String('+H+')+String(",")+String('+model+')+String(");"));\n';
      }
      return code;
    };
    //小彩屏图片显示
    Blockly.Arduino.QH_display_samll_pic = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin');
        var num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_add',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_X',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_Y',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_W',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num5 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pic_H',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print(String("FSIMG(")+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num5+')+String(",")+String('+dropdown_pin3+')+String(");"));\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print(String("FSIMG(")+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num5+')+String(",")+String('+dropdown_pin3+')+String(");"));\n';
        }
        return code;
    };
      //小彩屏画点指令
    Blockly.Arduino.QH_display_samll_PS = function() {
      var dropdown_pin = numberck(this.getFieldValue('pinn'));
      var dropdown_pin2 = this.getFieldValue('pinn');
      var num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_ps_X',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_ps_Y',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_ps_colou',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;


      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      if(dropdown_pin2==5){
      Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
      var code = 'Serial.print(String("PS(")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(");"));\n';
      }else{
      Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
      Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
      Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
      var code = ''+dropdown_pin+'.print(String("PS(")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(");"));\n';
      }
      return code;
    };
    //小彩屏画线框
    Blockly.Arduino.QH_display_samll_PL = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin');

        var num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_X',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_Y',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_X2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_Y2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num5 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_pl_colou',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print(String("'+dropdown_pin3+'(")+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num5+')+String(");"));\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print(String("'+dropdown_pin3+'(")+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num5+')+String(");"));\n';
        }
        return code;
    };
      //小彩屏画圆
    Blockly.Arduino.QH_display_samll_CIR = function() {
      var dropdown_pin = numberck(this.getFieldValue('pinn'));
      var dropdown_pin2 = this.getFieldValue('pinn');
      var dropdown_pin3 = this.getFieldValue('pin');

      var num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_X',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_Y',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_R',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_cir_colou',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print(String("'+dropdown_pin3+'(")+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(");"));\n';
      }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print(String("'+dropdown_pin3+'(")+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(");"));\n';
      }
      return code;
    };
       //显示文本
    Blockly.Arduino.QH_display_samll_DC = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin');

        var num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_colou',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_X',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_Y',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_text',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print(String("DC'+dropdown_pin3+'(")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num1+')+String(");"));\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print(String("DC'+dropdown_pin3+'(")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num1+')+String(");"));\n';
        }
        return code;
    };
    //显示文本
    Blockly.Arduino.QH_display_samll_CN = function() {
        var number = Math.ceil(Math.random() * 100000);  
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin');

        var num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_colou',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_X',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_Y',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_dc_text',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        num4 = num4.replace(/\"/g,'')
        //编码解析
        num4 = utf8ToGb2312Array(num4);
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['var_declare_'+number] = 'const char str_'+number+'[] = {'+num4+'};';//定义数组

        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print(String("DC'+dropdown_pin3+'(")+String('+num2+')+String(",")+String('+num3+')+String(","));\nSerial.write(str_'+number+',sizeof(str_'+number+'));\nSerial.print(","+String('+num1+')+String(");"));\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = dropdown_pin+'.print(String("DC'+dropdown_pin3+'(")+String('+num2+')+String(",")+String('+num3+')+String(","));\n'+dropdown_pin+'.write(str_'+number+',sizeof(str_'+number+'));\n'+dropdown_pin+'.print(","+String('+num1+')+String(");"));\n';
        }
        return code;
    };
    //显示带底色文本
    Blockly.Arduino.QH_display_samll_SBCDC = function() {
      var dropdown_pin = numberck(this.getFieldValue('pinn'));
      var dropdown_pin2 = this.getFieldValue('pinn');
      var dropdown_pin3 = this.getFieldValue('pin');

      var num1 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_colou',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num2 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_X',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num3 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_Y',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num4 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_text',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      var num5 = Blockly.Arduino.valueToCode(this, 'QDP_display_samll_sbcdc_colou2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
      Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
      if(dropdown_pin2==5){
      Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
      var code = 'Serial.print(String("SBC('+num5+');DCV'+dropdown_pin3+'(")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num1+')+String(");"));\n';
      }else{
      Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
      Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
      Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
      var code = ''+dropdown_pin+'.print(String("SBC('+num5+');DCV'+dropdown_pin3+'(")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num1+')+String(");"));\n';
      }
      return code;
    };
    //自定指令
    Blockly.Arduino.QH_display_samll_order = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var text = Blockly.Arduino.valueToCode(this, 'text',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print('+text+'+String(");"));\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print('+text+'+String(");"));\n';
        }
        return code;
    };
    //小彩屏波特率设置
    Blockly.Arduino.QH_display_samll_btl = function() {
        var dropdown_pin = numberck(this.getFieldValue('pinn'));
        var dropdown_pin2 = this.getFieldValue('pinn');
        var dropdown_pin3 = this.getFieldValue('pin');


        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        if(dropdown_pin2==5){
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print("BPS('+dropdown_pin3+');");\n';
        }else{
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['var_declare_qdprobot_serial'+dropdown_pin] = 'SoftwareSerial  '+dropdown_pin+'(QDPport['+dropdown_pin2+'][1],QDPport['+dropdown_pin2+'][0]);\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'+dropdown_pin] = ''+dropdown_pin+'.begin(9600);\n';
        var code = ''+dropdown_pin+'.print("BPS('+dropdown_pin3+');");\n';
        }
        return code;
        };
    //LCD初始化
    Blockly.Arduino.group_lcd_init2 = function() {
        var varName =  Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        varName = varName.replace(/\"/g,'')
        var TYPE = this.getFieldValue('TYPE');
        var SCL = this.getFieldValue('SCL');
        var SDA = this.getFieldValue('SDA');
        var device = Blockly.Arduino.valueToCode(this, 'device', Blockly.Arduino.ORDER_ATOMIC) || '0x27';  
        if(SDA=="SDA"&&SCL=="SCL")
        {
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
        Blockly.Arduino.definitions_['var_declare_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
        }
        else
        {
        Blockly.Arduino.definitions_['include_SoftI2CMaster'] = '#include <SoftI2CMaster.h>';
        Blockly.Arduino.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_SoftI2C.h>';
        Blockly.Arduino.definitions_['var_declare_LiquidCrystal_SoftI2C_' + varName] = 'LiquidCrystal_SoftI2C ' + varName + '(' + device + ',' + TYPE + ',' + SCL + ',' + SDA + ');';
        }
        Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
        Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';    
        return '';
    };
    //LCD打印
    Blockly.Arduino.group_lcd_print = function() {
        var varName = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        varName = varName.replace(/\"/g,'')
        var str1 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
        var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';

        var code = varName+'.setCursor(0, 0);\n'
        code+=varName+'.print('+str1+');\n';
        code+=varName+'.setCursor(0, 1);\n';
        code+=varName+'.print('+str2+');\n';  
        return code;
    };
    //LCD打印
    Blockly.Arduino.group_lcd_print2 = function() {
        var varName = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        varName = varName.replace(/\"/g,'')
        var str = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';
        var row = Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC) || '1';
        var column = Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC) || '1';
        var code = varName+'.setCursor('+column+'-1, '+row+'-1);\n'
        code+=varName+'.print('+str+');\n';
        return code;
    };
    //LCD电源
    Blockly.Arduino.group_lcd_power = function() {
        var varName = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        varName = varName.replace(/\"/g,'')
        var dropdown_stat = this.getFieldValue('STAT');
        var code = varName+'.'+dropdown_stat+'();\n'
        return code;
    };
    //掌控屏
    Blockly.Arduino.qdp_display_START = function() {
        Blockly.Arduino.definitions_['define_qdpBT'] = '#include <AppBtRec.h>';
        Blockly.Arduino.definitions_['define_qdpBTD'] = 'AppBtRec AppBtRec;\n';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);\n';
        var code = 'AppBtRec.PortReceive();\n';
        return code;
    };
    //掌控屏按键
    Blockly.Arduino.qdp_display_button = function() {
        var num = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var code = 'AppBtRec.IsObject('+num+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //读掌控屏变量
    Blockly.Arduino.qdp_display_variable = function() {
      var dropdown_pin1 = this.getFieldValue('pin');
      var code = 'AppBtRec.GetVal('+dropdown_pin1+')';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //发送变量到掌控屏
    Blockly.Arduino.qdp_display_print = function() {
        var dropdown_pin1 = this.getFieldValue('pin');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var num1 = Blockly.Arduino.valueToCode(this, 'N1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var code = 'Serial.print("t'+dropdown_pin1+'.txt=\\"");\nSerial.print(String('+num1+'));\nSerial.print("\\"");\nsend3times0xff();\n';
        return code;
    };
    //睡眠控制
    Blockly.Arduino.qdp_zkpdisplay_sleep = function() {
        var dropdown_pin2 = this.getFieldValue('pin2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("sleep='+dropdown_pin2+'");\nsend3times0xff();\n';
        return code;
    };
    //屏蜂鸣器
    Blockly.Arduino.qdp_zkpdisplay_buzzer = function() {
        var dropdown_pin = this.getFieldValue('pin2');
        var num = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("cfgpio 7,3,0");\nsend3times0xff();\nSerial.print("pwmf='+dropdown_pin+'");\nsend3times0xff();\nSerial.print(String("pwm7=")+String('+num+'));\nsend3times0xff();\n';
        return code;
    };
    //颜色
    Blockly.Arduino.qdp_zkpdisplay_color = function() {
        var dropdown_pin = this.getFieldValue('pin1');
        var code = ''+dropdown_pin+'';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //颜色刷屏
    Blockly.Arduino.qdp_zkpdisplay_clscolor = function() {
        var num = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print(String("cls ")+String('+num+'));\nsend3times0xff();\n';
        return code;
    };
    //表情刷屏
    Blockly.Arduino.qdp_zkpdisplay_pic = function() {
        var dropdown_pin = this.getFieldValue('pin2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("pic 0,0,'+dropdown_pin+'");\nsend3times0xff();\n';
        return code;
    };
    //页面跳转
    Blockly.Arduino.qdp_zkpdisplay_page = function() {
        var dropdown_pin = this.getFieldValue('pin2');
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("page '+dropdown_pin+'");\nsend3times0xff();\n'
        return code;
    };
    //画圆
    Blockly.Arduino.qdp_zkpdisplay_drawinground = function() {
        var dropdown_pin = this.getFieldValue('pin2');
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'num4',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("'+dropdown_pin+' "+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+'));\nsend3times0xff();\n'
        return code;
    };
    //画线矩形区域填充
    Blockly.Arduino.qdp_zkpdisplay_function1 = function() {
        var dropdown_pin = this.getFieldValue('pin2');
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'num4',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num5 = Blockly.Arduino.valueToCode(this, 'num5',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("'+dropdown_pin+' "+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",")+String('+num5+'));\nsend3times0xff();\n'
        return code;
    };
    //文字信息
    Blockly.Arduino.qdp_zkpdisplay_TEXT = function() {
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'num4',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num5 = Blockly.Arduino.valueToCode(this, 'num5',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num6 = Blockly.Arduino.valueToCode(this, 'num6',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num7 = Blockly.Arduino.valueToCode(this, 'text3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var dropdown_pin = this.getFieldValue('pinn');

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("xstr "+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",0,")+String('+num5+')+String(",")+String('+num6+')+String(",1,1,'+dropdown_pin+',\\""));\nSerial.print(String('+num7+'));\nSerial.print("\\"");\nsend3times0xff();\n'
        return code;
    };
    //文字信息
    Blockly.Arduino.qdp_zkpdisplay_TEXT_CN = function() {
        var number = Math.ceil(Math.random() * 100000);  
        var num1 = Blockly.Arduino.valueToCode(this, 'num1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num2 = Blockly.Arduino.valueToCode(this, 'num2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num3 = Blockly.Arduino.valueToCode(this, 'num3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num4 = Blockly.Arduino.valueToCode(this, 'num4',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num5 = Blockly.Arduino.valueToCode(this, 'num5',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num6 = Blockly.Arduino.valueToCode(this, 'num6',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var num7 = Blockly.Arduino.valueToCode(this, 'text3',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        var dropdown_pin = this.getFieldValue('pinn');
        num7 = num7.replace(/\"/g,'');
        num7 = utf8ToGb2312Array(num7);
        Blockly.Arduino.definitions_['var_declare_'+number] = 'const char str_'+number+'[] = {'+num7+'};';//定义数组

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial'] = 'Serial.begin(9600);';
        var code = 'Serial.print("xstr "+String('+num1+')+String(",")+String('+num2+')+String(",")+String('+num3+')+String(",")+String('+num4+')+String(",0,")+String('+num5+')+String(",")+String('+num6+')+String(",1,1,'+dropdown_pin+',\\""));\nSerial.write(str_'+number+',sizeof(str_'+number+'));\nSerial.print("\\"");\nsend3times0xff();\n'
        return code;
    };
    //自定义指令
    Blockly.Arduino.qdp_zkpdisplay_order = function() {
        var text = Blockly.Arduino.valueToCode(this, 'text',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;

        Blockly.Arduino.definitions_['define_qdport'] = '#include <QDPport.h>';
        Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
        Blockly.Arduino.definitions_['define_send3times0xff'] = 'void send3times0xff() { \nfor (int i = 1; i <= 3; i = i + (1)) {\nSerial.write(0XFF);\n}\n}';
        Blockly.Arduino.setups_['setup_qdprobot_serial']= 'Serial.begin(9600);';
        var code = 'Serial.print('+text+');\nsend3times0xff();\n';
        return code;
    };
    //注释1  
    Blockly.Arduino.qdp_annotation1 = function() {
        var text_data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        text_data = text_data.replace(/\"/g,'');
        var code = '//'+text_data+'\n';
        return code;
    };
    //注释2  
    Blockly.Arduino.qdp_annotation2 = function() {
        var text_data = Blockly.Arduino.valueToCode(this, 'data',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        text_data = text_data.replace(/\"/g,'');
        var statements_input = Blockly.Arduino.statementToCode(this, 'input');
        statements_input = statements_input.replace(new RegExp(/\n  /g), "\n");
        statements_input = statements_input.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
        var code = '/*'+text_data+'*/\n'+statements_input+"\n";
        return code;
    };
    //定义变量
    Blockly.Arduino.QH_variables_declare = function() {
        var type = this.getFieldValue('TYPE');
        var VARIABLES_TYPE = this.getFieldValue('variables_type');
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || '""';
        let code ='';
        if(VARIABLES_TYPE == 'global_variate')
          Blockly.Arduino.definitions_['var_declare' + name] =  type + ' ' + name + ' = '+value+';\n';
        else
          code = type + ' ' + name + ' = '+value+';\n';

        return code;
    };
    //变量get
    Blockly.Arduino.QH_variables_get = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_NONE];
    };
    //变量set
    Blockly.Arduino.QH_variables_set = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        value = value.replace(/\"/g,'');
        code = name+'\='+value+';\n';
        return code;
    };
    //变量++--
    Blockly.Arduino.QH_variables_change = function() {
        var type = this.getFieldValue('TYPE');
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name+type+';\n';
        return code;
    };
    Blockly.Arduino.cooperativeScheduler_start = function () {
        return 'mySCoop.start();\n';
    };

    Blockly.Arduino.cooperativeScheduler_setup = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        let setupBranch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        setupBranch = Blockly.Arduino.addLoopTrap(setupBranch, block.id);
        let loopBranch = Blockly.Arduino.statementToCode(block, 'SUBSTACK1');
        loopBranch = Blockly.Arduino.addLoopTrap(loopBranch, block.id);

        Blockly.Arduino.includes_.include_cooperativeScheduler_setup = `#include "SCoop.h"`;
        Blockly.Arduino.definitions_[`cooperativeScheduler_setup${no}`] =
`defineTask(Task${no});

void Task${no}::setup() {
${setupBranch}}

void Task${no}::loop() {
${loopBranch}}`;

        Blockly.Arduino.loops_.setups_cooperativeScheduler_start = 'yield();';
        return '';
    };

    Blockly.Arduino.cooperativeScheduler_sleep = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
        return `sleep(${time});\n`;
    };
    //算术运算符
    Blockly.Arduino.QH_arithmetic_operator = function (block) {
        let num1 = Blockly.Arduino.valueToCode(this, 'NUM1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let num2 = Blockly.Arduino.valueToCode(this, 'NUM2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let op = this.getFieldValue('OP');

        let code = num1 + op +num2;
        return [code, Blockly.Arduino.ORDER_NONE];
    };
    //关系运算符
    Blockly.Arduino.QH_relational_operator = function (block) {
        let num1 = Blockly.Arduino.valueToCode(this, 'NUM1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let num2 = Blockly.Arduino.valueToCode(this, 'NUM2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let op = this.getFieldValue('OP');

        let code = num1 + op +num2;
        return [code, Blockly.Arduino.ORDER_NONE];
    };
    //位运算
    Blockly.Arduino.QH_bit_operator = function (block) {
        let num1 = Blockly.Arduino.valueToCode(this, 'NUM1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let num2 = Blockly.Arduino.valueToCode(this, 'NUM2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let op = this.getFieldValue('OP');

        let code = num1 + op +num2;
        return [code, Blockly.Arduino.ORDER_NONE];
    };
    //约束
    Blockly.Arduino.QH_constrain = function (block) {
        let min = Blockly.Arduino.valueToCode(this, 'MIN',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let max = Blockly.Arduino.valueToCode(this, 'MAX',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        name = name.replace(/\"/g,'');

        let code = 'constrain('+name+', '+min+', '+max+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    //映射
    Blockly.Arduino.QH_map = function (block) {
        let min1 = Blockly.Arduino.valueToCode(this, 'MIN1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let max1 = Blockly.Arduino.valueToCode(this, 'MAX1',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let min2 = Blockly.Arduino.valueToCode(this, 'MIN2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let max2 = Blockly.Arduino.valueToCode(this, 'MAX2',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        let name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||'0' ;
        name = name.replace(/\"/g,'');

        let code = 'map('+name+', '+min1+', '+max1+', '+min2+', '+max2+')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;