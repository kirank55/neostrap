import type { Meta, StoryObj } from "@storybook/react";

import {
  NeoTabs,
  NeoTabsList,
  NeoTabsTrigger,
  NeoTabsContent,
  NeoTabsCarousel,
} from "@/components/ui/NeoTabs";
import { NeoButton } from "@/components/ui/NeoButton";

const meta = {
  title: "UI/Tabs",
  component: NeoTabs,
  tags: ["autodocs"],
} satisfies Meta<typeof NeoTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NeoTabs defaultValue="tab1">
      <NeoTabsList>
        <NeoTabsTrigger value="tab1">Tab 1</NeoTabsTrigger>
        <NeoTabsTrigger value="tab2">Tab 2</NeoTabsTrigger>
        <NeoTabsTrigger value="tab3">Tab 3</NeoTabsTrigger>
      </NeoTabsList>

      <div className="mt-4">
        <NeoTabsContent value="tab1">
          <p className="mb-4">This is the first tab's content.</p>
          <NeoButton variant="brutal" size="sm">Primary</NeoButton>
        </NeoTabsContent>
        <NeoTabsContent value="tab2">Content for the second tab.</NeoTabsContent>
        <NeoTabsContent value="tab3">Third tab content.</NeoTabsContent>
      </div>
    </NeoTabs>
  ),
};

export const Carousel: Story = {
  render: () => (
    <NeoTabs defaultValue="one">
      <NeoTabsList>
        <NeoTabsTrigger value="one">One</NeoTabsTrigger>
        <NeoTabsTrigger value="two">Two</NeoTabsTrigger>
        <NeoTabsTrigger value="three">Three</NeoTabsTrigger>
      </NeoTabsList>

      <NeoTabsCarousel>
        <NeoTabsContent value="one">
          <div className="p-4">Panel One — rich content can go here.</div>
        </NeoTabsContent>
        <NeoTabsContent value="two">
          <div className="p-4">Panel Two — try switching tabs to see the carousel animation.</div>
        </NeoTabsContent>
        <NeoTabsContent value="three">
          <div className="p-4">Panel Three — works great for multi-step content.</div>
        </NeoTabsContent>
      </NeoTabsCarousel>
    </NeoTabs>
  ),
};
