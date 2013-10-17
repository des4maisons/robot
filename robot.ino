int rdir=12;
int ldir=13;
int rbrk=9;
int lbrk=8;
int rpwm=3;
int lpwm=11;
char direc;

void setup(){
  
  pinMode(ldir, OUTPUT);
  pinMode(rdir, OUTPUT);
  pinMode(lbrk, OUTPUT);
  pinMode(rbrk, OUTPUT);
  pinMode(lpwm, OUTPUT);
  pinMode(rpwm, OUTPUT);
  Serial.begin(9600);
  
}

void loop(){
  
  direc= Serial.read();
  
  switch (direc){
    case 'f':
    digitalWrite(ldir, HIGH);
    digitalWrite(rdir, HIGH);
    digitalWrite(lpwm, HIGH);
    digitalWrite(rpwm, HIGH);
    digitalWrite(lbrk, LOW);
    digitalWrite(rbrk, LOW);
    break;
    
    case 'l': 
    digitalWrite(ldir, LOW);
    digitalWrite(rdir, HIGH);
    digitalWrite(lpwm, HIGH);
    digitalWrite(rpwm, HIGH);
    digitalWrite(lbrk, LOW);
    digitalWrite(rbrk, LOW);
    break;
    
    case 'r':
    digitalWrite(ldir, HIGH);
    digitalWrite(rdir, LOW);
    digitalWrite(lpwm, HIGH);
    digitalWrite(rpwm, HIGH);
    digitalWrite(lbrk, LOW);
    digitalWrite(rbrk, LOW);
    break;
    
    case 'b':
    digitalWrite(ldir, LOW);
    digitalWrite(rdir, LOW);
    digitalWrite(lpwm, HIGH);
    digitalWrite(rpwm, HIGH);
    digitalWrite(lbrk, LOW);
    digitalWrite(rbrk, LOW);
    break;
    
    case 's':
    digitalWrite(ldir, LOW);
    digitalWrite(rdir, LOW);
    digitalWrite(lpwm, LOW);
    digitalWrite(rpwm, LOW);
    digitalWrite(lbrk, HIGH);
    digitalWrite(rbrk, HIGH);
    break;
  }
}
