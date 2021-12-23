function dom()
{
let a = document.getElementById("name").value;
let b = document.getElementById("email").value;
let c = document.getElementById("pass").value;
let d = document.getElementById("conpass").value;
if((a=="") && (b=="") && (c=="") && (d==""))
{
    alert("All fields required")
    return false
}
  if(a=="")
{
    alert("name required")
    return false
}
if(b=="")
{
    alert("email required")
    return false
}

if(c=="")
{
    alert("password required")
    return false
}

if(d=="")
{
    alert("confirm pass required")
    return false
}
if(c!=d)
{
    alert("Password must be same")
    return false
}
else
{
    alert("log in successfully 😉")
    return false
}
}