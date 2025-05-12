# @squer/demo-prime

A reusable Angular component library built on [PrimeNG](https://primeng.org), published and installable via npm. Includes ready-to-use UI components like `<demo-button>`, with PrimeNG features and styling.

## Installation

```bash
npm install @squer/demo-prime
npm install primeng primeicons
```

```js
"styles": [
  "node_modules/primeng/resources/themes/lara-light-indigo/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  "src/styles.css"
]
```

## Import the Component
   If you're using Angular standalone components:

```typescript
import { DemoButtonComponent } from '@squer/demo-prime';
```

If you're using NgModules:

```typescript
import { DemoPrimeModule } from '@squer/demo-prime';

@NgModule({
imports: [DemoPrimeModule]
})
export class YourModule {}

```

## Template Usage

```html
<demo-button label="Click Me"></demo-button>
```


## Development & Preview

### Run the preview app (dev mode)
```bash
npm run preview:dev
```

### Build the Library
```bash
npm run build:lib
```

### Publish to npm
```bash
npm run publish:lib
```
