import './style.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/600.css'
import { gsap } from 'gsap'

const win = {
	shape: {
		x: window.screenLeft,
		y: window.screenTop,
		w: window.innerWidth,
		h: window.innerHeight,
		dy: window.outerHeight - window.innerHeight,
	},
	velocity: {
		x: 0,
		y: 0,
	},
}

function updateWin() {
	win.velocity.x += (win.shape.x - window.screenLeft) * 1.0
	win.velocity.y += (win.shape.y - window.screenTop) * 1.1

	win.velocity.x *= 0.95
	win.velocity.y *= 0.95

	win.shape = {
		x: window.screenLeft,
		y: window.screenTop,
		w: window.innerWidth,
		h: window.innerHeight,
		dy: window.outerHeight - window.innerHeight,
	}
}

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
	updateWin()

	gsap.to(['.logo', '.menu', 'h1', 'img', '#counter', 'p:first-of-type'], {
		x: win.velocity.x,
		y: win.velocity.y,
		duration: 1.5,
		ease: 'circ',
		stagger: {
			amount: 0.05,
			grid: 'auto',
		},
	})

	cursor.style.top = `${coords.y}px`
	cursor.style.left = `${coords.x}px`

	const y = lerp(prevCoords.y, coords.y, 0.15)
	const x = lerp(prevCoords.x, coords.x, 0.15)

	shadow.style.top = `${y}px`
	shadow.style.left = `${x}px`

	prevCoords.x = x
	prevCoords.y = y

	// console.log(win.velocity.x, win.velocity.y)

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
