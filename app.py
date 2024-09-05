from flask import Flask, request, render_template_string, make_response
from io import BytesIO
from reportlab.pdfgen import canvas
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

@app.route('/')
def index():
    with open('form.html') as f:
        return render_template_string(f.read())

@app.route('/submit', methods=['POST'])
def submit():
    # Extract form data
    nominee_name = request.form['nominee_name']
    marital_status = request.form.get('marital_status')
    address = request.form['address']
    aadhaar_number = request.form['aadhaar_number']
    relation_with_subscriber = request.form['relation_with_subscriber']
    age = request.form['age']
    share_payable = request.form['share_payable']
    place = request.form['place']
    date = request.form['date']
    account_number = request.form['account_number']
    witness_name_1 = request.form['witness_name_1']
    witness_address_1 = request.form['witness_address_1']
    
    # Handle file uploads
    signature = request.files['signature']
    witness_signature_1 = request.files.get('witness_signature_1')

    # Create PDF
    pdf_buffer = BytesIO()
    pdf = canvas.Canvas(pdf_buffer)
    
    pdf.drawString(100, 800, f"Name of Nominee: {nominee_name}")
    pdf.drawString(100, 780, f"Marital Status: {marital_status}")
    pdf.drawString(100, 760, f"Address: {address}")
    pdf.drawString(100, 740, f"Aadhaar Number: {aadhaar_number}")
    pdf.drawString(100, 720, f"Relation with Subscriber: {relation_with_subscriber}")
    pdf.drawString(100, 700, f"Age: {age}")
    pdf.drawString(100, 680, f"Share Payable: {share_payable}%")
    pdf.drawString(100, 660, f"Place: {place}")
    pdf.drawString(100, 640, f"Date: {date}")
    pdf.drawString(100, 620, f"Account Number: {account_number}")
    pdf.drawString(100, 600, f"Witness Name 1: {witness_name_1}")
    pdf.drawString(100, 580, f"Witness Address 1: {witness_address_1}")

    pdf.save()

    pdf_buffer.seek(0)
    response = make_response(pdf_buffer.read())
    response.headers['Content-Type'] = 'application/pdf'
    response.headers['Content-Disposition'] = 'attachment; filename=nomination_form.pdf'
    
    return response

if __name__ == '__main__':
    app.run(debug=True)
