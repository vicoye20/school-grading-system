function calculateResult(){
    var username = document.getElementById("student").value
    var a = Number(document.getElementById("Mathes").value)
    var b = Number(document.getElementById("English").value)
    var c = Number(document.getElementById("Physics").value)
    var d = Number(document.getElementById("Agric.  S").value)
    var e = Number(document.getElementById("Biology").value)
    var res = eval(a + b + c + d + e)
    document.getElementById("displayScreenTotal").innerHTML = " The total scores of all subjects for " + " " + username + " is " + res + "/500"
}

function calculateAverage(){
    var username = document.getElementById("student").value
    var a = Number(document.getElementById("Mathes").value)
    var b = Number(document.getElementById("English").value)
    var c = Number(document.getElementById("Physics").value)
    var d = Number(document.getElementById("Agric.  S").value)
    var e = Number(document.getElementById("Biology").value)
    var res = Math.round(a + b + c + d + e)/5
    document.getElementById("displayScreenAverage").innerHTML = " The total Average Score of all subjects for " + " " + username + " is " + res +  " % "
}

function calculateGrade(){
    var username = document.getElementById("student").value
    var a = Number(document.getElementById("Mathes").value)
    var b = Number(document.getElementById("English").value)
    var c = Number(document.getElementById("Physics").value)
    var d = Number(document.getElementById("Agric.  S").value)
    var e = Number(document.getElementById("Biology").value)
    var res = (a + b + c + d + e)/5;

    if (res <= 39){
        document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is F9, this is a poor result, kindly buckle up next time, don't give up." 
    }
    if (res >= 40){
        document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is E8, this is a pass result, try and read harder." 

    }
    if (res >= 49){
        document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is D7, this is a fair result, you can still do it." 

    }
    if (res >= 50){
         document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is C5, this is a good result, you can still do it." 

    }
    if (res >= 60){
        document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is C4, this is a very good result, keep it up." 
 
    }
    if (res >= 70){
        document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is B3, this is a very good result, keep it up." 

    }
    if (res >= 80){
        document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is B2, this is an excellent result, keep it up." 
    }
    if (res >= 89){
        document.getElementById("displayScreenGrade").innerHTML = " Hello " + username + " , " + " your Grade for this Exam is A1, this is a brilliant result, keep it up." 

    }
}



