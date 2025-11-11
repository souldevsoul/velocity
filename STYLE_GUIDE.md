# Velocity Brand & Style Guide

## Brand Identity

**Brand Name**: Velocity
**Tagline**: Ship Faster, Scale Smarter
**Positioning**: Speed-focused MVP development platform for fast-moving startups

---

## Color Palette

### Primary Colors
```css
Emerald 600: #10b981
Green 600:   #059669
Green 700:   #047857
```

### Accent Colors
```css
Teal 500:    #14b8a6
Teal 400:    #2dd4bf
Green 600:   #16a34a
```

### Background Gradients
```css
/* Hero Background */
background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);

/* Card Backgrounds */
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(12px);

/* Footer Background */
background: rgb(5, 46, 22); /* green-950 */
```

### Text Colors
```css
Primary Text:   #111827 (gray-900)
Secondary Text: #374151 (gray-700)
Muted Text:     #6b7280 (gray-500)
On Dark:        #ffffff (white)
```

---

## Typography

### Font Families
```css
Headings: system-ui, -apple-system, sans-serif
Body:     system-ui, -apple-system, sans-serif
Code:     'Geist Mono', monospace
```

### Font Sizes
```css
Hero H1:       text-6xl sm:text-7xl lg:text-8xl (60px-96px)
Section H2:    text-5xl md:text-6xl (48px-60px)
Card Title:    text-2xl (24px)
Body Large:    text-xl md:text-2xl (20px-24px)
Body:          text-base (16px)
Small:         text-sm (14px)
```

### Font Weights
```css
Black:      font-black (900)
Bold:       font-bold (700)
Semibold:   font-semibold (600)
Medium:     font-medium (500)
Regular:    font-normal (400)
```

---

## Component Styles

### Buttons

#### Primary CTA
```tsx
<Button className="bg-gradient-to-r from-teal-500 via-emerald-600 to-green-700
  hover:from-teal-600 hover:via-emerald-700 hover:to-green-800
  text-white font-black text-xl px-14 py-8 rounded-xl
  shadow-[0_20px_50px_rgba(16,185,129,0.5)]">
  Get Started Free
</Button>
```

#### Secondary Button
```tsx
<Button className="bg-white/10 backdrop-blur-md hover:bg-white/20
  text-gray-900 font-bold text-xl px-14 py-8 rounded-xl
  border-2 border-white/30 hover:border-white/50">
  VIEW PRICING
</Button>
```

#### Ghost Button
```tsx
<Button className="text-emerald-600 hover:text-emerald-700
  font-semibold underline underline-offset-4">
  Learn More
</Button>
```

### Cards

#### Feature Card
```tsx
<div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl
  border border-white/10 hover:border-teal-400/50
  hover:bg-white/10 transition-all duration-300">
  {/* Content */}
</div>
```

#### Pricing Card
```tsx
<div className="rounded-2xl border border-emerald-600
  shadow-2xl scale-105 bg-white/40 backdrop-blur-md p-8">
  {/* Content */}
</div>
```

### Icons

#### Icon Container
```tsx
<div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-600
  rounded-2xl flex items-center justify-center">
  <Icon className="w-8 h-8 text-white" />
</div>
```

#### Logo
```tsx
<div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-green-700
  rounded-lg flex items-center justify-center">
  <svg className="w-5 h-5 text-white">
    {/* Arrow icon */}
  </svg>
</div>
```

---

## Layout Guidelines

### Spacing
```css
Section Padding:    py-24 md:py-32 (96px-128px vertical)
Container Padding:  px-4 (16px horizontal)
Card Padding:       p-8 md:p-12 (32px-48px)
Button Padding:     px-14 py-8 (56px x 32px)
```

### Border Radius
```css
Small:   rounded-lg (8px)
Medium:  rounded-xl (12px)
Large:   rounded-2xl (16px)
Hero:    rounded-3xl (24px)
```

