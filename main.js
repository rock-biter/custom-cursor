import './style.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/600.css'
import { gsap } from 'gsap'

const cursor = document.getElementById('cursor')
const shadow = document.getElementById('cursor-shadow')
const coords = {
	x: 0,
	y: 0,
}
const prevCoords = {
	x: 0,
	y: 0,
}

window.addEventListener('mousemove', function (e) {
	// console.log(e.clientX, e.clientY)
	coords.x = e.clientX
	coords.y = e.clientY
})

function update() {
	cursor.style.top = `${coords.y}px`
	cursor.style.left = `${coords.x}px`

	const y = lerp(prevCoords.y, coords.y, 0.15)
	const x = lerp(prevCoords.x, coords.x, 0.15)

	shadow.style.top = `${y}px`
	shadow.style.left = `${x}px`

	prevCoords.x = x
	prevCoords.y = y

	requestAnimationFrame(update)
}

requestAnimationFrame(update)

function lerp(a, b, t) {
	return a * (1 - t) + b * t
}

const tween = gsap.to('#counter', {
	innerText: '728',
	duration: 1.5,
	ease: 'power2.out',
	snap: {
		innerText: 5,
	},
})
