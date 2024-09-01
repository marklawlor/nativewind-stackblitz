import fs from 'node:fs';
import { View } from 'react-native';
import { screen, render, enableCompilerLogging } from 'nativewind/test';
import config from './tailwind.config';

// This tells NativeWind log information to the console
enableCompilerLogging(true);

const testID = 'nativewind';
const css = fs.readFileSync('./global.css', 'utf-8');

it('should work', async () => {
  await render(<View testID={testID} className="text-red-500" />, {
    css,
    config,
  });

  expect(screen.getByTestId(testID).props).toStrictEqual({
    testID,
    children: undefined,
    style: {
      color: 'rgba(239, 68, 68, 1)',
    },
  });
});
