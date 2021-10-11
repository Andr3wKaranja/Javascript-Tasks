/*
Whoami: Baha alias LzM17
Stack: Infosec nerd | Hacks and secures, eJPT certified, CTF Player(@fr334aks), BugBounty Hunter
Mantra: code </>, eat(), sleep(), repeat()
*/



//  Array Class 1 student first names
var class1 = [
    ['Kevin', 'CMT307', '18', '12', '42', '57', 'C'],
    ['Mandy', 'CMT313', '9', '15', '32', '44', 'D'],
    ['Sharon', 'CMT307', '26', '24', '47', '72', 'A'],
    ['Peter', 'CMT307', '18', '14', '46', '62', 'B'],
    ['Lucy', 'CMT307', '18', '0', '30', '39', 'F']
]

// Class 2 student first names
var class2 = [
    ['Brian', 'AGH201', '18', '0', '30', '39', 'F'],
    ['Alex', 'ANT100', '26', '24', '47', '72', 'A'],
    ['Wandia', 'BIO316', '18', '12', '42', '57', 'C'],
    ['Brandon', 'CHEM300', '15', '17', '58', '74', 'A'],
    ['Beth', 'AGH117', '5', '5', '30', '35', 'F']
]

// Class 3 student first names
var class3 = [
    ['Oscar', 'GSS100', '18', '0', '30', '39', 'F'],
    ['Chege', 'MAT200', '26', '24', '47', '72', 'A'],
    ['Bobby', 'MAT216', '18', '12', '42', '57', 'C'],
    ['Laura', 'KIS104', '15', '17', '58', '74', 'A'],
    ['Stacy', 'CMT307', '5', '5', '30', '35', 'F']
]

// Class 4 student first names
var class4 = [
    ['Ruth', 'GSS103', '18', '0', '30', '39', 'F'],
    ['Obed', 'CMT303', '26', '24', '47', '72', 'A'],
    ['Abdi', 'BIO316', '18', '12', '42', '57', 'C'],
    ['Karen', 'CHEM300', '15', '17', '58', '74', 'A'],
    ['Cindy', 'AGH117', '5', '17', '30', '41', 'D']
]

// Class 5 student first names
var class5 = [
    ['Moses', 'CMT313', '18', '0', '30', '39', 'F'],
    ['Esther', 'MAT216', '26', '24', '47', '72', 'A'],
    ['Mary', 'MAT200', '18', '12', '42', '57', 'C'],
    ['Simon', 'MAT216', '15', '17', '58', '74', 'A'],
    ['Paul', 'ENG100', '5', '5', '30', '35', 'F']
]


