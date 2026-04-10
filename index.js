var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";

var empdbName = "Emp-DB";
var empRelationName = "EmpData";
var connToken = "90934790|-31949238523569127|90958156";

$("#empid").focus();

function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") return;

    var putRequest = createPUTRequest(connToken, jsonStrObj, empdbName, empRelationName);

    jQuery.ajaxSetup({ async: false });
    executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });

    alert("Data Saved Successfully!");
    resetForm();
}

function changeData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") return;

    var updateRequest = createUPDATERecordRequest(
        connToken,
        jsonStrObj,
        empdbName,
        empRelationName,
        localStorage.getItem("recno")
    );

    jQuery.ajaxSetup({ async: false });
    executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });

    alert("Data Updated Successfully!");
    resetForm();
}

function getEmp() {
    var empId = $("#empid").val();

    var jsonStr = {
        id: empId
    };

    var getRequest = createGET_BY_KEYRequest(
        connToken,
        empdbName,
        empRelationName,
        JSON.stringify(jsonStr)
    );

    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });

    if (resJsonObj.status === 400) {
        
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#empname").focus();

    } else if (resJsonObj.status === 200) {
       
        fillData(resJsonObj);

        $("#empid").prop("disabled", true);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#empname").focus();
    }
}

function fillData(jsonObj) {
    var data = JSON.parse(jsonObj.data).record;

    localStorage.setItem("recno", JSON.parse(jsonObj.data).rec_no);

    $("#empname").val(data.name);
    $("#empsal").val(data.salary);
    $("#hra").val(data.hra);
    $("#da").val(data.da);
    $("#deduct").val(data.deduction);
}

function validateData() {
    var empid = $("#empid").val();
    var empname = $("#empname").val();
    var empsal = $("#empsal").val();
    var hra = $("#hra").val();
    var da = $("#da").val();
    var deduct = $("#deduct").val();

    if (empid === "") {
        alert("Enter Employee ID");
        $("#empid").focus();
        return "";
    }
    if (empname === "") {
        alert("Enter Employee Name");
        return "";
    }
    if (empsal === "") {
        alert("Enter Salary");
        return "";
    }
    if (hra === "") {
        alert("Enter HRA");
        return "";
    }
    if (da === "") {
        alert("Enter DA");
        return "";
    }
    if (deduct === "") {
        alert("Enter Deduction");
        return "";
    }

    var jsonStrObj = {
        id: empid,
        name: empname,
        salary: empsal,
        hra: hra,
        da: da,
        deduction: deduct
    };

    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#empform")[0].reset();

    $("#empid").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);

    $("#empid").focus();
}