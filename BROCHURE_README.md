# SimEng Brochure Generator

This feature allows you to generate a professional PDF brochure from your SimEng website content.

## Features

- **Professional Layout**: A4 format with clean, modern design
- **Complete Content**: Includes all key information from your website
- **High Quality**: Print-ready PDF format
- **Easy Download**: One-click download functionality
- **Preview**: Live preview of the brochure before downloading

## How to Use

### Option 1: Through the Website Interface

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the brochure page**:
   - Click on the "Brochure" link in the navigation menu
   - Or visit `http://localhost:5173` and click "Brochure"

3. **Preview and Download**:
   - View the live preview of the brochure
   - Click "Download PDF Brochure" to save the file
   - The file will be saved as `SimEng-Brochure.pdf`

### Option 2: Direct PDF Generation

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Run the standalone generator**:
   ```bash
   npx tsx src/generateBrochure.tsx
   ```

3. **Find the generated file**:
   - The PDF will be saved as `SimEng-Brochure.pdf` in the project root

## Brochure Content

The generated brochure includes:

### 📋 Company Information
- SimEng overview and mission
- Research focus areas
- Contact details

### 🔬 Research Expertise
- Computational modeling capabilities
- Green material design expertise
- Carbon capture technologies
- Bio-based composites
- Sound insulation materials
- Metamaterials design

### 📊 Impact Statistics
- 10+ Research Partners
- Carbon Reduction initiatives
- 70+ Publications

### 🚀 Featured Projects
- **NANOMEC**: Polymer nanocomposites research
- **ECHOLAYER**: Sound insulation nanofibers
- **AgReCOMPOSITES**: Circular economy materials
- **Nano-CarbonCapS**: Carbon capture systems
- **BIOLEA**: Sustainable leather alternatives
- **METAMAT**: Metamaterials and bio-inspired materials

### 📞 Contact Information
- Email: simulation.engineering.leb@gmail.com
- Phone: 0096170641508
- Location: bchemoun schools street, Almanzal residence building
- Website: https://simeng.live

## Technical Details

### Dependencies Used
- `@react-pdf/renderer`: PDF generation
- `html2canvas`: HTML to canvas conversion
- `jspdf`: PDF manipulation

### File Structure
```
src/
├── components/
│   ├── Brochure.tsx          # PDF layout component
│   └── PDFGenerator.tsx      # Web interface component
├── generateBrochure.tsx      # Standalone generator
└── App.tsx                   # Main app with routing
```

### Customization

To modify the brochure content:

1. **Edit the Brochure component** (`src/components/Brochure.tsx`):
   - Update text content
   - Modify styling
   - Add new sections

2. **Update the PDFGenerator component** (`src/components/PDFGenerator.tsx`):
   - Change the interface
   - Modify preview content
   - Update download options

## Troubleshooting

### Common Issues

1. **PDF not generating**:
   - Check that all dependencies are installed
   - Ensure the development server is running
   - Check browser console for errors

2. **Font loading issues**:
   - The brochure uses Inter font from Google Fonts
   - Ensure internet connection for font loading

3. **Download not working**:
   - Check browser download settings
   - Ensure popup blockers are disabled
   - Try using a different browser

### Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support

## File Output

The generated PDF will be:
- **Format**: A4 (210 × 297 mm)
- **Quality**: High resolution, print-ready
- **Size**: Typically 100-500 KB
- **Pages**: Single page with comprehensive content

## Support

For issues or questions about the brochure generator:
- Check the browser console for error messages
- Ensure all dependencies are properly installed
- Verify that the development server is running correctly

---

**Note**: The brochure content is automatically extracted from your website's main content and formatted for professional presentation. Any updates to your website content will be reflected in the generated brochure. 