
// databases

const Subgroups_Array = [
{summary: "The Ancient Council existed in the ancient past. being created before civilization was founded. Together, the council defined the culture of the ancient world and presided over grand tournaments", title: "Ancient Council", image:"images/CouncilWars.png"},
{summary: "The Runic Warriors existed in the ancient past. Being dissatisfied with the way civilization functioned, they fought to create a better world for all, but hopes to build a better world can always leave weaknesses to corruption of purpose", title: "Runic Warriors", image:"images/RanulTraitors.jpeg" },
{summary: "The Ancient Monsters were created to aid in the cause the Runic Warriors fought for eventually being corrupted and killed by those seeking power", title: "Ancient Monsters", image:"images/AncientMonsters.png"},
{summary: "The Lost Sages were winners of the Grand Tournaments started by the Ancient Council", title: "Lost Sages", image:"images/LostSages.jpeg"},
{summary: "The Ancient Objects were created to teach the early civilization about ancient magic, but were later corrupted by people seeking power. In the present time the objects are hidden away in secret locations", title: "Ancient Objects", image:"images/SacredObjects.png"},
{summary: "The New Sages were spawned by the ancient conflict between the Runic Warriors and the Ancient Council. When the sages had awoken in the present time they were easily captured by the forces of Evil", title: "New Sages", image:"images/NewGenerations.png"}
];

const Elements_Array = [
{summary: "The Fire Element is charactirized by constant work and what is lost to acheive the needed results", title: "Fire Element", color:"red"},
{summary: "The Water Element is charactirized by freedom and the requirements for freedom to be acheived", title: "Water Element", color:"blue"},
{summary: "The Forest Element is charactirized by the connections we make make and break with those around us", title: "Forest Element", color:"green"},
{summary: "The Wind Element is charactirized by the pain and suffering that we do not see in plain sight", title: "Wind Element", color:"gray"},
{summary: "The Sand Element is charactirized by the small bites time takes on resolve and why nothing can last", title: "Sand Element", color:"yellow"},
{summary: "The Ice Element is charactirized by loneliness we feel inside ourselves as well as our own self doubts", title: "Ice Element", color:"aqua"},
{summary: "The Dream Element is charactirized by the wishes we have and the harshness of reality amidst the fantasy", title: "Dream Element", color:"navy"},
{summary: "The Poison Element is charactirized by slow decay of everything around us as well as our own inner being", title: "Poison Element", color:"purple"},
{summary: "The Shadow Element is charactirized by wills outside of our control that governs our action to meet their own ends", title: "Shadow Element", color:"darkslateblue"},
{summary: "The Psychic Element is charactirized by the deepness of the mind and the merciless tourtures that happen within", title: "Psychic Element", color:"pink"},
{summary: "The Darkness Element is charactirized by the fears we feel in physical form and the dangers they pose", title: "Darkness Element", color:"black"},
{summary: "The Demon Element is charactirized by the judgement we pass as well as the assumptions among perceptions", title: "Demon Element", color:"darkred"}
];

