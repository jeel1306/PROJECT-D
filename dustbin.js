class dustbin
{
    constructor(x,y)
    {
        this.x=x
        this.y=y
        this.dustbinWidth=200
        this.dustdinHeight=100
        this.wallThickness=20
        this.angle=0
    

   this.bottonBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight,this.wallThickness,{isSatic:true})
   this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
   Matter.Body.setAngle(this.leftWallBody, this.angle);
        
   this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight+20,this.wallThickness,this.innerHeight,{isStatic:true})
Matter.Body.setAngle(this.rightWallBody,this.angle);
   World.add(world,this.bottomBody)
   World.add(world,this.leftBody)
   World.add(world,this.rightBody)
    }
   display()
    {
        varPosBottom=this.bottonBodyPosition;
        varPosLeft=this.leftBodyPosition;
        varPosRight=this.rightBodyPosition;

        push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()
            
            push()
                translate(posRight.x,posRight.y);
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                stroke(255)
               rotate(this.angle)
            rect(0,0,this.wallThickness,this.dustdinHeight);
            pop()

            push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }



}