var UpCurs : GameObject;
var DownCurs : GameObject;
var LeftCurs : GameObject;
var RightCurs : GameObject;
 

function Update(){
//if(GloabalAmmo.LoadedAmmo >= 1)
 if (Input.GetButtonDown("Fire1")){
//   UpCurs.GetComponnet("Animator").enabled=true;
//   DownCurs.GetComponnet("Animator").enabled=true;
//   LeftCurs.GetComponnet("Animator").enabled=true;
//   RightCurs.GetComponnet("Animator").enabled=true;
   WaitingAnim();
   
 }

}
  function WaitingAnim()
  {
  yield WaitForSeconds(0.1);
//   UpCurs.GetComponnet("Animator").enabled=false;
//   DownCurs.GetComponnet("Animator").enabled=false;
//   LeftCurs.GetComponnet("Animator").enabled=false;
//   RightCurs.GetComponnet("Animator").enabled=false;
}
