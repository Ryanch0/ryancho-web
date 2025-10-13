// TagList.stories.tsx
// 'use client';

import type { Meta, StoryObj } from '@storybook/nextjs'

import TagList from './TagList'

const meta: Meta<typeof TagList> = {
  title: 'TagList', // App Router 구조에 맞게 경로명 작성 가능
  component: TagList,
  parameters: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof TagList>

export const Default: Story = {
  args: {}
}
