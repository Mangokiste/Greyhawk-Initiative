import { GreyhawkCombat } from "./greyhawk-combat.js";

function registerSettings() {
  console.log("greyhawk-initiative | Initializing Greyhawk Initiative Module");
  
  CONFIG.Combat.entityClass = LancerCombat;
}

Hooks.once("init", registerSettings);
