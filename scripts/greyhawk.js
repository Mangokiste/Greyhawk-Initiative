
export class GreyhawkCombat extends Combat {
    @Override
    _sortCombatants(a, b) {
      return super._sortCombatants(b, a);
        /*const ia = Number.isNumeric(a.initiative) ? a.initiative : 9999;
        const ib = Number.isNumeric(b.initiative) ? b.initiative : 9999;

        let ci = ia - ib;
        if ( ci !== 0 ) return ci;

        let [an, bn] = [a.token?.name || "", b.token?.name || ""];
        let cn = an.localeCompare(bn);
        if ( cn !== 0 ) return cn;

        return a.tokenId - b.tokenId;
        */
      }
}
