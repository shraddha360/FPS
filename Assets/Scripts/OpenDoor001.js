#pragma strict

import UnityEngine.UI;

var  TextDisplay : GameObject;
var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TheDoor : GameObject;

function Update(){
 TheDistance = PlayerCasting.DistanceFromTarget;
if (TheDistance <= 3)
{  
if (Input.GetAxis("Mouse ScrollWheel") < 0f ){
 //Debug.Log("Function");
  OpenTheDoor();

  //}
 }
 if (Input.GetAxis("Mouse ScrollWheel") > 0f ){
 Debug.Log("Left");
  OpenTheDoorLeft();

  //}
 }
}
}



function OnMouseOver(){

if (TheDistance <= 3){
  TextDisplay.GetComponent.<Text>().text = "Scroll To Open";
 //OpenTheDoor();
  }

  }

function OpenTheDoor(){
Debug.Log("Function");
//TheDoor.SetActive(false);

TheDoor.gameObject.transform.Rotate(0, 5, 0);
//TheDoor.transform.Translate(3*Time.deltaTime,0,0);
//TheDoor.GetComponent(Animator).enabled=true;
//yield WaitForSeconds(3);

//TheDoor.gameObject.transform.Rotate(0, 0, 0);
//TheDoor.GetComponent(Animator).enabled=false;
//yield WaitForSeconds(5);


 //TheDoor.GetComponent(Animator).enabled=true;
//yield WaitForSeconds(1);

// TheDoor.GetComponent(Animator).enabled=false;

}

function OpenTheDoorLeft(){


TheDoor.gameObject.transform.Rotate(0, -5, 0);


}