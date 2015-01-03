#pragma strict

var jumpForce : Vector2  =  Vector2(0, 300);

function Update () {
	if (Input.GetKeyUp("space") || Input.GetMouseButtonDown(0))
	{
		rigidbody2D.velocity = Vector2.zero;
		rigidbody2D.AddForce(jumpForce);
	}
}