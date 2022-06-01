var inputElement,sliderElement,ay
var txts=[]
let colors
let colors1 = "ff0000-ff8200-ffc100-ffeaae".split("-").map(tx=>"#"+tx)
let colors2 = "41337a-6ea4bf-c2efeb-ecfee8".split("-").map(tx=>"#"+tx)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement =createInput()
	
	inputElement.position(50,50)
	inputElement.input(userInput)
	
	
	sliderElement= createSlider(-0.3,0.3,0,0.08)
	sliderElement.input(setGravity)
	sliderElement.position(50,100)
	var ay=sliderElement.value()
}
function setGravity(){
	ay = this.value()
}
function userInput(){
	txts.push({
		x: width/2,
		y: height/2,	
		vx: random(-1,1),
		vy: 1,
		color: random(colors1),
		text: this.value()
	})
	this.value('')
	// print(txts)
}
function draw() {
	background(0);
	fill(255)
	textSize(50)
	for(var i=0;i<txts.length;i++){
		let txt = txts[i]
		fill(txt.color)
		text(txt.text,txt.x,txt.y)
		txt.x+=txt.vx
		txt.y+=txt.vy
		txt.vy+=ay
		txt.vx*=0.999
		txt.vy*=0.999
		if(txt.y>height){
			txt.vy=-abs(txt.vy)
		}
	}
}