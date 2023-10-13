import { Temporal } from "@js-temporal/polyfill";
import "./styles.css";
import { useRef } from "react";

export default function App() {
  const todaysDate = Temporal.Now.plainDateISO();
  const todaysDateRef = useRef<HTMLHeadingElement>(null);

  const downloadAsPng = async () => {
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(todaysDateRef.current as HTMLHeadingElement, {
        width: 300,
        scale: 1,
        height: 200
      });
      const pngURL = canvas.toDataURL('image/png');
      const dummyDoc = document.createElement('a');
      dummyDoc.href = pngURL;
      const pngTitle = `today.png`;
      dummyDoc.download = pngTitle;
      dummyDoc.click();
    } catch (error) {
      console.error(error);
    }
  }

  const downloadAsPdf = async () => {
    try {
      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(todaysDateRef.current as HTMLHeadingElement, {
        width: 300,
        scale: 1,
        height: 200
      });
      const pngURL = canvas.toDataURL('image/png');

      const { jsPDF } = await import('jspdf');
      const pdf = new jsPDF({
        format: [canvas.width, canvas.height],
        orientation: 'landscape',
        unit: 'px'
      });
      pdf.addImage(pngURL, 'PNG', 0, 0, canvas.width, canvas.height);
      const pdfTitle = `today.pdf`;
      pdf.save(pdfTitle);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>Today is:</h1>
      <h2 data-cy="today" ref={todaysDateRef}>
        <span>{todaysDate.month}/{todaysDate.day}/{todaysDate.year}</span>
      </h2>
      <button data-cy="png-download-btn" onClick={downloadAsPng}>Download date as PNG</button>
      <button data-cy="pdf-download-btn" onClick={downloadAsPdf}>Download date as PDF</button>
    </div>
  );
}
