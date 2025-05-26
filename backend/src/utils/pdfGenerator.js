import PDFDocument from 'pdfkit';

function generatePDF(data, res) {
    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=land-record.pdf');

    doc.pipe(res);

    doc.fontSize(20).text('Land Record Summary', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Generated on: ${new Date().toLocaleDateString()}`, { align: 'right' });
    doc.moveDown();

    // Example: Grouping data (customize as needed)
    if (data.owner) {
        doc.fontSize(16).text('Owner Details', { underline: true });
        Object.entries(data.owner).forEach(([key, value]) => {
            doc.fontSize(12).text(`${key}: ${value}`);
        });
        doc.moveDown();
    }
    if (data.property) {
        doc.fontSize(16).text('Property Details', { underline: true });
        Object.entries(data.property).forEach(([key, value]) => {
            doc.fontSize(12).text(`${key}: ${value}`);
        });
        doc.moveDown();
    }
    // Add more sections as needed

    doc.end();
}

export default generatePDF;