// PostList.stories.tsx
// 'use client';

import type { Meta, StoryObj } from '@storybook/nextjs'

import PostList from './PostList'

const meta: Meta<typeof PostList> = {
  title: 'PostList', // App Router 구조에 맞게 경로명 작성 가능
  component: PostList,
  parameters: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof PostList>

export const Default: Story = {
  args: {}
}
