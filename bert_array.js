var Bert = require('./bert.js');

function encodeArray(arr){

    return Bert.binary_to_list(Bert.encode(bertEncodeArray(arr,false)));

}

function bertEncodeArray(arr,isElem){

    let isList = false;
    let prevElemType = "";
    let elemType = "";
    let encArr = [];
    
    if (arr.length<=0){
        if (!isElem)
            return  Bert.nilobject() //String.fromCharCode(131)+String.fromCharCode(106);
        else
            return  Bert.nilobject() //String.fromCharCode(106);
    }

    arr.forEach(element => {
        if (!isList){
            if (elemType!=prevElemType)
            {
                isList=true;
                //break;
            }
            elemType = typeof element
            
            if (elemType!="number" || element<0 || element>255 || !Number.isInteger(element)){
                isList = true;
                //break;
            }
            prevElemType = elemType;
        }
    });
    
    if (!isList){
        s="";
        arr.forEach(element => {
            s+=String.fromCharCode(element);
        });
        encArr=s;
    } else {
        arr.forEach(element => {
            if (element.length>=0){
                encArr.push(bertEncodeArray(element,true));
            }else if (typeof element == "boolean"){
                if (element==true) encArr.push(Bert.atom('true'));
                if (element==false) encArr.push(Bert.atom('false'));
            }else { 
                encArr.push(element);
            }
        });
    }

    return encArr
}

module.exports = {
    encodeArray
}