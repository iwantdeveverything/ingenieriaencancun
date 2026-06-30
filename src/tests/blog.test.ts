import { expect, test } from 'vitest';
import { collections } from '../content.config.ts';

test('Blog collection schema validates correct data', () => {
  const schema = collections.blog.schema;
  
  const validData = {
    title: 'Test Post',
    description: 'A test description',
    date: new Date(),
    author: 'John Doe',
    image: '/test.jpg'
  };
  
  const result = schema.safeParse(validData);
  expect(result.success).toBe(true);
});

test('Blog collection schema fails on missing required fields', () => {
  const schema = collections.blog.schema;
  
  const invalidData = {
    title: 'Test Post',
    // missing description, date, author
  };
  
  const result = schema.safeParse(invalidData);
  expect(result.success).toBe(false);
});

test('Blog collection schema allows missing optional fields', () => {
  const schema = collections.blog.schema;
  
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