### Shadows
```css
Card:    shadow-2xl
Hover:   shadow-[0_20px_60px_rgba(16,185,129,0.7)]
Button:  shadow-[0_20px_50px_rgba(16,185,129,0.5)]
```

---

## Interactive States

### Hover Effects
```css
Button Hover:      scale-105 -translate-y-1
Card Hover:        border-teal-400/50 bg-white/10
Icon Hover:        scale-110
Text Hover:        text-emerald-700
```

### Transitions
```css
Standard:     transition-all duration-300
Fast:         transition duration-200
Slow:         transition-all duration-700
```

### Animations
```css
Shimmer Effect:
.group-hover:translate-x-[100%]
from-white/0 via-white/20 to-white/0

Scale Up:
hover:scale-105 transform transition-transform

Fade In:
opacity-0 animate-fade-in
```

---

## Navigation

### Navbar
```tsx
<nav className="py-5 border-b border-white border-opacity-10">
  {/* Logo: emerald-600 to green-700 gradient */}
  {/* Links: text-white hover:text-emerald-500 */}
  {/* Mobile menu: bg-white/10 backdrop-blur */}
</nav>
```

### Footer
```tsx
<footer className="bg-green-950 border-t border-white border-opacity-10">
  {/* Logo: emerald-600 to green-700 gradient */}
  {/* Text: text-white/70 hover:text-white */}
  {/* Links: hover transition */}
</footer>
```

---

## Content Guidelines

### Tone of Voice
- **Fast**: Use action words (ship, launch, deploy)
- **Efficient**: Emphasize time savings
- **Empowering**: "You can build..."
- **No fluff**: Direct, clear messaging

### Key Messages
- Ship in hours, not months
- Full code ownership
- No vendor lock-in
- Production-ready from day one
- Scale when you're ready

### Example Copy
```
Hero: "Ship Faster, Scale Smarter, Build in Hours, Not Months"
CTA: "Get Started Free" / "Start Building Free"
Features: "Everything you need to ship faster"
Stats: "10hrs Average Setup Time"
```

---

## Iconography

### Preferred Icons
- **Speed**: Zap, Bolt, Rocket
- **Code**: Code, GitBranch, Terminal
- **Success**: Check, CheckCircle
- **Navigation**: ArrowRight, ChevronRight

### Icon Style
- Lucide React icons
- Stroke width: 2
- Size: w-8 h-8 (large), w-5 h-5 (medium), w-4 h-4 (small)
- Color: Match brand (emerald/teal)

---

## Imagery Guidelines

### Photography
- High energy, movement
- Tech/coding environments
- Diverse teams working fast
- Modern, clean workspaces

### Illustrations
- Geometric, angular (speed)
- Green/teal color scheme
- Simple, not cluttered
- Tech-forward aesthetic

---

## Responsive Breakpoints

```css
Mobile:     < 640px (sm)
Tablet:     640px - 1024px (md-lg)
Desktop:    > 1024px (lg)
Wide:       > 1280px (xl)
```

### Mobile Considerations
- Stack cards vertically
- Reduce heading sizes (text-6xl → text-4xl)
- Hamburger menu for navigation
- Touch-friendly buttons (min 48px height)

---

## Accessibility

### Color Contrast
- White on emerald: ✅ AAA compliant
- Gray-900 on white: ✅ AAA compliant
- Emerald-600 on white: ✅ AA compliant

### Interactive Elements
- All buttons have focus states
- All links have hover states
- Forms have proper labels
- Images have alt text

### Keyboard Navigation
- Tab order logical
- Focus visible (ring-emerald-500)
- Skip to content available

---

## Code Examples

### Page Header
```tsx
<h1 className="font-heading tracking-tighter text-6xl sm:text-7xl lg:text-8xl
  font-black mb-8 leading-tight">
  <span className="block text-gray-900">Ship Faster</span>
  <span className="block bg-gradient-to-r from-emerald-600 via-green-700
    to-green-800 bg-clip-text text-transparent">
    Scale Smarter
  </span>
</h1>
```

