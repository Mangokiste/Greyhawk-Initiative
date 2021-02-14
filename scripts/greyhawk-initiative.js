import { GreyhawkCombat } from "./greyhawk-combat.js";

function registerSettings() {
  console.log("greyhawk-initiative | Initializing Greyhawk Initiative Module");
  
  CONFIG.Combat.entityClass = GreyhawkCombat;
}

Hooks.once("init", registerSettings);
