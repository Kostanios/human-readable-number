module.exports = function toReadable (number) {
    var StringNumberArray = String(number).split("");
    var reversStringNumberArray = [];
    
    for(var i = StringNumberArray.length-1; i >= 0 ; i-- ){
        reversStringNumberArray.push(StringNumberArray[i]);
    }
    console.log(reversStringNumberArray);
    if( reversStringNumberArray.length ==  1 && reversStringNumberArray[0] == '0'){return 'zero'}
    var recal = "";
    if(reversStringNumberArray[0] !== undefined){
        if(reversStringNumberArray[0] == 9){
            recal += "nine";
        }
        if(reversStringNumberArray[0] == 8){
            recal += "eight"
        }
        if(reversStringNumberArray[0] == 7){
            recal += "seven"
        }
        if(reversStringNumberArray[0] == 6){
            recal += "six"
        }
        if(reversStringNumberArray[0] == 5){
            recal += "five"
        }
        if(reversStringNumberArray[0] == 4){
            recal += "four"
        }
        if(reversStringNumberArray[0] == 3){
            recal += "three"
        }
        if(reversStringNumberArray[0] == 2){
            recal += "two"
        }
        if(reversStringNumberArray[0] == 1){
            recal += "one"
        }
        if(reversStringNumberArray[1] != undefined && reversStringNumberArray[0]!== '0'){
            recal = " " + recal;
        }
    }
    
        if(reversStringNumberArray[1] != undefined){
            if(reversStringNumberArray[1] == 9){
                recal = "ninety" + recal;
            }
            if(reversStringNumberArray[1] == 8){
                recal = "eighty" + recal;
            }
            if(reversStringNumberArray[1] == 7){
                recal = "seventy" + recal;
            }
            if(reversStringNumberArray[1] == 6){
                recal = "sixty" + recal;
            }
            if(reversStringNumberArray[1] == 5){
                recal = "fifty" + recal;
            }
            if(reversStringNumberArray[1] == 4){
                recal = "forty" + recal;
            }
            if(reversStringNumberArray[1] == 3){
                recal = "thirty" + recal;
            }
            if(reversStringNumberArray[1] == 2){
                recal = "twenty" + recal;
            }
            if(reversStringNumberArray[1] == 1){
                    
                    if(reversStringNumberArray[0] == 9){
                        recal = "nineteen";
                    }
                    if(reversStringNumberArray[0] == 8){
                        recal = "eighteen"
                    }
                    if(reversStringNumberArray[0] == 7){
                        recal = "seventeen"
                    }
                    if(reversStringNumberArray[0] == 6){
                        recal = "sixteen"
                    }
                    if(reversStringNumberArray[0] == 5){
                        recal = "fifteen"
                    }
                    if(reversStringNumberArray[0] == 4){
                        recal = "fourteen"
                    }
                    if(reversStringNumberArray[0] == 3){
                        recal = "thirteen"
                    }
                    if(reversStringNumberArray[0] == 2){
                        recal = "twelve"
                    }
                    if(reversStringNumberArray[0] == 1){
                        recal = "eleven"
                    }
                    if(reversStringNumberArray[0] == 0){
                        recal = "ten";
                    }
                }
               if(reversStringNumberArray[2] != undefined && reversStringNumberArray[1]!=="0"){
                   recal = " " + recal;
               }     
            }

            if(reversStringNumberArray[2] != undefined){
                if(reversStringNumberArray[2] == 9){
                    recal = "nine hundred" + recal;
                }
                if(reversStringNumberArray[2] == 8){
                    recal = "eight hundred" + recal;
                }
                if(reversStringNumberArray[2] == 7){
                    recal = "seven hundred" + recal;
                }
                if(reversStringNumberArray[2] == 6){
                    recal = "six hundred" + recal;
                }
                if(reversStringNumberArray[2] == 5){
                    recal = "five hundred" +recal;
                }
                if(reversStringNumberArray[2] == 4){
                    recal = "four hundred" + recal;
                }
                if(reversStringNumberArray[2] == 3){
                    recal = "three hundred" + recal;
                }
                if(reversStringNumberArray[2] == 2){
                    recal = "two hundred" + recal;
                }
                if(reversStringNumberArray[2] == 1){
                    recal = "one hundred" + recal;
                }
            }
            
    
    return recal;
}


