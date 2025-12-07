# EGIV Gaming Lounge - Enterprise Architecture

## 📁 هيكل المشروع الاحترافي

```
egiv-gaming-lounge/
├── public/                          # Static assets
│   ├── logo.png
│   ├── back2.png
│   └── Back.png
│
├── src/
│   ├── core/                        # Core business logic
│   │   ├── types/                   # TypeScript types & interfaces
│   │   │   ├── booking.types.ts     # Booking related types
│   │   │   ├── navigation.types.ts  # Navigation types
│   │   │   ├── common.types.ts      # Shared common types
│   │   │   └── index.ts            # Central export
│   │   │
│   │   ├── constants/              # Application constants
│   │   │   ├── navigation.constants.ts
│   │   │   ├── booking.constants.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── config/                 # Configuration files
│   │   │   └── app.config.ts       # App-wide config
│   │   │
│   │   └── index.ts                # Core exports
│   │
│   ├── components/                 # React components
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── Stepper.tsx         # Booking stepper
│   │   │   ├── Button.tsx          # Button component
│   │   │   ├── Card.tsx            # Card component
│   │   │   ├── Input.tsx           # Input component
│   │   │   └── index.ts
│   │   │
│   │   ├── common/                 # Common components
│   │   │   └── (future components)
│   │   │
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── Sidebar.tsx             # Sidebar
│   │   ├── Footer.tsx              # Footer
│   │   ├── Hero.tsx                # Hero section
│   │   ├── PageTransition.tsx      # Page transitions
│   │   ├── ScrollReveal.tsx        # Scroll animations
│   │   ├── AnimatedCard.tsx        # Animated cards
│   │   ├── BookingCard.tsx         # Booking card
│   │   ├── FilterBar.tsx           # Filter bar
│   │   └── index.ts                # Components export
│   │
│   ├── layouts/                    # Layout components
│   │   ├── MainLayout.tsx          # Main page layout
│   │   └── index.ts
│   │
│   ├── pages/                      # Page components (routes)
│   │   ├── HomePage.tsx
│   │   ├── AboutUsPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ServicesPageCopy.tsx    # Booking step 1
│   │   ├── BookingStep2.tsx        # Booking step 2
│   │   ├── BookingStep3.tsx        # Booking step 3
│   │   ├── BookingConfirmation.tsx
│   │   ├── BookingDetails.tsx
│   │   ├── SharedRoomBooking.tsx
│   │   ├── SharedBookingConfirmation.tsx
│   │   ├── ConsultationBooking.tsx
│   │   ├── MyBookings.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── FurnitureViewerPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── OTPVerificationPage.tsx
│   │   ├── AccountSettingsPage.tsx
│   │   └── SplashScreen.tsx
│   │
│   ├── features/                   # Feature modules
│   │   ├── AIRoomDesignSection.tsx
│   │   ├── ChallengeSection.tsx
│   │   ├── RoomCarouselSection.tsx
│   │   └── TestimonialsSection.tsx
│   │
│   ├── routes/                     # Routing configuration
│   │   ├── paths.ts                # Route paths constants
│   │   ├── config.tsx              # Routes configuration
│   │   └── index.ts                # Routes export
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── useScrollAnimation.ts
│   │   └── (future hooks)
│   │
│   ├── services/                   # API & business services
│   │   └── (future services)
│   │
│   ├── utils/                      # Utility functions
│   │   ├── stepper.utils.ts
│   │   └── index.ts
│   │
│   └── assets/                     # Assets (images, fonts, etc.)
│       └── images/
│
├── App.tsx                         # Main App component
├── index.tsx                       # App entry point
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies

```

## 🎯 مبادئ التنظيم

### 1. **Separation of Concerns**
- فصل الـ Types عن الـ Logic عن الـ UI
- كل ملف له مسؤولية واحدة واضحة

### 2. **Reusability**
- UI Components قابلة لإعادة الاستخدام (Button, Card, Input, Stepper)
- Utility functions مركزية
- Layout components مشتركة

### 3. **Type Safety**
- TypeScript types محددة بوضوح
- No `any` types
- Interfaces واضحة لكل component

### 4. **Scalability**
- هيكل قابل للتوسع
- Feature-based organization
- Lazy loading للـ pages

### 5. **Maintainability**
- Import paths واضحة ومنظمة
- Central exports من كل folder
- Documentation في كل ملف

## 🚀 كيفية الاستخدام

### استيراد Types:
```typescript
import type { BookingFormData, BookingStep } from '@/core/types';
```

### استيراد Constants:
```typescript
import { NAV_LINKS, CARDS_DATA } from '@/core/constants';
```

### استيراد Routes:
```typescript
import { ROUTES } from '@/routes';
```

### استيراد UI Components:
```typescript
import { Button, Card, Input, Stepper } from '@/components/ui';
```

### استيراد Layout:
```typescript
import { MainLayout } from '@/layouts';
```

### استيراد Utils:
```typescript
import { createBookingSteps } from '@/utils';
```

## 📝 مثال صفحة كاملة

```typescript
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Stepper, Button, Card } from '@/components/ui';
import { createBookingSteps } from '@/utils';
import { ROUTES } from '@/routes';
import type { BookingFormData } from '@/core/types';

export const BookingPage: FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    time: '',
    numberOfPeople: 4,
    location: '',
  });

  const steps = createBookingSteps(1);

  const handleSubmit = () => {
    navigate(ROUTES.BOOKING_STEP_2);
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-20 px-4">
        <Stepper steps={steps} />
        <Card>
          <form onSubmit={handleSubmit}>
            {/* Form content */}
            <Button type="submit">التالي</Button>
          </form>
        </Card>
      </section>
    </MainLayout>
  );
};
```

## 🔄 Migration Plan

### Phase 1: ✅ Infrastructure
- [x] Create folder structure
- [x] Setup types & interfaces
- [x] Create router configuration
- [x] Build layout components
- [x] Create UI components

### Phase 2: 🔄 Migration (بدون تغيير الاستايل)
- [ ] Update imports in existing pages
- [ ] Replace inline styles with UI components
- [ ] Move assets to proper location
- [ ] Test all routes

### Phase 3: 🎯 Enhancement
- [ ] Add error boundaries
- [ ] Implement auth guards
- [ ] Add loading states
- [ ] Optimize performance

## 🎨 UI Components

### Button
```typescript
<Button variant="primary" size="lg" onClick={handleClick}>
  النص
</Button>
```

### Card
```typescript
<Card variant="dark">
  {/* محتوى */}
</Card>
```

### Input
```typescript
<Input 
  label="الاسم"
  value={value}
  onChange={handleChange}
  error={error}
/>
```

### Stepper
```typescript
<Stepper steps={createBookingSteps(2)} />
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Technologies

- **React 19.2.1** - UI Library
- **TypeScript 5.8.2** - Type Safety
- **Vite 6.2.0** - Build Tool
- **React Router DOM 7.10.1** - Routing
- **Tailwind CSS** - Styling
- **Lottie Web** - Animations
- **FontAwesome** - Icons

## 🎯 Benefits

1. **Type Safety**: Full TypeScript coverage
2. **Reusability**: DRY components
3. **Maintainability**: Clear structure
4. **Scalability**: Easy to extend
5. **Performance**: Lazy loading & optimizations
6. **Developer Experience**: Clear imports & organization

---

**Created with ❤️ for EGIV Gaming Lounge**
