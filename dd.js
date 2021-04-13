var a=['The bus came slowly. There were 12 people on the bus. Three got on and five got off.',
'The bus drove off again. At the next stop, nine people got on, six people got off.',
'The bus left again. Two people got off. No one got on.',
'Do not count blindly!',
'At the next stop, two people came up, two people went down.',
'At another stop, the door opened, but no one got on or off.',
'At the next stop, three passengers came up and one went down.',
'Do not ignore my tips!',
'The bus came to the station again. A passenger got on, but no one got off.',
'The bus went on and on. At another stop, six passengers got on and three got off.',
'How many stops did the bus pass altogether?'];
var f=0;
function showTopic(){
  if(f==0){
    document.getElementById("demo").innerHTML=a[0];
}
if(f==1)
  {document.getElementById("demo").innerHTML=a[1];
}
if(f==2)
  {document.getElementById("demo").innerHTML=a[2];
}
if(f==3)
{alert(a[3])
}
if(f==4)
  {document.getElementById("demo").innerHTML=a[4];
}
  if(f==5)
    {document.getElementById("demo").innerHTML=a[5];
}
    if(f==6)
      {document.getElementById("demo").innerHTML=a[6];
    }
    if(f==7)
    {alert(a[7])
    }
    if(f==8)
      {document.getElementById("demo").innerHTML=a[8];
  }
  if(f==9)
    {document.getElementById("demo").innerHTML=a[9];
  }
  if(f==10)
  {var response=prompt(a[10]);
  if (response=="8") {
  alert("Congratulations, you got it right, you are very thoughtful and not easily trapped by stereotypes, you are amazing!!")
  }
  else {
  alert("If I'm not wrong, you're about to type the number '17' with gusto. I've hinted at it twice from the beginning to the end, and it's simple, but it's clever. You're stuck in a rut. But I believe you through this topic, must know the disadvantage of the thinking set, I believe you, next time can do better!")
}
}
  f++
}
