const conditionals = [
  {
    name: "enshadowment",
    comparable: true,
    boolean: false,
    description: 'Compares the world enshadowment to a number',
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
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_human",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is human',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "menace",
    comparable: true,
    boolean: false,
    description: 'Compares the menace of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "has_minions",
    longCode: '((minion_one_special_value = 1888423) | (minion_two_special_value = 1888423) | (minion_three_special_value = 1888423))',
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON has any minions',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "stat_lore",
    comparable: true,
    boolean: false,
    description: 'Compares the lore of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "stat_might",
    comparable: true,
    boolean: false,
    description: 'Compares the might of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "stat_command",
    comparable: true,
    boolean: false,
    description: 'Compares the command of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "stat_intrigue",
    comparable: true,
    boolean: false,
    description: 'Compares the intrigue of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "gold",
    comparable: true,
    boolean: false,
    description: 'Compares the gold of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "shadow",
    comparable: true,
    boolean: false,
    description: 'Compares the shadow of a PERSON to a number',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_hero",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON is a hero',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_ruler",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON is a ruler',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_chosen_one",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON is a chosen one',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "has_call_of_the_abyss",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON has the call of the abyss modifier',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_deepOne",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON has the deep one modifier',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "person_preference_deep_ones",
    comparable: false,
    boolean: true,
    description: 'Checks whether a PERSON likes deep ones',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  // POSSIBLY MAKE A PREFERENCE CREATOR???
  {
    name: "is_birthday",
    comparable: false,
    boolean: true,
    description: 'Checks whether it is the birthday of a PERSON',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_agent",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is an agent',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_agent_baroness",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is the baroness',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_agent_harvester",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is the harvester',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "is_infamous",
    comparable: false,
    boolean: true,
    description: 'Checks whether the PERSON is infamous',
    eventTypes: ['MIDCHALLENGE', 'PERSON', 'UNIT', 'DEATH', 'P2P', 'INERT']
  },
  {
    name: "other_is_agent",
    comparable: false,
    boolean: true,
    description: 'Checks whether the SECOND PERSON is an agent',
    eventTypes: ['P2P', 'INERT']
  },
  {
    name: "other_shadow",
    comparable: true,
    boolean: false,
    description: 'Compares the shadow of a SECOND PERSON to a number',
    eventTypes: ['P2P', 'INERT']
  },
  {
    name: "is_close_family",
    comparable: false,
    boolean: true,
    description:  'Checks whether the SECOND PERSON is close family',
    eventTypes: ['P2P', 'INERT']
  },
  {
    name: "houses_match",
    comparable: false,
    boolean: true,
    description:  'Checks whether the SECOND PERSON is in the same familial house',
    eventTypes: ['P2P', 'INERT']
  },
  {
    name: "is_mourning_other",
    comparable: false,
    boolean: true,
    description:  'Checks whether the PERSON is mourning the SECOND PERSON',
    eventTypes: ['P2P', 'INERT']
  },
  {
    name: "at_same_location",
    comparable: false,
    boolean: true,
    description:  'Checks whether the PERSON and SECOND PERSON are in the same location',
    eventTypes: ['P2P', 'INERT']
  },
  {
    name: "other_is_deepOne",
    comparable: false,
    boolean: true,
    description:  'Checks whether the SECOND PERSON is a deep one',
    eventTypes: ['P2P', 'INERT']
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
    name: "infiltration",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION infiltration to a number',
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
    name: "modifier_level_bribed_guards",
    comparable: true,
    boolean: false,
    description:  'Compares the LOCATION bribed_guards to a number',
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
