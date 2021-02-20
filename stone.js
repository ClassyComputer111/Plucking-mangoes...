class Stone{
	constructor(x,y,diametre)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			density:1.2
			}
		this.image=loadImage("images/stone.png")
		this.diametre = diametre
		this.body=Bodies.circle(this.x, this.y, diametre, options)
		World.add(world, this.body);
	}

	display()
	{
		push()
		translate(this.body.position.x, this.body.position.y);
		// rectMode(CENTER);
		imageMode(CENTER);
		image(this.image, 0,0,this.diametre)
		pop()
 }
}