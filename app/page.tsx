"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10">
          ChaseGPT Weather AI
        </Text>
        <Subtitle className="text-base sm:text-xl text-center">
          Powered by OpenAI GPT4, Next.js 13.3, Tailwind CSS, Tremor 2.0 + more!
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* CityPicker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
