var searchText=[];
var searchIdx1, searchIdx2;
var finalSearchText="";
function isSearch(str){
  if(str.indexOf("검색")) return true;
  else return false;
}
function splitstr(str){
  if(isSearch(str)){
    searchText=str.split("");
  }
  else return false;
}
function getIdx(arr){
  for(var i=arr.length-2; i>=0; i--){
    if(arr[i]=="검" && arr[i+1]=="색"){
      searchIdx2=i-1;
      if(arr[i-1]=="을" || arr[i-1]=="를"){
        searchIdx2--;
      }
      else if(arr[i-2]=="을" || arr[i-2]=="를"){
        searchIdx2-=2;
      }
      searchIdx1=0;
      break;
    }
  }
}

function makeSearchText(){
  for(var i=searchIdx1; i<=searchIdx2; i++){
    if(searchText[i]!=" ") finalSearchText+=searchText[i];
    else finalSearchText+="+";
  }
}

function sumSearch(str, arr){
  splitstr(str);
  getIdx(searchText);
  makeSearchText();
  console.log("http://www.google.co.kr/search?site=&source=hp&ei=pZqBWPiyBcqD8wXNy6fYCA&q="+finalSearchText);
  finalSearchText="";
}

sumSearch(명령 내용, searchText);
