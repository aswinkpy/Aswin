document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to server
    generatePDF();
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Personal Information
    const name = document.getElementById("name").value;
    const maritalStatus = document.getElementById("marital-status").value;
    
    // Nominee Details
    const nomineeName = document.getElementById("nominee-name").value;
    const nomineeAddress = document.getElementById("nominee-address").value;
    const nomineeAadhar = document.getElementById("nominee-aadhar").value;
    const nomineeRelation = document.getElementById("nominee-relation").value;
    const nomineeReason = document.getElementById("nominee-reason").value;
    const nomineeAge = document.getElementById("nominee-age").value;
    const nomineeShare = document.getElementById("nominee-share").value;
    const nomineeContingency = document.getElementById("nominee-contingency").value;
    const altPerson = document.getElementById("alt-person").value;
    const minorRepresentative = document.getElementById("minor-representative").value;

    // Additional Information
    const place = document.getElementById("place").value;
    const date = document.getElementById("date").value;
    const subscriberDetails = document.getElementById("subscriber-details").value;
    const accountNo = document.getElementById("account-no").value;
    const witness1 = document.getElementById("witness1").value;
    const witness2 = document.getElementById("witness2").value;
    const countersignature = document.getElementById("countersignature").value;

    // Create PDF Content
    doc.setFontSize(14);
    doc.text("Nomination Form", 10, 10);
    doc.setFontSize(12);

    doc.text("Personal Information", 10, 20);
    doc.text(`Name: ${name}`, 10, 30);
    doc.text(`Marital Status: ${maritalStatus}`, 10, 40);

    doc.text("Nominee Details", 10, 50);
    doc.text(`Nominee Name: ${nomineeName}`, 10, 60);
    doc.text(`Full Permanent Address: ${nomineeAddress}`, 10, 70);
    doc.text(`Aadhar Number: ${nomineeAadhar}`, 10, 80);
    doc.text(`Relation with Subscriber: ${nomineeRelation}`, 10, 90);
    doc.text(`Reason (if not a family member): ${nomineeReason}`, 10, 100);
    doc.text(`Age: ${nomineeAge}`, 10, 110);
    doc.text(`Share Payable (%): ${nomineeShare}`, 10, 120);
    doc.text(`Contingencies (invalidating nomination): ${nomineeContingency}`, 10, 130);
    doc.text(`Person to whom right passes if nominee predeceases: ${altPerson}`, 10, 140);
    doc.text(`Person to whom share is paid on behalf of minor: ${minorRepresentative}`, 10, 150);

    doc.text("Additional Information", 10, 160);
    doc.text(`Place: ${place}`, 10, 170);
    doc.text(`Date: ${date}`, 10, 180);
    doc.text(`Subscriber Details: ${subscriberDetails}`, 10, 190);
    doc.text(`Account Number: ${accountNo}`, 10, 200);
    doc.text(`Witness 1: ${witness1}`, 10, 210);
    doc.text(`Witness 2: ${witness2}`, 10, 220);
    doc.text(`Countersignature by Head of Office (if applicable): ${countersignature}`, 10, 230);

    // Save the PDF
    doc.save("Nomination_Form.pdf");
}

