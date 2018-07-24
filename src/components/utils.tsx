export function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export function isMatch(magicNumber :Number, curentSelection: Number) {
  return magicNumber === curentSelection;
}

export function calculateLives (lives: any){
    const max = 4;
    if (lives === 0){
        lives = max;
    }
    else{
        lives -= 1;
    }
    return lives;
    
}
export const groupings = 12;
export const initSquareValues = ["%","<","H","O","T","E","L","#","!","$","<",">","&","^","C","O","U","R","T","#","@","B","E","E","T","S"];
export const initSquareTypes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
export const initSquareGroupings = [0,1,2,2,2,2,2,3,4,5,6,6,7,8,9,9,9,9,9,10,11,12,12,12,12,12];
export const sqaureTypes = ["None", "DudWord", "WinningWord", "BonusRemoveDud","BonusGiveLife"];