### Feature Section
```tsx
<section className="relative py-32">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-md
      rounded-3xl p-12 border border-white/30">
      {/* Content */}
    </div>
  </div>
</section>
```

### CTA Section
```tsx
<Link href="/login">
  <Button className="group bg-gradient-to-r from-teal-500 via-emerald-600
    to-green-700 hover:from-teal-600 hover:via-emerald-700
    hover:to-green-800 text-white font-black px-16 py-10">
    Start Building Free
  </Button>
</Link>
```

---

## Brand Voice Examples

### Do's ✅
- "Ship your MVP in hours"
- "Build faster, scale smarter"
- "Production-ready from day one"
- "Full code ownership, zero lock-in"
- "Get started free, scale when ready"

### Don'ts ❌
- "Innovative solutions"
- "Cutting-edge technology"
- "Revolutionizing development"
- "Game-changing platform"
- "Best in class" (unless proven)

---

## File Naming Conventions

### Components
```
PascalCase.tsx         (e.g., HeroSection.tsx)
kebab-case.tsx         (for shared utilities)
index.ts               (for barrel exports)
```

### Pages
```
page.tsx               (Next.js App Router)
layout.tsx             (Layout files)
route.ts               (API routes)
```

### Styles
```
globals.css            (Global styles)
component.module.css   (Component-specific)
```

---

## Git Commit Messages

### Format
```
type: Short description

- Bullet point details
- What changed
- Why it changed
```

### Types
- `feat:` New feature
- `fix:` Bug fix
- `style:` Styling changes
- `docs:` Documentation
- `refactor:` Code refactoring
- `perf:` Performance improvement

### Examples
```
feat: Add user profile settings page

- Created profile settings component
- Added avatar upload functionality
- Integrated with user API

fix: Update Navbar colors to match Velocity theme

- Changed violet-900 to emerald-900
- Changed pink-500 hover to emerald-500
```

---

## Performance Guidelines

### Image Optimization
- Use Next.js `<Image />` component
- WebP format preferred
- Lazy load below fold
- Responsive images

### Code Splitting
- Dynamic imports for heavy components
- Route-based splitting (automatic)
- Lazy load modals and dialogs

### Caching
- Static pages cached at edge
- API responses cached when appropriate
- Prisma queries optimized

---

## Testing Checklist

### Visual Testing
- [ ] Homepage hero displays correctly
- [ ] All buttons have proper emerald/teal colors
- [ ] Hover states work on all interactive elements
- [ ] Mobile menu opens and closes
- [ ] Footer logo matches navbar logo

### Functional Testing
- [ ] Sign up creates new user
- [ ] Login authenticates user
- [ ] Dashboard loads with auth
- [ ] AI generation works
- [ ] File upload works

### Cross-Browser
- [ ] Chrome/Edge (Chromium)
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari
- [ ] Mobile Chrome

---

## Deployment Checklist

Before deploying:
- [ ] Run `pnpm run build` - must pass
- [ ] Check for TypeScript errors
- [ ] Verify environment variables
- [ ] Test critical user flows
- [ ] Review recent commits
- [ ] Update changelog if needed

After deploying:
- [ ] Verify deployment succeeded
- [ ] Test production URL
- [ ] Check error logs
- [ ] Monitor performance
- [ ] Test authentication

---

## Support & Resources

### Internal Resources
- Design files: Figma (if applicable)
- Brand assets: `/public/`
- Component library: `/components/ui/`

### External Resources
- Tailwind CSS: https://tailwindcss.com
- Next.js: https://nextjs.org
- Lucide Icons: https://lucide.dev

### Contact
- Technical: dev@velocitydev.com
- Design: design@velocitydev.com
- Support: support@velocitydev.com

---

**Version**: 1.0.0
**Last Updated**: November 11, 2025
**Status**: ✅ Active - Production Ready
