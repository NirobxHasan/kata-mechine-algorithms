export default function two_crystal_balls(breaks: boolean[]) {
    breaks.map((i)=> console.log(i);)
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;

    for(; i< breaks.length; i += jmpAmount){
        if(breaks[i]){
            break;
        }
    }
    i -= jmpAmount

    for(let j = 0; j<= jmpAmount && i<breaks.length; ++j, ++i){
        if(breaks[i]){
            console.log(i);
            return i;
        }
    }
    return -1

}


// >npx jest two