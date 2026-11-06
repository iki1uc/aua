// aua.js – so wie es jetzt ist
function RESPO(raw){
  const seg = raw.toLowerCase().split(/\s+/); // ["aua","aua","ja"]
  const pattern = {
    repetition: seg[0]===seg[1], // true – aua aua
    affirmation: seg.includes("ja") // true
  };
  
  // AUA kann nicht "ja" zu sich selbst sagen – kein Autonomie
  // Wenn RAW = "aua aua", dann:
  if(pattern.repetition){
    return {
      status: "blue", // neutral – wie du im README hast
      out: "aua",      // echo – kein move
      change: 0,       // ohne Änderung – muss weg Probe Station Prinzip
      alloc: false
    };
  }
  
  // Wenn RAW = "aua aua ja"
  if(pattern.repetition && pattern.affirmation){
    return {
      status: "yellow", // attention – Muster erkannt, aber neutral
      out: "aua + ja erkannt – kein move – nur Analyse",
      change: 0,
      alloc: false
    };
  }
}
