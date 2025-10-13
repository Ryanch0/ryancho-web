// PostItem.stories.tsx
// 'use client';

import type { Meta, StoryObj } from '@storybook/nextjs'

import PostItem from './PostItem'

const meta: Meta<typeof PostItem> = {
  title: 'PostItem', // App Router 구조에 맞게 경로명 작성 가능
  component: PostItem,
  parameters: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof PostItem>

export const Default: Story = {
  args: {}
}
