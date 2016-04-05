/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady',
		'jquery':'../lib/jquery/jquery'
    },
	
    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
	
});

define(['domReady','angular','jquery'],function(){
	
	var html = $('#html');
	var css = $('#css');
	var javascript = $('#javascript');
	
	
	
	var run = $('#run');
	var loader = $('.preloader');
	
	
	var iframe = document.getElementById('pad').contentWindow.document;
	
	run.on('click',function(){
		
		var h = html.val()+'';
		
		var style = document.createElement("style");
		style.innerHTML = css.val();
		var script = document.createElement("script");
		script.innerHTML =javascript.val();
		
		
		iframe.head.innerHTML ='';
		iframe.body.innerHTML ='';
		
		
		iframe.body.innerHTML = h;
		iframe.head.appendChild(style);
		iframe.body.appendChild(script);
		
		
	});
	
	
	
	
});
