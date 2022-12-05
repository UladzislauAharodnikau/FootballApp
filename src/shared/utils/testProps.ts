import {AccessibilityProps} from 'react-native';

interface TestProps extends AccessibilityProps {
  testID?: string;
}

export const testProps = (uniqueId: string): TestProps => ({
  accessible: true,
  testID: uniqueId,
  accessibilityLabel: uniqueId,
});
