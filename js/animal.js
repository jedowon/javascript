function Animal(name)
{
	this.name = name;
}
Animal.prototype.Push = function()
{
	document.writeln("내 이름은 "+this.name+"야~");
}
var monkey = new Animal("원숭이");
var bird = new Animal("새");
monkey.Push();
bird.Push();