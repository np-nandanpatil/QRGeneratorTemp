document.getElementById('generateBtn').addEventListener('click', function() {
     const url = document.getElementById('urlInput').value;
   
     if (!url) {
       alert("Please enter a URL.");
       return;
     }
   
     // Generate QR code with higher resolution
     QRCode.toCanvas(document.getElementById('qrCanvas'), url, { width: 500, height: 500 }, function(error) {
       if (error) {
         console.error(error);
         alert('Something went wrong!');
       } else {
         console.log('QR Code successfully generated!');
   
         // Show the download button by removing the 'hidden' class
         const downloadBtn = document.getElementById('downloadBtn');
         const canvas = document.getElementById('qrCanvas');
   
         // Make the download button visible by removing the 'hidden' class
         downloadBtn.classList.remove('hidden');
   
         // Generate a random alphanumeric string for the file name
         const randomString = Math.random().toString(36).substring(2, 12); // Random string of 10 characters
         const fileName = `qrByNandan_${randomString}.png`; // Final download filename
   
         // Set the href dynamically for downloading the QR code
         downloadBtn.href = canvas.toDataURL(); // Get image data from the canvas
         downloadBtn.download = fileName; // Set the download file name to include the random string
       }
     });
   });
   