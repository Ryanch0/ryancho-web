// Header.stories.tsx
// 'use client';

import type { Meta, StoryObj } from '@storybook/nextjs'

import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Header', // App Router 구조에 맞게 경로명 작성 가능
  component: Header,
  parameters: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
