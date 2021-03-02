# dnd5e-status-icons
A FoundryVTT module for 5e-specific token markers for various conditions. Icons created by [u/JinxShadow](https://www.reddit.com/user/JinxShadow/) on Reddit and can be found here on [GoogleDrive](https://drive.google.com/drive/folders/1p8PTqBHkgSrKVqqOyI2_kFcPmbgLcX72). If you appreciate the icons, tips can be sent to JinxShadow through PayPal at jinxshadow8086@gmail.com.

This module contains 65 condition markers:

||||||
|----------|----------|----------|----------|----------|
|Advantage|Charmed|Fox's Cunning|Mark|Shell Defense|
|Ancenstral Protectors|Compelled Duel|Frightened|Mirror Image|Shield of Faith|
|Armor of Agathys|Concentration|Grappled|On Fire|Shifted|
|Baned|Confused|Hasted|Owl's Wisdom|Slayer's Prey|
|Bear's Endurance|Dead|Hex|Paralyzed|Spirit Guardians|
|Bleeding Out|Deafened|Hexblade's Curse|Petrified|Stabilized|
|Blessed|Disadvantage|Highlighted|Poisoned|Stunned|
|Blinded|Divine Favor|Holding Action|Possessed|Summoning|
|Blink|Dodge Action|Incapacitated|Prone|Symbiotic Entity|
|Blur|Eagle's Splendor|Insightful Fighting|Raging|Truesight|
|Bull's Strength|Entangled|Inspired|Reaction Used|Unconcious|
|Cat's Grace|Exhausted|Invisible|Restrained|Warding Bond|
|Cause of Fear|Flying|Mage Armor|Sanctuary|Wounded|![image](https://user-images.githubusercontent.com/76987378/109604389-adad2280-7ae0-11eb-85d9-dc11df2f1e30.png)

![+Set1](https://user-images.githubusercontent.com/76987378/109603962-f31d2000-7adf-11eb-8cda-0c8acdae98af.jpg)
![+Set2](https://user-images.githubusercontent.com/76987378/109603968-f6181080-7adf-11eb-83ee-d006247ecf05.png)
![+Set3](https://user-images.githubusercontent.com/76987378/109603971-f7493d80-7adf-11eb-9f95-3b88810f6b61.png)

# Related Modules
No other modules are required to use these icons, but I recommend:
* [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt): [Triggler](https://github.com/death-save/combat-utility-belt/wiki/triggler) can be used with the Conditon Lab to set automatic conditons to apply various status icons (you'll need to Enable Enhanced Conditions first under Module Settings -> Combat Utility Belt):
![image](https://user-images.githubusercontent.com/33645693/109606167-7ee47b80-7ae3-11eb-8e6a-cefa4e2b0fbf.png)
![image](https://user-images.githubusercontent.com/33645693/109606678-38dbe780-7ae4-11eb-9394-99545b8c8b16.png)
![image](https://user-images.githubusercontent.com/33645693/109606286-ab989300-7ae3-11eb-91ce-40b34069787f.png)

* [Custom CSS Rules](https://foundryvtt.com/packages/custom-css) and its dependency [Code Mirror](https://foundryvtt.com/packages/_CodeMirror): This allows you to customize the CSS for the display of the icons. Add this rule to your Custom CSS Rules under Module Settings to enlarge the icons and set the status effects pane to be 10 icons wide:
```
#token-hud .status-effects { top: -275% !important; width: 400px !important; grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px !important; }
#token-hud .status-effects .effect-control { height: 40px !important; width: 40px !important; }
```
|Before:|After:|
|---|----|
|![image](https://user-images.githubusercontent.com/33645693/109605085-df72b900-7ae1-11eb-9a05-21a82cb91e36.png)|![image](https://user-images.githubusercontent.com/33645693/109605495-79d2fc80-7ae2-11eb-8ee0-ceba82544d00.png)|
