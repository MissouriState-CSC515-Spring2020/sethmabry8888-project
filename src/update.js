import format from 'date-fns/format';

var span = document.querySelector('#time-now');
var hello = document.querySelector('#hello');

export default function update() {
	hello.textContent = "Hello World";
	span.textContent = format(new Date(), 'h:mm:ssa');
	setTimeout(update, 1000);
}