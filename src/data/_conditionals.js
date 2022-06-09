export const conditionals = [
  {
    name: "turn",
    comparable: true,
    boolean: false,
    description: 'Compares the current turn to a number',
    eventTypes: ['ALL']
  },
  {
    name: "seed",
    comparable: true,
    boolean: false,
    description: 'Compares the current seed to a number',
    eventTypes: ['ALL']
  },
  {
    name: "enshadowment",
    comparable: true,
    boolean: false,
    description: 'Compares the world enshadowment to a number',
    eventTypes: ['ALL']
  },
  {
    name: "temperature",
    comparable: true,
    boolean: false,
    description: 'Compares the world temperature to a decimal',
    eventTypes: ['ALL']
  },
  {
    name: "panic",
    comparable: true,
    boolean: false,
    description: 'Compares the world panic to a decimal',
    eventTypes: ['ALL']
  },
  {
    name: "power",
    comparable: true,
    boolean: false,
    description: 'Compares the god power points to a number',
    eventTypes: ['ALL']
  },
  {
    name: "god_is_iastur",
    comparable: false,
    boolean: true,
    description: 'Checks whether the currently played god is Iastur',
    eventTypes: ['ALL']
  },
  {
    name: "god_is_vinerva",
    comparable: false,
    boolean: true,
    description: 'Checks whether the currently played god is Vinerva',
    eventTypes: ['ALL']
  },
  {
    name: "god_is_mammon",
    comparable: false,
    boolean: true,
    description: 'Checks whether the currently played god is Mammon',
    eventTypes: ['ALL']
  },
  {
    name: "god_is_snake",
    comparable: false,
    boolean: true,
    description: 'Checks whether the currently played god is She Who Will Devour',
    eventTypes: ['ALL']
  },
  {
    name: "god_is_ophanim",
    comparable: false,
    boolean: true,
    description: 'Checks whether the currently played god is Ophanim',
    eventTypes: ['ALL']
  },
  {
    name: "is_sane",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is sane',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_from_normal_soc",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is from normal society',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_cast_member",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is a cast member and considered important',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_male",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON has masculine gender pronouns',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_female",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON has feminine gender pronouns',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "challenge_is_intrigue",
    comparable: false,
    boolean: true,
    description: 'Checks whether the challenge is an intrigue challenge',
    eventTypes: ['MIDCHALLENGE']
  },
  {
    name: "challenge_is_lore",
    comparable: false,
    boolean: true,
    description: 'Checks whether the challenge is a lore challenge',
    eventTypes: ['MIDCHALLENGE']
  },
  {
    name: "challenge_is_might",
    comparable: false,
    boolean: true,
    description: 'Checks whether the challenge is a might challenge',
    eventTypes: ['MIDCHALLENGE']
  },
  {
    name: "challenge_is_command",
    comparable: false,
    boolean: true,
    description: 'Checks whether the challenge is a command challenge',
    eventTypes: ['MIDCHALLENGE']
  },
  {
    name: "kills",
    comparable: true,
    boolean: false,
    description: 'Compares the number of kills for a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_human",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON or LOCATION is human',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_town",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a town',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_village",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a village',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_hamlet",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a hamlet',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_city",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a city',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_ducal",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a duchy',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_capital",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a nation capital',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_metropole",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a major city',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_wonder_font",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a the font of wonders',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_wonder_deathIsland",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is a the isle of death',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_wonder_entrance",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is the entrance (what does this mean?)',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_empty",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is empty (what does this mean?)',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "settlement_defences",
    comparable: true,
    boolean: false,
    description: 'Compares the LOCATION defenses to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "settlement_max_defences",
    comparable: true,
    boolean: false,
    description: 'Compares the LOCATION max defenses to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "settlement_being_razed",
    comparable: false,
    boolean: true,
    description: 'Checks whether the LOCATION is currently being razed',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "menace",
    comparable: true,
    boolean: false,
    description: 'Compares the menace of a UNIT to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "profile",
    comparable: true,
    boolean: false,
    description: 'Compares the profile of a UNIT to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "minion_one_special_value",
    comparable: true,
    boolean: false,
    description: 'Compares the special value of a UNIT in the first slot to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "minion_two_special_value",
    comparable: true,
    boolean: false,
    description: 'Compares the special value of a UNIT in the second slot to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "minion_three_special_value",
    comparable: true,
    boolean: false,
    description: 'Compares the special value of a UNIT in the third slot to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "has_daughter_minion",
    comparable: false,
    boolean: true,
    description: 'Checks whether a UNIT has any minions from the daughter event chain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "stat_lore",
    comparable: true,
    boolean: false,
    description: 'Compares the lore of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "stat_might",
    comparable: true,
    boolean: false,
    description: 'Compares the might of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "stat_command",
    comparable: true,
    boolean: false,
    description: 'Compares the command of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "stat_intrigue",
    comparable: true,
    boolean: false,
    description: 'Compares the intrigue of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "gold",
    comparable: true,
    boolean: false,
    description: 'Compares the gold of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "shadow",
    comparable: true,
    boolean: false,
    description: 'Compares the shadow of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_hero",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON is a hero',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_ruler",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON is a ruler',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_chosen_one",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON is a chosen one',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "has_call_of_the_abyss",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON has the call of the abyss modifier',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_deepOne",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON has the deep one modifier',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_ambition",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes ambition',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_cooperation",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes cooperation',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_combat",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes combat',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_cruel",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes cruelty',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_danger",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes danger',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_deep_ones",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes deep ones',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_discord",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes discord like political strife and unrest',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_gold",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes gold',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_madness",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes madness',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_orc",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes orcs',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_shadow",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes shadow',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_preference_undead",
    comparable: true,
    boolean: false,
    description: 'Checks whether a PERSON likes or dislikes undead',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_index",
    comparable: true,
    boolean: false,
    description: 'Checks the numerical index of the PERSON',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "person_house_index",
    comparable: true,
    boolean: false,
    description: 'Checks the numerical index PERSON house',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_birthday",
    comparable: false,
    boolean: true,
    description: 'Checks whether it is the birthday of a PERSON',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is an agent',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_baroness",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the baroness',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_courtier",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the courtier',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_cursed",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the cursed',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_doctor",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the doctor',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_harvester",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the harvester',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_hierophant",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the hierophant',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_monarch",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the monarch',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_shadow",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the shadow',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_supplicant",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the supplicant',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_survivor",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the survivor',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_trickster",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the trickster',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_warlord",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is the warlord',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_agent_human",
    comparable: false,
    boolean: true,
    description: 'Checks whether the UNIT is human',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_infamous",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is infamous',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "other_is_agent",
    comparable: false,
    boolean: true,
    description: 'Checks whether the OTHER is an agent',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_is_sane",
    comparable: false,
    boolean: true,
    description: 'Checks whether the OTHER is sane',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_is_from_normal_soc",
    comparable: false,
    boolean: true,
    description: 'Checks whether the OTHER is from normal society',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_is_cast_member",
    comparable: false,
    boolean: true,
    description: 'Checks whether the OTHER is a more important cast member',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_female",
    comparable: false,
    boolean: true,
    description: 'Checks whether the OTHER uses masculine pronouns',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_male",
    comparable: false,
    boolean: true,
    description: 'Checks whether the OTHER uses masculine pronouns',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_ruler",
    comparable: false,
    boolean: true,
    description: 'Checks whether the OTHER is a ruler',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_gold",
    comparable: true,
    boolean: false,
    description: 'Compares the gold of a OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_menace",
    comparable: true,
    boolean: false,
    description: 'Compares the menace of a OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_profile",
    comparable: true,
    boolean: false,
    description: 'Compares the profile of a OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_number_of_friends",
    comparable: true,
    boolean: false,
    description: 'Compares the number of friends of a OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_shadow",
    comparable: true,
    boolean: false,
    description: 'Compares the shadow of a OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "person2_index",
    comparable: true,
    boolean: false,
    description: 'Compares the person index of a OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "person2_house_index",
    comparable: true,
    boolean: false,
    description: 'Compares the house index of a OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "is_close_family",
    comparable: false,
    boolean: true,
    description:  'Checks whether the OTHER is close family',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "houses_match",
    comparable: false,
    boolean: true,
    description:  'Checks whether the OTHER is in the same familial house',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "nations_match",
    comparable: false,
    boolean: true,
    description:  'Checks whether the OTHER comes from the same nation',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "is_mourning_other",
    comparable: false,
    boolean: true,
    description:  'Checks whether the PERSON is mourning the OTHER',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "at_same_location",
    comparable: false,
    boolean: true,
    description:  'Checks whether the PERSON and OTHER are in the same location',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "other_is_deepOne",
    comparable: false,
    boolean: true,
    description:  'Checks whether the OTHER is a deep one',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "preference_other_to_person",
    comparable: true,
    boolean: false,
    description:  'Compares the preference for the OTHER for the PERSON to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "preference_person_to_other",
    comparable: true,
    boolean: false,
    description:  'Compares the preference for the PERSON for the OTHER to a number',
    eventTypes: ['P2P', 'INERT', 'MOURNING']
  },
  {
    name: "is_coastal",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is coastal terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_sea",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is ocean terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_grass",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is grassy terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_highland",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is highland terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_plains",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is plains terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_desertlike",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is desert-like terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_desert",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is desert terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_arid",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is arid terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_dry",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is dry terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_jungle",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is jungle terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_swamp",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is swamp terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_under_fog",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is under fog (what is this?)',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_volcano",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is volcanic terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_snow",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is snowy terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_arctic",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is in the arctic terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_drycold",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is dry and cold terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_tundra",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is tundra terrain',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "human_soul_present",
    comparable: false,
    boolean: true,
    description:  'Checks whether a human soul modifier exists at the LOCATION',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "has_ancient_ruins",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION has ancient ruins',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "is_ruins",
    comparable: false,
    boolean: true,
    description:  'Checks whether the LOCATION is ruined',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "location_shadow",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION enshadowment to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_ward",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION ward level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_well_of_shadows",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION well of shadows level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_ogre",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION ogre level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "infiltration",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION infiltration to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_arcane_fortress",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION arcane fortress level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_arcane_secret",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION arcane secrets level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_armoured_populace",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION armoured populace to a number (does this mean armies?)',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_death",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION death to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_deep_ones",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION deep_ones to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_madness",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION madness to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_unrest",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION unrest to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_hunger",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION hunger to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_plague",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION plague to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_plague_immunity",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION plague immunity level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_political_agitation",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION political agitation level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_quarantine",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION quarantine level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_banditry",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION banditry to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_devastation",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION devastation to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_doubt",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION doubt of Ophanim to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_faith",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION faith in Ophanim to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_geomantic_locus",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION geomantic locus level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_give",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION give (???) to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_take",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION take (???) to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_hysterial_tome",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION hysterial tome level from Iastur to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_vinerva_gift",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION gift level from Vinerva to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_laughing_tome",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION laughing tome level from Iastur to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_lingering_resentment",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION lingering resentment to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_malign_catch",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION malign catch level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_misleading_clues",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION misleading clues level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_fleeting_servant",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION fleeting_servant for She Who Will Devour to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_bribed_guards",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION bribed_guards to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_chocking_spores",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION choking spores level to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  },
  {
    name: "modifier_level_political_instability",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION political instability to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT', 'LOCATION']
  }
]
