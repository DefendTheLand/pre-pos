'use strict';

function collectSameElements(collectionA, objectB) {
  var collection = new Array;
	for (var count = 0;count<collectionA.length;count++) {
		var temp = collectionA[count];
		if(judgement(objectB.value,temp)){
			collection.push(temp);		
		}			
	}
	return collection;
}

function judgement(array,x) {
	for (var i = 0;i < array.length;i++) {
		if (array[i] === x) {
			return true;		
		}
	}
	return false;
}