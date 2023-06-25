function start_game(){
	name = prompt("User name");
	
	sessionStorage.setItem("username", name);
	
	loadpage("./game_mode_1.html");
}
function start_game2(){
	name = prompt("User name");
	
	sessionStorage.setItem("username", name);
	
	loadpage("./game_mode_2.html");
}

function exit (){
	loadpage("../index.html");
}

function load (){
	loadpage("./html/load.html");
}

function exit_menu_mode (){
	loadpage("./menu_modes.html");
}

function mode1 (){
	loadpage("./mode_1.html");
}
function mode2 (){
	loadpage("./mode_2.html");
}

function ranking(){
	loadpage("./html/ranking.html");
}

function ranking1(){
	loadpage("./ranking_mode_1.html");
}

function ranking2(){
	loadpage("./ranking_mode_2.html");
}

function options(){
	loadpage("./options_mode_1.html");
}

function options2(){
	loadpage("./options_mode_2.html");
}

function menu_mode(){
    loadpage ("./html/menu_modes.html")
}
