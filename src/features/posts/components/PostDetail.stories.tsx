// PostDetail.stories.tsx
// 'use client';

import type { Meta, StoryObj } from '@storybook/nextjs'

import PostDetail from './PostDetail'

const meta: Meta<typeof PostDetail> = {
  title: 'PostDetail', // App Router 구조에 맞게 경로명 작성 가능
  component: PostDetail,
  parameters: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof PostDetail>

export const Default: Story = {
  args: {}
}
