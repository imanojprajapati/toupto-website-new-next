# Logo Setup Instructions

## Where to Place Your Logo

Please save your Toupto logo file in the following location:

**Path**: `/public/images/logos/toupto-logo.png`

or

**Path**: `/public/images/logos/toupto-logo.svg` (recommended for scalability)

## Supported Formats

- PNG (with transparent background recommended)
- SVG (preferred for best quality at all sizes)
- JPG (if no transparency needed)

## File Naming

The logo component expects one of these file names:
- `toupto-logo.png`
- `toupto-logo.svg`
- `toupto-logo.jpg`

If your logo file has a different name, update the `logoSrc` variable in:
`components/layout/Logo.tsx`

## Logo Usage

The logo is now automatically integrated in:

1. **Header/Navigation** (top of every page)
   - Dark variant for light backgrounds
   - Includes "Technologies" text

2. **Footer** (bottom of every page)
   - Light variant for dark backgrounds
   - Includes "Technologies" text

## Customization

### Change Logo Size

Edit `components/layout/Logo.tsx`:
```tsx
width={120}  // Adjust width
height={40}  // Adjust height
className="h-8 w-auto object-contain"  // Adjust height class
```

### Hide "Technologies" Text

```tsx
<Logo showText={false} />
```

### Use Different Variants

- `variant="dark"` - For light backgrounds (header)
- `variant="light"` - For dark backgrounds (footer)

## Next Steps

1. Save your logo file to `/public/images/logos/`
2. Ensure the filename matches `toupto-logo.png` (or update the component)
3. Test the logo appears correctly in the header and footer
4. Adjust sizing if needed in the Logo component

