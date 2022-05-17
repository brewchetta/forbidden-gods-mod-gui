export const eventTypes = {
  {
    name: "DEATH",
    description: "Triggers when a character dies",
    filePrefix: "death_"
  },
  {
    name: "INERT",
    description: "Triggers when called from another event and no other time. Has the same context and access to actors as the previous event.",
    filePrefix: "other_"
  },
  {
    name: "LOCATION",
    description: "Triggers when a condition is met for any location. If a human ruler is present, that person will be available in events.",
    filePrefix: "location_"
  },
  {
    name: "MIDCHALLENGE",
    description: "Triggers as a possible mid challenge (10 turns into a challenge this has a chance to fire). The UNIT is accessible, along with the PERSON and LOCATION.",
    filePrefix: "midch_"
  },
  {
    name: "MOURNING",
    description: "Triggers as a special interpersonal exchange between two characters when one is mourning the other. This will only trigger for a person who is considered a cast member (agents and some people). Has access to the PERSON, UNIT, and OTHER.",
    filePrefix: "mourning_"
  },
  {
    name: "MOVE",
    description: "Triggers when an agent character moves. The UNIT is accessible, along with the PERSON and LOCATION.",
    filePrefix: "move_"
  },
  {
    name: "P2P",
    description: "Triggers as an interpersonal exchange between two characters when conditions are met. This will only trigger for a person who is considered a cast member (agents and some people). Has access to the PERSON, UNIT, as well as OTHER.",
    filePrefix: "p2p_"
  },
  {
    name: "PERSON",
    description: "Triggers when a condition is met for a person. If the person has a LOCATION or UNIT, they will be accessible.",
    filePrefix: "person_"
  },
  {
    name: "UNIT",
    description: "Triggers when a condition is met for a unit. That unit's LOCATION and PERSON will also be accessible.",
    filePrefix: "unit_"
  },
  {
    name: "WORLD",
    description: "Triggers when a condition is met for a world event. Only the map is accessible.",
    filePrefix: "world_"
  }
}
