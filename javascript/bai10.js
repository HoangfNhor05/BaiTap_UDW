function index ()
{
    var bt10_Index = document.querySelector(".bt10-index");
    var bt10_Content = document.querySelector(".bt10-content");
    var bt10_Register = document.querySelector(".bt10-register");

    
  bt10_Index.classList.add("open");
  bt10_Index.classList.remove("close");
  
  bt10_Content.classList.add("close");
  bt10_Content.classList.remove("open");
  
  bt10_Register.classList.add("close");
  bt10_Register.classList.remove("open");
}

function content ()
{
    var bt10_Index = document.querySelector(".bt10-index");
    var bt10_Content = document.querySelector(".bt10-content");
    var bt10_Register = document.querySelector(".bt10-register");

    bt10_Index.classList.add("close");
    bt10_Index.classList.remove("open");
    
    bt10_Content.classList.add("open");
    bt10_Content.classList.remove("close");
    
    bt10_Register.classList.add("close");
    bt10_Register.classList.remove("open"); 
}
function register()
{
    var bt10_Index = document.querySelector(".bt10-index");
    var bt10_Content = document.querySelector(".bt10-content");
    var bt10_Register = document.querySelector(".bt10-register");

    bt10_Index.classList.add("close");
    bt10_Index.classList.remove("open");
    
    bt10_Content.classList.add("close");
    bt10_Content.classList.remove("open");
    
    bt10_Register.classList.add("open");
    bt10_Register.classList.remove("close");
}