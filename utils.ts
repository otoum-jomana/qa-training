// 1. وظيفة الجمع
export const add = (a: number, b: number) => a + b;

// 2. وظيفة الطرح
export const subtract = (a: number, b: number) => a - b;

// 3. وظيفة تحويل النص لحروف كبيرة
export const toUpper = (str: string) => str.toUpperCase();

// 4. وظيفة للتأكد من أن القائمة تحتوي على عناصر
export const isArrayEmpty = (arr: any[]) => arr.length === 0;

// 5. وظيفة بسيطة لضرب الأرقام
export const multiply = (a: number, b: number) => a * b;