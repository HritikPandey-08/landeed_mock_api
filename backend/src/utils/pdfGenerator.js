import PDFDocument from 'pdfkit';

function generatePDF(data, res) {
    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=land-record.pdf');

    doc.pipe(res);

    // Title
    doc.fontSize(20).text('Land Record Summary', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Generated on: ${new Date().toLocaleDateString()}`, { align: 'right' });
    doc.moveDown(2);

    // Owner Details
    doc.fontSize(16).text('Owner Details', { underline: true });
    doc.fontSize(12).text(`Owner Name: ${data.owner_name}`);
    doc.text(`Plot Number: ${data.plot_number}`);
    doc.moveDown();

    // Property Details
    doc.fontSize(16).text('Property Details', { underline: true });
    doc.fontSize(12).text(`Area: ${data.area}`);
    doc.text(`Location: ${data.location}`);
    doc.text(`Registration Date: ${new Date(data.registration_date).toLocaleDateString()}`);
    doc.moveDown();

    // Footer or ID if needed
    doc.fontSize(10).text(`Record ID: ${data.id}`, { align: 'left' });

    doc.end();
}

export default generatePDF;