const Rune_Array = [

// Fire Province Info

{summary: "In the Volcanic Providence of Fire, Sherol Frosna resided over Tournaments relating to Fire before the Oralean War. During the war, Sherol went missing. Many battles in the series are related to her skills as a Weapon Smith in her book 'Weapon Smithing'"},
{summary: "In the Volcanic Providence of Fire, the [Runic Warrior of Fire] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Avadol Mining Factory's operations"},
{summary: "In the Volcanic Providence of Fire, the Ancient Monster was created by infusing organic life with Fire Element Energy. The Ancient Monster was used as the general in the Fire Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Fire"},
{summary: "In the Volcanic Providence of Fire, the [Lost Sage of Fire] was the 9th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Sherol went missing. Many battles in the series regarding the sage focus on the old repair shops before the province became known for their factories"},
{summary: "In the Volcanic Providence of Fire, the [Ancient object of Fire] was used to teach Fire and Draconic magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the volcanic Providence of Fire, the [New Sage of Fire] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to heart of the fiery peaks"},

// Water Province Info

{summary: "In the Providence of Water, Kori Unlani resided over Tournaments relating to Water before the Oralean War. During the war, Kori went missing. Many battles in the series are related to his skills with Water Flows in his book 'Essence Of Flow'"},
{summary: "In the Providence of Water, the [Runic Warrior of Water] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Coral Reefs in the shallow ocean"},
{summary: "In the Providence of Water, the Ancient Monster was created by infusing organic life with Water Element Energy. The Ancient Monster was used as the general in the Water Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Water"},
{summary: "In the Providence of Water, the [Lost Sage of Water] was the 1st winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Kori went missing. Many battles in the series regarding the sage focus on the abandoned dance hall in the middle of the deep ocean"},
{summary: "In the Providence of Water, the [Ancient object of Water] was used to teach Water and Corrosion magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Water, the [New Sage of Water] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to heart of the Jungle Islands"},

// Forest Province Info

{summary: "In the Providence of Forests, Elda Astritch resided over Tournaments relating to Forests before the Oralean War. During the war, Elda went missing. Many battles in the series are related to her skills with Flora in her book 'Protectors Of Flora'"},
{summary: "In the Providence of Forests, the [Runic Warrior of Forests] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Forest of Moving Trees"},
{summary: "In the Providence of Forests, the Ancient Monster was created by infusing organic life with Forests Element Energy. The Ancient Monster was used as the general in the Forest Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Forests"},
{summary: "In the Providence of Forests, the [Lost Sage of Forests] was the 3rd winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Elda went missing. Many battles in the series regarding the sage focus on the Canopy of Conola Town"},
{summary: "In the Providence of Forests, the [Ancient object of Forests] was used to teach Forest and Bug magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Forests, the [New Sage of Forests] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to heart of the Deepwood Caves"},

// Wind Province Info

{summary: "In the Providence of Wind, Aerith Zeldor resided over Tournaments relating to Wind before the Oralean War. During the war, Aerith went missing. Many battles in the series are related to her skills with different weapons in her book 'Modes of Combat'"},
{summary: "In the Providence of Wind, the [Runic Warrior of Wind] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Everstorm"},
{summary: "In the Providence of Wind, the Ancient Monster was created by infusing organic life with Wind Element Energy. The Ancient Monster was used as the general in the Wind Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Winds"},
{summary: "In the Providence of Wind, the [Lost Sage of Wind] was the 6th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Aerith went missing. Many battles in the series regarding the sage focus on the High Games Arena"},
{summary: "In the Providence of Wind, the [Ancient object of Wind] was used to teach Wind and Electric magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Wind, the [New Sage of Wind] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to Sky Temple"},

// Desert Province Info

{summary: "In the Providence of Sands, Drega Verona resided over Tournaments relating to Sands before the Oralean War. During the war, Drega went missing. Many battles in the series are related to her skills with Vibrations in her book 'Vibravos'"},
{summary: "In the Providence of Sands, the [Runic Warrior of Sands] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Quicksand Caverns"},
{summary: "In the Providence of Sands, the Ancient Monster was created by infusing organic life with Earth Element Energy. The Ancient Monster was used as the general in the Sand Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Sands"},
{summary: "In the Providence of Sands, the [Lost Sage of Sands] was the 7th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Drega went missing. Many battles in the series regarding the sage focus on the Drystone Mountains"},
{summary: "In the Providence of Sands, the [Ancient object of Sands] was used to teach Earth and Necro magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Sands, the [New Sage of Sands] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to the top of the Communications Tower"},

// Ice Province Info

{summary: "In the Providence of Ice, Chris Amelio resided over Tournaments relating to Ice before the Oralean War. During the war, Chris went missing. Many battles in the series are related to his skills with Survival in his book 'Survival Guide: The Collective Works'"},
{summary: "In the Providence of Ice, the [Runic Warrior of Ice] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Freezerburn Maze"},
{summary: "In the Providence of Ice, the Ancient Monster was created by infusing organic life with Ice Element Energy. The Ancient Monster was used as the general in the Ice Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Ice"},
{summary: "In the Providence of Ice, the [Lost Sage of Ice] was the 5th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Chris went missing. Many battles in the series regarding the sage focus on the reasearch at Norlit Inc."},
{summary: "In the Providence of Ice, the [Ancient object of Ice] was used to teach Ice and Nerval magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Ice, the [New Sage of Ice] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to Bitterchill Mansion"},

// Dream Province Info

{summary: "In the Providence of Dreams, Kilon Mawit resided over Tournaments relating to Dreams before the Oralean War. During the war, Kilon went missing. Many battles in the series are related to his book series: 'The adventures of Lori Grateheart'"},
{summary: "In the Providence of Dreams, the [Runic Warrior of Dreams] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Fogroot Caverns"},
{summary: "In the Providence of Dreams, the Ancient Monster was created by infusing organic life with Dream Element Energy. The Ancient Monster was used as the general in the Dream Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Dreams"},
{summary: "In the Providence of Dreams, the [Lost Sage of Dreams] was the 2nd winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Kilon went missing. Many battles in the series regarding the sage focus on Nemanthus Museum"},
{summary: "In the Providence of Dreams, the [Ancient object of Dreams] was used to teach Dream and Nerval magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Dreams, the [New Sage of Dreams] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to the Dreamcell"},

// Poison Province Info

{summary: "In the Providence of Poison, Dexter Aryth resided over Tournaments relating to Poison before the Oralean War. During the war, Dexter went missing. Many battles in the series are related to his skills with Animals in his book 'Tamer's Guide"},
{summary: "In the Providence of Poison, the [Runic Warrior of Poison] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Notingrawl Caverns"},
{summary: "In the Providence of Poison, the Ancient Monster was created by infusing organic life with Poison Element Energy. The Ancient Monster was used as the general in the Poison Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Poison"},
{summary: "In the Providence of Poison, the [Lost Sage of Poison] was the 4th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Dexter went missing. Many battles in the series regarding the sage focus on the gambling at Notingrawl Bar"},
{summary: "In the Providence of Poison, the [Ancient object of Poison] was used to teach Poison and Corrosion magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Poison, the [New Sage of Poison] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to Clearwater Factory"},

// Shadow Province Info

{summary: "In the Providence of Shadows, Zera Forwall resided over Tournaments relating to Shadows before the Oralean War. During the war, Zera went missing. Many battles in the series are related to her skills in chance in her book 'Probablistic Chance'"},
{summary: "In the Providence of Shadows, the [Runic Warrior of Shadows] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Slygate Catacombs"},
{summary: "In the Providence of Shadows, the Ancient Monster was created by infusing organic life with Shadow Element Energy. The Ancient Monster was used as the general in the Shadow Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Shadows"},
{summary: "In the Providence of Shadows, the [Lost Sage of Shadows] was the 8th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Zera went missing. Many battles in the series regarding the sage focus on Shardfall Watchtower"},
{summary: "In the Providence of Shadows, the [Ancient object of Shadows] was used to teach Shadow and Necro magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Shadows, the [New Sage of Shadows] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to The Under"},

// Psychic Province Info

{summary: "In the Providence of Psychics, Eyro Orado resided over Tournaments relating to Psychics before the Oralean War. During the war, Eyro went missing. Many battles in the series are related to his theories in his book 'Conspiracies of the Ages'"},
{summary: "In the Providence of Psychics, the [Runic Warrior of Psychic] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Psychonet"},
{summary: "In the Providence of Psychics, the Ancient Monster was created by infusing organic life with Psychic Element Energy. The Ancient Monster was used as the general in the Psychic Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Psychics"},
{summary: "In the Providence of Psychics, the [Lost Sage of Psychic] was the 11th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Eyro went missing. Many battles in the series regarding the sage focus on the Chepwick Town"},
{summary: "In the Providence of Psychics, the [Ancient object of Psychic] was used to teach Psychic and Electric magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Psychics, the [New Sage of Psychic] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to the Crystalline Internal Network"},

// Dark Province Info

{summary: "In the Providence of Darkness, Cinder Taroy resided over Tournaments relating to Darkness before the Oralean War. During the war, Cinder went missing. Many battles in the series are related to her skills with magic in her book 'Magical Inheritance'"},
{summary: "In the Providence of Darkness, the [Runic Warrior of Darkness] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Phobias Tower"},
{summary: "In the Providence of Darkness, the Ancient Monster was created by infusing organic life with Darkness Element Energy. The Ancient Monster was used as the general in the Darkness Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Darkness"},
{summary: "In the Providence of Darkness, the [Lost Sage of Darkness] was the 12th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Cinder went missing. Many battles in the series regarding the sage focus on the reasearch at Suciales la Acedemia"},
{summary: "In the Providence of Darkness, the [Ancient object of Darkness] was used to teach Ice and Nerval magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Darkness, the [New Sage of Darkness] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to Devos Castle"},

// Demon Province Info

{summary: "In the Providence of Demons, Justin Erasyth resided over Tournaments relating to Demons before the Oralean War. During the war, Justin went missing. Many battles in the series are related to his skills with Law in his book 'Files of the Court'"},
{summary: "In the Providence of Demons, the [Runic Warrior of Demons] fought in the Oralean War to create a better future for those living there. After their purpose was corrupted they were abandaned in the Old Railnet and were never found. Many battles in the series are related to the Scrame Caverns"},
{summary: "In the Providence of Demons, the Ancient Monster was created by infusing organic life with Demon Element Energy. The Ancient Monster was used as the general in the Demon Province during the Oralean War. after the war the Ancient Monster was corrupted and sacrificed to create the Dwellor of Demons"},
{summary: "In the Providence of Demons, the [Lost Sage of Demons] was the 10th winner of the tournaments set up by the Ancient Council, During the Oralean War he joined the fight after Justin went missing. Many battles in the series regarding the sage focus on Leviscus Courthouse"},
{summary: "In the Providence of Demons, the [Ancient object of Demons] was used to teach Demon and Draconic magic to the first peoples. In the Oralean War it was used to grant powers to those seeking it and was hidden away"},
{summary: "In the Providence of Demons, the [New Sage of Demons] was created in the aftermath of the Oralean War. Once the sage had awoken, they got captured and taken to Leviscus Prison"}
];