// Function to print names of students to innerHTML
function loadNames() {

    // Get value the instance from the select/drop-down menu
    var selectedValue = document.getElementById("class-names").value;

    if (selectedValue == "cl1"){
        for (var i=0; i < class1.length; i++)
            document.getElementById('toDisplayNames').innerHTML += "<p>"+class1[i][0]+"</p>"; // print class names
        for (var j=0; j < class1.length; j++)
            document.getElementById('toDisplayCode').innerHTML += "<p>"+class1[j][1]+"</p>"; // print class code
        for (var k=0; k < class1.length; k++)
            document.getElementById('toDisplayCat1').innerHTML += "<p>"+class1[k][2]+"</p>"; // print Cat1
        for (var l=0; l < class1.length; l++)
            document.getElementById('toDisplayCat2').innerHTML += "<p>"+class1[l][3]+"</p>"; // print Cat2
        for (var m=0; m < class1.length; m++)
            document.getElementById('toDisplayExam').innerHTML += "<p>"+class1[m][4]+"</p>"; // print Exam
        for (var n=0; n < class1.length; n++)
            document.getElementById('toDisplayTotal').innerHTML += "<p>"+class1[n][5]+"</p>"; // print Total
        for (var o=0; o < class1.length; o++)
            document.getElementById('toDisplayGrade').innerHTML += "<p>"+class1[o][6]+"</p>"; // print Grade

    } else if(selectedValue == "cl2"){
        for (var i=0; i < class2.length; i++)
            document.getElementById('toDisplayNames').innerHTML += "<p>"+class2[i][0]+"</p>"; // print class names
        for (var j=0; j < class2.length; j++)
            document.getElementById('toDisplayCode').innerHTML += "<p>"+class2[j][1]+"</p>"; // print class code
        for (var k=0; k < class2.length; k++)
            document.getElementById('toDisplayCat1').innerHTML += "<p>"+class2[k][2]+"</p>"; // print Cat1
        for (var l=0; l < class2.length; l++)
            document.getElementById('toDisplayCat2').innerHTML += "<p>"+class2[l][3]+"</p>"; // print Cat2
        for (var m=0; m < class2.length; m++)
            document.getElementById('toDisplayExam').innerHTML += "<p>"+class2[m][4]+"</p>"; // print Exam
        for (var n=0; n < class2.length; n++)
            document.getElementById('toDisplayTotal').innerHTML += "<p>"+class2[n][5]+"</p>"; // print Total
        for (var o=0; o < class2.length; o++)
            document.getElementById('toDisplayGrade').innerHTML += "<p>"+class2[o][6]+"</p>"; // print Grade

    } else if(selectedValue == "cl3"){
        for (var i=0; i < class3.length; i++)
            document.getElementById('toDisplayNames').innerHTML += "<p>"+class3[i][0]+"</p>"; // print class names
        for (var j=0; j < class3.length; j++)
            document.getElementById('toDisplayCode').innerHTML += "<p>"+class3[j][1]+"</p>"; // print class code
        for (var k=0; k < class3.length; k++)
            document.getElementById('toDisplayCat1').innerHTML += "<p>"+class3[k][2]+"</p>"; // print Cat1
        for (var l=0; l < class3.length; l++)
            document.getElementById('toDisplayCat2').innerHTML += "<p>"+class3[l][3]+"</p>"; // print Cat2
        for (var m=0; m < class3.length; m++)
            document.getElementById('toDisplayExam').innerHTML += "<p>"+class3[m][4]+"</p>"; // print Exam
        for (var n=0; n < class3.length; n++)
            document.getElementById('toDisplayTotal').innerHTML += "<p>"+class3[n][5]+"</p>"; // print Total
        for (var o=0; o < class3.length; o++)
            document.getElementById('toDisplayGrade').innerHTML += "<p>"+class3[o][6]+"</p>"; // print Grade

    } else if(selectedValue == "cl4"){
        for (var i=0; i < class4.length; i++)
            document.getElementById('toDisplayNames').innerHTML += "<p>"+class4[i][0]+"</p>"; // print class names
        for (var j=0; j < class4.length; j++)
            document.getElementById('toDisplayCode').innerHTML += "<p>"+class4[j][1]+"</p>"; // print class code
        for (var k=0; k < class4.length; k++)
            document.getElementById('toDisplayCat1').innerHTML += "<p>"+class4[k][2]+"</p>"; // print Cat1
        for (var l=0; l < class4.length; l++)
            document.getElementById('toDisplayCat2').innerHTML += "<p>"+class4[l][3]+"</p>"; // print Cat2
        for (var m=0; m < class4.length; m++)
            document.getElementById('toDisplayExam').innerHTML += "<p>"+class4[m][4]+"</p>"; // print Exam
        for (var n=0; n < class4.length; n++)
            document.getElementById('toDisplayTotal').innerHTML += "<p>"+class4[n][5]+"</p>"; // print Total
        for (var o=0; o < class4.length; o++)
            document.getElementById('toDisplayGrade').innerHTML += "<p>"+class4[o][6]+"</p>"; // print Grade

    } else if(selectedValue == "cl5"){
        for (var i=0; i < class5.length; i++)
            document.getElementById('toDisplayNames').innerHTML += "<p>"+class5[i][0]+"</p>"; // print class names
        for (var j=0; j < class5.length; j++)
            document.getElementById('toDisplayCode').innerHTML += "<p>"+class5[j][1]+"</p>"; // print class code
        for (var k=0; k < class5.length; k++)
            document.getElementById('toDisplayCat1').innerHTML += "<p>"+class5[k][2]+"</p>"; // print Cat1
        for (var l=0; l < class5.length; l++)
            document.getElementById('toDisplayCat2').innerHTML += "<p>"+class5[l][3]+"</p>"; // print Cat2
        for (var m=0; m < class5.length; m++)
            document.getElementById('toDisplayExam').innerHTML += "<p>"+class5[m][4]+"</p>"; // print Exam
        for (var n=0; n < class5.length; n++)
            document.getElementById('toDisplayTotal').innerHTML += "<p>"+class5[n][5]+"</p>"; // print Total
        for (var o=0; o < class5.length; o++)
            document.getElementById('toDisplayGrade').innerHTML += "<p>"+class5[o][6]+"</p>"; // print Grade
    }

}


