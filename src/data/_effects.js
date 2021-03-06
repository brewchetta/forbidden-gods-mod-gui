export const effects = [
  {
    name: 'SHOW_EVENT',
    description: 'Show another event of the type INERT',
    recommended: 'filename appended with mod initials'
  },
  {
    name: 'SHOW_RANDOM_EVENT_WITH_TERM_IN_ID',
    description: 'Show another event of the type INERT with a specific term in its name / id',
    recommended: 'a search term'
  },
  {
    name: 'GAIN_POWER',
    description: 'Give the god points of power. Negative points will reduce the god power.',
    recommended: 'number between 9 and -9'
  },
  {
    name: 'ADD_POWER',
    description: 'Give the god points of power. Negative points will reduce the god power.',
    recommended: 'number between 9 and -9'
  },
  {
    name: 'LOCATION_GAIN_SHADOW',
    description: 'Adds shadow to a location. Negative numbers will reduce it.',
    recommended: 'number between -100 and 100'
  },
  {
    name: 'LOCATION_POP_MULT',
    description: 'Multiplies the location population, 100 remains the same and lower reduces.',
    recommended: 'number between 0 and 200'
  },
  {
    name: 'DESTROY_LOCATION',
    description: 'Immediately razes the location.',
    recommended: 'none'
  },
  {
    name: 'OPHANIM_TAKE_OVER',
    description: 'Immediately causes Ophanim to take over the location.',
    recommended: 'none'
  },
  {
    name: 'INCREASE_UNREST',
    description: 'Increases unrest in a location by a specified amount. Can be negative.',
    recommended: 'number between -200 and 200'
  },
  {
    name: 'ADD_TEMPORARY_WORLD_PANIC',
    description: 'Adds temporary world panic. Negative numbers will reduce it.',
    recommended: 'number between 50 and -50'
  },
  {
    name: 'INFAMOUS_DEATH',
    description: 'Triggers the effects of an infamous agent death.',
    recommended: '1 or True'
  },
  {
    name: 'EXPLORE_RUINS',
    description: 'Triggers the effects of a ruins exploration.',
    recommended: '1 or True'
  },
  {
    name: 'GAIN_GOLD',
    description: 'Adds gold to the PERSON. Negative numbers will remove gold.',
    recommended: 'number between 1000 and -1000'
  },
  {
    name: 'ADD_MODIFIER',
    description: 'Adds modifier to a LOCATION.',
    recommended: 'Modifier name',
    recommended2: 'Modifier image file name prepended by mod name',
    recommended3: 'Modifier flavor description'
  },
  {
    name: 'REMOVE_MODIFIER',
    description: 'Removes modifier from a LOCATION.',
    recommended: 'Modifier name'
  },
  {
    name: 'PAN_TO',
    description: 'Pans to the LOCATION where the event occurs.',
    recommended: 'none'
  },
  {
    name: 'BEGIN_HIDING',
    description: 'Makes the UNIT begin hiding (unclear what this means).',
    recommended: 'none'
  },
  {
    name: 'CANCEL_ALL_ATTACKS',
    description: 'Makes the UNIT cancel their combats.',
    recommended: 'none'
  },
  {
    name: 'ATTACKER_ADD_PROFILE',
    description: 'Adds profile to the attacking UNIT. Can be negative.',
    recommended: 'a number between -20 and 20'
  },
  {
    name: 'DEFENDER_ADD_PROFILE',
    description: 'Adds profile to the defending UNIT. Can be negative.',
    recommended: 'a number between -20 and 20'
  },
  {
    name: 'ATTACKER_ADD_MENACE',
    description: 'Adds menace to the attacking UNIT. Can be negative.',
    recommended: 'a number between -20 and 20'
  },
  {
    name: 'DEFENDER_ADD_MENACE',
    description: 'Adds menace to the defending UNIT. Can be negative.',
    recommended: 'a number between -20 and 20'
  },
  {
    name: 'DEFENDER_GAINS_TRAIT',
    description: 'Adds a trait to the defending UNIT.',
    recommended: 'name of the trait'
  },
  {
    name: 'ATTACKER_GAINS_TRAIT',
    description: 'Adds a trait to the defending UNIT.',
    recommended: 'name of the trait'
  },
  {
    name: 'DEFENDER_HATES_ATTACKER',
    description: 'Adds a trait to the defending UNIT to make them hate the attacking unit.',
    recommended: 'none'
  },
  {
    name: 'ATTACKER_HATES_DEFENDER',
    description: 'Adds a trait to the attacking UNIT to make them hate the defending unit.',
    recommended: 'none'
  },
  {
    name: 'ATTACKER_GAINS_PREFERENCE_FOR_TAG',
    description: 'The attacking UNIT gains a like of the specified tag.',
    recommended: 'A tag name'
  },
  {
    name: 'ATTACKER_LOSE_PREFERENCE_FOR_TAG',
    description: 'The attacking UNIT gains a dislike of the specified tag.',
    recommended: 'A tag name'
  },
  {
    name: 'DEFENDER_GAINS_PREFERENCE_FOR_TAG',
    description: 'The defending UNIT gains a like of the specified tag.',
    recommended: 'A tag name'
  },
  {
    name: 'DEFENDER_LOSE_PREFERENCE_FOR_TAG',
    description: 'The defending UNIT gains a dislike of the specified tag.',
    recommended: 'A tag name'
  },
  {
    name: 'RANDOM_TELEPORT_TO_LAND',
    description: 'Makes the UNIT randomly teleport.',
    recommended: 'none'
  },
  {
    name: 'GENERATE_MINION',
    description: 'Generates a minion for a PERSON.',
    recommended: 'Minion attack',
    recommended2: 'Minion hit points',
    recommended3: 'Minion defense',
    recommended4: 'Minion command cost',
    recommended5: 'Minion name',
    recommended6: 'Minion file for image icon',
    recommended7: 'Minion unique identifying number'
  },
  {
    name: 'INFILTRATE_POINTS_OF_INTEREST',
    description: 'Infiltrates points of interest at LOCATION.',
    recommended: 'Number of points of interest to infiltrate'
  },
  {
    name: 'GAIN_XP',
    description: 'Grants a PERSON experience points.',
    recommended: 'Number between 1 and 1000'
  },
  {
    name: 'PERSON_LOSE_PREFERENCE_FOR_TAG',
    description: 'Makes a PERSON hate something.',
    recommended: 'A tag, for example Combat or Shadow'
  },
  {
    name: 'PERSON_GAINS_PREFERENCE_FOR_TAG',
    description: 'Makes a PERSON love something.',
    recommended: 'A tag, for example Combat or Shadow'
  },
  {
    name: 'LOSE_SANITY',
    description: 'Makes a PERSON lose sanity points.',
    recommended: 'A number between 1 and 100'
  },
  {
    name: 'INCREASE_P2_TO_P1_RELATION',
    description: 'Makes PERSON 2 love PERSON 1.',
    recommended: 'none'
  },
  {
    name: 'INCREASE_P1_TO_P2_RELATION',
    description: 'Makes PERSON 1 love PERSON 2.',
    recommended: 'none'
  },
  {
    name: 'INCREASE_P2_TO_P1_RELATION',
    description: 'Makes PERSON 2 love PERSON 1.',
    recommended: 'none'
  },
  {
    name: 'INCREASE_P1_TO_P2_RELATION_LIMITED',
    description: 'Makes PERSON 1 love PERSON 2.',
    recommended: 'the amount of love you want'
  },
  {
    name: 'INCREASE_P2_TO_P1_RELATION_LIMITED',
    description: 'Makes PERSON 2 love PERSON 1.',
    recommended: 'the amount of love you want'
  },
  {
    name: 'DECREASE_P1_TO_P2_RELATION',
    description: 'Makes PERSON 1 hate PERSON 2.',
    recommended: 'none'
  },
  {
    name: 'DECREASE_P2_TO_P1_RELATION',
    description: 'Makes PERSON 2 hate PERSON 1.',
    recommended: 'none'
  },
  {
    name: 'XENOPHOBIA',
    description: 'Increases xenophobia between PERSON 1 and PERSON 2 (what DOES THIS MEAN?).',
    recommended: 'number between -1 and 1'
  },
  {
    name: 'VENDETTA',
    description: 'Increases vendetta between PERSON 1 and PERSON 2 (what DOES THIS MEAN?).',
    recommended: 'number between -1 and 1'
  },
  {
    name: 'CITY_REBELS',
    description: 'Triggers a LOCATION to rebel.',
    recommended: 'none'
  },
  {
    name: 'KILL_PERSON',
    description: 'Kill the PERSON.',
    recommended: 'none'
  },
  {
    name: 'MOURNING_PROLONGED',
    description: 'Prolongs the mourning period for the PERSON by a number of turns.',
    recommended: 'Number between 1 and 100'
  },
  {
    name: 'RULER_DIES',
    description: 'Kill the ruler of a LOCATION.',
    recommended: 'none'
  },
  {
    name: 'ABDICATE',
    description: 'The ruler of a LOCATION abdicates their seat of power.',
    recommended: 'none'
  },
  {
    name: 'BECOME_HERO',
    description: 'The ruler of a LOCATION becomes a hero.',
    recommended: 'none'
  },
  {
    name: 'LOCATION_RULER_GAIN_SHADOW',
    description: 'Grants the ruler of a LOCATION shadow. Can be negative to lower.',
    recommended: 'Number between -100 and 100'
  },
  {
    name: 'ADD_MODIFIER_DEATH',
    description: 'Adds death modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_PLAGUE',
    description: 'Adds plague modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_DEVASTATION',
    description: 'Adds devastation modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_POLITICAL_AGITATION',
    description: 'Adds political agitation modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_POLITICAL_INSTABILITY',
    description: 'Adds political instability modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_WELL_OF_SHADOWS',
    description: 'Adds well of shadows modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_HUNGER',
    description: 'Adds hunger modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_MADNESS',
    description: 'Adds madness modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  {
    name: 'ADD_MODIFIER_UNREST',
    description: 'Adds unrest modifier to a LOCATION. Can be negative to lower.',
    recommended: 'Number between -200 and 200'
  },
  // TODO: add other modifiers
  {
    name: 'TEMPORARY_MIGHT',
    description: 'Adds temporary MIGHT to a PERSON. Can be negative to lower.',
    recommended: 'Number of turns the modifier lasts between 1 and 500',
    recommended1: 'Number for change in MIGHT between -10 and 10'
  },
  {
    name: 'TEMPORARY_LORE',
    description: 'Adds temporary LORE to a PERSON. Can be negative to lower.',
    recommended: 'Number of turns the modifier lasts between 1 and 500',
    recommended1: 'Number for change in LORE between -10 and 10'
  },
  {
    name: 'TEMPORARY_COMMAND',
    description: 'Adds temporary COMMAND to a PERSON. Can be negative to lower.',
    recommended: 'Number of turns the modifier lasts between 1 and 500',
    recommended1: 'Number for change in COMMAND between -10 and 10'
  },
  {
    name: 'TEMPORARY_INTRIGUE',
    description: 'Adds temporary INTRIGUE to a PERSON. Can be negative to lower.',
    recommended: 'Number of turns the modifier lasts between 1 and 500',
    recommended1: 'Number for change in INTRIGUE between -10 and 10'
  },
  {
    name: 'SET_MIGHT',
    description: 'Changes the MIGHT of a PERSON.',
    recommended: 'Number between 1 and 10'
  },
  {
    name: 'SET_LORE',
    description: 'Changes the LORE of a PERSON.',
    recommended: 'Number between 1 and 10'
  },
  {
    name: 'SET_INTRIGUE',
    description: 'Changes the INTRIGUE of a PERSON.',
    recommended: 'Number between 1 and 10'
  },
  {
    name: 'SET_COMMAND',
    description: 'Changes the COMMAND of a PERSON.',
    recommended: 'Number between 1 and 10'
  },
  {
    name: 'SET_AGE',
    description: 'Changes the AGE of a PERSON.',
    recommended: 'Number between 1 and 100'
  },
  {
    name: 'SET_UNIT_COMMANDED',
    description: 'Makes the UNIT commandable or non-commandable by the player.',
    recommended: 'True or False'
  },
  {
    name: 'CACHE_GOLD',
    description: 'Creates a cache of gold at the LOCATION.',
    recommended: 'True or False'
  },
  {
    name: 'MAKE_FEMALE',
    description: 'Makes the PERSON use she/her pronouns.',
    recommended: 'none'
  },
  {
    name: 'MAKE_MALE',
    description: 'Makes the PERSON use he/him pronouns.',
    recommended: 'none'
  },
  {
    name: 'MAKE_CAST_MEMBER',
    description: 'Makes the PERSON an important cast member.',
    recommended: 'none'
  },
  {
    name: 'LOSE_CHALLENGE_PROGRESS',
    description: 'Loses progress in the MID CHALLENGE. Can be negative for progress gain.',
    recommended: 'Number between -20 and 20'
  },
  {
    name: 'ADD_HP',
    description: 'Adds additional health of a PERSON, not past max health. Can be negative.',
    recommended: 'Number between -20 and 20'
  },
  {
    name: 'GAIN_PROFILE',
    description: 'Adds profile to a PERSON. Can be negative.',
    recommended: 'Number between -20 and 20'
  },
  {
    name: 'GAIN_MENACE',
    description: 'Adds menace to a PERSON. Can be negative.',
    recommended: 'Number between -20 and 20'
  },
  {
    name: 'OTHER_GAIN_MENACE',
    description: 'Adds menace to the OTHER in a P2P. Can be negative.',
    recommended: 'Number between -20 and 20'
  },
  {
    name: 'OTHER_LOSE_SANITY',
    description: 'Loses sanity from the OTHER in a P2P. Can be negative.',
    recommended: 'Number between -20 and 20'
  },
  {
    name: 'OTHER_GAIN_SHADOW',
    description: 'Adds shadow to the OTHER in a P2P. Can be negative.',
    recommended: 'Number between -100 and 100'
  },
  {
    name: 'CHANGE_POLITICAL_INSTABILITY',
    description: 'Changes a LOCATION political instability modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_WELL_OF_SHADOWS',
    description: 'Changes a LOCATION well of shadows modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_DEATH',
    description: 'Changes a LOCATION death modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_HUNGER',
    description: 'Changes a LOCATION hunger modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_MADNESS',
    description: 'Changes a LOCATION madness modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_UNREST',
    description: 'Changes a LOCATION unrest modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_PLAGUE',
    description: 'Changes a LOCATION plague modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_PLAGUE_IMMUNITY',
    description: 'Changes a LOCATION plague immunity modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_DEVASTATION',
    description: 'Changes a LOCATION devastation modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_POLITICAL_AGITATION',
    description: 'Changes a LOCATION devastation modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_WARD',
    description: 'Changes a LOCATION ward modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_ARCANE_FORTRESS',
    description: 'Changes a LOCATION arcane fortress modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'CHANGE_GEOMANCY',
    description: 'Changes a LOCATION geomancy modifier to a certain level.',
    recommended: 'Number between 0 and 200'
  },
  {
    name: 'PLACE_ARCANE_SECRET',
    description: 'Adds an arcane secret modifier to a LOCATION.',
    recommended: 'none'
  },
  {
    name: 'CREATE_HERO_WARRIOR',
    description: 'Creates a new HERO at LOCATION.',
    recommended: 'First name',
    recommended2: 'Last name',
    recommended3: 'Event name that creates the hero stats',
    recommended4: 'File name for hero portrait'
  },
  {
    name: 'GRANT_ITEM_FROM_POOL',
    description: 'Grants a PERSON an item from a pool.',
    recommended: 'Number 1'
  },
  {
    name: 'INCREASE_ALL_DANGER',
    description: 'Inreases the danger modifier at a LOCATION.',
    recommended: 'Number between 0 and 15'
  },
  {
    name: 'END_CHALLENGE',
    description: 'Ends a MIDCHALLENGE.',
    recommended: '0'
  },

]
