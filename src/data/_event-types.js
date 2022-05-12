export const eventTypes = {
  {
    name: "MOVE",
    description: "Triggers when a character moves",
    filePrefix: "move_"
  },
  {
    name: "MIDCHALLENGE",
    description: "Triggers as a possible mid challenge (10 turns into a challenge this has a chance to fire)",
    filePrefix: "midch_"
  },
  {
    name: "Death",
    description: "Triggers when a character dies",
    filePrefix: "death_"
  },
  {
    name: "P2P",
    description: "Triggers as an interpersonal exchange between two characters when conditions are met",
    filePrefix: "p2p_"
  },
  {
    name: "WORLD",
    description: "Triggers when a condition is met for a world event",
    filePrefix: "world_"
  },
  {
    name: "PERSON",
    description: "Triggers when a condition is met for a person",
    filePrefix: "person_"
  },
  {
    name: "LOCATION",
    description: "Triggers when a condition is met for a location",
    filePrefix: "location_"
  },
  {
    name: "INERT",
    description: "Triggers when called from another event and no other time",
    filePrefix: "other_"
  },
  {
    name: "UNIT",
    description: "Triggers when a condition is met for a unit",
    filePrefix: "unit_"
  }
}
