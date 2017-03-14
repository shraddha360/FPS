using UnityEngine;

public class FpsController : MonoBehaviour {


public float Speed = 1f;
CharacterController player;

float MovF;
float MovR;
float RotF;
float RotR;
	float MovL;
	float MovRi;

// Use this for initialization
void Start () {
	player = this.GetComponent<CharacterController> ();
}

// Update is called once per frame
void Update () {
		
	MovF = Input.GetAxis ("Vertical") * Speed;
	MovR = Input.GetAxis ("Horizontal") * Speed;
	Vector3 movement = new Vector3 (MovF, MovR, 0);
	movement = transform.rotation * movement;
	player.Move (movement * Time.deltaTime);


	RotF = Input.GetAxis ("Mouse X") * Speed;
	RotR = Input.GetAxis ("Mouse Y") * Speed;
	Vector3 rotation = new Vector3 (RotF, RotR, 0);
	rotation = transform.rotation * rotation;
	player.Move (rotation * Time.deltaTime);


		MovL = Input.GetAxis ("Left") * Speed;
		MovRi = Input.GetAxis ("Right") * Speed;
		Vector3 move = new Vector3 (MovL, MovRi, 0);
		movement = transform.rotation * movement;
		player.Move (move * Time.deltaTime);

}
}
