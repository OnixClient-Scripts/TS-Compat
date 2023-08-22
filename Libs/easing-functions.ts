/** @noSelfInFile */

///**
// * FROM: https://github.com/ai/easings.net/blob/master/src/easings/easingsFunctions.ts
// */
//let a = 0;

//type EasingFunction = (progress: number) => number;

//interface EasingDictionary {
//  [easing: string]: EasingFunction;
//}

//const pow = (this: void, x: number, y: number) => Math.pow(x, y);
//const sqrt = math.sqrt;
//const sin = math.sin;
//const cos = math.cos;
//const PI = Math.PI;
//const c1 = 1.70158;
//const c2 = c1 * 1.525;
//const c3 = c1 + 1;
//const c4 = (2 * PI) / 3;
//const c5 = (2 * PI) / 4.5;

//const bounceOut: EasingFunction = function (x) {
//  const n1 = 7.5625;
//  const d1 = 2.75;

//  if (x < 1 / d1) {
//    return n1 * x * x;
//  } else if (x < 2 / d1) {
//    return n1 * (x -= 1.5 / d1) * x + 0.75;
//  } else if (x < 2.5 / d1) {
//    return n1 * (x -= 2.25 / d1) * x + 0.9375;
//  } else {
//    return n1 * (x -= 2.625 / d1) * x + 0.984375;
//  }
//};

//const easingsFunctions: EasingDictionary = {
//  linear: (x) => x,
//  easeInQuad: (x) => x * x,
//  easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
//  easeInOutQuad: (x) => (x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2),
//  easeInCubic: (x) => x * x * x,
//  easeOutCubic: (x) => 1 - pow(1 - x, 3),
//  easeInOutCubic: (x) => (x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2),
//  easeInQuart: (x) => x * x * x * x,
//  easeOutQuart: (x) => 1 - pow(1 - x, 4),
//  easeInOutQuart: (x) => (x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2),
//  easeInQuint: (x) => x * x * x * x * x,
//  easeOutQuint: (x) => 1 - pow(1 - x, 5),
//  easeInOutQuint: (x) => (x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2),
//  easeInSine: (x) => 1 - cos((x * PI) / 2),
//  easeOutSine: (x) => sin((x * PI) / 2),
//  easeInOutSine: (x) => -(cos(PI * x) - 1) / 2,
//  easeInExpo: (x) => (x === 0 ? 0 : pow(2, 10 * x - 10)),
//  easeOutExpo: (x) => (x === 1 ? 1 : 1 - pow(2, -10 * x)),
//  easeInOutExpo: (x) =>
//    x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2,
//  easeInCirc: (x) => 1 - sqrt(1 - pow(x, 2)),
//  easeOutCirc: (x) => sqrt(1 - pow(x - 1, 2)),
//  easeInOutCirc: (x) => (x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2),
//  easeInBack: (x) => c3 * x * x * x - c1 * x * x,
//  easeOutBack: (x) => 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2),
//  easeInOutBack: (x) =>
//    x < 0.5
//      ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
//      : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
//  easeInElastic: (x) => (x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)),
//  easeOutElastic: (x) => (x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1),
//  easeInOutElastic: (x) =>
//    x === 0
//      ? 0
//      : x === 1
//      ? 1
//      : x < 0.5
//      ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
//      : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1,
//  easeInBounce: (x) => 1 - bounceOut(1 - x),
//  easeOutBounce: (x) => bounceOut(x),
//  easeInOutBounce: (x) => (x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2),
//};

type EasingFunction = (progress: number) => number;

interface EasingDictionary {
	[easing: string]: EasingFunction;
}

const pow = (x: number, y: number) => x ** y;
const sqrt = math.sqrt;
const sin = math.sin;
const cos = math.cos;
const PI = Math.PI;
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = (2 * PI) / 3;
const c5 = (2 * PI) / 4.5;

