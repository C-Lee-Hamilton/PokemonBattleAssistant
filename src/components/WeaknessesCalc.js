import { useEffect } from "react";

const WeaknessesComponent = ({ typeName, setWeak }) => {
  useEffect(() => {
    const determineWeaknesses = () => {
      switch (typeName) {
        //NORMAL
        case "NORMAL":
          setWeak(["FIGHTING"]);
          break;
        case "NORMALFIRE":
          setWeak(["WATER", "FIGHTING", "GROUND", "ROCK"]);
          break;
        case "NORMALWATER":
          setWeak(["ELECTRIC", "GRASS", "FIGHTING"]);
          break;
        case "NORMALELECTRIC":
          setWeak(["FIGHTING", "GROUND"]);
          break;
        case "NORMALGRASS":
          setWeak(["FIRE", "ICE", "FIGHTING", "POISON", "FLYING", "BUG"]);
          break;
        case "NORMALICE":
          setWeak(["FIRE", "FIGHTINGx4", "ROCK"]);
          break;
        case "NORMALFIGHTING":
          setWeak(["FIGHTING", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "NORMALPOISON":
          setWeak(["GROUND", "PSYCHIC"]);
          break;
        case "NORMALGROUND":
          setWeak(["WATER", "GRASS", "ICE", "FIGHTING"]);
          break;
        case "NORMALFLYING":
          setWeak(["ELECTRIC", "ICE", "ROCK"]);
          break;
        case "NORMALPSYCHIC":
          setWeak(["BUG", "DARK"]);
          break;
        case "NORMALBUG":
          setWeak(["FIRE", "FLYING", "ROCK"]);
          break;
        case "NORMALROCK":
          setWeak(["WATER", "GRASS", "FIGHTINGx4", "GROUND", "STEEL"]);
          break;
        case "NORMALGHOST":
          setWeak(["DARK"]);
          break;
        case "NORMALDRAGON":
          setWeak(["ICE", "FIGHITNG", "DRAGON", "FAIRY"]);
          break;
        case "NORMALDARK":
          setWeak(["FIGHTINGx4", "BUG", "FAIRY"]);
          break;
        case "NORMALSTEEL":
          setWeak(["FIRE", "FIGHTINGx4", "GROUND"]);
          break;
        case "NORMALFAIRY":
          setWeak(["POISON", "STEEL"]);
          break;
        //FIRE
        case "FIRE":
          setWeak(["WATER", "GROUND", "ROCK"]);
          break;
        case "FIRENORMAL":
          setWeak(["WATER", "FIGHTING", "GROUND", "ROCK"]);
          break;
        case "FIREWATER":
          setWeak(["ELECRIC", "GROUND", "ROCK"]);
          break;
        case "FIREELECTRIC":
          setWeak(["WATER", "GROUNDx4", "ROCK"]);
          break;
        case "FIREGRASS":
          setWeak(["POISON", "FLYING", "ROCK"]);
          break;
        case "FIREICE":
          setWeak(["WATER", "FIGHTING", "GROUND", "ROCKx4"]);
          break;
        case "FIREFIGHTING":
          setWeak(["WATER", "GROUND", "FLYING", "PSYCHIC"]);
          break;
        case "FIREPOISON":
          setWeak(["WATER", "GROUNDx4", "PSYCHIC", "ROCK"]);
          break;
        case "FIREGROUND":
          setWeak(["WATERx4", "GROUND"]);
          break;
        case "FIREFLYING":
          setWeak(["WATER", "ELECTRIC", "ROCKx4"]);
          break;
        case "FIREPSYCHIC":
          setWeak(["WATER", "GROUND", "ROCK", "GHOST", "DARK"]);
          break;
        case "FIREBUG":
          setWeak(["WATER", "FLYING", "ROCKx4"]);
          break;
        case "FIREROCK":
          setWeak(["WATERx4", "FIGHTING", "GROUNDx4", "ROCK"]);
          break;
        case "FIREGHOST":
          setWeak(["WATER", "GROUND", "ROCK", "GHOST", "DARK"]);
          break;
        case "FIREDRAGON":
          setWeak(["GROUND", "ROCK", "DRAGON"]);
          break;
        case "FIREDARK":
          setWeak(["WATER", "FIGHTING", "GROUND", "ROCK"]);
          break;
        case "FIRESTEEL":
          setWeak(["WATER", "FIGHTING", "GROUNDx4"]);
          break;
        case "FIREFAIRY":
          setWeak(["WATER", "POISON", "GROUND", "ROCK"]);
          break;
        //WATER
        case "WATER":
          setWeak(["ELECTRIC", "GRASS"]);
          break;
        case "WATERNORMAL":
          setWeak(["ELECTRIC", "GRASS", "FIGHTING"]);
          break;
        case "WATERFIRE":
          setWeak(["ELECTRIC", "GROUND", "ROCK"]);
          break;
        case "WATERELECTRIC":
          setWeak(["GRASS", "GROUND"]);
          break;
        case "WATERGRASS":
          setWeak(["POISON", "FLYING", "BUG"]);
          break;
        case "WATERICE":
          setWeak(["ELECTRIC", "GRASS", "FIGHTING", "ROCK"]);
          break;
        case "WATERFIGHTING":
          setWeak(["ELECTRIC", "GRASS", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "WATERPOISON":
          setWeak(["ELECTRIC", "GROUND", "PSYCHIC"]);
          break;
        case "WATERGROUND":
          setWeak(["GRASSx4"]);
          break;
        case "WATERFLYING":
          setWeak(["ELECTRICx4", "ROCK"]);
          break;
        case "WATERPSYCHIC":
          setWeak(["ELECTRIC", "GRASS", "BUG", "GHOST", "DARK"]);
          break;
        case "WATERBUG":
          setWeak(["ELECTRIC", "FLYING", "ROCK"]);
          break;
        case "WATERROCK":
          setWeak(["ELECTRIC", "GRASSx4", "FIGHTING", "GROUND"]);
          break;
        case "WATERGHOST":
          setWeak(["ELECTRIC", "GRASS", "GHOST", "DARK"]);
          break;
        case "WATERDRAGON":
          setWeak(["DRAGON", "FAIRY"]);
          break;
        case "WATERDARK":
          setWeak(["ELECTRIC", "GRASS", "FIGHTING", "BUG", "FAIRY"]);
          break;
        case "WATERSTEEL":
          setWeak(["ELECTRIC", "FIGHTING", "GROUND"]);
          break;
        case "WATERFAIRY":
          setWeak(["ELECTRIC", "GRASS", "POISON"]);
          break;
        //ELECTRIC
        case "ELECTRIC":
          setWeak(["GROUND"]);
          break;
        case "ELECTRICNORMAL":
          setWeak(["FIGHTING", "GROUND"]);
          break;
        case "ELECTRICFIRE":
          setWeak(["WATER", "GROUNDx4", "ROCK"]);
          break;
        case "ELECTRICWATER":
          setWeak(["GRASS", "GROUND"]);
          break;
        case "ELECTRICGRASS":
          setWeak(["FIRE", "ICE", "POISON", "BUG"]);
          break;
        case "ELECTRICICE":
          setWeak(["FIRE", "FIGHTING", "GROUND", "ROCK"]);
          break;
        case "ELECTRICFIGHTING":
          setWeak(["GROUND", "PSYCHIC", "FAIRY"]);
          break;
        case "ELECTRICPOISON":
          setWeak(["GROUNDx4", "PSYCHIC"]);
          break;
        case "ELECTRICGROUND":
          setWeak(["WATER", "GRASS", "ICE", "GROUND"]);
          break;
        case "ELECTRICFLYING":
          setWeak(["ICE", "ROCK"]);
          break;
        case "ELECTRICPSYCHIC":
          setWeak(["GROUND", "BUG", "GHOST", "DARK"]);
          break;
        case "ELECTRICBUG":
          setWeak(["FIRE", "ROCK"]);
          break;
        case "ELECTRICROCK":
          setWeak(["WATER", "GRASS", "FIGHTING", "GROUNDx4"]);
          break;
        case "ELECTRICGHOST":
          setWeak(["GROUND", "GHOST", "DARK"]);
          break;
        case "ELECTRICDRAGON":
          setWeak(["ICE", "GROUND", "DRAGON", "FAIRY"]);
          break;
        case "ELECTRICDARK":
          setWeak(["FIGHTING", "GROUND", "BUG", "FAIRY"]);
          break;
        case "ELECTRICSTEEL":
          setWeak(["FIRE", "FIGHTING", "GROUNDx4"]);
          break;
        case "ELECTRICFAIRY":
          setWeak(["POISON", "GROUND"]);
          break;
        //GRASS
        case "GRASS":
          setWeak(["FIRE", "ICE", "POISON", "FLYING", "BUG"]);
          break;
        case "GRASSNORMAL":
          setWeak(["FIRE", "ICE", "FIGHTING", "POISON", "FLYING", "BUG"]);
          break;
        case "GRASSFIRE":
          setWeak(["POISON", "FLYING", "ROCK"]);
          break;
        case "GRASSWATER":
          setWeak(["POISON", "FLYING", "BUG"]);
          break;
        case "GRASSELECTRIC":
          setWeak(["FIRE", "ICE", "POISON", "BUG"]);
          break;
        case "GRASSICE":
          setWeak([
            "FIREx4",
            "FIGHTING",
            "POISON",
            "FLYING",
            "BUG",
            "ROCK",
            "STEEL",
          ]);
          break;
        case "GRASSFIGHTING":
          setWeak(["FIRE", "ICE", "POISON", "FLYINGx4", "PSYCHIC", "FAIRY"]);
          break;
        case "GRASSPOISON":
          setWeak(["FIRE", "ICE", "FLYING", "PSYCHIC"]);
          break;
        case "GRASSGROUND":
          setWeak(["FIRE", "ICEx4", "FLYING", "BUG"]);
          break;
        case "GRASSFLYING":
          setWeak(["FIRE", "ICEx4", "POISON", "FLYING", "ROCK"]);
          break;
        case "GRASSPSYCHIC":
          setWeak([
            "FIRE",
            "ICE",
            "POISON",
            "FLYING",
            "BUGx4",
            "GHOST",
            "DARK",
          ]);
          break;
        case "GRASSBUG":
          setWeak(["FIREx4", "ICE", "POISON", "FLYINGx4", "BUG", "ROCK"]);
          break;
        case "GRASSROCK":
          setWeak(["ICE", "FIGHTING", "BUG", "STEEL"]);
          break;
        case "GRASSGHOST":
          setWeak(["FIRE", "ICE", "FLYING", "GHOST", "DARK"]);
          break;
        case "GRASSDRAGON":
          setWeak(["ICEx4", "POISON", "FLYING", "BUG", "DRAGON", "FAIRY"]);
          break;
        case "GRASSDARK":
          setWeak([
            "FIRE",
            "ICE",
            "FIGHTING",
            "POISON",
            "FLYING",
            "BUGx4",
            "FAIRY",
          ]);
          break;
        case "GRASSSTEEL":
          setWeak(["FIREx4", "FIGHTING"]);
          break;
        case "GRASSFAIRY":
          setWeak(["FIRE", "ICE", "POISONx4", "FLYING", "STEEL"]);
          break;
        //ICE
        case "ICE":
          setWeak(["FIRE", "FIGHTING", "ROCK", "STEEL"]);
          break;
        case "ICENORMAL":
          setWeak(["FIRE", "FIGHTINGx4", "ROCK", "STEEL"]);
          break;
        case "ICEFIRE":
          setWeak(["WATER", "FIGHTING", "GROUND", "ROCKx4"]);
          break;
        case "ICEWATER":
          setWeak(["ELECTRIC", "GRASS", "FIGHTING", "ROCK"]);
          break;
        case "ICEELECTRIC":
          setWeak(["FIRE", "FIGHTING", "GROUND", "ROCK"]);
          break;
        case "ICEGRASS":
          setWeak([
            "FIREx4",
            "FIGHTING",
            "POISON",
            "FLYING",
            "BUG",
            "ROCK",
            "STEEL",
          ]);
          break;
        case "ICEFIGHTING":
          setWeak(["FIRE", "FIGHTING", "FLYING", "PSYCHIC", "STEEL", "FAIRY"]);
          break;
        case "ICEPOISON":
          setWeak(["FIRE", "GROUND", "PSYCHIC", "ROCK", "STEEL"]);
          break;
        case "ICEGROUND":
          setWeak(["FIRE", "WATER", "GRASS", "FIGHTING", "STEEL"]);
          break;
        case "ICEFLYING":
          setWeak(["FIRE", "ELECTRIC", "ROCKx4", "STEEL"]);
          break;
        case "ICEPSYCHIC":
          setWeak(["FIRE", "BUG", "ROCK", "GHOST", "DARK", "sTEEL"]);
          break;
        case "ICEBUG":
          setWeak(["FIREx4", "FLYING", "ROCKx4", "STEEL"]);
          break;
        case "ICEROCK":
          setWeak([
            "WATER",
            "GRASS",
            "FIGHTINGx4",
            "GROUND",
            "ROCK",
            "STEELx4",
          ]);
          break;
        case "ICEGHOST":
          setWeak(["FIRE", "ROCK", "GHOST", "DARK", "STEEL"]);
          break;
        case "ICEDRAGON":
          setWeak(["FIGHTING", "ROCK", "DRAGON", "STEEL", "FAIRY"]);
          break;
        case "ICEDARK":
          setWeak(["FIRE", "FIGHTINGx2", "BUG", "ROCK", "STEEL", "FAIRY"]);
          break;
        case "ICESTEEL":
          setWeak(["FIREx4", "FIGHINGx4", "GROUND"]);
          break;
        case "ICEFAIRY":
          setWeak(["FIRE", "POISON", "ROCK", "STEELx4"]);
          break;
        //FIGHTING
        case "FIGHTING":
          setWeak(["FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGNORMAL":
          setWeak(["FIGHTING", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGFIRE":
          setWeak(["WATER", "GROUND", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGWATER":
          setWeak(["ELECRIC", "GRASS", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGELECTRIC":
          setWeak(["GROUND", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGGRASS":
          setWeak(["FIRE", "ICE", "POISON", "FLYINGx4", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGICE":
          setWeak(["FIRE", "FIGHTING", "FLYING", "PSYCHIC", "STEEL", "FAIRY"]);
          break;
        case "FIGHTINGPOISON":
          setWeak(["GROUND", "FLYING", "PSYCHICx4"]);
          break;
        case "FIGHTINGGROUND":
          setWeak(["WATER", "GRASS", "ICE", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGFLYING":
          setWeak(["ELECTRIC", "ICE", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGPSYCHIC":
          setWeak(["FLYING", "GHOST", "FAIRY"]);
          break;
        case "FIGHTINGBUG":
          setWeak(["FIRE", "FLYINGx4", "PSYCHIC", "FAIRY"]);
          break;
        case "FIGHTINGROCK":
          setWeak([
            "WATER",
            "GRASS",
            "FIGHTING",
            "GROUND",
            "PSYCHIC",
            "STEEL",
            "FAIRY",
          ]);
          break;
        case "FIGHTINGGHOST":
          setWeak(["FLYING", "PSYCHIC", "GHOST", "FAIRY"]);
          break;
        case "FIGHTINGDRAGON":
          setWeak(["ICE", "FLYING", "PSYCHIC", "DRAGON", "FAIRYx4"]);
          break;
        case "FIGHTINGDARK":
          setWeak(["FIGHTING", "FLYING", "FAIRYx4"]);
          break;
        case "FIGHTINGSTEEL":
          setWeak(["FIRE", "FIGHTING", "GROUND"]);
          break;
        case "FIGHTINGFAIRY":
          setWeak(["POISON", "FLYING", "PSYCHIC", "STEEL", "FAIRY"]);
          break;
        //POISON
        case "POISON":
          setWeak(["GROUND", "PSYCHIC"]);
          break;
        case "POISONNORMAL":
          setWeak(["GROUND", "PSYCHIC"]);
          break;
        case "POISONFIRE":
          setWeak(["WATER", "GROUNDx4", "PSYCHIC", "ROCK"]);
          break;
        case "POISONWATER":
          setWeak(["ELECTRIC", "GROUND", "PSYCHIC"]);
          break;
        case "POISONELECTRIC":
          setWeak(["GROUNDx4", "PSYCHIC"]);
          break;
        case "POISONGRASS":
          setWeak(["FIRE", "ICE", "FLYING", "PSYCHIC"]);
          break;
        case "POISONICE":
          setWeak(["FIRE", "GROUND", "PSYCHIC", "ROCK", "STEEL"]);
          break;
        case "POISONFIGHTING":
          setWeak(["GROUND", "FLYING", "PSYCHICx4"]);
          break;
        case "POISONGROUND":
          setWeak(["WATER", "GROUND", "PSYCHIC"]);
          break;
        case "POISONFLYING":
          setWeak(["ELECTRIC", "ICE", "PSYCHIC", "ROCK"]);
          break;
        case "POISONPSYCHIC":
          setWeak(["GROUND", "GHOST", "DARK"]);
          break;
        case "POISONBUG":
          setWeak(["FIRE", "FLYING", "PSYHIC", "ROCK"]);
          break;
        case "POISONROCK":
          setWeak(["WATER", "GROUNDx4", "PSYCHIC", "STEEL"]);
          break;
        case "POISONGHOST":
          setWeak(["GROUND", "PSYCHIC", "GHOST", "DARK"]);
          break;
        case "POISONDRAGON":
          setWeak(["ICE", "GROUND", "PSYCHIC", "DRAGON"]);
          break;
        case "POISONDARK":
          setWeak(["GROUND"]);
          break;
        case "POISONSTEEL":
          setWeak(["FIRE", "GROUNDx4"]);
          break;
        case "POISONFAIRY":
          setWeak(["GROUND", "PSYCHIC", "STEEL"]);
          break;
        //GROUND
        case "GROUND":
          setWeak(["WATER", "GRASS", "ICE"]);
          break;
        case "GROUNDNORMAL":
          setWeak(["WATER", "GRASS", "ICE", "FIGHTING"]);
          break;
        case "GROUNDFIRE":
          setWeak(["WATERx4", "GROUND"]);
          break;
        case "GROUNDWATER":
          setWeak(["GRASSx4"]);
          break;
        case "GROUNDELECTRIC":
          setWeak(["WATER", "GRASS", "ICE", "GROUND"]);
          break;
        case "GROUNDGRASS":
          setWeak(["FIRE", "ICEx4", "FLYING", "BUG"]);
          break;
        case "GROUNDICE":
          setWeak(["FIRE", "WATER", "GRASS", "FIGHTING", "STEEL"]);
          break;
        case "GROUNDFIGHTING":
          setWeak(["WATER", "GRASS", "ICE", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "GROUNDPOISON":
          setWeak(["WATER", "ICE", "GROUND", "PSYCHIC"]);
          break;
        case "GROUNDFLYING":
          setWeak(["WATER", "ICEx4"]);
          break;
        case "GROUNDPSYCHIC":
          setWeak(["WATER", "GRASS", "ICE", "BUG", "GHOST", "DARK"]);
          break;
        case "GROUNDBUG":
          setWeak(["FIRE", "WATER", "ICE", "FLYING"]);
          break;
        case "GROUNDROCK":
          setWeak(["WATERx4", "GRASSx4", "ICE", "FIGHTING", "GROUND", "STEEL"]);
          break;
        case "GROUNDGHOST":
          setWeak(["WATER", "GRASS", "ICE", "GHOST", "DARK"]);
          break;
        case "GROUNDDRAGON":
          setWeak(["ICEx4", "DRAGON", "FAIRY"]);
          break;
        case "GROUNDDARK":
          setWeak(["WATER", "GRASS", "ICE", "FIGHTING", "BUG", "FAIRY"]);
          break;
        case "GROUNDSTEEL":
          setWeak(["FIRE", "WATER", "FIGHTING", "GROUND"]);
          break;
        case "GROUNDFAIRY":
          setWeak(["WATER", "GRASS", "ICE", "STEEL"]);
          break;
        //FLYING
        case "FLYING":
          setWeak(["ELECTRIC", "ICE", "ROCK"]);
          break;
        case "FLYINGNORMAL":
          setWeak(["ELECTRIC", "ICE", "ROCK"]);
          break;
        case "FLYINGFIRE":
          setWeak(["WATER", "ELECTRIC", "ROCKx4"]);
          break;
        case "FLYINGWATER":
          setWeak(["ELECTRICx4", "ROCK"]);
          break;
        case "FLYINGELECTRIC":
          setWeak(["ICE", "ROCK"]);
          break;
        case "FLYINGGRASS":
          setWeak(["FIRE", "ICEx4", "POIOSN", "FLYING", "ROCK"]);
          break;
        case "FLYINGICE":
          setWeak(["FIRE", "ELECTRIC", "ROCKx4", "STEEL"]);
          break;
        case "FLYINGFIGHTING":
          setWeak(["ELECTRIC", "ICE", "FLYING", "PSYCHIC", "FAIRY"]);
          break;
        case "FLYINGPOISON":
          setWeak(["ELECTRIC", "ICE", "PSYCHIC", "ROCK"]);
          break;
        case "FLYINGGROUND":
          setWeak(["WATER", "ICEx4"]);
          break;
        case "FLYINGPSYCHIC":
          setWeak(["ELECTRIC", "ICE", "ROCK", "GHOST", "DARK"]);
          break;
        case "FLYINGBUG":
          setWeak(["FIRE", "ELECTRIC", "ICE", "FLYING", "ROCKx4"]);
          break;
        case "FLYINGROCK":
          setWeak(["WATER", "ELECTRIC", "ICE", "ROCK"]);
          break;
        case "FLYINGGHOST":
          setWeak(["ELECTRIC", "ICE", "ROCK", "GHOST", "DARK"]);
          break;
        case "FLYINGDRAGON":
          setWeak(["ICEx4", "ROCK", "DRAGON", "FAIRY"]);
          break;
        case "FLYINGDARK":
          setWeak(["ELECTRIC", "ICE", "ROCK", "FAIRY"]);
          break;
        case "FLYINGSTEEL":
          setWeak(["FIRE", "ELECTRIC"]);
          break;
        case "FLYINGFAIRY":
          setWeak(["ELECTRIC", "ICE", "POISON", "ROCK", "STEEL"]);
          break;
        //PSYCHIC
        case "PSYCHIC":
          setWeak(["BUG", "GHOST", "DARK"]);
          break;
        case "PSYCHICNORMAL":
          setWeak(["BUG", "DARK"]);
          break;
        case "PSYCHICFIRE":
          setWeak(["WATER", "GROUND", "ROCK", "GHOST", "DARK"]);
          break;
        case "PSYCHICWATER":
          setWeak(["ELECTRIC", "GRASS", "BUG", "GHOST", "DARK"]);
          break;
        case "PSYCHICELECTRIC":
          setWeak(["GROUND", "BUG", "GHOST", "DARK"]);
          break;
        case "PSYCHICGRASS":
          setWeak([
            "FIRE",
            "ICE",
            "POISON",
            "FLYING",
            "BUGx4",
            "GHOST",
            "DARK",
          ]);
          break;
        case "PSYCHICICE":
          setWeak(["FIRE", "BUG", "ROCK", "GHOST", "DARK", "STEEL"]);
          break;
        case "PSYCHICFIGHTING":
          setWeak(["FLYING", "GHOST", "FAIRY"]);
          break;
        case "PSYCHICPOISON":
          setWeak(["GROUND", "GHOST", "DARK"]);
          break;
        case "PSYCHICGROUND":
          setWeak(["WATER", "GRASS", "ICE", "BUG", "GHOST", "DARK"]);
          break;
        case "PSYCHICFLYING":
          setWeak(["ELECTRIC", "ICE", "ROCK", "GHOST", "DARK"]);
          break;
        case "PSYCHICBUG":
          setWeak(["FIRE", "FLYING", "BUG", "ROCK", "GHOST", "DARK"]);
          break;
        case "PSYCHICROCK":
          setWeak([
            "WATER",
            "GRASS",
            "GROUND",
            "BUG",
            "GHOST",
            "DARK",
            "STEEL",
          ]);
          break;
        case "PSYCHICGHOST":
          setWeak(["GHOSTx4", "DARKx4"]);
          break;
        case "PSYCHICDRAGON":
          setWeak(["ICE", "BUG", "GHOST", "DRAGON", "DARK", "FAIRY"]);
          break;
        case "PSYCHICDARK":
          setWeak(["BUGx4", "FAIRY"]);
          break;
        case "PSYCHICSTEEL":
          setWeak(["FIRE", "GROUND", "GHOST", "DARK"]);
          break;
        case "PSYCHICFAIRY":
          setWeak(["POISON", "GHOST", "STEEL"]);
          break;
        //BUG
        case "BUG":
          setWeak(["FIRE", "FLYING", "ROCK"]);
          break;
        case "BUGNORMAL":
          setWeak(["FIRE", "FLYING", "ROCK"]);
          break;
        case "BUGFIRE":
          setWeak(["WATER", "FLYING", "ROCKx4"]);
          break;
        case "BUGWATER":
          setWeak(["ELECTRIC", "FLYING", "ROCK"]);
          break;
        case "BUGELECTRIC":
          setWeak(["FIRE", "ROCK"]);
          break;
        case "BUGGRASS":
          setWeak(["FIREx4", "ICE", "POISON", "FLYINGx4", "BUG", "ROCK"]);
          break;
        case "BUGICE":
          setWeak(["FIREx4", "FLYING", "ROCKx4", "STEEL"]);
          break;
        case "BUGFIGHTING":
          setWeak(["FIRE", "FLYINGx4", "PSYCHIC", "FAIRY"]);
          break;
        case "BUGPOISON":
          setWeak(["FIRE", "FLYING", "PSYCHIC", "ROCK"]);
          break;
        case "BUGGROUND":
          setWeak(["FIRE", "WATER", "ICE", "FLYING"]);
          break;
        case "BUGFLYING":
          setWeak(["FIRE", "ELECTRIC", "ICE", "FLYING", "ROCKx4"]);
          break;
        case "BUGPSYCHIC":
          setWeak(["FIRE", "FLYING", "BUG", "ROCK", "GHOST", "DARK"]);
          break;
        case "BUGROCK":
          setWeak(["WATER", "ROCK", "STEEL"]);
          break;
        case "BUGGHOST":
          setWeak(["FIRE", "FLYING", "ROCK", "GHOST", "DARK"]);
          break;
        case "BUGDRAGON":
          setWeak(["ICE", "FLYING", "ROCK", "DRAGON", "FAIRY"]);
          break;
        case "BUGDARK":
          setWeak(["FIRE", "FLYING", "BUG", "ROCK", "FAIRY"]);
          break;
        case "BUGSTEEL":
          setWeak(["FIREx4"]);
          break;
        case "BUGFAIRY":
          setWeak(["FIRE", "POISON", "FLYING", "ROCK", "STEEL"]);
          break;
        //ROCK
        case "ROCK":
          setWeak(["WATER", "GRASS", "FIGHTING", "GROUND", "STEEL"]);
          break;
        case "ROCKNORMAL":
          setWeak(["WATER", "GRASS", "FIGHTINGx4", "GROUND", "STEEL"]);
          break;
        case "ROCKFIRE":
          setWeak(["WATERx4", "FIGHTING", "GROUNDx4", "ROCK"]);
          break;
        case "ROCKWATER":
          setWeak(["ELECTRIC", "GRASSx4", "FIGHTING", "GROUND"]);
          break;
        case "ROCKELECTRIC":
          setWeak(["WATER", "GRASS", "FIGHTING", "GROUNDx4"]);
          break;
        case "ROCKGRASS":
          setWeak(["ICE", "FIGHTING", "BUG", "STEEL"]);
          break;
        case "ROCKICE":
          setWeak([
            "WATER",
            "GRASS",
            "FIGHTINGx4",
            "GROUND",
            "ROCK",
            "STEELx4",
          ]);
          break;
        case "ROCKFIGHTING":
          setWeak([
            "WATER",
            "GRASS",
            "FIGHTING",
            "GROUND",
            "PSYCHIC",
            "STEEL",
            "FAIRY",
          ]);
          break;
        case "ROCKPOISON":
          setWeak(["WATER", "GROUNDx4", "PSYCHIC", "STEEL"]);
          break;
        case "ROCKGROUND":
          setWeak(["WATERx4", "GRASSx4", "ICE", "FIGHTING", "GROUND", "STEEL"]);
          break;
        case "ROCKFLYING":
          setWeak(["WATER", "ELECTRIC", "ICE", "ROCK", "STEEL"]);
          break;
        case "ROCKPSYCHIC":
          setWeak([
            "WATER",
            "GRASS",
            "GROUND",
            "BUG",
            "GHOST",
            "DARK",
            "STEEL",
          ]);
          break;
        case "ROCKBUG":
          setWeak(["WATER", "ROCK", "STEEL"]);
          break;
        case "ROCKGHOST":
          setWeak(["WATER", "GRASS", "GROUND", "GHOST", "DARK", "STEEL"]);
          break;
        case "ROCKDRAGON":
          setWeak(["ICE", "FIGHTING", "GROUND", "DRAGON", "STEEL", "FAIRY"]);
          break;
        case "ROCKDARK":
          setWeak([
            "WATER",
            "GRASS",
            "FIGHTINGx4",
            "GROUND",
            "BUG",
            "STEEL",
            "FAIRY",
          ]);
          break;
        case "ROCKSTEEL":
          setWeak(["WATER", "FIGHTINGx4", "GROUNDx4"]);
          break;
        case "ROCKFAIRY":
          setWeak(["WATER", "GRASS", "GROUND", "STEELx4"]);
          break;
        //GHOST
        case "GHOST":
          setWeak(["GHOST", "DARK"]);
          break;
        case "GHOSTNORMAL":
          setWeak(["DARK"]);
          break;
        case "GHOSTFIRE":
          setWeak(["WATER", "GROUND", "ROCK", "GHOST", "DARK"]);
          break;
        case "GHOSTWATER":
          setWeak(["ELECTRIC", "GRASS", "GHOST", "DARK"]);
          break;
        case "GHOSTELECTRIC":
          setWeak(["GROUND", "GHOST", "DARK"]);
          break;
        case "GHOSTGRASS":
          setWeak(["FIRE", "ICE", "FLYING", "GHOST", "DARK"]);
          break;
        case "GHOSTICE":
          setWeak(["FIRE", "ROCK", "GHOST", "DARK", "STEEL"]);
          break;
        case "GHOSTFIGHTING":
          setWeak(["FLYING", "PSYCHIC", "GHOST", "FAIRY"]);
          break;
        case "GHOSTPOISON":
          setWeak(["GROUND", "PSYCHIC", "GHOST", "DARK"]);
          break;
        case "GHOSTGROUND":
          setWeak(["WATER", "GRASS", "ICE", "GHOST", "DARK"]);
          break;
        case "GHOSTFLYING":
          setWeak(["ELECTRIC", "ICE", "ROCK", "GHOST", "DARK"]);
          break;
        case "GHOSTPSYCHIC":
          setWeak(["GHOSTx4", "DARKx4"]);
          break;
        case "GHOSTBUG":
          setWeak(["FIRE", "FLYING", "ROCK", "GHOST", "DARK"]);
          break;
        case "GHOSTROCK":
          setWeak(["WATER", "GRASS", "GROUND", "GHOST", "DARK", "STEEL"]);
          break;
        case "GHOSTDRAGON":
          setWeak(["ICE", "GHOST", "DRAGON", "DARK", "FAIRY"]);
          break;
        case "GHOSTDARK":
          setWeak(["FAIRY"]);
          break;
        case "GHOSTSTEEL":
          setWeak(["FIRE", "GROUND", "GHOST", "DARK"]);
          break;
        case "GHOSTFAIRY":
          setWeak(["GHOST", "STEEL"]);
          break;
        //DRAGIN
        case "DRAGON":
          setWeak(["ICE", "DRAGON", "FAIRY"]);
          break;
        case "DRAGONNORMAL":
          setWeak(["ICE", "FIGHTING", "DRAGON", "FAIRY"]);
          break;
        case "DRAGONFIRE":
          setWeak(["GROUND", "ROCK", "DRAGON"]);
          break;
        case "DRAGONWATER":
          setWeak(["DRAGON", "FAIRY"]);
          break;
        case "DRAGONELECTRIC":
          setWeak(["ICE", "GROUND", "DRAGON", "FAIRY"]);
          break;
        case "DRAGONGRASS":
          setWeak(["ICEx4", "POISON", "FLYING", "BUG", "DRAGON", "FAIRY"]);
          break;
        case "DRAGONICE":
          setWeak(["FIGHTING", "ROCK", "DRAGON", "STEEL", "FAIRY"]);
          break;
        case "DRAGONFIGHTING":
          setWeak(["ICE", "FLYING", "PSYCHIC", "DRAGON", "FAIRYx4"]);
          break;
        case "DRAGONPOISON":
          setWeak(["ICE", "GROUND", "PSYCHIC", "DRAGON"]);
          break;
        case "DRAGONGROUND":
          setWeak(["ICEx4", "DRAGON", "FAIRY"]);
          break;
        case "DRAGONFLYING":
          setWeak(["ICEx4", "ROCK", "DRAGON", "FAIRY"]);
          break;
        case "DRAGONPSYCHIC":
          setWeak(["ICE", "BUG", "GHOST", "DRAGON", "DARK", "FAIRY"]);
          break;
        case "DRAGONBUG":
          setWeak(["ICE", "FLYING", "ROCK", "DRAGON", "FAIRY"]);
          break;
        case "DRAGONROCK":
          setWeak(["ICE", "FIGHTING", "GROUND", "DRAGON", "STEEL", "FAIRY"]);
          break;
        case "DRAGONGHOST":
          setWeak(["ICE", "GHOST", "DRAGON", "DARK", "FAIRY"]);
          break;
        case "DRAGONDARK":
          setWeak(["ICE", "FIGHTING", "BUG", "DRAGON", "FAIRYx4"]);
          break;
        case "DRAGONSTEEL":
          setWeak(["FIGHTING", "GROUND"]);
          break;
        case "DRAGONFAIRY":
          setWeak(["ICE", "POISON", "STEEL", "FAIRY"]);
          break;
        //DARK
        case "DARK":
          setWeak(["FIGHTING", "BUG", "FAIRY"]);
          break;
        case "DARKNORMAL":
          setWeak(["FIGHTINGx4", "BUG", "FAIRY"]);
          break;
        case "DARKFIRE":
          setWeak(["WATER", "FIGHTING", "GROUND", "ROCK"]);
          break;
        case "DARKWATER":
          setWeak(["ELECTRIC", "GRASS", "FIGHTING", "BUG", "FAIRY"]);
          break;
        case "DARKELECTRIC":
          setWeak(["FIGHTING", "GROUND", "BUG", "FAIRY"]);
          break;
        case "DARKGRASS":
          setWeak([
            "FIRE",
            "ICE",
            "FIGHTING",
            "POISON",
            "FLYING",
            "BUGx4",
            "FAIRY",
          ]);
          break;
        case "DARKICE":
          setWeak(["FIRE", "FIGHTINGx4", "BUG", "ROCK", "STEEL", "FAIRY"]);
          break;
        case "DARKFIGHTING":
          setWeak(["FIGHTING", "FLYING", "FAIRYx4"]);
          break;
        case "DARKPOISON":
          setWeak(["GROUND"]);
          break;
        case "DARKGROUND":
          setWeak(["WATER", "GRASS", "ICE", "FIGHTING", "POISON", "BUG"]);
          break;
        case "DARKFLYING":
          setWeak(["ELECTRIC", "ICE", "ROCK", "FAIRY"]);
          break;
        case "DARKPSYCHIC":
          setWeak(["BUGx4", "FAIRY"]);
          break;
        case "DARKBUG":
          setWeak(["FIRE", "FLYING", "BUG", "ROCK", "FAIRY"]);
          break;
        case "DARKROCK":
          setWeak([
            "WATER",
            "GRASS",
            "FIGHTINGx4",
            "GROUND",
            "BUG",
            "STEEL",
            "FAIRY",
          ]);
          break;
        case "DARKGHOST":
          setWeak(["FAIRY"]);
          break;
        case "DARKDRAGON":
          setWeak(["ICE", "FIGHTING", "BUG", "DRAGON", "FAIRYx4"]);
          break;
        case "DARKSTEEL":
          setWeak(["FIRE", "FIGHTINGx4", "GROUND"]);
          break;
        case "DARKFAIRY":
          setWeak(["POISON", "STEEL", "FAIRY"]);
          break;
        //STEEL
        case "STEEL":
          setWeak(["FIRE", "FIGHTING", "GROUND"]);
          break;
        case "STEELNORMAL":
          setWeak(["FIRE", "FIGHTINGx4", "GROUND"]);
          break;
        case "STEELFIRE":
          setWeak(["WATER", "FIGHTING", "GROUNDx4"]);
          break;
        case "STEELWATER":
          setWeak(["ELECTRIC", "FIGHTING", "GROUND"]);
          break;
        case "STEELELECTRIC":
          setWeak(["FIRE", "FIGHTING", "GROUNDx4"]);
          break;
        case "STEELGRASS":
          setWeak(["FIREx4", "FIGHTING"]);
          break;
        case "STEELICE":
          setWeak(["FIREx4", "FIGHTINGx4", "GROUND"]);
          break;
        case "STEELFIGHTING":
          setWeak(["FIRE", "FIGHTING", "GROUND"]);
          break;
        case "STEELPOISON":
          setWeak(["FIRE", "GROUNDx4"]);
          break;
        case "STEELGROUND":
          setWeak(["FIRE", "WATER", "FIGHTING", "GROUND"]);
          break;
        case "STEELFLYING":
          setWeak(["FIRE", "ELECTRIC"]);
          break;
        case "STEELPSYCHIC":
          setWeak(["FIRE", "GROUND", "GHOST", "DARK"]);
          break;
        case "STEELBUG":
          setWeak(["FIREx4"]);
          break;
        case "STEELROCK":
          setWeak(["WATER", "FIGHTINGx4", "GROUNDx4"]);
          break;
        case "STEELGHOST":
          setWeak(["FIRE", "GROUND", "GHOST", "DARK"]);
          break;
        case "STEELDRAGON":
          setWeak(["FIGHTING", "GROUND"]);
          break;
        case "STEELDARK":
          setWeak(["FIRE", "FIGHTINGx4", "GROUND"]);
          break;
        case "STEELFAIRY":
          setWeak(["FIRE", "GROUND"]);
          break;
        //FAIRY
        case "FAIRY":
          setWeak(["POISON", "STEEL"]);
          break;
        case "FAIRYNORMAL":
          setWeak(["POISON", "STEEL"]);
          break;
        case "FAIRYFIRE":
          setWeak(["WATER", "POISON", "GROUND", "ROCK"]);
          break;
        case "FAIRYWATER":
          setWeak(["ELECTRIC", "GRASS", "POISON"]);
          break;
        case "FAIRYELECTRIC":
          setWeak(["POISON", "GROUND"]);
          break;
        case "FAIRYGRASS":
          setWeak(["FIRE", "ICE", "POISONx4", "FLYING", "STEEL"]);
          break;
        case "FAIRYICE":
          setWeak(["FIRE", "POISON", "ROCK", "STEELx4"]);
          break;
        case "FAIRYFIGHTING":
          setWeak(["POISON", "FLYING", "PSYCHIC", "STEEL", "FAIRY"]);
          break;
        case "FAIRYPOISON":
          setWeak(["GROUND", "PSYCHIC", "STEEL"]);
          break;
        case "FAIRYGROUND":
          setWeak(["WATER", "GRASS", "ICE", "STEEL"]);
          break;
        case "FAIRYFLYING":
          setWeak(["ELECTRIC", "ICE", "POISON", "ROCK", "STEEL"]);
          break;
        case "FAIRYPSYCHIC":
          setWeak(["POISON", "GHOST", "STEEL"]);
          break;
        case "FAIRYBUG":
          setWeak(["FIRE", "POISON", "FLYING", "ROCK", "STEEL"]);
          break;
        case "FAIRYROCK":
          setWeak(["WATER", "GRASS", "GROUND", "STEELx4"]);
          break;
        case "FAIRYGHOST":
          setWeak(["GHOST", "STEEL"]);
          break;
        case "FAIRYDRAGON":
          setWeak(["ICE", "POISON", "STEEL", "FAIRY"]);
          break;
        case "FAIRYDARK":
          setWeak(["POISON", "STEEL", "FAIRY"]);
          break;
        case "FAIRYSTEEL":
          setWeak(["FIRE", "GROUND"]);
          break;

        default:
          setWeak([]);
      }
    };

    determineWeaknesses();
  }, [typeName, setWeak]);

  return null;
};

export default WeaknessesComponent;
