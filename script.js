<script>
    // Function to generate the PDF
    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF(); // Create a new jsPDF instance

        // Add the title to the PDF
        doc.setFontSize(16);
        doc.text("Nomination Form", 105, 10, { align: "center" });

        // Get form data
        const name = document.getElementById("name").value;
        const maritalStatus = document.getElementById("marital-status").value;
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
        const place = document.getElementById("place").value;
        const date = document.getElementById("date").value;
        const subscriberDetails = document.getElementById("subscriber-details").value;
        const accountNo = document.getElementById("account-no").value;
        const witness1 = document.getElementById("witness1").value;
        const witness2 = document.getElementById("witness2").value;
        const countersignature = document.getElementById("countersignature").value;

        // Add personal information to the PDF
        doc.setFontSize(12);
        doc.text("Personal Information:", 10, 20);
        doc.text(`Name: ${name}`, 10, 30);
        doc.text(`Marital Status: ${maritalStatus}`, 10, 40);

        // Add nominee details to the PDF
        doc.text("Nominee Details:", 10, 50);
        doc.text(`Nominee Name: ${nomineeName}`, 10, 60);
        doc.text(`Full Permanent Address: ${nomineeAddress}`, 10, 70);
        doc.text(`Aadhar Number: ${nomineeAadhar}`, 10, 80);
        doc.text(`Relation with Subscriber: ${nomineeRelation}`, 10, 90);
        doc.text(`Reason (if not a family member): ${nomineeReason}`, 10, 100);
        doc.text(`Age: ${nomineeAge}`, 10, 110);
        doc.text(`Share Payable (%): ${nomineeShare}`, 10, 120);
        doc.text(`Contingencies: ${nomineeContingency}`, 10, 130);
        doc.text(`Alternative Person: ${altPerson}`, 10, 140);
        doc.text(`Minor Representative: ${minorRepresentative}`, 10, 150);

        // Add additional information to the PDF
        doc.text("Additional Information:", 10, 160);
        doc.text(`Place: ${place}`, 10, 170);
        doc.text(`Date: ${date}`, 10, 180);
        doc.text(`Subscriber Details: ${subscriberDetails}`, 10, 190);
        doc.text(`Account Number: ${accountNo}`, 10, 200);
        doc.text(`Witness 1: ${witness1}`, 10, 210);
        doc.text(`Witness 2: ${witness2}`, 10, 220);
        doc.text(`Countersignature by Head of Office: ${countersignature}`, 10, 230);

        // Save the PDF
        doc.save("Nomination_Form.pdf");
    }

    // Add event listener to the form's submit button to generate the PDF
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        generatePDF(); // Call the function to generate the PDF
    });
</script>


