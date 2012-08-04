/**
 * multifile optomization script
 */
// ({
// 	appDir: "source/",
// 	baseUrl: "./",
// 	dir: "build",
// 	modules: [{
// 		name: "main",
// 		include: ["test", "requires"]
// 	}],
// 	wrap: {
// 		startFile: "fragments/start.frag",
// 		endFile: "fragments/end.frag"
// 	},
// 	keepBuildDir: false,
// 	locale: "en-us",
// 	optimize: "uglify",
// 	uglify: {
// 		quote_keys: true,
// 		except: []
// 	},
// 	removeCombined: true,
// 	findNestedDependencies: true,
// 	optimizeCss: "standard",
// 	inlineText: true,
// 	useStrict: true,
// 	skipModuleInsertion: true,
// })
/**
 * single file optomization script
 */
({
	baseUrl: "./",
	name: "game",
	include: ["js/draw","js/map","js/mainmenu","js/update"],
	out: "build/app.js",
	keepBuildDir: false,
	locale: "en-us",
	optimize: "uglify",
	uglify: {
		quote_keys: true,
		except: []
	},
	wrap: {
		start: "(function(window, undefined) {",
		end: "fragments/end.frag"
	},
	findNestedDependencies: true,
	optimizeCss: "standard",
	inlineText: true,
	useStrict: true,
	skipModuleInsertion: true,
})