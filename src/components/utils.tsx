
export const maxLives = 4;

export function isMatch(magicNumber :Number, curentSelection: Number) {
  return magicNumber === curentSelection;
}

export function calculateLives (lives: any){
    return (lives === 0 ? maxLives : lives-=1);
}
export const groupings = 12;
export const initSquareValues = ["%","<","H","O","T","E","L","#","!","$","<",">","&","^","C","O","U","R","T","#","@","B","E","E","T","S"];
export const initSquareTypes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const initSquareGroupings = [0,1,2,2,2,2,2,3,4,5,6,6,7,8,9,9,9,9,9,10,11,12,12,12,12,12];
export const sqaureTypes = ["None", "DudWord", "WinningWord", "BonusRemoveDud","BonusGiveLife"];

export const json_config = {
  "title": "Hi World 2018",
  "sqaureTypes": [
    "Error", 
    "Incorrect", 
    "Congrats", 
    "Dud Removed",
    "Extra Life"
  ],
  "levels" :
  [
    {
      id: 1,
      groupingsCount: 12,
      displayValues: ["%","<","H","O","T","E","L","#","!","$","<",">","&","^","C","O","U","R","T","#","@","B","E","E","T","S"],
      typeMappings: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      dataGroupings: [0,1,2,2,2,2,2,3,4,5,6,6,7,8,9,9,9,9,9,10,11,12,12,12,12,12]
    }
  ]
}