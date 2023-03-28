export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/style.css","images/April2022Timetable (1).jpeg:Zone.Identifier","images/April2022Timetable.jpeg","images/Eclipse-1s-200px.gif:Zone.Identifier","images/WhatsApp Image 2022-03-30 at 14.24.35.jpeg:Zone.Identifier","images/compressjpeg.zip:Zone.Identifier","images/donatebanner-min.jpg:Zone.Identifier","images/donatebanner.jpg","images/donatebanner.jpg:Zone.Identifier","images/donatebanner2.jpg","images/donatebanner2.jpg:Zone.Identifier","images/donatebanner3.jpg","images/donatebanner3.jpg:Zone.Identifier","images/fabric.png","images/fabric.png:Zone.Identifier","images/fabrictiled.jpg","images/fabrictiled.jpg:Zone.Identifier","images/front1-min.jpg:Zone.Identifier","images/front1.jpg","images/front1.jpg:Zone.Identifier","images/front2-min.jpg:Zone.Identifier","images/front2.jpg","images/front2.jpg:Zone.Identifier","images/front3-min.jpg:Zone.Identifier","images/front3.jpg","images/front3.jpg:Zone.Identifier","images/hero.jpg","images/hero.jpg:Zone.Identifier","images/hero2.jpg","images/hero2.jpg:Zone.Identifier","images/hero3-min.jpg","images/hero3-min.jpg:Zone.Identifier","images/hero3.jpg","images/hero3.jpg:Zone.Identifier","images/loading.gif","images/logo-white.png","images/logo-white.png:Zone.Identifier","images/orig/donatebanner.jpg","images/orig/front1.jpg","images/orig/front2.jpg","images/orig/front3.jpg","images/orig/hero3.jpg","images/slider-arow-left.png","images/slider-arow-right.png","js/script.js","plugins/animate/animate.css","plugins/bootstrap/bootstrap.min.css","plugins/bootstrap/bootstrap.min.js","plugins/filterizr/jquery.filterizr.min.js","plugins/google-map/gmap.js","plugins/jquery.min.js","plugins/jquery.vide.js","plugins/magnific-popup/jquery.magnific-popup.min.js","plugins/magnific-popup/magnific-popup.css","plugins/modernizr.min.js","plugins/parallax.min.js","plugins/slick/ajax-loader.gif","plugins/slick/fonts/slick.eot","plugins/slick/fonts/slick.svg","plugins/slick/fonts/slick.ttf","plugins/slick/fonts/slick.woff","plugins/slick/slick.css","plugins/slick/slick.min.js","plugins/themefisher-fonts/fonts/themefisher-font.eot","plugins/themefisher-fonts/fonts/themefisher-font.svg","plugins/themefisher-fonts/fonts/themefisher-font.ttf","plugins/themefisher-fonts/fonts/themefisher-font.woff","plugins/themefisher-fonts/themefisher-fonts.css"]),
	mimeTypes: {".css":"text/css",".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png",".gif":"image/gif",".js":"application/javascript",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.df14c26d.js","imports":["_app/immutable/entry/start.df14c26d.js","_app/immutable/chunks/index.d7e662d8.js","_app/immutable/chunks/singletons.ac94a14d.js","_app/immutable/chunks/paths.4ffe82a3.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.54a56a9f.js","imports":["_app/immutable/entry/app.54a56a9f.js","_app/immutable/chunks/index.d7e662d8.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/times",
				pattern: /^\/times\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
