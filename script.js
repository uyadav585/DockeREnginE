function sync(){
    let selectInputValue = document.getElementById("searchBox").value;
    console.log(selectInputValue);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.1.17/cgi-bin/docker.py?x=" +selectInputValue, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("container").innerHTML = output;
    }
  }   
  