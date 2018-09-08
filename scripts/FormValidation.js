function changeRequestType() {
    type = document.getElementById('hireType');
    if (type.value === '') {
           document.getElementById('requestDate').innerHTML = "Date:";
            document.getElementById("personalEmail").style.display = "inline";
            document.getElementById("personalEmailLabel").style.display = "inline";
            type.style.border = "2px solid red"
        }
    else {
    if (type.value === 'Starter') {
        document.getElementById('requestDate').innerHTML = "Start Date:";
        document.getElementById("personalEmail").style.display = "inline";
        document.getElementById("personalEmailLabel").style.display = "inline";
        type.style.border = "2px solid green";
    }
    else {
        if (type.value === 'Mover') {
            document.getElementById('requestDate').innerHTML = "Move Date:";
            document.getElementById("personalEmail").style.display = "none";
            document.getElementById("personalEmailLabel").style.display = "none";
            type.style.border = "2px solid green";
        }

    else {
        if (type.value === 'Leaver') {
            document.getElementById('requestDate').innerHTML = "Leave Date:";
            document.getElementById("personalEmail").style.display = "inline";
            document.getElementById("personalEmailLabel").style.display = "inline";
            type.style.border = "2px solid green";
        }
        }
    }
}
}
function pleaseSelect() {
    type1 = document.getElementById('firstName');
    type2 = document.getElementById('lastName');
    type3 = document.getElementById('jobTitle');
    type4 = document.getElementById('department');
    type5 = document.getElementById('lineManager');
    type6 = document.getElementById('location');
    type7 = document.getElementById('submittedBy');
    type8 = document.getElementById('personalEmail');
    type9 = document.getElementById('date');

    if(type1.value == '') {
        type1.style.border = "2px solid red";
    }   else {
            if(type1.value != '') {
                type1.style.border = "2px solid green";
                    }
                }
    if(type2.value == '') {
                type2.style.border = "2px solid red";
    } else {
            if(type2.value != '') {
                type2.style.border = "2px solid green";
                }
            }
    if(type3.value == '') {
                type3.style.border = "2px solid red";
    } else {
            if(type3.value != '') {
                type3.style.border = "2px solid green";
                }
            }
        if(type4.value == '') {
                type4.style.border = "2px solid red";
    } else {
            if(type4.value != '') {
                type4.style.border = "2px solid green";
                }
            }
    if(type5.value == '') {
                type5.style.border = "2px solid red";
    } else {
            if(type5.value != '') {
                type5.style.border = "2px solid green";
                }
            }
        if(type6.value == '') {
                type6.style.border = "2px solid red";
    } else {
            if(type6.value != '') {
                type6.style.border = "2px solid green";
                }
            }
    if(type7.value == '') {
                type7.style.border = "2px solid red";
    } else {
            if(type7.value != '') {
                type7.style.border = "2px solid green";
                }
            }
    if(type8.value == '') {
                type8.style.border = "2px solid red";
    } else {
            if(type8.value != '') {
                type8.style.border = "2px solid green";
                }
            }
    if(type9.value == '') {
                type9.style.border = "2px solid red";
    } else {
            if(type9.value != '') {
                type9.style.border = "2px solid green";
                }
            }
}

function equipmentAndAccess() {
    type = document.getElementById('hireType');
    type1 = document.getElementById('department');
    if(type.value == 'Starter' && type1.value == 'Department 1' || type1.value == 'Department 2' || type1.value == 'Department 3' || type1.value == 'Department 4') {
        document.getElementById('email').value = "Yes";
        document.getElementById('laptop').value = "Yes";
    } else if(type.value == 'Leaver' && type1.value == 'Department 1' || type1.value == 'Department 2' || type1.value == 'Department 3' || type1.value == 'Department 4') {
        document.getElementById('email').value = "Disable";
        document.getElementById('laptop').value = "Return";
    } else {
        document.getElementById('email').value = "No";
        document.getElementById('laptop').value = "No";
    }
}
