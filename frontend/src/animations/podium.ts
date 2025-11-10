import {Variants} from "framer-motion";

const firstPlaceVariants: Variants = {
	hidden: {
		scaleY: 0,
		opacity: 0,
	},
	visible: {
		scaleY: 1,
		opacity: 1,
		transition: {
			scaleY: {
				type: "spring" as const,
				damping: 15,
				stiffness: 100,
				duration: 0.5,
				delay: 0,
			},
			opacity: {
				duration: 0.2,
				delay: 0,
			},
		},
	},
};

const secondPlaceVariants: Variants = {
	hidden: {
		scaleY: 0,
		opacity: 0,
	},
	visible: {
		scaleY: 1,
		opacity: 1,
		transition: {
			scaleY: {
				type: "spring" as const,
				damping: 15,
				stiffness: 100,
				duration: 0.5,
				delay: 0.1,
			},
			opacity: {
				duration: 0.2,
				delay: 0.1,
			},
		},
	},
};

const thirdPlaceVariants: Variants = {
	hidden: {
		scaleY: 0,
		opacity: 0,
	},
	visible: {
		scaleY: 1,
		opacity: 1,
		transition: {
			scaleY: {
				type: "spring" as const,
				damping: 15,
				stiffness: 100,
				duration: 0.5,
				delay: 0.2,
			},
			opacity: {
				duration: 0.2,
				delay: 0.2,
			},
		},
	},
};

const firstNumberVariants: Variants = {
	hidden: {
		y: 50,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 0.5,
		transition: {
			duration: 0.2,
			ease: "easeOut" as const,
			delay: 0.1,
		},
	},
};

const secondNumberVariants: Variants = {
	hidden: {
		y: 40,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 0.5,
		transition: {
			duration: 0.2,
			ease: "easeOut" as const,
			delay: 0.2,
		},
	},
};

const thirdNumberVariants: Variants = {
	hidden: {
		y: 30,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 0.5,
		transition: {
			duration: 0.2,
			ease: "easeOut" as const,
			delay: 0.3,
		},
	},
};

const firstUserVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		y: 100,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut" as const,
			delay: 0.1,
		},
	},
};

const secondUserVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		y: 100,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut" as const,
			delay: 0.2,
		},
	},
};

const thirdUserVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		y: 100,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut" as const,
			delay: 0.2,
		},
	},
};

export {
	firstPlaceVariants,
	secondPlaceVariants,
	thirdPlaceVariants,
	firstNumberVariants,
	secondNumberVariants,
	thirdNumberVariants,
	firstUserVariants,
	secondUserVariants,
	thirdUserVariants,
};
