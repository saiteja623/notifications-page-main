
    
    function readNotifications()
    { 
        console.log("hello");
      let num=document.getElementById("notifiNum");
      let unread=document.getElementsByClassName("unread");
      let dot=document.getElementsByClassName("dot");
      console.log(unread);
      num.innerText=0;
      for(let i=0;i<unread.length;i++)
      {
        unread[i].style.backgroundColor="white";
        dot[i].style.display="none";
      }


    }