function showPerformance() {

    // Get value the instance from the select/drop-down menu
    var selectedValue2 = document.getElementById("dropdown-names").value;

    // If Kevin is selected
    if(selectedValue2 == "kevin") { 
        document.getElementById('toDisplayCode').innerHTML = class1[0][1];
        document.getElementById('toDisplayCat1').innerHTML = class1[0][2];
        document.getElementById('toDisplayCat2').innerHTML = class1[0][3];
        document.getElementById('toDisplayExam').innerHTML = class1[0][4];
        document.getElementById('toDisplayTotal').innerHTML = class1[0][5];
        document.getElementById('toDisplayGrade').innerHTML = class1[0][6];
    } // If Mandy is selected
    else if(selectedValue2 == "mandy") { 
        document.getElementById('toDisplayCode').innerHTML = class1[1][1];
        document.getElementById('toDisplayCat1').innerHTML = class1[1][2];
        document.getElementById('toDisplayCat2').innerHTML = class1[1][3];
        document.getElementById('toDisplayExam').innerHTML = class1[1][4];
        document.getElementById('toDisplayTotal').innerHTML = class1[1][5];
        document.getElementById('toDisplayGrade').innerHTML = class1[1][6];
    } // If Sharon is selected
    else if(selectedValue2 == "sharon") { 
        document.getElementById('toDisplayCode').innerHTML = class1[2][1];
        document.getElementById('toDisplayCat1').innerHTML = class1[2][2];
        document.getElementById('toDisplayCat2').innerHTML = class1[2][3];
        document.getElementById('toDisplayExam').innerHTML = class1[2][4];
        document.getElementById('toDisplayTotal').innerHTML = class1[2][5];
        document.getElementById('toDisplayGrade').innerHTML = class1[2][6];
    } // If Peter is selected
    else if(selectedValue2 == "peter") { 
        document.getElementById('toDisplayCode').innerHTML = class1[3][1];
        document.getElementById('toDisplayCat1').innerHTML = class1[3][2];
        document.getElementById('toDisplayCat2').innerHTML = class1[3][3];
        document.getElementById('toDisplayExam').innerHTML = class1[3][4];
        document.getElementById('toDisplayTotal').innerHTML = class1[3][5];
        document.getElementById('toDisplayGrade').innerHTML = class1[3][6];
    } // If Lucy is selected
    else if(selectedValue2 == "lucy") { 
        document.getElementById('toDisplayCode').innerHTML = class1[4][1];
        document.getElementById('toDisplayCat1').innerHTML = class1[4][2];
        document.getElementById('toDisplayCat2').innerHTML = class1[4][3];
        document.getElementById('toDisplayExam').innerHTML = class1[4][4];
        document.getElementById('toDisplayTotal').innerHTML = class1[4][5];
        document.getElementById('toDisplayGrade').innerHTML = class1[4][6];
    } // If Brian is selected
    else if(selectedValue2 == "brian") { 
        document.getElementById('toDisplayCode').innerHTML = class2[0][1];
        document.getElementById('toDisplayCat1').innerHTML = class2[0][2];
        document.getElementById('toDisplayCat2').innerHTML = class2[0][3];
        document.getElementById('toDisplayExam').innerHTML = class2[0][4];
        document.getElementById('toDisplayTotal').innerHTML = class2[0][5];
        document.getElementById('toDisplayGrade').innerHTML = class2[0][6];
    }  // If Alex is selected
    else if(selectedValue2 == "alex") {
        document.getElementById('toDisplayCode').innerHTML = class2[1][1];
        document.getElementById('toDisplayCat1').innerHTML = class2[1][2];
        document.getElementById('toDisplayCat2').innerHTML = class2[1][3];
        document.getElementById('toDisplayExam').innerHTML = class2[1][4];
        document.getElementById('toDisplayTotal').innerHTML = class2[1][5];
        document.getElementById('toDisplayGrade').innerHTML = class2[1][6];
    } // If Wandia is selected
    else if(selectedValue2 == "wandia") { 
        document.getElementById('toDisplayCode').innerHTML = class2[2][1];
        document.getElementById('toDisplayCat1').innerHTML = class2[2][2];
        document.getElementById('toDisplayCat2').innerHTML = class2[2][3];
        document.getElementById('toDisplayExam').innerHTML = class2[2][4];
        document.getElementById('toDisplayTotal').innerHTML = class2[2][5];
        document.getElementById('toDisplayGrade').innerHTML = class2[2][6];
    } // If Brandon is selected
    else if(selectedValue2 == "brandon") { 
        document.getElementById('toDisplayCode').innerHTML = class2[3][1];
        document.getElementById('toDisplayCat1').innerHTML = class2[3][2];
        document.getElementById('toDisplayCat2').innerHTML = class2[3][3];
        document.getElementById('toDisplayExam').innerHTML = class2[3][4];
        document.getElementById('toDisplayTotal').innerHTML = class2[3][5];
        document.getElementById('toDisplayGrade').innerHTML = class2[3][6];
    } // If Beth is selected
    else if(selectedValue2 == "beth") { 
        document.getElementById('toDisplayCode').innerHTML = class2[4][1];
        document.getElementById('toDisplayCat1').innerHTML = class2[4][2];
        document.getElementById('toDisplayCat2').innerHTML = class2[4][3];
        document.getElementById('toDisplayExam').innerHTML = class2[4][4];
        document.getElementById('toDisplayTotal').innerHTML = class2[4][5];
        document.getElementById('toDisplayGrade').innerHTML = class2[4][6];
    } // If Oscar is selected
    else if(selectedValue2 == "oscar") { 
        document.getElementById('toDisplayCode').innerHTML = class3[0][1];
        document.getElementById('toDisplayCat1').innerHTML = class3[0][2];
        document.getElementById('toDisplayCat2').innerHTML = class3[0][3];
        document.getElementById('toDisplayExam').innerHTML = class3[0][4];
        document.getElementById('toDisplayTotal').innerHTML = class3[0][5];
        document.getElementById('toDisplayGrade').innerHTML = class3[0][6];
    } // If Chege is selected
    else if(selectedValue2 == "chege") { 
        document.getElementById('toDisplayCode').innerHTML = class3[1][1];
        document.getElementById('toDisplayCat1').innerHTML = class3[1][2];
        document.getElementById('toDisplayCat2').innerHTML = class3[1][3];
        document.getElementById('toDisplayExam').innerHTML = class3[1][4];
        document.getElementById('toDisplayTotal').innerHTML = class3[1][5];
        document.getElementById('toDisplayGrade').innerHTML = class3[1][6];
    } // If Bobby is selected
    else if(selectedValue2 == "bobby") { 
        document.getElementById('toDisplayCode').innerHTML = class3[2][1];
        document.getElementById('toDisplayCat1').innerHTML = class3[2][2];
        document.getElementById('toDisplayCat2').innerHTML = class3[2][3];
        document.getElementById('toDisplayExam').innerHTML = class3[2][4];
        document.getElementById('toDisplayTotal').innerHTML = class3[2][5];
        document.getElementById('toDisplayGrade').innerHTML = class3[2][6];
    } // If Laura is selected
    else if(selectedValue2 == "laura") { 
        document.getElementById('toDisplayCode').innerHTML = class3[3][1];
        document.getElementById('toDisplayCat1').innerHTML = class3[3][2];
        document.getElementById('toDisplayCat2').innerHTML = class3[3][3];
        document.getElementById('toDisplayExam').innerHTML = class3[3][4];
        document.getElementById('toDisplayTotal').innerHTML = class3[3][5];
        document.getElementById('toDisplayGrade').innerHTML = class3[3][6];
    } // If Stacy is selected
    else if(selectedValue2 == "stacy") { 
        document.getElementById('toDisplayCode').innerHTML = class3[4][1];
        document.getElementById('toDisplayCat1').innerHTML = class3[4][2];
        document.getElementById('toDisplayCat2').innerHTML = class3[4][3];
        document.getElementById('toDisplayExam').innerHTML = class3[4][4];
        document.getElementById('toDisplayTotal').innerHTML = class3[4][5];
        document.getElementById('toDisplayGrade').innerHTML = class3[4][6];
    } // If Ruth is selected
    else if(selectedValue2 == "ruth") { 
        document.getElementById('toDisplayCode').innerHTML = class4[0][1];
        document.getElementById('toDisplayCat1').innerHTML = class4[0][2];
        document.getElementById('toDisplayCat2').innerHTML = class4[0][3];
        document.getElementById('toDisplayExam').innerHTML = class4[0][4];
        document.getElementById('toDisplayTotal').innerHTML = class4[0][5];
        document.getElementById('toDisplayGrade').innerHTML = class4[0][6];
    } // If Obed is selected
    else if(selectedValue2 == "obed") { 
        document.getElementById('toDisplayCode').innerHTML = class4[1][1];
        document.getElementById('toDisplayCat1').innerHTML = class4[1][2];
        document.getElementById('toDisplayCat2').innerHTML = class4[1][3];
        document.getElementById('toDisplayExam').innerHTML = class4[1][4];
        document.getElementById('toDisplayTotal').innerHTML = class4[1][5];
        document.getElementById('toDisplayGrade').innerHTML = class4[1][6];
    } // If Abdi is selected
    else if(selectedValue2 == "abdi") { 
        document.getElementById('toDisplayCode').innerHTML = class4[2][1];
        document.getElementById('toDisplayCat1').innerHTML = class4[2][2];
        document.getElementById('toDisplayCat2').innerHTML = class4[2][3];
        document.getElementById('toDisplayExam').innerHTML = class4[2][4];
        document.getElementById('toDisplayTotal').innerHTML = class4[2][5];
        document.getElementById('toDisplayGrade').innerHTML = class4[2][6];
    } // If Karen is selected
    else if(selectedValue2 == "karen") { 
        document.getElementById('toDisplayCode').innerHTML = class4[3][1];
        document.getElementById('toDisplayCat1').innerHTML = class4[3][2];
        document.getElementById('toDisplayCat2').innerHTML = class4[3][3];
        document.getElementById('toDisplayExam').innerHTML = class4[3][4];
        document.getElementById('toDisplayTotal').innerHTML = class4[3][5];
        document.getElementById('toDisplayGrade').innerHTML = class4[3][6];
    } // If Cindy is selected
    else if(selectedValue2 == "cindy") { 
        document.getElementById('toDisplayCode').innerHTML = class4[4][1];
        document.getElementById('toDisplayCat1').innerHTML = class4[4][2];
        document.getElementById('toDisplayCat2').innerHTML = class4[4][3];
        document.getElementById('toDisplayExam').innerHTML = class4[4][4];
        document.getElementById('toDisplayTotal').innerHTML = class4[4][5];
        document.getElementById('toDisplayGrade').innerHTML = class4[4][6];
    } // If Moses is selected
    else if(selectedValue2 == "moses") { 
        document.getElementById('toDisplayCode').innerHTML = class5[0][1];
        document.getElementById('toDisplayCat1').innerHTML = class5[0][2];
        document.getElementById('toDisplayCat2').innerHTML = class5[0][3];
        document.getElementById('toDisplayExam').innerHTML = class5[0][4];
        document.getElementById('toDisplayTotal').innerHTML = class5[0][5];
        document.getElementById('toDisplayGrade').innerHTML = class5[0][6];
    } // If Esther is selected
    else if(selectedValue2 == "esther") { 
        document.getElementById('toDisplayCode').innerHTML = class5[1][1];
        document.getElementById('toDisplayCat1').innerHTML = class5[1][2];
        document.getElementById('toDisplayCat2').innerHTML = class5[1][3];
        document.getElementById('toDisplayExam').innerHTML = class5[1][4];
        document.getElementById('toDisplayTotal').innerHTML = class5[1][5];
        document.getElementById('toDisplayGrade').innerHTML = class5[1][6];
    } // If Mary is selected
    else if(selectedValue2 == "mary") { 
        document.getElementById('toDisplayCode').innerHTML = class5[2][1];
        document.getElementById('toDisplayCat1').innerHTML = class5[2][2];
        document.getElementById('toDisplayCat2').innerHTML = class5[2][3];
        document.getElementById('toDisplayExam').innerHTML = class5[2][4];
        document.getElementById('toDisplayTotal').innerHTML = class5[2][5];
        document.getElementById('toDisplayGrade').innerHTML = class5[2][6];
    } // If Simon is selected
    else if(selectedValue2 == "simon") { 
        document.getElementById('toDisplayCode').innerHTML = class5[3][1];
        document.getElementById('toDisplayCat1').innerHTML = class5[3][2];
        document.getElementById('toDisplayCat2').innerHTML = class5[3][3];
        document.getElementById('toDisplayExam').innerHTML = class5[3][4];
        document.getElementById('toDisplayTotal').innerHTML = class5[3][5];
        document.getElementById('toDisplayGrade').innerHTML = class5[3][6];
    } // If Paul is selected
    else if(selectedValue2 == "paul") { 
        document.getElementById('toDisplayCode').innerHTML = class5[4][1];
        document.getElementById('toDisplayCat1').innerHTML = class5[4][2];
        document.getElementById('toDisplayCat2').innerHTML = class5[4][3];
        document.getElementById('toDisplayExam').innerHTML = class5[4][4];
        document.getElementById('toDisplayTotal').innerHTML = class5[4][5];
        document.getElementById('toDisplayGrade').innerHTML = class5[4][6];
    }
}