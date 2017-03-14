#pragma strict

var Flash : GameObject;

function Update(){
if(Input.GetButtonDown("Fire1")){
var gunsound : AudioSource = GetComponent.<AudioSource>();
gunsound.Play();
Flash.SetActive(true);
MuzzleOff();

GetComponent.<Animation>().Play("GunShot");

   }
 }

function MuzzleOff(){
 yield WaitForSeconds(0.1);
 Flash.SetActive(false);
 }