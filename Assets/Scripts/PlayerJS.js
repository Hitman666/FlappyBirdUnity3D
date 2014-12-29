#pragma strict

var jumpForce : Vector2  =  Vector2(0, 300);

function Update () {
	if (Input.GetKeyUp("space"))
	{
		rigidbody2D.velocity = Vector2.zero;
		rigidbody2D.AddForce(jumpForce);
	}
}