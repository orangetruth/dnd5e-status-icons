const SimpleStatusIcons = (() => {
    const defineStatusIcons = function (data) {
        window.CONFIG.statusEffects = [{
            'id': 'advantage',
            'label': 'Advantage',
            'icon': 'modules/dnd5e-status-icons/Conditions/Advantage.png'
        }, {
            'id': 'ancenstral protectors',
            'label': 'Ancenstral Protectors',
            'icon': 'modules/dnd5e-status-icons/Conditions/Ancenstral Protectors.png'
        }, {
            'id': 'armor of agathys',
            'label': 'Armor of Agathys',
            'icon': 'modules/dnd5e-status-icons/Conditions/Armor of Agathys.png'
        }, {
            'id': 'baned',
            'label': 'Baned',
            'icon': 'modules/dnd5e-status-icons/Conditions/Baned.png'
        }, {
            'id': "bear's endurance",
            'label': "Bear's Endurance",
            'icon': "modules/dnd5e-status-icons/Conditions/Bear's Endurance.png"
        }, {
            'id': 'bleeding out',
            'label': 'Bleeding Out',
            'icon': 'modules/dnd5e-status-icons/Conditions/Bleeding Out.png'
        }, {
            'id': 'blessed',
            'label': 'Blessed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blessed.png'
        }, {
            'id': 'blinded',
            'label': 'Blinded',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blinded.png'
        }, {
            'id': 'blink',
            'label': 'Blink',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blink.png'
        }, {
            'id': 'blur',
            'label': 'Blur',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blur.png'
        }, {
            'id': "bull's strength",
            'label': "Bull's Strength",
            'icon': "modules/dnd5e-status-icons/Conditions/Bull's Strength.png"
        }, {
            'id': "cat's grace",
            'label': "Cat's Grace",
            'icon': "modules/dnd5e-status-icons/Conditions/Cat's Grace.png"
        }, {
            'id': 'cause of fear',
            'label': 'Cause of Fear',
            'icon': 'modules/dnd5e-status-icons/Conditions/Cause of Fear.png'
        }, {
            'id': 'charmed',
            'label': 'Charmed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Charmed.png'
        }, {
            'id': 'compelled duel',
            'label': 'Compelled Duel',
            'icon': 'modules/dnd5e-status-icons/Conditions/Compelled Duel.png'
        }, {
            'id': 'concentration',
            'label': 'Concentration',
            'icon': 'modules/dnd5e-status-icons/Conditions/Concentration.png'
        }, {
            'id': 'confused',
            'label': 'Confused',
            'icon': 'modules/dnd5e-status-icons/Conditions/Confused.png'
        }, {
            'id': 'deafened',
            'label': 'Deafened',
            'icon': 'modules/dnd5e-status-icons/Conditions/Deafened.png'
        }, {
            'id': 'disadvantage',
            'label': 'Disadvantage',
            'icon': 'modules/dnd5e-status-icons/Conditions/Disadvantage.png'
        }, {
            'id': 'divine favor',
            'label': 'Divine Favor',
            'icon': 'modules/dnd5e-status-icons/Conditions/Divine Favor.png'
        }, {
            'id': 'dodge action',
            'label': 'Dodge Action',
            'icon': 'modules/dnd5e-status-icons/Conditions/Dodge Action.png'
        }, {
            'id': 'dead',
            'label': 'EFFECT.StatusDead',
            'icon': 'icons/svg/skull.svg'
        }, {
            'id': "eagle's splendor",
            'label': "Eagle's Splendor",
            'icon': "modules/dnd5e-status-icons/Conditions/Eagle's Splendor.png"
        }, {
            'id': 'entangled',
            'label': 'Entangled',
            'icon': 'modules/dnd5e-status-icons/Conditions/Entangled.png'
        }, {
            'id': 'exhausted',
            'label': 'Exhausted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Exhausted.png'
        }, {
            'id': 'flying',
            'label': 'Flying',
            'icon': 'modules/dnd5e-status-icons/Conditions/Flying.png'
        }, {
            'id': "fox's cunning",
            'label': "Fox's Cunning",
            'icon': "modules/dnd5e-status-icons/Conditions/Fox's Cunning.png"
        }, {
            'id': 'frightened',
            'label': 'Frightened',
            'icon': 'modules/dnd5e-status-icons/Conditions/Frightened.png'
        }, {
            'id': 'grappled',
            'label': 'Grappled',
            'icon': 'modules/dnd5e-status-icons/Conditions/Grappled.png'
        }, {
            'id': 'hasted',
            'label': 'Hasted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Hasted.png'
        }, {
            'id': 'hex',
            'label': 'Hex',
            'icon': 'modules/dnd5e-status-icons/Conditions/Hex.png'
        }, {
            'id': "hexblade's curse",
            'label': "Hexblade's Curse",
            'icon': "modules/dnd5e-status-icons/Conditions/Hexblade's Curse.png"
        }, {
            'id': 'highlighted',
            'label': 'Highlighted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Highlighted.png'
        }, {
            'id': 'holding action',
            'label': 'Holding Action',
            'icon': 'modules/dnd5e-status-icons/Conditions/Holding Action.png'
        }, {
            'id': 'incapacitated',
            'label': 'Incapacitated',
            'icon': 'modules/dnd5e-status-icons/Conditions/Incapacitated.png'
        }, {
            'id': 'insightful fighting',
            'label': 'Insightful Fighting',
            'icon': 'modules/dnd5e-status-icons/Conditions/Insightful Fighting.png'
        }, {
            'id': 'inspired',
            'label': 'Inspired',
            'icon': 'modules/dnd5e-status-icons/Conditions/Inspired.png'
        }, {
            'id': 'invisible',
            'label': 'Invisible',
            'icon': 'modules/dnd5e-status-icons/Conditions/Invisible.png'
        }, {
            'id': 'mage armor',
            'label': 'Mage Armor',
            'icon': 'modules/dnd5e-status-icons/Conditions/Mage Armor.png'
        }, {
            'id': 'mark',
            'label': 'Mark',
            'icon': 'modules/dnd5e-status-icons/Conditions/Mark.png'
        }, {
            'id': 'mirror image',
            'label': 'Mirror Image',
            'icon': 'modules/dnd5e-status-icons/Conditions/Mirror Image.png'
        }, {
            'id': 'on fire',
            'label': 'On Fire',
            'icon': 'modules/dnd5e-status-icons/Conditions/On Fire.png'
        }, {
            'id': "owl's wisdom",
            'label': "Owl's Wisdom",
            'icon': "modules/dnd5e-status-icons/Conditions/Owl's Wisdom.png"
        }, {
            'id': 'paralyzed',
            'label': 'Paralyzed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Paralyzed.png'
        }, {
            'id': 'petrified',
            'label': 'Petrified',
            'icon': 'modules/dnd5e-status-icons/Conditions/Petrified.png'
        }, {
            'id': 'poisoned',
            'label': 'Poisoned',
            'icon': 'modules/dnd5e-status-icons/Conditions/Poisoned.png'
        }, {
            'id': 'possessed',
            'label': 'Possessed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Possessed.png'
        }, {
            'id': 'prone',
            'label': 'Prone',
            'icon': 'modules/dnd5e-status-icons/Conditions/Prone.png'
        }, {
            'id': 'raging',
            'label': 'Raging',
            'icon': 'modules/dnd5e-status-icons/Conditions/Raging.png'
        }, {
            'id': 'reaction used',
            'label': 'Reaction Used',
            'icon': 'modules/dnd5e-status-icons/Conditions/Reaction Used.png'
        }, {
            'id': 'restrained',
            'label': 'Restrained',
            'icon': 'modules/dnd5e-status-icons/Conditions/Restrained.png'
        }, {
            'id': 'sanctuary',
            'label': 'Sanctuary',
            'icon': 'modules/dnd5e-status-icons/Conditions/Sanctuary.png'
        }, {
            'id': 'shell defense',
            'label': 'Shell Defense',
            'icon': 'modules/dnd5e-status-icons/Conditions/Shell Defense.png'
        }, {
            'id': 'shield of faith',
            'label': 'Shield of Faith',
            'icon': 'modules/dnd5e-status-icons/Conditions/Shield of Faith.png'
        }, {
            'id': 'shifted',
            'label': 'Shifted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Shifted.png'
        }, {
            'id': "slayer's prey",
            'label': "Slayer's Prey",
            'icon': "modules/dnd5e-status-icons/Conditions/Slayer's Prey.png"
        }, {
            'id': 'spirit guardians',
            'label': 'Spirit Guardians',
            'icon': 'modules/dnd5e-status-icons/Conditions/Spirit Guardians.png'
        }, {
            'id': 'stabilized',
            'label': 'Stabilized',
            'icon': 'modules/dnd5e-status-icons/Conditions/Stabilized.png'
        }, {
            'id': 'stunned',
            'label': 'Stunned',
            'icon': 'modules/dnd5e-status-icons/Conditions/Stunned.png'
        }, {
            'id': 'summoning',
            'label': 'Summoning',
            'icon': 'modules/dnd5e-status-icons/Conditions/Summoning.png'
        }, {
            'id': 'symbiotic entity',
            'label': 'Symbiotic Entity',
            'icon': 'modules/dnd5e-status-icons/Conditions/Symbiotic Entity.png'
        }, {
            'id': 'truesight',
            'label': 'Truesight',
            'icon': 'modules/dnd5e-status-icons/Conditions/Truesight.png'
        }, {
            'id': 'unconcious',
            'label': 'Unconcious',
            'icon': 'modules/dnd5e-status-icons/Conditions/Unconcious.png'
        }, {
            'id': 'warding bond',
            'label': 'Warding Bond',
            'icon': 'modules/dnd5e-status-icons/Conditions/Warding Bond.png'
        }, {
            'id': 'wounded',
            'label': 'Wounded',
            'icon': 'modules/dnd5e-status-icons/Conditions/wounded.svg'
        }]
    }

    // HOOKS  
    Hooks.once("ready", function () {
        defineStatusIcons();
    });
})();