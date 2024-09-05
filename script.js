function generatePDF() {
    // Import the jsPDF library
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Retrieve form data
    const name = document.getElementById("name").value;
    const maritalStatus = document.getElementById("marital-status").value;
    const nomineeName = document.getElementById("nominee-name").value;
    const nomineeAddress = document.getElementById("nominee-address").value;
    const nomineeAadhar = document.getElementById("nominee-aadhar").value;
    const nomineeRelation = document.getElementById("nominee-relation").value;

    // Add text to PDF
    doc.text("Nomination Form", 20, 20);
    doc.text(`Name: ${name}`, 20, 30);
    doc.text(`Marital Status: ${maritalStatus}`, 20, 40);
    doc.text(`Nominee Name: ${nomineeName}`, 20, 50);
    doc.text(`Nominee Address: ${nomineeAddress}`, 20, 60);
    doc.text(`Nominee Aadhar: ${nomineeAadhar}`, 20, 70);
    doc.text(`Nominee Relation: ${nomineeRelation}`, 20, 80);

    // Save the PDF
    doc.save("Nomination_Form.pdf");
}
