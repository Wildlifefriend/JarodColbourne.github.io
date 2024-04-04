const form = document.getElementById("Form");

function validateMessage()
{
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", (event) => {
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;

        const email = document.getElementById("email").value;
        
        const message = document.getElementById("message").value;

        const yes = document.getElementById("yes").checked;
        const no = document.getElementById("no").checked;


        if(!fname || !lname || !email || !message)
        {
            window.alert("Missing an input.");
            event.preventDefault();
        }
        else if(no)
        {
            window.alert("No selected won't submit");
            event.preventDefault();
        }

        if((email.endsWith(".ca") || email.endsWith(".com") || email.endsWith(".org") || email.endsWith(".gov")))
        {
            window.alert("Invalid Email");
            event.preventDefault();
        }

        if (email.length() <= 10)
        {
            window.alert("Message is to short");
            event.preventDefault.preventDefault();
        }
    });
}

validateMessage();



function ColourChange1()
{
    document.body.style.backgroundColor = "#020F20";
}
function ColourChange2()
{
    document.body.style.backgroundColor = "#2e0748";
}
function ColourChange3()
{
    document.body.style.backgroundColor = "#073025";
}