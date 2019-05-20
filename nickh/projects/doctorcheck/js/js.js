function selectPatient() {
    console.log("I have entered Doctor check")

    var patient = document.querySelector("#selectPatient").value;
    console.log("You have selected this patient: ", patient);

    if (patient === "aidena"){
        window.location.href = "http://www.westada.tech/b4/aidena/projects/patientdata/";
    }else if (patient === "alexg"){
        window.location.href = "http://westada.tech/b4/alexg/Projects/2nd%20Semester/Graph2/graph2.html";
    }else if (patient === "athonyg"){
        window.location.href = "http://westada.tech/b4/anthonyg/jsgraph.1.html";
    }else if (patient === "kadinp"){
        window.location.href = "http://westada.tech/var/www/html/kadinp/projects/JSTable/index.html";
    }else if (patient === "samb"){
        window.location.href = "http://westada.tech/b4/samb/projects/patientdata/blood.html";
    }else if (patient === "ashleyg"){
        window.location.href = "http://westada.tech/b4/ashleyg/projects/doctorcheck/index.html";
    }else if (patient === "brads"){
        window.location.href = "http://westada.tech/b4/brads/";
    }else if (patient === "brandonw"){
        window.location.href = "http://westada.tech/b4/brandonw/projects/Blood%20Pressure/index.html";
    }else if (patient === "bryceh"){
        window.location.href = "http://westada.tech/b4/bryceh/";
    }else if (patient === "cadep"){
        window.location.href = "http://westada.tech/b4/cadep/projects/patientdata/index.html";
    }else if (patient === "colinh"){
        window.location.href = "http://westada.tech/b4/colinh/Projects/patientdata/index.html";
    }else if (patient === "elenay"){
        window.location.href = "http://westada.tech/b4/elenay/projects/jsgraphtable/blood.html";
    }
}