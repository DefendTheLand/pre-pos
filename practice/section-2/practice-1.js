'use strict';

function countSameElements(collection) {
  let statistics = new Array;
  for (var i = 0;i<collection.length;count++) {
		 let temp = collection[i];
		 if (judgement(statistics,temp)!=-1) {
		 	statistics[i].count++;					 
		 }else {
		 	statistics.push({key:temp,count:1});		 
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