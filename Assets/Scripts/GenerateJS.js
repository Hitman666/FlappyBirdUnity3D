﻿#pragma strict

var rocks : GameObject;
var score :int = 0;

function Start () {
	InvokeRepeating("CreateObstacle", 1f, 1.5f);
}

function CreateObstacle()
{
	Instantiate(rocks);
	score++;
}

function OnGUI () 
{
	GUI.color = Color.black;
	GUILayout.Label(" Score: " + score.ToString());
}