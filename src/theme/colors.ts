export const colors = {
    light: {
      background: '#F8FAFC',
      card: '#FFFFFF',
      text: '#0F172A',
      textMuted: '#64748B',
      primary: '#EF4444',
      border: '#E2E8F0',
      input: '#FFFFFF',
      danger: '#DC2626',
      success: '#16A34A',
      skeletonBase: '#E2E8F0',
      skeletonHighlight: '#F8FAFC',
    },
    dark: {
      background: '#0F172A',
      card: '#1E293B',
      text: '#F8FAFC',
      textMuted: '#CBD5E1',
      primary: '#F87171',
      border: '#334155',
      input: '#1E293B',
      danger: '#FCA5A5',
      success: '#86EFAC',
      skeletonBase: '#1E293B',
      skeletonHighlight: '#334155',
    },
  } as const;
  
  export type ThemeMode = keyof typeof colors;
  export type AppTheme = (typeof colors)[ThemeMode];