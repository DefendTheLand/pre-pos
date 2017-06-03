'use strict';

function countSameElements(collection) {
  let statistics = new Array;
  for (var i = 0;i<collection.length;count++) {
		 let temp = collection[i];
		 if (collection[i].length<2) {
			if (judgement(statistics,temp)!=-1) {
		 		statistics[i].count++;					 
		 	}else {
		 		statistics.push({key:temp,count:1});		 
		 	}		 
		 }else {
			var count = a.replace(/[^0-9]+/ig,"");
			var word = a.replace(/[^a-z]+/ig,""); 
			if (judgement(statistics,word)!=-1) {
		 		statistics[i].count += count;					 
		 	}else {
		 		statistics.push({key:word,count:count});		 
		 	}
		 }
  }
}

function judgement(array,x) {
	for (var i = 0;i < array.length;i++) {
		if (array[i] === x) {
			return i;		
		}
	}
	return -1;
}