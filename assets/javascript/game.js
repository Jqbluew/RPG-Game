//Execute this code when DOM is fully loaded
$(document).ready(function () {
	var characters = { 
		"johnSnow": {
			name: "JohnSnow",
			health: 120,
			attack: 8,
			imageUrl: "assets/images/johnSnow.jpeg",
			enemyAttackBack: 15
		},
		"aryaStark":{
		name: "aryaStark",
		health: 100,
		attack: 814,
		imageUrl: "assets/images/aryaStark.jpeg",
		enemyAttackBack: 5
		},
		"jamieLannister":{
		name: "jamieLannister",
		health: 150,
		attack: 8,
		imageUrl: "assets/images/jamieLannister.jpeg",
		enemyAttackBack: 5
		},
		"motherofDragons":{
		name: "motherofDragons",
		health: 180,
		attack: 7,
		imageUrl: "assets/images/motherofDragons.jpeg",
		enemyAttackBack: 25
		}
	};
	console.log(characters);
	// This function will render a character card to the page.
	//This character rendered, and the area they are rendered to.
	var renderOne = function(character, renderArea){
		var charDiv = $("<div class='character' data-name'" + character.name + "'> ");
		var charName = $("<div class='character-name'>").text(character.name);
		var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
		var charHealth = $("<div class='character-health'>").text(character.health);
		charDiv.append(charName).append(charImage).append(charHealth);
		$(renderArea).append(charDiv);
	}

	//This function handles the rendering of characters based on which area they are to be rendered in
	var renderCharacters = function(charObj, areaRender){
		if (areaRender === "#characters-section") {
			$(areaRender).empty();
			for (var key in charObj) {
				if(charObj.hasOwnProperty(key)){
					renderOne(charObj[key], areaRender);
				}
			}
		}
	}

	//Render all characters to the page when the game starts.
	renderCharacters(characters, "#characters-section");
});