// this part of the code initializes the data for the bulk of the website's variables (it is only executed once)

document.getElementById("Individuals_Info").textContent = Rune_Array[0].summary;     // initialize Character info
document.getElementById("Element_Title").textContent = Elements_Array[0].title;      // initialize the element title
document.getElementById("Element_Info").textContent = Elements_Array[0].summary;     // initialize the element info
document.getElementById("Subgroups_Info").textContent = Subgroups_Array[0].summary;  // initialize the subgroup info
document.getElementById("Subgroups_Title").textContent = Subgroups_Array[0].title;   // initialize the subgroup title

document.getElementById("html").style.backgroundColor = Elements_Array[0].color;     // initialize the background color
document.getElementById("Element_Title").style.color = Elements_Array[0].color;      // initialize the element title

document.getElementById("Subgroups_Image").src = Subgroups_Array[0].image;           // initialize the subgroup image

// CalculateOutput() updates the data fields displayed for each field when an update to the dropdown lists are made

function CalculateOutput(){

	// get the values from the dropdown list

	var SubgroupID = Number(document.getElementById("Widgets_Subgroups").value);
	var ElementID = Number(document.getElementById("Widgets_Elements").value) - 1;
	var RuneID = 0;

	// index calculations

	RuneID = SubgroupID + (6 * ElementID) - 1;     
	SubgroupID = SubgroupID - 1;

	// update the webpage variables accordingly

	document.getElementById("Individuals_Info").textContent = Rune_Array[RuneID].summary;
	document.getElementById("Element_Title").textContent = Elements_Array[ElementID].title;
	document.getElementById("Element_Info").textContent = Elements_Array[ElementID].summary;
	document.getElementById("Subgroups_Info").textContent = Subgroups_Array[SubgroupID].summary;
	document.getElementById("Subgroups_Title").textContent = Subgroups_Array[SubgroupID].title;

	document.getElementById("html").style.backgroundColor = Elements_Array[ElementID].color;
	document.getElementById("Element_Title").style.color = Elements_Array[ElementID].color;

	document.getElementById("Subgroups_Image").src = Subgroups_Array[SubgroupID].image;
}











