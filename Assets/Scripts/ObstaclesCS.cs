﻿using UnityEngine;
using System.Collections;

public class ObstaclesCS : MonoBehaviour {

	public Vector2 velocity = new Vector2(-4, 0);
	public float range = 9;

	// Use this for initialization
	void Start () {
		rigidbody2D.velocity = velocity;
		transform.position = new Vector3(transform.position.x, transform.position.y - range * Random.value, transform.position.z);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}