const bounceOut: EasingFunction = function (x) {
	const n1 = 7.5625;
	const d1 = 2.75;

	if (x < 1 / d1) {
		return n1 * x * x;
	} else if (x < 2 / d1) {
		return n1 * (x -= 1.5 / d1) * x + 0.75;
	} else if (x < 2.5 / d1) {
		return n1 * (x -= 2.25 / d1) * x + 0.9375;
	} else {
		return n1 * (x -= 2.625 / d1) * x + 0.984375;
	}
};

/**
 * SOURCE: https://github.com/ai/easings.net/blob/master/src/easings/easingsFunctions.ts
 */
const easingsFunctions /*: EasingDictionary*/ = {
	linear: (x: number) => x,
	easeInQuad: function (x: number) {
		return x * x;
	},
	easeOutQuad: function (x: number) {
		return 1 - (1 - x) * (1 - x);
	},
	easeInOutQuad: function (x: number) {
		return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
	},
	easeInCubic: function (x: number) {
		return x * x * x;
	},
	easeOutCubic: function (x: number) {
		return 1 - pow(1 - x, 3);
	},
	easeInOutCubic: function (x: number) {
		return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
	},
	easeInQuart: function (x: number) {
		return x * x * x * x;
	},
	easeOutQuart: function (x: number) {
		return 1 - pow(1 - x, 4);
	},
	easeInOutQuart: function (x: number) {
		return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
	},
	easeInQuint: function (x: number) {
		return x * x * x * x * x;
	},
	easeOutQuint: function (x: number) {
		return 1 - pow(1 - x, 5);
	},
	easeInOutQuint: function (x: number) {
		return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
	},
	easeInSine: function (x: number) {
		return 1 - cos((x * PI) / 2);
	},
	easeOutSine: function (x: number) {
		return sin((x * PI) / 2);
	},
	easeInOutSine: function (x: number) {
		return -(cos(PI * x) - 1) / 2;
	},
	easeInExpo: function (x: number) {
		return x === 0 ? 0 : pow(2, 10 * x - 10);
	},
	easeOutExpo: function (x: number) {
		return x === 1 ? 1 : 1 - pow(2, -10 * x);
	},
	easeInOutExpo: function (x: number) {
		return x === 0
			? 0
			: x === 1
			? 1
			: x < 0.5
			? pow(2, 20 * x - 10) / 2
			: (2 - pow(2, -20 * x + 10)) / 2;
	},
	easeInCirc: function (x: number) {
		return 1 - sqrt(1 - pow(x, 2));
	},
	easeOutCirc: function (x: number) {
		return sqrt(1 - pow(x - 1, 2));
	},
	easeInOutCirc: function (x: number) {
		return x < 0.5
			? (1 - sqrt(1 - pow(2 * x, 2))) / 2
			: (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
	},
	easeInBack: function (x: number) {
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: function (x: number) {
		return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
	},
	easeInOutBack: function (x: number) {
		return x < 0.5
			? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
			: (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
	},
	easeInElastic: function (x: number) {
		return x === 0
			? 0
			: x === 1
			? 1
			: -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
	},
	easeOutElastic: function (x: number) {
		return x === 0
			? 0
			: x === 1
			? 1
			: pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
	},
	easeInOutElastic: function (x: number) {
		return x === 0
			? 0
			: x === 1
			? 1
			: x < 0.5
			? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
			: (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
	},
	easeInBounce: function (x: number) {
		return 1 - bounceOut(1 - x);
	},
	easeOutBounce: bounceOut,
	easeInOutBounce: function (x: number) {
		return x < 0.5
			? (1 - bounceOut(1 - 2 * x)) / 2
			: (1 + bounceOut(2 * x - 1)) / 2;
	},
} as const;

function interpolate(a: number, b: number, time: number, func: EasingFunction | keyof typeof easingsFunctions): number {
  if (typeof func === "string") func = easingsFunctions[func]
  return a + (b - a) * func(time)
}
