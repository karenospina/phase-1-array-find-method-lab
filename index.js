function superbowlWin(arrayOfObjects){
    const result = arrayOfObjects.find(obj => obj.result === "W");
    if (result) {
       return result.year;
    } else {
        return undefined;
    }

}
