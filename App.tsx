import './src/i18n';
import { AppProviders } from '@/app/AppProviders';
import { AppNavigator } from '@/navigation/AppNavigator';

export default function App() {
  return (
    <AppProviders>
      <AppNavigator />
    </AppProviders>
  );
}