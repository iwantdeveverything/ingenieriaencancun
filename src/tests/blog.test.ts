import { expect, test } from 'vitest';
import { collections } from '../content.config.ts';

interface ParseableSchema {
  safeParse(data: unknown): { success: boolean };
}

function getBlogSchema(): ParseableSchema {
  const raw = collections.blog.schema;
  if (typeof raw === 'function') {
    throw new Error('Schema is a function — cannot call safeParse in unit test context');
  }
  return raw as unknown as ParseableSchema;
}

test('Blog collection schema validates correct data', () => {
  const schema = getBlogSchema();

  const validData = {
    title: 'Test Post',
    description: 'A test description',
    date: new Date(),
    author: 'John Doe',
    image: '/test.jpg',
  };

  const result = schema.safeParse(validData);
  expect(result.success).toBe(true);
});

test('Blog collection schema fails on missing required fields', () => {
  const schema = getBlogSchema();

  const invalidData = {
    title: 'Test Post',
    // missing description, date, author
  };

  const result = schema.safeParse(invalidData);
  expect(result.success).toBe(false);
});

test('Blog collection schema allows missing optional fields', () => {
  const schema = getBlogSchema();

  const validDataWithoutImage = {
    title: 'Test Post',
    description: 'A test description',
    date: new Date(),
    author: 'John Doe',
    // image is omitted
  };

  const result = schema.safeParse(validDataWithoutImage);
  expect(result.success).toBe(true);
});
